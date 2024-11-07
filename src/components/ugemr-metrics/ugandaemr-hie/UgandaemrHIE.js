import React, {useEffect, useState} from 'react';
import "../ugandaemr-poc/UgandaemrPOC.css";
import {
  CheckmarkOutline,
  Store,
  DevicesApps,
  GroupPresentation,
  UserMultiple,
  ChevronLeft, ChevronRight
} from "@carbon/react/icons"
import "@carbon/charts/styles.css";
import { DataTableComponent } from "../../data-table/data-table.component";
import ViewButton from "../../home/view-button";
import {exchangeHeaders, fourXheaders, getProfiles} from "../../../constants";
import dayjs from "dayjs";
import { DateFilterInput } from "../../date-picker/date-picker"
import {ProfileCard} from "../../hie-helper-components/profile-card";
import {Button} from "@carbon/react";
import "./ugandaemr-hie.css";

const UgandaemrHIE = (props) => {
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const [dateArray, setDateArray] = useState([currentDate, currentDate]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { exchangeProfiles, maxPosition } = getProfiles();
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [maxIndex] = useState(maxPosition);
  const [profiles, setProfiles] = useState(exchangeProfiles);
  const handleOnChangeRange = (dates) => {
    setDateArray(dates);
  };

  const updateDashboardMetrics = () => {
    fetchData();
  };

  const fetchData = async () => {
    const from = dayjs(dateArray[0]).format("YYYY-MM-DD")
    const to = dayjs(dateArray[1]).format("YYYY-MM-DD")
    try {
      let url;
      if(selectedProfile) {
        url = `https://ugisl.mets.or.ug/hie_stats?and=(post_date.gte.${from},post_date.lte.${to},hie.in.(${ '"' + selectedProfile?.hieName?.join('","') + '"'}))`
      } else {
        url = `https://ugisl.mets.or.ug/hie_stats?and=(post_date.gte.${from},post_date.lte.${to})`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const facilityDetailsPlus = () => {
    const facility = [];
    let count = 0;
    data?.forEach((uniqueFacility, index) => {

      facility.push({
        id: `${index++}`,
        no: `${index++}`,
        facility_id: uniqueFacility?.fuid,
        facility: uniqueFacility?.facilityname,
        hie: uniqueFacility?.hie,
        records: uniqueFacility?.posts,
        date: uniqueFacility?.post_date
      })
    });

    return { facility, count: data?.length };
  }

  useEffect(() => {
    fetchData();
  }, [selectedProfile]);

  const moveRight = () => {
    let newIndex;
    if (currentIndex + 1 <= maxIndex) {
      newIndex = currentIndex + 1;
    } else {
      newIndex = currentIndex;
    }

    setCurrentIndex(newIndex);
  };

  const moveLeft = () => {
    let newIndex;
    if (currentIndex - 1 >= 0) {
      newIndex = currentIndex - 1;
    } else {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  const handleSelectedProfile = (profile) => {
    setSelectedProfile(profile);
  }
  return (
    <>

      <div className="switcher-date-container">
        <div></div>
        <div className="date-container-width date-input-container">
          <DateFilterInput
            handleOnChangeRange={handleOnChangeRange}
            updateDashboard={updateDashboardMetrics}
            dateValue={dateArray}
          />
        </div>
      </div>

      <div className="four-div-carousel">
            <div className="carousel-container">
              <Button
                as="div"
                kind="ghost"
                className="carousel-left-control"
                hasIconOnly
                renderIcon={ChevronLeft}
                onClick={moveLeft}
              />
              <div className="carousel-right-control-div">
                <Button
                  as="div"
                  kind="ghost"
                  className="carousel-right-control"
                  hasIconOnly
                  renderIcon={ChevronRight}
                  onClick={moveRight}
                />
              </div>

              <div
                className="carousel-content"
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
              >
                {profiles?.map((fhirProfile, index) => (
                  <div className={`carousel-item ${fhirProfile?.className ?? ""}`} key={index}>
                    <ProfileCard
                      profile={fhirProfile}
                      onClickHandler={handleSelectedProfile}
                      selectedClass={
                        selectedProfile === fhirProfile ? "selected" : ""
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>



      <div className="item-chart-container">
        <div className="item-chart">
          <div className="cds--cc--title">
            <p className="title" role="heading" aria-level="2">
              {selectedProfile?.name ?? "HIE"} Transactions
              ({dayjs(dateArray[0]).format("DD/MMM/YYYY")} - {dayjs(dateArray[1]).format("DD/MMM/YYYY")})
            </p>
          </div>
          <DataTableComponent rows={facilityDetailsPlus().facility}
                              headers={exchangeHeaders} indicator={false}
                              showDownload={false}/>
        </div>
      </div>
    </>
  );
};

export default UgandaemrHIE;

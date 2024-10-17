import React, {useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons not appearing correctly
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;



const MapComponent = (props) => {
  const { facilityArray } = props;
  const facilityLocations = [];
  facilityArray?.forEach((record, index) => {
    if(record?.long !== null && record?.lat !== null) {
      facilityLocations.push({
        id: `${index++}`,
        no: `${index++}`,
        facility: record?.facility,
        long: record?.long,
        lat: record?.lat
      });
    }
  });

    const SetMapBounds = ({ locations }) => {
    const map = useMap();

    useEffect(() => {
      if (locations?.length > 0) {
        const bounds = L.latLngBounds(locations?.map(loc => [loc.lat, loc.long]));
        map.fitBounds(bounds);
      }
    }, [facilityLocations, map]);

    return null;
  };

  return (
    <MapContainer  zoom={10} style={{ height: '700px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {facilityLocations?.map((facility, index) => (
        <Marker key={index} position={[facility?.lat, facility?.long]}>
          <Popup>{facility?.facility}</Popup>
        </Marker>
      ))}
      <SetMapBounds locations={facilityLocations} />
    </MapContainer>
  );
};

export default MapComponent;

import React from 'react';
import "./Metrics.css";
import {Content} from "@carbon/react";
const Metrics = () => {
    return (
        <>
            <header className="header">
                <div className="header-label"> UgandaEMR+ Metrics</div>
            </header>
            <Content>
              <div className="tile-container">
                <div className="tile tile-margin"></div>
                <div className="tile tile-margin"></div>
                <div className="tile tile-margin"></div>
                <div className="tile"></div>
              </div>

              <div className="item-chart-container">
                <div className="item-chart item-chart-left"></div>
                <div className="item-chart"></div>
              </div>
            </Content>
        </>
    );
};

export default Metrics;

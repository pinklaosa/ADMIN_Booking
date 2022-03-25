import React from "react";
import { NavLink } from 'react-router-dom';

import "./Carrier.css";
const Carrier = () => {
  return (
    <div className="select">
      <header className="app-Header">Add Carrier Ship</header>
      <div className="dataCarrier">
      <select class="form-select">
        <option selected>Select Ship</option>
        <option value="1">All</option>
        <option value="1">EVERGREEN</option>
        <option value="2">MAERSK</option>
        <option value="3">ONE</option>
        <option value="3">CMA-CGM</option>
        <option value="3">COSCO</option>
      </select>

      <input type="text" id="shipID"  placeholder="Ship ID" class="form-select" />

      <select class="form-select">
        <option selected>Select Country</option>
        <option value="1">Thailand</option>
      </select>

      <select class="form-select">
        <option value="1">Available</option>
        <option value="1">Unavailable</option>
      </select>

      <select class="form-select">
        <option selected>Port of Shipment</option>
        <option value="1">Bangkok Port</option>
      </select>

      <select class="form-select">
        <option selected>Port of Destination</option>
        <option value="1">Bangkok Port</option>
        <option value="2">Laem Chabang Port</option>
        <option value="3">Chiang Sean Port</option>
        <option value="4">Chiang Khong Port</option>
        <option value="4">Ranong Port</option>
      </select>

      <input type="date" id="calender" class="form-select" />
      <input type="text" id="logo" class="form-select" placeholder="URL Logo"/>
    </div>
    <div className="btnadd">
    <button className="btn btn-success">Add Carrier</button>
    </div>
    <hr style={{width:"50%",marginLeft:"470px"}}/>
    <div className="btnshow">
    <NavLink  to="/showcarrier" exact>
      <button className="btn btn-secondary">Show Carrier</button>
      </NavLink> 
    </div>
    </div>
  );
};
export default Carrier;

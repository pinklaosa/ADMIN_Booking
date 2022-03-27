import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./Carrier.css";
const Carrier = () => {
  const [ship, setShip] = useState("");
  const [shipID, setShipID] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("available");
  const [shipment, setShipment] = useState("");
  const [destination, setDestination] = useState("");
  const [trantime, setTrantime] = useState("");
  const [date, setDate] = useState("");

  const addCargo = () => {
    if (
      ship == "" ||
      country == "" ||
      shipment == "" ||
      destination == "" ||
      date == ""
    ) {
      alert("Please fill full!");
    } else {
      axios
        .post("http://localhost:3001/addship", {
          ship: ship,
          shipID: shipID,
          country: country,
          status: status,
          shipment: shipment,
          destination: destination,
          trantime: trantime,
          date: date,
        })
        .then((response) => {
          if(response.data.status === 200){
            alert(response.data.msg);
            window.location = "/carrier";
          }
        });
    }
  };

  return (
    <div className="select">
      <header className="app-Header">Add Carrier Ship</header>
      <div className="dataCarrier">
        <select
          class="form-select"
          onChange={(e) => setShip(e.target.value.toLowerCase())}
        >
          <option selected value="">
            Select Ship
          </option>
          <option>EVERGREEN</option>
          <option>MAERSK</option>
          <option>ONE</option>
          <option>CMA-CGM</option>
          <option>COSCO</option>
        </select>

        <input
          required
          type="text"
          id="shipID"
          placeholder="Ship ID"
          class="form-select"
          onChange={(e) => setShipID(e.target.value.toLowerCase())}
        />

        <select
          class="form-select"
          onChange={(e) => setCountry(e.target.value.toLowerCase())}
        >
          <option selected value="">
            Select Country
          </option>
          <option>Thailand</option>
        </select>

        <select
          class="form-select"
          onChange={(e) => setStatus(e.target.value.toLowerCase())}
        >
          <option selected value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        <select
          class="form-select"
          onChange={(e) => setShipment(e.target.value.toLowerCase())}
        >
          <option selected value="">
            Port of Shipment
          </option>
          <option>Bangkok Port</option>
        </select>

        <select
          class="form-select"
          onChange={(e) => setDestination(e.target.value.toLowerCase())}
        >
          <option selected value="">
            Port of Destination
          </option>
          <option>Bangkok Port</option>
          <option>Laem Chabang Port</option>
          <option>Chiang Sean Port</option>
          <option>Chiang Khong Port</option>
          <option>Ranong Port</option>
        </select>

        <input
          required
          type="number"
          placeholder="Transection Time (Day)"
          class="form-select"
          onChange={(e) => setTrantime(e.target.value + "days")}
        />
        <input
          type="date"
          id="calender"
          class="form-select"
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="btnadd">
        <button className="btn btn-success" onClick={addCargo}>
          Add Carrier
        </button>
      </div>
      <hr style={{ width: "50%", marginLeft: "470px" }} />
      <div className="btnshow">
        <NavLink to="/showcarrier" exact>
          <button className="btn btn-secondary">Show Carrier</button>
        </NavLink>
      </div>
    </div>
  );
};
export default Carrier;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const EditeCarrier = () => {
  let { id } = useParams();
  const [serviceData, setServiceData] = useState([]);
  const [ship, setShip] = useState("");
  const [shipID, setShipID] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");
  const [shipment, setShipment] = useState("");
  const [destination, setDestination] = useState("");
  const [trantime, setTrantime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/editservice/" + id).then((response) => {
      if (response.data.status === 200) {
        setServiceData(response.data.result);
        setShip(response.data.result[0].serviceName);
        setShipID(response.data.result[0].shipId);
        setCountry(response.data.result[0].country);
        setShipment(response.data.result[0].portShipment);
        setDestination(response.data.result[0].portDestination);
        setTrantime(response.data.result[0].transactionTime);
        setStatus(response.data.result[0].status);
      }
    });
  }, []);

  return (
    <div className="select1">
      <header className="app-Header">Edite Carrier</header>
      {serviceData.length > 0 ? (
        <div>
          <div className="dataCarrier1">
            <select
              class="form-select"
              value={ship}
              onChange={(e) => setShip(e.target.value.toLowerCase())}
            >
              <option value="evergreen">EVERGREEN</option>
              <option value="maersk">MAERSK</option>
              <option value="one">ONE</option>
              <option value="cma-cgm">CMA-CGM</option>
              <option value="cosco">COSCO</option>
            </select>

            <input
              value={shipID}
              type="text"
              id="shipID"
              placeholder="Ship ID"
              class="form-select"
              onChange={(e) => setShipID(e.target.value.toLowerCase())}
            />

            <select class="form-select" value={country}>
              <option>Thailand</option>
            </select>

            <select
              class="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value.toLowerCase())}
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>

            <select class="form-select" value={shipment}>
              <option value="bangkok Port">Bangkok Port</option>
            </select>

            <select
              class="form-select"
              value={destination}
              onChange={(e) => setDestination(e.target.value.toLowerCase())}
            >
              <option value="bangkok Port">Bangkok Port</option>
              <option value="laem chabang port">Laem Chabang Port</option>
              <option value="chiang sean port">Chiang Sean Port</option>
              <option value="chiang khong port">Chiang Khong Port</option>
              <option value="ranong port">Ranong Port</option>
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
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="btnsave">
            <button
              style={{ width: "120px" }}
              className="btn btn-success"
              onClick={() => {
                axios
                  .post("http://localhost:3001/updateservice", {
                    id: id,
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
                    if (response.data.status === 200) {
                      alert(response.data.msg);
                    }
                  });
              }}
            >
              SAVE
            </button>
            <button
              style={{ marginLeft: "15px", width: "120px" }}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>

          <hr style={{ width: "50%", marginLeft: "470px" }} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EditeCarrier;

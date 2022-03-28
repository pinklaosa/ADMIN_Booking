import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./ShowCarrier.css";
const ShowCarrier = () => {
  const [serviceData, setServiceData] = useState([]);


  const reformatDate = (datetime) =>
    datetime.getFullYear() +
    "-" +
    (datetime.getMonth() + 1) +
    "-" +
    datetime.getDate();

  useEffect(() => {
    axios.get("http://localhost:3001/adminservice").then((response) => {
      if (response.data.status === 200) {
        setServiceData(response.data.result);
      }
    });
  }, []);
return (
    <div className="" style={{ padding: "20px 150px" }}>
      <div className="showHeader">
        <h1>Show Carrier</h1>

      </div>
      <div className="TableBook">
        <table class="table">
          <thead className="bg-light">
            <tr>
              <th scope="col">SERVICE</th>
              <th scope="col">SHIP ID</th>
              <th scope="col">COUNTRY</th>
              <th scope="col">PORT OF SHIPMENT</th>
              <th scope="col">PORT OF DESTINATION</th>
              <th scope="col">TRANSIT TIME</th>
              <th scope="col">STATUS</th>
              <th scope="col">DATE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.length > 0 ? (
              serviceData.map((data) => (
                <tr>
                  <th className="row1">
                    <div className="d-flex align-item-center">
                      <img
                        src={
                          "/logo_service/logo_service/" +
                          data.serviceName +
                          ".png"
                        }
                        alt=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: 50 / 2,
                        }}
                      ></img>
                      <div className="nameSer1">
                        <p
                          className="fw-bold mb-1"
                          style={{ marginLeft: "30px", marginTop: "8px" }}
                        >
                          {data.serviceName.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </th>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {data.shipId.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {data.country.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {data.portShipment.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {data.portDestination.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {data.transactionTime.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {data.status.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {reformatDate(new Date(data.date))}
                    </p>
                  </td>
                  <td>
                    <Link to={`/showcarrier/${data.id}`}>
                      <button type="button" class="btn btn-success">
                        EDIT
                      </button>
                    </Link>

                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        axios
                          .get("http://localhost:3001/delservice/" + data.id)
                          .then((response) => {
                            if (response.data.status === 200) {
                              alert(response.data.msg);
                              window.location = "/showcarrier";
                            }
                          });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>

      <hr />
      <NavLink to="carrier" exact>
        <button className="btn btn-success">Add Carrier</button>
      </NavLink>
    </div>
  );
};

export default ShowCarrier;

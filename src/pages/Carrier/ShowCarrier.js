import React from "react";
import { NavLink } from 'react-router-dom';

import './ShowCarrier.css';
function ShowCarrier() {
  return (
    <div className="container">

      <div className="showHeader">
        <h1>Show Carrier</h1>
      </div>
      <div>
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
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="row1">
                <div className="d-flex align-item-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Evergreen_Roundel.svg/1200px-Evergreen_Roundel.svg.png"
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
                      {" "}
                      EVERGREEN
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  EVG_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row2">
                <div className="d-flex align-item-center">
                  <img
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062012/maersk.jpg?itok=uYKEd5j9"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  ></img>
                  <div className="nameSer2">
                    <p
                      className="fw-bold mb-1"
                      style={{ marginLeft: "40px", marginTop: "8px" }}
                    >
                      MAERSK
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  MAR_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th className="row3">
                <div className="d-flex align-item-center">
                  <img
                    src="https://seekvectorlogo.com/wp-content/uploads/2018/05/ocean-network-express-one-vector-logo-small.png"
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
                      style={{ marginLeft: "50px", marginTop: "8px" }}
                    >
                      ONE
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  ONE_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th className="row4">
                <div className="d-flex align-item-center">
                  <img
                    src="https://www.cma-cgm.com/static/TH/pictures/CMA%20CGM%2012.png"
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
                      {" "}
                      CMA-CGM
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  CMA_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr/>
      <NavLink  to="carrier" exact>                
      <button className="btn btn-success">Add Carrier</button>
      </NavLink>  
    </div>
  );
}

export default ShowCarrier;

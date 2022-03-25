import React from "react";
import "./Order.css";
const Order = () => {
  return (
    <div className="container1">
      <div className="headOrder">
        <h1>Order Manage</h1>
      </div>

      <div className="tableOrder">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ORDER ID</th>
              <th scope="col">DATE/TIME</th>
              <th scope="col">STATUS</th>
              <th scope="col">ORDER DETAIL</th>
              <th scope="col">PAYMENT</th>
              <th scope="col">CHANGE STATUS</th>

              
              
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <p style={{ marginTop: "10px" }}>1011000111</p>
              </th>
              <td>
                <p style={{ marginTop: "10px" }}>02/03/2022 13:45 PM</p>
              </td>

              <td>
                <p style={{ marginTop: "10px", color: "orange" }}>Pending</p>
              </td>
              <td>
                <p style={{ marginTop: "6px" }}>
                  <a
                    class="btn btn-secondary"
                    style={{ width: "80px", marginLeft: "0px" }}
                    data-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    View
                  </a>
                </p>
                <div class="row">
                  <div class="col">
                    <div
                      class="collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div
                        class="card card-body"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "15px",
                          textAlign: "left",
                        }}
                      >
                        Service ship : <br />
                        Country : <br />
                        Port of Shipment : <br />
                        Port of Destination : <br />
                        Container Type : <br />
                        Container Size : <br />
                        Container Quantity :
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
              <button className="btn btn-primary">View</button>
              </td>
              <td>
                <div className="status">
                  <select class="form-selectt">
                    <option selected>Change Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Complete</option>
                    <option value="3">Canceled</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p style={{ marginTop: "10px" }}>1011000112</p>
              </th>
              <td>
                <p style={{ marginTop: "10px" }}>15/02/2022 14:25 PM</p>
              </td>
              <td>
                <p style={{ marginTop: "10px", color: "green" }}>Complete</p>
              </td>
              <td>
                <p style={{ marginTop: "6px" }}>
                  <a
                    class="btn btn-secondary"
                    style={{ width: "80px" }}
                    data-toggle="collapse"
                    href="#multiCollapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    View
                  </a>
                </p>
                <div class="row">
                  <div class="col">
                    <div
                      class="collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div
                        class="card card-body"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "15px",
                          textAlign: "left",
                        }}
                      >
                        Service ship : <br />
                        Country : <br />
                        Port of Shipment : <br />
                        Port of Destination : <br />
                        Container Type : <br />
                        Container Size : <br />
                        Container Quantity :
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <button className="btn btn-primary">View</button>
              </td>
              <td>
                <div className="status">
                  <select class="form-selectt">
                    <option selected>Change Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Complete</option>
                    <option value="3">Canceled</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p style={{ marginTop: "10px" }}>1011000113</p>
              </th>
              <td>
                <p style={{ marginTop: "10px" }}>11/02/2022 12:40 PM</p>
              </td>

              <td>
                <p style={{ marginTop: "10px", color: "red" }}>Canceled</p>
              </td>
              <td>
                <p style={{ marginTop: "6px" }}>
                  <a
                    class="btn btn-secondary"
                    style={{ width: "80px" }}
                    data-toggle="collapse"
                    href="#multiCollapseExample3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample3"
                  >
                    View
                  </a>
                </p>
                <div class="row">
                  <div class="col" style={{ width: "250px" }}>
                    <div
                      class="collapse multi-collapse"
                      id="multiCollapseExample3"
                    >
                      <div
                        class="card card-body"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "15px",
                          textAlign: "left",
                        }}
                      >
                        Service ship : <br />
                        Country : <br />
                        Port of Shipment : <br />
                        Port of Destination : <br />
                        Container Type : <br />
                        Container Size : <br />
                        Container Quantity :
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
              <button className="btn btn-primary">View</button>
              </td>
              <td>
                <div className="status">
                  <select class="form-selectt">
                    <option selected>Change Status</option>
                    <option value="1">Pending</option>
                    <option value="2">Complete</option>
                    <option value="3">Canceled</option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="btnsave">
        <button style={{ width: "100px" }} className="btn btn-success">
          Save
        </button>
        <button
          style={{ width: "100px", marginLeft: "10px" }}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Order;

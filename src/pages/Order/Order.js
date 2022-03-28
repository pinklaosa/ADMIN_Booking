import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "./Order.css";
import { Link } from "react-router-dom";
const Order = () => {
  const [history, setHistory] = useState([]);
  const [status, setStatus] = useState([]);

  const reformatDate = (datetime) =>
    datetime.getFullYear() +
    "-" +
    (datetime.getMonth() + 1) +
    "-" +
    datetime.getDate();

  const formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "THB",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/history").then((response) => {
      setHistory(response.data.result);
    });
  }, []);

  const updateStatus = () => {
    axios
      .post("http://localhost:3001/updatestatus", {
        status:status
      })
      .then((response) => {
        if(response.data.status === 200){
          alert(response.data.msg);
          window.location = "/order";
        }
      });
  };

  return (
    <div className="container1">
      <div className="headOrder">
        <h1>Order Manage</h1>
      </div>

      <div className="tableOrder">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style={{ marginLeft: "50px" }}>
                ORDER ID
              </th>
              <th scope="col">DATE</th>
              <th scope="col">TIME</th>
              <th scope="col">STATUS</th>
              <th scope="col">PRICE</th>
              <th scope="col">ORDER DETAIL</th>
              <th scope="col">IMG PAYMENT</th>
              <th scope="col">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((h, i) => (
                <tr>
                  <th>
                    <p style={{ marginTop: "10px" }}>{h.bookingId}</p>
                  </th>
                  <td>
                    <p style={{ marginTop: "10px" }}>
                      {reformatDate(new Date(h.date))}
                    </p>
                  </td>
                  <td>
                    <p style={{ marginTop: "10px" }}>{h.time}</p>
                  </td>
                  <td>
                    <p style={{ marginTop: "10px", color: "orange" }}>
                      {h.bookingStatus.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p style={{ marginTop: "10px" }}>
                      {formatter.format(h.price)} THB
                    </p>
                  </td>
                  <td>
                    <p style={{ marginTop: "6px" }}>
                      <a
                        class="btn btn-secondary"
                        style={{ width: "80px" }}
                        data-toggle="collapse"
                        href={`#multiCollapseExample${i}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        View
                      </a>
                      <Link to={`/order/${h.bookingId}`}>
                        <button
                        class="btn btn-success"
                        style={{ width: "80px" ,marginLeft: "10px"}}
                      >
                        Edit
                      </button>
                      </Link>
                      
                    </p>
                    <div class="row">
                      <div class="col" style={{ width: "250px" }}>
                        <div
                          class="collapse multi-collapse"
                          id={`multiCollapseExample${i}`}
                        >
                          <div
                            class="card card-body"
                            style={{
                              border: "1px solid gray",
                              borderRadius: "15px",
                              textAlign: "left",
                            }}
                          >
                            Service ship : {h.serviceName.toUpperCase()}
                            <br />
                            Country : {h.country.toUpperCase()}
                            <br />
                            Port of Shipment : {h.portShipment.toUpperCase()}
                            <br />
                            Port of Destination :{" "}
                            {h.portDestination.toUpperCase()} <br />
                            Container Type : {h.containerType.toUpperCase()}
                            <br />
                            20 " FT Size Quantity : {h.quantityFT20} <br />
                            40 " FT Size Quantity : {h.quantityFT40} <br />
                            45 " FT Size Quantity : {h.quantityFT45} <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {h.bookingStatus === "paid" ? (
                      <Popup trigger={<a href="#"> View </a>} modal>
                        <img
                          src={
                            "http://localhost:3001/imgpayment/" + h.bookingId
                          }
                          width="500"
                        ></img>
                      </Popup>
                    ) : (
                      <p>{h.bookingStatus}</p>
                    )}
                  </td>
                  <td>
                    <div className="status">
                      <select
                        class="form-selectt"
                        onChange={(e) => {
                          let popStatus = status.filter(
                            (s) => s.bookingId !== h.bookingId
                          );
                          let newStatus = [
                            ...popStatus,
                            {
                              bookingId: h.bookingId,
                              bookingStatus: e.target.value.toLowerCase(),
                            },
                          ];
                          let popId = newStatus.filter(
                            (n) => n.bookingStatus !== ""
                          );
                          setStatus(popId);
                        }}
                      >
                        <option value="">Change Status</option>
                        <option>Pending</option>
                        <option>Waiting Payment</option>
                        <option>Complete</option>
                        <option>Canceled</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>

      <div className="btnsave">
        <button
          style={{ width: "100px" }}
          className="btn btn-success"
          onClick={updateStatus}
        >
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

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const EditOrder = () => {
  let { id } = useParams();
  const [container, setContainer] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [ship, setShip] = useState("");
  const [country, setCountry] = useState("");
  const [shipment, setShipment] = useState("");
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [ft20, setFt20] = useState("");
  const [ft40, setFt40] = useState("");
  const [ft45, setFt45] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/editorder/" + id).then((response) => {
      if (response.data.status === 200) {
        setOrderData(response.data.result);
        setShip(response.data.result[0].serviceName);
        setCountry(response.data.result[0].country);
        setShipment(response.data.result[0].portShipment);
        setDestination(response.data.result[0].portDestination);
        setType(response.data.result[0].containerType);
        setFt20(response.data.result[0].quantityFT20);
        setFt40(response.data.result[0].quantityFT40);
        setFt45(response.data.result[0].quantityFT45);
      }
    });

    axios.get("http://localhost:3001/container").then((response) => {
      if (response.data.status === 200) {
        setContainer(response.data.result);
      }
    });
  }, []);

  return (
    <div className="select">
      <header className="app-Header">EDITE ORDER</header>
      {orderData.length > 0 ? (
        <div>
          <select class="form-select" value={ship}>
            <option value="evergreen">EVERGREEN</option>
            <option value="maersk">MAERSK</option>
            <option value="one">ONE</option>
            <option value="cma-cgm">CMA-CGM</option>
            <option value="cosco">COSCO</option>
          </select>

          <select class="form-select" value={country}>
            <option value={"thailand"}>Thailand</option>
          </select>

          <select class="form-select" value={shipment}>
            <option value="bangkok Port">Bangkok Port</option>
          </select>

          <select class="form-select" value={destination}>
            <option value="bangkok Port">Bangkok Port</option>
            <option value="laem chabang port">Laem Chabang Port</option>
            <option value="chiang sean port">Chiang Sean Port</option>
            <option value="chiang khong port">Chiang Khong Port</option>
            <option value="ranong port">Ranong Port</option>
          </select>

          <select
            class="form-select"
            value={type}
            onChange={(e) => setType(e.target.value.toLowerCase())}
          >
            <option value="dry container">Dry Container</option>
            <option value="open top container">Open Top Container</option>
            <option value="reefer container">Reefer Container</option>
          </select>

          <input
            style={{
              height: "45px",
              width: "500px",
              marginLeft: "px",
              border: "3px solid gray",
              marginTop: "15px",
              borderRadius: "10px",
            }}
            type="number"
            class="form-control form-select"
            name="name"
            placeholder="Container Size 20 :"
            value={ft20}
            onChange={(e) => setFt20(e.target.value)}
          />
          <input
            style={{
              height: "45px",
              width: "500px",
              marginLeft: "px",
              border: "3px solid gray",
              marginTop: "15px",
              borderRadius: "10px",
            }}
            type="number"
            class="form-control form-select"
            name="name"
            placeholder="Container Size 40 :"
            value={ft40}
            onChange={(e) => setFt40(e.target.value)}
          />
          <input
            style={{
              height: "45px",
              width: "500px",
              marginLeft: "px",
              border: "3px solid gray",
              marginTop: "15px",
              borderRadius: "10px",
            }}
            type="number"
            class="form-control form-select"
            placeholder="Container Size 45 :"
            value={ft45}
            onChange={(e) => setFt45(e.target.value)}
          />
          <center>
            <div style={{ marginTop: "20px" }}>
              <button
                style={{ width: "100px" }}
                className="btn btn-success"
                onClick={() => {
                  axios
                    .post("http://localhost:3001/updateorder", {
                      id: id,
                      ship: ship,
                      country: country,
                      shipment: shipment,
                      destination: destination,
                      type: type,
                      ft20: ft20,
                      ft40: ft40,
                      ft45: ft45,
                      container:container,
                    })
                    .then((response) => {
                      if (response.data.status === 200) {
                        alert(response.data.msg);
                        window.location = "/order";
                      }
                    });
                }}
              >
                Save
              </button>
              <Link to="/order">
                <button
                  style={{ width: "100px", marginLeft: "10px" }}
                  className="btn btn-secondar "
                >
                  Cancel
                </button>
              </Link>
            </div>
          </center>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EditOrder;

import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Setprice.css";
const Setprice = () => {
  const [container, setContainer] = useState([]);
  const [ft20, setFt20] = useState("");
  const [ft40, setFt40] = useState("");
  const [ft45, setFt45] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/container").then((response) => {
      if (response.data.status === 200) {
        setContainer(response.data.result);
        setFt20(response.data.result[0].price);
        setFt40(response.data.result[1].price);
        setFt45(response.data.result[2].price);
      }
    });
  }, []);
  return (
    <div className="select">
      <header className="app-Header">Set Price</header>
      <div class="setprice">
        <label className="headsetp">Change Container 20" Price </label>
        <div className="setctn20">
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
            class="form-control"
            name="ctn20"
            placeholder="Container Size 20 :"
            value={ft20}
            onChange={(e) => setFt20(e.target.value)}
          />
          <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <i class="fa-solid fa-baht-sign fa-2x"></i>
          </div>
        </div>
        <label className="headsetp">Change Container 40" Price </label>
        <div className="setctn40">
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
            class="form-control"
            name="ctn40"
            placeholder="Container Size 40 :"
            value={ft40}
            onChange={(e) => setFt40(e.target.value)}
          />
          <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <i class="fa-solid fa-baht-sign fa-2x"></i>
          </div>
        </div>
        <label className="headsetp">Change Container 45" Price </label>
        <div className="setctn45">
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
            class="form-control"
            name="ctn45"
            placeholder="Container Size 45 :"
            value={ft45}
            onChange={(e) => setFt45(e.target.value)}
          />
          <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <i class="fa-solid fa-baht-sign fa-2x"></i>
          </div>
        </div>
        <div className="btnsetprice">
          <button
            style={{ width: "100px" }}
            className="btn btn-success"
            onClick={() => {
              axios.post("http://localhost:3001/updatecontainer",{
                ft20:ft20,
                ft40:ft40,
                ft45:ft45,
              }).then((response) => {
                if(response.data.status === 200){
                  alert(response.data.msg);
                  window.location = "/container";
                }
              })
            }}
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
    </div>
  );
};

export default Setprice;

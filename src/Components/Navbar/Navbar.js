import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });

    const token = localStorage.getItem("tokenadmin");
    let axiosJWT = axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    axiosJWT.post("http://localhost:3001/authen").then((response) => {
      // console.log(response.data);
      if (response.data.status !== 200) {
        localStorage.removeItem("tokenadmin");
        window.location = "/login";
      }
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("tokenadmin");
    window.location = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Admin Booking Cargo Ship
        <i style={{ marginLeft: "10px" }} class="fa-solid fa-anchor"></i>
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-5">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/home" exact>
              <i class="fa-solid fa-house"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/order" exact>
              <i class="fa-solid fa-clipboard"></i>Order Manage
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/carrier" exact>
              <i class="fa-brands fa-docker"></i>Carrier Manage
            </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/container" exact>
              <i class="fa-solid fa-user-gear"></i>Container Manage
              </NavLink>
            </li>
        </ul>
      </div>
      <div className="btn-log">
        <button className="btn-log1" onClick={logout}>
          <i
            className="btn-logout"
            class="fa-solid fa-arrow-right-from-bracket"
          ></i>
          Logout
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

import React, { useState } from "react";
import "./SideBar.css";
import {
  FaXingSquare,
  FaRegCircle,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import { TbAlignRight, TbLayoutGrid, TbPinned } from "react-icons/tb";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { RiUser6Line } from "react-icons/ri";
import BarProfile from "./BarProfile";

function SideBar() {
  const [showSideDrawer, setShowSideDrawer] = useState(true);

  return (
    <div className="bar">
      <div className="bar-nav">
        <div className="center">
          <FaXingSquare className="icon" />
          <span>SmartUp</span>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowSideDrawer(!showSideDrawer);
          }}
        >
          <TbAlignRight style={{ fontSize: "1.2rem" }} />
        </button>
      </div>
      <div className={`${showSideDrawer?"show-side-drawer":"hide-side-drawer"} bar-main`}>
        <div className="bar-headings" style={{ marginBottom: "16px" }}>
          <div className="center">
            <img src="./images/1.jpg" alt="" className="avatar" />
            <span>Profile</span>
          </div>
          <div>
            <IoNotificationsCircleSharp
              style={{ fontSize: "1.2rem", color: "orangered" }}
            />
          </div>
        </div>
        <div className="bar-profile">
          <div className="center">
            <TbLayoutGrid className="icon" />
            <span>Discover</span>
          </div>
          <div className="discover-number">24</div>
        </div>
        <div className="bar-profile">
          <div className="center">
            <FaRegCircle className="icon" />
            <span>SmartUp</span>
          </div>
          <div></div>
        </div>
        <BarProfile img={"./images/2.jpg"} name={"Main Community"} />
        <BarProfile img={"./images/3.jpg"} name={"Fun Community"} />
        <BarProfile img={"./images/4.jpg"} name={"Tech Community"} />
        <BarProfile img={"./images/5.jpg"} name={"Lead Community"} />
        <div className="bar-headings" style={{ marginBottom: "16px" }}>
          <div className="center">
            <RiUser6Line className="icon" />
            <span>Personal</span>
          </div>
        </div>
        <BarProfile name={"In Progress"} number={180} />
        <BarProfile name={"Completed"} number={40} />
        <BarProfile name={"Read Letter"} number={24} />
        <div className="about">
          <div className="bar-headings" style={{ marginBottom: "8px" }}>
            <div className="center">
              <TbPinned className="icon" style={{ fontSize: ".9rem" }} />
              <span> About SmartUp</span>
            </div>
          </div>
          <BarProfile name={"Send Feedback"} />
          <BarProfile name={"Terms of use"} />
          <BarProfile name={"Privacy policy"} />
        </div>
        <div className="social-handles">
          <FaLinkedin />
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div className="copyright">
          <FaRegCopyright />
          2018 smartup.io
        </div>
      </div>
    </div>
  );
}

export default SideBar;

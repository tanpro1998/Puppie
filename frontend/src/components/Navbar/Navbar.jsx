import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import {
  DownOutlined,
  UpOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Dropdown from "../Dropdown/Dropdown";

const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  { display: "All Available Puppies", path: "/available" },
  { display: "Puppies For Sale", path: "/", type: "dropdown" },
  { display: "Blog", path: "/blog" },
  { display: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const menuToggle = () => menuRef.current.classList.toggle("active");
  const [shrink, setShrink] = useState("");
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navRef = useRef("");
  const menuRef = useRef(null);
  const container = useRef();

  const scrollEvent = () => {
    if (window.scrollY < 70) {
      return setShrink("");
    } else {
      return setShrink("shrink");
    }
  };

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleClickOutside);
    return () => document.removeEventListener("scroll", handleClickOutside);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div ref={container}>
      <div className={`navbar ${shrink}`} ref={navRef}>
        <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <CloseOutlined style={{ color: "white", cursor: "pointer" }} />
          ) : (
            <MenuOutlined style={{ cursor: "pointer" }} />
          )}
        </div>
        <div className="left">
          <span>Flash Puppies</span>
        </div>

        <div className={`right ${showMenu ? "rActive" : ""}`} ref={menuRef}>
          {mainNav.map((item, index) => (
            <div
              key={index}
              className={`right__item ${index === activeNav ? "active" : ""}`}
              onClick={menuToggle}
            >
              {item.type ? (
                <span
                  onClick={() => setShow(!show)}
                  className={`sale-icon ${show ? "active" : ""}`}
                >
                  {item.display}
                  {show ? (
                    <UpOutlined
                      className="drop"
                      style={{ marginLeft: "0.5rem" }}
                    />
                  ) : (
                    <DownOutlined
                      className="drop"
                      style={{ marginLeft: "0.5rem" }}
                    />
                  )}

                  {show && <Dropdown />}
                </span>
              ) : (
                <Link to={item.path} style={{ color: "inherit" }}>
                  <span>{item.display}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

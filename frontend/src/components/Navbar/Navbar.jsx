import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { DownOutlined } from "@ant-design/icons";
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
  const navRef = useRef("");
  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("active");
  const [shrink, setShrink] = useState("");
  const [show, setShow] = useState(false);
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
        <div className="left">
          <span>Flash Puppies</span>
        </div>
        <div onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
          Sale
          <DownOutlined className="drop" style={{ marginLeft: "1rem" }} />
        </div>
        <div className="right" ref={menuRef}>
          {mainNav.map((item, index) => (
            <div
              key={index}
              className={`right__item ${index === activeNav ? "active" : ""}`}
              onClick={menuToggle}
            >
              <Link to={item.path} style={{ color: "inherit" }}>
                {item.type ? (
                  <span>
                    {item.display}

                    {show && <Dropdown />}
                  </span>
                ) : (
                  <span>{item.display}</span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

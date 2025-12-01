import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Scroll effect for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setProfileOpen(false); // close profile if menu opens
  };

  // Toggle profile dropdown
  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
    setMenuOpen(false); // close menu if profile opens
  };

  return (
    <header className={`${Styles.header} ${isScrolled ? Styles.scrolled : ""}`}>
      {/* Left Section */}
      <div className={Styles.header_left}>
        <img
          className={Styles.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        {/* Mobile Hamburger */}
        <div className={Styles.menu_btn} onClick={toggleMenu}>
          {menuOpen ? (
            <CloseIcon className={Styles.icon} />
          ) : (
            <MenuIcon className={Styles.icon} />
          )}
        </div>

        {/* Navigation */}
        <nav
          className={`${Styles.nav_links} ${menuOpen ? Styles.active : ""}`}
          onClick={() => setMenuOpen(false)}>
          <a href="#">Netflix</a>
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">Latest</a>
          <a href="#">My List</a>
          <a href="#">Browse by Languages</a>
        </nav>
      </div>

      {/* Right Section */}
      <div className={Styles.header_right}>
        {/* Desktop-only icons */}
        <div className="d-none d-md-flex align-items-center gap-2">
          <SearchIcon className={Styles.icon} />
          <NotificationsIcon className={Styles.icon} />
        </div>

        {/* Profile */}
        <div className={Styles.profile_section}>
          <button
            className="btn d-flex align-items-center gap-1 p-0 border-0 bg-transparent"
            onClick={toggleProfile}
            aria-expanded={profileOpen}>
            <PersonIcon className={Styles.icon} />
            <ArrowDropDownIcon className={Styles.icon} />
          </button>

          {profileOpen && (
            <div className={`${Styles.profile_dropdown}`}>
              <a href="#">Account</a>
              <a href="#">Help Center</a>
              <a href="#">Sign Out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

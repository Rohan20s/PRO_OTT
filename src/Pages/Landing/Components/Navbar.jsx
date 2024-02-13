// Created By Rohan Kansari - 25/4/23
// Reason - It is a top Header shown in all page with fixed position

import React from 'react'
import style from "./navbar.module.css"
import Logo from "../../../Assets/Logo.png"
import { BsSearch } from "react-icons/bs"
import { FaRegBell } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className={style.NavbarContainer}>
      <div className={style.logoContainer}>
        <img alt="" className={style.logo} src={Logo} />
      </div>
      <div className={style.column}>
        <div className={style.menuContainer}>
          <ul className={style.listContainer}>
            <li className={style.menu}>
              Home
            </li>
            <li className={style.menu}>
              Shows
            </li>
            <li className={style.menu}>
              Movies
            </li>
            <li className={style.menu}>
              Comedy
            </li>
            <li className={style.menu}>
              News
            </li>
          </ul>
        </div>
        <div className={style.options}>
          <input className={style.searchBox} type='search' />
          <button className={style.searchbtn}><BsSearch className={style.searchIcon} /></button>
          <button className={style.subcribeBtn}><FaRegBell className={style.bellIcon} /> Subscribe</button>
          <button className={style.loginBtn}>Account</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
// Created by Rohan kansari- 25/4/23
// reason - To Show side menu bar for quick option selection

import React from 'react'
import style from './sidebar.module.css'


const SideBar = (props) => {
  return (
    <div style={{display:"flex"}}>
    <div className={style.sideContainer}>
        <ul className={style.listContainer}>
         <li className={style.list}>Channel</li>
         <ul className={style.optionContainer}>
          <li className={style.option}> Sony Liv</li>
          <li className={style.option}> Star Plus</li>
          <li className={style.option}> Zee Plus</li>
          <li className={style.option}> Network Liv</li>
         </ul>
         <li className={style.list}>Language</li>
         <ul className={style.optionContainer}>
          <li className={style.option}> Hindi</li>
          <li className={style.option}> English</li>
          <li className={style.option}> Begali</li>
          <li className={style.option}> Telgu</li>
         </ul>
         <li className={style.list}>Genres</li>
         <ul className={style.optionContainer}>
          <li className={style.option}> Horror</li>
          <li className={style.option}> Adventures</li>
          <li className={style.option}> Thriller</li>
          <li className={style.option}> Comedy</li>
         </ul>
        </ul>
        
    </div>
    <div className={style.content}>
    {props.children}
    </div>
    </div>
  )
}

export default SideBar
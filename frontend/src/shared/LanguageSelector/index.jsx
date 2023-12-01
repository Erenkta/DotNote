import React, { useState } from 'react'
import{ i18Instance} from "../../locale/index.js"

export default function LangSelector() {
  const changeLanguage=(lang)=>{
    i18Instance.changeLanguage(lang)
    localStorage.setItem("lang",lang)
  }
  const lang = localStorage.getItem("lang")+"_"+localStorage.getItem("lang").toUpperCase()
 
  return (
    <select defaultValue={localStorage.getItem("lang")} style={{background:"#D16666",border:"0px"}} onChange={e=>changeLanguage(e.target.value)} > 
        <option style={{background:"#C1C1C1"}} value={"tr"}>Tr</option>
        <option style={{background:"#C1C1C1"}} value={"en"}>En</option>
    </select>
  )
}

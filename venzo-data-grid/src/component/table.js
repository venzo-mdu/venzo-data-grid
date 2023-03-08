import React, { useState,useEffect } from 'react'
import TableData from '../context/tableData.json'
import Languagedata from '../context/languageData.json'

function Table() {
  const [language,setLanguage]= useState([])
  const lang=() =>{
    setLanguage(Languagedata.language)
    
  }
  useEffect(() =>{
     lang()
  })
  return (
    <div>
      {console.log(language.key)}
     {language.key}<br></br>
     {language.name}<br></br>
     {language.style.color}
    </div>
  )
}

export default Table
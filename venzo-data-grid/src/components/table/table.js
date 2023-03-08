import React, { useEffect, useState } from 'react'
import '../table/table.css'
import {columnJson ,rowJson} from '../../context/tableData'

function Table() {
  console.log("json of the table",columnJson,rowJson)
  const [columnData,setColumnData] = useState([]);
  const [rowData,setRowData] = useState([]);



  useEffect(()=>{
    setColumnData(columnJson)
    setRowData(rowJson)
  },[])
 
  return (
    <>
    <div className='tableGrid'>
      <div className='columnGrid'>

      {
        columnData.map(item=>{
          return(
            <p style ={{width:item.width,
              fontFamily:item.fontFamily,
              fontWeight:item.fontWeight,
              fontSize:item.fontSize}} 
              className={item.className}>{item.title}
              </p>
          ) 
        })
      }
      </div>
     <div className='rowGrid'>

      <div className='names'>
      {
        rowData.map(data=>{
          return(
            <>
            <p>{data.name}</p>
            </>
          )
        })
      }
      </div>
      <div className='country'>
      {
        rowData.map(data=>{
          return(
            <>
            <p>{data.country}</p>
            </>
          )
        })
      }
      </div>
      <div className='language'>
      {
        rowData.map(data=>{
          return(
            <>
            <p>{data.language}</p>
            </>
          )
        })
      }
      </div>
      <div className='game'>
      {
        rowData.map(data=>{
          return(
            <>
            <p>{data.game}</p>
            </>
          )
        })
      }
      </div>
      <div className='medal'>
      {
        rowData.map(data=>{
          return(
            <>
            <p>{data.medal}</p>
            </>
          )
        })
      }
      </div>
     </div>
   
    </div>

    </>
  )
}

export default Table
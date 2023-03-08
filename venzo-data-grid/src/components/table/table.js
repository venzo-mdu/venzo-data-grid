import React, { useEffect, useState } from 'react'
import '../table/table.css'
import { columnJson, rowJson } from '../../context/tableData'

function Table() {
  // console.log("json of the table",columnJson,rowJson)
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [shorting, setSorting] = useState([])
  const [order, setOrder] = useState('asd')

  const sortTable = (value, key) => {
    if (key === "true"){
      if (value === 'asd') {
        setSorting([...shorting].sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        ))
        setOrder('dsc')
      } else {
        setSorting([...shorting].sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
        ))
        setOrder('asd')
      }
    }
   else{
    setOrder(rowData)
   }
    
  }

  console.log(shorting)
  useEffect(() => {
    setColumnData(columnJson)
    setRowData(rowJson)
    setSorting(rowJson)
  }, [])

  return (
    <>
      <div className='tableGrid'>
        <div className='columnGrid'>

          {
            columnData.map(item => {
              return (
                <p style={{
                  width: item.width,
                  fontFamily: item.fontFamily,
                  fontWeight: item.fontWeight,
                  fontSize: item.fontSize
                }}
                  className={item.className} onClick={() => sortTable(order,item.sortable)}>{item.title}
                </p>
              )
            })
          }
        </div>
        <div className='rowGrid'>

          <div className='names'>
            {
              shorting.map(data => {
                return (
                  <>
                    <p>{data.name}</p>
                  </>
                )
              })
            }
          </div>
          <div className='country'>
            {
              shorting.map(data => {
                return (
                  <>
                    <p>{data.country}</p>
                  </>
                )
              })
            }
          </div>
          <div className='language'>
            {
              shorting.map(data => {
                return (
                  <>
                    <p>{data.language}</p>
                  </>
                )
              })
            }
          </div>
          <div className='game'>
            {
              shorting.map(data => {
                return (
                  <>
                    <p>{data.game}</p>
                  </>
                )
              })
            }
          </div>
          <div className='medal'>
            {
              shorting.map(data => {
                return (
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

export default Table;
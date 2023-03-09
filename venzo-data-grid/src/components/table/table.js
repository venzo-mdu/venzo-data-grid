import React, { useEffect, useState } from 'react'
import '../table/table.css'
import { columnJson, rowJson } from '../../context/tableData'

function Table() {
  // console.log("json of the table",columnJson,rowJson)
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [sorting, setSorting] = useState([])
  const [order, setOrder] = useState('asd')

  const sortTable = (value, key) => {
    if (key === "true") {
      if (value === 'asd') {
        setSorting([...sorting].sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        ))
        setOrder('dsc')
      } else {
        setSorting([...sorting].sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
        ))
        setOrder('asd')
      }
    }
    else {
      setOrder(rowData)
    }

  }

  console.log(sorting)
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
                  className={item.className} onClick={() => sortTable(order, item.sortable)}> <span><input type={'checkbox'}></input></span> {item.title}
              </p>
              )
            })
          }
        </div>
        <div className='rowGrid'>
       
          <div className='tableData'>
          {
            rowData.map(item=>{  
              return(
                <div class="columnGrid">
                {columnData.map(col=>{
                  return(
                    <div>{item[col.key]}</div>
                  )
                })}
                </div>
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
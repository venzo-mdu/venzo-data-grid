import React, { useEffect, useState } from 'react'
import '../table/table.css'
import { columnJson, rowJson } from '../../context/tableData'

function Table() {
  // console.log("json of the table",columnJson,rowJson)
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchCountry, setSearchCountry] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('');
  const [searchGame, setSearchGames] = useState('');
  const [searchMedal, setSearchMedals] = useState('');

  const [order, setOrder] = useState('asd');

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

  const getFilterData = () => {
    if (searchName.length > 0) {
      return rowData.filter(data => data.name.toLowerCase().includes(searchName.toLowerCase()))

    }
    else if (searchCountry.length > 0) {
      return rowData.filter(data => data.country.toLowerCase().includes(searchCountry.toLowerCase()))

    }
    else if (searchLanguage.length > 0) {
      return rowData.filter(data => data.language.toLowerCase().includes(searchLanguage.toLowerCase()))

    }
    else if (searchGame.length > 0) {
      return rowData.filter(data => data.game.toLowerCase().includes(searchGame.toLowerCase()))

    }
    else if (searchMedal.length > 0) {
      return rowData.filter(data => data.medal.toLowerCase().includes(searchMedal.toLowerCase()))

    }

    return rowData;


  }

  // console.log("for console sorting",sorting)
  useEffect(() => {
    setColumnData(columnJson)
    setRowData(rowJson)
    setSorting(rowJson)
  }, [])

  return (
    <>
      <div className='tableGrid'>
        <div>
          <div className='columnGrid'>
            <input type={'checkbox'} className='selectAll'></input>
            {
              columnData.map((item, index) => {
                return (
                  <div key={index} style={{
                    width: item.width,
                    fontFamily: item.fontFamily,
                    fontWeight: item.fontWeight,
                    fontSize: item.fontSize
                  }}
                    className={item.className} onClick={() => sortTable(order, item.sortable)}>  {item.title}
                  </div>
                )
              })
            }
          </div>
          <div className='columnGrid'>
            <input type={'text'} onChange={(e) => setSearchName(e.target.value)}></input>
            <input type={'text'} onChange={(e) => setSearchCountry(e.target.value)}></input>
            <input type={'text'} onChange={(e) => setSearchLanguage(e.target.value)}></input>
            <input type={'text'} onChange={(e) => setSearchGames(e.target.value)}></input>
            <input type={'text'} onChange={(e) => setSearchMedals(e.target.value)}></input>

          </div>

        </div>

        <div className='rowGrid'>

          <div className='tableData'>
            {/* {
              rowData.map((item, index) => {
                return (
                  <div key={index} className="columnGrid">
                    <input type={'checkbox'} className='selectRow'></input>
                    {columnData.map((col, index) => {
                      return (
                        <div key={index}>{item[col.key]}</div>
                      )
                    })}
                  </div>
                )

              })
            } */}
            {
              getFilterData().map((item, index) => {
                return (
                  <div key={index} className="columnGrid">
                    <input type={'checkbox'} className='selectRow'></input>
                    {columnData.map((col, index) => {
                      return (
                        <div key={index}>{item[col.key]}</div>
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
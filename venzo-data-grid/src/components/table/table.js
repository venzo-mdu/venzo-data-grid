// import React, { useEffect, useState } from 'react'
// import '../table/table.css'
// import { columnJson, rowJson } from '../../context/tableData'

// function Table() {
// // console.log("json of the table",columnJson,rowJson)
// const [columnData, setColumnData] = useState([]);
// const [rowData, setRowData] = useState([]);
// const [sorting, setSorting] = useState([]);
// const [searchName, setSearchName] = useState('');
// const [searchCountry, setSearchCountry] = useState('');
// const [searchLanguage, setSearchLanguage] = useState('');
// const [searchGame, setSearchGames] = useState('');
// const [searchMedal, setSearchMedals] = useState('');

// const [order, setOrder] = useState('asd');

// const sortTable = (value, key) => {
// if (key === "true") {
// if (value === 'asd') {
// setSorting([...sorting].sort((a, b) =>
// a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
// ))
// setOrder('dsc')
// } else {
// setSorting([...sorting].sort((a, b) =>
// a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
// ))
// setOrder('asd')
// }
// }
// else {
// setSorting(rowData)
// }

// }

// const getFilterData = () => {
// if (searchName.length > 0) {
// return sorting.filter(data => data.name.toLowerCase().includes(searchName.toLowerCase()))
// }
// else if (searchCountry.length > 0) {
// return sorting.filter(data => data.country.toLowerCase().includes(searchCountry.toLowerCase()))

// }
// else if (searchLanguage.length > 0) {
// return sorting.filter(data => data.language.toLowerCase().includes(searchLanguage.toLowerCase()))

// }
// else if (searchGame.length > 0) {
// return sorting.filter(data => data.game.toLowerCase().includes(searchGame.toLowerCase()))

// }
// else if (searchMedal.length > 0) {
// return sorting.filter(data => data.medal.toLowerCase().includes(searchMedal.toLowerCase()))

// }
// return sorting;

// }

// console.log("for console sorting",sorting)
// useEffect(() => {
// setColumnData(columnJson)
// setRowData(rowJson)
// setSorting(rowJson)
// }, [])

// return (
// <>
// <div className='tableGrid'>
// <div>
// <div className='columnGrid'>
// <input type={'checkbox'} className='selectAll'></input>
// {
// columnData.map((item, index) => {
// return (
// <div key={index} style={{
// width: item.width,
// fontFamily: item.fontFamily,
// fontWeight: item.fontWeight,
// fontSize: item.fontSize
// }}
// className={item.className} onClick={() => sortTable(order, item.sortable)}> {item.title}
// </div>
// )
// })
// }
// </div>
// <div className='columnGrid' >
// <input style={{width:"150px", marginTop:"5px"}} type={'text'} onChange={(e) => setSearchName(e.target.value)}></input>
// <input style={{width:"150px", marginTop:"5px"}} type={'text'} onChange={(e) => setSearchCountry(e.target.value)}></input>
// <input style={{width:"150px", marginTop:"5px"}} type={'text'} onChange={(e) => setSearchLanguage(e.target.value)}></input>
// <input style={{width:"150px", marginTop:"5px"}} type={'text'} onChange={(e) => setSearchGames(e.target.value)}></input>
// <input style={{width:"150px", marginTop:"5px"}} type={'text'} onChange={(e) => setSearchMedals(e.target.value)}></input>
// </div>

// </div>

// <div className='rowGrid'>

// <div className='tableData'>
// {
// getFilterData().map((item, index) => {
// return (
// <div key={index} className="columnGrid">
// <input type={'checkbox'} className='selectRow'></input>
// {columnData.map((col, index) => {
// return (
// <div key={index}>{item[col.key]}</div>
// )
// })}
// </div>
// )

// })
// }
// </div>

// </div>

// </div>

// </>
// )
// }

// export default Table;

import React, { useEffect, useState } from 'react'
import '../table/table.css'
import { columnJson, rowJson } from '../../context/tableData'
import { tableJson } from '../../context/wholetable'
import Flag from 'react-world-flags';

function Table() {
const [columnData, setColumnData] = useState([]);
const [rowData, setRowData] = useState([]);
const [table, setTable] = useState([]);
const [sorting, setSorting] = useState([]);
const [value, setValue] = useState('');
const [filteredData, setFilteredData] = useState([]);

const handleChange = (e) => {
setValue(e.target.value);
};

const filterOptionSelected = (e) => {
let data = e.target.value
if (data !== null) {
let filterOption = value
let filteredData = sorting.filter(element => element[filterOption] === data);
setFilteredData(filteredData)
}
else if (data === ' ') {
let filteredData = sorting.map(element => element)
setFilteredData(filteredData)
}
}

const renderFilterOptions = (filterOption) => {
if (filterOption !== null) {
let options = Array.from(new Set(sorting.map(element => element[filterOption])));
return (
options.map((option, i) => <option key={i} value={option}> {option} </option>)
)
}
else if (filterOption === ' ') {
let options = Array.from(new Set(sorting.map(element => element)));
return options
}
}

const renderTableData = (data) => {
return data.map((element, i) => {
return (
<div key={i} className="columnGrid" >

<input key={i} type="checkbox" name='checkbox' onChange={(e) => toggle(e, i)} className='selectRow' />
{columnData.map((col, index) => {
return (

<div style={{ paddingTop: '20px', paddingLeft: '10px' }} key={index}>{col.key === 'country' ? <Flag code={element.flag} height='16' /> : ''} &nbsp;{element[col.key]}</div>
)
})}
</div>
)
})
}

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
setSorting(rowData)
}

}

const toggle = (event, value) => {
console.log(sorting[value], event.target)
let parent = event.target.parentNode
if (event.target.checked) {
parent.style.backgroundColor = "#24a0ed"
} else {
parent.style.backgroundColor = 'white'
}

}
function selects(e) {

console.log(e)
let data = document.getElementsByClassName('tableData')[0]
console.log(data)
let checkData = data.getElementsByTagName('input')
console.log(checkData.length)
var ele = document.getElementsByName('checkbox');
for (var i = 0; i < ele.length; i++) {
if (e.target.checked) {
ele[i].checked = true;
data.style.backgroundColor = '#24a0ed'

} else {
ele[i].checked = false;
data.style.backgroundColor = 'white'

}
}
}

useEffect(() => {
setColumnData(columnJson)
setRowData(rowJson)
setSorting(rowJson)
setTable(tableJson)
}, [])

return (
<>
<div className='tableGrid' style={{
width: table.width,
boxShadow: table.boxShadow,
margin: table.margin,
padding: table.padding,
backgroundColor: table.backgroundColor,
border: table.border
}}>
<div>
<label>filter</label>&nbsp;&nbsp;&nbsp;
<select value={value} onChange={handleChange}>
<option value=" "> </option>
{columnData.map((item) => {
return <option value={item.key}>{item.title}</option>
})}
</select>
<select onChange={filterOptionSelected}>
<option value=" "> </option>
{renderFilterOptions(value)}
</select>
<div className='columnGrid'>
<input className='selectAll' onClick={(e) => selects(e)} type="checkbox" name="Check_ctr" value="yes" />
{columnData.map((item, index) => {
return (
<div key={index} style={{
width: item.width,
fontFamily: item.fontFamily,
fontWeight: item.fontWeight,
fontSize: item.fontSize
}}
className={item.className} onClick={() => sortTable(order, item.sortable)}> {item.title}
</div>
)
})
}
</div>
</div>

<div className='rowGrid'>
<div className='tableData'>
{filteredData.length ? renderTableData(filteredData) : renderTableData(sorting)}
</div>
</div>
</div>
</>
)
}

export default Table;
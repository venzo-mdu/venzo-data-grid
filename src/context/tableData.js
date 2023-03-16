const columnJson =
    [
        {
            title: "Name",
            key: "name",
            width: "250px",
            className: "clmName",
            sortable: "true",
            filter: "true",
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Poppins',
            
        },
        {
            title: "Country",
            key: "country",
            width: "250px",
            className: "clmCountry",
            sortable: "false",
            filter: "true",
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Poppins'
        },
        {
            title: "Language",
            key: "language",
            width: "250px",
            className: "clmLang",
            sortable: "false",
            filter: "true",
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Poppins'
        },
        {
            title: "Games",
            key: "game",
            width: "250px",
            className: "clmGame",
            sortable: "false",
            filter: "true",
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Poppins'
        },
        {
            title: "Medals",
            key: "medal",
            width: "250px",
            className: "clmMedals",
            sortable: "false",
            filter: "true",
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'Poppins'
        }
    ]


const rowJson = [
    {
        id:1,
        name: "Priya",
        country: "Paris",
        language: "French",
        game: "Chess",
        medal: "Gold",
        flag:'fra',
        checked:false

    },
    {
        id:2,
        name: "Harish",
        country: "India",
        language: "Tamil",
        game: "Cricket",
        medal: "Gold",
        flag:'ind',
        checked:false

    },
    {

        id:3,
        name: "Gowtham",
        country: "UK",
        language: "English",
        game: "Cricket",
        medal: "Gold",
        flag:'gb',
        checked:false

    }
]

export { columnJson, rowJson }
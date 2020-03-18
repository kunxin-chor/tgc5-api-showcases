const APIKEY="RV76S9OYG1OF0XEU";
const APIURL="https://www.alphavantage.co/query"
$(function(){
    $("#load-btn").click(function(){
        // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=RV76S9OYG1OF0XEU
        // everything after the ? is the parameters (so it's not part of the endpoint)
        axios.get(APIURL, {
            params: {
                'function':'TIME_SERIES_DAILY',
                symbol:'MSFT',
                apikey:APIKEY
            }
        }).then(function(response){
            let data = response.data["Time Series (Daily)"];
            // for (let day in data) {
            //     console.log(day);
            //     console.log(data[day]);
            // }
            for (let dayData of Object.entries(data)) {
                $('#table-data').append(`
                <tr>
                    <td>${dayData[0]}</td>
                    <td>${dayData[1]["1. open"]}</td>
                    <td>${dayData[1]["4. close"]}</td>
                </tr>
                `);
            }
        })
    })
})
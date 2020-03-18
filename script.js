// constant
// means it's a variable which value cannot be changed
const apiURL = 'https://api.data.gov.sg/v1/transport/taxi-availability';

let date='2020-03-18T10:52:00';

$(function(){
    $('#load-taxi-btn').click(function(){

        let options = {
            params: {
                date_time: date
            }
        }

        axios.get(apiURL,options).then(function(response){
            let taxi = response.data.features[0].geometry.coordinates;
            $('#taxi-count').text(taxi.length);
        })
    })
})
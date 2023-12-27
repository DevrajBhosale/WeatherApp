
const apiurl = 'https://open-weather13.p.rapidapi.com/city/';

var searchbut = document.getElementById('clickforweather');
var cityname = document.getElementById('citycheck');
var weathericon = document.querySelector('.weather-icon');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bdf2fc0605mshcf4c3db76392b16p1f74afjsnc3d4e579d354',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};


async function chechweather(city) {
    try {
        const response = await fetch(apiurl + city, options);
        var result = await response.json();
        console.log(result);
        if (result.cod == 200) {
            document.getElementById('showweather').style.display = 'block';
            document.getElementById('showdetails').style.display = 'flex';
            document.getElementById('showrecrds').style.display = 'none';
            document.querySelector('.city').innerHTML = result['name'];
            document.querySelector('.temp').innerHTML = Math.round(result['main']['temp']) + '°c';
            document.querySelector('.humidity').innerHTML = result['main']['humidity'] + '%';
            document.querySelector('.wind').innerHTML = Math.round(result['wind']['speed']) + 'km/h';

            if(result.weather[0].main == 'Clouds'){
                weathericon.src = 'images/clouds.png'
            }
            else if(result.weather[0].main == 'Clear'){
                weathericon.src = 'images/clear.png'
            }
            else if(result.weather[0].main == 'Rain'){
                weathericon.src = 'images/rain.png'
            }
            else if(result.weather[0].main == 'Drizzle'){
                weathericon.src = 'images/drizzle.png'
            }
            else if(result.weather[0].main == 'Mist'){
                weathericon.src = 'images/mist.png'
            }


        }
        else {
            document.getElementById('showweather').style.display = 'none';
            document.getElementById('showdetails').style.display = 'none';
            document.getElementById('showrecrds').style.display = 'block';
        }


    } catch (error) {
        console.error(error);
        document.getElementById('showweather').style.display = 'none';
        document.getElementById('showdetails').style.display = 'none';
        document.getElementById('showrecrds').innerHTML = '<h1>Something Went Wrong</h1>';

    }
}

searchbut.addEventListener('click', () => {
    chechweather(cityname.value)
})
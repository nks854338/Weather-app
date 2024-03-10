let currene_date = document.querySelector("current_date");
let CityName = document.querySelector("#city");
let search = document.querySelector(".icon");
let temp = document.querySelector("#temp");
let weather_condition = document.querySelector("#weather_condition");
let high = document.querySelector("#high");
let low = document.querySelector("#low");
let wind = document.querySelector("#wind");
let sunrise = document.querySelector("#sunrise");
let sunSet = document.querySelector("#sunset");
let rain = document.querySelector("#rain");

let current_time = new Date;

search.addEventListener('click', () => {
    city = document.getElementById("inputElement").value;
    document.getElementById("inputElement").value="";

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + encodeURIComponent(city);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '558cb1ce98msh0a0bdc77c0df33ap1c5da9jsn524dbe9c0882',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    async function fetchWeather() {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();

            const sunriseTimestamp = result.sunrise;
            const sunriseDate = new Date(sunriseTimestamp * 1000);
            const d_hours = sunriseDate.getHours();
            const d_minutes = sunriseDate.getMinutes().toString().padStart(2, '0');
            const d_seconds = sunriseDate.getSeconds().toString().padStart(2, '0');
            const formattedRiseTime = `${d_hours}:${d_minutes}:${d_seconds}`;


            const sunSetTimestamp = result.sunset;
            const sunSetDate = new Date(sunSetTimestamp * 1000);
            const n_hours = sunSetDate.getHours();
            const n_minutes = sunSetDate.getMinutes().toString().padStart(2, '0');
            const n_seconds = sunSetDate.getSeconds().toString().padStart(2, '0');
            const formattedSetTime = `${n_hours}:${n_minutes}:${n_seconds}`;


            let condition = result.feels_like;
            function describeTemperature(feels_like) {
                if (feelsLike < 0) {
                    weather_condition.innerText = "Freezing cold";
                } else if (feelsLike >= 0 && feelsLike < 10) {
                    weather_condition.innerText = "Very cold";
                } else if (feelsLike >= 10 && feelsLike < 15) {
                    weather_condition.innerText = "Cold";
                } else if (feelsLike >= 15 && feelsLike < 20) {
                    weather_condition.innerText = "Comfortable";
                } else if (feelsLike >= 20 && feelsLike < 25) {
                    weather_condition.innerText = "Warm";
                } else if (feelsLike >= 25 && feelsLike < 30) {
                    weather_condition.innerText = "Hot";
                } else if (feelsLike >= 30 && feelsLike < 35) {
                    weather_condition.innerText = "Very hot";
                } else {
                    weather_condition.innerText = "Extremely hot";
                }
            }

            // Example usage:
            const feelsLike = 17;
            const description = describeTemperature(feelsLike);
            console.log(`It feels like ${feelsLike}°C, which is ${description}.`);

            CityName.innerText=city;



            temp.innerText = result.temp + '\u00B0';
            weather_condition;
            high.innerText = result.max_temp + '\u00B0';
            low.innerText = result.min_temp + '\u00B0';
            wind.innerText = result.wind_speed;
            sunrise.innerText = formattedRiseTime;
            sunSet.innerText = formattedSetTime;
            rain.innerText = result.cloud_pct + "%";
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    fetchWeather();



})



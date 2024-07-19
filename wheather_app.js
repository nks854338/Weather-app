let current_dates = document.querySelector("#current_date");
let CityName = document.querySelector("#city");
let search = document.querySelector(".searchicon");
let weather_condition = document.querySelector("#weather_condition");
let temp = document.querySelector("#temp");
let high = document.querySelector("#high");
let low = document.querySelector("#low");
let sunrise = document.querySelector("#sunrise");
let sunSet = document.querySelector("#sunset");
let cloudcover = document.querySelector("#cloudcover");
let humidity = document.querySelector("#humidity");


//week_day's minimum temprature variable declear

let D_1min = document.querySelector("#D_1min");
let D_2min = document.querySelector("#D_2min");
let D_3min = document.querySelector("#D_3min");
let D_4min = document.querySelector("#D_4min");
let D_5min = document.querySelector("#D_5min");
let D_6min = document.querySelector("#D_6min");
let D_7min = document.querySelector("#D_7min");
let D_8min = document.querySelector("#D_8min");


//week_day's maximum temprature variable declear

let D_1max = document.querySelector("#D_1max");
let D_2max = document.querySelector("#D_2max");
let D_3max = document.querySelector("#D_3max");
let D_4max = document.querySelector("#D_4max");
let D_5max = document.querySelector("#D_5max");
let D_6max = document.querySelector("#D_6max");
let D_7max = document.querySelector("#D_7max");
let D_8max = document.querySelector("#D_8max");


//week_day's variable declear

let week1 = document.querySelector("#week1");
let week2 = document.querySelector("#week2");
let week3 = document.querySelector("#week3");
let week4 = document.querySelector("#week4");
let week5 = document.querySelector("#week5");
let week6 = document.querySelector("#week6");
let week7 = document.querySelector("#week7");
let week8 = document.querySelector("#week8");


// time component 
let current_time = new Date;
let Dates = current_time.getDate();
let day = current_time.getDay();
let month = current_time.getMonth();

function Samay() {    //function assign week names

    if (day == 0) {
        day = "Sunday";
        week1.innerText = 'Sun';
        week2.innerText = 'Mon';
        week3.innerText = 'Tue';
        week4.innerText = 'Wed';
        week5.innerText = 'Thu';
        week6.innerText = 'Fri';
        week7.innerText = 'Sat';
        week8.innerText = 'Sun';
    }
    else if (day == 1) {
        day = "Monday";
        week8.innerText = 'Mon';
        week1.innerText = 'Mon';
        week2.innerText = 'Tue';
        week3.innerText = 'Wed';
        week4.innerText = 'Thu';
        week5.innerText = 'Fri';
        week6.innerText = 'Sat';
        week7.innerText = 'Sun';
    }
    else if (day == 2) {
        day = "Tuesday";
        week7.innerText = 'Mon';
        week8.innerText = 'Tue';
        week1.innerText = 'Tue';
        week2.innerText = 'Wed';
        week3.innerText = 'Thu';
        week4.innerText = 'Fri';
        week5.innerText = 'Sat';
        week6.innerText = 'Sun';
    }
    else if (day == 3) {
        day = "Wednesday";
        week6.innerText = 'Mon';
        week7.innerText = 'Tue';
        week8.innerText = 'Wed';
        week1.innerText = 'Wed';
        week2.innerText = 'Thu';
        week3.innerText = 'Fri';
        week4.innerText = 'Sat';
        week5.innerText = 'Sun';
    }
    else if (day == 4) {
        day = "Thursday";
        week5.innerText = 'Mon';
        week6.innerText = 'Tue';
        week7.innerText = 'Wed';
        week8.innerText = 'Thu';
        week1.innerText = 'Thu';
        week2.innerText = 'Fri';
        week3.innerText = 'Sat';
        week4.innerText = 'Sun';
    }
    else if (day == 5) {
        day = "Friday";
        week4.innerText = 'Mon';
        week5.innerText = 'Tue';
        week6.innerText = 'Wed';
        week7.innerText = 'Thu';
        week8.innerText = 'Fri';
        week1.innerText = 'Fri';
        week2.innerText = 'Sat';
        week3.innerText = 'Sun';
    }
    else if (day == 6) {
        day = "Saturday";
        week3.innerText = 'Mon';
        week4.innerText = 'Tue';
        week5.innerText = 'Wed';
        week6.innerText = 'Thu';
        week7.innerText = 'Fri';
        week8.innerText = 'Sat';
        week1.innerText = 'Sat';
        week2.innerText = 'Sun';
    }


    //assign month names

    if (month == 0) {
        month = "January";
    }
    else if (month == 1) {
        month = "February";
    }
    else if (month == 2) {
        month = "March";
    }
    else if (month == 3) {
        month = "April";
    }
    else if (month == 4) {
        month = "May";
    }
    else if (month == 5) {
        month = "June";
    }
    else if (month == 6) {
        month = "July";
    }
    else if (month == 7) {
        month = "August";
    }
    else if (month == 8) {
        month = "September";
    }
    else if (month == 9) {
        month = "October";
    }
    else if (month == 10) {
        month = "November";
    }
    else if (month == 11) {
        month = "December";
    }

    let current_date = day + ", " + Dates + " " + month;
    current_dates.innerText = current_date;
}

Samay();


// measureing weather condition without user input
async function fetchWeathers(){
try {
    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Supaul%2C%20india?key=G9LND5LG6QJG8Y3QN3EAQPHFE');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();


    //give icons for every weather condition
    document.getElementById("icon1").src = 'image/'+result.currentConditions.icon+'.png';
    document.getElementById("icon2").src = 'image/'+result.days[0].icon+'.png';
    document.getElementById("icon3").src = 'image/'+result.days[1].icon+'.png';
    document.getElementById("icon4").src = 'image/'+result.days[2].icon+'.png';
    document.getElementById("icon5").src = 'image/'+result.days[3].icon+'.png';
    document.getElementById("icon6").src = 'image/'+result.days[4].icon+'.png';
    document.getElementById("icon7").src = 'image/'+result.days[5].icon+'.png';
    document.getElementById("icon8").src = 'image/'+result.days[6].icon+'.png';
    document.getElementById("icon9").src = 'image/'+result.days[7].icon+'.png';
    

    CityName.innerText = result.address;
    high.innerText = Math.floor(((result.days[0].tempmax) - 32) * 5 / 9) + '\u00B0';
    low.innerText = Math.floor(((result.days[0].tempmin) - 32) * 5 / 9) + '\u00B0';
    temp.innerText = Math.floor(((result.currentConditions.temp) - 32) * 5 / 9) + '\u00B0 C';
    weather_condition.innerText = result.currentConditions.conditions;
    sunrise.innerText = result.days[0].sunrise;
    sunSet.innerText = result.days[0].sunset;
    humidity.innerText = result.currentConditions.humidity + "%";
    cloudcover.innerText = result.currentConditions.cloudcover + "%";

    D_1min.innerText = Math.floor(((result.days[0].tempmin) - 32) * 5 / 9) + '\u00B0';
    D_2min.innerText = Math.floor(((result.days[1].tempmin) - 32) * 5 / 9) + '\u00B0';
    D_3min.innerText = Math.floor(((result.days[2].tempmin) - 32) * 5 / 9) + '\u00B0';
    D_4min.innerText = Math.floor(((result.days[3].tempmin) - 32) * 5 / 9) + '\u00B0';
    D_5min.innerText = Math.floor(((result.days[4].tempmin) - 32) * 5 / 9) + '\u00B0';
    D_6min.innerText = Math.floor(((result.days[5].tempmin) - 32) * 5 / 9) + '\u00B0';
    D_7min.innerText = Math.floor(((result.days[6].tempmin) - 32) * 5 / 9) + '\u00B0';
    D_8min.innerText = Math.floor(((result.days[7].tempmin) - 32) * 5 / 9) + '\u00B0';

    D_1max.innerText = Math.floor(((result.days[0].tempmax) - 32) * 5 / 9) + '\u00B0';
    D_2max.innerText = Math.floor(((result.days[1].tempmax) - 32) * 5 / 9) + '\u00B0';
    D_3max.innerText = Math.floor(((result.days[2].tempmax) - 32) * 5 / 9) + '\u00B0';
    D_4max.innerText = Math.floor(((result.days[3].tempmax) - 32) * 5 / 9) + '\u00B0';
    D_5max.innerText = Math.floor(((result.days[4].tempmax) - 32) * 5 / 9) + '\u00B0';
    D_6max.innerText = Math.floor(((result.days[5].tempmax) - 32) * 5 / 9) + '\u00B0';
    D_7max.innerText = Math.floor(((result.days[6].tempmax) - 32) * 5 / 9) + '\u00B0';
    D_8max.innerText = Math.floor(((result.days[7].tempmax) - 32) * 5 / 9) + '\u00B0';


} catch (error) {
}
}
fetchWeathers();


search.addEventListener('click', () => {                       //assign wheather condition according to user input
    city = document.getElementById("inputCity").value;
    document.getElementById("inputCity").value = "";

    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + encodeURIComponent(city) + '?key=G9LND5LG6QJG8Y3QN3EAQPHFE';

    async function fetchWeather() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();

                CityName.innerText = result.address;
                high.innerText = Math.floor(((result.days[0].tempmax) - 32) * 5 / 9) + '\u00B0';
                low.innerText = Math.floor(((result.days[0].tempmin) - 32) * 5 / 9) + '\u00B0';
                temp.innerText = Math.floor(((result.currentConditions.temp) - 32) * 5 / 9) + '\u00B0';
                weather_condition.innerText = result.currentConditions.conditions;
                sunrise.innerText = result.days[0].sunrise;
                sunSet.innerText = result.days[0].sunset;
                humidity.innerText = result.currentConditions.humidity + "%";
                cloudcover.innerText = result.currentConditions.cloudcover + "%";

                D_1min.innerText = Math.floor(((result.days[0].tempmin) - 32) * 5 / 9) + '\u00B0';
                D_2min.innerText = Math.floor(((result.days[1].tempmin) - 32) * 5 / 9) + '\u00B0';
                D_3min.innerText = Math.floor(((result.days[2].tempmin) - 32) * 5 / 9) + '\u00B0';
                D_4min.innerText = Math.floor(((result.days[3].tempmin) - 32) * 5 / 9) + '\u00B0';
                D_5min.innerText = Math.floor(((result.days[4].tempmin) - 32) * 5 / 9) + '\u00B0';
                D_6min.innerText = Math.floor(((result.days[5].tempmin) - 32) * 5 / 9) + '\u00B0';
                D_7min.innerText = Math.floor(((result.days[6].tempmin) - 32) * 5 / 9) + '\u00B0';
                D_8min.innerText = Math.floor(((result.days[7].tempmin) - 32) * 5 / 9) + '\u00B0';

                D_1max.innerText = Math.floor(((result.days[0].tempmax) - 32) * 5 / 9) + '\u00B0';
                D_2max.innerText = Math.floor(((result.days[1].tempmax) - 32) * 5 / 9) + '\u00B0';
                D_3max.innerText = Math.floor(((result.days[2].tempmax) - 32) * 5 / 9) + '\u00B0';
                D_4max.innerText = Math.floor(((result.days[3].tempmax) - 32) * 5 / 9) + '\u00B0';
                D_5max.innerText = Math.floor(((result.days[4].tempmax) - 32) * 5 / 9) + '\u00B0';
                D_6max.innerText = Math.floor(((result.days[5].tempmax) - 32) * 5 / 9) + '\u00B0';
                D_7max.innerText = Math.floor(((result.days[6].tempmax) - 32) * 5 / 9) + '\u00B0';
                D_8max.innerText = Math.floor(((result.days[7].tempmax) - 32) * 5 / 9) + '\u00B0';


                document.getElementById("icon1").src = 'image/'+currentConditions.icon+'.png';
                document.getElementById("icon2").src = 'image/'+result.days[0].icon+'.png';
                document.getElementById("icon3").src = 'image/'+result.days[1].icon+'.png';
                document.getElementById("icon4").src = 'image/'+result.days[2].icon+'.png';
                document.getElementById("icon5").src = 'image/'+result.days[3].icon+'.png';
                document.getElementById("icon6").src = 'image/'+result.days[4].icon+'.png';
                document.getElementById("icon7").src = 'image/'+result.days[5].icon+'.png';
                document.getElementById("icon8").src = 'image/'+result.days[6].icon+'.png';
                document.getElementById("icon9").src = 'image/'+result.days[7].icon+'.png';
                


        } catch (error) {
        }
    }

    fetchWeather();

})
















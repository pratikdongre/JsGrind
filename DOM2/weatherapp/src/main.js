import "./style.css"
import {getWeather} from "../weather.js"
import { ICON_MAP } from "./iconMap";


navigator.geolocation.getCurrentPosition(positionSuccess,positionError)

function positionSuccess(position){
    const {latitude, longitude} = position.coords
    getWeather(latitude,
                longitude,
                Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then(renderWeather)
    .catch(e => {
        console.error(e);
        alert("Error getting weather.")
    })
}


function positionError(){
   alert ("there was an error getting your geo location. please allow us to use your location");
}



function renderWeather({current,daily,hourly}){
    renderCurrentWeather(current);
    renderDailyWeather(daily);
    renderHourlyWeather(hourly);
    document.body.classList.remove("blurred");

}

function setValue(selector,value,parent = document){
 parent.querySelector(`[data-${selector}]`).textContent = value;
}

function getIconUrl(iconCode){
    return `icons/${ICON_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector('[data-current-icon]');


function renderCurrentWeather(current){
    currentIcon.src = getIconUrl(current.iconCode);
    console.log(current);

    setValue("current-temp",current.currentTemp);
    setValue("current-high",current.highTemp);
    setValue("current-fl-high",current.highFeelslike);
    setValue("current-low",current.lowTemp);
    setValue("current-fl-low",current.lowFeelslike);
    setValue("current-wind",current.windSpeed);
    setValue("current-precip",current.precip);  
     
}

const DAY_FORMATTER = new Intl.DateTimeFormat(undefined,{weekday : 'long'})
const dailySection = document.querySelector('[data-day-section');
const dayCardTemplate = document.getElementById('day-card-template');

function renderDailyWeather(daily){
    console.log(daily)
    dailySection.innerHTML = '';
    daily.forEach(day => {
        const element = dayCardTemplate.content.cloneNode(true);
        setValue('temp',day.maxTemp, parent = element);
        setValue('day',DAY_FORMATTER.format(day.timestamp),element);
        element.querySelector('[data-icon]').src =  getIconUrl(day.iconCode);

        dailySection.append(element);



    })
  
}

const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined,{hour : "numeric"});
const HourSection = document.querySelector('[data-hour-section]');
const HourRowTemplate = document.getElementById('hour-row-template')

function renderHourlyWeather(hourly){
    console.log(hourly);
    HourSection.innerHTML = '';
    hourly.forEach(hour=> {
        const element = HourRowTemplate.content.cloneNode(true);
        setValue('temp', hour.temp,parent= element);
        setValue('fl-temp', hour.feelsLike,parent= element);
        setValue('precip', hour.precip,parent= element);
        setValue('day', DAY_FORMATTER.format(hour.timestamp),parent= element);
        setValue('wind', hour.windSpeed,parent= element);
        setValue('time', HOUR_FORMATTER.format(hour.timestamp),parent= element);
        element.querySelector('[data-icon]').src =  getIconUrl(hour.iconCode);
        HourSection.append(element);

      
         
       


    }) 

}


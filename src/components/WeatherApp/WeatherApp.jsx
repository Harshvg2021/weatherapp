import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/search.png"
import cloud_icon from "../Assets/cloud.png"
import rain_icon from "../Assets/rain.png"
import drizzle_icon from "../Assets/drizzle.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"
import snow_icon from "../Assets/snow.png"
import clear_icon from "../Assets/clear.png"


const WeatherApp =  () => {
  const api_key = "b9b29fe1d8a497be0d18cb4366fc75a6"
  const [wicon,setwicon] = useState(cloud_icon);
  const search = async () =>{
    let element =document.getElementById("cityInput");
    console.log(element.value)
    element = element.value
    if(element===""){
      return 0;
    } 
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${element}&units=Metric&appid=${api_key}`
    let resp = await fetch(url);
    let data = await resp.json();
    // console.log(data);
    let humidity= document.getElementsByClassName("humidity-precent");
    let wind= document.getElementsByClassName("wind-rate")
    let temp= document.getElementsByClassName("weather-temp")
    let location = document.getElementsByClassName("weather-location")
    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed +"Km/Hr";
    temp[0].innerHTML = data.main.temp + "*C";
    location[0].innerHTML= data.name;
    if(data.weather[0].icon === "01d" || data.weather.icon === "01n"){
      setwicon(clear_icon);
    }
    else if(data.weather[0].icon === "02d" || data.weather.icon === "02n"){
      setwicon(cloud_icon);
    }
    else if(data.weather[0].icon === "03d" || data.weather.icon === "03n"){
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon === "04d" || data.weather.icon === "04n"){
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon === "05d" || data.weather.icon === "05n"){
      setwicon(rain_icon);
    }
    else if(data.weather[0].icon === "10d" || data.weather.icon === "10n"){
      setwicon(rain_icon);
    }
    else if(data.weather[0].icon === "13d" || data.weather.icon === "13n"){
      setwicon(snow_icon);
    }
    else{
      setwicon(clear_icon)
    }
    
  }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text"  id ="cityInput" className='cityInput' placeholder='Search'></input>
        <div className='search-icon' onClick={()=>search()}>
          <img src={search_icon} />
        </div>
      </div>
      <div className='weather-image'>
        <img src={wicon} alt="" />
      </div>
      <div className='weather-temp'>24*C</div>
      <div className='weather-location'> London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} className='icon'/>
          <div className='data'>
            <div className='humidity-precent'> 64%</div>
            <div className='text'> Humidity</div>
          </div>
        </div>
        <div className='element'>
            <img  src={wind_icon} className='icon'/>
            <div className='data'>
              <div className='wind-rate'> 18km/hr</div>
              <div className='text'> Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
import React, { useState } from 'react'

function WeatherApp() {
    let [city,setCity] = useState('')
    let [weather,setWeather] = useState(null)
    let apiKey = 'abc123xyz'
    let getWeather = async()=>{
        if(city===''){
            alert('Enter your city')
            return
        }
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
        let data = await response.json()
        setWeather(data)
    }
  return (
    <div>
        <h2>Weather App</h2>
        <input type="text" placeholder='Enter city' value={city} onChange={e=>setCity(e.target.value)}/>
        <button onClick={getWeather}>Search</button>
        <br /><br />
        {weather && weather.main &&(
            <div>
                <h3>City: {weather.name}</h3>
                <h3>Temperature: {weather.main.temp}</h3>
                <h3>Weather {weather.weather[0].main}</h3>
            </div>
        )}
    </div>
  )
}

export default WeatherApp
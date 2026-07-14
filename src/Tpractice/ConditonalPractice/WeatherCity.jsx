import React, { useState } from 'react'

function WeatherCity() {
    let [city,setCity] = useState('')
    let [weather,setWeather] = useState('')

    let getWeather = ()=>{
        if(city.toLowerCase() === 'hyderabad')
            setWeather('42 C Sunny')
        else if(city.toLowerCase() === 'delhi')
            setWeather('28 C cloudy')
        else
            setWeather('City not found')
    }
  return (
    <div>
        <input type="text" placeholder='Enter City' value={city} onChange={e=>setCity(e.target.value)}/>
        <br /><br />
        <button onClick={getWeather}>Search</button>
        {weather && <h3>{weather}</h3>}
    </div>
  )
}

export default WeatherCity
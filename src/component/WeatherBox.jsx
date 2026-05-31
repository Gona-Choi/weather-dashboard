import React from 'react'
import Button from 'react-bootstrap/Button';


const WeatherBox = ({weather}) => {
  
  return (
      <div className='first-box'>
        <div className="city-name">{weather?.name}</div>
        <p></p>
        <h2 className='google-sans-num'>{weather?.main.temp}°C / {(weather?.main?.temp * 1.8 + 32).toFixed(2)}°F</h2>
        <h3 className='google-sans-num'>{weather?.weather[0].description}</h3>
      </div>
   
  )
}

export default WeatherBox
import React from 'react'
import {Button} from 'react-bootstrap';



const WeatherButton = ({cities, setCity, selectedCity, handleCityChange}) => {
  
  return (
    <div className="mt-4">
        <Button
        variant={`${selectedCity == null ? "primary" : "outline-primary"}`}
        className="me-2"
        onClick={()=> handleCityChange("current")}>Current Location</Button>
        
        {cities.map((city)=>(
        <Button
        variant={`${selectedCity == city ? "primary" : "outline-primary"}`}
        className="me-2"
        key={city}
        onClick={()=>handleCityChange(city) }>{city}</Button>
        ))}
      
    </div>
  )
}

export default WeatherButton
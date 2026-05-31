import { useState, useEffect } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox"
import WeatherButton from "./component/WeatherButton"
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";


function App() {
  const [weather, setWeather] = useState(null)
  const cities = ["Paris","Seoul","New York"]
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiError, setAPIError] = useState("");
  
  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
      
    })
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=15287c905665d44d81b87ba54b9d1a4e`
        let response = await fetch(url)
        let data = await response.json()
        setWeather(data)
        setLoading(false)
      } catch (err) {
          setAPIError(err.message);
        setLoading(false)
    };
  }

  const getWeatherByCity =async()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=15287c905665d44d81b87ba54b9d1a4e`
      let response = await fetch(url);
      let data = await response.json()
      setWeather(data)
      setLoading(false)
    }catch(err){
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
  }};

  useEffect(()=>{
    if(city == ""){
      getCurrentLocation()
    } else {
      getWeatherByCity()
    }
    },[city])

  return (
    <div>
        {loading?(
          <div className='container'>
            <ClipLoader color="#f88c6b" loading={loading} size={150} />
          </div>
          ):!apiError ? (
          <div className='container'>
            <WeatherBox weather={weather} />
            <WeatherButton cities={cities} selectedCity={city} handleCityChange={handleCityChange} />
          </div>
  ):(
    apiError
  )}
    </div>
    )
}

export default App

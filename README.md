# Weather App

A responsive weather application that displays real-time weather data based on current location or selected cities.

## Live Demo

https://whimsical-cajeta-44e077.netlify.app/

## Features

- **Current Location Weather**: Automatically detects and displays weather based on GPS location on launch
- **City Selection**: Switch between Paris, Seoul, and New York with one click
- **Temperature Display**: Shows both Celsius and Fahrenheit
- **Weather Status**: Displays weather description (e.g. clear sky, light rain)
- **Loading Spinner**: Visual feedback while fetching data
- **Error Handling**: Displays error message if API call fails

## Tech Stack

- **React 18**: UI library
- **Bootstrap 5**: Responsive styling and components
- **React Spinners**: Loading spinner (`ClipLoader`)
- **OpenWeatherMap API**: Real-time weather data source
- **Vite**: Build tool and development server

## Project Structure

```
src/
├── component/
│   ├── WeatherBox.jsx          # Displays city, temperature, weather status
│   └── WeatherButton.jsx       # City selection buttons
└── App.jsx                     # Main logic and API calls
```

## Key Implementation Highlights

### Geolocation API
- On launch, uses `navigator.geolocation` to get current coordinates [https://api.openweathermap.org]
- Fetches weather data by latitude and longitude

### City Switching
- Clicking a city button updates state and triggers a new API call
- Active button is highlighted with filled style vs outline

### Loading State
- `ClipLoader` spinner displays while data is being fetched
- Loading state resets after successful or failed API call


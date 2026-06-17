# Weather Dashboard

A simple, real-time weather application using the OpenWeather API with a glassmorphism UI.

## Features

- 🌍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- 📝 Show weather description
- 🎨 Beautiful glassmorphism design with gradient background
- ⚡ Fast and lightweight (vanilla JavaScript)

## Setup Instructions

### 1. Get a Free API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to your API keys section
4. Copy your API key

### 2. Add Your API Key

Open `index.html` and replace:

```javascript
const apiKey = 'YOUR_OPENWEATHER_API_KEY';
```

With your actual API key:

```javascript
const apiKey = 'abc123xyz789...';
```

### 3. Run the Dashboard

Open `index.html` in your browser (or use a local server like Live Server).

## Usage

1. Type a city name in the input field
2. Click "Search" or press Enter
3. Weather data appears instantly

## API Used

- **Endpoint:** OpenWeather API (Free tier)
- **Unit:** Metric (Celsius)
- **Response:** Current weather data

## Technologies

- HTML5
- CSS3 (Glassmorphism & Gradients)
- Vanilla JavaScript (Fetch API)
- OpenWeather API

## Future Enhancements

- [ ] 5-day forecast
- [ ] Display humidity, wind speed, and pressure
- [ ] Geolocation to auto-detect user's city
- [ ] Weather icons and animations
- [ ] Local storage for search history
- [ ] Dark/Light theme toggle

import "../styles/WeatherCard.css";

function WeatherCard({ weather }) {
  const { name, sys, main, weather: conditions, wind, visibility } = weather;
  const { description, icon } = conditions[0];

  return (
    <div className="weather-result">
      <div className="weather-top">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <div>
          <div className="weather-city">
            {name}, {sys.country}
          </div>
          <div className="weather-condition">{description}</div>
        </div>
      </div>

      <div className="weather-temp">
        Temperature : 
        <span style={{fontWeight:100}}> {Math.round(main.temp)}°C</span>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <div className="label">Feels Like :</div>
          <div className="value">{Math.round(main.feels_like)}°C</div>
        </div>
        <div className="detail-item">
          <div className="label">Humidity :</div>
          <div className="value">{main.humidity}%</div>
        </div>
        <div className="detail-item">
          <div className="label">Wind :</div>
          <div className="value">{wind.speed} m/s</div>
        </div>
        <div className="detail-item">
          <div className="label">Visibility :</div>
          <div className="value">{(visibility / 1000).toFixed(1)} km</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

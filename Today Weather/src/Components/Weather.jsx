import React, { useState } from "react";
import "../App.css";
import Card from "./Card";
import Error from "./Error";
import Form from "./Form";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const Weather = () => {
   const [detail, setDetail] = useState({
      city: "",
      // country: "",
      temp: "",
      min: "",
      max: "",
      desc: "",
      icon: "",
      lat: "",
      lon: "",
      timezone: "",
      pressure: "",
      humidity: "",
      winddir: "",
      windspeed: "",
      visibility: "",
      feellike: "",
      error: false,
   });

   const getWeather = async (event) => {
      event.preventDefault();

      // const API_KEY = "6f9770c12c5f0a01f0cfa1b47e6e27a4";
      const API_KEY = "6c800c7b1e0afdec3e647f2f8f1efe51";

      const city = event.target.elements.city.value;
      // const country = event.target.elements.country.value;

      try {
         const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

         const response = await fetch(URL);
         const data = await response.json();

         const weatherIcon = {
            ThunderStorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-strom-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog",
         };

         setDetail({
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            min: data.main.temp_min,
            max: data.main.temp_max,
            desc: data.weather[0].description,
            lat: data.coord.lat,
            lon: data.coord.lon,
            humidity: data.main.humidity,
            visibility: data.visibility,
            winddir: data.wind.deg,
            windspeed: data.wind.speed,
            feellike: data.main.feels_like,
            get pressure() {
               let hpa = data.main.pressure;
               let mmhg = Math.floor(hpa / 1.33);
               return mmhg;
            },
            get timezone() {
               let t = data.timezone;
               let hr = String(Math.floor(t / 3600)).padStart(2, "0");
               let min = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
               let time = `${hr}:${min}`;
               return time;
            },
            get icon() {
               if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
                  return weatherIcon.ThunderStorm;
               } else if (data.weather[0].id >= 300 && data.weather[0].id <= 321) {
                  return weatherIcon.Drizzle;
               } else if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
                  return weatherIcon.Rain;
               } else if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
                  return weatherIcon.Snow;
               } else if (data.weather[0].id >= 700 && data.weather[0].id <= 781) {
                  return weatherIcon.Atmosphere;
               } else if (data.weather[0].id >= 801 && data.weather[0].id <= 804) {
                  return weatherIcon.Clouds;
               } else {
                  return weatherIcon.Clear;
               }
            },
         });
      } catch (error) {
         setDetail({
            error: true,
         });
      }
   };

   return (
      <>
         <div className="container back-image p-4 m-4 mx-auto">
            <h1 className="text-center font-weight-bold py-3">Today Weather App</h1>
            {detail.error ? <Error /> : null}
            <Form callFunction={getWeather} />
            <div className="row">
               <div className="col-md-4 col-10 mx-auto d-flex justify-content-center align-items-center">
                  <LeftCard lat={detail.lat} lon={detail.lon} timezone={detail.timezone} />
               </div>
               <div className="col-md-4 col-10 mx-auto">
                  <Card city={detail.city} country={detail.country} temp={detail.temp} min={detail.min} max={detail.max} desc={detail.desc} icon={detail.icon} timezone={detail.timezone} feel={detail.feellike} />
               </div>
               <div className="col-md-4 col-10 mx-auto d-flex justify-content-center align-items-center">
                  <RightCard pressure={detail.pressure} humidity={detail.humidity} winddir={detail.winddir} windspeed={detail.windspeed} visibility={detail.visibility} />
               </div>
            </div>
         </div>
      </>
   );
};

export default Weather;

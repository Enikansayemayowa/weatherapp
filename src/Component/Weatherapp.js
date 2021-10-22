import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {RiFahrenheitLine} from "react-icons/ri"
import img1 from "../img/rainny.png"
import img2 from "../img/realsunny.png"
import img3 from "../img/sunny.jfif"

const Weatherapp = () => {
  const apikey =
    "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=34a0d480538063573d1eef19f76cb7ab";
  // https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=34a0d480538063573d1eef19f76cb7ab
  const [weatherData, setWeatherData] = useState("");
  const [city, setCity] = useState([]);

  const getWeather = async (e) => {
    if (e.key === "Enter") {
      await fetch(apikey)
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
      console.log(weatherData);
      setCity("");
    }
  };
  

  return (
    <Container>
      <Wrapper>
       <Input
          placeholder="Search City..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={getWeather}
        />
        {typeof weatherData.main === "undefined" ? (
          <Welcome>welcome to weather data</Welcome>
        ) : (
          <Resp>
            <Text>{weatherData.name}</Text>
            <Temp>{Math.round(weatherData.main.temp)-273}<RiFahrenheitLine/></Temp>

            {weatherData?.weather[0].main ==="Clouds" ? (
            <Cloud src={img3}/>):weatherData?.weather[0].main ==="Sunny" ? (
              <Cloud src={img2}/>):weatherData?.weather[0].main ==="Rain" ? (
                <Cloud src={img1}/>):null
            
          } 
            
          </Resp>
        )}
            {/* {weatherData cod === "404" ? (
      <div>city not found enter correct city</div>
    ):(
      <>
      </>
    )
  } */}
   
      </Wrapper>
    </Container>
  );
};
export default Weatherapp;

const Input = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 18px;
  padding: 5px;
  border-color: lightblue;
  border: 1px solid red;
`;
const Resp = styled.button`
  width: 100%;
  margin-top: 50px;
  border: 0;
  background-color: teal;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  // justify-content:center;
`;
const Text = styled.div`
color: white;
font-weight:bold;
font-size:45px;
margin:10px 0px 40px 0px;
`;
const Temp = styled.div`
color: white;
font-weight:bold;
font-size:45px;
margin:10px 0px 40px 0px;
`;
// const Button = styled.but``;
const Cloud = styled.img`
width:150px;
height:150px;
`;
const Welcome = styled.div`
color: white;
font-weight:bold;
font-size:45px;
margin:10px 0px 40px 0px;
`;

// const Card = styled.div``;
// const Card = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  // justify-content:center;
  padding-top: 50px;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightblue;
`;

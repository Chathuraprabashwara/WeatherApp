import { border } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'




export default function Weathercard(prop) {

    // console.log(prop.city )
    const api = {
        key: "263f4cde2bbe2a97eb32bdeec6b8c947",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    const [query, setQuery] = useState(prop.city);
    const [weather, setWeather] = useState({});
    console.log(query)
    console.log(api.key)
    console.log(query)
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setQuery('');
            setWeather(result)
            console.log(weather);
        });
    return (<div>
        {(typeof weather.main != "undefined") ? (
            <div style={{
                width: "350px",
                display: "block",
                margin: "20px",
                height: "250px",
                border: "solid 2px",
                backgroundImage: `url("https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")`
            }}>

                <Row>
                    <Col>

                        <h2 style={{ color: "white" }}>
                            {weather.name} , {weather.sys.country}
                        </h2>
                    </Col>
                    <Col>
                        <h2 style={{ color: "white" }}>{Math.round(weather.main.temp)} °C</h2>
                    </Col>
                </Row>
                <Row>
                    <h2 style={{ color: "white" }}>&#9729;{weather.weather[0].main}</h2>
                </Row>

            </div>) : ('')}
    </div>
    );
}
import React, {useState} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Button from '@mui/material/Button';
import CardList from './CardList';
import PopupCard from './PopupCard';
//set up Api 
const api = {
  key:"0832a7350078d7614b635a8442d6fd8d",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query,setQuery] = useState("");
  const [weather,setWeather] = useState({});
  const [pop, setPop] =useState(false);
  const data =  [{"CityCode":"1248991","CityName":"Colombo","Temp":"33.0","Status":"Clouds"},
                {"CityCode":"1850147","CityName":"Tokyo","Temp":"8.6","Status":"Clear"},
                {"CityCode":"2644210","CityName":"Liverpool","Temp":"16.5","Status":"Rain"},
                {"CityCode":"2988507","CityName":"Paris","Temp":"22.4","Status":"Clear"},
                {"CityCode":"2147714","CityName":"Sydney","Temp":"27.3","Status":"Rain"},
                {"CityCode":"4930956","CityName":"Boston","Temp":"4.2","Status":"Mist"},
                {"CityCode":"1796236","CityName":"Shanghai","Temp":"10.1","Status":"Clouds"},
                {"CityCode":"3143244","CityName":"Oslo","Temp":"-3.9","Status":"Clear"}]




  const search = evt => {
    console.log(evt)
    // if (evt.key === "Enter" ) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then( res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result)
        setPop(true)
        console.log(result)
        
      });
    // }
  }
  return (
    <div className="App">
      <Container>
      <Row>
        <Row>
        <Col xs></Col>
        <Col  md><h1 style={{color:"white"}}>Weather APP</h1></Col> 
          <Col xs></Col>
        </Row>
        <Row>
      <Col xs></Col>
        <Col xs>
       <div className="search-box">
         <input
         type="text"
         className="search-bar"
         placeholder="Enter A City.."
         onChange={e => setQuery(e.target.value)}
         value={query}
        //  onKeyPress={search}
         />
       </div>
       </Col>
       <Col><Button  variant="contained" color="secondary"
       onClick={search}
       >search</Button></Col>
       <Col xs></Col>
       </Row>
          </Row>
          {(typeof weather.main != "undefined") ?(
          <PopupCard trigger={pop} setTriger={setPop} style={{alignItems:"center"}}>
           <Container>
             <Row>
               <Col>
             <h4 >
              {weather.name} , {weather.sys.country}
            </h4>
            <h3>{Math.round(weather.main.temp)} °C</h3>
            </Col>
             </Row>
             <Row>
               <Col>
               {/* <CardList data={data}/> */}
               </Col>
             </Row>
              <Row>
                <Col md={6}>
                <h6>humidity:{weather.main.humidity} %</h6> 
            <h6>pressure:{weather.main.pressure} pa</h6> 
            <h6>visibility:{weather.visibility/1000} km</h6> 
                </Col>
                <Col md={6}>
                <h6>{weather.wind.speed} m/s</h6> 
            <h6>{weather.wind.deg} Degree</h6> 
                </Col>
              </Row>
           
            
           </Container>
           
          </PopupCard>) : ("")}
          </Container>
    </div>
  );
}

export default App;

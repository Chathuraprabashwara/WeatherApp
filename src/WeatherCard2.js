import { margin } from '@mui/system'
import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
export default function WeatherCard2(prop) {
    return (
        <div  >
            <Container style={{ width:"350px",
        flexdirection:" row",
        display:"flex",
        margin:"20px",
        height:"100px",
        backgroundImage: `url("https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")` 
        }}>
                <Row>
<Col >
        <h3 style={{color:'white',marginTop:"10%"}}>{prop.city}</h3>
</Col>

<Col  >
        <h3 style={{color:'white',marginTop:"10%"}}>{prop.Temp} °C</h3>
</Col>
                </Row>
            </Container>
            <Container style={{ width:"350px",
        flexdirection:" row",
        display:"flex",
        margin:"20px",
        height:"100px",
        backgroundColor: "#222831",
        position:"relative",
        bottom:"20px"
        }}>
<Col >
        <h3 style={{color:'white',marginTop:"10%"}}> &#9729; {prop.status}</h3>
</Col>


            </Container>
        </div>
    )
}

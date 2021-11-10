import React, {useEffect} from 'react'
import {Row,Col,Container} from 'react-bootstrap'
import Weathercard from './Weathercard'

function CardList(prop) {
    
  
    return (
        <div>
           <Container> 
                        
                       <Col>
                       {prop.data.map((val,key) => {
                
                return <Container style={{display: "flex",
                flexdirection:" row"}}> 
                <Row >
                    <Col xs="6" sm="6">
                    
                <Weathercard
                
                key={key} 
                city={val.CityName}
                Temp={val.Temp}
                status={val.Status}
                 />
                 </Col>
                 </Row>


                 </Container>
                 
            

                 
            } )}
                       
                       </Col>
                                
                            

                </Container>
               
       
               
           
             </div>
            
    )
}

export default CardList;
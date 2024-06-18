import React from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from "react-router-dom"
import '../styles/payment.css'
 import cardImg from '../assets/images/card_img.png'


const Payment = () => {
    return (
     <section>
      <Container>
          <Row>

          <Col lg='6' className='m-auto'>
            
              <div className='log'>
              <div className="log__form">
                
                
                  <h2>Payment</h2>
                <div className="users">
                <h5>cards accepted :</h5>
                  <img src={cardImg} alt=""/>
                </div>
                

                <Form >
                  <FormGroup>

                  <h6>name on card :</h6>
                    <input type="text" placeholder="mr. john deo" required/>
                    
                  </FormGroup>
                  <FormGroup>
                  <h6>credit card number :</h6>
                    <input type="number" placeholder="1111-2222-3333-4444" required/>
                  </FormGroup>

                  <FormGroup>
                  <h6>exp month :</h6>
                    <input type="text" placeholder="january" required/>
                  </FormGroup>

                  <FormGroup>
                    <h6>exp year :</h6>
                        <input type="number" placeholder="2022" required/>
                  </FormGroup>

                  <FormGroup>
                    <h6>CVV :</h6>
                        <input type="text" placeholder="1234" required/>
                  </FormGroup>

                 
                  <Link to ={'/thank-you'}>
                  <Button className='btn secondary__btn auth__btn'
                  type='submit'>pay
                  </Button>
                  </Link>
                  
                </Form>
                </div>
            
            </div>
          </Col>




              {/* <Col lg='8' >
             <div className='pay_form'> <h3 >payment</h3></div>
              <div classname='pay_section'>
              <Form >
                  <FormGroup>
                  
                    <span>cards accepted :</span>
                    <img src={cardImg} alt=""/>
               
                  </FormGroup>
                  <FormGroup>
                  
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                
                  </FormGroup>

                  <FormGroup>
                  
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                
                  </FormGroup>

                  <FormGroup>
                 
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                
                  </FormGroup>

                  <FormGroup>
                 
                    
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                        </FormGroup>

                        <FormGroup>
                    
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    
                  </FormGroup>
                  <Button className='btn primary__btn w-25' type='submit'>
                      <Link to='/thank-you'>Pay</Link>
                  </Button>
                </Form>
                </div>
  
                  
                  
              </Col> */}
          </Row>
      </Container>
     </section>
    )
  }
  
  export default Payment
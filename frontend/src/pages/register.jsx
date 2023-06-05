import React ,{useState, useContext} from "react";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import "../styles/register.css";
import registerImg from "../assets/images/register.gif";
import userImg from "../assets/images/man.png"
import { Link, useNavigate } from "react-router-dom";

import { authContext } from './../context/authContext';
import {BASE_URL} from './../utils/config'

const Register = () => {

  const navigate = useNavigate();
  const [credentials,setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
  });

  const {dispatch} = useContext(authContext)

  const handleChange= e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value
  }))
  }
 
  const handleClick = async e => {
    e.preventDefault();
    
    try{
      const res = await fetch(`${BASE_URL}/auth/register`,
      {
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()

      if(!res.ok ) alert(result.message)

      dispatch({type: 'REGISTER_SUCCESS'});
      alert('Successfully created your account')
      navigate("/login")
    }
    catch(err){
      alert(err.message)
    }
   }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="9 " className="m-auto">
            <div className="register__container d-flex justify-content-between">
            <div className="register__img">
              <img src={registerImg} alt="" />
            </div>

            <div className="register__form">
              <div className="register__user">
                <img src={userImg} alt=" "/>
              </div>
              <h2>Register</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="text" placeholder="Username" required id ='username' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder="Email" required id ='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder="Password" required id ='password' onChange={handleChange} />
                </FormGroup>
                <Button className="btn secondary__btn auth__btn" type="submit">
                  Create Account
                </Button>
              </Form>
              <p>Already have an account?<Link to={'/login'}>Login</Link></p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;

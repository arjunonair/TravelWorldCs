import React ,{useState} from "react";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import "../styles/login.css";
import loginImg from "../assets/images/Mobile login.gif";
import userImg from "../assets/images/man.png"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [credentials,setCredentials] = useState({
    email:undefined,
    password:undefined
  });


  const handleChange= e =>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value
  }))
  }
 
  const handleClick = e => {
    e.preventDefault();
    console.log(credentials);
    navigate('/home')
   }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="9 " className="m-auto">
            <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt="" />
            </div>

            <div className="login__form">
              <div className="login__user">
                <img src={userImg} alt=" "/>
              </div>
              <h2>Login</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type="email" placeholder="Email" required id ='email' onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder="Password" required id ='password' onChange={handleChange} />
                </FormGroup>

                <Button className="btn secondary__btn login__btn" type="submit">
                  Login
                </Button>
              </Form>
              <p>Don't have an account?<Link to={'/register'}>Create</Link></p>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;

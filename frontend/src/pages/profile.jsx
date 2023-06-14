import React, {useContext} from 'react';
import '../styles/profile.css';
import {Container, Row, Col} from 'reactstrap'
import { authContext } from "../context/authContext";

const ProfilePage = () => {
  const {user} = useContext(authContext)

  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="user__img">
            <img src="" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  <section>
  <Container>

  </Container>
  </section>
  </>;
};

export default ProfilePage;
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import { Container, Row, Col, Button } from 'reactstrap';

import NavBar from './components/NavBar';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';

import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) {
      router.push('/');
    }
  }, [authUser, loading, router]);

  return (
    <Container>
      {loading ? (
        <Row>
          <Col>Loading....</Col>
        </Row>
      ) : (
        <>
          <div>
            <NavBar />
            <Row>
              <Col>
                {authUser && (
                  <div>
                    <h4> Welcome {authUser?.email} !</h4>
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={signOut}>Sign out</Button>
              </Col>
            </Row>
            <ArticlesList />
            <Footer />
          </div>
        </>
      )}
    </Container>
  );
};

export default LoggedIn;

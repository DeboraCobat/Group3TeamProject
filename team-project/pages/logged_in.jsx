import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';

import NavBar from './components/NavBar';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';

import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';

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
          <Row>
            <Col>
              {authUser && (
                <div>Congratulations {authUser?.email}! You are logged in.</div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={signOut}>Sign out</Button>
            </Col>
          </Row>
          <div>
            <NavBar />
            <h1>Welcome to our Blog!</h1>
            <ArticlesList />
            <Footer />
          </div>
        </>
      )}
    </Container>
  );
};

export default LoggedIn;

import { Button } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
import styled from 'styled-components';
import { signInAPI } from '../actions';


function Login(props) {

  return (
    <Container>
      {
        props.user && <Navigate to="/" />
      }
      <Nav>
        <img src="/images/LinkedIn_Logo.svg.png" alt="logo" />
        <Buttons>
          <Join>
            <Button variant="text">Join now</Button>
          </Join>

          <SignIn>
            <Button variant="outlined">Sign In</Button>
          </SignIn>
        </Buttons>
      </Nav>

      <Section>

        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="images/signup.svg" alt="" />
        </Hero>

        <Form>
          <Button variant="outlined"
            onClick={() => props.signIn()}>
            <span>
              <img src="images/google.svg" alt="" />
              <p>Sign in with Google</p>
            </span>
          </Button>
        </Form>

      </Section>

    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const Container = styled.div`
  padding: 0px;

  @media (max-width: 768px) {
    /* overflow-y: hidden; */
  }
`

const Nav = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  img {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
  
`

const Buttons = styled.div`
  display: flex;
`

const Join = styled.div`
  Button {
        color: gray;
        text-transform: inherit;
        font-size: 16px;
        margin-right: 12px;

        &:hover {
          color: black;
          background-color: lightgray;
        }

    }
`

const SignIn = styled.div`
   Button {
        color: #0a66c2;
        text-transform: inherit;
        font-size: 16px;
        margin-right: 12px;
        border-radius: 24px;
        font-weight: 600;

        &:hover {
          background-color: rgba(112,181,249,0.15);
        }

    }
`

const Section = styled.div`
  display: flex;
  align-content: flex-start;
  min-height: 500px;
  padding-bottom: 118px;
  padding-top: 30px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  align-self: center;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`

const Hero = styled.div`
  width: 100%;
    h1{
      padding-bottom: 0;
      width: 60%;
      font-size: 50px;
      color: #2977c9;
      font-weight: 200;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
        width: 100%;
        margin-top: 40px;
      }
    }

    img {
        /* z-index: -1; */
        height: 600px;
        width: 800px;
        object-fit: cover;
        position: absolute;
        bottom: -2px;
        left: 50%;

        @media (max-width: 768px) {
          top: 230px;
          margin-top: 30px;
          width: 90%;
          position: initial;
          height: initial;
        }
      }
`

const Form = styled.div`
  margin-top: 70px;
  width: 488px;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
  }

  img {
    height: 30px;
    width: 60px;
  }

  Button {
    display: flex;
    width: 100%;
    border-radius: 28px;
    border: 1px solid black;
    text-transform: inherit;

    
  }

  p{
    font-size: 18px;
    color: black;
  }

  @media (max-width: 768px) {
    /* margin-top: 50px; */
  }
`
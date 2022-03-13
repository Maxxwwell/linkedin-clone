import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Middle from '../components/Middle'
import Rightside from '../components/Rightside'
import { Navigate } from 'react-router';
import { connect } from 'react-redux'



function Home(props) {
  return (
    <Container>
      {!props.user && <Navigate to="/login" />}
      <Header />
      <Section>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time and keep business moving.
        </p>
      </Section>

      <Layout>
        <Leftside />
        <Middle />
        <Rightside />

      </Layout>
    </Container>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}

export default connect(mapStateToProps)(Home);

const Container = styled.div`
    padding-top: 52px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  
  h5 {
    color: #0a66c2;
    font-size: 14px;

    a {
    font-weight: 700;
  }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`

const Layout = styled.div`
  display: flex;
  /* width: 100vw; */
  height: auto;
  justify-content: center;
  grid-template-rows: auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  }
`


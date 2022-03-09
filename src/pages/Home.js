import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Leftside from '../components/Leftside'
import Middle from '../components/Middle'
import Rightside from '../components/Rightside'


function Home() {
  return (
    <Container>
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

export default Home

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
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
  width: auto;
  height: auto;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`


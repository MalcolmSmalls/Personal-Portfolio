import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export default function About() {
  return (
    <>
      <Container className='text-center'>
        <h2>Who I am</h2>
      </Container>
      <Row>
        <Col md={10}>
          <h3>
            I am <em>Malcolm Smalls</em>, a self-taught fullstack Web Developer.
          </h3>
        </Col>
        <Col md={2}>hi</Col>
      </Row>
    </>
  )
}

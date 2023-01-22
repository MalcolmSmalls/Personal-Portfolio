import React from 'react'
import {
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Button,
  Form,
  Container,
} from 'react-bootstrap'

export default function Hero() {
  return (
    <>
      <div
        className='p-3 text-center bg-image position-relative'
        style={{
          backgroundImage: "url('/images/hero.JPG')",
          height: 800,
          width: '100%',
          backgroundSize: 'cover',
        }}
      >
        <div
          className='mask top-0 end-0 start-0 bottom-0'
          style={{
            backgroundColor: 'rgba(0,0,0, 0.65)',
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        >
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-0'>Malcolm Smalls</h1>
              <h4 className='mb-4'>Fullstack Software Developer</h4>
              <a
                className='btn btn-outline-success btn-lg rounded-pill'
                href='#!'
                role='button'
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { Row,Col } from 'react-bootstrap'
import '../App.css'
export default function Header() {
  return (
    <Row>
      <Col sm="12" className=' text-center'>
        <div className="" style={{fontSize:'23px',marginTop:'80px'}} color='red'>قائمة الطعام</div>
            <div className='underline'></div>
      </Col>
    </Row>

    
  )
}

import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
export default function Mynav({filterBySearch}) {
  const [searchValue, setSearchValue] = useState('')
  
  
  const onSearch =()=>{
    filterBySearch(searchValue);
    console.log(searchValue)
    setSearchValue('')


  }
  return (
    <Row>
      <Navbar
        variant="dark"
        expand="lg"
        className=" navbar-inverse fixed-top bg-dark"
        Style="direction: rtl;"
      >
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" >
              <Form.Control 
              type="text" 
              placeholder="ابحث" 
              className="mx-3"
              onChange={
                (e)=>{
                  setSearchValue(e.target.value) 
                } 
              }
              value={searchValue}
              />
              <Button onClick={()=>onSearch(searchValue)} className="btn-light brand-color">ابحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

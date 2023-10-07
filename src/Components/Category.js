import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Category({ filterByCategory , allCategory}) {
  //filtering
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <>
      <Row className="my-3 mb-5">
        <Col sm="12" className="d-flex justify-content-center">
          { allCategory.map((cat) => {
              return (
                <div className="btns" key={cat.id}>
                  <Button

                    onClick={() => onFilter(cat)}
                    className="btn mx-2 bg-light text-dark border-dark link-danger"
                  >
                    {cat}
                  </Button>
                </div>
              );
            })           
          }
        </Col>
      </Row>
    </>
  );
}

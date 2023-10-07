import { Row, Col, Card} from "react-bootstrap";
import "../App.css";
export default function CardItem({food}) {

  return (
<>
    <Row>
        {food.map(f =>{
          return(
            <Col sm="12" className="mb-3">
            <Card key={f.id} className="d-flex flex-row-reverse justify-content-end align-items-center p-2 my-card">
            <Card.Img className="img" src={f.image} />
            <Card.Body className="d-flex flex-column justify-content-end">
              <Card.Title
                className="d-flex flex-row-reverse"
                Style={{ whiteSpace: "nowrap" }}
              >
                 {f.title}
              </Card.Title>
              <br />
              <Card.Text className="d-flex flex-row-reverse">
               {f.description}
              </Card.Text>
              <p>{f.price}</p>
            </Card.Body>
          </Card>

          </Col>
          )
          }
        )
          
         }

        
        
          
        
    </Row>
    </>
  );

}

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardDetails({Title,Description,Img,ClickMe,children}) {

  const HandleClick = () => {
    ClickMe(Title);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Description}</Card.Text>
        <Button variant="primary" onClick={HandleClick}>
          Go somewhere
        </Button>
        {children}
      </Card.Body>
    </Card>
  );
}

export default CardDetails;

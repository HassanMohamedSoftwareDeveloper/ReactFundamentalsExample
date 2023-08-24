import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <a href="/">Back To Home</a>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};
export default Footer;

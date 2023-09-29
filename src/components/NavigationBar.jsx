import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            <Navbar.Brand>Paguenos sin Trabajar </Navbar.Brand>
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            Contacta con nosotros
          </Link>
        </Container>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Pagina para <a href="https://desafiolatam.com/" target="_blank" rel="noopener noreferrer" >Desafio Latam</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';


const ContactForm = () => {
  return (
    <div className="contactForm">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Datos de contacto </Form.Label>
          <br />
          <Form.Control
            type="text"
            placeholder="Nombres "
            aria-label="Disabled input example"
            disabled
            readOnly
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Apellidos"
            aria-label="Disabled input example"
            disabled
            readOnly
          />
          <br />
          <Form.Control type="email" placeholder="correo@correo.com" />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Escribenos ">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "130px" }}
          />
        </FloatingLabel>
        <Button variant="primary"> Enviar </Button>{' '}
      </Form>
    </div>
  );
};

export default ContactForm;

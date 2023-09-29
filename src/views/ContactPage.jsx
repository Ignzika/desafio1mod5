import ContactForm from "../components/ContactForm";
import VideoPlayer from "../components/VideoView";
import "./ContactPage.css"

const ContactPage = () => {
  return (
    <div className="containerForm">
      
      <ContactForm />
      <VideoPlayer/>
    
    </div>
  );
};

export default ContactPage;

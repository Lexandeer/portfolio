import './Contact.scss';
import ContactForm from '../../component/contactForm/ContactForm';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <DoubleTitle
        primaryTitle={'Discutons de vos besoins'}
        secondaryTitle={'Contact'}
      />
      <ContactForm />
    </section>
  );
};

export default Contact;

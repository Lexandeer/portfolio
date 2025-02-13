import './ContactForm.scss';

import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xkgobjjr');

  if (state.succeeded) {
    return (
      <div className="contact-form">
        <p>✅ Merci pour votre message, je vous répondrai rapidement !</p>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="contact-form__formulaire-wrapper">
        <h4>Me contacter</h4>
        <form
          className="contact-form__formulaire-wrapper__form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form__formulaire-wrapper__form__input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@doe.com"
              required
            ></input>
            {/* Composant fournit par la bibliothèque formspree pour afficher les erreurs de validation de champs du formulaire. */}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact-form__formulaire-wrapper__form__input">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Le sujet de votre message"
            />
          </div>
          <div className="contact-form__formulaire-wrapper__form__input">
            <label htmlFor="message">Votre message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Que souhaitez vous dire ?"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

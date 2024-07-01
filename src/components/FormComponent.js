import React, { useState } from 'react';
import '../assets/Form.css';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        response.json().then((data) => {
          if (data.error) {
            console.log(data.error.message);
          }
        });
      }
    });
  };

  return (
    <section className="contact-form-section">
      <h2>Contattami</h2>
      <p>Hai domande o vuoi lavorare insieme? Compila il form qui sotto!</p>
      {submitted ? (
        <p>Grazie per il tuo messaggio, ti risponderò al più presto!</p>
      ) : (
        <form
          action="https://formspree.io/f/xovaqjev"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Il tuo nome" required />
          <input
            type="email"
            name="_replyto"
            placeholder="La tua email"
            required
          />
          <textarea
            name="message"
            placeholder="Il tuo messaggio"
            required
          ></textarea>
          <button type="submit">Invia Messaggio</button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;

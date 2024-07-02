import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaPaperPlane, FaCommentDots } from 'react-icons/fa';
import '../assets/Form.css';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
    <section
      ref={ref}
      className={`contact-form-section ${inView ? 'fade-in' : ''}`}
    >
      <h2>
        <FaCommentDots /> Contattami
      </h2>
      <p>Compila il form qui sotto</p>
      {submitted ? (
        <p>Grazie per il tuo messaggio, ti risponderò al più presto!</p>
      ) : (
        <form
          action="https://formspree.io/f/xovaqjev"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <input type="text" name="name" placeholder="Il tuo nome" required />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="_replyto"
              placeholder="La tua email"
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Il tuo messaggio"
              required
            ></textarea>
          </div>
          <button type="submit">
            <FaPaperPlane /> Invia Messaggio
          </button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;

import React, {useRef} from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useParallax } from 'react-scroll-parallax';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i9e9eb4', 'template_qfpmnti', form.current, 'rCF-KoO5wJX6MeMow')
      .then((result) => {
          if(result.status === 200) {
          	alert('email sent successfully')
          }
      }, (error) => {
      	alert(error.text)
      });
  };

  const EmailComp = () => {
		const { ref } = useParallax({
	    translateX: [-100, 0, 'easeOutQuint'],
	    opacity: [-3, 1, 'easeOutQuint'],
		});
		return (
			<article className="contact__option" ref={ref}>
				<AiOutlineMail className="contact__icon"/>
				<h4>Email</h4>
				<h5>caturilham06@gmail.com</h5>
				<a href="mailto:caturilham05@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
			</article>
		)  	
  }

  const MessengerComp = () => {
		const { ref } = useParallax({
	    translateX: [-100, 0, 'easeOutQuint'],
	    opacity: [-3, 1, 'easeOutQuint'],
		});
		return (
			<article className="contact__option" ref={ref}>
				<RiMessengerLine className="contact__icon"/>
				<h4>Messenger</h4>
				<h5>Tokicir Tokicir</h5>
				<a href="https://m.me/tokicirtkc" target="_blank" rel="noreferrer">Send a message</a>
			</article>
		)  	
  }

  const WhatsAppComp = () => {
		const { ref } = useParallax({
	    translateX: [-100, 0, 'easeOutQuint'],
	    opacity: [-3, 1, 'easeOutQuint'],
		});
		return (
			<article className="contact__option" ref={ref}>
				<BsWhatsapp className="contact__icon"/>
				<h4>WhatsApp</h4>
				<h5>+62851-5889-3643</h5>
				<a href="https://api.whatsapp.com/send?phone=6285158893643" target="_blank" rel="noreferrer">Send a message</a>
			</article>
		)  	
  }

  const FormComp = () => {
		// const { ref } = useParallax({
	 //    translateX: [-100, 0, 'easeOutQuint'],
	 //    opacity: [-3, 1, 'easeOutQuint'],
		// });
		return (
			<form ref={form} onSubmit={sendEmail}>
				<input type="text" name="name" placeholder="Your Full Name" required />
				<input type="email" name="email" placeholder="Your Email Address" required />
				<textarea name="message" rows="7" placeholder="Your Message" required />
				<button type="submit" className="btn btn-primary"> Send Message</button>
			</form>
		)  	
  }

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact">
				<div className="contact__options">
					<EmailComp />
					<MessengerComp />
					<WhatsAppComp />
				</div>
				<FormComp />
			</div>
		</section>
	)
}

export default Contact
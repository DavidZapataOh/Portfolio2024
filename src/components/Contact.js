import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope , FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="py-20 mb:py-12 bg-thirty">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact me</h2>
      <div className="container mx-auto px-6 flex md:flex-col flex-col justify-between items-center">
        
        {/* Redes sociales */}
        <div className="md:w-full w-1/2 text-center md:text-left mb-8 md:mb-0">
          <p className="mb-6">Connect with me on social media:</p>
          <div className="grid sm:grid-cols-1 grid-cols-2 gap-4 text-dark font-bold">
          <a
              href="https://www.linkedin.com/in/davidzapatao/"
              className="relative flex items-center px-8 py-3 text-center justify-center bg-primary rounded overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-secundary w-full h-full transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <FaLinkedin className="z-10 mr-2"/>
              <span className="relative z-10">LinkedIn</span>
            </a>
            <a
              href="https://x.com/DavidZapataOh"
              className="relative flex px-8 py-3 items-center justify-center bg-primary rounded overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-secundary w-full h-full transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <FaTwitter className="z-10 mr-2"/>
              <span className="relative z-10">Twitter</span>
            </a>
            <a
              href="https://t.me/davidzo"
              className="relative px-8 py-3 flex items-center justify-center bg-primary rounded overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-secundary w-full h-full transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <FaTelegram className="z-10 mr-2"/>
              <span className="relative z-10">Telegram</span>
            </a>
            <a
              href="https://www.instagram.com/davidzapatao/"
              className="relative px-8 py-3 flex items-center justify-center bg-primary rounded overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-secundary w-full h-full transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <FaInstagram className="z-10 mr-2"/>
              <span className="relative z-10">Instagram</span>
            </a>
            <a
              href="https://walink.co/fce2eb"
              className="relative px-8 py-3 flex items-center justify-center bg-primary rounded overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-secundary w-full h-full transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <FaWhatsapp className="z-10 mr-2"/>
              <span className="relative z-10">WhatsApp</span>
            </a>
            <a
              href="mailto:davidzapata5885@gmail.com"
              className="relative px-8 py-3 flex items-center justify-center bg-primary rounded overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-secundary w-full h-full transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
              <FaEnvelope className="z-10 mr-2"/>
              <span className="relative z-10">Email</span>
            </a>
          </div>
        </div>

        {/* Agendar reunión */}
        <div className="w-full text-center md:py-4 px-20 md:px-0">
          <h2 className="text-3xl font-bold mb-4">Schedule a Meeting</h2>
          <p className="mb-6">I offer free consultation meetings to discuss potential collaborations, projects, or any questions you might have. Feel free to schedule a meeting with me at your convenience:</p>
          <a
            href="https://calendly.com/davidzapataoh/30min"
            className="relative inline-block w-1/2 md:w-full px-8 py-3 bg-primary hover:bg-secundary text-dark font-bold rounded overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 transition-transform duration-500 transform -translate-x-full hover:translate-x-0"></span>
            <span className="relative z-10">Book a Free Meeting [Spanish Only]</span>
          </a>
        </div>
        
      </div>
      
    </section>
  );
};

export default Contact;

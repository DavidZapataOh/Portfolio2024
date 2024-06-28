"use client";
import React from 'react';
import {motion} from 'framer-motion'
import {FaTwitter, FaYoutube, FaInstagram, FaDiscord, FaTelegram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const socialLinks = [
  { href: "https://x.com/DavidZapataOh", icon: FaTwitter },
  { href: "https://www.instagram.com/davidzapatao/", icon: FaInstagram },
  { href: "https://www.linkedin.com/in/davidzapatao/", icon: FaLinkedinIn },
  { href: "https://github.com/DavidZapataOh/", icon: FaGithub },
  { href: "https://t.me/davidzo", icon: FaTelegram }
];

const Hero = () => {
  return (
    <section className="text-left md:px-20 px-60 py-20 bg-gradient-to-r from-dark via-thirty to-primary">
      <div className="container mx-auto flex flex-row lg:flex-col items-center">
        <div className="flexmb-0 lg:mb-10">
          <h1 className="text-5xl lg:text-3xl font-bold mb-4">Hello, I'm <span className="text-primary">David</span></h1>
          <p className="text-2xl lg:text-xl mb-0">Blockchain Developer &</p>
          <p className="text-2xl lg:text-xl mb-8">Avalanche Ambassador</p>
          <div className="flex mt-2">
          {socialLinks.map(({ href, icon: Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                className="text-thirty bg-primary rounded p-3 hover:bg-secundary mr-3"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.2
                }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
          
        </div>
        <motion.div className="flex-1 flex justify-center" whileHover={{y:-10, scale:1.03}}>
          <div className="relative md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-thirty to-primary blur-lg rounded-full"></div>
            <img src="/yo.png" alt="DavidZO" className="relative rounded-full w-full max-w-sm filter-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

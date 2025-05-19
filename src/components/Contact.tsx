import React, { useEffect } from "react";
import { motion } from "framer-motion";
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import loc from "../assets/loc.png";
import sms from "../assets/sms.png";

const cards = [
  {
    icon: (
      <img src={mail} alt="Sales icon" className="w-12 h-12 mb-2" />
    ),
    title: "Chat to sales",
    desc: "Speak to our friendly team.",
    link: { label: "sales@skejio.com", href: "mailto:sales@skejio.com" },
  },
  {
    icon: (
      <img src={sms} alt="Support icon" className="w-12 h-12 mb-2" />
    ),
    title: "Chat to support",
    desc: "We're here to help.",
    link: { label: "support@skejio.com", href: "mailto:support@skejio.com" },
  },
  {
    icon: (
      <img src={loc} alt="Visit us icon" className="w-12 h-12 mb-2" />
    ),
    title: "Visit us",
    desc: "Visit our office HQ.",
    link: { label: "Agdal, Rabat", href: "#" },
  },
  {
    icon: (
      <img src={tel} alt="Call us icon" className="w-12 h-12 mb-2" />
    ),
    title: "Call us",
    desc: "Mon–Fri from 8am to 5pm.",
    link: { label: "+212 000-000000", href: "tel:+212000000000" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Contact: React.FC = () => {
  useEffect(() => {
    // Scroll vers le haut lors du montage
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-[#1F2EFF] text-xl mb-10 inline-block">Contact us</a>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">We'd love to hear from you</h1>
          <p className="text-gray-300 text-lg mb-16">Our friendly team is always here to chat.</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-[#10153B] rounded-xl p-8 flex flex-col items-start shadow-lg"
            >
              <div className="mb-6">{card.icon}</div>
              <div className="text-white text-lg font-semibold mb-1">{card.title}</div>
              <div className="text-gray-300 text-sm mb-4">{card.desc}</div>
              <a href={card.link.href} className="text-[#1F2EFF] text-sm font-medium hover:underline">{card.link.label}</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Contact; 
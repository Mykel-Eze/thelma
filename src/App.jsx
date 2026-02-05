/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import clsx from 'clsx';

// Images
import img1 from './assets/images/img-3.jpg';
import img2 from './assets/images/img-2.jpg';
import img3 from './assets/images/img-1.jpg';
import img4 from './assets/images/img-4.jpg';

function App() {
  const [ accepted, setAccepted ] = useState(false);
  const [ noBtnPosition, setNoBtnPosition ] = useState({ x: 0, y: 0 });
  const [ isHovered, setIsHovered ] = useState(false);

  // Initial Celebration for entering the site (optional, but let's keep it clean first)

  const handleNoHover = () => {
    const x = Math.random() * 200 - 100; // -100 to 100
    const y = Math.random() * 200 - 100; // -100 to 100
    setNoBtnPosition({ x, y });
    setIsHovered(true);
  };

  const handleYes = () => {
    setAccepted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: [ '#ff4d6d', '#ff8fa3', '#ffd700' ],
    });

    // Notify Boyfriend via WhatsApp
    // Replace YOUR_NUMBER with actual number in real usage, putting a placeholder here
    const phoneNumber = "2349036329767"; // Example placeholder
    const message = encodeURIComponent("Hey baby! I said YES to being your Valentine! ❤️🥰");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Slight delay to allow confetti to start
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  if (accepted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-val-bg p-4 text-center overflow-hidden"
      >
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Dynamic background hearts could go here */}
        </div>

        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="z-10 bg-white/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 max-w-lg w-full"
        >
          <h1 className="font-cursive text-6xl md:text-8xl text-val-red mb-6 drop-shadow-sm">
            Woooooow!!! ❤️
          </h1>
          <p className="font-sans text-2xl md:text-3xl text-val-dark mb-8 font-light">
            Thank you for making me the happiest man alive, Thelma! 🌹
          </p>
          <div className="text-lg md:text-xl text-val-dark/80 italic font-medium">
            "You are my sun, my moon, and all my stars."
          </div>
          <div className="mt-8 text-4xl animate-bounce">
            💑 🥰 💖
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-val-bg overflow-x-hidden selection:bg-val-pink selection:text-white">
      {/* Navigation / Logo */}
      <nav className="fixed w-full z-50 top-0 left-0 p-4 md:p-6 flex justify-center bg-gradient-to-b from-white/60 to-transparent pointer-events-none">
        <div className="glass-card px-6 py-2 pointer-events-auto">
          <span className="font-cursive text-3xl text-val-red font-bold flex items-center gap-2">
            Thelma <span className="text-2xl">❤️</span>
          </span>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col gap-20">

        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="font-sans text-val-pink tracking-[0.2em] font-medium uppercase text-sm md:text-base">
              To My Special Person
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-cursive text-6xl md:text-9xl text-val-red drop-shadow-sm"
          >
            Happy Valentine's
            <br />
            <span className="text-val-dark text-5xl md:text-7xl block mt-2">in advance</span>
          </motion.h1>
        </section>

        {/* Gallery Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {[ img1, img2, img3, img4 ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={clsx(
                "relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300",
                i === 0 || i === 3 ? 'col-span-1 row-span-1 md:row-span-1' : 'col-span-1 row-span-1'
                // You can make these spans more interesting if you know the aspect ratios
              )}
            >
              <img src={img} alt="Thelma" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          ))}
        </section>

        {/* Message Card */}
        <section className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, rotate: -2 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="glass-card max-w-2xl w-full p-8 md:p-12 text-center relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg text-4xl">
              💌
            </div>
            <h2 className="font-cursive text-4xl mb-6 text-val-dark mt-4">My Dearest Thelma,</h2>
            <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed min-h-[100px]">
              Every moment with you feels like a beautiful dream. You bring so much light, laughter, and love into my life.
              I don't need a special day to celebrate you because I celebrate you every single day, but I want to make this one extra special.
              <br /><br />
              Will you do me the honor?
            </p>
            <div className="absolute -bottom-4 -right-4 text-6xl opacity-20 rotate-12">
              🌹
            </div>
          </motion.div>
        </section>

        {/* The Question */}
        <section className="py-12 md:py-20 text-center relative">
          <h2 className="font-cursive text-5xl md:text-7xl text-val-red mb-12">
            Will you be my Val?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 relative h-40 md:h-24">
            {/* Yes Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="bg-val-red text-white font-sans text-xl md:text-2xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-val-red/50 hover:bg-val-dark transition-all z-10"
            >
              YES, I will! 💖
            </motion.button>

            {/* No Button */}
            <motion.button
              animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
              onHoverStart={handleNoHover}
              onTouchStart={handleNoHover}
              className="bg-gray-300 text-gray-500 font-sans text-xl md:text-2xl font-bold py-4 px-12 rounded-full shadow-inner cursor-not-allowed absolute md:static"
              style={{
                position: isHovered ? 'absolute' : 'relative',
                // If absolute, it positions relative to the container. 
                // We use state x/y to move it.
              }}
            >
              No 😢
            </motion.button>
          </div>
        </section>

      </div>

      <footer className="text-center py-8 text-val-pink/60 font-sans text-sm pb-24">
        Made with ❤️ for Thelma
      </footer>
    </div>
  )
}

export default App

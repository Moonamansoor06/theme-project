"use client"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const images: string[] = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
];

const texts: string[][] = [
  ["Let us take care of all your shopping needs!", "E-shopping is easy, convenient, and fast", "Enjoy the convenience of online shopping"],
  ["One-stop shop – find it all here!", "Choose your style – online!", "It’s time to upgrade your shopping experience"],
  ["Saving time and money – with every click", "Shop from the comfort of your own home", "Find what you want – within seconds!"],
  ["Shop safe and secure – on the web!", "Turn your computer into a shopping mall", "Browse a virtual world of products"],
  ["Instant gratification – with every purchase", "Experience the Ultimate Shopping Experience!", "The Power of Shopping Lies Within Your Fingertips!"],
];

// ... (previous imports)

const Hero = (): JSX.Element => {
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={images[currentImage]}
              alt={`Hero image ${currentImage}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
     

      <motion.div
        className="absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2
         text-white text-2xl font-bold"
        initial={{ x: 100 }}
        animate={{ x: 10 }}
        transition={{ duration: 5 , delay:2}}
      >
        {texts[currentImage].map((line, index) => (
          <motion.p
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 10, opacity: 1 }}
            transition={{ duration: 5, delay: index * 0.2 }}
          >
            {line}
          </motion.p>
        ))}

          <button onClick={() => router.push('/')} className="ml-10 mt-2 p-4 border-2">
            Enter
          </button>
        
      </motion.div> 
      </AnimatePresence>
    </div>
  );
};

export default Hero;

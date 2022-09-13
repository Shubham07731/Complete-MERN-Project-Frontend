import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
const contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100%",
          opacity: "0",
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </motion.form>
      <motion.div
        className="FormBorder"
        initial={{
          x: "100vw",
          opacity: "0",
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: "0",
          }}
          animate={{
            y: "50%",
            x: "-50%",
            opacity: 1,
          }}
          transition={{ delay: 1 }}
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default contact;
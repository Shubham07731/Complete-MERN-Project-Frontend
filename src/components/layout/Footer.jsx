import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Brothers Restaurant</h2>
        <p>
          We are trying to give you the best Asian taste of food, We understand
          the customer taste better possible.
        </p>
        <em>We give attention to genuine feedback</em>
        <strong>All right received @brothersrestaurant</strong>
      </div>
      <aside>
        <h4>Follow us</h4>
        <a href="https://youtube.com">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;

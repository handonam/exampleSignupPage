import React from "react";
import './index.css'

/**
 * Introduction
 *
 * This is the introduction of who I am.
 */
const Introduction = () => {
  return (
    <div className="Introductions">
      <h1 className="Introductions__Greetings">Hello, Interviewers!</h1>
      <div className="Introductions__Blurb">
        My name is Hanam, and I will be taking your information for you. Don't
        worry, this information is safe and secure, I promise!
      </div>
    </div>
  );
};

Introduction.propTypes = {};

export default Introduction;

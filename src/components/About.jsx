import React from "react";

const About = () => {
  return (
    <section id="about" className="text-center py-12 container mx-auto px-4">
      <h2 className="text-5xl text-[#e43232] mb-6 font-semibold">About Me</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 text-left">
        <div>
          <img
            src="./hero.svg"
            alt="About Me"
            className="w-[250px] h-[250px] object-cover rounded-full"
          />
        </div>
        <div className="max-w-xl text-lg leading-relaxed">
          <p>
            I am a passionate Web Developer with a strong background in frontend
            technologies such as HTML, CSS, and JavaScript. I love transforming
            creative ideas into responsive and visually appealing websites. With
            experience in modern frameworks, I aim to build interactive,
            user-friendly web experiences. Apart from coding, I love exploring
            new design trends and optimizing user interfaces for a seamless
            experience. Let's collaborate and bring ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

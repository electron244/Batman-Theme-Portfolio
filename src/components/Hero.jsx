import React from "react";

const Hero = () => {
  return (
    <main className="w-full mt-16 px-6 h-[80vh] flex items-center">
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8  text-left">
        {/* Text Div */}
        <div className="w-full pl-9 md:w-1/2">
          <h3 className="text-xl">Hi, There!</h3>
          <h1 className="text-5xl font-bold mb-2">
            I'm <span className="text-[#e43232]">Sidharth</span>
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            I am a Web Developer skilled in Frontend Technologies, such as HTML,
            CSS, and JavaScript, creating interactive web experiences.
          </p>
          <div className="flex gap-4 flex-wrap sm:flex-nowrap">
            <a href="mailto:zalasidharth244@gmail.com">
              <button className="bg-[#e43232] hover:bg-[#c22525] w-32 h-10 rounded font-bold">
                Hire me
              </button>
            </a>
            <a href="MyResume.pdf" download="Sidharth_CV.pdf">
              <button className="border border-[#e43232] text-white hover:bg-[#e43232] w-40 h-10 rounded font-bold">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Image Div */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./hero.svg"
            alt="Web Developer"
            className="w-full max-w-[400px]"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="text-center py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl text-[#e43232] mb-6 font-semibold">Contact Me</h2>
      <form
        action="mailto:zalasidharth244@gmail.com"
        method="post"
        encType="text/plain"
        className="w-full max-w-lg mx-auto border-2 border-gray-500 p-4 sm:p-6 rounded-xl bg-[#1b1f24]"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 mb-4 rounded bg-amber-50 placeholder-gray-600 text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 rounded bg-amber-50 placeholder-gray-600 text-sm sm:text-base"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 mb-4 rounded bg-amber-50 placeholder-gray-600 text-sm sm:text-base min-h-[120px]"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-[#e43232] hover:bg-[#c22525] text-white font-bold rounded text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

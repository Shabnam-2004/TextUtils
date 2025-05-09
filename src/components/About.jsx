import React from "react";

const About = () => {
  return (
    <div className="flex-col flex p-10 dark:bg-[#060815] bg-white">
      <div className="p-6 max-w-3xl mx-auto rounded-2xl  mt-4 dark:text-white text-black bg-gray-100 dark:bg-[#0e101c]">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to <strong>Text Utils</strong> – your smart and simple text
          transformation companion! ✨
        </p>
        <p className="text-lg mb-4">
          At <strong>Text Utils</strong>, we believe in the power of clean,
          clear, and creatively formatted text. Whether you're a 🧑‍🎓 student, 👩‍💻
          developer, ✍️ writer, or anyone who works with words, our goal is to
          make your text editing experience seamless and efficient.
        </p>
        <p className="text-lg mb-4">
          From converting to 🔠 UPPERCASE or lowercase 🔡, capitalizing 🧠
          sentences, reversing 🔁 text, and more – every tool you need is right
          at your fingertips. 🖐️
        </p>
        <p className="text-lg mb-4">
          🛠️ <strong>Built with React</strong>, our application is fast ⚡,
          responsive 📱, and designed to provide real-time transformations with
          a user-friendly interface.
        </p>
        <p className="text-lg">
          Text Utils isn't just a tool – it's a 💼 productivity booster crafted
          with ❤️, 🧠 code, and a passion for simplicity. Thanks for using Text
          Utils! 🚀
        </p>
      </div>
    </div>
  );
};

export default About;

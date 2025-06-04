// const Home = () => (
//   <div className="bg-gray-50 py-20">
//     <div className="max-w-7xl mx-auto px-6 text-center">
//       <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
//         Empowering Innovation with <span className="text-blue-600">Robot Solutions</span>
//       </h1>
//       <p className="mt-6 text-lg text-gray-600">
//         We craft intelligent automation software tailored for future-ready businesses.
//       </p>
//       <a
//         href="/contact"
//         className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
//       >
//         Get in Touch
//       </a>
//     </div>
//   </div>
// );

// export default Home;


import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import heroBg from '/assets/hero-bg.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        data-aos="fade-up"
        className="relative z-10 text-center text-white px-6 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Automate. Innovate. Elevate.
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Building smarter solutions for a connected world.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Home;

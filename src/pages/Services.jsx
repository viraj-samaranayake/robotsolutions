const services = [
  { title: 'AI Integration', desc: 'Embed AI into your operations to boost efficiency.' },
  { title: 'RPA Solutions', desc: 'Automate workflows with robotic process automation.' },
  { title: 'IoT Systems', desc: 'Smart device integration & real-time data collection.' },
  { title: 'Custom Software', desc: 'Tailored applications for complex needs.' },
];

const Services = () => (
  <div className="bg-white py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;

const Contact = () => (
  <div className="bg-white py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>
      <form
        className="space-y-6"
        action="https://formspree.io/f/YOUR_ID"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border p-3 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full border p-3 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;

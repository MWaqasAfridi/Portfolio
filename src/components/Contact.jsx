import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "66ebdd7a-969b-4423-b34e-c5644db0a1b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white md:py-0 py-10 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-6 animate__animated animate__fadeIn">
          Contact Me
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi — my inbox is always open.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side: Intro + Contact Info */}
          <div className="md:w-1/2 space-y-8 animate__animated animate__fadeIn animate__delay-2s">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                Let’s Connect
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                via email or phone!
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-yellow-400 transition-transform transform hover:scale-110 hover:text-yellow-500" />
              <span className="text-gray-300 break-all">
                muhammadwaqas121960@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-yellow-400 transition-transform transform hover:scale-110 hover:text-yellow-500" />
              <span className="text-gray-300">+92 321 2132824</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-yellow-400 transition-transform transform hover:scale-110 hover:text-yellow-500" />
              <span className="text-gray-300">Karachi, Pakistan</span>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 animate__animated animate__fadeIn animate__delay-3s md:mb-6">
            <form onSubmit={onSubmit} className="space-y-6">
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-[#1e293b] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all transform hover:scale-105"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-[#1e293b] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all transform hover:scale-105"
              />
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md bg-[#1e293b] border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all transform hover:scale-105"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all transform hover:scale-110 w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

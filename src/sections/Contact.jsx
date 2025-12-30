import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Send, Mail, CheckCircle, XCircle } from "lucide-react"; // Importing icons

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm('service_bt73oxh', 'template_5t0t4ls', formRef.current, 'fyHW9Rt2tHcqVERfP')
      .then(() => {
        setStatus("sent");
        formRef.current.reset();
      }, (error) => {
        setStatus("error");
        console.error(error.text);
      });
  };

  return (
    // 1. Section Container: Consistent padding and theme background.
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        {/* 2. Heading: Centered, large, and uses theme color for consistency. */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        
        {/* 3. Form Container: Defined dark background, border, and shadows instead of 'glass'. */}
        <div className="bg-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl shadow-purple-900/30 border border-gray-700/50">
          <form ref={formRef} onSubmit={sendEmail} className="grid gap-6">
            
            {/* Input Fields: Deeper background, border, and focus ring effect. */}
            <input 
              name="user_name" 
              required 
              placeholder="Your Name" 
              className="p-4 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" 
            />
            <input 
              name="user_email" 
              required 
              type="email" 
              placeholder="Your Email Address" 
              className="p-4 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300" 
            />
            <textarea 
              name="message" 
              required 
              placeholder="Your Message / Project Inquiry" 
              rows="6" 
              className="p-4 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none"
            ></textarea>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
              
              {/* Button: Primary purple styling with icon and hover effect. */}
              <button 
                type="submit" 
                disabled={status === "sending"}
                className={`inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-semibold 
                            transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto
                            ${status === "sending" 
                               ? 'bg-gray-600 cursor-not-allowed' 
                               : 'bg-purple-600 hover:bg-purple-700 shadow-purple-500/30'
                            }`}
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {/* Status Message: Clearer colors and icons for feedback. */}
              <div className="flex items-center space-x-2">
                {status === "sent" && (
                  <span className="text-sm text-green-400 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-1" /> Message sent — thanks!
                  </span>
                )}
                {status === "error" && (
                  <span className="text-sm text-red-400 flex items-center">
                    <XCircle className="w-5 h-5 mr-1" /> Failed to send. Try again later.
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Alternative Contact Info: Centered and linked */}
        <div className="mt-10 text-center text-lg text-gray-400">
          <p className="flex items-center justify-center">
            Or, feel free to drop me a direct email at
            <a 
              href="mailto:your-email@example.com" 
              className="text-purple-400 hover:text-purple-300 ml-2 font-medium transition"
            >
              vivek.yadav4050541@gmail.com
            </a>
            <Mail className="w-4 h-4 ml-1 text-purple-400"/>
          </p>
        </div>
      </div>
    </section>
  );
}
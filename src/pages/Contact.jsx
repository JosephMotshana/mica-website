import SEO from '../components/SEO';
import contactsBg from '../assets/about.png'; 

const Contact = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="Contact Us | Mica General Auto Repairs" 
        description="Visit Mica General Auto Repairs in Booysens for expert car maintenance and diagnostics." 
        path="/contact" 
      />

      <section 
        className="contact-wrapper relative min-h-screen flex items-center justify-center pt-40 md:pt-48 pb-20 px-6 bg-cover bg-center" 
        id="contact" 
        style={{ backgroundImage: `url(${contactsBg})` }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#1F3B54]/85 z-0"></div>

        {/* On mobile (sm), the grid will now have a larger gap (gap-20) 
            to ensure the form doesn't feel cramped against the info side 
        */}
        <div className="contact-content relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 lg:gap-16 items-start lg:items-center">
          
          {/* Left Side: Business Info */}
          <div className="contact-info-side text-white">
            {/* Lowered the title font size slightly on mobile for better fit */}
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-lg leading-relaxed">
              Have a question or need a quote? Reach out to our expert team in Booysens today.
            </p>

            <div className="contact-details-list space-y-8 md:space-y-10">
              
              {/* Address */}
              <div className="flex items-start gap-5 md:gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg transition-all group-hover:bg-blue-500">
                  📍
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-400 uppercase font-bold tracking-widest mb-1">Visit Our Shop</p>
                  <p className="text-lg md:text-xl font-medium leading-snug">
                    16 Ophir Road, Ophirton<br />
                    Booysens, 2091
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 md:gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg transition-all group-hover:bg-blue-500">
                  📞
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-400 uppercase font-bold tracking-widest mb-1">Call/WhatsApp</p>
                  <a href="tel:+27735622357" className="text-xl md:text-2xl font-bold hover:text-blue-300 transition-colors">
                    073 562 2357
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-5 md:gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-lg transition-all group-hover:bg-blue-500">
                  ✉️
                </div>
                <div>
                  <p className="text-xs md:text-sm text-blue-400 uppercase font-bold tracking-widest mb-1">Email Us</p>
                  <a href="mailto:micageneralauto@gmail.com" className="text-lg md:text-xl font-semibold hover:text-blue-300 transition-colors">
                    micageneralauto@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div className="form-card bg-white p-7 md:p-12 rounded-[2rem] shadow-2xl w-full mb-10 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1F3B54] mb-2">Send a Message</h3>
            <p className="text-gray-500 mb-8 text-sm md:text-base">We usually respond within an hour.</p>
            
            <form action="https://formspree.io/f/xkogdjbr" method="POST" className="space-y-5 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="full-name" className="text-[10px] md:text-xs font-black uppercase text-gray-400">Your Name</label>
                  <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" id="full-name" type="text" name="name" placeholder="Name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] md:text-xs font-black uppercase text-gray-400">Email Address</label>
                  <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" id="email" type="email" name="email" placeholder="email@gmail.com" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] md:text-xs font-black uppercase text-gray-400">How can we help your vehicle?</label>
                <textarea className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" id="message" name="message" placeholder="Ex: My brakes are squeaking..." rows="4" required></textarea>
              </div>

              <button type="submit" className="w-full py-4 md:py-5 bg-[#1F3B54] text-white font-black uppercase tracking-widest rounded-xl shadow-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">
                Send Request →
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
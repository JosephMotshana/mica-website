import { useState } from 'react';
import SEO from '../components/SEO';

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { title: "Engine Diagnostics", desc: "Advanced computer scanning to pinpoint performance issues and sensor failures." },
    { title: "Brake & Suspension", desc: "Complete pad replacement, rotor resurfacing, and shock repair." },
    { title: "Transmission Repair", desc: "Expert servicing for automatic and manual gearboxes." },
    { title: "General Maintenance", desc: "Routine oil changes, filter replacements, and 50-point safety inspections." }
  ];

    const brands = [

    { name: "Toyota", url: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Toyota_logo_%28Red%29.svg" },

    { name: "BMW", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },

    { name: "Mercedes", url: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Mercedes-Benz_logo_2.svg" },

    { name: "Ford", url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },

    { name: "Volkswagen", url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },

    { name: "Hyundai", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg" },

    { name: "Honda", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" },

    { name: "Nissan", url: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Nissan_logo_2001.svg" },

    { name: "Audi", url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Audi_Logo_1995.svg" },

    { name: "Kia", url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/KIA_logo3.svg" },

    { name: "Mazda", url: "https://upload.wikimedia.org/wikipedia/commons/4/46/Mazda_logo_2024.svg" },

    { name: "Chevrolet", url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.png" }

  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= brands.length - 4 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? brands.length - 5 : prev - 1));
  };

  return (
    <div className="bg-gray-50">
      <SEO title="Services" description="Professional auto repair services at Mica." path="/services" />

      {/* Hero Section */}
      <section className="hero-section relative py-20 bg-[#1F3B54] text-white text-center flex flex-col items-center justify-center min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto italic mb-8">"Specialists in Repairs"</p>
          
          {/* Animated Scroll Arrow */}
          <div className="flex justify-center mt-4">
            <div className="animate-bounce">
              <svg 
                className="w-8 h-8 text-blue-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Stack 19 9l-7 7-7-7"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* --- BRAND SLIDER SECTION --- */}
      <section className="py-12 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Some Of The Brands We Service
          </p>

          <div className="relative flex items-center">
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all border border-gray-200"
            >
              &#10094;
            </button>

            <div className="flex w-full justify-center gap-8 md:gap-16 overflow-hidden py-4">
              {brands.slice(currentIndex, currentIndex + 5).map((brand, i) => (
                <div key={i} className="flex-shrink-0 w-24 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img src={brand.url} alt={brand.name} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-0 z-20 bg-white/80 p-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all border border-gray-200"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-400 transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 font-bold">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1F3B54]">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
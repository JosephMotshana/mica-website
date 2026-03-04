import SEO from '../components/SEO';
import backgroundImage from '../assets/background.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Mica General Auto Repairs - Specialist in Repair." 
        path="/"
      />
      
      {/* 1. Applied 'hero-section' class
          2. Removed 'items-center' and 'justify-center' from here 
          3. 'min-h-screen' ensures the background covers the whole page
      */}
      <section className="hero-section relative w-full min-h-screen flex flex-col overflow-hidden px-6">
        
        {/* The Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Mica Auto Repair Background" 
            className="w-full h-full object-cover"
          />
          {/* Slightly darker overlay (60%) to make white text stand out */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight tracking-tight">
            Welcome to
          </h2>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Mica General Auto Repairs <br />
            <span className="text-blue-400">Specialists in Repairs</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium">
            We provide quality service you can trust for all your vehicle's needs.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
            to="/services" 
              className="bg-white text-[#1F3B54] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-block"
            >
            Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
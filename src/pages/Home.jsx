import SEO from '../components/SEO';
// Import your local image from the assets folder
import backgroundImage from '../assets/background.png';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Mica General Auto Repairs - Professional car maintenance, diagnostics, and repairs." 
        path="/"
      />
      
      {/* Hero Section: h-screen ensures it fits the mobile screen height perfectly */}
      <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        
        {/* The Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Mica Auto Repair Background" 
            className="w-full h-full object-cover"
          />
          {/* This dark overlay is essential! 
              It makes your white text readable over the 'background.png' 
          */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight tracking-tight">
            Welcome to
          </h2>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Mica General Auto Repairs <span className="text-blue-400">Specialist in Repair</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium">
            Mica General Auto Repairs: Quality service you can trust for all your vehicle needs.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl">
              Our Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
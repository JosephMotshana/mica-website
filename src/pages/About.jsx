import SEO from '../components/SEO';
// Assuming you have an about background image, or you can reuse background.png
import aboutBg from '../assets/about.png'; 

const About = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us" 
        description="Learn about Mica's mission, our dedicated team, and our commitment to excellence." 
        path="/about" 
      />
      
      {/* Hero Section with Background Image */}
      {/* 'hero-section' class is added here to respect your navbar padding from global.css */}
      <section className="hero-section relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden px-6">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutBg} 
            alt="About Mica" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to make the "Our Mission" text readable */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            At Mica General Auto Repairs, we believe in bridging the gap between complex automotive technology and human-centered service.
          </p>
        </div>
      </section>

      {/* Philosophy Detail Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "We are dedicated to helping drivers stay safe on the road by delivering honest diagnostics, 
            quality repairs, and dependable workmanship you can trust."
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 uppercase tracking-widest">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border-t-4 border-blue-600">
              <div className="text-blue-600 text-4xl font-black mb-4">01</div>
              <h3 className="text-xl font-bold mb-2 text-[#1F3B54]">Innovation</h3>
              <p className="text-gray-600">Utilizing the latest diagnostic tools to solve complex vehicle issues.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border-t-4 border-blue-600">
              <div className="text-blue-600 text-4xl font-black mb-4">02</div>
              <h3 className="text-xl font-bold mb-2 text-[#1F3B54]">Transparency</h3>
              <p className="text-gray-600">Clear communication and honest pricing on every repair job.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border-t-4 border-blue-600">
              <div className="text-blue-600 text-4xl font-black mb-4">03</div>
              <h3 className="text-xl font-bold mb-2 text-[#1F3B54]">Quality</h3>
              <p className="text-gray-600">We don't just fix cars; we ensure they are safe for your family.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
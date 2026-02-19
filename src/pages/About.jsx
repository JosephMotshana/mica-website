import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us" 
        description="Learn about Mica's mission, our dedicated team, and our commitment to excellence." 
        path="/about" 
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Mica, we believe in bridging the gap between complex technology and human-centric solutions. 
            Founded in 2026, we've dedicated ourselves to helping businesses scale with integrity.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-blue-600 text-3xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Always pushing the boundaries of what is possible.</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-3xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">Clear communication and honest results, every time.</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-3xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">We don't just finish projects; we perfect them.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
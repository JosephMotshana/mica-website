import SEO from '../components/SEO';

const Services = () => {
  const services = [
    { title: "Consulting", desc: "Expert advice for your business growth." },
    { title: "Design", desc: "Modern UI/UX and branding solutions." },
    { title: "Development", desc: "High-performance web applications." },
    { title: "Marketing", desc: "Strategic digital marketing campaigns." }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <SEO title="Services" description="Explore the professional services offered by Mica." path="/services" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-blue-600">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
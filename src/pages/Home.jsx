import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Welcome to Mica. We provide professional services tailored to your business needs." 
        path="/"
      />
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Excellence in Every Detail
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Mica delivers top-tier solutions designed to help your business scale and succeed in the modern market.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          View Our Services
        </button>
      </div>
    </>
  );
};

export default Home;
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-xl text-blue-600">MICA</span>
          <p className="text-sm text-gray-500 mt-1">© 2026 Mica Services. All rights reserved.</p>
        </div>
        <div className="flex gap-8 text-sm text-gray-600">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
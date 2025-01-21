const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Barber Shop. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Twitter
          </a>
        </div>
        <p className="text-xs mt-4">
          Designed by{" "}
          <a href="#" className="text-blue-400 hover:underline">
            YourName
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

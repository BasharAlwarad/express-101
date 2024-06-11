const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="https://twitter.com" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
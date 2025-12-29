import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const sportsLinks = [
    { name: 'Cricket', href: '/cricket' },
    { name: 'Football', href: '/football' },
    { name: 'Tennis', href: '/tennis' },
    { name: 'Hockey', href: '/hockey' },
    { name: 'Basketball', href: '/basketball' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              SportlyRadar
            </Link>
            <p className="mt-2 text-gray-500 text-sm">
              Your ultimate hub for live sports scores, stats, and news.
            </p>
            <div className="flex mt-4 space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sports Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Sports
            </h3>
            <ul className="mt-4 space-y-2">
              {sportsLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact
            </h3>
            <p className="mt-4 text-gray-500 text-sm">
              Email: <a href="mailto:support@sportlyradar.com" className="hover:text-blue-600">support@sportlyradar.com</a>
            </p>
            <p className="mt-2 text-gray-500 text-sm">
              Phone: <a href="tel:+911234567890" className="hover:text-blue-600">+91 123 456 7890</a>
            </p>
            <p className="mt-2 text-gray-500 text-sm">Kanpur, Uttar Pradesh, India</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SportlyRadar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

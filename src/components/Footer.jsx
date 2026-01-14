


import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

const Footer = () => {
  const sportsLinks = [
    { name: 'Cricket', href: '/cricket/live' },
    { name: 'Football', href: '/football/live' },
    { name: 'Tennis', href: '/tennis/live' },
    { name: 'Hockey', href: '/hockey/live' },
    { name: 'Basketball', href: '/basketball/live' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
  ];

  // SEO data for structured data (schema.org)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SportlyRadar",
    "url": "https://sportlyradar.com",
    "logo": "https://sportlyradar.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-123-456-7890",
      "contactType": "customer service",
      "email": "support@sportlyradar.com",
      "areaServed": "IN",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/sportlyradar",
      "https://twitter.com/sportlyradar",
      "https://instagram.com/sportlyradar",
      "https://linkedin.com/company/sportlyradar"
    ]
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
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
                    rel="noopener noreferrer nofollow"
                    aria-label={`Visit our ${social.href.split('.')[1]} page`}
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
                      aria-label={`Go to ${link.name} section`}
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
                      aria-label={`Go to ${link.name} page`}
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
                Email: <a href="mailto:support@sportlyradar.com" className="hover:text-blue-600" aria-label="Send email to support">support@sportlyradar.com</a>
              </p>
              <p className="mt-2 text-gray-500 text-sm">
                Phone: <a href="tel:+911234567890" className="hover:text-blue-600" aria-label="Call support">+91 123 456 7890</a>
              </p>
              <p className="mt-2 text-gray-500 text-sm" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Kanpur</span>, 
                <span itemProp="addressRegion"> Uttar Pradesh</span>, 
                <span itemProp="addressCountry"> India</span>
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SportlyRadar. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;





import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);

  const cricketSeries = [
    { title: 'ICC Mens T20 World Cup 2026', slug: 'icc-mens-t20-world-cup-2026' },
    { title: 'The Ashes, 2025-26', slug: 'the-ashes-2025-26' },
    { title: 'Indian Premier League 2026', slug: 'ipl-2026' },
  ];

  const cricketItems = [
    { title: 'Live Scores & Commentary', href: '/cricket/live' },
    { title: 'Series & Tournaments', href: '/cricket/series' },
    { title: 'ICC Rankings', href: '/cricket/rankings' },
    { title: 'Schedule', href: '/cricket/schedule' },
    { title: 'Leagues', href: '/cricket/leagues' },
  ];

  const footballItems = [
    { title: 'Live Scores & Commentary', href: '/football/live' },
    { title: 'Leagues', href: '/football/leagues' },
    { title: 'Transfer News', href: '/football/transfers' },
    { title: 'Statistics Corner', href: '/football/stats' },
    { title: 'Top Scorers', href: '/football/scorers' },
    { title: 'Player Rankings', href: '/football/rankings' },
    { title: 'Schedule', href: '/football/schedule' },
  ];

  const tennisItems = [
    { title: 'Live Scores & Commentary', href: '/tennis/live' },
    { title: 'Grand Slams', href: '/tennis/grandslams' },
    { title: 'Live Player Rankings', href: '/tennis/rankings' },
    { title: 'ATP/WTA Tours', href: '/tennis/tours' },
  ];

  const hockeyItems = [
    { title: 'Live Scores & Commentary', href: '/hockey/live' },
    { title: 'Leagues', href: '/hockey/leagues' },
    { title: 'Statistics Corner', href: '/hockey/stats' },
    { title: 'Top Scorers', href: '/hockey/scorers' },
    { title: 'Player Rankings', href: '/hockey/rankings' },
    { title: 'Schedule', href: '/hockey/schedule' },
  ];

  const basketballItems = [
    { title: 'Live Scores & Commentary', href: '/basketball/live' },
    { title: 'Leagues', href: '/basketball/leagues' },
    { title: 'Statistics Corner', href: '/basketball/stats' },
    { title: 'Schedule', href: '/basketball/schedule' },
  ];

  const sportsWithDropdown = [
    { name: 'Cricket', items: cricketItems },
    { name: 'Football', items: footballItems },
    { name: 'Tennis', items: tennisItems },
    { name: 'Hockey', items: hockeyItems },
    { name: 'Basketball', items: basketballItems },
  ];

  const simpleLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'AboutUs', href: '/about' },
  ];

  const toggleDropdown = (sport) => {
    setOpenDropdown(openDropdown === sport ? null : sport);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            SportlyRadar
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-2 items-center">
            {sportsWithDropdown.map((sport) => (
              <div
                key={sport.name}
                className="relative"
                onMouseEnter={() => setActiveDesktopDropdown(sport.name)}
                onMouseLeave={() => setActiveDesktopDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                  {sport.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDesktopDropdown === sport.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-0 mt-1 w-72 transition-all ${
                    activeDesktopDropdown === sport.name
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl p-4">
                    <ul className="grid gap-1 grid-cols-1">
                      {sport.items.map((item) => (
                        <li key={item.title} className="relative group">
                          {sport.name === 'Cricket' && item.title === 'Series & Tournaments' ? (
                            <div className="relative group">
                              <Link
                                to={item.href}
                                className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                              >
                                {item.title}
                              </Link>

                              <div className="absolute left-full top-0 ml-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <div className="bg-white rounded-xl shadow-xl">
                                  <ul className="divide-y">
                                    {cricketSeries.map((series) => (
                                      <li key={series.slug}>
                                        <Link
                                          to={`/cricket/series/${series.slug}`}
                                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                        >
                                          {series.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={item.href}
                              className="block px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                            >
                              {item.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-2">
          {sportsWithDropdown.map((sport) => (
            <div key={sport.name}>
              <button
                onClick={() => toggleDropdown(sport.name)}
                className="flex justify-between w-full py-3 font-semibold"
              >
                {sport.name}
                <ChevronDown
                  className={`transition-transform ${
                    openDropdown === sport.name ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === sport.name && (
                <ul className="ml-4 border-l pl-4 space-y-1">
                  {sport.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                      >
                        {item.title}
                      </Link>

                      {sport.name === 'Cricket' && item.title === 'Series & Tournaments' && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {cricketSeries.map((series) => (
                            <li key={series.slug}>
                              <Link
                                to={`/cricket/series/${series.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                              >
                                {series.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {simpleLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 font-semibold text-gray-800"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
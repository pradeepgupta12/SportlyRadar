import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);

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
    { title: 'NBA/FIBA', href: '/basketball/nba' },
    { title: 'Live Scores & Commentary', href: '/basketball/live' },
    { title: 'Statistics Corner', href: '/basketball/stats' },
    { title: 'Schedule', href: '/basketball/schedule' },
  ];

  const sports = [
    { name: 'Cricket', items: cricketItems },
    { name: 'Football', items: footballItems },
    { name: 'Tennis', items: tennisItems },
    { name: 'Hockey', items: hockeyItems },
    { name: 'Basketball', items: basketballItems },
  ];

  const toggleDropdown = (sport) => {
    setOpenDropdown(openDropdown === sport ? null : sport);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 shadow-md">
              <span className="text-lg sm:text-xl font-bold text-white">SR</span>
            </div> */}
            <span className=" text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent sm:block">
              SportlyRadar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {sports.map((sport) => (
              <div 
                key={sport.name} 
                className="relative"
                onMouseEnter={() => setActiveDesktopDropdown(sport.name)}
                onMouseLeave={() => setActiveDesktopDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                  {sport.name}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDesktopDropdown === sport.name ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Desktop Dropdown - No Border, Better Hover Area */}
                <div 
                  className={`absolute left-0 mt-1 w-72 transition-all duration-200 ${
                    activeDesktopDropdown === sport.name 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="p-4">
                      <ul className={`grid gap-1 ${sport.items.length > 5 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {sport.items.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.href}
                              className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 font-medium"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link 
              to="/blog" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              Blog
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {sports.map((sport) => (
            <div key={sport.name} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleDropdown(sport.name)}
                className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              >
                {sport.name}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === sport.name ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openDropdown === sport.name 
                    ? 'max-h-96 opacity-100 mb-2' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="ml-4 space-y-1 pl-4 border-l-2 border-blue-200">
                  {sport.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-150 font-medium"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
          >
            Blog
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
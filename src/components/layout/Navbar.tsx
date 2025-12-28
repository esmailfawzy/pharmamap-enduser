import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import CompactSearchBar from "../features/CompactSearchBar";

interface NavbarProps {
  showSearch?: boolean;
  onSearch?: () => void;
  showViewToggle?: boolean;
  viewMode?: "list" | "map";
  onToggleView?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  showSearch = false,
  onSearch,
  showViewToggle = false,
  viewMode = "list",
  onToggleView,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mock checking if user is logged in
  const isLoggedIn = true; // Set to true to match image

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "طلباتي", path: "/orders" },
    { name: "حسابي", path: "/profile" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-[#0a1120]/80 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 relative z-50 text-gray-900 dark:text-white backdrop-blur-md sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Right Side: Logo & Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold text-blue-500">فارما ماب</span>
              <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-500 text-xl">
                  grid_view
                </span>
              </div>
            </Link>

            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    location.pathname === link.path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Center: Search Bar */}
          {showSearch && (
            <div className="hidden lg:flex flex-1 justify-center px-8">
              <CompactSearchBar onSearch={onSearch} />
            </div>
          )}

          {/* Left Side: Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-xl">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>

            {/* Notifications */}
            <button className="p-2 rounded-full text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors relative cursor-pointer">
              <span className="material-symbols-outlined text-xl">
                notifications
              </span>
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border-2 border-white dark:border-[#0a1120]"></span>
            </button>

            {isLoggedIn ? (
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2 cursor-pointer focus:outline-none"
                >
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all">
                    M
                  </div>
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      to="/profile"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">
                        person
                      </span>
                      حسابي
                    </Link>
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        navigate("/login");
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-right"
                    >
                      <span className="material-symbols-outlined text-lg">
                        logout
                      </span>
                      تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all"
              >
                تسجيل الدخول
              </Link>
            )}

            {/* View Toggle */}
            {showViewToggle && (
              <button
                onClick={onToggleView}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">
                  {viewMode === "list" ? "map" : "grid_view"}
                </span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0F172A] border-t border-gray-100 dark:border-gray-800 py-4 px-4 space-y-4 shadow-xl absolute w-full left-0 top-16">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-medium ${
                location.pathname === link.path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {showSearch && (
            <div className="pt-2">
              <CompactSearchBar onSearch={onSearch} />
            </div>
          )}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <span className="text-gray-500 dark:text-gray-400">
              الوضع الليلي
            </span>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              <span className="material-symbols-outlined text-xl text-white">
                {isDarkMode ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
          {!isLoggedIn && (
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center py-3 bg-blue-600 text-white font-bold rounded-xl"
            >
              تسجيل الدخول
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

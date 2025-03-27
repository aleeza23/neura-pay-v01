
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./UI/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LivePriceTracker } from "./LivePriceTracker";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient">Neura pay</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <LivePriceTracker />
          
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle className="mr-2" />
            <Button
              asChild
              variant="ghost"
              className="text-sm font-medium transition-colors"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="text-sm font-medium bg-primary hover:bg-primary/90"
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle className="mr-2" />
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism border-t border-border mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              <LivePriceTracker />
              
              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/") ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Home
                </Link>
              </nav>

              <div className="flex flex-col gap-3 mt-2">
                <Button
                  asChild
                  variant="ghost"
                  className="text-sm font-medium transition-colors justify-center"
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="text-sm font-medium bg-primary hover:bg-primary/90 justify-center"
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

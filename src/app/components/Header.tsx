import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900">
                Dan's Plumbing & Heating
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Knoxville, Iowa
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Phone CTA - Desktop */}
          <a
            href="tel:6418285555"
            className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>(641) 828-5555</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-900"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Contact
            </button>
            <a
              href="tel:6418285555"
              className="flex items-center gap-2 justify-center bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(641) 828-5555</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Dan's Plumbing & Heating</h3>
            <p className="text-blue-200">
              Professional plumbing and heating services for Knoxville and South
              Central Iowa since 2003.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <div className="space-y-3 text-blue-200">
              <a
                href="tel:6418285555"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                (641) 828-5555
              </a>
              <a
                href="mailto:info@dansplumbingheating.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@dansplumbingheating.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} Dan's Plumbing & Heating. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

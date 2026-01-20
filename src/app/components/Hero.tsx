import { Phone, Clock } from "lucide-react";
import heroImage from "./assets/DPHBG.jpg";

export function Hero() {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Dan's Plumbing & Heating service trucks"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Trusted Plumbing & Heating Services in Knoxville
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Serving South Central Iowa with reliable, professional service for
            over 20 years. Your local experts for all plumbing and heating
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:6418285555"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call (641) 828-5555
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg"
            >
              Request Service
            </button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-yellow-300">
            <Clock className="w-5 h-5" />
            <span>24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-blue-900">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to schedule service or have a question? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl mb-6 text-blue-900">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:6418285555"
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Call Us</p>
                    <p className="text-lg text-blue-900">(641) 828-5555</p>
                  </div>
                </a>

                <a
                  href="mailto:info@dansplumbingheating.com"
                  className="flex items-start gap-4 p-4 bg-white rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-800 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="text-lg text-blue-900">
                      info@dansplumbingheating.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Service Area</p>
                    <p className="text-lg text-blue-900">
                      Knoxville, IA & Surrounding Areas
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Marion County & South Central Iowa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Hours</p>
                    <p className="text-lg text-blue-900">
                      Monday - Friday: 7:00 AM - 5:00 PM
                    </p>
                    <p className="text-lg text-blue-900">
                      Saturday: 8:00 AM - 12:00 PM
                    </p>
                    <p className="text-sm text-yellow-600 mt-2">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl h-full min-h-[400px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717132037179-b24c0bca534a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMElvd2ElMjBmYXJtfGVufDF8fHx8MTc2ODkyNzM2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Rural Iowa landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-blue-900 bg-opacity-90 text-white p-6 rounded-lg">
              <h3 className="text-xl mb-2">Proudly Serving Knoxville</h3>
              <p className="text-blue-100">
                Your trusted local plumbing and heating experts in South
                Central Iowa's rural communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Award, Users, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Serving Knoxville and South Central Iowa since 2003",
  },
  {
    icon: Users,
    title: "Local & Family-Owned",
    description: "A trusted part of the Knoxville community",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "We're here when you need us most",
  },
  {
    icon: MapPin,
    title: "Service Area",
    description: "Knoxville and surrounding Marion County areas",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl mb-6 text-blue-900">
              About Dan's Plumbing & Heating
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Dan's Plumbing & Heating has been proudly serving Knoxville, Iowa
              and the surrounding South Central Iowa communities for over 20
              years. As a locally-owned and operated business, we understand the
              unique needs of rural Iowa homeowners and businesses.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment is simple: provide honest, reliable service at fair
              prices. We treat every home like it's our own and every customer
              like family. Whether it's a routine repair or an emergency in the
              middle of the night, you can count on Dan's.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm mb-1 text-blue-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689793592282-015d9db77917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF0aW5nJTIwZnVybmFjZSUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzY4OTI3MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Heating technician at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

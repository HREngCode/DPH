import { Wrench, Flame, Droplets, ShowerHead, Thermometer, Hammer } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing Repair",
    description:
      "From leaky faucets to burst pipes, we handle all your plumbing repair needs quickly and efficiently.",
  },
  {
    icon: Flame,
    title: "Heating Installation & Repair",
    description:
      "Expert installation and repair of furnaces, boilers, and heating systems to keep you warm through Iowa winters.",
  },
  {
    icon: Droplets,
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance of traditional and tankless water heaters.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom & Kitchen Plumbing",
    description:
      "Complete plumbing solutions for bathroom and kitchen remodels or new installations.",
  },
  {
    icon: Thermometer,
    title: "HVAC Maintenance",
    description:
      "Regular maintenance and tune-ups to keep your heating and cooling systems running efficiently.",
  },
  {
    icon: Hammer,
    title: "Emergency Services",
    description:
      "24/7 emergency plumbing and heating services when you need us most.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-blue-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive plumbing and heating solutions for homes and
            businesses in Knoxville and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl mb-3 text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Knoxville, IA",
    rating: 5,
    text: "Dan and his team were fantastic! Our furnace went out on the coldest night of the year, and they came out within the hour. Professional, friendly, and got us up and running quickly. Highly recommend!",
  },
  {
    name: "Mike Peterson",
    location: "Melcher-Dallas, IA",
    rating: 5,
    text: "We've used Dan's Plumbing & Heating for years. They installed our new water heater and have done various repairs. Always honest, fair pricing, and quality work. They're our go-to for anything plumbing or heating related.",
  },
  {
    name: "Linda Martinez",
    location: "Knoxville, IA",
    rating: 5,
    text: "Had a burst pipe emergency on a Sunday morning. Dan answered right away and was at our house within 30 minutes. He fixed the problem and even helped us clean up the water. True professional and a lifesaver!",
  },
  {
    name: "Tom Anderson",
    location: "Pella, IA",
    rating: 5,
    text: "Great local business! Dan helped us with our entire bathroom remodel plumbing. He was patient with all our questions and the work was done perfectly. Fair prices and supports the local community.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-blue-900">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what your neighbors have to say
            about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="text-blue-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

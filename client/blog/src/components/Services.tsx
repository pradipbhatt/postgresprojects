import Navbar from './Navbar';

const services = [
  {
    title: "Personalized Learning Paths",
    description: "Our AI system tailors learning paths based on your progress and performance, ensuring that each student receives a customized education experience.",
    icon: "📚",  // You can use icons here or import them from a library like React Icons
  },
  {
    title: "Real-Time Progress Tracking",
    description: "Keep track of your learning progress in real-time. Our system offers insights into areas that need improvement and helps set goals for success.",
    icon: "📊",
  },
  {
    title: "Study Resource Recommendations",
    description: "Get AI-driven recommendations for the best study resources, helping you find the content that best matches your current learning needs.",
    icon: "🧠",
  },
  {
    title: "Collaborative Learning",
    description: "Join study groups, collaborate on projects, and discuss ideas with peers in a collaborative learning environment supported by our platform.",
    icon: "🤝",
  },
  {
    title: "Teacher Insights",
    description: "Teachers receive detailed analytics and reports on student performance, enabling them to offer personalized support and guidance where needed.",
    icon: "👩‍🏫",
  },
  {
    title: "Seamless LMS Integration",
    description: "Our platform seamlessly integrates with existing Learning Management Systems (LMS), providing a unified experience for both students and educators.",
    icon: "🔗",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <div className="text-5xl text-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-lg text-dark">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

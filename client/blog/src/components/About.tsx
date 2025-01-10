import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md bg-[#e5ecfc]">
        <h2 className="text-3xl font-semibold mb-4 text-primary">About SOE Intel</h2>
        <p className="text-lg mb-6 text-dark">
          SOE Intel is an AI-powered platform designed to provide personalized education solutions for students, educators, and academic institutions.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Our Mission</h3>
          <p className="text-lg text-dark">
            At SOE Intel, our mission is to revolutionize education through artificial intelligence, enabling students to have customized learning experiences based on their individual needs and progress.
            We aim to enhance learning outcomes and streamline academic processes to make education more efficient and accessible.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Key Features</h3>
          <ul className="list-disc pl-6 text-lg text-dark">
            <li>Personalized learning paths based on student performance</li>
            <li>AI-driven recommendations for study resources and content</li>
            <li>Progress tracking with real-time feedback</li>
            <li>Collaborative learning environment for group studies</li>
            <li>Seamless integration with learning management systems (LMS)</li>
            <li>Data-driven insights for teachers and institutions</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Why Choose SOE Intel?</h3>
          <p className="text-lg text-dark">
            SOE Intel offers a unique, technology-driven approach to education that is both scalable and customizable. With AI integration, we provide a level of personalization that traditional education systems simply cannot match.
            Whether you’re a student looking for tailored learning or an institution aiming to improve student outcomes, SOE Intel is here to help you achieve your goals.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3 text-primary">Get Started</h3>
          <p className="text-lg text-dark">
            Ready to start your personalized learning journey? Join SOE Intel today and experience the future of education. Our platform is easy to use and designed to support learners and educators alike.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

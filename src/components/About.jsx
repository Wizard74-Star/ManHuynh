import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const About = () => {
  const profile = useSelector((state) => state.portfolio.profile);

  const paragraphs = [
    profile.description,
    '🚀 What I Deliver',
    '• Front-End Mastery: Craft responsive UIs with React, Next.js, Svelte, JavaScript, and TypeScript to enhance user engagement and performance.',
    '• Back-End Excellence: Build fast, reliable APIs and servers using Python, FastAPI, Django, and Node.js for data-intensive applications.',
    '• Blockchain & Web3 Innovation: Design decentralized apps (dApps) with Smart Contracts, Solidity, Rust, and Web3 integrations for secure transactions.',
    '• Cloud & DevOps: Optimize deployments on Amazon Web Services (AWS) with containerization and CI/CD pipelines.',
    '• End-to-End Solutions: Deliver complete SaaS platforms from concept to launch, focusing on security, scalability, and maintainability.',
    '🚀 I work with startups and enterprises to build systems that are fast, clean, and highly maintainable. My comprehensive full-stack expertise, combined with cloud deployment, DevOps automation, and modern development practices, makes me an ideal fit for fast-growing projects requiring scalable, production-ready solutions.',
  ];

  return (
    <section
      id="about"
      className="section-container bg-white dark:bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed ${index !== paragraphs.length - 1 ? 'mb-6' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;


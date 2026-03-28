import { motion } from 'motion/react';

const AnimatedChart = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    {/* Grid */}
    <path d="M 20 180 L 180 180 M 20 20 L 20 180" stroke="#E5E7EB" strokeWidth="2" fill="none" />
    
    {/* Bars */}
    <motion.rect x="40" y="120" width="30" height="60" rx="4" fill="url(#grad1)"
      initial={{ height: 0, y: 180 }}
      whileInView={{ height: 60, y: 120 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
    <motion.rect x="90" y="80" width="30" height="100" rx="4" fill="url(#grad1)"
      initial={{ height: 0, y: 180 }}
      whileInView={{ height: 100, y: 80 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    />
    <motion.rect x="140" y="40" width="30" height="140" rx="4" fill="#f97316"
      initial={{ height: 0, y: 180 }}
      whileInView={{ height: 140, y: 40 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
    />
    
    {/* Line */}
    <motion.path 
      d="M 20 160 L 55 110 L 105 70 L 155 30" 
      stroke="#f97316" 
      strokeWidth="4" 
      fill="none" 
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.8 }}
    />
    
    {/* Dots */}
    <motion.circle cx="55" cy="110" r="6" fill="#fff" stroke="#f97316" strokeWidth="3"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}
    />
    <motion.circle cx="105" cy="70" r="6" fill="#fff" stroke="#f97316" strokeWidth="3"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}
    />
    <motion.circle cx="155" cy="30" r="6" fill="#fff" stroke="#f97316" strokeWidth="3"
      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }}
    />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Driving Growth Through Digital Strategy
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I am a passionate Digital Marketing Coach dedicated to helping individuals and businesses build sustainable online presences. With a focus on actionable strategies, I bridge the gap between complex marketing concepts and practical execution.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My approach combines data-driven insights with creative problem-solving, ensuring that every campaign not only reaches its target audience but also converts them into loyal customers.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[3rem] p-8 shadow-2xl relative overflow-hidden flex justify-center items-center aspect-square max-w-md mx-auto w-full border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-orange-50 opacity-50"></div>
            <div className="relative z-10 w-full h-full p-8">
              <AnimatedChart />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Users, Target, BarChart } from 'lucide-react';

const FloatingIcon = ({ children, delay, x, y }: { children: React.ReactNode, delay: number, x: string, y: string }) => (
  <motion.div
    initial={{ opacity: 0, y: y, x: x }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1],
      y: [`calc(${y} - 15px)`, `calc(${y} + 15px)`, `calc(${y} - 15px)`],
      x: [`calc(${x} - 10px)`, `calc(${x} + 10px)`, `calc(${x} - 10px)`]
    }}
    transition={{ 
      duration: 6, 
      delay, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
    className="absolute text-green-600 pointer-events-none z-0"
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Pattern & Animations */}
      <div className="absolute inset-0 pattern-bg opacity-50 z-0"></div>
      
      <FloatingIcon delay={0} x="10%" y="20%"><TrendingUp size={64} /></FloatingIcon>
      <FloatingIcon delay={1} x="85%" y="15%"><Users size={48} /></FloatingIcon>
      <FloatingIcon delay={2} x="75%" y="75%"><Target size={56} /></FloatingIcon>
      <FloatingIcon delay={1.5} x="15%" y="80%"><BarChart size={72} /></FloatingIcon>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6 tracking-wide">
            DIGITAL MARKETING COACH
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            AFORE <br/>
            <span className="text-green-600">TAMARAKROH</span> <br/>
            BRIGHT
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            I help people build sustainable businesses online through proven digital marketing strategies and coaching.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30"
            >
              Contact Me
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold hover:border-green-600 hover:text-green-600 transition-all"
            >
              View My Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Collage inspired by reference image */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-1 row-span-2 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Strategy session" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-[2rem] overflow-hidden shadow-xl h-48 border-4 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Analytics" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-[2rem] overflow-hidden shadow-xl h-48 border-4 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Coaching" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
          >
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Students Trained</p>
              <p className="text-xl font-bold text-gray-900">350+</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

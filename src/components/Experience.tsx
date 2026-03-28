import { motion } from 'motion/react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, DollarSign, Users, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Digital Product Sales",
    metric: "$6k+",
    description: "Generated over $6,000 in revenue online by creating and selling high-value digital products tailored to market needs.",
    icon: <DollarSign size={24} />,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 2,
    title: "Student Training & Mentorship",
    metric: "350+",
    description: "Successfully trained and mentored over 350 students, equipping them with actionable digital marketing skills.",
    icon: <Users size={24} />,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-400 to-red-500"
  },
  {
    id: 3,
    title: "Business Growth Consulting",
    metric: "100%",
    description: "Helped numerous clients build sustainable online businesses from scratch, focusing on long-term growth strategies.",
    icon: <Award size={24} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-500 to-indigo-600"
  }
];

export default function Experience() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-2">My Experience</h2>
            <h3 className="text-3xl md:text-5xl font-bold">Milestones & Impact</h3>
          </motion.div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="min-w-[85vw] md:min-w-[400px] snap-center bg-gray-800 rounded-[2rem] overflow-hidden group border border-gray-700 hover:border-gray-500 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${exp.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white`}>
                  {exp.icon}
                </div>
              </div>
              <div className="p-8">
                <div className="text-4xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {exp.metric}
                </div>
                <h4 className="text-xl font-bold mb-3 text-green-400">{exp.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

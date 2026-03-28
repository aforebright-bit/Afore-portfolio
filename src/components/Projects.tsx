import { motion } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Digital Mastery Course",
    category: "E-Learning Platform",
    description: "A comprehensive online course platform where students can access digital marketing modules, track progress, and interact.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    tags: ["Marketing", "LMS", "Strategy"],
    featured: true
  },
  {
    id: 2,
    title: "Conversion Funnel Pro",
    category: "Marketing Campaign",
    description: "A high-converting sales funnel designed for a premium digital product, resulting in a 300% increase in sales.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
    tags: ["Funnels", "Copywriting", "Ads"],
    featured: false
  },
  {
    id: 3,
    title: "Brand Accelerator",
    category: "Consulting Project",
    description: "Complete brand repositioning and digital strategy for an emerging e-commerce brand.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    tags: ["Branding", "SEO", "Social Media"],
    featured: false
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2"
            >
              Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900"
            >
              Featured Projects
            </motion.h3>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-colors text-gray-600"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-colors text-gray-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar px-4 -mx-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`snap-center shrink-0 rounded-[2rem] overflow-hidden bg-white shadow-xl group border border-gray-100 ${
                project.featured ? 'w-[85vw] md:w-[600px]' : 'w-[85vw] md:w-[400px]'
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-green-500 hover:text-white transition-colors shadow-lg">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-green-500 hover:text-white transition-colors shadow-lg">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="text-sm font-bold text-orange-500 mb-2">{project.category}</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

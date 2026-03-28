import { motion } from 'motion/react';
import { Megaphone, Lightbulb, TrendingUp, Target } from 'lucide-react';

const skills = [
  {
    title: "Digital Marketer",
    description: "Crafting comprehensive digital strategies that drive traffic, engagement, and conversions across multiple channels.",
    icon: <Megaphone size={32} />,
    color: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-100",
    hoverBorder: "hover:border-green-300"
  },
  {
    title: "Online Coach",
    description: "Empowering students and entrepreneurs with the knowledge and tools needed to succeed in the digital landscape.",
    icon: <Lightbulb size={32} />,
    color: "bg-orange-50",
    iconColor: "text-orange-500",
    borderColor: "border-orange-100",
    hoverBorder: "hover:border-orange-300"
  },
  {
    title: "Sales Funnel Optimization",
    description: "Designing and refining customer journeys to maximize ROI and build sustainable revenue streams.",
    icon: <TrendingUp size={32} />,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "border-blue-100",
    hoverBorder: "hover:border-blue-300"
  },
  {
    title: "Brand Positioning",
    description: "Helping brands find their unique voice and stand out in crowded online markets.",
    icon: <Target size={32} />,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    borderColor: "border-purple-100",
    hoverBorder: "hover:border-purple-300"
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2"
          >
            My Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            Skills That Drive Results
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-[2rem] border-2 ${skill.borderColor} ${skill.hoverBorder} transition-all duration-300 bg-white shadow-sm hover:shadow-xl group`}
            >
              <div className={`w-16 h-16 rounded-2xl ${skill.color} ${skill.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h4>
              <p className="text-gray-600 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

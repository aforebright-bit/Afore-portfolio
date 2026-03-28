import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, Twitter, Facebook, Send } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pattern-bg opacity-30 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-50 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-green-600 rounded-[3rem] p-8 md:p-16 shadow-2xl overflow-hidden relative">
          {/* Inner decorative circle */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500 rounded-full blur-2xl"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Your Sustainable Business?
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-md">
                Let's connect and discuss how we can elevate your digital marketing strategy and achieve your goals.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:aforebright@gmail.com" className="flex items-center gap-4 text-white hover:text-orange-300 transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg font-medium">aforebright@gmail.com</span>
                </a>
                <a href="tel:08113383018" className="flex items-center gap-4 text-white hover:text-orange-300 transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg font-medium">08113383018</span>
                </a>
              </div>

              <div className="mt-12">
                <p className="text-green-100 font-medium mb-4">Connect with me @aforebright</p>
                <div className="flex gap-4">
                  {[
                    { icon: <MessageCircle size={20} />, href: "https://wa.me/08113383018", label: "WhatsApp" },
                    { icon: <TikTokIcon size={20} />, href: "#", label: "TikTok" },
                    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
                    { icon: <Twitter size={20} />, href: "#", label: "Twitter" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-orange-500/30">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

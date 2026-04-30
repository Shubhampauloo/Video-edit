/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Video, 
  Layers, 
  Palette, 
  Type, 
  Zap, 
  Smartphone, 
  Star, 
  CheckCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  CreditCard, 
  Wallet, 
  Globe, 
  Play, 
  Instagram, 
  Youtube, 
  Clock, 
  Award, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Video className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
              Shubham Edits
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-900/20"
            >
              Get a Quote
            </a>
          </div>

          <button 
            className="md:hidden text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Layers className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-6 flex flex-col gap-4 text-center"
          >
            {['Services', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-100'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1574717024458-388ee71551ee?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 uppercase tracking-wider"
        >
          <Zap className="w-3 h-3 fill-current" />
          Faster delivery, Higher engagement
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]"
        >
          High-Octane <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">Automotive Edits</span> for BMW & Beyond
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Professional car video editing that captures the thrill of the drive. Cinematic rollers, exhaust notes, and high-energy drift edits.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#contact" 
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#portfolio" 
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
          >
            View Portfolio
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
        >
          {['4K Editing', 'Motion Graphics', 'Color Grading', 'Sound Design'].map((trait) => (
            <div key={trait} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              {trait}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: 'Cinematic Rollers', desc: 'Smooth, color-graded rolling shots that highlight every curve of your car.', icon: Video, color: 'text-blue-400' },
    { title: 'Exhaust Sound Design', desc: 'Capturing the raw power of the engine with crisp, layered audio.', icon: Zap, color: 'text-amber-400' },
    { title: 'High-Energy Reels', desc: 'Fast-paced edits designed for Instagram and TikTok car culture.', icon: Smartphone, color: 'text-pink-400' },
    { title: 'Color Transformation', desc: 'Professional grading to make paint pops and street lights glow.', icon: Palette, color: 'text-violet-400' },
    { title: 'Drift & Track Coverage', desc: 'Action-packed montages from the track or drift events.', icon: Youtube, color: 'text-red-500' },
    { title: 'Brand Storytelling', desc: 'Clean edits for custom shops, dealerships, and car gear.', icon: Globe, color: 'text-emerald-400' },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="From basic cuts to Hollywood-level post-production, I offer everything you need.">
          Top-Tier Services
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-800/40 border border-white/5 hover:border-blue-500/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseMe = () => {
  const points = [
    { title: 'Super-Fast Delivery', desc: 'Most projects delivered within 24-48 hours.', icon: Clock },
    { title: 'Affordable Rates', desc: 'Premium quality at competitive prices.', icon: Star },
    { title: 'Unlimited Revisions', desc: 'I am not happy until you are impressed.', icon: Zap },
    { title: 'Creative Input', desc: 'I help with ideas to improve your content.', icon: Award },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-violet-700 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-blue-900/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Why Choose My Editing Service?</h2>
              <p className="text-blue-100 text-lg mb-8 opacity-90">I don't just cut clips together. I help you tell a story that resonates with your audience and drives results.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {points.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <point.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{point.title}</h4>
                      <p className="text-blue-100/70 text-sm leading-snug">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative aspect-video rounded-3xl overflow-hidden border-8 border-white/10 shadow-3xl bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Work station"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-pulse">
                     <Play className="text-blue-600 w-8 h-8 fill-current" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const works = [
    { title: 'BMW M4 Competition Glide', cat: 'Cinematic', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Night Street Drifting', cat: 'Short-form', img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Supercar Sound Design', cat: 'Audio Focus', img: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Highway Roller Montage', cat: 'Aesthetic', img: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Track Day Highlights', cat: 'Action', img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Exclusive Car Reveal', cat: 'Event', img: 'https://images.unsplash.com/photo-1594051808233-e30ff5bf364c?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="A showcase of some recent projects I've worked on. Quality speaks for itself.">
          Work Showcase
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-video bg-slate-800"
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">{work.cat}</span>
                <h4 className="text-xl font-bold text-white mb-2">{work.title}</h4>
                <div className="w-10 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <Play className="text-white w-6 h-6 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all">
            See More on Behance 
          </button>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    { 
      name: 'Basic', 
      price: '$49', 
      desc: 'Ideal for short social media clips.',
      features: ['Up to 1 min length', 'Basic Cuts & Transitions', 'Music & Sound Effects', 'Subtitles included', '2 Revisions'],
      popular: false
    },
    { 
      name: 'Standard', 
      price: '$149', 
      desc: 'Perfect for YouTube videos & ads.',
      features: ['Up to 10 min length', 'Advanced Motion Graphics', 'Pro Color Grading', 'Script consultation', 'Unlimited Revisions', 'Thumbnail design'],
      popular: true
    },
    { 
      name: 'Premium', 
      price: '$299', 
      desc: 'Full cinematic production.',
      features: ['Up to 20 min length', 'Virtual Backgrounds / VFX', 'Original B-roll selection', 'Deep Sound Design', 'Highest priority delivery', 'Project source files'],
      popular: false
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Transparent pricing for every need. Choose a plan that fits your vision.">
          Pricing Plans
        </SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col p-10 rounded-[2.5rem] border transition-all ${
                tier.popular 
                  ? 'bg-gradient-to-b from-blue-600 to-indigo-700 border-white/20 scale-105 shadow-2xl shadow-blue-900/50 z-10' 
                  : 'bg-slate-800/50 border-white/10 hover:border-blue-500/30'
              }`}
            >
              {tier.popular && (
                <span className="self-start px-4 py-1.5 rounded-full bg-white text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6">
                  Recommended
                </span>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-slate-100'}`}>{tier.name}</h3>
              <p className={`text-sm mb-6 ${tier.popular ? 'text-blue-100/70' : 'text-slate-400'}`}>{tier.desc}</p>
              <div className="mb-8">
                <span className={`text-5xl font-black ${tier.popular ? 'text-white' : 'text-slate-100'}`}>{tier.price}</span>
                <span className={`text-sm ${tier.popular ? 'text-blue-100/70' : 'text-slate-400'}`}>/ project</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 shrink-0 ${tier.popular ? 'text-white' : 'text-blue-500'}`} />
                    <span className={`text-sm ${tier.popular ? 'text-blue-100' : 'text-slate-300'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                tier.popular 
                  ? 'bg-white text-blue-700 hover:bg-slate-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                Choose {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Alex Rivera', role: 'Gaming YouTuber', text: '"Absolutely transformed my retention rates. The editing is snappy, professional, and exactly what I needed. Highly recommend!"', rating: 5 },
    { name: 'Sarah Jenkins', role: 'Marketing Manager', text: '"The color grading and overlays made our product look like a million bucks. Fast delivery and zero friction interface."', rating: 5 },
    { name: 'Marcus Chen', role: 'Content Creator', text: '"Best editor I have worked with. Understands viral trends and knows how to keep viewers hooked till the very end."', rating: 5 },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Don't just take my word for it. Hear from clients who leveled up their content.">
          Customer Success
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900 border border-white/5 relative"
            >
              <div className="flex gap-1 mb-4 text-amber-500">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">{r.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-blue-400">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-white">{r.name}</h5>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaymentSection = () => {
  const methods = [
    { name: 'UPI', icon: Wallet },
    { name: 'PayPal', icon: CreditCard },
    { name: 'GPay', icon: Smartphone },
    { name: 'Paytm', icon: Wallet },
    { name: 'Visa/Mastercard', icon: CreditCard },
    { name: 'Bank Transfer', icon: Globe },
  ];

  return (
    <section className="py-16 bg-slate-950/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Flexible Payments</h3>
            <p className="text-slate-500 text-sm">International & Local methods accepted for your convenience.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60">
            {methods.map((m) => (
              <div key={m.name} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <m.icon className="w-6 h-6 text-slate-300" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Contact Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Level Up Your Content?</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/10">
                  <Phone className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Call / SMS</p>
                  <p className="text-2xl font-bold text-white">8001963793</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-600/10 rounded-2xl flex items-center justify-center shrink-0 border border-violet-500/10">
                  <Mail className="text-violet-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email Me</p>
                  <p className="text-lg md:text-xl font-bold text-white break-all">shubhampaul8001963793@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600/10 rounded-2xl flex items-center justify-center shrink-0 border border-green-500/10">
                  <MessageSquare className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">WhatsApp</p>
                  <a 
                    href="https://wa.me/918001963793" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-green-900/20 mt-2"
                  >
                    Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 rounded-[3rem] bg-slate-900/80 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-violet-500" />
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Service Needed</label>
                <select className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium appearance-none">
                  <option className="bg-slate-900">YouTube Video</option>
                  <option className="bg-slate-900">Instagram Reel / TikTok</option>
                  <option className="bg-slate-900">Corporate Ad</option>
                  <option className="bg-slate-900">Motion Graphics</option>
                  <option className="bg-slate-900">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <textarea className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:outline-none focus:border-blue-500 transition-all font-medium resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Video className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white">Shubham Edits</span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
            Premier automotive video editing. Bringing the energy of the track and the aesthetic of the street to your screens.
          </p>
          <div className="flex gap-4">
            {[Instagram, Youtube, Globe, MessageSquare].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all text-slate-400 hover:text-blue-400">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Services', 'Portfolio', 'Pricing', 'Testimonials'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-slate-300 font-medium">Shubham Edits</span>. All rights reserved.
        </p>
        <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">
          Crafted for Creators
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <PaymentSection />
      <Contact />
      <Footer />
    </div>
  );
}

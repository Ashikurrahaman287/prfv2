import { useState, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';
import spudBlocksLogo from '@assets/Spud Blocks Only Logo Color Full_1762234458919.png';
import spudpay from '../../../attached_assets/spudpay.jpg';
import arcaneLogo from '@assets/Black and White Modern Streetwear Sport Logo_1762234382168.png';
import ascendexLogo from '@assets/photo_2022-12-27_08-08-25 (1)_1762234436801.jpg';
import agtLogo from '@assets/487989397_122221850360195791_7773183041984101712_n_1762234357260.jpg';

const ventures = [
  {
    name: 'SpudPay',
    role: 'Founder',
    period: '2025 - Present',
    description:
      'SpudPay is an innovative financial technology platform that leverages blockchain technology to facilitate seamless cross-border transactions. Designed to transform the way individuals and businesses conduct international payments, SpudPay aims to make these transactions faster, more transparent, and cost-effective. Spudpay is a Blockchain-basedMobile Financial Service (MFS) that will redefine the way people handle money — from C2C, B2C, and B2B transactions to crypto gateways, remittances, and digital banking solutions',
    logo: spudpay,
    gradient: 'from-primary to-chart-2',
  },
  {
    name: 'Arcane Group',
    role: 'Advisor',
    period: '2025 - Present',
    description:
      'An innovative investment firm dedicated to empowering and funding businesses that promote natural living, health, and overall well-being. The firm focuses on ventures that align with sustainable growth, organic products, eco-friendly innovation, and holistic health solutions.',
    logo: arcaneLogo,
    gradient: 'from-chart-5 to-chart-3',
  },
  {
    name: 'AscendEX',
    role: 'Board Member',
    period: '2024 - Present',
    description: `AscendEX (formerly known as BitMax) is a global cryptocurrency exchange platform that offers a comprehensive suite of financial services for both retail and institutional clients. Founded in 2018 by a group of Wall Street quantitative trading veterans, it is headquartered in Singapore and known for integrating centralized exchange features with elements from the decentralized finance (DeFi) ecosystem.`,
    logo: ascendexLogo,
    gradient: 'from-chart-4 to-primary',
  },
  {
    name: 'AGT Venture',
    role: 'Board Member',
    period: '2022 - Present',
    description:
      'Ash Group of Technology (AGT) is a forward-thinking and diversified joint venture, uniting a wide range of technology-driven businesses under one visionary umbrella. AGT is committed to innovation, collaboration, and excellence across multiple sectors of the tech industry, driving impactful solutions and shaping the future through cutting-edgeadvancements. Backed By 115.1M$ Investment Via Zhou Group',
    logo: agtLogo,
    gradient: 'from-chart-3 to-chart-4',
  },
  {
    name: 'SpudBlocks',
    role: 'CEO',
    period: '2018 - 2024',
    description: `SpudBlocks is a dynamic team of tech enthusiasts and seasoned professionals specializing in the blockchain and cryptocurrency sectors. Our mission is to facilitate the advancement of businesses, irrespective of their scale, by leveraging the potential of the web3 landscape. By harnessing pioneering strategies and state-of-the-art technology, we are committed to delivering unparalleled solutions that empower our clients to surpass their objectives and foster continuous development.`,
    logo: spudBlocksLogo,
    gradient: 'from-chart-2 to-chart-3',
  },
];

function VentureCard({ venture, index }: { venture: typeof ventures[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const staggerClass = shouldReduceMotion ? '' : `stagger-${(index % 6) + 1}`;

  return (
    <motion.div
      ref={cardRef}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={shouldReduceMotion ? { opacity: 1 } : (isInView ? { opacity: 1 } : { opacity: 0 })}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.15 }}
    >
      <Card
        className={`p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group overflow-hidden relative cursor-pointer ${shouldReduceMotion ? '' : `animate-block-slide ${staggerClass}`}`}
        data-testid={`card-venture-${venture.name.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${venture.gradient} opacity-10 rounded-full blur-3xl`} />
        
        <div className="relative">
          <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-xl bg-background/50 p-3 border border-border relative overflow-hidden">
            <div className={`absolute inset-0 ${shouldReduceMotion ? '' : 'animate-scan'} opacity-30 bg-gradient-to-b from-transparent via-primary/20 to-transparent`} />
            <img 
              src={venture.logo} 
              alt={`${venture.name} logo`}
              className={`w-full h-full object-contain relative z-10 ${shouldReduceMotion ? '' : 'animate-circuit-trace'}`}
            />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-2">{venture.name}</h3>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-primary">{venture.role}</span>
            <span className="text-sm text-muted-foreground">• {venture.period}</span>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed">{venture.description}</p>
          </motion.div>

          <motion.div
            className="mt-4 flex items-center justify-center"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" data-testid={`icon-expand-${venture.name.toLowerCase().replace(/\s+/g, '-')}`} />
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function VenturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="ventures" className="py-24 px-6" data-testid="section-ventures" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 })}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
        >
          Leadership & Ventures
        </motion.h2>
        
        <motion.div 
          className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full"
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={shouldReduceMotion ? { scaleX: 1 } : (isInView ? { scaleX: 1 } : { scaleX: 0 })}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <VentureCard key={index} venture={venture} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

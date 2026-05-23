/**
 * ============================================
 * HOME PAGE - AdvantEdge Main Landing Page
 * ============================================
 * REORGANIZED VERSION - 22 SECTIONS
 * Bold. Executive. Decisive.
 * 
 * Color System:
 * - Primary: #000131 (Deep Navy)
 * - Secondary: #0000aa (Bright Blue)
 * - Accent: #ffb300 (Yellow)
 * - Background: Light Pastel Gradient
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';

// Lucide Icons
import { 
  ArrowRight, 
  Target, 
  Zap, 
  TrendingUp, 
  Eye, 
  Rocket, 
  BarChart3, 
  Users,
  Globe, 
  Megaphone,
  Layers,
  LineChart,
  MonitorSmartphone,
  Shield,
  Sparkles,
  CheckCircle2,
  Building2,
  Store,
  Hospital,
  GraduationCap,
  Briefcase,
  Factory,
  Heart,
  Lightbulb,
  Search,
  PenTool,
  RefreshCw,
  Award,
  Palette
} from 'lucide-react';

// Primitive Components
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import { Accordion } from '../components/Accordion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { TeamSection } from '../components/TeamSection';
import { TestimonialsWithImages } from '../components/TestimonialsWithImages';
import { VideoTestimonial } from '../components/VideoTestimonial';
import { TrustBadges } from '../components/TrustBadges';
import { ClientLogoCarousel } from '../components/ClientLogoCarousel';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { BlogPreview } from '../components/BlogPreview';
import { ExpandableServiceCards } from '../components/ExpandableServiceCards';
import { ImageGallery } from '../components/ImageGallery';

// Enhanced UI Components
import { AnimatedCounter } from '../components/AnimatedCounter';
import { MagneticButton } from '../components/MagneticButton';
import { GlowEffect } from '../components/GlowEffect';
import { TextGradient } from '../components/TextGradient';
import { ImageFeatureCard } from '../components/ImageFeatureCard';
import { ParticleGlobe } from '../components/ParticleGlobe';

// Enhanced Home Sections with Bento Grid & Carousels
import { 
  WhyChooseUsBento, 
  TestimonialsCarousel, 
  CapabilitiesCarousel,
  StatsCarousel,
  ProcessFrameworkBento
} from '../components/EnhancedHomeSections';

// Modern Background Component
import { ModernSectionBackground } from '../components/ModernSectionBackground';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

// The AdvantEdge Way Principles
const principles = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Strategy Guides Every Move',
    description: 'Business objectives define direction. Execution follows with discipline.',
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Positioning Shapes Every Message',
    description: 'Consistency is engineered — not assumed.',
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: 'Integration Removes Friction',
    description: 'Brand, digital, content, and sales move in alignment.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Performance Validates Direction',
    description: 'Measurement is continuous. Refinement is systematic.',
  },
];

// Business Objectives
const objectives = [
  {
    icon: <Target className="w-7 h-7" />,
    title: 'Distinct and defensible brand positioning',
    description: 'Strategic market position that creates competitive advantage.',
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Structured and consistent communication',
    description: 'Messaging systems engineered for clarity and impact.',
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: 'High-quality demand and pipeline growth',
    description: 'Lead generation built for conversion and revenue.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Sales and marketing alignment',
    description: 'Coordinated execution across all revenue functions.',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Scalable multi-channel presence',
    description: 'Integrated systems across digital and offline touchpoints.',
  },
];

// Core Capabilities
const capabilities = [
  {
    id: 'capability-1',
    icon: <MonitorSmartphone className="w-7 h-7" />,
    title: 'Digital Marketing',
    description: 'Search authority. Paid acquisition precision. Conversion engineering. Automation systems. Demand generation built for pipeline quality — not vanity metrics.',
    features: [
      'SEO & organic search authority',
      'Performance advertising (Google, Meta, LinkedIn)',
      'Conversion rate optimization',
      'Marketing automation & lead scoring',
    ],
  },
  {
    id: 'capability-2',
    icon: <Eye className="w-7 h-7" />,
    title: 'Branding & Brand Systems',
    description: 'Strategic positioning, messaging architecture, and identity governance that create clarity, differentiation, and competitive advantage.',
    features: [
      'Brand strategy & market positioning',
      'Messaging architecture & voice systems',
      'Visual identity & design governance',
      'Brand asset management',
    ],
  },
  {
    id: 'capability-3',
    icon: <Rocket className="w-7 h-7" />,
    title: 'Website Strategy & Development',
    description: 'High-performance digital infrastructure engineered for credibility, usability, and measurable conversion.',
    features: [
      'UX/UI strategy & user research',
      'Conversion-optimized development',
      'Performance engineering & technical SEO',
      'CMS implementation & governance',
    ],
  },
  {
    id: 'capability-4',
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Online PR & Reputation',
    description: 'Authority-building visibility across digital ecosystems and industry media.',
    features: [
      'Digital media relations',
      'Executive thought leadership',
      'Online reputation management',
      'Strategic content distribution',
    ],
  },
  {
    id: 'capability-5',
    icon: <Building2 className="w-7 h-7" />,
    title: 'Offline Marketing',
    description: 'Strategic integration across events, exhibitions, print, and channel marketing.',
    features: [
      'Event & exhibition strategy',
      'Print design & production',
      'Collateral development',
      'Channel marketing programs',
    ],
  },
  {
    id: 'capability-6',
    icon: <Target className="w-7 h-7" />,
    title: 'Strategic Marketing',
    description: 'Comprehensive marketing strategy and planning that aligns business objectives with market opportunities and competitive positioning.',
    features: [
      'Marketing audits & opportunity analysis',
      'Competitive intelligence & market research',
      'Go-to-market strategy & planning',
      'Marketing roadmap development',
    ],
  },
  {
    id: 'capability-7',
    icon: <Layers className="w-7 h-7" />,
    title: 'Integrated Marketing',
    description: 'Unified cross-channel marketing execution where brand, digital, content, and sales activation move in coordinated alignment.',
    features: [
      'Channel integration & orchestration',
      'Campaign coordination across touchpoints',
      'Unified messaging architecture',
      'Cross-functional marketing alignment',
    ],
  },
];

// Process Steps
const processSteps = [
  {
    number: 1,
    icon: <Search className="w-7 h-7" />,
    title: 'Discover',
    description: 'Define business objectives and context.',
  },
  {
    number: 2,
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Define',
    description: 'Build strategy, positioning, and integrated roadmaps.',
  },
  {
    number: 3,
    icon: <PenTool className="w-7 h-7" />,
    title: 'Execute',
    description: 'Activate across channels with coordination and control.',
  },
  {
    number: 4,
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Optimize',
    description: 'Measure performance. Refine continuously. Improve systematically.',
  },
];

// Industries
const industries = [
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'B2B Technology & SaaS',
    description: 'Enterprise software, cloud platforms, cybersecurity, AI/ML solutions, developer tools, and emerging technology companies.',
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: 'Professional Services',
    description: 'Management consulting, legal, accounting, financial advisory, and specialized professional services.',
  },
  {
    icon: <Hospital className="w-12 h-12" />,
    title: 'Healthcare & Life Sciences',
    description: 'Medical devices, pharmaceuticals, biotech, health systems, telemedicine, and digital health.',
  },
  {
    icon: <Store className="w-12 h-12" />,
    title: 'Retail & E-Commerce',
    description: 'Consumer brands, direct-to-consumer businesses, omnichannel retail, and marketplace platforms.',
  },
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: 'Education & EdTech',
    description: 'Higher education, K-12 schools, online learning platforms, training providers, and educational technology.',
  },
  {
    icon: <Factory className="w-12 h-12" />,
    title: 'Manufacturing & Industrial',
    description: 'Advanced manufacturing, industrial equipment, supply chain solutions, and B2B distribution.',
  },
];

// FAQ Data
const faqItems = [
  {
    id: 'faq-1',
    title: 'What makes AdvantEdge different from other marketing agencies?',
    icon: <Sparkles className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'AdvantEdge operates as a strategic marketing partner—not a task executor. We bridge strategic thinking and execution, ensuring every initiative serves a business priority and delivers measurable outcomes through integrated marketing systems.',
  },
  {
    id: 'faq-2',
    title: 'How do you measure marketing success and ROI?',
    icon: <LineChart className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'We track visibility, engagement quality, conversion performance, and revenue impact. Every channel has defined KPIs with transparent reporting. We measure, analyze, refine, and optimize based on data-driven insights aligned with business objectives.',
  },
  {
    id: 'faq-3',
    title: 'What industries and company sizes do you work with?',
    icon: <Building2 className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'We serve B2B technology, professional services, healthcare, education, retail, and financial services across startups to enterprise organizations. Our frameworks adapt to industry-specific challenges while maintaining core marketing principles.',
  },
  {
    id: 'faq-4',
    title: 'Do you offer long-term partnerships or project-based engagements?',
    icon: <Shield className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'Both. We excel at long-term strategic partnerships where we become an extension of your leadership team, and we deliver focused project-based engagements for brand launches, website development, or strategic consulting.',
  },
  {
    id: 'faq-5',
    title: 'What is your typical engagement process and timeline?',
    icon: <RefreshCw className="w-6 h-6" style={{ color: colors.brand.primary }} />,
    content: 'Our proven four-phase process begins with discovery (2-3 weeks), strategy development (2-4 weeks), execution launch (ongoing), and continuous optimization. Most clients see initial results within 60-90 days.',
  },
];

export function HomePage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        ogImage={PAGE_SEO.home.ogImage}
        path="/"
        showFAQ={true}
        faqKey="home"
      />
      
      {/* ============================================
          1. HERO SECTION
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-office" className="relative overflow-hidden py-12 lg:py-16">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-3"
              >
                <GlowEffect color={colors.brand.accent} intensity={20}>
                  <motion.span 
                    className="inline-flex items-center px-3 py-1.5 rounded-full shadow-lg border-2"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(12px)',
                      borderColor: colors.brand.accent 
                    }}
                    whileHover={{ scale: 1.05, borderColor: colors.brand.primary }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sparkles className="w-3.5 h-3.5 mr-2" style={{ color: colors.brand.accent }} />
                    <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>Strategic Growth Partner</span>
                  </motion.span>
                </GlowEffect>
              </motion.div>

              <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-3" style={{ color: colors.brand.primary }}>
                Integrated Marketing That{' '}
                <span className="relative inline-block">
                  <TextGradient animated className="relative z-10 text-2xl sm:text-3xl lg:text-3xl font-bold">
                    Moves Business
                  </TextGradient>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1.5 -z-0"
                    style={{ backgroundColor: colors.brand.accent, opacity: 0.3 }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </span>{' '}
                Forward
              </h1>

              <div className="space-y-2 mb-4">
                <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                  Growth is not accidental. It is engineered.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Integrated marketing systems where strategy, execution, and performance operate in disciplined alignment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <MagneticButton strength={0.3}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    style={{ background: gradients.primary }}
                  >
                    Start Conversation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                  >
                    Explore Services
                  </Link>
                </MagneticButton>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-300/50">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter end={350} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                    <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>+</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">Clients</p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter end={94} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                    <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>%</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">Satisfaction</p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-baseline gap-0.5">
                    <AnimatedCounter end={4.1} decimals={1} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                    <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>x</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">ROI</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Globe */}
            <motion.div
              className="relative flex items-center justify-center w-full mt-4 lg:mt-0 overflow-hidden rounded-2xl"
              style={{ height: 'clamp(200px, 50vw, 380px)' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="scale-[0.52] sm:scale-[0.75] lg:scale-100 origin-center">
                  <ParticleGlobe 
                    width={450}
                    height={450}
                    particleCount={1200}
                    rotationSpeed={0.0015}
                    radius={160}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </ModernSectionBackground>

      {/* ============================================
          2. TRUST BADGES
          ============================================ */}
      <TrustBadges />

      {/* ============================================
          3. CLIENT LOGO CAROUSEL
          ============================================ */}
      <ClientLogoCarousel />

      {/* ============================================
          4. ABOUT ADVANTEDGE (Built for Organizations That Expect More)
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-team">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Who We Are"
            badgeIcon={<Shield className="w-4 h-4" />}
            title="Built for Organizations That Expect More"
            description="AdvantEdge operates where strategy meets execution—delivering integrated marketing systems that create predictable, scalable growth."
            align="center"
            maxWidth="3xl"
          />

          {/* Main Value Proposition */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto mb-16">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB0ZWFtJTIwYnVzaW5lc3MlMjBtZWV0aW5nfGVufDF8fHx8MTc3NDU1ODI0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Executive team collaboration"
                    className="w-full h-[320px] lg:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                {/* Floating Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-3 right-3 sm:-bottom-6 sm:-right-6 lg:-right-8"
                >
                  <GlassCard variant="strong" rounded="xl" padding="base" className="shadow-2xl">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl" style={{ background: gradients.primary }}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold" style={{ color: colors.brand.primary }}>15+</span>
                          <span className="text-sm font-bold" style={{ color: colors.brand.accent }}>Years</span>
                        </div>
                        <p className="text-xs text-gray-600 font-medium mt-0.5">Strategic Excellence</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-bold leading-tight" style={{ color: colors.brand.primary }}>
                    We Don't Execute Tasks.{' '}
                    <span style={{ color: colors.brand.secondary }}>We Engineer Growth.</span>
                  </h3>
                  <div className="h-1 w-24 rounded-full" style={{ background: gradients.primary }}></div>
                </div>

                <p className="text-sm leading-relaxed text-gray-700">
                  AdvantEdge is your strategic marketing partner—not a vendor, not a task executor. We operate at the intersection of strategic thinking and disciplined execution.
                </p>

                <div className="space-y-4 pt-4">
                  {[
                    {
                      icon: <Target className="w-5 h-5" />,
                      title: 'Strategic Leadership',
                      text: 'We function as an extension of your executive team, aligning marketing initiatives directly with business priorities.'
                    },
                    {
                      icon: <Layers className="w-5 h-5" />,
                      title: 'Integrated Systems',
                      text: 'Our frameworks coordinate brand, digital, content, and sales activation into unified growth systems.'
                    },
                    {
                      icon: <BarChart3 className="w-5 h-5" />,
                      title: 'Performance Obsession',
                      text: 'Every initiative is measured, analyzed, and optimized for maximum business impact and ROI.'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="flex-shrink-0 p-2.5 rounded-lg" style={{ backgroundColor: `${colors.brand.secondary}15` }}>
                        <div style={{ color: colors.brand.secondary }}>{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-base font-bold group"
                    style={{ color: colors.brand.secondary }}
                  >
                    <span>Discover Our Story</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Partnership Principles */}
          <ScrollReveal delay={0.2}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-xl lg:text-2xl font-bold mb-2" style={{ color: colors.brand.primary }}>
                  Built for Long-Term Partnership
                </h3>
                <p className="text-sm text-gray-700 max-w-2xl mx-auto">
                  We measure success in sustained value creation, aligned objectives, and mutual trust.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: 'Sustained Growth',
                    description: 'Long-term value creation built on strategic foundations, not quarterly spikes or vanity metrics.',
                    stat: '4.1x',
                    statLabel: 'Average ROI'
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: 'Aligned Objectives',
                    description: 'Every strategy and initiative is directly anchored to your business goals and revenue targets.',
                    stat: '94%',
                    statLabel: 'Client Satisfaction'
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: 'Mutual Trust',
                    description: 'Partnerships founded on transparency, accountability, and consistent execution excellence.',
                    stat: '350+',
                    statLabel: 'Clients Served'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                  >
                    <GlassCard 
                      variant="base" 
                      rounded="xl" 
                      padding="lg" 
                      hover 
                      className="h-full relative overflow-hidden group"
                    >
                      {/* Gradient accent on hover */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: gradients.primary }}
                      ></div>
                      
                      <div className="relative z-10">
                        <GlowEffect color={colors.brand.secondary} intensity={15}>
                          <div 
                            className="inline-flex p-3 rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: `${colors.brand.secondary}10` }}
                          >
                            <div style={{ color: colors.brand.secondary }}>{item.icon}</div>
                          </div>
                        </GlowEffect>
                        
                        <h4 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                          {item.title}
                        </h4>
                        
                        <p className="text-sm text-gray-700 leading-relaxed mb-5">
                          {item.description}
                        </p>

                        {/* Stat Display */}
                        <div className="pt-4 border-t border-gray-300/40">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>
                              {item.stat}
                            </span>
                            <span className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                              {item.statLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom CTA Panel */}
          <ScrollReveal delay={0.4}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto mt-10"
            >
              <GlassCard variant="strong" rounded="2xl" padding="xlarge" className="relative overflow-hidden">
                {/* Decorative Gradient Orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0000aa]/8 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#ffb300]/8 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: `${colors.brand.accent}20` }}>
                    <Sparkles className="w-4 h-4" style={{ color: colors.brand.accent }} />
                    <span className="text-sm font-bold" style={{ color: colors.brand.primary }}>Ready to Elevate Your Marketing?</span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Marketing Becomes Disciplined. Predictable. Scalable.
                  </h3>
                  
                  <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                    Partner with us to transform your marketing from a cost center into a predictable growth engine that drives measurable business results.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <MagneticButton strength={0.3}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        style={{ background: gradients.primary }}
                      >
                        Start a Conversation
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.2}>
                      <Link
                        to="/case-studies"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md"
                        style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                      >
                        View Success Stories
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          5. THE ADVANTEDGE WAY OF THINKING
          ============================================ */}
      <ModernSectionBackground variant="gradient-abstract">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Strategic Framework"
            badgeIcon={<Award className="w-4 h-4" />}
            title="The AdvantEdge Way of Thinking"
            description="Results are determined long before execution begins. Our disciplined framework creates predictable outcomes."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image + Framework Overview */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                      Strategic Excellence Through{' '}
                      <span style={{ color: colors.brand.secondary }}>Disciplined Thinking</span>
                    </h3>
                    <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Our proven framework integrates strategy, positioning, execution, and measurement into one coordinated system. This disciplined approach removes uncertainty and creates predictable, scalable growth.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>4</span>
                        <span className="text-base font-bold text-gray-600">Pillars</span>
                      </div>
                      <p className="text-xs text-gray-600">Core Principles</p>
                    </GlassCard>
                    <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                      <div className="flex items-baseline justify-center gap-1 mb-2">
                        <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>100%</span>
                      </div>
                      <p className="text-xs text-gray-600">Integrated Approach</p>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1640077596554-37bffdb7ce9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBmcmFtZXdvcmslMjBidXNpbmVzcyUyMHBsYW5uaW5nfGVufDF8fHx8MTc3NDU1ODQzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Strategic framework and business planning"
                    className="w-full h-[300px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Four Pillars */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {principles.map((principle, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <GlassCard 
                  variant="base" 
                  rounded="xl" 
                  padding="lg" 
                  hover 
                  className="h-full relative overflow-hidden group"
                >
                  {/* Hover gradient accent */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: gradients.primary }}
                  ></div>
                  
                  <div className="relative z-10">
                    {/* Number badge */}
                    <div className="flex items-start justify-between mb-4">
                      <GlowEffect color={colors.brand.secondary} intensity={15}>
                        <div 
                          className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: `${colors.brand.secondary}10` }}
                        >
                          <div style={{ color: colors.brand.secondary }}>{principle.icon}</div>
                        </div>
                      </GlowEffect>
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ 
                          backgroundColor: `${colors.brand.accent}20`,
                          color: colors.brand.primary
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-base font-bold leading-tight mb-2" style={{ color: colors.brand.primary }}>
                      {principle.title}
                    </h3>
                    
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Bottom CTA */}
          <ScrollReveal delay={0.4}>
            <div className="max-w-4xl mx-auto">
              <GlassCard variant="strong" rounded="xl" padding="xlarge" className="relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0000aa]/8 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-[#ffb300]/8 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <Target className="w-10 h-10 mx-auto mb-3" style={{ color: colors.brand.secondary }} />
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Strong Decisions Create Strong Results
                  </h3>
                  <p className="text-sm text-gray-700 mb-5 max-w-2xl mx-auto leading-relaxed">
                    Our framework eliminates guesswork and creates clarity. Every decision is anchored to business objectives, every action is measured, and every outcome is optimized.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md group"
                    style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                  >
                    <span>Learn Our Philosophy</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          6. BUSINESS OBJECTIVES REMAIN THE NORTH STAR
          ============================================ */}
      <ModernSectionBackground variant="image-overlay-architecture">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="North Star Objectives"
            badgeIcon={<Target className="w-4 h-4" />}
            title="Business Objectives Remain the North Star"
            description="Every engagement, every strategy, and every execution is anchored to measurable business outcomes. Marketing exists to move business forward—nothing else."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image + Objectives Grid */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-12">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1668041107135-5f8cbd1cfc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9iamVjdGl2ZXMlMjB0YXJnZXQlMjBnb2Fsc3xlbnwxfHx8fDE3NzQ1NTg0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Business objectives and strategic goals"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Right: Stats & Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Marketing That Serves{' '}
                    <span style={{ color: colors.brand.secondary }}>Business Priority</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    We don't optimize for clicks, impressions, or vanity metrics. We optimize for revenue impact, pipeline quality, competitive advantage, and market position.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Revenue-Aligned', value: '100%' },
                    { label: 'Data-Driven', value: 'Always' },
                    { label: 'Performance Focus', value: 'ROI-First' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="base" className="flex items-center justify-between">
                        <span className="text-sm font-bold" style={{ color: colors.brand.primary }}>{item.label}</span>
                        <span className="text-base font-bold" style={{ color: colors.brand.secondary }}>{item.value}</span>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Five Objectives Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
            {objectives.map((obj, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <GlassCard 
                  variant="base" 
                  rounded="xl" 
                  padding="lg" 
                  hover 
                  className="h-full relative overflow-hidden group"
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: gradients.primary }}
                  ></div>
                  
                  <div className="relative z-10">
                    <GlowEffect color={colors.brand.secondary} intensity={15}>
                      <div 
                        className="p-3 rounded-xl mb-4 inline-flex transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${colors.brand.secondary}10` }}
                      >
                        <div style={{ color: colors.brand.secondary }}>{obj.icon}</div>
                      </div>
                    </GlowEffect>
                    
                    <h3 className="text-base font-bold leading-tight mb-3" style={{ color: colors.brand.primary }}>
                      {obj.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Bottom CTA */}
          <ScrollReveal delay={0.5}>
            <div className="max-w-4xl mx-auto">
              <GlassCard variant="strong" rounded="xl" padding="xlarge" className="relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0000aa]/8 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-[#ffb300]/8 to-transparent rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <BarChart3 className="w-9 h-9 mx-auto mb-3" style={{ color: colors.brand.secondary }} />
                  <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                    Marketing Exists to Move Business Forward
                  </h3>
                  <p className="text-sm text-gray-700 mb-5 max-w-2xl mx-auto leading-relaxed">
                    Every initiative we design, every channel we activate, every campaign we launch is built to serve a defined business objective. No fluff. No filler. Only measurable impact.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md group"
                      style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                    >
                      <span>View Our Services</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          7. VALUE PROPOSITION: WHY CHOOSE US
          ============================================ */}
      <WhyChooseUsBento />

      {/* ============================================
          8. OUR EXPERTISE (Integrated Marketing, Strategy, Execution Combined)
          ============================================ */}
      <ModernSectionBackground variant="gradient-tech">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Strategic Execution Excellence"
            badgeIcon={<Zap className="w-4 h-4" />}
            title="Where Strategy Becomes Action"
            description="The gap between strategy and execution is where most marketing fails. We eliminate that gap through disciplined integration."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image + Content */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NzQ1NTg3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Executive business strategy meeting"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating stat badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Execution Success Rate</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>97%</span>
                            <span className="text-sm text-gray-600">on-time delivery</span>
                          </div>
                        </div>
                        <Zap className="w-8 h-8" style={{ color: colors.brand.accent }} />
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    From Planning to{' '}
                    <span style={{ color: colors.brand.secondary }}>Performance</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    We bridge strategic intent and tactical execution through disciplined implementation frameworks. Every initiative includes resource allocation, channel orchestration, performance benchmarks, and accountability at every phase.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, title: 'Strategic Clarity', desc: 'Positioning defined before activation' },
                    { icon: Rocket, title: 'Disciplined Execution', desc: 'Systematic implementation frameworks' },
                    { icon: BarChart3, title: 'Continuous Optimization', desc: 'Performance-driven refinement' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="base" hover>
                        <div className="flex items-start gap-4">
                          <div 
                            className="p-2.5 rounded-lg flex-shrink-0"
                            style={{ backgroundColor: `${colors.brand.secondary}10` }}
                          >
                            <item.icon className="w-6 h-6" style={{ color: colors.brand.secondary }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <GlassCard variant="base" rounded="xl" padding="lg" className="max-w-5xl mx-auto text-center mt-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#0000aa]/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#ffb300]/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Zap className="w-10 h-10 mx-auto mb-4" style={{ color: colors.brand.secondary }} />
                </motion.div>
                <p className="text-base font-bold mb-3" style={{ color: colors.brand.primary }}>
                  We operate where strategic intent meets tactical precision.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal className="md:col-span-2">
              <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center">
                      <Target className="w-9 h-9 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                      Strategic Clarity First
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      Positioning. Audience definition. Competitive differentiation. Value architecture. Defined before activation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span>Market positioning & competitive analysis</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span>Audience segmentation & buyer persona development</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span>Value proposition architecture & messaging hierarchy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <div className="space-y-5">
              <ScrollReveal delay={0.1}>
                <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ffb300] to-[#ff8c00] flex items-center justify-center mb-3">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                    Disciplined Implementation
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Execution plans include resource allocation, channel orchestration, and performance benchmarks — with accountability at every phase.
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0000aa] to-[#000131] flex items-center justify-center mb-3">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                    Measurable Outcomes
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Performance benchmarks ensure every initiative moves toward business objectives.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-gray-300/40 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#0000aa]/50 to-transparent"></div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0000aa]/10 to-[#000131]/10 mb-4">
                <Layers className="w-4 h-4" style={{ color: colors.brand.secondary }} />
                <span className="text-sm font-bold uppercase tracking-wide" style={{ color: colors.brand.primary }}>Systems Over Silos</span>
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>Integrated Marketing, Properly Defined</h3>
              <p className="text-sm text-gray-700 max-w-2xl mx-auto">Integration is not coordination. It is structural alignment.</p>
            </div>

          <div className="mt-12 relative">
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0000aa]/30 to-transparent"></div>
            
            <div className="grid md:grid-cols-3 gap-6 relative">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center text-white font-bold text-base shadow-lg z-10">
                    1
                  </div>
                  <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full pt-8">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#000131]/10 to-[#0000aa]/10 flex items-center justify-center">
                        <Target className="w-8 h-8" style={{ color: colors.brand.secondary }} />
                      </div>
                      <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                        Unified Strategy Layer
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm mb-3">
                        One strategic foundation across all initiatives.
                      </p>
                      <div className="pt-3 border-t border-gray-300/40">
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.brand.secondary }}>
                          Foundation
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="md:mt-6">
                <div className="relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#0000aa] to-[#000131] flex items-center justify-center text-white font-bold text-base shadow-lg z-10">
                    2
                  </div>
                  <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full pt-8 border-2" style={{ borderColor: colors.brand.secondary }}>
                    <div className="text-center">
                      <div className="w-14 h-14 mx-auto mb-5 rounded-lg bg-gradient-to-br from-[#0000aa]/10 to-[#000131]/10 flex items-center justify-center">
                        <Layers className="w-8 h-8" style={{ color: colors.brand.secondary }} />
                      </div>
                      <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                        Connected Execution
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        Brand, content, digital, PR, and sales activation reinforce one another.
                      </p>
                      <div className="pt-4 border-t border-gray-300/40">
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.brand.secondary }}>
                          Activation
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#ffb300] to-[#ff8c00] flex items-center justify-center text-white font-bold text-base shadow-lg z-10">
                    3
                  </div>
                  <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full pt-8">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#ffb300]/10 to-[#ff8c00]/10 flex items-center justify-center">
                        <BarChart3 className="w-8 h-8" style={{ color: colors.brand.accent }} />
                      </div>
                      <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                        Centralized Performance Intelligence
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm mb-3">
                        Unified analytics track true contribution, attribution, and ROI.
                      </p>
                      <div className="pt-3 border-t border-gray-300/40">
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.brand.accent }}>
                          Optimization
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 max-w-4xl mx-auto">
              <GlassCard variant="base" rounded="xl" padding="lg" className="text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0000aa]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ffb300]/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <Sparkles className="w-9 h-9 mx-auto mb-4" style={{ color: colors.brand.accent }} />
                  <p className="text-base font-bold mb-3" style={{ color: colors.brand.primary }}>
                    When marketing operates as a system, results compound.
                  </p>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
          </div>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          9. CORE CAPABILITIES, UNIFIED BY STRATEGY
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="base" animate background="transparent">
        <Container size="lg">
          <SectionHeader
            badge="Core Capabilities, Unified by Strategy"
            badgeIcon={<Layers className="w-4 h-4" />}
            title="Everything Required to Build, Activate, and Scale Marketing"
            description="Integrated marketing is not a collection of tactics. It is an architecture."
            align="center"
            maxWidth="2xl"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-8 mb-10">
            <ScrollReveal>
              <ImageFeatureCard
                title="Digital Marketing Excellence"
                description="Performance-driven campaigns engineered for pipeline quality and measurable ROI."
                imageUrl="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ1NDI3MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                icon={MonitorSmartphone}
                link="/services/digital-marketing"
                linkText="Learn More"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <ImageFeatureCard
                title="Brand Development"
                description="Strategic positioning and identity systems that create competitive advantage."
                imageUrl="https://images.unsplash.com/photo-1764740109279-c7a8abd78821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDQ2Mjk0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Eye}
                link="/services/brand-development"
                linkText="Explore Services"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <ImageFeatureCard
                title="Website Strategy"
                description="High-performance digital infrastructure built for credibility and conversion."
                imageUrl="https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzQ0MzcwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Rocket}
                link="/services"
                linkText="View Details"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                We align positioning, messaging, digital infrastructure, demand generation, brand systems, and performance measurement into one coordinated framework.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-6">
            <ExpandableServiceCards services={capabilities} />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-6 text-center">
              <GlassCard variant="base" rounded="lg" padding="base" className="max-w-3xl mx-auto">
                <p className="text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                  We do not deploy disconnected activities.
                </p>
                <p className="text-base font-bold" style={{ color: colors.brand.secondary }}>
                  We build coordinated systems.
                </p>
              </GlassCard>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-6">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm bg-transparent border-2 transition-all duration-300 hover:shadow-lg group"
                style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
              >
                Explore All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          10. CAPABILITIES CAROUSEL
          ============================================ */}
      <CapabilitiesCarousel />

      {/* ============================================
          11. DIGITAL EXECUTION WITH ACCOUNTABILITY
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Performance-Driven Digital"
            badgeIcon={<MonitorSmartphone className="w-4 h-4" />}
            title="Digital Execution with Accountability"
            description="Every digital channel must deliver measurable contribution to pipeline quality and revenue growth."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image Section */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYW5hbHl0aWNzJTIwcGVyZm9ybWFuY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc0NTU5MTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Digital analytics performance dashboard"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating metrics badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Avg. ROAS</p>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>5.8</span>
                            <span className="text-xs text-gray-600">:1</span>
                          </div>
                        </div>
                        <div className="border-x border-gray-300/40">
                          <p className="text-xs font-bold text-gray-700 mb-1">Channel Mix</p>
                          <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>8+</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Attribution</p>
                          <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>Full</span>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>

              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Transparent, Controlled,{' '}
                    <span style={{ color: colors.brand.secondary }}>Accountable</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    We engineer technical SEO, multi-platform acquisition (Google, LinkedIn, Meta), conversion optimization, marketing automation, and attribution modeling. Every channel has defined objectives. Every action supports pipeline quality.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'SEO Authority', value: 'Technical' },
                    { label: 'Paid Media', value: 'Multi-Platform' },
                    { label: 'Automation', value: 'Full-Stack' },
                    { label: 'Analytics', value: 'Real-Time' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="sm" hover>
                        <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-base font-bold" style={{ color: colors.brand.primary }}>
                          {stat.value}
                        </p>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-8 mb-10">
          </div>

          <ScrollReveal>
            <GlassCard variant="base" rounded="lg" padding="none" className="mt-10 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 bg-gradient-to-br from-[#0000aa]/5 to-transparent">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center flex-shrink-0">
                      <Search className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-base font-bold" style={{ color: colors.brand.primary }}>
                      We Engineer
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Technical SEO and authority growth</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Multi-platform acquisition (Google, LinkedIn, Meta)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Conversion rate optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Marketing automation and lead scoring</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5" style={{ color: colors.brand.secondary }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: colors.brand.primary }}>Attribution modeling and ROI analysis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-10 bg-gradient-to-bl from-[#ffb300]/5 to-transparent border-l border-gray-300/40 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-10 h-10 mx-auto mb-3" style={{ color: colors.brand.secondary }} />
                    <p className="text-sm font-bold mb-2 leading-tight" style={{ color: colors.brand.primary }}>
                      Every channel has defined objectives.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Every action supports pipeline quality and revenue growth.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-300/40">
                      <p className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                        Digital becomes transparent. Controlled. Accountable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal delay={0.1}>
              <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                <MonitorSmartphone className="w-7 h-7 mx-auto mb-2" style={{ color: colors.brand.secondary }} />
                <p className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>100%</p>
                <p className="text-sm text-gray-600">Channel Accountability</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <GlassCard variant="base" rounded="lg" padding="base" className="text-center border-2" style={{ borderColor: colors.brand.secondary }}>
                <LineChart className="w-7 h-7 mx-auto mb-2" style={{ color: colors.brand.accent }} />
                <p className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>Real-Time</p>
                <p className="text-sm text-gray-600">Performance Tracking</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                <TrendingUp className="w-7 h-7 mx-auto mb-2" style={{ color: colors.brand.secondary }} />
                <p className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>Continuous</p>
                <p className="text-sm text-gray-600">Optimization Cycles</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          12. BRAND PRESENCE THAT CREATES RECALL
          ============================================ */}
      <ModernSectionBackground variant="glass-blur">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Strategic Brand Building"
            badgeIcon={<Eye className="w-4 h-4" />}
            title="Brand Presence That Creates Recall"
            description="Brand is leverage. Strategic positioning, visual identity, and consistent presence compound recognition into revenue-generating advantage."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image Section */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1764383381195-5daa5902c3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc3NDU1OTE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Corporate brand identity design"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating brand stat */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Brand Recall Increase</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>340%</span>
                            <span className="text-sm text-gray-600">avg. lift</span>
                          </div>
                        </div>
                        <Eye className="w-8 h-8" style={{ color: colors.brand.accent }} />
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right: Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Recognition Becomes{' '}
                    <span style={{ color: colors.brand.secondary }}>Revenue Advantage</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    We develop strategic positioning, visual identity systems, brand architecture, messaging frameworks, and market presence that transform recognition into competitive advantage. Brand creates preference before the conversation begins.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, title: 'Strategic Positioning', desc: 'Market differentiation & value definition' },
                    { icon: Palette, title: 'Identity Systems', desc: 'Cohesive visual & verbal language' },
                    { icon: TrendingUp, title: 'Market Presence', desc: 'Consistent multi-channel visibility' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="base" hover>
                        <div className="flex items-start gap-4">
                          <div 
                            className="p-2.5 rounded-lg flex-shrink-0"
                            style={{ backgroundColor: `${colors.brand.accent}10` }}
                          >
                            <item.icon className="w-6 h-6" style={{ color: colors.brand.accent }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <ScrollReveal className="md:col-span-2 md:row-span-2">
              <GlassCard variant="base" rounded="lg" padding="lg" hover className="h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#0000aa]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm font-bold mb-3" style={{ color: colors.brand.primary }}>
                    When positioning, messaging, and identity align across all touchpoints, organizations command attention and earn trust.
                  </p>
                  <div className="space-y-3 text-sm">
                    <p className="font-bold" style={{ color: colors.brand.secondary }}>We build:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span className="text-gray-700">Strategic market positioning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span className="text-gray-700">Messaging systems with narrative consistency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.brand.secondary }} />
                        <span className="text-gray-700">Visual identity frameworks with governance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-300/40">
                    <Award className="w-6 h-6" style={{ color: colors.brand.accent }} />
                    <p className="text-sm font-semibold" style={{ color: colors.brand.secondary }}>
                      Strong brands compete on clarity, not noise.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="md:col-span-2">
              <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0000aa]/10 to-[#000131]/10 flex items-center justify-center">
                    <Target className="w-6 h-6" style={{ color: colors.brand.secondary }} />
                  </div>
                  <h3 className="text-base font-bold" style={{ color: colors.brand.primary }}>
                    Positioning Strategy
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Distinct market position rooted in competitive differentiation and authentic value propositions.
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center">
                <Megaphone className="w-8 h-8 mx-auto mb-2" style={{ color: colors.brand.secondary }} />
                <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                  Messaging Architecture
                </h3>
                <p className="text-xs text-gray-600">
                  Unified voice across all touchpoints
                </p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <GlassCard variant="base" rounded="lg" padding="sm" hover className="h-full text-center bg-gradient-to-br from-[#ffb300]/5 to-transparent">
                <PenTool className="w-8 h-8 mx-auto mb-2" style={{ color: colors.brand.accent }} />
                <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                  Visual Identity
                </h3>
                <p className="text-xs text-gray-600">
                  Cohesive design systems
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <ScrollReveal delay={0.4}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#000131]/10 to-[#0000aa]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>01</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Brand Guidelines</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0000aa]/10 to-[#000131]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>02</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Voice & Tone</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#ffb300]/10 to-[#ff8c00]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.accent }}>03</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Asset Management</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.7}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#000131]/10 to-[#0000aa]/10 flex items-center justify-center">
                  <span className="text-xl font-bold" style={{ color: colors.brand.secondary }}>04</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Brand Governance</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          13. A DISCIPLINED OPERATING MODEL
          ============================================ */}
      <ModernSectionBackground variant="animated-dots">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Proven Methodology"
            badgeIcon={<RefreshCw className="w-4 h-4" />}
            title="A Disciplined Operating Model"
            description="Sustainable growth requires structure. Our operating model delivers strategic clarity, execution discipline, and measurable outcomes."
            align="center"
            maxWidth="3xl"
          />

          {/* Hero Image Section */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto mb-16">
              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1758518729706-b1810dd39cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBidXNpbmVzcyUyMHBsYW5uaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDU1OTE1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Strategic business planning professional"
                    className="w-full h-[280px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating process badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <GlassCard variant="strong" rounded="xl" padding="base" className="backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-gray-700 mb-1">Operating Framework</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold" style={{ color: colors.brand.secondary }}>4-Phase</span>
                            <span className="text-sm text-gray-600">repeatable model</span>
                          </div>
                        </div>
                        <RefreshCw className="w-8 h-8" style={{ color: colors.brand.accent }} />
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>

              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 space-y-6"
              >
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: colors.brand.primary }}>
                    Structure Produces{' '}
                    <span style={{ color: colors.brand.secondary }}>Sustainable Results</span>
                  </h3>
                  <div className="h-1 w-16 rounded-full mb-4" style={{ background: gradients.primary }}></div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    Our repeatable four-phase methodology integrates strategic planning, disciplined execution, performance measurement, and systematic optimization. Every engagement follows this proven framework to ensure accountability and results.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Target, title: 'Strategic Foundation', desc: 'Discovery, positioning, planning' },
                    { icon: Rocket, title: 'Tactical Execution', desc: 'Coordinated implementation & launch' },
                    { icon: BarChart3, title: 'Performance Measurement', desc: 'Analytics, reporting, attribution' },
                    { icon: RefreshCw, title: 'Continuous Optimization', desc: 'Testing, refinement, scaling' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <GlassCard variant="base" rounded="lg" padding="base" hover>
                        <div className="flex items-start gap-4">
                          <div 
                            className="p-2.5 rounded-lg flex-shrink-0"
                            style={{ backgroundColor: `${colors.brand.secondary}10` }}
                          >
                            <item.icon className="w-6 h-6" style={{ color: colors.brand.secondary }} />
                          </div>
                          <div>
                            <h4 className="text-base font-bold mb-1" style={{ color: colors.brand.primary }}>
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="mt-12 relative">
            <div className="hidden lg:block absolute top-28 left-0 right-0 h-2 bg-gradient-to-r from-[#000131] via-[#0000aa] via-[#ffb300] to-[#000131] opacity-20 rounded-full"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
              {processSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative">
                    <div className="relative mb-5">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center shadow-2xl relative z-10">
                        <span className="text-white font-bold text-base">{step.number}</span>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-[#0000aa] to-transparent"></div>
                      )}
                    </div>

                    <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#0000aa]/10 to-[#000131]/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-base font-bold mb-2 leading-tight" style={{ color: colors.brand.primary }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm mb-3">
                        {step.description}
                      </p>
                      
                      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0000aa]/10 to-[#000131]/10">
                        <span className="text-xs font-bold tracking-wide uppercase" style={{ color: colors.brand.secondary }}>
                          Phase {step.number}
                        </span>
                      </div>
                    </GlassCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 max-w-5xl mx-auto">
              <GlassCard variant="base" rounded="lg" padding="lg" className="text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#0000aa]/5 via-[#ffb300]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <RefreshCw className="w-9 h-9 mx-auto mb-3 text-[#0000aa]" />
                  <p className="text-sm font-bold mb-2" style={{ color: colors.brand.primary }}>
                    Process creates predictability.
                  </p>
                  <p className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                    Discipline creates momentum.
                  </p>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          14. PROCESS FRAMEWORK
          ============================================ */}
      <ProcessFrameworkBento />

      {/* ============================================
          15. STATS CAROUSEL
          ============================================ */}
      <StatsCarousel />

      {/* ============================================
          16. PROOF THROUGH PERFORMANCE
          ============================================ */}
      <ModernSectionBackground variant="grid-pattern">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Validated Results"
            badgeIcon={<TrendingUp className="w-4 h-4" />}
            title="Proof Through Performance"
            description="Credibility is not claimed. It is demonstrated."
            align="center"
            maxWidth="2xl"
          />

          <ScrollReveal>
            <GlassCard variant="base" rounded="lg" padding="none" className="mt-10 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-7 lg:p-9 bg-gradient-to-br from-[#000131] to-[#0000aa] text-white relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-90">Average Client Results</p>
                    <div className="flex items-baseline gap-2 mb-3">
                      <AnimatedCounter end={4.1} decimals={1} duration={2.5} className="text-4xl lg:text-5xl font-bold" />
                      <span className="text-2xl font-bold opacity-90">x</span>
                    </div>
                    <h3 className="text-base font-bold mb-2 leading-tight">
                      Average ROI
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Measured performance across 350+ client engagements
                    </p>
                  </div>
                </div>

                <div className="p-7 lg:p-9 bg-gradient-to-bl from-white to-gray-50/50 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0000aa] to-[#000131] flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold mb-1" style={{ color: colors.brand.secondary }}>385%</p>
                      <p className="text-sm font-bold" style={{ color: colors.brand.primary }}>Brand Visibility Growth</p>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ffb300] to-[#ff8c00] flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold mb-1" style={{ color: colors.brand.accent }}>310%</p>
                      <p className="text-sm font-bold" style={{ color: colors.brand.primary }}>Lead Generation Improvement</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <ScrollReveal delay={0.1}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <p className="text-xl font-bold mb-1" style={{ color: colors.brand.secondary }}>92%</p>
                <p className="text-sm font-semibold mb-1" style={{ color: colors.brand.primary }}>Client Retention</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <p className="text-xl font-bold mb-1" style={{ color: colors.brand.secondary }}>350+</p>
                <p className="text-sm font-semibold mb-1" style={{ color: colors.brand.primary }}>Clients Served</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <p className="text-xl font-bold mb-1" style={{ color: colors.brand.secondary }}>245%</p>
                <p className="text-sm font-semibold mb-1" style={{ color: colors.brand.primary }}>Revenue Impact</p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <GlassCard variant="base" rounded="lg" padding="base" hover className="text-center">
                <p className="text-xl font-bold mb-1" style={{ color: colors.brand.secondary }}>220%</p>
                <p className="text-sm font-semibold mb-1" style={{ color: colors.brand.primary }}>Market Share Expansion</p>
              </GlassCard>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-10 max-w-4xl mx-auto text-center">
              <GlassCard variant="base" rounded="lg" padding="base">
                <Award className="w-8 h-8 mx-auto mb-3" style={{ color: colors.brand.accent }} />
                <p className="text-base font-bold mb-3" style={{ color: colors.brand.primary }}>
                  Performance validates capability. Results sustain partnerships.
                </p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm bg-transparent border-2 transition-all duration-300 hover:shadow-lg group"
                  style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                >
                  View Detailed Case Studies
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            </div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          17. TESTIMONIALS (Single Combined Section)
          ============================================ */}
      <div className="flex flex-col">
        <TestimonialsCarousel />
        <TestimonialsWithImages />
        <VideoTestimonial />
      </div>

      {/* ============================================
          18. INDUSTRIES WE SERVE
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-purple">
        <Section spacing="base" animate background="transparent">
        <Container size="xl">
          <SectionHeader
            badge="Industry-Specific Expertise"
            badgeIcon={<Building2 className="w-4 h-4" />}
            title="Industries We Serve"
            description="We bring sector-specific expertise to every engagement."
            align="center"
            maxWidth="2xl"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-10">
            <ScrollReveal>
              <ImageFeatureCard
                title="Healthcare & Life Sciences"
                description="Medical devices, pharmaceuticals, biotech, and digital health solutions."
                imageUrl="https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3klMjBtb2Rlcm58ZW58MXx8fHwxNzc0NTQyNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Hospital}
                link="/industries"
                linkText="Healthcare Solutions"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <ImageFeatureCard
                title="Professional Services"
                description="Consulting, legal, accounting, financial advisory, and specialized services."
                imageUrl="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMGNvbnN1bHRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzc0NTQyNzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Briefcase}
                link="/industries"
                linkText="Professional Services"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <ImageFeatureCard
                title="Retail & E-Commerce"
                description="Consumer brands, D2C businesses, omnichannel retail, and marketplaces."
                imageUrl="https://images.unsplash.com/photo-1605513524006-063ed6ed31e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wcGluZyUyMGVjb21tZXJjZSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3NDU0MjczMXww&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Store}
                link="/industries"
                linkText="Retail Solutions"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <ImageFeatureCard
                title="Manufacturing & Industrial"
                description="Advanced manufacturing, industrial equipment, and supply chain solutions."
                imageUrl="https://images.unsplash.com/photo-1764114235891-66ff86abaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyeSUyMG1hbnVmYWN0dXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDU0MjcyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                icon={Factory}
                link="/industries"
                linkText="Industrial Marketing"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <GlassCard variant="base" rounded="lg" padding="lg" className="mt-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0000aa]/5 to-transparent rounded-full blur-3xl"></div>
              <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0000aa]/10 to-[#000131]/10 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: colors.brand.secondary }}>
                      Featured Sector
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#000131] to-[#0000aa] flex items-center justify-center mb-3">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                    B2B Technology & SaaS
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    Enterprise software, cloud platforms, cybersecurity, AI/ML solutions, developer tools, and emerging technology companies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Enterprise SaaS', 'Cloud Platforms', 'Cybersecurity', 'AI/ML', 'DevTools'].map((tag, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/60 text-xs font-semibold" style={{ color: colors.brand.primary }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                    <p className="text-xl font-bold mb-1" style={{ color: colors.brand.secondary }}>85+</p>
                    <p className="text-xs text-gray-600">Tech Clients</p>
                  </GlassCard>
                  <GlassCard variant="base" rounded="lg" padding="base" className="text-center">
                    <p className="text-xl font-bold mb-1" style={{ color: colors.brand.secondary }}>420%</p>
                    <p className="text-xs text-gray-600">Avg. Growth</p>
                  </GlassCard>
                  <GlassCard variant="base" rounded="lg" padding="base" className="text-center col-span-2">
                    <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>Specialized Expertise</p>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.slice(1).map((industry, index) => (
              <ScrollReveal key={index} delay={index * 0.1} className={index === 0 ? 'md:col-span-2' : ''}>
                <GlassCard variant="base" rounded="lg" padding="base" hover className="h-full group">
                  <div className="group-hover:scale-110 transition-transform duration-300 mb-4" style={{ color: colors.brand.secondary }}>
                    {industry.icon}
                  </div>
                  <h3 className="text-base font-bold leading-tight mb-2" style={{ color: colors.brand.primary }}>
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs">
                    {industry.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="mt-12 max-w-5xl mx-auto">
              <GlassCard variant="base" rounded="lg" padding="lg" className="relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-[#ffb300]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center">
                  <Lightbulb className="w-8 h-8 mx-auto mb-3" style={{ color: colors.brand.accent }} />
                  <p className="text-base font-bold mb-2" style={{ color: colors.brand.primary }}>
                    Understanding market nuance enables strategic precision.
                  </p>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          19. TEAM SECTION & IMAGE GALLERY
          ============================================ */}
      <TeamSection />
      <ImageGallery />

      {/* ============================================
          20. BLOG PREVIEW
          ============================================ */}
      <BlogPreview />

      {/* ============================================
          21. FAQ SECTION
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="compact" animate background="transparent">
        <Container size="md">
          <SectionHeader
            badge="Questions & Answers"
            badgeIcon={<Heart className="w-4 h-4" />}
            title="Frequently Asked Questions"
            description="Everything you need to know about partnering with AdvantEdge for strategic marketing excellence."
            align="center"
            maxWidth="md"
          />

          <ScrollReveal>
            <Accordion items={faqItems} />
          </ScrollReveal>
        </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          22. NEWSLETTER SIGNUP AND FINAL CALL TO ACTION
          ============================================ */}
      <NewsletterSignup />

      <ModernSectionBackground variant="gradient-tech">
        <Section spacing="compact" animate background="transparent">
        <Container size="md">
          <GlassCard variant="base" rounded="lg" padding="base" className="shadow-xl">
            <div className="text-center relative z-10">
              <ScrollReveal>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <GlowEffect color={colors.brand.accent} intensity={20}>
                    <div className="inline-block mb-5">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Rocket className="w-9 h-9 mx-auto" style={{ color: colors.brand.secondary }} />
                      </motion.div>
                    </div>
                  </GlowEffect>

                  <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold mb-3 leading-tight" style={{ color: colors.brand.primary }}>
                    Ready to Move Forward with Confidence?
                  </h2>

                  <div className="space-y-2 mb-6 max-w-2xl mx-auto">
                    <p className="text-base font-bold" style={{ color: colors.brand.secondary }}>
                      Clear direction. Disciplined execution. Measurable growth.
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Let's build a marketing system that delivers both immediate performance and long-term advantage.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <MagneticButton strength={0.3}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 group"
                        style={{ background: gradients.primary }}
                      >
                        Start Strategy Conversation
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>

                    <MagneticButton strength={0.2}>
                      <Link
                        to="/services"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all duration-300 hover:shadow-lg bg-transparent"
                        style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                      >
                        Explore Services
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </MagneticButton>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </GlassCard>
        </Container>
        </Section>
      </ModernSectionBackground>
    </PageBackground>
  );
}

export default HomePage;

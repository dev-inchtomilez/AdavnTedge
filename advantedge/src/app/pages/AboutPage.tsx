/**
 * ============================================
 * ABOUT US PAGE - Complete Premium Rebuild
 * ============================================
 * Industry-leading About page with comprehensive
 * images, premium design, and executive standards
 * ============================================
 */

import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target, 
  Eye,
  Heart,
  Shield,
  TrendingUp,
  Users,
  Award,
  Globe,
  MapPin,
  Lightbulb,
  Zap,
  CheckCircle2,
  Building2,
  Rocket,
  BarChart3,
  Briefcase,
  Star,
  Sparkles
} from 'lucide-react';

// Primitive Components
import { Section, Container, SectionHeader, GlassCard, IconBadge } from '../components/primitives';

// Layout Components
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';

// UI Components
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../components/ScrollReveal';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';
import { ModernSectionBackground } from '../components/ModernSectionBackground';
import { OptimizedImage } from '../components/OptimizedImage';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { HoverCard3D } from '../components/HoverCard3D';
import { GlowEffect } from '../components/GlowEffect';
import { TextGradient } from '../components/TextGradient';

// Design Tokens
import { colors, gradients } from '../../styles/design-tokens';

// ============================================
// DATA DEFINITIONS
// ============================================

const stats = [
  { number: 15, suffix: '+', label: 'Years of Excellence' },
  { number: 500, suffix: '+', label: 'Clients Served' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
  { number: 50, suffix: '+', label: 'Team Members' },
];

const coreValues = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Integrity First',
    description: 'We build trust through honest, transparent communication and ethical business practices in every interaction.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategic Excellence',
    description: 'We deliver exceptional results through rigorous analysis, strategic thinking, and data-driven decision making.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, deeply invested in your success and long-term business growth.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Continuous Innovation',
    description: 'We stay ahead of industry trends and constantly evolve our strategies to maintain competitive advantage.',
  },
];

const milestones = [
  {
    year: '2010',
    title: 'Founded in New York',
    description: 'AdvantEdge established with a vision to transform marketing through strategic excellence.',
  },
  {
    year: '2014',
    title: 'Global Expansion',
    description: 'Opened offices in London and Sydney, serving clients across three continents.',
  },
  {
    year: '2018',
    title: 'Industry Recognition',
    description: 'Named Top Marketing Agency by Forbes and won multiple industry awards.',
  },
  {
    year: '2023',
    title: '500+ Clients Served',
    description: 'Reached milestone of serving over 500 enterprise clients with 98% satisfaction rate.',
  },
];

const leadership = [
  {
    name: 'Sarah Mitchell',
    role: 'Chief Executive Officer',
    bio: '20+ years leading strategic marketing initiatives for Fortune 500 companies.',
  },
  {
    name: 'David Chen',
    role: 'Chief Strategy Officer',
    bio: 'Former McKinsey consultant specializing in growth strategy and market positioning.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Chief Creative Officer',
    bio: 'Award-winning creative director with experience at top global advertising agencies.',
  },
];

const locations = [
  {
    city: 'New York',
    country: 'United States',
    address: '123 Park Avenue, Suite 4500, New York, NY 10017',
    phone: '+1 (212) 555-0100',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '45 Grosvenor Street, Mayfair, London W1K 3HN',
    phone: '+44 20 7123 4567',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    address: '88 Cumberland Street, The Rocks, Sydney NSW 2000',
    phone: '+61 2 9876 5432',
  },
];

const awards = [
  {
    year: '2023',
    title: 'Best Marketing Agency',
    organization: 'Forbes Business Awards',
  },
  {
    year: '2022',
    title: 'Excellence in Strategy',
    organization: 'Marketing Excellence Awards',
  },
  {
    year: '2021',
    title: 'Top Workplace',
    organization: 'Great Place to Work',
  },
  {
    year: '2020',
    title: 'Innovation Leader',
    organization: 'Digital Marketing Summit',
  },
];

export function AboutPage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        ogImage={PAGE_SEO.about.ogImage}
        path="/about"
      />

      {/* ============================================
          1. HERO SECTION - PREMIUM TWO-COLUMN
          ============================================ */}
      <ModernSectionBackground variant="mesh-gradient-blue">
        <Section spacing="base" animate background="transparent">
          <Container size="xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4"
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
                      <span className="text-xs font-bold tracking-wide" style={{ color: colors.brand.primary }}>About AdvantEdge</span>
                    </motion.span>
                  </GlowEffect>
                </motion.div>

                <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight mb-4" style={{ color: colors.brand.primary }}>
                  Transforming Businesses Through{' '}
                  <span className="relative inline-block">
                    <TextGradient animated className="relative z-10 text-2xl sm:text-3xl lg:text-3xl font-bold">
                      Strategic Excellence
                    </TextGradient>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-2 -z-0"
                      style={{ backgroundColor: colors.brand.accent, opacity: 0.3 }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    />
                  </span>
                </h1>

                <div className="space-y-3 mb-4">
                  <p className="text-sm font-semibold leading-snug" style={{ color: colors.brand.primary }}>
                    15+ years of strategic marketing leadership.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We partner with industry leaders to deliver integrated marketing solutions that drive measurable business growth through strategic insight and operational excellence.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <MagneticButton strength={0.3}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                      style={{ background: gradients.primary }}
                    >
                      Partner With Us
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <Link
                      to="/case-studies"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:bg-white/70 bg-white/50 backdrop-blur-md"
                      style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
                    >
                      View Our Work
                    </Link>
                  </MagneticButton>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-300/50">
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-baseline gap-0.5">
                      <AnimatedCounter end={15} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                      <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>+</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-1">Years</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-baseline gap-0.5">
                      <AnimatedCounter end={500} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                      <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>+</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-1">Clients</p>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <div className="flex items-baseline gap-0.5">
                      <AnimatedCounter end={98} duration={2} className="text-xl font-bold" style={{ color: colors.brand.primary }} />
                      <span className="text-lg font-bold" style={{ color: colors.brand.accent }}>%</span>
                    </div>
                    <p className="text-xs text-gray-600 font-medium mt-1">Satisfaction</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div
                className="relative flex items-center justify-center w-full order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3NDU2MDg5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AdvantEdge executive team in boardroom meeting"
                    className="w-full h-[280px] lg:h-[360px] object-cover"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
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
                        <div className="p-2.5 rounded-xl" style={{ background: gradients.primary }}>
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-bold" style={{ color: colors.brand.primary }}>500+</span>
                          </div>
                          <p className="text-xs text-gray-600 font-medium mt-0.5">Clients Served</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>
      </ModernSectionBackground>

      {/* ============================================
          2. STATS - ANIMATED COUNTERS
          ============================================ */}
      <ModernSectionBackground variant="glass-white">
        <Section spacing="compact" animate background="transparent">
          <Container size="lg">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <GlassCard variant="base" rounded="xl" padding="md" hover className="text-center h-full">
                    <div className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: colors.brand.primary }}>
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 font-semibold">
                      {stat.label}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </ModernSectionBackground>







{/* ============================================
    3. OUR STORY — REFINED COMPANY NARRATIVE
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative overflow-hidden"
  >
    {/* ============================================
        SUBTLE SECTION BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-white"
    >
      {/* Soft blue atmosphere */}
      <div
        className="absolute -left-56 top-10 h-[460px] w-[460px] rounded-full opacity-[0.06] blur-[150px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      {/* Soft yellow atmosphere */}
      <div
        className="absolute -right-52 bottom-[-130px] h-[430px] w-[430px] rounded-full opacity-[0.10] blur-[145px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.90)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          {/* ============================================
              STORY CONTENT
          ============================================ */}
          <ScrollReveal>
            <div className="max-w-2xl">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}0D`,
                  color: colors.brand.primary,
                }}
              >
                <Rocket
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Our Story
                </span>
              </div>

              {/* Heading */}
              <h2
                className="mt-5 text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Built on Strategic Excellence.
                <span className="mt-1 block text-gray-500">
                  Designed for Business Impact.
                </span>
              </h2>

              {/* Intro */}
              <p className="mt-5 text-sm leading-[1.8] text-gray-600 sm:text-base">
                AdvantEdge was founded in 2010 with a clear belief: marketing
                should be treated as a strategic business function—not a series
                of disconnected campaigns.
              </p>

              {/* Refined story copy */}
              <div className="mt-5 space-y-4 text-sm leading-[1.8] text-gray-600">
                <p>
                  With experience spanning management consulting, global
                  brands, and business leadership, our founders saw an
                  opportunity to bring greater strategic rigor, integration,
                  and accountability to marketing.
                </p>

                <p>
                  Since then, AdvantEdge has grown into a full-service marketing
                  partner supporting established enterprises and ambitious
                  growth-focused organizations across multiple markets.
                </p>

                <p>
                  Today, we combine consultancy-level thinking with
                  agency-level execution—connecting brand, marketing,
                  technology, sales, and data around measurable commercial
                  outcomes.
                </p>
              </div>

              {/* ============================================
                  COMPANY JOURNEY STRIP
              ============================================ */}
              <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white/75 shadow-[0_18px_55px_rgba(0,1,49,0.08)] backdrop-blur-xl">
                <div className="grid sm:grid-cols-3">
                  {[
                    {
                      number: "2010",
                      title: "Founded",
                      text: "Built to bring strategic discipline to marketing.",
                    },
                    {
                      number: "3",
                      title: "Continents",
                      text: "Supporting businesses across global markets.",
                    },
                    {
                      number: "1",
                      title: "Integrated Model",
                      text: "Strategy and execution working together.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={[
                        "px-4 py-4",
                        index < 2
                          ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                          : "",
                      ].join(" ")}
                    >
                      <p
                        className="text-xl font-black tracking-[-0.035em]"
                        style={{ color: colors.brand.secondary }}
                      >
                        {item.number}
                      </p>

                      <p
                        className="mt-1 text-xs font-bold"
                        style={{ color: colors.brand.primary }}
                      >
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-[1.55] text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(0,0,170,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(0,0,170,0.26)]"
                  style={{ background: gradients.primary }}
                >
                  Explore Our Services

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="group inline-flex items-center text-sm font-bold transition-colors duration-300"
                  style={{ color: colors.brand.primary }}
                >
                  More About AdvantEdge

                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: colors.brand.accent }}
                  />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              VISUAL STORY PANEL
          ============================================ */}
          <ScrollReveal delay={0.16}>
            <div className="relative">
              {/* Background decorative frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[30px] opacity-[0.12] blur-2xl"
                style={{ background: gradients.primary }}
              />

              {/* Main image */}
              <div className="group relative min-h-[430px] overflow-hidden rounded-[26px] border border-white/70 bg-gray-100 shadow-[0_30px_90px_rgba(0,1,49,0.18)] sm:min-h-[500px]">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=92"
                  alt="AdvantEdge leadership and strategy team working together"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.025]"
                />

                {/* Light image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/90 via-[#000131]/15 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/25 via-transparent to-transparent" />

                {/* Top label */}
                <div className="absolute left-5 top-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: colors.brand.accent }}
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                      Strategy in Action
                    </span>
                  </div>
                </div>

                {/* Main image caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    The AdvantEdge Model
                  </p>

                  <h3 className="mt-2 max-w-xl text-xl font-bold leading-[1.25] text-white sm:text-2xl">
                    Consultancy-Level Thinking. Agency-Level Execution.
                  </h3>

                  <p className="mt-3 max-w-xl text-xs leading-[1.7] text-white/70 sm:text-sm">
                    A connected team of strategists, marketers, creatives,
                    technologists, and growth specialists working toward one
                    shared business objective.
                  </p>
                </div>
              </div>

              {/* ============================================
                  FLOATING PRINCIPLE CARD
              ============================================ */}
              <div className="relative -mt-8 mx-4 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-[0_22px_60px_rgba(0,1,49,0.16)] backdrop-blur-xl sm:mx-8 sm:p-5 lg:ml-10 lg:mr-[-20px]">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${colors.brand.secondary}0D`,
                      color: colors.brand.secondary,
                    }}
                  >
                    <Rocket className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Our Founding Principle
                    </p>

                    <p
                      className="mt-1 text-sm font-bold leading-relaxed"
                      style={{ color: colors.brand.primary }}
                    >
                      Marketing should create measurable business value—not
                      simply more activity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ============================================
            BOTTOM POSITIONING STATEMENT
        ============================================ */}
        <ScrollReveal delay={0.24}>
          <div
            className="mt-10 overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center gap-5 px-5 py-5 sm:px-7 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Strategy Connected to Execution
                </p>

                <p className="mt-1 max-w-3xl text-sm font-bold leading-relaxed text-white sm:text-base">
                  We help organizations move from fragmented marketing activity
                  to one coordinated system built around positioning,
                  performance, and sustainable growth.
                </p>
              </div>

              <Link
                to="/about"
                className="group inline-flex shrink-0 items-center text-sm font-bold text-white"
              >
                Discover Our Journey

                <ArrowRight
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>







{/* ============================================
    4. MISSION & VISION — FULL-WIDTH VIDEO SECTION
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative isolate flex min-h-[780px] items-center overflow-hidden lg:min-h-screen"
  >
    {/* ============================================
        FULL-SCREEN VIDEO BACKGROUND
    ============================================ */}
    <div className="absolute inset-0 -z-20 overflow-hidden bg-[#090a12]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90"
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source
          src="/videos/mission-vision.mp4"
          type="video/mp4"
        />
      </video>

      {/* Neutral dark treatment—video remains visible */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Directional readability overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-[#080912]/85" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#080912]/65 via-transparent to-[#080912]/45" />

      {/* Soft cinematic lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.16),transparent_42%)]" />

      {/* Minimal brand atmosphere */}
      <div
        className="absolute -left-52 top-[15%] h-[500px] w-[500px] rounded-full opacity-[0.08] blur-[160px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-52 bottom-[-100px] h-[470px] w-[470px] rounded-full opacity-[0.09] blur-[155px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.40)_100%)]" />
    </div>

    {/* ============================================
        DECORATIVE SECTION NUMBER
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-4 top-10 hidden text-[150px] font-black leading-none text-white/[0.035] lg:block xl:right-10 xl:text-[210px]"
    >
      04
    </div>

    <Container size="xl">
      <div className="relative z-10 mx-auto w-full max-w-7xl py-8 lg:py-14">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.20)] backdrop-blur-xl"
              style={{ color: colors.brand.accent }}
            >
              <Target className="h-3.5 w-3.5" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Our Purpose
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-[52px]">
              Purpose That Guides Us.
              <span className="mt-1 block text-white/70">
                Ambition That Moves Us Forward.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-[1.8] text-white/70 sm:text-base">
              Our mission defines how we create value today. Our vision shapes
              the future we are building with every strategy, system, and
              client partnership.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================
            MISSION & VISION CARDS
        ============================================ */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Mission */}
          <ScrollReveal>
            <motion.article
              whileHover={{ y: -7 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[26px] border border-white/25 bg-black/25 shadow-[0_28px_85px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-500 hover:border-white/40 hover:bg-black/30 hover:shadow-[0_40px_105px_rgba(0,0,0,0.40)]"
            >
              {/* Background detail */}
              <div
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.12] blur-[100px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-25"
                style={{ backgroundColor: colors.brand.accent }}
              />

              {/* Accent line */}
              <div
                className="absolute left-0 top-0 h-1 w-20 rounded-r-full transition-all duration-500 group-hover:w-full"
                style={{ background: gradients.primary }}
              />

              <div className="relative z-10 flex min-h-[390px] flex-col p-6 sm:p-8">
                {/* Top row */}
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/[0.10] text-white shadow-xl backdrop-blur-xl">
                    <Target className="h-6 w-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Mission / 01
                  </span>
                </div>

                {/* Main content */}
                <div className="mt-8">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: colors.brand.accent }}
                  >
                    What We Deliver Today
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">
                    Our Mission
                  </h3>

                  <p className="mt-4 text-sm leading-[1.85] text-white/70 sm:text-base">
                    To bring clarity, structure, and accountability to
                    marketing by replacing fragmentation with integration,
                    activity with purpose, and complexity with strategic
                    focus—delivering measurable business outcomes through
                    disciplined execution.
                  </p>
                </div>

                {/* Mission principles */}
                <div className="mt-auto grid gap-2 pt-7 sm:grid-cols-3">
                  {[
                    "Strategic Clarity",
                    "Integrated Execution",
                    "Measurable Outcomes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-3 py-3"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal delay={0.1}>
            <motion.article
              whileHover={{ y: -7 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[26px] border border-white/25 bg-black/25 shadow-[0_28px_85px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition-all duration-500 hover:border-white/40 hover:bg-black/30 hover:shadow-[0_40px_105px_rgba(0,0,0,0.40)]"
            >
              {/* Background detail */}
              <div
                className="absolute -left-24 bottom-[-100px] h-64 w-64 rounded-full opacity-[0.12] blur-[100px] transition-all duration-500 group-hover:scale-125 group-hover:opacity-25"
                style={{ backgroundColor: colors.brand.secondary }}
              />

              {/* Accent line */}
              <div
                className="absolute left-0 top-0 h-1 w-20 rounded-r-full transition-all duration-500 group-hover:w-full"
                style={{ background: gradients.primary }}
              />

              <div className="relative z-10 flex min-h-[390px] flex-col p-6 sm:p-8">
                {/* Top row */}
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/[0.10] text-white shadow-xl backdrop-blur-xl">
                    <Eye className="h-6 w-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Vision / 02
                  </span>
                </div>

                {/* Main content */}
                <div className="mt-8">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: colors.brand.accent }}
                  >
                    The Future We Are Building
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">
                    Our Vision
                  </h3>

                  <p className="mt-4 text-sm leading-[1.85] text-white/70 sm:text-base">
                    To become the most trusted strategic marketing partner for
                    enterprise organizations—recognized globally for
                    transforming marketing into a measurable driver of
                    sustainable growth and competitive advantage.
                  </p>
                </div>

                {/* Vision principles */}
                <div className="mt-auto grid gap-2 pt-7 sm:grid-cols-3">
                  {[
                    "Trusted Partnership",
                    "Global Recognition",
                    "Sustainable Growth",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-3 py-3"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/75">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </ScrollReveal>
        </div>

        {/* ============================================
            STRATEGIC PRINCIPLE STRIP
        ============================================ */}
        <ScrollReveal delay={0.2}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/25 bg-black/25 shadow-[0_22px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.09]"
                  style={{ color: colors.brand.accent }}
                >
                  <Target className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/45">
                    Strategy First, Always
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Every engagement begins with strategic clarity and ends
                    with measurable commercial progress.
                  </p>

                  <p className="mt-1 max-w-3xl text-xs leading-[1.7] text-white/55">
                    We define the objective, align the roadmap, connect the
                    right capabilities, and ensure every execution supports the
                    broader business goal.
                  </p>
                </div>
              </div>

              <Link
                to="/services"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Explore Our Approach

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            PURPOSE FRAMEWORK
        ============================================ */}
        <ScrollReveal delay={0.28}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            {[
              "Clarity",
              "Integration",
              "Accountability",
              "Execution",
              "Growth",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                  {item}
                </span>

                {index < 4 && (
                  <ArrowRight
                    className="hidden h-3.5 w-3.5 sm:block"
                    style={{ color: colors.brand.accent }}
                  />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>









{/* ============================================
    5. CORE VALUES — ADVANCED UI/UX
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="core-values-premium relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC EFFECTS
    ============================================ */}
    <style>
      {`
        .core-values-premium .core-value-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.45s ease,
            border-color 0.35s ease,
            background-color 0.35s ease;
        }

        .core-values-premium .core-value-card:hover {
          transform: translateY(-7px);
          border-color: rgba(0, 0, 170, 0.18);
          background-color: rgba(255, 255, 255, 0.96);
          box-shadow: 0 28px 70px rgba(0, 1, 49, 0.13);
        }

        .core-values-premium .core-value-accent {
          transform: scaleX(0.22);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .core-values-premium
          .core-value-card:hover
          .core-value-accent {
          transform: scaleX(1);
        }

        .core-values-premium .core-value-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.35s ease,
            color 0.35s ease;
        }

        .core-values-premium
          .core-value-card:hover
          .core-value-icon {
          transform: scale(1.06) rotate(-3deg);
        }

        .core-values-premium .core-values-image {
          transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .core-values-premium
          .core-values-visual:hover
          .core-values-image {
          transform: scale(1.035);
        }

        @media (prefers-reduced-motion: reduce) {
          .core-values-premium .core-value-card,
          .core-values-premium .core-value-icon,
          .core-values-premium .core-values-image {
            transition: none;
          }

          .core-values-premium .core-value-card:hover {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        PREMIUM LIGHT BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      {/* Subtle blue atmosphere */}
      <div
        className="absolute -left-56 top-10 h-[520px] w-[520px] rounded-full opacity-[0.07] blur-[160px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      {/* Subtle yellow atmosphere */}
      <div
        className="absolute -right-48 bottom-[-140px] h-[480px] w-[480px] rounded-full opacity-[0.12] blur-[155px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.33]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Background fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(247,248,252,0.82)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}10`,
                  color: colors.brand.primary,
                }}
              >
                <Heart
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  What Drives Us
                </span>
              </div>

              <h2
                className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Values That Shape
                <span className="mt-1 block text-gray-500">
                  Every Decision We Make.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Our values guide how we think, collaborate, execute, and build
                lasting client partnerships—from strategic direction to daily
                delivery.
              </p>
            </div>

            {/* Header statement */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/75 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Our Standard
              </p>

              <p
                className="mt-2 text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                The way we achieve results matters as much as the results
                themselves.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN VALUES EXPERIENCE
        ============================================ */}
        <div className="mt-9 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          {/* ============================================
              IMAGE-LED PHILOSOPHY PANEL
          ============================================ */}
          <ScrollReveal>
            <div className="core-values-visual group relative min-h-[520px] overflow-hidden rounded-[28px] border border-white/70 bg-gray-900 shadow-[0_30px_90px_rgba(0,1,49,0.17)]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=92"
                alt="Professional team collaborating through trust and shared values"
                className="core-values-image absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Light image treatment */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/[0.08] via-black/[0.12] to-[#000131]/95" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/45 via-transparent to-transparent" />

              {/* Top content */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Values in Action
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  05
                </span>
              </div>

              {/* Main image content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Partnership Built on Trust
                </p>

                <h3 className="mt-2 max-w-xl text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-3xl">
                  Integrity Is Not a Statement. It Is How We Work.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/[0.74]">
                  We build long-term relationships through transparency,
                  accountability, mutual respect, and a shared commitment to
                  meaningful business progress.
                </p>

                {/* Philosophy principles */}
                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {[
                    "Clear Communication",
                    "Shared Accountability",
                    "Long-Term Value",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/[0.78]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              INTERACTIVE VALUE CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title || index}
                variants={staggerItemVariants}
                className="min-w-0"
              >
                <article className="core-value-card group relative h-full min-h-[250px] overflow-hidden rounded-[22px] border border-gray-200 bg-white/80 p-5 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl sm:p-6">
                  {/* Soft card glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.06] blur-[65px] transition-opacity duration-500 group-hover:opacity-[0.14]"
                    style={{ backgroundColor: colors.brand.secondary }}
                  />

                  {/* Animated top accent */}
                  <div
                    aria-hidden="true"
                    className="core-value-accent absolute left-0 top-0 h-1 w-full"
                    style={{ background: gradients.primary }}
                  />

                  <div className="relative z-10 flex h-full min-h-[202px] flex-col">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="core-value-icon flex h-12 w-12 items-center justify-center rounded-xl border"
                        style={{
                          borderColor: `${colors.brand.secondary}18`,
                          backgroundColor: `${colors.brand.secondary}0D`,
                          color: colors.brand.secondary,
                        }}
                      >
                        {value.icon}
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.16em] text-gray-300 transition-colors duration-300 group-hover:text-gray-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Card copy */}
                    <div className="mt-6">
                      <h3
                        className="text-base font-bold leading-tight tracking-[-0.015em] sm:text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        {value.title}
                      </h3>

                      <p className="mt-3 text-sm leading-[1.75] text-gray-600">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: colors.brand.secondary }}
                        >
                          AdvantEdge Principle
                        </span>

                        <ArrowRight
                          className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          style={{ color: colors.brand.accent }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* ============================================
            VALUES OPERATING MODEL
        ============================================ */}
        <ScrollReveal delay={0.18}>
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_18px_60px_rgba(0,1,49,0.08)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Think Clearly",
                  text: "Begin with facts, context, and strategic intent.",
                },
                {
                  number: "02",
                  title: "Act Responsibly",
                  text: "Take ownership of decisions and commitments.",
                },
                {
                  number: "03",
                  title: "Work Together",
                  text: "Create better outcomes through collaboration.",
                },
                {
                  number: "04",
                  title: "Improve Continuously",
                  text: "Learn, optimize, and raise the standard.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-gray-200 lg:border-l-0"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.6] text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            CLOSING STATEMENT
        ============================================ */}
        <ScrollReveal delay={0.24}>
          <div
            className="mt-6 overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Heart
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    One Shared Standard
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Our values define how we serve clients, support colleagues,
                    make decisions, and measure success.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    They are not decorative statements—they are the operating
                    principles behind every AdvantEdge engagement.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Learn About Our Culture

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>







{/* ============================================
    6. COMPANY MILESTONES — REFINED JOURNEY
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative isolate overflow-hidden"
  >
    {/* ============================================
        LIGHT EDITORIAL BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      <div
        className="absolute -left-52 top-20 h-[480px] w-[480px] rounded-full opacity-[0.06] blur-[150px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-52 bottom-[-140px] h-[470px] w-[470px] rounded-full opacity-[0.10] blur-[150px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(247,248,252,0.88)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{
                borderColor: `${colors.brand.accent}55`,
                backgroundColor: `${colors.brand.accent}10`,
                color: colors.brand.primary,
              }}
            >
              <TrendingUp
                className="h-3.5 w-3.5"
                style={{ color: colors.brand.accent }}
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                Our Journey
              </span>
            </div>

            <h2
              className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
              style={{ color: colors.brand.primary }}
            >
              Milestones That Built
              <span className="mt-1 block text-gray-500">
                the AdvantEdge Story.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-[1.8] text-gray-600 sm:text-base">
              A journey shaped by strategic evolution, stronger capabilities,
              expanding markets, and a consistent commitment to measurable
              client growth.
            </p>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN JOURNEY LAYOUT
        ============================================ */}
        <div className="mt-10 grid items-start gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
          {/* ============================================
              STICKY VISUAL PANEL
          ============================================ */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative min-h-[440px] overflow-hidden rounded-[26px] border border-white/80 bg-gray-900 shadow-[0_28px_85px_rgba(0,1,49,0.16)] lg:min-h-[570px]">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=92"
                  alt="Business growth analytics representing the AdvantEdge journey"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-[#000131]/95" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/45 via-transparent to-transparent" />

                {/* Top label */}
                <div className="absolute left-5 top-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white shadow-lg backdrop-blur-xl">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: colors.brand.accent }}
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                      Growth Through Evolution
                    </span>
                  </div>
                </div>

                {/* Decorative section number */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-5xl font-black text-white/15"
                >
                  06
                </span>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.17em]"
                    style={{ color: colors.brand.accent }}
                  >
                    One Purpose. Continuous Progress.
                  </p>

                  <h3 className="mt-2 max-w-xl text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-3xl">
                    Growing Capability Without Losing Strategic Focus.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/70">
                    AdvantEdge has evolved across markets, services, and
                    technologies while remaining committed to one principle:
                    marketing must create measurable business value.
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {[
                      "Strategic Evolution",
                      "Global Expansion",
                      "Client Impact",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-3 py-3 backdrop-blur-xl"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: colors.brand.accent }}
                        />

                        <span className="text-[10px] font-semibold text-white/80">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual panel footer */}
              <div className="relative -mt-5 mx-4 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-[0_20px_55px_rgba(0,1,49,0.13)] backdrop-blur-xl sm:mx-7">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <TrendingUp className="h-4 w-4" />
                  </div>

                  <div>
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.15em]"
                      style={{ color: colors.brand.secondary }}
                    >
                      Built for Long-Term Growth
                    </p>

                    <p
                      className="mt-1 text-xs font-bold leading-relaxed"
                      style={{ color: colors.brand.primary }}
                    >
                      Every milestone expanded our ability to solve more complex
                      marketing and commercial challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              STRUCTURED TIMELINE
          ============================================ */}
          <div className="relative">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[17px] top-8 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(0,0,170,0.22) 8%, rgba(255,179,0,0.72) 52%, rgba(0,0,170,0.18) 92%, transparent)",
              }}
            />

            <div className="space-y-4">
              {milestones.map((milestone, index) => {
                const isLatest = index === milestones.length - 1;

                return (
                  <ScrollReveal
                    key={`${milestone.year}-${milestone.title}`}
                    delay={index * 0.07}
                  >
                    <div className="group relative pl-12">
                      {/* Timeline marker */}
                      <div
                        className={[
                          "absolute left-[7px] top-6 z-10 flex h-[21px] w-[21px] items-center justify-center rounded-full border-[4px] border-[#f7f8fc] shadow-[0_7px_20px_rgba(0,1,49,0.16)] transition-all duration-300 group-hover:scale-110",
                          isLatest
                            ? "ring-4 ring-[#ffb300]/15"
                            : "",
                        ].join(" ")}
                        style={{
                          backgroundColor: isLatest
                            ? colors.brand.accent
                            : colors.brand.secondary,
                        }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      </div>

                      {/* Milestone card */}
                      <motion.article
                        whileHover={{ y: -4 }}
                        transition={{
                          duration: 0.32,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={[
                          "relative overflow-hidden rounded-[20px] border p-5 shadow-[0_14px_42px_rgba(0,1,49,0.07)] backdrop-blur-xl transition-all duration-300 sm:p-6",
                          isLatest
                            ? "border-[#ffb300]/30 bg-white shadow-[0_18px_50px_rgba(255,179,0,0.10)]"
                            : "border-gray-200 bg-white/85 hover:border-[#0000aa]/20 hover:shadow-[0_24px_65px_rgba(0,1,49,0.12)]",
                        ].join(" ")}
                      >
                        {/* Top accent */}
                        <div
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-1 w-full origin-left scale-x-[0.16] transition-transform duration-500 group-hover:scale-x-100"
                          style={{ background: gradients.primary }}
                        />

                        {/* Soft glow */}
                        <div
                          aria-hidden="true"
                          className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.05] blur-[65px]"
                          style={{
                            backgroundColor: isLatest
                              ? colors.brand.accent
                              : colors.brand.secondary,
                          }}
                        />

                        <div className="relative z-10">
                          {/* Card header */}
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div className="flex items-center gap-3">
                              <span
                                className="inline-flex rounded-full px-3 py-1.5 text-[10px] font-black tracking-[0.08em]"
                                style={{
                                  color: isLatest
                                    ? colors.brand.primary
                                    : colors.brand.secondary,
                                  backgroundColor: isLatest
                                    ? `${colors.brand.accent}20`
                                    : `${colors.brand.secondary}0D`,
                                }}
                              >
                                {milestone.year}
                              </span>

                              {isLatest && (
                                <span
                                  className="rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em]"
                                  style={{
                                    color: colors.brand.primary,
                                    backgroundColor: `${colors.brand.accent}20`,
                                  }}
                                >
                                  Current Chapter
                                </span>
                              )}
                            </div>

                            <span className="text-[10px] font-bold tracking-[0.16em] text-gray-300">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          {/* Main copy */}
                          <h3
                            className="mt-5 text-base font-bold leading-tight tracking-[-0.015em] sm:text-lg"
                            style={{ color: colors.brand.primary }}
                          >
                            {milestone.title}
                          </h3>

                          <p className="mt-3 text-sm leading-[1.75] text-gray-600">
                            {milestone.description}
                          </p>

                          {/* Card footer */}
                          <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4">
                            <span
                              className="text-[9px] font-bold uppercase tracking-[0.14em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              AdvantEdge Milestone
                            </span>

                            <TrendingUp
                              className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                              style={{ color: colors.brand.accent }}
                            />
                          </div>
                        </div>
                      </motion.article>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================
            JOURNEY FRAMEWORK
        ============================================ */}
        <ScrollReveal delay={0.2}>
          <div className="mt-9 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Establish",
                  text: "Create a strong strategic foundation.",
                },
                {
                  number: "02",
                  title: "Expand",
                  text: "Build capabilities and enter new markets.",
                },
                {
                  number: "03",
                  title: "Integrate",
                  text: "Connect strategy, execution, data, and technology.",
                },
                {
                  number: "04",
                  title: "Transform",
                  text: "Create measurable and sustainable business growth.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-gray-200 lg:border-l-0"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.6] text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            FINAL CTA
        ============================================ */}
        <ScrollReveal delay={0.26}>
          <div
            className="mt-6 overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <TrendingUp
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    The Next Milestone
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Our journey continues through stronger partnerships,
                    smarter systems, and new opportunities for measurable
                    growth.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Discover how our experience can support the next chapter of
                    your organization.
                  </p>
                </div>
              </div>

              <Link
                to="/about"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Explore Our Journey

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>



{/* ============================================
    8. AWARDS & RECOGNITION — PREMIUM EXPERIENCE
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="awards-premium-section relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC STYLES
    ============================================ */}
    <style>
      {`
        .awards-premium-section .award-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.45s ease,
            background-color 0.35s ease;
        }

        .awards-premium-section .award-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 179, 0, 0.42);
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow:
            0 30px 80px rgba(0, 1, 49, 0.14),
            0 12px 30px rgba(255, 179, 0, 0.08);
        }

        .awards-premium-section .award-card-accent {
          transform: scaleX(0.16);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .awards-premium-section
          .award-card:hover
          .award-card-accent {
          transform: scaleX(1);
        }

        .awards-premium-section .award-card-icon {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease,
            background-color 0.35s ease;
        }

        .awards-premium-section
          .award-card:hover
          .award-card-icon {
          transform: scale(1.07) rotate(-4deg);
          background-color: rgba(255, 179, 0, 0.15);
          box-shadow: 0 14px 35px rgba(255, 179, 0, 0.16);
        }

        .awards-premium-section .award-card-arrow {
          opacity: 0;
          transform: translateX(-5px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .awards-premium-section
          .award-card:hover
          .award-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .awards-premium-section .awards-main-image {
          transition:
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease;
        }

        .awards-premium-section
          .awards-image-panel:hover
          .awards-main-image {
          transform: scale(1.03);
          filter: saturate(1.05);
        }

        .awards-premium-section .recognition-principle {
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background-color 0.35s ease;
        }

        .awards-premium-section .recognition-principle:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 0, 170, 0.16);
          background-color: rgba(255, 255, 255, 0.96);
        }

        @media (prefers-reduced-motion: reduce) {
          .awards-premium-section .award-card,
          .awards-premium-section .award-card-icon,
          .awards-premium-section .awards-main-image,
          .awards-premium-section .recognition-principle {
            transition: none;
          }

          .awards-premium-section .award-card:hover,
          .awards-premium-section .recognition-principle:hover {
            transform: none;
          }
        }
      `}
    </style>

    {/* ============================================
        PREMIUM EDITORIAL BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      {/* Subtle award image texture */}
      <img
        src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=2400&q=85"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute right-0 top-0 h-full w-[52%] object-cover opacity-[0.055] grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc] via-[#f7f8fc]/95 to-[#f7f8fc]/80" />

      {/* Blue atmosphere */}
      <div
        className="absolute -left-56 top-16 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[160px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      {/* Gold atmosphere */}
      <div
        className="absolute -right-48 bottom-[-140px] h-[500px] w-[500px] rounded-full opacity-[0.14] blur-[160px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(247,248,252,0.88)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}10`,
                  color: colors.brand.primary,
                }}
              >
                <Award
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Recognition
                </span>
              </div>

              <h2
                className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Recognized for Excellence.
                <span className="mt-1 block text-gray-500">
                  Trusted for Consistent Impact.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Industry recognition reflects our commitment to strategic
                thinking, creative excellence, innovation, and measurable
                business performance.
              </p>
            </div>

            {/* Recognition philosophy */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                What Recognition Represents
              </p>

              <p
                className="mt-2 text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                Recognition is the result of stronger thinking, disciplined
                execution, and work that creates meaningful commercial value.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            RECOGNITION SUMMARY STRIP
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Strategic Excellence",
                  text: "Recognition for clarity, direction, and business insight.",
                },
                {
                  number: "02",
                  title: "Creative Innovation",
                  text: "Ideas designed to differentiate brands and create impact.",
                },
                {
                  number: "03",
                  title: "Measurable Performance",
                  text: "Work evaluated through meaningful commercial outcomes.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(255,179,0,0.035)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5 text-center sm:px-7",
                    index < 2
                      ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.17em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mx-auto mt-1 max-w-xs text-[10px] leading-[1.6] text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN AWARDS EXPERIENCE
        ============================================ */}
        <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          {/* ============================================
              IMAGE-LED RECOGNITION PANEL
          ============================================ */}
          <ScrollReveal>
            <div className="awards-image-panel group relative min-h-[500px] overflow-hidden rounded-[28px] border border-white/80 bg-gray-900 shadow-[0_30px_90px_rgba(0,1,49,0.17)] lg:min-h-full">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1800&q=92"
                alt="Business award representing excellence and achievement"
                className="awards-main-image absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Image visibility treatment */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/[0.04] via-black/[0.12] to-[#000131]/95" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/45 via-transparent to-transparent" />

              {/* Top row */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <Star
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Excellence Recognized
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  08
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Industry-Leading Excellence
                </p>

                <h3 className="mt-2 max-w-xl text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-3xl">
                  Recognition Earned Through Work That Creates Real Impact.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/[0.76]">
                  Every award represents a successful collaboration, a complex
                  challenge solved, and a standard of work designed to create
                  meaningful value for our clients.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    "Strategic Thinking",
                    "Creative Excellence",
                    "Business Results",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              INTERACTIVE AWARD CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.title}-${index}`}
                variants={staggerItemVariants}
                className="min-w-0"
              >
                <article className="award-card group relative h-full min-h-[245px] overflow-hidden rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_45px_rgba(0,1,49,0.075)] backdrop-blur-xl sm:p-6">
                  {/* Top accent */}
                  <div
                    aria-hidden="true"
                    className="award-card-accent absolute left-0 top-0 h-1 w-full"
                    style={{ background: gradients.primary }}
                  />

                  {/* Soft gold glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-[0.07] blur-[70px] transition-opacity duration-500 group-hover:opacity-[0.18]"
                    style={{ backgroundColor: colors.brand.accent }}
                  />

                  <div className="relative z-10 flex h-full min-h-[197px] flex-col">
                    {/* Card header */}
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="award-card-icon flex h-12 w-12 items-center justify-center rounded-xl border"
                        style={{
                          borderColor: `${colors.brand.accent}35`,
                          backgroundColor: `${colors.brand.accent}10`,
                          color: colors.brand.accent,
                        }}
                      >
                        <Award className="h-5 w-5" />
                      </div>

                      <div className="text-right">
                        <p
                          className="text-xl font-black tracking-[-0.035em]"
                          style={{ color: colors.brand.accent }}
                        >
                          {award.year}
                        </p>

                        <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-gray-400">
                          Recognition
                        </p>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="mt-6">
                      <h4
                        className="text-base font-bold leading-[1.3] tracking-[-0.015em] sm:text-lg"
                        style={{ color: colors.brand.primary }}
                      >
                        {award.title}
                      </h4>

                      <p className="mt-2 text-xs font-semibold text-gray-500">
                        {award.organization}
                      </p>

                      <p className="mt-3 text-[11px] leading-[1.7] text-gray-500">
                        Recognition for delivering exceptional strategic,
                        creative, and commercial value.
                      </p>
                    </div>

                    {/* Card footer */}
                    <div className="mt-auto pt-5">
                      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.14em]"
                          style={{ color: colors.brand.secondary }}
                        >
                          Award & Achievement
                        </span>

                        <ArrowRight
                          className="award-card-arrow h-4 w-4"
                          style={{ color: colors.brand.accent }}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* ============================================
            RECOGNITION OPERATING PRINCIPLES
        ============================================ */}
        <ScrollReveal delay={0.2}>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Solve Meaningfully",
                text: "Begin with the real business challenge.",
              },
              {
                number: "02",
                title: "Think Differently",
                text: "Create ideas that challenge category conventions.",
              },
              {
                number: "03",
                title: "Execute Precisely",
                text: "Translate strategy into disciplined delivery.",
              },
              {
                number: "04",
                title: "Measure Honestly",
                text: "Evaluate work through meaningful outcomes.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="recognition-principle rounded-xl border border-gray-200 bg-white/80 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.055)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      color: colors.brand.accent,
                      backgroundColor: `${colors.brand.accent}10`,
                    }}
                  >
                    <Star className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    {item.number}
                  </span>
                </div>

                <p
                  className="mt-4 text-xs font-bold"
                  style={{ color: colors.brand.primary }}
                >
                  {item.title}
                </p>

                <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ============================================
            FINAL CTA
        ============================================ */}
        <ScrollReveal delay={0.28}>
          <div
            className="mt-7 overflow-hidden rounded-2xl shadow-[0_22px_65px_rgba(0,1,49,0.16)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Award
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Recognition Is a Result
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Awards acknowledge the work, but client growth remains the
                    outcome that matters most.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Explore the strategies, systems, and transformations behind
                    our recognized work.
                  </p>
                </div>
              </div>

              <Link
                to="/case-studies"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Explore Our Work

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>







{/* ============================================
    9. GLOBAL LOCATIONS — PREMIUM NETWORK
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="global-locations-premium relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION-SPECIFIC UI EFFECTS
    ============================================ */}
    <style>
      {`
        .global-locations-premium .location-card {
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.35s ease,
            box-shadow 0.45s ease,
            background-color 0.35s ease;
        }

        .global-locations-premium .location-card:hover {
          transform: translateY(-7px);
          border-color: rgba(0, 0, 170, 0.20);
          box-shadow: 0 30px 80px rgba(0, 1, 49, 0.15);
        }

        .global-locations-premium .location-image {
          transition:
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.6s ease;
        }

        .global-locations-premium
          .location-card:hover
          .location-image {
          transform: scale(1.045);
          filter: saturate(1.08);
        }

        .global-locations-premium .location-accent {
          transform: scaleX(0.16);
          transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .global-locations-premium
          .location-card:hover
          .location-accent {
          transform: scaleX(1);
        }

        .global-locations-premium .location-arrow {
          opacity: 0;
          transform: translateX(-5px);
          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .global-locations-premium
          .location-card:hover
          .location-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .global-locations-premium .global-network-image {
          transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .global-locations-premium
          .global-network-panel:hover
          .global-network-image {
          transform: scale(1.025);
        }

        .global-locations-premium .network-point {
          animation: networkPulse 2.6s ease-in-out infinite;
        }

        .global-locations-premium .network-point:nth-child(2) {
          animation-delay: 0.8s;
        }

        .global-locations-premium .network-point:nth-child(3) {
          animation-delay: 1.6s;
        }

        @keyframes networkPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(255, 179, 0, 0.25);
          }

          50% {
            box-shadow: 0 0 0 10px rgba(255, 179, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .global-locations-premium .location-card,
          .global-locations-premium .location-image,
          .global-locations-premium .global-network-image {
            transition: none;
          }

          .global-locations-premium .location-card:hover {
            transform: none;
          }

          .global-locations-premium .network-point {
            animation: none;
          }
        }
      `}
    </style>

    {/* ============================================
        PREMIUM EDITORIAL BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      {/* Subtle global network texture */}
      <img
        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2400&q=85"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute right-0 top-0 h-full w-[58%] object-cover opacity-[0.055] grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc] via-[#f7f8fc]/95 to-[#f7f8fc]/80" />

      {/* Blue atmosphere */}
      <div
        className="absolute -left-56 top-10 h-[520px] w-[520px] rounded-full opacity-[0.065] blur-[165px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      {/* Gold atmosphere */}
      <div
        className="absolute -right-52 bottom-[-150px] h-[500px] w-[500px] rounded-full opacity-[0.12] blur-[160px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(247,248,252,0.88)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}10`,
                  color: colors.brand.primary,
                }}
              >
                <Globe
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Global Presence
                </span>
              </div>

              <h2
                className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Global Perspective.
                <span className="mt-1 block text-gray-500">
                  Local Market Understanding.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                Our strategic presence across key international business
                centers allows us to combine global capability with deeper
                regional knowledge, responsiveness, and market relevance.
              </p>
            </div>

            {/* Network statement */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                One Connected Network
              </p>

              <p
                className="mt-2 text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                Shared strategy, connected expertise, and consistent delivery
                across every market we serve.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            GLOBAL NETWORK SUMMARY
        ============================================ */}
        <ScrollReveal delay={0.08}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-3">
              {[
                {
                  value: locations.length,
                  title: "Strategic Locations",
                  text: "Presence in key international business centers.",
                },
                {
                  value: "3",
                  title: "Continents",
                  text: "Connected reach across multiple global regions.",
                },
                {
                  value: "1",
                  title: "Integrated Network",
                  text: "A unified strategic and delivery model.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    backgroundColor: "rgba(0,0,170,0.025)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5 text-center sm:px-7",
                    index < 2
                      ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-2xl font-black tracking-[-0.045em] sm:text-3xl"
                    style={{ color: colors.brand.secondary }}
                  >
                    {item.value}
                  </p>

                  <p
                    className="mt-1 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mx-auto mt-1 max-w-xs text-[10px] leading-[1.6] text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            MAIN LOCATION EXPERIENCE
        ============================================ */}
        <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          {/* ============================================
              GLOBAL NETWORK VISUAL
          ============================================ */}
          <ScrollReveal>
            <div className="global-network-panel group relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/80 bg-gray-900 shadow-[0_30px_90px_rgba(0,1,49,0.18)]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1900&q=92"
                alt="Global map representing the AdvantEdge international network"
                className="global-network-image absolute inset-0 h-full w-full object-cover object-center"
              />

              {/* Image remains visible */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/[0.06] via-[#000131]/20 to-[#000131]/96" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/45 via-transparent to-transparent" />

              {/* Network markers */}
              <div className="absolute inset-0">
                <span
                  className="network-point absolute left-[24%] top-[35%] h-3 w-3 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: colors.brand.accent }}
                />

                <span
                  className="network-point absolute left-[50%] top-[29%] h-3 w-3 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: colors.brand.accent }}
                />

                <span
                  className="network-point absolute right-[18%] top-[48%] h-3 w-3 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: colors.brand.accent }}
                />
              </div>

              {/* Top label */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <Globe
                    className="h-3.5 w-3.5"
                    style={{ color: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    International Network
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  09
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Global Reach, Local Expertise
                </p>

                <h3 className="mt-2 max-w-xl text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-3xl">
                  One Global Team Connected Across Markets.
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/[0.76]">
                  Our distributed network connects international strategic
                  perspective with regional knowledge, enabling more relevant
                  decisions and more effective market execution.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    "Shared Expertise",
                    "Regional Insight",
                    "Unified Delivery",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ============================================
              INTERACTIVE LOCATION CARDS
          ============================================ */}
          <StaggerContainer className="grid gap-4">
            {locations.map((location, index) => {
              const locationImages = [
                "https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1500&q=92",
                "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1500&q=92",
                "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1500&q=92",
              ];

              const locationImage =
                locationImages[index % locationImages.length];

              const phoneHref = `tel:${String(location.phone).replace(
                /[^\d+]/g,
                ""
              )}`;

              return (
                <motion.div
                  key={`${location.city}-${location.country}-${index}`}
                  variants={staggerItemVariants}
                  className="min-w-0"
                >
                  <article className="location-card group relative overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-[0_16px_48px_rgba(0,1,49,0.08)]">
                    <div className="grid min-h-[200px] sm:grid-cols-[0.38fr_0.62fr]">
                      {/* Location image */}
                      <div className="relative min-h-[180px] overflow-hidden sm:min-h-full">
                        <OptimizedImage
                          src={locationImage}
                          alt={`${location.city}, ${location.country}`}
                          className="location-image absolute inset-0 h-full w-full object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#000131]/35" />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#000131]/55 via-transparent to-transparent" />

                        <div
                          aria-hidden="true"
                          className="location-accent absolute left-0 top-0 z-20 h-1 w-full"
                          style={{ background: gradients.primary }}
                        />

                        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-black/20 text-white shadow-xl backdrop-blur-xl">
                          <MapPin className="h-4 w-4" />
                        </div>

                        <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.15em] text-white/80">
                          Location {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Location content */}
                      <div className="flex flex-col p-5 sm:p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p
                              className="text-[9px] font-bold uppercase tracking-[0.16em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              Global Office
                            </p>

                            <h3
                              className="mt-1.5 text-xl font-bold tracking-[-0.025em]"
                              style={{ color: colors.brand.primary }}
                            >
                              {location.city}
                            </h3>

                            <p className="mt-1 text-xs font-semibold text-gray-500">
                              {location.country}
                            </p>
                          </div>

                          <span
                            className="rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.13em]"
                            style={{
                              color: colors.brand.primary,
                              backgroundColor: `${colors.brand.accent}18`,
                            }}
                          >
                            Active
                          </span>
                        </div>

                        <div className="mt-4 border-t border-gray-200 pt-4">
                          <p className="text-xs leading-[1.7] text-gray-600">
                            {location.address}
                          </p>

                          <a
                            href={phoneHref}
                            className="mt-3 inline-flex items-center text-xs font-bold transition-colors duration-300"
                            style={{ color: colors.brand.secondary }}
                          >
                            {location.phone}
                          </a>
                        </div>

                        <div className="mt-auto pt-4">
                          <Link
                            to="/contact"
                            className="flex items-center justify-between border-t border-gray-200 pt-4"
                          >
                            <span
                              className="text-[9px] font-bold uppercase tracking-[0.14em]"
                              style={{ color: colors.brand.secondary }}
                            >
                              View Office Details
                            </span>

                            <ArrowRight
                              className="location-arrow h-4 w-4"
                              style={{ color: colors.brand.accent }}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* ============================================
            GLOBAL DELIVERY MODEL
        ============================================ */}
        <ScrollReveal delay={0.2}>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Global Perspective",
                text: "International experience across markets and categories.",
              },
              {
                number: "02",
                title: "Local Relevance",
                text: "Market decisions informed by regional realities.",
              },
              {
                number: "03",
                title: "Connected Expertise",
                text: "Capabilities shared across one integrated network.",
              },
              {
                number: "04",
                title: "Consistent Delivery",
                text: "One strategic standard across every location.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-gray-200 bg-white/80 p-4 shadow-[0_12px_35px_rgba(0,1,49,0.055)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      color: colors.brand.secondary,
                      backgroundColor: `${colors.brand.secondary}0D`,
                    }}
                  >
                    <Globe className="h-4 w-4" />
                  </div>

                  <span className="text-[9px] font-bold tracking-[0.15em] text-gray-300">
                    {item.number}
                  </span>
                </div>

                <p
                  className="mt-4 text-xs font-bold"
                  style={{ color: colors.brand.primary }}
                >
                  {item.title}
                </p>

                <p className="mt-1 text-[10px] leading-[1.65] text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* ============================================
            FINAL CTA
        ============================================ */}
        <ScrollReveal delay={0.28}>
          <div
            className="mt-7 overflow-hidden rounded-2xl shadow-[0_22px_65px_rgba(0,1,49,0.16)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <MapPin
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Connect With AdvantEdge
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    Speak with the AdvantEdge team closest to your market and
                    business requirements.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Our global network provides direct access to strategic,
                    creative, digital, and transformation expertise.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Contact Our Team

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>


{/* ============================================
    10. COMPANY CULTURE — PREMIUM EXPERIENCE
============================================ */}
<ModernSectionBackground
  variant="glass-blur"
  className="relative overflow-hidden"
>
  <Section
    spacing="base"
    animate
    background="transparent"
    className="relative isolate overflow-hidden"
  >
    {/* ============================================
        SECTION BACKGROUND
    ============================================ */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#f7f8fc]"
    >
      {/* Subtle workspace texture */}
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=86"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute right-0 top-0 h-full w-[58%] object-cover opacity-[0.055] grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8fc] via-[#f7f8fc]/95 to-[#f7f8fc]/80" />

      {/* Brand atmospheres */}
      <div
        className="absolute -left-56 top-10 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-[160px]"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="absolute -right-48 bottom-[-140px] h-[480px] w-[480px] rounded-full opacity-[0.11] blur-[155px]"
        style={{ backgroundColor: colors.brand.accent }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,1,49,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,1,49,0.04) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_12%,rgba(247,248,252,0.88)_100%)]" />
    </div>

    <Container size="xl">
      <div className="relative mx-auto max-w-7xl">
        {/* ============================================
            SECTION HEADER
        ============================================ */}
        <ScrollReveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm"
                style={{
                  borderColor: `${colors.brand.accent}55`,
                  backgroundColor: `${colors.brand.accent}10`,
                  color: colors.brand.primary,
                }}
              >
                <Heart
                  className="h-3.5 w-3.5"
                  style={{ color: colors.brand.accent }}
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Our Culture
                </span>
              </div>

              <h2
                className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-0.035em] sm:text-3xl lg:text-[42px]"
                style={{ color: colors.brand.primary }}
              >
                Where Excellence Meets
                <span className="mt-1 block text-gray-500">
                  Collaboration and Growth.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-[1.8] text-gray-600 sm:text-base">
                We have built a culture where talented people think
                strategically, collaborate openly, take ownership, and
                continuously improve the quality of their work.
              </p>
            </div>

            {/* Culture philosophy */}
            <div className="max-w-sm rounded-2xl border border-gray-200 bg-white/80 px-5 py-4 shadow-[0_16px_45px_rgba(0,1,49,0.07)] backdrop-blur-xl">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.16em]"
                style={{ color: colors.brand.secondary }}
              >
                Our Culture Philosophy
              </p>

              <p
                className="mt-2 text-sm font-bold leading-relaxed"
                style={{ color: colors.brand.primary }}
              >
                Great work happens when high standards, professional trust, and
                individual growth move together.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            CULTURE EXPERIENCE
        ============================================ */}
        <div className="mt-9 grid items-stretch gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          {/* ============================================
              IMAGE-LED CULTURE PANEL
          ============================================ */}
          <ScrollReveal>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative min-h-[570px] overflow-hidden rounded-[28px] border border-white/80 bg-gray-900 shadow-[0_30px_90px_rgba(0,1,49,0.18)]"
            >
              <OptimizedImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1900&q=92"
                alt="Collaborative team working together in a modern workplace"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.025]"
              />

              {/* Balanced image treatment */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-[#000131]/94" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#000131]/42 via-transparent to-transparent" />

              {/* Top label */}
              <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-3 py-2 text-white shadow-xl backdrop-blur-xl">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: colors.brand.accent }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em]">
                    Culture in Action
                  </span>
                </div>

                <span className="text-[10px] font-bold tracking-[0.17em] text-white/55">
                  10
                </span>
              </div>

              {/* Image content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <p
                  className="text-[9px] font-bold uppercase tracking-[0.17em]"
                  style={{ color: colors.brand.accent }}
                >
                  Diverse Expertise. Shared Standards.
                </p>

                <h3 className="mt-2 max-w-2xl text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-white sm:text-3xl">
                  A Workplace Designed for Better Thinking and Better Work.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-[1.75] text-white/75">
                  Strategists, creatives, analysts, marketers, and
                  technologists work together in an environment that encourages
                  curiosity, accountability, open dialogue, and continuous
                  professional development.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {[
                    "Open Collaboration",
                    "Individual Ownership",
                    "Shared Success",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-3 py-3 backdrop-blur-xl"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: colors.brand.accent }}
                      />

                      <span className="text-[10px] font-semibold text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          </ScrollReveal>

          {/* ============================================
              INTERACTIVE CULTURE PRINCIPLES
          ============================================ */}
          <ScrollReveal delay={0.12}>
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Continuous Learning",
                  description:
                    "Regular exposure to new ideas, capabilities, technologies, and strategic frameworks.",
                  outcome: "Knowledge becomes capability",
                },
                {
                  number: "02",
                  title: "Career Growth",
                  description:
                    "Clear opportunities to develop expertise, expand responsibility, and progress professionally.",
                  outcome: "Ambition supported by opportunity",
                },
                {
                  number: "03",
                  title: "Work-Life Balance",
                  description:
                    "A professional environment that values high performance without ignoring personal wellbeing.",
                  outcome: "Sustainable performance",
                },
                {
                  number: "04",
                  title: "Collaborative Teams",
                  description:
                    "Cross-functional specialists working together around shared client and business objectives.",
                  outcome: "Stronger ideas through collaboration",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.number}
                  whileHover={{ y: -7 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex min-h-[265px] flex-col overflow-hidden rounded-[22px] border border-gray-200 bg-white/85 p-5 shadow-[0_16px_48px_rgba(0,1,49,0.075)] backdrop-blur-xl transition-all duration-300 hover:border-[#0000aa]/20 hover:bg-white hover:shadow-[0_28px_75px_rgba(0,1,49,0.13)] sm:p-6"
                >
                  {/* Animated accent */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-1 w-full origin-left scale-x-[0.18] transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: gradients.primary }}
                  />

                  {/* Soft glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.055] blur-[65px] transition-opacity duration-500 group-hover:opacity-[0.14]"
                    style={{ backgroundColor: colors.brand.secondary }}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                        style={{
                          borderColor: `${colors.brand.secondary}18`,
                          backgroundColor: `${colors.brand.secondary}0D`,
                          color: colors.brand.secondary,
                        }}
                      >
                        <CheckCircle2 className="h-5 w-5" />
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.16em] text-gray-300 transition-colors duration-300 group-hover:text-gray-500">
                        {item.number}
                      </span>
                    </div>

                    <h3
                      className="mt-6 text-base font-bold leading-tight tracking-[-0.015em] sm:text-lg"
                      style={{ color: colors.brand.primary }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-[1.72] text-gray-600">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <div className="flex items-center gap-2 border-t border-gray-200 pt-4">
                        <ArrowRight
                          className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          style={{ color: colors.brand.accent }}
                        />

                        <span
                          className="text-[9px] font-bold uppercase tracking-[0.13em]"
                          style={{ color: colors.brand.secondary }}
                        >
                          {item.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ============================================
            CULTURE OPERATING MODEL
        ============================================ */}
        <ScrollReveal delay={0.2}>
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-[0_18px_55px_rgba(0,1,49,0.07)] backdrop-blur-xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Think Strategically",
                  text: "Understand the context before choosing the action.",
                },
                {
                  number: "02",
                  title: "Collaborate Openly",
                  text: "Share perspectives and improve ideas collectively.",
                },
                {
                  number: "03",
                  title: "Take Ownership",
                  text: "Remain accountable for commitments and outcomes.",
                },
                {
                  number: "04",
                  title: "Keep Improving",
                  text: "Learn from performance and raise the standard.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    backgroundColor: "rgba(0,0,170,0.025)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={[
                    "px-5 py-5",
                    index < 3
                      ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                      : "",
                    index === 1
                      ? "sm:border-l sm:border-gray-200 lg:border-l-0"
                      : "",
                  ].join(" ")}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: colors.brand.accent }}
                  >
                    {item.number}
                  </p>

                  <p
                    className="mt-1.5 text-sm font-bold"
                    style={{ color: colors.brand.primary }}
                  >
                    {item.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-[1.6] text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ============================================
            CULTURE STATEMENT
        ============================================ */}
        <ScrollReveal delay={0.25}>
          <div
            className="mt-6 overflow-hidden rounded-2xl shadow-[0_22px_65px_rgba(0,1,49,0.16)]"
            style={{ backgroundColor: colors.brand.primary }}
          >
            <div className="grid items-center lg:grid-cols-[1fr_auto]">
              <div className="flex items-start gap-4 px-5 py-5 sm:px-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08]">
                  <Heart
                    className="h-5 w-5"
                    style={{ color: colors.brand.accent }}
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Built for People Who Want to Make an Impact
                  </p>

                  <p className="mt-1 text-sm font-bold leading-relaxed text-white sm:text-base">
                    AdvantEdge gives talented people the environment,
                    responsibility, and support required to produce meaningful
                    work.
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Professional growth and client success are treated as
                    connected outcomes—not competing priorities.
                  </p>
                </div>
              </div>

              <Link
                to="/careers"
                className="group flex h-full items-center justify-center gap-2 border-t border-white/15 px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/[0.08] lg:border-l lg:border-t-0"
              >
                Explore Careers

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: colors.brand.accent }}
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  </Section>
</ModernSectionBackground>








    </PageBackground>
  );
}

export default AboutPage;

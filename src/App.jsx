import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  Mail,
  Instagram,
  Layers,
  Target,
  Code2,
  Compass,
  Search,
  Clock,
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Send,
  Menu,
  X,
  ChevronRight,
  BarChart3,
  Users,
  Filter,
  Sliders,
  Globe,
  Copy,
  Check,
  Building2,
  PhoneCall,
  CheckSquare,
  TrendingUp
} from 'lucide-react';

// ============================================================================
// WEBSITE CONFIGURATION DATA (Vimal Saini Portfolio)
// ============================================================================
const PORTFOLIO_DATA = {
  profile: {
    name: 'Vimal Saini',
    initials: 'VS',
    roleBadge: 'META ADS • LEAD GENERATION • DIGITAL PROJECTS',
    headline: 'Building Digital Experiences & Generating Leads',
    subheadline:
      'I work with Meta Ads and lead generation, with an interest in building useful digital experiences and exploring new web technologies.',
    email: 'vimal.saini1307@gmail.com',
    instagramUsername: 'vimalsaini__2005',
    instagramUrl: 'https://www.instagram.com/vimalsaini__2005/'
  },

  about: {
    heading: 'A Little About Me',
    lead: 'Focused on practical digital marketing, structured lead generation, and building functional web applications.',
    paragraphs: [
      'I am Vimal Saini. My work centers around running Meta Ads across Facebook and Instagram to help connect offers with the right audience and generate relevant customer enquiries.',
      'Alongside digital advertising, I enjoy designing and building web-based projects—ranging from custom CRM tools for organizing daily workflows to modern, interactive websites with clean user interfaces.',
      'I believe in a straightforward, practical approach: combining well-structured ad campaigns with clean digital tools that make managing leads and customer interactions simpler and more organized.'
    ],
    focusAreas: [
      { label: 'Paid Social', value: 'Facebook & Instagram Ad Campaigns' },
      { label: 'Acquisition', value: 'Targeted Lead Generation Workflows' },
      { label: 'Web Projects', value: 'Custom CRM & Interactive Interfaces' },
      { label: 'UI Exploration', value: 'Modern Layouts & Smooth Motion' }
    ]
  },

  services: [
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      tag: 'Facebook & Instagram',
      description:
        'Planning, structuring, and managing advertising campaigns across Facebook and Instagram with clear audience segmentation, creative testing, and budget pacing.',
      highlights: ['Campaign Structure', 'Audience Targeting', 'Creative Formats'],
      accent: 'from-blue-500/20 via-blue-500/5 to-transparent',
      borderAccent: 'hover:border-blue-500/50',
      iconName: 'target'
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      tag: 'Customer Enquiries',
      description:
        'Using targeted digital advertising and clear landing pathways to attract interested prospects and turn ad impressions into organized customer enquiries.',
      highlights: ['Instant Forms & Pages', 'Prospect Filtering', 'Follow-Up Readiness'],
      accent: 'from-violet-500/20 via-violet-500/5 to-transparent',
      borderAccent: 'hover:border-violet-500/50',
      iconName: 'filter'
    },
    {
      id: 'digital-projects',
      title: 'Digital Projects',
      tag: 'Web & Utility Tools',
      description:
        'Building practical websites, workflow dashboards, and custom digital tools designed to organize data, track daily progress, and simplify operations.',
      highlights: ['Custom Web Apps', 'Lead Management Tools', 'Responsive Layouts'],
      accent: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      borderAccent: 'hover:border-cyan-500/50',
      iconName: 'code'
    },
    {
      id: 'creative-exploration',
      title: 'Creative Exploration',
      tag: 'UI, Motion & Tech',
      description:
        'Exploring modern interface aesthetics, subtle 3D visual effects, interactive components, and new web technologies that make digital experiences memorable.',
      highlights: ['Interactive UI Design', '3D & Motion Accents', 'Modern Web Stack'],
      accent: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
      borderAccent: 'hover:border-indigo-500/50',
      iconName: 'compass'
    }
  ],

  projects: [
    {
      id: 'property-dealer-crm',
      title: 'Property Dealer CRM',
      category: 'Web Application • CRM System',
      badge: 'Featured Project',
      description:
        'A digital project focused on organizing property leads, tracking follow-ups, managing customer information, and monitoring daily targets.',
      features: [
        'Centralized property lead directory with budget and location filters',
        'Scheduled follow-up reminders and conversation status tracking',
        'Structured buyer/seller profile cards and requirement notes',
        'Daily target monitoring and activity progress overview'
      ],
      tags: ['CRM Architecture', 'Lead Management', 'Follow-Up Tracking', 'Dashboard UI'],
      liveUrl: null,
      sourceUrl: null
    }
  ],

  funnelStages: [
    {
      step: '01',
      title: 'Campaign Planning & Offer Clarity',
      subtitle: 'Setting the Foundation',
      summary:
        'Before launching ads, the focus goes into understanding the core offer, defining what makes it relevant, and choosing the right campaign objective.',
      points: [
        'Aligning campaign objectives with business goals',
        'Structuring clear messaging and visual angles',
        'Planning budget allocation and testing phases'
      ]
    },
    {
      step: '02',
      title: 'Audience Discovery & Targeting',
      subtitle: 'Reaching Relevant People',
      summary:
        'Using Meta’s targeting parameters—location, demographics, interests, and custom segments—to present ads to people most likely to care about the service or product.',
      points: [
        'Geographic and demographic refinement',
        'Interest-based and behavior-aligned segments',
        'Retargeting engaged viewers and page visitors'
      ]
    },
    {
      step: '03',
      title: 'Ad Creative & Placement Execution',
      subtitle: 'Capturing Attention Across Feeds & Reels',
      summary:
        'Delivering clean visuals and direct copy across Facebook and Instagram placements so prospects immediately understand the value proposition.',
      points: [
        'Mobile-first creatives for Feeds, Stories, and Reels',
        'Direct call-to-action prompts',
        'Iterative testing of headlines and visual hooks'
      ]
    },
    {
      step: '04',
      title: 'Lead Capture & Timely Follow-Up',
      subtitle: 'Turning Interest into Conversations',
      summary:
        'Directing interested prospects into low-friction lead forms or landing pages, followed by organized tracking so every enquiry is handled promptly.',
      points: [
        'Streamlined lead capture forms with qualifying questions',
        'Organized lead routing into CRM or tracking sheets',
        'Structured follow-up scheduling to connect with prospects'
      ]
    }
  ],

  blogPosts: [
    {
      id: 'meta-ads-structure-fundamentals',
      slug: 'meta-ads-structure-fundamentals',
      title: 'Structuring Meta Ad Campaigns for Clearer Testing and Lead Quality',
      date: 'October 2026',
      readTime: '5 min read',
      category: 'Meta Ads',
      excerpt:
        'A practical look at how keeping campaign structures clean on Facebook and Instagram helps you understand what creative and audience combinations actually work.',
      keyTakeaways: [
        'Over-complicating ad sets early makes it harder to see what is driving enquiries.',
        'Clear creative messaging acts as your strongest audience filter.',
        'Matching your lead form questions to the offer improves follow-up quality.'
      ],
      sections: [
        {
          heading: 'Why Simpler Structures Often Work Better',
          body: 'When setting up campaigns on Meta Ads Manager, it can be tempting to create dozens of tiny ad sets right away. In practice, splitting a modest budget across too many ad sets slows down learning and makes results harder to interpret. Grouping logical audiences together while testing distinct creative angles gives clearer feedback.'
        },
        {
          heading: 'Letting the Creative Do the Filtering',
          body: 'Targeting settings define who can see your ad, but the visual and copy determine who stops scrolling and clicks. When an ad clearly states who the offer is for—such as a specific local service or property category—it naturally attracts more relevant clicks and filters out casual browsers.'
        },
        {
          heading: 'Balancing Friction in Lead Capture',
          body: 'Instant forms with pre-filled fields make submitting contact details effortless, which can sometimes bring in low-intent submissions. Adding one or two thoughtful multiple-choice questions helps ensure the person submitting the form has a genuine requirement before your follow-up begins.'
        }
      ]
    },
    {
      id: 'why-lead-follow-up-systems-matter',
      slug: 'why-lead-follow-up-systems-matter',
      title: 'Why Organizing Follow-Ups Matters as Much as Generating the Lead',
      date: 'September 2026',
      readTime: '4 min read',
      category: 'Lead Generation',
      excerpt:
        'Running ads brings enquiries in, but what happens after a prospect submits their details determines whether those enquiries turn into real conversations.',
      keyTakeaways: [
        'Speed of response significantly affects whether a prospect remembers submitting the form.',
        'A dedicated CRM prevents leads from getting buried in scattered notes.',
        'Tracking daily follow-up targets keeps outreach consistent.'
      ],
      sections: [
        {
          heading: 'The Gap Between Ad Click and Conversation',
          body: 'Many businesses invest heavily in getting enquiries through Facebook and Instagram ads, only to manage those incoming leads across scattered chat messages or paper notes. When follow-ups are delayed by a day or two, interest cools down quickly.'
        },
        {
          heading: 'Building the Property Dealer CRM Concept',
          body: 'While working on the Property Dealer CRM project, the primary focus was solving this exact workflow problem. Property enquiries involve specific budgets, preferred locations, and timelines. Having a single dashboard to log customer requirements, set next follow-up dates, and check daily outreach targets makes the entire process predictable.'
        },
        {
          heading: 'Creating a Repeatable Daily Routine',
          body: 'Whether using a custom CRM web application or a structured digital tracker, categorizing every enquiry by status—New, Contacted, Follow-Up Scheduled, or Closed—ensures no potential customer slips through the cracks.'
        }
      ]
    },
    {
      id: 'designing-dark-ui-web-experiences',
      slug: 'designing-dark-ui-web-experiences',
      title: 'Exploring Dark Interfaces, Subtle 3D Depth, and Clean Web Performance',
      date: 'August 2026',
      readTime: '4 min read',
      category: 'Web & Digital Projects',
      excerpt:
        'Notes on combining charcoal palettes, glassmorphism, and subtle motion effects on the web without sacrificing readability or mobile responsiveness.',
      keyTakeaways: [
        'High-contrast typography is essential when designing on near-black backgrounds.',
        'Subtle CSS 3D transforms and glowing gradients add depth without heavy page weight.',
        'Every visual animation should support navigation rather than slow down the user.'
      ],
      sections: [
        {
          heading: 'Making Dark Interfaces Comfortable to Read',
          body: 'Dark-themed websites look modern and distinctive, especially when paired with electric blue, violet, and cyan accents. However, pure white text on pure black backgrounds can cause eye strain. Using soft slate tones for body paragraphs and deep charcoal surfaces creates a much more balanced reading experience.'
        },
        {
          heading: 'Adding Depth with Lightweight Effects',
          body: 'You do not always need heavy 3D engines to make a website feel dimensional. Layered translucent cards (glassmorphism), soft radial lighting, and responsive CSS perspective transforms give interfaces a tactile, modern feel while loading quickly on Android phones and laptops alike.'
        },
        {
          heading: 'Keeping Code Modular for Future Growth',
          body: 'Organizing a portfolio or web tool with clean React components and structured data arrays means new projects, UI refinements, and articles can be added smoothly as new work comes together.'
        }
      ]
    }
  ]
};

// ============================================================================
// MAIN PORTFOLIO APPLICATION
// ============================================================================
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFunnelStep, setActiveFunnelStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Interactive 3D Hero mouse tracking
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Interactive CRM Preview Tab State
  const [crmTab, setCrmTab] = useState('pipeline');

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    document.title = 'Vimal Saini | Meta Ads, Lead Generation & Digital Projects';
  }, []);

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    setMouseOffset({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    if (activeArticle) {
      setActiveArticle(null);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = useMemo(() => {
    const unique = new Set(PORTFOLIO_DATA.blogPosts.map((p) => p.category));
    return ['All', ...Array.from(unique)];
  }, []);

  const filteredPosts = useMemo(() => {
    return PORTFOLIO_DATA.blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${contactForm.name || 'Website Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
    setFormStatus('opened');
  };

  const renderServiceIcon = (iconName) => {
    switch (iconName) {
      case 'target':
        return <Target className="w-6 h-6 text-blue-400" />;
      case 'filter':
        return <Filter className="w-6 h-6 text-violet-400" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Compass className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-500/30 selection:text-cyan-200 font-sans overflow-x-hidden">
      {/* Subtle Ambient Background Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/12 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-violet-600/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* ================================================================== */}
      {/* NAVIGATION BAR */}
      {/* ================================================================== */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#07090e]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-400/30 transition-all">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center font-bold text-sm tracking-wider text-white">
                {PORTFOLIO_DATA.profile.initials}
              </div>
            </div>
            <div>
              <span className="block font-bold tracking-tight text-white text-base group-hover:text-cyan-300 transition-colors">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="block text-[11px] text-slate-400 tracking-wider uppercase">
                Digital Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Portfolio', id: 'projects' },
              { label: 'Meta Ads', id: 'meta-ads' },
              { label: 'Insights', id: 'blog' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3.5 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Primary Navigation Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25 hover:opacity-95 transition-all"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0b0f19]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Portfolio', id: 'projects' },
              { label: 'Meta Ads & Leads', id: 'meta-ads' },
              { label: 'Insights & Notes', id: 'blog' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ================================================================== */}
      {/* FULL ARTICLE READER VIEW (WHEN AN ARTICLE IS OPENED) */}
      {/* ================================================================== */}
      {activeArticle ? (
        <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <button
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-slate-300 hover:text-white transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights & Notes
          </button>

          <article className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-medium">
                {activeArticle.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {activeArticle.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-violet-400" />
                {activeArticle.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-6">
              {activeArticle.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 pb-8 border-b border-white/10">
              {activeArticle.excerpt}
            </p>

            {/* Key Takeaways Box */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-transparent border border-blue-500/20 p-5 sm:p-6 mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Key Notes & Takeaways
              </h2>
              <ul className="space-y-2.5">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-8">
              {activeArticle.sections.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-xl font-semibold text-white">{sec.heading}</h2>
                  <p className="text-slate-300 leading-relaxed text-base">{sec.body}</p>
                </section>
              ))}
            </div>

            {/* Author Footer */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white">
                  {PORTFOLIO_DATA.profile.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Written by {PORTFOLIO_DATA.profile.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    Meta Ads • Lead Generation • Digital Projects
                  </div>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-cyan-300 transition-all self-start sm:self-auto"
              >
                Discuss this topic →
              </button>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-white mb-5">More from Insights & Notes</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {PORTFOLIO_DATA.blogPosts
                .filter((p) => p.id !== activeArticle.id)
                .map((related) => (
                  <button
                    key={related.id}
                    onClick={() => {
                      setActiveArticle(related);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-blue-500/40 transition-all group"
                  >
                    <span className="text-xs text-cyan-400 font-medium">{related.category}</span>
                    <h4 className="text-base font-semibold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">{related.excerpt}</p>
                  </button>
                ))}
            </div>
          </div>
        </main>
      ) : (
        /* ================================================================== */
        /* MAIN PORTFOLIO LANDING PAGE */
        /* ================================================================== */
        <main className="relative z-10">
          {/* ============================================================== */}
          {/* 1. HERO SECTION */}
          {/* ============================================================== */}
          <section
            id="home"
            onMouseMove={handleHeroMouseMove}
            onMouseLeave={handleHeroMouseLeave}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:py-28"
          >
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Intro & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium tracking-wider text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {PORTFOLIO_DATA.profile.roleBadge}
                </div>

                <div className="space-y-3">
                  <p className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-blue-400">
                    {PORTFOLIO_DATA.profile.name}
                  </p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                    Building Digital{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300">
                      Experiences
                    </span>{' '}
                    &amp; Generating Leads
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  {PORTFOLIO_DATA.profile.subheadline}
                </p>

                {/* Primary & Secondary Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white shadow-xl shadow-blue-600/25 hover:shadow-cyan-500/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center gap-2"
                  >
                    <span>Explore My Work</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 hover:border-cyan-400/40 transition-all"
                  >
                    Get in Touch
                  </button>
                </div>

                {/* Core Pillars */}
                <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10">
                  {[
                    { label: 'Advertising', value: 'Meta Ads' },
                    { label: 'Acquisition', value: 'Lead Generation' },
                    { label: 'Marketing', value: 'Digital Campaigns' },
                    { label: 'Development', value: 'Web & CRM Tools' }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <div className="text-[11px] uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-slate-100 mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive 3D-Inspired Geometric Artwork */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  className="relative w-full max-w-md aspect-square flex items-center justify-center"
                  style={{ perspective: '1100px' }}
                >
                  {/* Ambient Back Glow */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-600/25 via-violet-600/25 to-cyan-400/20 blur-3xl animate-pulse" />

                  {/* 3D Interactive Stage */}
                  <div
                    className="relative w-full h-full rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 backdrop-blur-2xl p-6 flex flex-col justify-between shadow-2xl transition-transform duration-200 ease-out"
                    style={{
                      transform: `rotateY(${mouseOffset.x}deg) rotateX(${mouseOffset.y}deg)`
                    }}
                  >
                    {/* Top Floating Header inside 3D Card */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                        VS // DIGITAL STUDIO
                      </span>
                    </div>

                    {/* Center 3D Geometric Sculpture */}
                    <div className="relative my-auto py-8 flex items-center justify-center">
                      {/* Outer Orbital Ring */}
                      <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-cyan-400/30 animate-[spin_28s_linear_infinite] flex items-center justify-center">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full border border-violet-400/30 rotate-45 flex items-center justify-center">
                          {/* Core Prism */}
                          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-600 to-cyan-400 p-[1px] shadow-2xl shadow-blue-500/40 rotate-12 hover:rotate-45 transition-transform duration-500">
                            <div className="w-full h-full rounded-[15px] bg-[#080c16]/90 backdrop-blur-md flex flex-col items-center justify-center">
                              <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300">
                                VS
                              </span>
                              <span className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5">
                                PORTFOLIO
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Pill 1 */}
                      <div className="absolute -top-1 left-2 sm:left-4 px-3.5 py-2 rounded-xl bg-[#0e1424]/90 border border-blue-500/30 shadow-lg flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-400" />
                        <div className="text-xs">
                          <div className="font-semibold text-white">Meta Ads</div>
                          <div className="text-[10px] text-slate-400">Targeted Reach</div>
                        </div>
                      </div>

                      {/* Floating Pill 2 */}
                      <div className="absolute bottom-2 right-2 sm:right-4 px-3.5 py-2 rounded-xl bg-[#0e1424]/90 border border-cyan-500/30 shadow-lg flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <div className="text-xs">
                          <div className="font-semibold text-white">Lead Workflows</div>
                          <div className="text-[10px] text-slate-400">CRM & Web Apps</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Status Bar inside 3D Card */}
                    <div className="rounded-2xl bg-black/40 border border-white/10 p-3.5 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-slate-400">Focus Areas</div>
                        <div className="text-xs font-semibold text-white">
                          Campaigns • Funnels • Web Projects
                        </div>
                      </div>
                      <button
                        onClick={() => scrollToSection('meta-ads')}
                        className="p-2 rounded-lg bg-blue-500/20 text-cyan-300 hover:bg-blue-500/30 transition-colors"
                        title="Explore Lead Funnel"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 2. ABOUT ME SECTION */}
          {/* ============================================================== */}
          <section
            id="about"
            className="py-20 border-t border-white/10 bg-gradient-to-b from-white/[0.01] to-transparent"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Custom Initials Avatar Card */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-3xl bg-gradient-to-br from-blue-500/15 via-violet-500/10 to-cyan-500/10 border border-white/15 p-8 overflow-hidden">
                    <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 p-[2px] shadow-xl shadow-blue-500/20 shrink-0">
                        <div className="w-full h-full rounded-[14px] bg-[#080c16] flex items-center justify-center">
                          <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300">
                            {PORTFOLIO_DATA.profile.initials}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {PORTFOLIO_DATA.profile.name}
                        </h3>
                        <p className="text-sm text-cyan-300 mt-0.5">
                          Meta Ads &amp; Digital Projects
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {PORTFOLIO_DATA.about.lead}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PORTFOLIO_DATA.about.focusAreas.map((item, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-[#07090e]/70 border border-white/10"
                        >
                          <div className="text-[11px] font-medium uppercase tracking-wider text-blue-400">
                            {item.label}
                          </div>
                          <div className="text-xs font-semibold text-slate-100 mt-1">
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Bio Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                    Introduction
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    {PORTFOLIO_DATA.about.heading}
                  </h2>

                  <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                    {PORTFOLIO_DATA.about.paragraphs.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all"
                    >
                      <Mail className="w-4 h-4 text-blue-400" />
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                    <a
                      href={PORTFOLIO_DATA.profile.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-all"
                    >
                      <Instagram className="w-4 h-4 text-pink-400" />@{PORTFOLIO_DATA.profile.instagramUsername}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 3. SERVICES / WHAT I DO */}
          {/* ============================================================== */}
          <section id="services" className="py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-14">
                <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                  Capabilities &amp; Interests
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Services &amp; What I Do
                </h2>
                <p className="text-slate-400 text-base mt-3">
                  Combining structured social advertising with practical web projects and clean interface design.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PORTFOLIO_DATA.services.map((service) => (
                  <div
                    key={service.id}
                    className={`group relative rounded-3xl bg-white/[0.02] border border-white/10 ${service.borderAccent} p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
                  >
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                          {renderServiceIcon(service.iconName)}
                        </div>
                        <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                          {service.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-white/10 space-y-2">
                      {service.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 4. MY PROJECTS / PORTFOLIO SECTION */}
          {/* ============================================================== */}
          <section
            id="projects"
            className="py-20 border-t border-white/10 bg-gradient-to-b from-white/[0.015] to-transparent"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mb-12">
                <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                  Portfolio &amp; Builds
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Digital Projects
                </h2>
                <p className="text-slate-400 text-base mt-2">
                  Practical web applications and systems designed to organize leads, customer records, and daily workflows.
                </p>
              </div>

              {/* Project Showcase List */}
              <div className="space-y-8">
                {PORTFOLIO_DATA.projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-3xl bg-white/[0.03] border border-white/10 overflow-hidden shadow-2xl hover:border-blue-500/40 transition-all"
                  >
                    <div className="grid lg:grid-cols-12">
                      {/* Left Column: Interactive Visual CRM Preview */}
                      <div className="lg:col-span-6 bg-gradient-to-br from-[#0d1428] via-[#0b1020] to-[#07090e] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
                        {/* Top Bar of Mockup */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-semibold tracking-wide uppercase text-slate-300">
                              Property Dealer CRM • Workspace
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => setCrmTab('pipeline')}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                                crmTab === 'pipeline'
                                  ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/30'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              Leads
                            </button>
                            <button
                              onClick={() => setCrmTab('targets')}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                                crmTab === 'targets'
                                  ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/30'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              Daily Targets
                            </button>
                          </div>
                        </div>

                        {/* Interactive Preview Content */}
                        {crmTab === 'pipeline' ? (
                          <div className="space-y-3 my-auto">
                            <div className="grid grid-cols-3 gap-2.5">
                              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                                <div className="text-[10px] text-slate-400 uppercase">
                                  Active Leads
                                </div>
                                <div className="text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                                  <Users className="w-3.5 h-3.5 text-blue-400" />
                                  Organized
                                </div>
                              </div>
                              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                                <div className="text-[10px] text-slate-400 uppercase">
                                  Follow-Ups
                                </div>
                                <div className="text-sm font-bold text-cyan-300 mt-1 flex items-center gap-1.5">
                                  <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                                  Scheduled
                                </div>
                              </div>
                              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                                <div className="text-[10px] text-slate-400 uppercase">
                                  Site Visits
                                </div>
                                <div className="text-sm font-bold text-violet-300 mt-1 flex items-center gap-1.5">
                                  <CheckSquare className="w-3.5 h-3.5 text-violet-400" />
                                  Tracked
                                </div>
                              </div>
                            </div>

                            {/* Sample Lead Rows */}
                            <div className="rounded-2xl bg-[#07090e]/80 border border-white/10 p-3.5 space-y-2.5">
                              {[
                                {
                                  type: '3 BHK Buyer Inquiry',
                                  loc: 'Preferred Zone • Budget Logged',
                                  tag: 'Follow-Up Today',
                                  color: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30'
                                },
                                {
                                  type: 'Commercial Plot Inquiry',
                                  loc: 'Requirement Notes Saved',
                                  tag: 'Site Visit Scheduled',
                                  color: 'text-blue-300 bg-blue-500/15 border-blue-500/30'
                                },
                                {
                                  type: 'Residential Listing Follow-Up',
                                  loc: 'Customer Record Updated',
                                  tag: 'Call Logged',
                                  color: 'text-violet-300 bg-violet-500/15 border-violet-500/30'
                                }
                              ].map((row, rIdx) => (
                                <div
                                  key={rIdx}
                                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                                >
                                  <div>
                                    <div className="text-xs font-semibold text-white">
                                      {row.type}
                                    </div>
                                    <div className="text-[11px] text-slate-400">{row.loc}</div>
                                  </div>
                                  <span
                                    className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${row.color}`}
                                  >
                                    {row.tag}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3 my-auto">
                            <div className="rounded-2xl bg-[#07090e]/80 border border-white/10 p-4 space-y-3.5">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold text-white flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                                  Daily Target &amp; Activity Tracker
                                </span>
                                <span className="text-[11px] text-cyan-300">Structured Workflow</span>
                              </div>
                              {[
                                { label: 'New Property Enquiries Logged', pct: '100%' },
                                { label: 'Scheduled Customer Follow-Up Calls', pct: '85%' },
                                { label: 'Site Visit Confirmation Updates', pct: '75%' }
                              ].map((bar, bIdx) => (
                                <div key={bIdx} className="space-y-1">
                                  <div className="flex justify-between text-[11px] text-slate-300">
                                    <span>{bar.label}</span>
                                    <span className="text-cyan-300 font-mono">{bar.pct}</span>
                                  </div>
                                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                                    <div
                                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                      style={{ width: bar.pct }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Interactive System Preview</span>
                          <span className="text-cyan-300">Switch tabs above to inspect modules</span>
                        </div>
                      </div>

                      {/* Right Column: Project Details */}
                      <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                              {project.category}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {project.badge}
                            </span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            {project.title}
                          </h3>

                          <p className="text-slate-300 text-base leading-relaxed mb-6">
                            {project.description}
                          </p>

                          <div className="space-y-2.5 mb-8">
                            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                              Key Capabilities
                            </div>
                            {project.features.map((feat, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2.5 text-sm text-slate-300"
                              >
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-3">
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
                              >
                                <span>View Project</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            ) : (
                              <button
                                onClick={() => scrollToSection('contact')}
                                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-cyan-300 flex items-center gap-1.5 transition-all"
                              >
                                <span>Inquire About Walkthrough</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 5. META ADS & LEAD GENERATION SECTION */}
          {/* ============================================================== */}
          <section id="meta-ads" className="py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-14">
                <div className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">
                  Advertising Workflow
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Meta Ads &amp; Lead Generation Journey
                </h2>
                <p className="text-slate-300 text-base mt-3 leading-relaxed">
                  A structured look at how Facebook and Instagram advertising campaigns are planned, targeted, and connected to lead capture workflows.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Interactive Visual Funnel Diagram */}
                <div className="lg:col-span-5 rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Interactive Ad-to-Lead Funnel
                    </span>
                    <span className="text-xs text-cyan-400">Select a stage</span>
                  </div>

                  <div className="space-y-3">
                    {PORTFOLIO_DATA.funnelStages.map((stage, idx) => {
                      const isActive = activeFunnelStep === idx;
                      const widthClasses = [
                        'w-full',
                        'w-[94%] mx-auto',
                        'w-[88%] mx-auto',
                        'w-[82%] mx-auto'
                      ];
                      return (
                        <button
                          key={stage.step}
                          onClick={() => setActiveFunnelStep(idx)}
                          className={`${widthClasses[idx]} block text-left p-4 rounded-2xl border transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-600/25 via-violet-600/20 to-cyan-500/20 border-cyan-400/60 shadow-lg shadow-blue-500/10'
                              : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-cyan-300">
                              STAGE {stage.step}
                            </span>
                            <span
                              className={`text-[11px] px-2 py-0.5 rounded-full ${
                                isActive
                                  ? 'bg-cyan-400/20 text-cyan-200'
                                  : 'bg-white/5 text-slate-400'
                              }`}
                            >
                              {stage.subtitle}
                            </span>
                          </div>
                          <div className="text-sm font-bold text-white mt-1">
                            {stage.title}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Detailed Explanation of Active Stage */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 p-6 sm:p-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-semibold text-blue-300 mb-4">
                      Stage {PORTFOLIO_DATA.funnelStages[activeFunnelStep].step} •{' '}
                      {PORTFOLIO_DATA.funnelStages[activeFunnelStep].subtitle}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {PORTFOLIO_DATA.funnelStages[activeFunnelStep].title}
                    </h3>

                    <p className="text-slate-300 text-base leading-relaxed mb-6">
                      {PORTFOLIO_DATA.funnelStages[activeFunnelStep].summary}
                    </p>

                    <div className="space-y-3 pt-6 border-t border-white/10">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Focus Areas in This Stage
                      </div>
                      {PORTFOLIO_DATA.funnelStages[activeFunnelStep].points.map(
                        (pt, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#07090e]/60 border border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-200">{pt}</span>
                          </div>
                        )
                      )}
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-xs text-slate-400">
                        Step {activeFunnelStep + 1} of {PORTFOLIO_DATA.funnelStages.length}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setActiveFunnelStep((prev) =>
                              prev === 0 ? PORTFOLIO_DATA.funnelStages.length - 1 : prev - 1
                            )
                          }
                          className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() =>
                            setActiveFunnelStep(
                              (prev) => (prev + 1) % PORTFOLIO_DATA.funnelStages.length
                            )
                          }
                          className="px-3.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-xs text-cyan-300 font-medium"
                        >
                          Next Stage →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Realistic Context Note */}
                  <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 flex items-start gap-3.5">
                    <Sliders className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Practical Campaign Perspective:</strong>{' '}
                      Advertising performance and enquiry volume naturally depend on multiple real-world factors—including the strength of the offer, audience relevance, budget, local market demand, and consistent follow-up execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============================================================== */}
          {/* 6. BLOG SECTION: INSIGHTS & NOTES */}
          {/* ============================================================== */}
          <section
            id="blog"
            className="py-20 border-t border-white/10 bg-gradient-to-b from-white/[0.015] to-transparent"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
                    Articles &amp; Observations
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Insights &amp; Notes
                  </h2>
                  <p className="text-slate-400 text-base mt-2 max-w-2xl">
                    Notes on Meta Ads fundamentals, lead generation workflows, and building modern digital projects.
                  </p>
                </div>

                {/* Search Input */}
                <div className="relative w-full lg:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50"
                  />
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-600/20'
                        : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.07] border border-white/10'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              {filteredPosts.length === 0 ? (
                <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-12 text-center">
                  <p className="text-slate-300 font-medium">
                    No articles match your current filter.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 text-xs text-cyan-300 hover:bg-white/15"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-4">
                          <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-medium">
                            {post.category}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3">
                          {post.title}
                        </h3>

                        <p className="text-sm text-slate-300 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-xs text-slate-400">{post.date}</span>
                        <button
                          onClick={() => {
                            setActiveArticle(post);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Read Article</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ============================================================== */}
          {/* 7. CONTACT & SOCIAL LINKS SECTION */}
          {/* ============================================================== */}
          <section id="contact" className="py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-10">
                {/* Left Column: Direct Contact Cards */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                      Connect
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                      Get in Touch
                    </h2>
                    <p className="text-slate-300 text-base mt-3 leading-relaxed">
                      Interested in discussing Meta Ads campaigns, lead generation ideas, or digital web projects? Feel free to reach out via email or connect on Instagram.
                    </p>
                  </div>

                  {/* Email Card */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Direct Email
                      </span>
                      <Mail className="w-4 h-4 text-blue-400" />
                    </div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="block text-base sm:text-lg font-semibold text-white hover:text-cyan-300 transition-colors break-all"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                        className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all inline-flex items-center gap-1.5"
                      >
                        <span>Send Email</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 inline-flex items-center gap-1.5 transition-all"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Instagram Card */}
                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Instagram
                      </span>
                      <Instagram className="w-4 h-4 text-pink-400" />
                    </div>
                    <div className="text-lg font-semibold text-white">
                      @{PORTFOLIO_DATA.profile.instagramUsername}
                    </div>
                    <div className="pt-1">
                      <a
                        href={PORTFOLIO_DATA.profile.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 hover:opacity-95 text-xs font-semibold text-white shadow-lg shadow-violet-600/20 transition-all"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Connect on Instagram</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Message Form */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-10">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Send a Quick Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mb-6">
                      Fill out your details below to open a pre-addressed email directly to{' '}
                      <span className="text-slate-200">{PORTFOLIO_DATA.profile.email}</span>.
                    </p>

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, name: e.target.value })
                            }
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1.5">
                            Your Email
                          </label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, message: e.target.value })
                          }
                          placeholder="Share a few details about your project or inquiry..."
                          className="w-full px-4 py-3 rounded-xl bg-[#07090e] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/60"
                        />
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <button
                          type="submit"
                          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 hover:opacity-95 transition-all inline-flex items-center gap-2"
                        >
                          <Send className="w-4 h-4" />
                          <span>Compose Email Message</span>
                        </button>

                        {formStatus === 'opened' && (
                          <span className="text-xs text-cyan-300">
                            Email client opened with your message details.
                          </span>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="relative z-10 border-t border-white/10 bg-[#05070b] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center font-bold text-xs text-white">
              {PORTFOLIO_DATA.profile.initials}
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {PORTFOLIO_DATA.profile.name}
              </div>
              <div className="text-xs text-slate-400">
                Meta Ads • Lead Generation • Digital Projects
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="hover:text-white transition-colors"
            >
              Insights
            </button>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="hover:text-cyan-300 transition-colors"
            >
              {PORTFOLIO_DATA.profile.email}
            </a>
            <a
              href={PORTFOLIO_DATA.profile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              @{PORTFOLIO_DATA.profile.instagramUsername}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

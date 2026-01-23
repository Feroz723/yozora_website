import React from 'react';

// Translation objects
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      whyChooseUs: 'Why choose us',
      contact: 'Contact',
      darkMode: 'Dark mode',
      lightMode: 'Light mode'
    },
    hero: {
      tag: 'Future‑ready technology & web solutions',
      title: 'Launch bold ideas',
      titleHighlight: 'into orbit',
      description: 'Yozora Technologies designs and builds high‑performing web platforms, dashboards, and customer portals that help teams ship faster, sell smarter, and support users globally.',
      startProject: 'Start a project',
      viewApproach: 'View our approach',
      solutions: '50+ solutions',
      solutionsDesc: 'For SaaS, fintech, and product teams',
      cloudNative: 'Cloud‑native',
      cloudNativeDesc: 'Modern, scalable, and secure stacks',
      globalReady: 'Global ready',
      globalReadyDesc: 'Responsive, accessible, and multilingual'
    },
    excellence: {
      title: 'Technology excellence',
      heading: 'Reliable, future‑ready platforms engineered for growth.',
      description: 'We combine clean experience design with solid engineering so your product feels fast, trustworthy, and easy to extend—without sacrificing reliability or security.',
      cloud: {
        tag: 'Cloud & infrastructure',
        title: 'Cloud‑ready architecture',
        desc: 'We design resilient, observable systems that make it easier to deploy, monitor, and scale your applications in the cloud.'
      },
      web: {
        tag: 'Web engineering',
        title: 'High‑performing web apps',
        desc: 'From responsive marketing sites to complex dashboards, we optimize for speed, accessibility, and maintainability.'
      },
      data: {
        tag: 'Data & analytics',
        title: 'Data‑driven experiences',
        desc: 'We connect your product to the right data sources so teams can make faster, better decisions with clear interfaces.'
      }
    },
    services: {
      title: 'Why choose us',
      heading: 'A focused partner for modern, reliable web products.',
      description: 'Yozora Technologies combines thoughtful UX, strong engineering, and predictable delivery so your team can move quickly without losing quality.',
      productMinded: {
        title: 'Product‑minded engineering',
        desc: 'We think beyond tickets and features, helping you balance technical choices with roadmap, UX, and business goals.',
        items: ['Hands‑on collaboration with your team', 'Clear trade‑off explanations', 'Decisions tied to outcomes']
      },
      modernStack: {
        title: 'Modern, stable stack',
        desc: 'React, TypeScript, and cloud‑native tooling give you a stack that is fast today and maintainable tomorrow.',
        items: ['Reusable component systems', 'Performance‑first implementation', 'Production‑grade monitoring in mind']
      },
      reliableDelivery: {
        title: 'Reliable delivery',
        desc: 'We ship in small, visible steps so you always know what is done, what is next, and how it impacts your users.',
        items: ['Short feedback loops', 'Transparent progress updates', 'Post‑launch support options']
      }
    },
    about: {
      title: 'About Yozora',
      heading: 'A small team building quietly powerful web experiences.',
      description: 'Yozora Technologies is a Hyderabad‑based studio focused on modern web products – from launch‑ready marketing sites to internal tools and dashboards that teams actually enjoy using.',
      howWeWork: {
        title: 'How we work',
        desc: 'We keep the team lean and the feedback loops short. You always talk directly with the people designing and building your product.'
      },
      whatWeCare: {
        title: 'What we care about',
        desc: 'Clear UX, strong engineering foundations, and maintainable frontends. We would rather ship one solid feature than three fragile ones.'
      },
      whoWeWork: {
        title: 'Who we work with',
        desc: 'Early‑stage startups, SaaS and fintech teams, and digital studios who want a long‑term partner they can trust with their web stack.'
      }
    },
    contact: {
      title: 'Contact',
      heading: 'Tell us about the platform or product you\'re planning.',
      description: 'Share a few lines about your business, users, and goals. We\'ll respond within two business days with practical next steps and a suggested engagement model.',
      typicalTimelines: 'Typical timelines',
      timelineValue: '3–6 weeks',
      timelineDesc: 'From discovery to first release for a focused web solution.',
      idealProjects: 'Ideal projects',
      idealValue: 'Early & growing teams',
      idealDesc: 'SaaS, fintech, and product teams who value reliability.',
      projectOutline: 'Project outline',
      simpleForm: 'Simple form',
      name: 'Name',
      namePlaceholder: 'Alex from Yozora',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      building: 'What are you building?',
      buildingPlaceholder: 'Tell us about your product, current stack (if any), and what a successful launch would look like.',
      timeline: 'Ideal timeline',
      timelineOptions: ['ASAP (2–3 weeks)', '1–2 months', '3+ months / exploring'],
      budget: 'Budget range (optional)',
      budgetOptions: ['Under $4k', '$4k–$8k', '$8k–$15k', '$15k+'],
      shareProject: 'Share project details',
      contactUs: 'Contact us',
      privacy: 'We\'ll only use your details to respond to this enquiry. No newsletters, no sequences.',
      getInTouch: 'Get in Touch',
      getInTouchDesc: 'Ready to start your project? Connect with Yozora Technologies.',
      emailUs: 'Email Us',
      callUs: 'Call Us',
      location: 'Location',
      responseTime: 'We typically respond within 24 hours.'
    },
    footer: {
      description: 'Transforming ideas into powerful digital experiences. We specialize in building scalable web applications, intuitive interfaces, and robust solutions that drive business growth.',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contact: 'Contact',
      followUs: 'Follow us on social media',
      copyright: 'All rights reserved. | Crafted with passion for innovative web solutions'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      whyChooseUs: 'हमें क्यों चुनें',
      contact: 'संपर्क करें',
      darkMode: 'डार्क मोड',
      lightMode: 'लाइट मोड'
    },
    hero: {
      tag: 'भविष्य-तैयार प्रौद्योगिकी और वेब समाधान',
      title: 'साहसिक विचारों को',
      titleHighlight: 'कक्षा में लॉन्च करें',
      description: 'योज़ोरा टेक्नोलॉजीज उच्च-प्रदर्शन वेब प्लेटफॉर्म, डैशबोर्ड और ग्राहक पोर्टल डिज़ाइन और निर्माण करती है जो टीमों को तेज़ी से शिप करने, स्मार्ट बेचने और वैश्विक रूप से उपयोगकर्ताओं का समर्थन करने में मदद करती है।',
      startProject: 'एक प्रोजेक्ट शुरू करें',
      viewApproach: 'हमारा दृष्टिकोण देखें',
      solutions: '50+ समाधान',
      solutionsDesc: 'SaaS, फिनटेक और उत्पाद टीमों के लिए',
      cloudNative: 'क्लाउड-नेटिव',
      cloudNativeDesc: 'आधुनिक, स्केलेबल और सुरक्षित स्टैक',
      globalReady: 'वैश्विक रूप से तैयार',
      globalReadyDesc: 'उत्तरदायी, सुलभ और बहुभाषी'
    },
    excellence: {
      title: 'प्रौद्योगिकी उत्कृष्टता',
      heading: 'विश्वसनीय, भविष्य-तैयार प्लेटफॉर्म विकास के लिए इंजीनियर किए गए।',
      description: 'हम साफ अनुभव डिज़ाइन को मजबूत इंजीनियरिंग के साथ जोड़ते हैं ताकि आपका उत्पाद तेज़, विश्वसनीय और विस्तार करने में आसान लगे—विश्वसनीयता या सुरक्षा का त्याग किए बिना।',
      cloud: {
        tag: 'क्लाउड और अवसंरचना',
        title: 'क्लाउड-तैयार आर्किटेक्चर',
        desc: 'हम लचीली, अवलोकनीय प्रणालियाँ डिज़ाइन करते हैं जो क्लाउड में आपके अनुप्रयोगों को तैनात करने, निगरानी करने और स्केल करने में आसान बनाती हैं।'
      },
      web: {
        tag: 'वेब इंजीनियरिंग',
        title: 'उच्च-प्रदर्शन वेब ऐप',
        desc: 'उत्तरदायी मार्केटिंग साइटों से लेकर जटिल डैशबोर्ड तक, हम गति, सुलभता और रखरखाव के लिए अनुकूलन करते हैं।'
      },
      data: {
        tag: 'डेटा और विश्लेषण',
        title: 'डेटा-संचालित अनुभव',
        desc: 'हम आपके उत्पाद को सही डेटा स्रोतों से जोड़ते हैं ताकि टीमें स्पष्ट इंटरफेस के साथ तेज़, बेहतर निर्णय ले सकें।'
      }
    },
    services: {
      title: 'हमें क्यों चुनें',
      heading: 'आधुनिक, विश्वसनीय वेब उत्पादों के लिए एक केंद्रित साझेदार।',
      description: 'योज़ोरा टेक्नोलॉजीज विचारशील UX, मजबूत इंजीनियरिंग और अनुमानित वितरण को जोड़ती है ताकि आपकी टीम गुणवत्ता खोए बिना तेज़ी से आगे बढ़ सके।',
      productMinded: {
        title: 'उत्पाद-मन वाली इंजीनियरिंग',
        desc: 'हम टिकटों और सुविधाओं से परे सोचते हैं, आपको रोडमैप, UX और व्यावसायिक लक्ष्यों के साथ तकनीकी विकल्पों को संतुलित करने में मदद करते हैं।',
        items: ['आपकी टीम के साथ हाथों-हाथ सहयोग', 'स्पष्ट व्यापार-बंद स्पष्टीकरण', 'परिणामों से जुड़े निर्णय']
      },
      modernStack: {
        title: 'आधुनिक, स्थिर स्टैक',
        desc: 'React, TypeScript और क्लाउड-नेटिव टूलिंग आपको एक स्टैक देती है जो आज तेज़ है और कल रखरखाव योग्य है।',
        items: ['पुन: प्रयोज्य घटक प्रणाली', 'प्रदर्शन-प्रथम कार्यान्वयन', 'उत्पादन-ग्रेड निगरानी को ध्यान में रखते हुए']
      },
      reliableDelivery: {
        title: 'विश्वसनीय वितरण',
        desc: 'हम छोटे, दृश्यमान चरणों में शिप करते हैं ताकि आप हमेशा जान सकें कि क्या किया गया है, क्या अगला है, और यह आपके उपयोगकर्ताओं को कैसे प्रभावित करता है।',
        items: ['छोटे फीडबैक लूप', 'पारदर्शी प्रगति अपडेट', 'लॉन्च के बाद समर्थन विकल्प']
      }
    },
    about: {
      title: 'योज़ोरा के बारे में',
      heading: 'एक छोटी टीम शांत रूप से शक्तिशाली वेब अनुभव बना रही है।',
      description: 'योज़ोरा टेक्नोलॉजीज एक हैदराबाद-आधारित स्टूडियो है जो आधुनिक वेब उत्पादों पर केंद्रित है – लॉन्च-तैयार मार्केटिंग साइटों से लेकर आंतरिक उपकरणों और डैशबोर्ड तक जिनका उपयोग करने में टीमें वास्तव में आनंद लेती हैं।',
      howWeWork: {
        title: 'हम कैसे काम करते हैं',
        desc: 'हम टीम को दुबला रखते हैं और फीडबैक लूप को छोटा रखते हैं। आप हमेशा सीधे उन लोगों से बात करते हैं जो आपके उत्पाद को डिज़ाइन और निर्माण कर रहे हैं।'
      },
      whatWeCare: {
        title: 'हम किसकी परवाह करते हैं',
        desc: 'स्पष्ट UX, मजबूत इंजीनियरिंग नींव और रखरखाव योग्य फ्रंटएंड। हम तीन नाजुक सुविधाओं के बजाय एक ठोस सुविधा शिप करना पसंद करेंगे।'
      },
      whoWeWork: {
        title: 'हम किसके साथ काम करते हैं',
        desc: 'प्रारंभिक चरण के स्टार्टअप, SaaS और फिनटेक टीमें, और डिजिटल स्टूडियो जो एक दीर्घकालिक साझेदार चाहते हैं जिस पर वे अपने वेब स्टैक के साथ भरोसा कर सकें।'
      }
    },
    contact: {
      title: 'संपर्क करें',
      heading: 'हमें उस प्लेटफॉर्म या उत्पाद के बारे में बताएं जिसकी आप योजना बना रहे हैं।',
      description: 'अपने व्यवसाय, उपयोगकर्ताओं और लक्ष्यों के बारे में कुछ पंक्तियाँ साझा करें। हम दो व्यावसायिक दिनों के भीतर व्यावहारिक अगले चरणों और एक सुझाए गए सगाई मॉडल के साथ जवाब देंगे।',
      typicalTimelines: 'सामान्य समयसीमा',
      timelineValue: '3–6 सप्ताह',
      timelineDesc: 'एक केंद्रित वेब समाधान के लिए खोज से पहली रिलीज़ तक।',
      idealProjects: 'आदर्श परियोजनाएं',
      idealValue: 'प्रारंभिक और बढ़ती टीमें',
      idealDesc: 'SaaS, फिनटेक और उत्पाद टीमें जो विश्वसनीयता को महत्व देती हैं।',
      projectOutline: 'परियोजना रूपरेखा',
      simpleForm: 'सरल फॉर्म',
      name: 'नाम',
      namePlaceholder: 'योज़ोरा से अलेक्स',
      email: 'ईमेल',
      emailPlaceholder: 'you@company.com',
      building: 'आप क्या बना रहे हैं?',
      buildingPlaceholder: 'हमें अपने उत्पाद, वर्तमान स्टैक (यदि कोई हो), और एक सफल लॉन्च कैसा दिखेगा, इसके बारे में बताएं।',
      timeline: 'आदर्श समयसीमा',
      timelineOptions: ['जल्द से जल्द (2–3 सप्ताह)', '1–2 महीने', '3+ महीने / खोज रहे हैं'],
      budget: 'बजट सीमा (वैकल्पिक)',
      budgetOptions: ['$4k से कम', '$4k–$8k', '$8k–$15k', '$15k+'],
      shareProject: 'परियोजना विवरण साझा करें',
      contactUs: 'संपर्क करें',
      privacy: 'हम आपकी जानकारी का उपयोग केवल इस पूछताछ का जवाब देने के लिए करेंगे। कोई न्यूज़लेटर नहीं, कोई अनुक्रम नहीं।',
      getInTouch: 'संपर्क में रहें',
      getInTouchDesc: 'अपनी परियोजना शुरू करने के लिए तैयार? योज़ोरा टेक्नोलॉजीज से जुड़ें।',
      emailUs: 'हमें ईमेल करें',
      callUs: 'हमें कॉल करें',
      location: 'स्थान',
      responseTime: 'हम आमतौर पर 24 घंटों के भीतर जवाब देते हैं।'
    },
    footer: {
      description: 'विचारों को शक्तिशाली डिजिटल अनुभवों में बदलना। हम स्केलेबल वेब अनुप्रयोग, सहज इंटरफेस और मजबूत समाधान बनाने में विशेषज्ञ हैं जो व्यावसायिक विकास को बढ़ावा देते हैं।',
      quickLinks: 'त्वरित लिंक',
      ourServices: 'हमारी सेवाएं',
      contact: 'संपर्क',
      followUs: 'सोशल मीडिया पर हमें फॉलो करें',
      copyright: 'सभी अधिकार सुरक्षित। | नवाचारी वेब समाधानों के लिए जुनून के साथ तैयार किया गया'
    }
  }
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Navbar({ theme, onToggleTheme, language, onLanguageChange }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const t = translations[language];

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangDropdownOpen && !event.target.closest('.lang-dropdown')) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangDropdownOpen]);

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'excellence', label: t.nav.services },
    { id: 'services', label: t.nav.whyChooseUs },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-xl bg-background/80 border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-background shadow-glow overflow-hidden p-0">
            <img
              src="/logo.png"
              alt="Yozora logo"
              className="h-full w-full object-cover scale-110"
            />
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
              Yozora
            </span>
            <span className="text-[11px] text-muted/80">Technology &amp; web solutions</span>
          </div>
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 text-xs font-medium text-muted sm:flex">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="transition-colors hover:text-primarySoft"
            >
              {link.label}
            </button>
          ))}
          <div className="lang-dropdown relative">
            <button
              type="button"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-muted transition hover:border-primary/70 hover:text-foreground"
            >
              <span className="text-xs">🌐</span>
              <span>{language === 'en' ? 'English' : 'हिंदी'}</span>
              <span className="text-[10px]">▼</span>
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border/70 bg-background/95 shadow-lg backdrop-blur-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('en');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-[11px] transition ${
                    language === 'en'
                      ? 'bg-primary/20 text-primarySoft font-semibold'
                      : 'text-muted hover:bg-surfaceAlt/60 hover:text-foreground'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('hi');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-[11px] transition ${
                    language === 'hi'
                      ? 'bg-primary/20 text-primarySoft font-semibold'
                      : 'text-muted hover:bg-surfaceAlt/60 hover:text-foreground'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-muted transition hover:border-primary/70 hover:text-foreground"
          >
            <span className="text-xs">
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
            <span>{theme === 'dark' ? t.nav.darkMode : t.nav.lightMode}</span>
          </button>
        </div>

        {/* Mobile Controls - Icons Only */}
        <div className="sm:hidden flex items-center gap-2">
          {/* Language Selector - Icon Only */}
          <div className="lang-dropdown relative">
            <button
              type="button"
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="inline-flex items-center justify-center rounded-lg border border-border/70 bg-background/80 p-2 text-foreground transition hover:border-primary/70"
              aria-label="Select language"
            >
              <span className="text-lg">🌐</span>
            </button>
            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border/70 bg-background/95 shadow-lg backdrop-blur-xl overflow-hidden z-50">
                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('en');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-[11px] transition ${
                    language === 'en'
                      ? 'bg-primary/20 text-primarySoft font-semibold'
                      : 'text-muted hover:bg-surfaceAlt/60 hover:text-foreground'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onLanguageChange('hi');
                    setIsLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-[11px] transition ${
                    language === 'hi'
                      ? 'bg-primary/20 text-primarySoft font-semibold'
                      : 'text-muted hover:bg-surfaceAlt/60 hover:text-foreground'
                  }`}
                >
                  हिंदी
                </button>
              </div>
            )}
          </div>
          
          {/* Theme Toggle - Icon Only */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center rounded-lg border border-border/70 bg-background/80 p-2 text-foreground transition hover:border-primary/70"
            aria-label="Toggle theme"
          >
            <span className="text-lg">
              {theme === 'dark' ? '🌙' : '☀️'}
            </span>
          </button>
          
          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-border/70 bg-background/80 p-2 text-foreground transition hover:border-primary/70"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-3">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-muted rounded-lg transition-colors hover:bg-surfaceAlt/60 hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ language }) {
  const t = translations[language];
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 h-80 w-80 rounded-full bg-primarySoft/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto flex w-full flex-col gap-10 px-4 pt-20 sm:px-6 sm:pt-24 md:pt-8 md:flex-row md:items-center md:gap-16 lg:px-10">
        <div className="flex-1 space-y-6">
          <p className="tag-pill w-fit border-primary/30 bg-primary/10 text-primarySoft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.hero.tag}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t.hero.title}
            <span className="bg-gradient-to-r from-primarySoft via-accentSoft to-primary bg-clip-text text-transparent">
              {' '}
              {t.hero.titleHighlight}
            </span>
            .
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-white shadow-glow transition hover:bg-primarySoft"
            >
              {t.hero.startProject}
              <span className="text-base">↗</span>
            </button>
            <button
              onClick={() => scrollToSection('excellence')}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surfaceAlt/60 px-5 py-2.5 text-xs font-medium text-muted transition hover:border-primary/50 hover:text-foreground"
            >
              {t.hero.viewApproach}
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-xs text-muted">
            <div className="space-y-1">
              <div className="font-semibold text-foreground">{t.hero.solutions}</div>
              <div>{t.hero.solutionsDesc}</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-foreground">{t.hero.cloudNative}</div>
              <div>{t.hero.cloudNativeDesc}</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-foreground">{t.hero.globalReady}</div>
              <div>{t.hero.globalReadyDesc}</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-full border border-border/70 bg-transparent shadow-2xl shadow-primary/20 overflow-hidden flex items-center justify-center p-8 md:p-12 lg:p-16 group">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent via-primarySoft to-primary bg-[length:200%_200%] animate-spin-slow opacity-20 blur-xl" />
            
            {/* Multi-layer animated gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-primarySoft/15 animate-pulse rounded-full" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,75,255,0.25),_transparent_70%)] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_rgba(107,75,255,0.1)_0deg,_rgba(34,211,238,0.1)_120deg,_rgba(151,130,255,0.1)_240deg,_rgba(107,75,255,0.1)_360deg)] rounded-full animate-spin-slower" />
            
            {/* Enhanced glowing orbs with movement */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" style={{ animationDuration: '4s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-primarySoft/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
            
            {/* Logo with enhanced AI effects */}
            <div className="relative z-10 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 w-full h-full flex items-center justify-center">
              {/* Multi-layer glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent/40 to-primarySoft/40 blur-3xl opacity-60 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-primarySoft/30 blur-2xl opacity-40 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full animate-shimmer transform -skew-x-12" />
              
              <img
                src="/logo.png"
                alt="Yozora Technologies Logo"
                className="relative w-full h-full max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl filter brightness-110 contrast-110 saturate-110 group-hover:brightness-120 group-hover:contrast-120 transition-all duration-500"
                loading="lazy"
              />
              
              {/* Holographic overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            </div>
            
            {/* Enhanced floating particles with more variety */}
            <div className="absolute inset-0 pointer-events-none rounded-full">
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accent/60 rounded-full animate-ping shadow-lg shadow-accent/50" style={{ animationDelay: '0s', animationDuration: '3s' }} />
              <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping shadow-lg shadow-primary/50" style={{ animationDelay: '1s', animationDuration: '4s' }} />
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primarySoft/60 rounded-full animate-ping shadow-lg shadow-primarySoft/50" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
              <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-accent/50 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
              <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
            </div>
            
            {/* Animated border with rotating gradient */}
            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-primary/40 via-accent/40 to-primarySoft/40 animate-spin-slow opacity-50 blur-sm" />
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500" />
            <div className="absolute inset-[2px] rounded-full border border-primary/20 group-hover:border-primary/50 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Excellence({ language }) {
  const t = translations[language];
  const pillars = [
    {
      title: t.excellence.cloud.title,
      desc: t.excellence.cloud.desc,
      tag: t.excellence.cloud.tag,
      img: 'https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: t.excellence.web.title,
      desc: t.excellence.web.desc,
      tag: t.excellence.web.tag,
      img: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: t.excellence.data.title,
      desc: t.excellence.data.desc,
      tag: t.excellence.data.tag,
      img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  return (
    <section id="excellence" className="relative border-y border-border/60 bg-surfaceAlt/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.22),_transparent_55%)]" />
      <div className="relative mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <p className="section-title">{t.excellence.title}</p>
          <h2 className="section-heading max-w-2xl">
            {t.excellence.heading}
          </h2>
          <p className="max-w-2xl text-sm text-muted">
            {t.excellence.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              id={`service-${index === 0 ? 'cloud' : index === 1 ? 'web' : 'data'}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-surfaceAlt/60 shadow-lg shadow-black/40"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="tag-pill w-fit text-[10px] uppercase tracking-[0.18em]">
                  {pillar.tag}
                </span>
                <h3 className="text-sm font-semibold text-foreground sm:text-base">
                  {pillar.title}
                </h3>
                <p className="flex-1 text-xs leading-relaxed text-muted sm:text-sm">
                  {pillar.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ language }) {
  const t = translations[language];
  const reasons = [
    {
      title: t.services.productMinded.title,
      desc: t.services.productMinded.desc,
      items: t.services.productMinded.items
    },
    {
      title: t.services.modernStack.title,
      desc: t.services.modernStack.desc,
      items: t.services.modernStack.items
    },
    {
      title: t.services.reliableDelivery.title,
      desc: t.services.reliableDelivery.desc,
      items: t.services.reliableDelivery.items
    }
  ];

  return (
    <section id="services" className="bg-background">
      <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
          <p className="section-title">{t.services.title}</p>
          <h2 className="section-heading max-w-2xl">
            {t.services.heading}
          </h2>
          <p className="max-w-2xl text-sm text-muted">
            {t.services.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="flex flex-col rounded-3xl border border-border/70 bg-surfaceAlt/50 p-5 shadow-lg shadow-black/40 transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-glow"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary/60 via-accent/60 to-primarySoft/70 shadow-md">
                  {index === 0 && (
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 text-white/95"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21h6M12 2a7 7 0 0 0-4 12.743V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.257A7 7 0 0 0 12 2Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 text-white/95"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3v3M5.636 5.636l2.121 2.121M3 12h3m11-6.364-2.121 2.121M18 12h3M9 13a3 3 0 1 1 6 0 4.5 4.5 0 0 1-1.5 3.372L12 21l-1.5-4.628A4.5 4.5 0 0 1 9 13Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 text-white/95"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13.5 9 17l10-10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-base font-semibold text-foreground">{reason.title}</h3>
              </div>
              <p className="mb-4 text-xs leading-relaxed text-muted sm:text-sm">{reason.desc}</p>
              <ul className="mt-auto space-y-1.5 text-xs text-muted">
                {reason.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ language }) {
  const t = translations[language];
  return (
    <section id="about" className="relative border-y border-border/60 bg-surfaceAlt/40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(107,75,255,0.15),_transparent_60%)]" />
      <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="relative mb-12 flex flex-col items-center gap-4 text-center">
          <p className="section-title">{t.about.title}</p>
          <h2 className="section-heading max-w-2xl">
            {t.about.heading}
          </h2>
          <p className="max-w-2xl text-sm text-muted">
            {t.about.description}
          </p>
        </div>
        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative flex flex-col rounded-3xl border border-border/70 bg-gradient-to-br from-background/90 via-surfaceAlt/60 to-background/90 p-6 shadow-lg shadow-black/40 transform transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 hover:shadow-glow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary/20 via-accent/20 to-primarySoft/20">
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-primarySoft"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{t.about.howWeWork.title}</h3>
            <p className="text-xs leading-relaxed text-muted sm:text-sm">
              {t.about.howWeWork.desc}
            </p>
          </div>
          <div className="group relative flex flex-col rounded-3xl border border-border/70 bg-gradient-to-br from-background/90 via-surfaceAlt/60 to-background/90 p-6 shadow-lg shadow-black/40 transform transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 hover:shadow-glow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-accent/20 via-primary/20 to-accentSoft/20">
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{t.about.whatWeCare.title}</h3>
            <p className="text-xs leading-relaxed text-muted sm:text-sm">
              {t.about.whatWeCare.desc}
            </p>
          </div>
          <div className="group relative flex flex-col rounded-3xl border border-border/70 bg-gradient-to-br from-background/90 via-surfaceAlt/60 to-background/90 p-6 shadow-lg shadow-black/40 transform transition-all duration-300 hover:scale-[1.02] hover:border-primary/60 hover:shadow-glow md:col-span-2 lg:col-span-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-primarySoft/20 via-primary/20 to-accent/20">
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-primarySoft"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-base font-semibold text-foreground">{t.about.whoWeWork.title}</h3>
            <p className="text-xs leading-relaxed text-muted sm:text-sm">
              {t.about.whoWeWork.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ language }) {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const t = translations[language];

  return (
    <section id="contact" className="border-t border-border/60 bg-surfaceAlt/40">
      <div className="mx-auto w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <p className="section-title text-left">{t.contact.title}</p>
            <h2 className="section-heading max-w-xl">
              {t.contact.heading}
            </h2>
            <p className="max-w-lg text-sm text-muted">
              {t.contact.description}
            </p>
            <div className="mt-4 grid gap-4 text-xs text-muted sm:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                {t.contact.typicalTimelines}
              </div>
              <div className="text-sm text-foreground">{t.contact.timelineValue}</div>
              <div className="mt-1 text-xs text-muted">
                {t.contact.timelineDesc}
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-muted">
                {t.contact.idealProjects}
              </div>
              <div className="text-sm text-foreground">{t.contact.idealValue}</div>
              <div className="mt-1 text-xs text-muted">
                {t.contact.idealDesc}
                </div>
              </div>
            </div>
            {/* Contact-related image */}
            <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaboration and communication"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <form
            className="glass-panel relative space-y-4 p-5 sm:p-6"
            onSubmit={e => e.preventDefault()}
          >
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{t.contact.projectOutline}</span>
              <span className="rounded-full bg-background/70 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                {t.contact.simpleForm}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs text-muted" htmlFor="name">
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground outline-none ring-0 transition focus:border-primary/70"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted" htmlFor="email">
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground outline-none ring-0 transition focus:border-primary/70"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-muted" htmlFor="about">
                {t.contact.building}
              </label>
              <textarea
                id="about"
                rows={4}
                className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground outline-none ring-0 transition focus:border-primary/70"
                placeholder={t.contact.buildingPlaceholder}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs text-muted" htmlFor="timeline">
                  {t.contact.timeline}
                </label>
                <select
                  id="timeline"
                  className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground outline-none ring-0 transition focus:border-primary/70"
                >
                  {t.contact.timelineOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-muted" htmlFor="budget">
                  {t.contact.budget}
                </label>
                <select
                  id="budget"
                  className="w-full rounded-xl border border-border/70 bg-background/80 px-3 py-2 text-xs text-foreground outline-none ring-0 transition focus:border-primary/70"
                >
                  {t.contact.budgetOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-glow transition hover:bg-primarySoft"
              >
                {t.contact.shareProject}
                <span className="text-base">↗</span>
              </button>
              <button
                type="button"
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-glow transition hover:bg-primarySoft"
              >
                {t.contact.contactUs}
              </button>
            </div>
            <p className="text-[11px] text-muted">
              {t.contact.privacy}
            </p>
          </form>
        </div>
        <footer className="mt-16 border-t border-border/60 bg-surfaceAlt/60 pt-10 pb-6">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
              {/* Column 1: Company Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-background border border-border/70 p-0">
                    <img
                      src="/logo.png"
                      alt="Yozora Technologies"
                      className="h-full w-full object-cover scale-110"
                    />
                  </div>
                  <span className="text-base font-semibold text-foreground">Yozora Technologies</span>
                </div>
                <p className="text-xs leading-relaxed text-muted max-w-xs">
                  {t.footer.description}
                </p>
                <div className="space-y-2 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <span className="text-accent">📧</span>
                    <span>admin@yozoratech.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent">📞</span>
                    <span>+91 86888 23142</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{t.footer.quickLinks}</h3>
                  <div className="flex gap-1 mb-3">
                    <div className="h-0.5 w-6 bg-accent" />
                    <div className="h-0.5 w-6 bg-primary" />
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-muted">
                  <li>
                    <button
                      onClick={() => scrollToSection('home')}
                      className="hover:text-foreground transition-colors"
                    >
                      {t.nav.home}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('excellence')}
                      className="hover:text-foreground transition-colors"
                    >
                      {t.nav.services}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="hover:text-foreground transition-colors"
                    >
                      {t.nav.about}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="hover:text-foreground transition-colors"
                    >
                      {t.nav.contact}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 3: Our Services */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{t.footer.ourServices}</h3>
                  <div className="flex gap-1 mb-3">
                    <div className="h-0.5 w-6 bg-accent" />
                    <div className="h-0.5 w-6 bg-primary" />
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-muted">
                  <li>
                    <button
                      onClick={() => {
                        const el = document.getElementById('service-cloud');
                        if (el) {
                          const yOffset = -80;
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="hover:text-primarySoft hover:underline transition-all text-left cursor-pointer"
                    >
                      {t.excellence.cloud.title}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const el = document.getElementById('service-web');
                        if (el) {
                          const yOffset = -80;
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="hover:text-primarySoft hover:underline transition-all text-left cursor-pointer"
                    >
                      {t.excellence.web.title}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        const el = document.getElementById('service-data');
                        if (el) {
                          const yOffset = -80;
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="hover:text-primarySoft hover:underline transition-all text-left cursor-pointer"
                    >
                      {t.excellence.data.title}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact/Follow Us */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{t.footer.contact}</h3>
                  <div className="flex gap-1 mb-3">
                    <div className="h-0.5 w-6 bg-accent" />
                    <div className="h-0.5 w-6 bg-primary" />
                  </div>
                </div>
                <div className="space-y-3 text-xs text-muted">
                  <p>{t.footer.followUs}</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/company/yozora-technologies-private-limited/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                          fill="#0077B5"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.google.com/search?q=Yozora+Technologies+Private+Limited"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
                      aria-label="Google"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-border/60 pt-6 text-center">
              <p className="text-xs text-muted">
                © {new Date().getFullYear()} Yozora Technologies. {t.footer.copyright}
              </p>
            </div>
          </div>
        </footer>
      </div>
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md rounded-3xl bg-surfaceAlt/95 p-6 shadow-2xl border border-border/70">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground text-center">{t.contact.getInTouch}</h3>
                <p className="text-xs text-muted text-center">
                  {t.contact.getInTouchDesc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="ml-2 rounded-full bg-background/80 p-1.5 text-xs text-muted hover:text-foreground hover:bg-border/60"
              >
                ✕
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-2xl bg-background/80 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  📧
                </div>
                <div className="text-xs">
                  <p className="text-muted mb-0.5">{t.contact.emailUs}</p>
                  <p className="text-foreground font-semibold">admin@yozoratech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background/80 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                  📞
                </div>
                <div className="text-xs">
                  <p className="text-muted mb-0.5">{t.contact.callUs}</p>
                  <p className="text-foreground font-semibold">+91 86888 23142</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-background/80 px-4 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                  📍
                </div>
                <div className="text-xs">
                  <p className="text-muted mb-0.5">{t.contact.location}</p>
                  <p className="text-foreground font-semibold">Hyderabad, India</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] text-muted">
              {t.contact.responseTime}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = React.useState('dark');
  const [language, setLanguage] = React.useState('en');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Excellence language={language} />
        <Services language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
}


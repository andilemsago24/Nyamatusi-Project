import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#E75317", color: "#ffffff" }} className="w-full">
      <div style={{ maxWidth: "1920px", margin: "0 auto", padding: "80px 80px 50px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
          <div>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Useful information
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Travel information</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Safari logistics</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Privacy policy</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Terms and conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Sitemap
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "20px" }}><a href="#home" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Home</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#about" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>About</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#itineraries" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Suggested itenaries</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#gallery" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Get in touch
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Plan your safari</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Contact us</a></li>
              <li style={{ marginBottom: "20px" }}><a href="#" style={{ color: "#ffffff", textDecoration: "none", fontSize: "20px" }}>Careers</a></li>
            </ul>
          </div>
          <div style={{ maxWidth: "567px" }}>
            <h3 style={{ fontSize: "25px", fontStyle: "italic", fontWeight: 700, marginBottom: "36px", letterSpacing: "0.5px" }}>
              Sign up for our newsletter
            </h3>
            <form style={{ display: "flex", width: "100%", height: "66px" }}>
              <input type="email" placeholder="Email" style={{ flex: 1, background: "#ffffff", color: "#1a1a1a", border: "none", padding: "0 24px", fontSize: "20px", outline: "none" }} />
              <button type="submit" style={{ backgroundColor: "#3E372D", color: "#ffffff", border: "none", padding: "0 36px", fontSize: "21px", fontStyle: "italic", fontWeight: 600, cursor: "pointer" }}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", borderTop: "1px solid #ffffff" }} />
      <div style={{ width: "100%", padding: "24px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" strokeWidth="2.2" />
        </svg>
        <span style={{ fontSize: "18px" }}>Copyright 2022 Nyamatusi camp. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'compare' | 'page'>('preview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [viewportWidth, setViewportWidth] = useState<'100%' | '1920px' | '1280px' | '768px' | '390px'>('100%');
  const [overlayOpacity, setOverlayOpacity] = useState<number>(50);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [comparisonMode, setComparisonMode] = useState<'slider' | 'onion' | 'side-by-side'>('slider');

  const reactCode = `import React, { useState } from 'react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer
      className="w-full bg-[#E75317] text-white select-none"
      style={{
        fontFamily:
          '"Century Gothic", CenturyGothic, AppleGothic, "URW Gothic", "Didact Gothic", Questrial, sans-serif',
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-14 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 sm:gap-y-10 lg:gap-x-12">
          {/* Column 1: Useful information */}
          <div className="lg:col-span-3">
            <h3 className="text-[23px] sm:text-[25px] font-bold italic tracking-wide mb-8 sm:mb-10 text-white">
              Useful information
            </h3>
            <ul className="space-y-4 sm:space-y-5 text-[19px] sm:text-[20px] font-normal leading-relaxed text-white">
              <li><a href="#travel" className="hover:underline">Travel information</a></li>
              <li><a href="#safari" className="hover:underline">Safari logistics</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms and conditions</a></li>
            </ul>
          </div>

          {/* Column 2: Sitemap */}
          <div className="lg:col-span-3 lg:pl-4">
            <h3 className="text-[23px] sm:text-[25px] font-bold italic tracking-wide mb-8 sm:mb-10 text-white">
              Sitemap
            </h3>
            <ul className="space-y-4 sm:space-y-5 text-[19px] sm:text-[20px] font-normal leading-relaxed text-white">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#itineraries" className="hover:underline">Suggested itenaries</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Get in touch */}
          <div className="lg:col-span-2">
            <h3 className="text-[23px] sm:text-[25px] font-bold italic tracking-wide mb-8 sm:mb-10 text-white">
              Get in touch
            </h3>
            <ul className="space-y-4 sm:space-y-5 text-[19px] sm:text-[20px] font-normal leading-relaxed text-white">
              <li><a href="#plan" className="hover:underline">Plan your safari</a></li>
              <li><a href="#contact" className="hover:underline">Contact us</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Sign up for our newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-[23px] sm:text-[25px] font-bold italic tracking-wide mb-8 sm:mb-12 text-white">
              Sign up for our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="w-full max-w-[567px]">
              <div className="flex flex-col sm:flex-row items-stretch w-full shadow-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="flex-1 bg-white text-[#1a1a1a] placeholder:text-[#9c958f] placeholder:font-normal text-[18px] sm:text-[20px] px-6 py-4 sm:py-[18px] h-[60px] sm:h-[66px] rounded-none border-0 outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#3E372D] text-white hover:bg-[#2b261f] text-[19px] sm:text-[21px] italic font-medium px-8 sm:px-10 py-4 sm:py-[18px] h-[60px] sm:h-[66px] rounded-none border-0 cursor-pointer"
                >
                  {subscribed ? 'Thank you!' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* White Divider Line */}
      <div className="w-full border-t border-white" />

      {/* Copyright Bar */}
      <div className="w-full py-6 sm:py-7 px-4">
        <div className="max-w-[1920px] mx-auto flex items-center justify-center space-x-2 text-white">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" strokeWidth="2.2" />
          </svg>
          <span className="text-[16px] sm:text-[18px] font-normal tracking-wide text-center">
            Copyright 2022 Nyamatusi camp. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};`;

  const htmlCssCode = `<!-- Link Century Gothic or Google Font equivalent in <head> -->
<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/century-gothic">

<style>
  .safari-footer {
    background-color: #E75317;
    color: #ffffff;
    font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .safari-footer * {
    box-sizing: border-box;
  }
  .safari-container {
    max-width: 1920px;
    margin: 0 auto;
    padding: 80px 80px 50px 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
  }
  .safari-col {
    flex: 1 1 200px;
  }
  .safari-col.newsletter-col {
    flex: 1.5 1 350px;
    max-width: 567px;
  }
  .safari-title {
    font-size: 25px;
    font-style: italic;
    font-weight: 700;
    margin-bottom: 36px;
    letter-spacing: 0.5px;
  }
  .safari-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .safari-links li {
    margin-bottom: 20px;
  }
  .safari-links a {
    color: #ffffff;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
  }
  .safari-links a:hover {
    text-decoration: underline;
  }
  .newsletter-form {
    display: flex;
    width: 100%;
    height: 66px;
  }
  .newsletter-input {
    flex: 1;
    background: #ffffff;
    color: #1a1a1a;
    border: none;
    padding: 0 24px;
    font-size: 20px;
    font-family: inherit;
    outline: none;
    border-radius: 0;
  }
  .newsletter-input::placeholder {
    color: #9c958f;
  }
  .newsletter-btn {
    background-color: #3E372D;
    color: #ffffff;
    border: none;
    padding: 0 36px;
    font-size: 21px;
    font-style: italic;
    font-weight: 600;
    cursor: pointer;
    border-radius: 0;
    font-family: inherit;
  }
  .newsletter-btn:hover {
    background-color: #2b261f;
  }
  .safari-divider {
    border-top: 1px solid #ffffff;
    width: 100%;
  }
  .safari-copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 20px;
    font-size: 18px;
    gap: 8px;
  }
</style>

<footer class="safari-footer">
  <div class="safari-container">
    <div class="safari-col">
      <div class="safari-title">Useful information</div>
      <ul class="safari-links">
        <li><a href="#">Travel information</a></li>
        <li><a href="#">Safari logistics</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Terms and conditions</a></li>
      </ul>
    </div>

    <div class="safari-col">
      <div class="safari-title">Sitemap</div>
      <ul class="safari-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Suggested itenaries</a></li>
        <li><a href="#">Gallery</a></li>
      </ul>
    </div>

    <div class="safari-col">
      <div class="safari-title">Get in touch</div>
      <ul class="safari-links">
        <li><a href="#">Plan your safari</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>

    <div class="safari-col newsletter-col">
      <div class="safari-title">Sign up for our newsletter</div>
      <form class="newsletter-form">
        <input type="email" class="newsletter-input" placeholder="Email" required />
        <button type="submit" class="newsletter-btn">Submit</button>
      </form>
    </div>
  </div>

  <div class="safari-divider"></div>

  <div class="safari-copyright">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" stroke-width="2.2" />
    </svg>
    <span>Copyright 2022 Nyamatusi camp. All rights reserved</span>
  </div>
</footer>`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#2C2723] flex flex-col font-sans">
     
      <header className="sticky top-0 z-50 bg-[#2C2723] text-white border-b border-[#4A4036] shadow-md">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          {/* Title & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#E75317] flex items-center justify-center font-bold text-white shadow">
              N
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                Nyamatusi Camp Footer
                <span className="text-[11px] font-normal uppercase tracking-wider bg-[#E75317]/30 text-[#fca582] border border-[#E75317]/50 px-2 py-0.5 rounded">
                  Exact Match
                </span>
              </h1>
              <p className="text-xs text-[#b8b0a5] hidden sm:block">
                Exact Color (#E75317) • Century Gothic Font • Original Frame 6 Assets
              </p>
            </div>
          </div>

          
          <div className="flex items-center gap-1 sm:gap-2 bg-[#1C1815] p-1 rounded-lg border border-[#3E372D]">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                activeTab === 'preview'
                  ? 'bg-[#E75317] text-white shadow-sm'
                  : 'text-[#d6cec3] hover:text-white hover:bg-[#2C2723]'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Live Footer</span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                activeTab === 'compare'
                  ? 'bg-[#E75317] text-white shadow-sm'
                  : 'text-[#d6cec3] hover:text-white hover:bg-[#2C2723]'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Visual Comparison</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                activeTab === 'code'
                  ? 'bg-[#E75317] text-white shadow-sm'
                  : 'text-[#d6cec3] hover:text-white hover:bg-[#2C2723]'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Get Code</span>
            </button>

            <button
              onClick={() => setActiveTab('page')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                activeTab === 'page'
                  ? 'bg-[#E75317] text-white shadow-sm'
                  : 'text-[#d6cec3] hover:text-white hover:bg-[#2C2723]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Full Page Context</span>
            </button>
          </div>

          
          <div className="hidden xl:flex items-center gap-2">
            <button
              onClick={() => copyToClipboard('#E75317', 'bg-color')}
              className="flex items-center gap-2 bg-[#1C1815] border border-[#4A4036] hover:border-[#E75317] px-2.5 py-1.5 rounded-md text-xs transition-colors"
              title="Click to copy background color"
            >
              <span className="w-3.5 h-3.5 rounded bg-[#E75317] border border-white/20"></span>
              <span className="font-mono text-[#e4ded6]">#E75317</span>
              {copiedCode === 'bg-color' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
            </button>

            <button
              onClick={() => copyToClipboard('#3E372D', 'btn-color')}
              className="flex items-center gap-2 bg-[#1C1815] border border-[#4A4036] hover:border-white/40 px-2.5 py-1.5 rounded-md text-xs transition-colors"
              title="Click to copy button color"
            >
              <span className="w-3.5 h-3.5 rounded bg-[#3E372D] border border-white/20"></span>
              <span className="font-mono text-[#e4ded6]">#3E372D</span>
              {copiedCode === 'btn-color' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
            </button>
          </div>
        </div>
      </header>

     
      <main className="flex-1 flex flex-col">
        {/* TAB 1: LIVE PREVIEW WITH RESPONSIVE / FULL VIEWPORT */}
        {activeTab === 'preview' && (
          <div className="flex-1 flex flex-col">
            {/* Viewport Control Bar */}
            <div className="bg-white border-b border-[#E5E0D5] px-6 py-2.5 flex items-center justify-between text-xs text-[#5C5349]">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-[#2C2723]">Viewport Width:</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setViewportWidth('100%')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                      viewportWidth === '100%' ? 'bg-[#E75317] text-white font-medium' : 'hover:bg-[#F4F1EA]'
                    }`}
                  >
                    Fluid 100%
                  </button>
                  <button
                    onClick={() => setViewportWidth('1920px')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                      viewportWidth === '1920px' ? 'bg-[#E75317] text-white font-medium' : 'hover:bg-[#F4F1EA]'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    Original 1920px
                  </button>
                  <button
                    onClick={() => setViewportWidth('1280px')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                      viewportWidth === '1280px' ? 'bg-[#E75317] text-white font-medium' : 'hover:bg-[#F4F1EA]'
                    }`}
                  >
                    Laptop 1280px
                  </button>
                  <button
                    onClick={() => setViewportWidth('768px')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                      viewportWidth === '768px' ? 'bg-[#E75317] text-white font-medium' : 'hover:bg-[#F4F1EA]'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    Tablet 768px
                  </button>
                  <button
                    onClick={() => setViewportWidth('390px')}
                    className={`px-2.5 py-1 rounded flex items-center gap-1 transition ${
                      viewportWidth === '390px' ? 'bg-[#E75317] text-white font-medium' : 'hover:bg-[#F4F1EA]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Mobile 390px
                  </button>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#E75317]/10 text-[#E75317]">
                  Font: Century Gothic
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-stone-100 text-stone-700">
                  Background: #E75317
                </span>
              </div>
            </div>

           
            <div className="flex-1 flex flex-col justify-end p-0 md:p-6 lg:p-10 bg-[#EDE8DE] overflow-x-auto items-center">
              <div
                style={{ width: viewportWidth, maxWidth: '100%' }}
                className="transition-all duration-300 shadow-2xl rounded-sm overflow-hidden"
              >
                {/* Content above the footer simulating top edge */}
                <div className="bg-white/70 backdrop-blur-sm p-4 border-b border-stone-200 text-center text-xs text-stone-500 font-mono">
                  ▲ Page content above &bull; Exact replica of Frame_6_2820086e.png below ▼
                </div>

                <Footer />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VISUAL COMPARISON (SLIDER & ONION SKIN WITH ORIGINAL IMAGE) */}
        {activeTab === 'compare' && (
          <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 max-w-[1920px] mx-auto w-full">
            <div className="bg-white rounded-xl shadow-sm border border-[#E5E0D5] p-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-[#2C2723] flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-[#E75317]" />
                    Pixel Accuracy & Overlay Comparison
                  </h2>
                  <p className="text-sm text-stone-600">
                    Compare the live rendered code side-by-side or overlaid with your uploaded attachment (
                    <code className="text-xs bg-stone-100 px-1.5 py-0.5 rounded text-[#E75317]">
                      Frame_6_2820086e.png
                    </code>
                    ) to verify color, font, and alignment.
                  </p>
                </div>

               
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setComparisonMode('slider')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
                      comparisonMode === 'slider'
                        ? 'bg-[#E75317] text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Split Splitter
                  </button>
                  <button
                    onClick={() => setComparisonMode('onion')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
                      comparisonMode === 'onion'
                        ? 'bg-[#E75317] text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Opacity Overlay
                  </button>
                  <button
                    onClick={() => setComparisonMode('side-by-side')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
                      comparisonMode === 'side-by-side'
                        ? 'bg-[#E75317] text-white'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Side-by-Side
                  </button>
                </div>
              </div>

             
              {comparisonMode === 'slider' && (
                <div className="mt-4 pt-4 border-t border-stone-200 flex items-center gap-4">
                  <span className="text-xs font-medium text-stone-600 whitespace-nowrap">
                    Split Position ({sliderPosition}%):
                  </span>
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E75317]"
                  />
                  <div className="text-xs text-stone-500 whitespace-nowrap flex gap-4">
                    <span className="font-medium text-[#E75317]">◀ Left: Original Image</span>
                    <span className="font-medium text-[#3E372D]">Right: Live Code ▶</span>
                  </div>
                </div>
              )}

              {comparisonMode === 'onion' && (
                <div className="mt-4 pt-4 border-t border-stone-200 flex items-center gap-4">
                  <span className="text-xs font-medium text-stone-600 whitespace-nowrap">
                    Original Image Opacity ({overlayOpacity}%):
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#E75317]"
                  />
                  <span className="text-xs text-stone-500 whitespace-nowrap">
                    0% = Pure Code &bull; 100% = Pure Image
                  </span>
                </div>
              )}
            </div>

            {/* Comparison Display */}
            {comparisonMode === 'slider' && (
              <div className="relative w-full overflow-hidden rounded-lg shadow-xl border border-stone-300 select-none bg-[#E75317]">
                {/* Background: Live Rendered Code */}
                <div className="w-full">
                  <Footer />
                </div>

                {/* Foreground: Original Image clipped to sliderPosition */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="/assets/aistudio/Frame_6_2820086e.png"
                    alt="Original Reference"
                    className="w-full h-full object-cover object-left"
                    style={{ minWidth: '100%', maxWidth: 'none' }}
                  />
                </div>

                {/* Draggable Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-7 h-7 bg-white text-[#E75317] rounded-full shadow-lg flex items-center justify-center text-xs font-bold -ml-0.5 border border-stone-300">
                    ↔
                  </div>
                </div>
              </div>
            )}

            {comparisonMode === 'onion' && (
              <div className="relative w-full rounded-lg shadow-xl border border-stone-300 overflow-hidden bg-[#E75317]">
                {/* Bottom layer: Live Code */}
                <Footer />

                )
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-150"
                  style={{ opacity: overlayOpacity / 100 }}
                >
                  <img
                    src="/assets/aistudio/Frame_6_2820086e.png"
                    alt="Original Frame 6"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {comparisonMode === 'side-by-side' && (
              <div className="grid grid-cols-1 gap-6">
                <div className="rounded-lg shadow-md overflow-hidden border border-stone-300">
                  <div className="bg-[#2C2723] text-white px-4 py-2 text-xs font-bold tracking-wide flex justify-between items-center">
                    <span>1. ORIGINAL IMAGE ATTACHMENT (Frame_6_2820086e.png)</span>
                    <span className="text-stone-400">1920 × 487 px</span>
                  </div>
                  <img
                    src="/assets/aistudio/Frame_6_2820086e.png"
                    alt="Original attachment"
                    className="w-full h-auto block"
                  />
                </div>

                <div className="rounded-lg shadow-md overflow-hidden border border-stone-300">
                  <div className="bg-[#2C2723] text-white px-4 py-2 text-xs font-bold tracking-wide flex justify-between items-center">
                    <span>2. LIVE CODE IMPLEMENTATION (Pure HTML/React/Tailwind)</span>
                    <span className="text-emerald-400">Same Font &bull; Same Color &bull; 100% Code</span>
                  </div>
                  <Footer />
                </div>
              </div>
            )}
          </div>
        )}

        
        {activeTab === 'code' && (
          <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto w-full">
            <div className="bg-white rounded-xl shadow-sm border border-[#E5E0D5] p-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#2C2723] flex items-center gap-2">
                    <FileCode className="w-6 h-6 text-[#E75317]" />
                    Ready-to-Use Code
                  </h2>
                  <p className="text-sm text-stone-600">
                    Copy and drop into your React, Next.js, Vue, or static HTML project.
                  </p>
                </div>
              </div>

              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#F8F6F1] rounded-lg border border-stone-200 text-xs mb-6">
                <div>
                  <span className="text-stone-500 block uppercase font-medium">Background Color</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-4 h-4 rounded bg-[#E75317] border border-stone-300"></span>
                    <span className="font-mono font-bold text-stone-900">#E75317</span>
                  </div>
                </div>
                <div>
                  <span className="text-stone-500 block uppercase font-medium">Button Color</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-4 h-4 rounded bg-[#3E372D] border border-stone-300"></span>
                    <span className="font-mono font-bold text-stone-900">#3E372D</span>
                  </div>
                </div>
                <div>
                  <span className="text-stone-500 block uppercase font-medium">Typography</span>
                  <span className="font-semibold text-stone-900 block mt-1">Century Gothic</span>
                </div>
                <div>
                  <span className="text-stone-500 block uppercase font-medium">Divider Border</span>
                  <span className="font-semibold text-stone-900 block mt-1">1px Solid #FFFFFF</span>
                </div>
              </div>

              
              <div className="mb-8">
                <div className="flex items-center justify-between bg-[#1C1815] px-4 py-2.5 rounded-t-lg border-b border-stone-700">
                  <span className="text-xs font-mono font-semibold text-stone-300 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    Footer.tsx (React + Tailwind CSS)
                  </span>
                  <button
                    onClick={() => copyToClipboard(reactCode, 'react')}
                    className="flex items-center gap-1.5 bg-[#E75317] hover:bg-[#d44812] text-white text-xs font-semibold px-3 py-1 rounded transition"
                  >
                    {copiedCode === 'react' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy React Code
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-[#141210] text-stone-200 p-4 rounded-b-lg text-xs font-mono overflow-x-auto max-h-[380px] leading-relaxed border border-stone-800">
                  <code>{reactCode}</code>
                </pre>
              </div>

              
              <div>
                <div className="flex items-center justify-between bg-[#1C1815] px-4 py-2.5 rounded-t-lg border-b border-stone-700">
                  <span className="text-xs font-mono font-semibold text-stone-300 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    index.html (Pure HTML + Embedded CSS)
                  </span>
                  <button
                    onClick={() => copyToClipboard(htmlCssCode, 'html')}
                    className="flex items-center gap-1.5 bg-[#3E372D] hover:bg-[#2b261f] text-white text-xs font-semibold px-3 py-1 rounded transition"
                  >
                    {copiedCode === 'html' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy HTML/CSS Code
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-[#141210] text-stone-200 p-4 rounded-b-lg text-xs font-mono overflow-x-auto max-h-[380px] leading-relaxed border border-stone-800">
                  <code>{htmlCssCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

       
        {activeTab === 'page' && (
          <div className="flex-1 flex flex-col">
            {/* Hero Section */}
            <div className="relative bg-[#201B17] text-white overflow-hidden py-24 sm:py-32 px-6 lg:px-16 border-b border-[#3E372D]">
              <div className="max-w-5xl mx-auto text-center space-y-6">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#E75317]">
                  Mana Pools National Park &bull; Zimbabwe
                </span>
                <h1
                  className="text-4xl sm:text-6xl font-normal tracking-wide text-white"
                  style={{ fontFamily: '"Century Gothic", CenturyGothic, sans-serif' }}
                >
                  Nyamatusi Camp
                </h1>
                <p className="text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
                  An exclusive, deeply luxurious eco-sanctuary along the banks of the mighty Zambezi River.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#plan-your-safari"
                    className="bg-[#E75317] hover:bg-[#d04612] text-white px-8 py-3.5 text-sm uppercase tracking-widest font-semibold transition"
                  >
                    Explore Safaris
                  </a>
                  <button
                    onClick={() => setActiveTab('preview')}
                    className="border border-white/40 hover:border-white text-white px-8 py-3.5 text-sm uppercase tracking-widest font-semibold transition"
                  >
                    Inspect Footer Only
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Highlights Grid */}
            <div className="bg-[#FAF8F5] py-16 px-6 lg:px-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-white border border-stone-200 shadow-sm">
                  <h3 className="text-xl font-bold italic text-[#2C2723] mb-3">Riverside Suites</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Solar-powered luxury tents with private plunge pools overlooking the tranquil Zambezi.
                  </p>
                </div>
                <div className="p-8 bg-white border border-stone-200 shadow-sm">
                  <h3 className="text-xl font-bold italic text-[#2C2723] mb-3">Wild Expeditions</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Guided walking safaris, canoeing along the river floodplains, and game drives.
                  </p>
                </div>
                <div className="p-8 bg-white border border-stone-200 shadow-sm">
                  <h3 className="text-xl font-bold italic text-[#2C2723] mb-3">Eco-Conscious</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    100% solar powered, single-use plastic free, supporting local Mana Pools conservation.
                  </p>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        )}
      </main>
    </div>
  );
}

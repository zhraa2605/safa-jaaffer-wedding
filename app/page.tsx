'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current && !videoPlaying) {
      setVideoPlaying(true);
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play();
      
      // Start audio when video plays
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  };

  const handleVideoEnd = () => {
    setShowContent(true);
    setTimeout(() => {
      setVideoPlaying(false);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen bg-[##efeae7] overflow-hidden">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/mp3.mp3" type="audio/mpeg" />
      </audio>

      {/* Full Screen Video */}
      {!showContent && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer transition-opacity duration-1000 ${videoPlaying ? 'opacity-100' : 'opacity-100'}`}
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            className="w-full h-screen object-cover"
            onEnded={handleVideoEnd}
            playsInline
            muted={true}
            
          >
            <source src="/wedding-video.mp4" type="video/mp4" />
          </video>
          

        </div>
      )}

      {/* Fade overlay when video ends */}
      {videoPlaying && (
        <div 
          className={`fixed inset-0 z-40 bg-black pointer-events-none transition-opacity duration-1000 ${showContent ? 'opacity-0' : 'opacity-0'}`}
        />
      )}

      {/* Main Wedding Invitation Content */}
      <div className={`relative z-10 transition-all duration-2000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110 animate-slow-zoom"
            style={{
              backgroundImage: 'url("/rings.jpg")',
            }}
          ></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-white/30"></div>
          <div className="absolute top-8 right-8 w-32 h-32 border-t-2 border-r-2 border-white/30"></div>
          <div className="absolute bottom-8 left-8 w-32 h-32 border-b-2 border-l-2 border-white/30"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-white/30"></div>
          
          <div className="relative z-10 text-center space-y-12 max-w-5xl mx-auto px-4">
            {/* Decorative Top */}
            <div className="flex justify-center items-center gap-4 mb-8 animate-fadeIn">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="text-white/80 text-3xl">✦</div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>

            {/* Main Names with Arabic Font */}
            <div className="space-y-8 animate-slideDown">
              <h1 className="text-white font-bold leading-relaxed" style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}>
                <span className="block text-7xl md:text-9xl mb-6 drop-shadow-2xl animate-fadeInScale">صفا</span>
                <div className="flex justify-center items-center gap-6 my-8">
                  <div className="w-16 h-px bg-white/60"></div>
                  <span className="text-5xl md:text-6xl text-white/90">و</span>
                  <div className="w-16 h-px bg-white/60"></div>
                </div>
                <span className="block text-7xl md:text-9xl mt-6 drop-shadow-2xl animate-fadeInScale delay-200">جعفر</span>
              </h1>
            </div>

          

            {/* Quranic Verse with decorative styling */}
            <div className="pt-8 pb-8 animate-fadeIn delay-600">
              <div className="relative inline-block">
                {/* <div className="absolute -top-6 -left-6 text-white/20 text-6xl">"</div>
                <div className="absolute -bottom-6 -right-6 text-white/20 text-6xl">"</div> */}
                <div className="bg-white/10 rounded-2xl px-8 py-6 shadow-2xl">
                  <p className="text-white text-xl md:text-2xl leading-relaxed mb-2" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif", lineHeight: '2' }}>
                    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا<br />
                    لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
                  </p>
                  <p className="text-white/70 text-sm mt-3" style={{ fontFamily: "'Amiri', serif" }}>
                    سورة الروم - آية ٢١
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Bottom */}
            <div className="flex justify-center items-center gap-4 mt-12 animate-fadeIn delay-1200">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="text-white/80 text-3xl">✦</div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Details Section - Date, Time, Location */}
        <section className="relative py-20 px-4 bg-[#eee9e6]">
          <div className="max-w-5xl mx-auto">
            {/* Invitation Text */}
            <div className="text-center mb-12 animate-fadeIn">
              <p className="text-[#545351] text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: "'Amiri', serif" }}>
                نتشرف بحضوركم حفل زفافنا
              </p>
              <div className="flex justify-center items-center gap-3 mt-6">
                <div className="w-16 h-px bg-[#545351]/30"></div>
                <div className="text-[#545351]/60 text-2xl">✦</div>
                <div className="w-16 h-px bg-[#545351]/30"></div>
              </div>
            </div>

            {/* Date, Time and Day Card */}
            <div className="mb-12 animate-slideUp delay-200">
              <div className="bg-white rounded-3xl shadow-xl px-10 py-10 max-w-3xl mx-auto border border-[#545351]/10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="text-center">
                    <div className="text-[#545351]/70 text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: "'Amiri', serif" }}>التاريخ</div>
                    <div className="text-[#545351] text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Amiri', serif" }}>10 فبراير 2026</div>
                  </div>
                  <div className="hidden md:block w-px h-20 bg-[#545351]/20"></div>
                  <div className="text-center">
                    <div className="text-[#545351]/70 text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: "'Amiri', serif" }}>اليوم</div>
                    <div className="text-[#545351] text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Amiri', serif" }}>الإثنين</div>
                  </div>
                  <div className="hidden md:block w-px h-20 bg-[#545351]/20"></div>
                  <div className="text-center">
                    <div className="text-[#545351]/70 text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: "'Amiri', serif" }}>الوقت</div>
                    <div className="text-[#545351] text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Amiri', serif" }}>5:00 مساءاً</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section with Map */}
            <div className="animate-fadeIn delay-400">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-[#545351]/10">
                <div className="p-8 md:p-10 text-center">
                  <div className="text-[#545351]/70 text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: "'Amiri', serif" }}>الموقع</div>
                  <h3 className="text-[#545351] text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "'Amiri', serif" }}>
قاعة بكداش الملكية والذهبية 
                  </h3>
                  <p className="text-[#545351]/70 text-lg mb-6" style={{ fontFamily: "'Amiri', serif" }}>
الاعظمية تقاطع المغرب شارع الاثاث                  </p>
                  <a 
                    href="https://maps.app.goo.gl/5gFmX8e2EcJpNcPCA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#545351] hover:bg-[#3d3b39] text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
                    style={{ fontFamily: "'Amiri', serif" }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    عرض الموقع على الخريطة
                  </a>
                </div>
                
                {/* Google Map Embed */}
                <div className="w-full h-80 md:h-96 bg-gray-200">
             
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.2939687898593!2d44.37117687627664!3d33.363390553788314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155779a8986cc897%3A0x8c3e672daed445ba!2z2YLYp9i52Kkg2KjZg9iv2KfYtCDZhNmE2KPYudix2KfYsyDZiNin2YTZhdmG2KfYs9io2KfYqg!5e0!3m2!1sen!2siq!4v1769533361139!5m2!1sen!2siq"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="flex justify-center items-center gap-3 mt-16">
              <div className="w-24 h-px bg-[#545351]/30"></div>
              <div className="text-[#545351]/60 text-3xl">❤</div>
              <div className="w-24 h-px bg-[#545351]/30"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import EnvelopeCover from './components/EnvelopeCover';
import VideoPlayer from './components/VideoPlayer';

export default function Home() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [verseImageError, setVerseImageError] = useState(false);

  const handleEnvelopeClick = () => {
    setShowEnvelope(false);
    setShowVideo(true);
    // Start video and audio immediately
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
        videoRef.current.play();
      }
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    setShowContent(true);
  };

  return (
    <div className="relative min-h-screen ">
      {/* Background Audio */}
      <audio
        ref={audioRef}
        loop
        preload="none"
      >
        <source src="/mp3.mp3" type="audio/mpeg" />
      </audio>

      {/* Envelope Cover - Shows First */}
      {showEnvelope && <EnvelopeCover onOpen={handleEnvelopeClick} />}

      {/* Full Screen Video - No transitions */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <VideoPlayer ref={videoRef} onEnded={handleVideoEnd} />
        </div>
      )}

      {/* Main Wedding Invitation Content */}
      {showContent && (
  <div className="relative z-10 page-bottom-space">{/* Hero Section */}
        <section className="relative flex items-top justify-top px-4 overflow-hidden">
          
          
          {/* Gradient Overlay */}
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-3 left-8 w-32 h-32 border-t-2 border-l-2 border-zinc-900/30"></div>
          <div className="absolute top-3 right-8 w-32 h-32 border-t-2 border-r-2 border-zinc-900/30"></div>
          <div className="absolute bottom-3 left-8 w-32 h-32 border-b-2 border-l-2 border-zinc-900/30"></div>
          <div className="absolute bottom-3 right-8 w-32 h-32 border-b-2 border-r-2 border-zinc-900/30"></div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            {/* Quranic Verse with decorative styling (image fallback) - moved above names */}
            <div className=" animate-slideUp delay-600">
              <div className="relative inline-block">
                <div className=" px-6 max-w-xl mx-auto">

                  {!verseImageError ? (
                    <Image
                      src="/quran-verse.png"
                      alt="آية قرآنية"
                      className="mx-auto mt-5 object-contain"
                      onError={() => setVerseImageError(true)}
                      width={1000}
                      height={50}
                    />
                  ) : (
                    <div>
                      <p className="text-white text-xl md:text-2xl leading-relaxed mb-2" style={{ fontFamily: "'Scheherazade New', 'Amiri', serif", lineHeight: '2' }}>
                        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا<br />
                        لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
                      </p>
                      <p className="text-white/70 text-sm mt-3" style={{ fontFamily: "'Amiri', serif" }}>
                        سورة الروم - آية ٢١
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Invitation Text - moved above the names */}
            <div className="text-center mb-10 animate-fadeIn mt-6">
              <p className="text-[#545351] text-2xl md:text-3xl font-light " style={{ fontFamily: "'Amiri', serif" }}>
بمشاعر مليئة بالفرح والسعادة
ولأن فرحتنا لا تكتمل إلا برؤيتكم
<br />
<span className="pt-50">
 يسعدنا دعوتكم لحضور حفل زفاف 
 </span>
              </p>
              <div className="flex justify-center items-bottom gap-3 mt-6">
                <div className="w-16 h-px bg-[#545351]/30"></div>
              </div>
            </div>

            {/* Decorative Top */}
         

         {/* Main Names with Arabic Font - Luxury Enhanced */}
<div className="animate-slideDown mt-2">
  <h1 className="text-zinc-900 leading-tight" style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}>
    <span className="block text-3xl md:text-7xl  animate-fadeInScale" 
          style={{ 
            fontWeight: 300, 
            letterSpacing: '0.08em',
            textShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
      الدكتور جعفر
    </span>
    
    <div className="flex justify-center items-center gap-8 my-3">
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-800/50 to-transparent"></div>
<span className="text-2xl md:text-4xl text-amber-900/60" style={{ fontWeight: 300, fontFamily: "'Amiri', serif" }}>و</span>
      <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-800/50 to-transparent"></div>
    </div>
    
    <span className="block text-3xl md:text-7xl mt-4 animate-fadeInScale delay-200" 
          style={{ 
            fontWeight: 300, 
            letterSpacing: '0.08em',
            textShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
      الدكتورة صفا
    </span>
  </h1>
</div>

            {/* Decorative Bottom */}
            <div className="flex justify-center items-center gap-4 mt-12 animate-fadeIn delay-1200">
              <div className="w-24 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="text-white/80 text-3xl">✦</div>
              <div className="w-24 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
        </section>
         
        {/* Details Section - Date, Time, Location */}
        <section className="relative py-10 px-4 ">
          <div className="max-w-5xl mx-auto">
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
                    <div className="text-[#545351] text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Amiri', serif" }}>الثلاثاء</div>
                  </div>
                  <div className="hidden md:block w-px h-20 bg-[#545351]/20"></div>
                  <div className="text-center">
                    <div className="text-[#545351]/70 text-sm mb-3 uppercase tracking-wider" style={{ fontFamily: "'Amiri', serif" }}>الوقت</div>
                    <div className="text-[#545351] text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Amiri', serif" }}>5:00 مساءاً</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element (above location) */}
          
 <div className="flex justify-center items-center gap-3 mt-16 mb-10">
              <div className="w-24 h-px bg-[#545351]/30"></div>
              <div className="text-[#545351] text-lg" style={{ fontFamily: "'Amiri', serif" }}>جنة الاطفال منازلهم</div>
              <div className="w-24 h-px bg-[#545351]/30"></div>
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
            <div className="flex justify-center items-center gap-3 mt-16 mb-30">
              <div className="w-24 h-px bg-[#545351]/30"></div>
              <div className="text-[#545351]/60 text-3xl">❤</div>
              <div className="w-24 h-px bg-[#545351]/30"></div>
            </div>
          </div>
        </section>
      </div>
      )}

      {/* Fixed bottom illustration - appears when content is shown */}
      {showContent && (
        <div className="fixed bottom-0 left-0 right-0 w-full z-30 pointer-events-none select-none">
          <div className="relative">
            {/* Multiple layered shadows ABOVE the image for smooth fade - prevents text from showing under image */}
            <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-t from-white via-white to-transparent z-20"></div>
            <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-t from-white/95 to-transparent z-20"></div>
            <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-t from-white/90 to-transparent z-20"></div>
            <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent z-20"></div>
            
            {/* Multiple layered shadows ON TOP of the image for smooth fade to page content */}
            <div className="absolute top-0 left-0 right-0 h-15 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/90 to-transparent z-10"></div>
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/70 to-transparent z-10"></div>
            
            <Image
              src="/pride.png"
              alt="زفاف - رسم"
              width={1200}
              height={200}
              className="w-full h-auto object-contain"
              priority={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
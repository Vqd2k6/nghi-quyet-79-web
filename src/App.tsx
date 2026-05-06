/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ChevronRight, 
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Clock,
  MapPin,
  X,
  FileText
} from 'lucide-react';
import { MINDMAP_DATA, NEWSPAPER_CONFIG } from './constants';
import { Language, MindmapNode } from './types';

const Modal = ({ node, lang, isOpen, onClose }: { node: MindmapNode | null, lang: Language, isOpen: boolean, onClose: () => void }) => {
  if (!node) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden paper-inner-shadow border-4 border-black p-8 shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-4 right-4 hover:text-news-red transition-colors">
              <X size={24} />
            </button>
            <div className="overflow-y-auto max-h-[70vh] pr-4 custom-scrollbar">
              <div className="flex items-center gap-2 text-news-red text-xs font-black mb-4 uppercase">
                <FileText size={16} /> {lang === 'vi' ? 'Nội dung chi tiết' : 'Detailed Content'}
              </div>
              <h2 className="text-3xl font-black mb-6 leading-tight border-b-2 border-black pb-4">{node.title[lang]}</h2>
              <div className="space-y-6">
                {node.fullContent?.[lang].map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed text-justify first-letter:text-4xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-news-red">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-black/10 text-[10px] uppercase font-bold text-black/40 text-center">
              © {NEWSPAPER_CONFIG.header[lang]} - {lang === 'vi' ? 'Ấn bản đặc biệt Nghị quyết 79' : 'Resolution 79 Special Issue'}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Header = ({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) => {
  const [date, setDate] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const d = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setDate(d.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', options));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  return (
    <>
      <header className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-2 mb-1">
          <div className="hidden md:block w-64 text-[10px] font-bold leading-tight">
            <p className="whitespace-pre-line">{NEWSPAPER_CONFIG.subHeader[lang]}</p>
            <p className="mt-2 text-news-red">{NEWSPAPER_CONFIG.meta.founded[lang]}</p>
          </div>
          
          <div className="flex-1 text-center py-4 md:py-8">
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[10vw] sm:text-7xl md:text-9xl lg:text-[120px] font-black text-news-red tracking-tighter leading-[0.9] md:leading-[0.8] mb-2 px-2 break-words"
            >
              {NEWSPAPER_CONFIG.header[lang]}
            </motion.h1>
          </div>

          <div className="hidden md:block w-64 text-right text-[10px] font-bold">
            <p>{date}</p>
            <p className="mt-1">{NEWSPAPER_CONFIG.meta.issue[lang]}</p>
            <p className="mt-1 text-news-red uppercase">{NEWSPAPER_CONFIG.meta.url}</p>
          </div>
        </div>

        <div className="newspaper-border-double flex justify-between items-center text-[11px] font-black uppercase tracking-widest px-2">
          <div className="flex gap-4">
            <span>{lang === 'vi' ? 'Chính sách và cuộc sống' : 'Policy & Life'}</span>
            <span className="text-news-red">●</span>
            <span>{lang === 'vi' ? 'Kỹ thuật' : 'Tech'}</span>
            <span className="text-news-red">●</span>
            <span>{lang === 'vi' ? 'Đầu tư' : 'Investment'}</span>
            <span className="text-news-red">●</span>
            <span>{lang === 'vi' ? 'Kinh tế số' : 'Digital Econ'}</span>
          </div>
          <button 
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="flex items-center gap-1 hover:bg-news-red bg-black text-white px-3 py-1 rounded-sm transition-colors text-[10px]"
          >
            <Globe size={10} />
            {lang === 'vi' ? 'ENGLISH VER' : 'PHIÊN BẢN VIỆT'}
          </button>
        </div>
      </header>

      {/* Floating Shrunk Header */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-white border-b-2 border-black paper-shadow px-4 h-14 flex items-center justify-center"
          >
            <div className="max-w-7xl w-full flex justify-between items-center">
              <h2 className="text-xl font-black text-news-red tracking-tighter shrink-0">{NEWSPAPER_CONFIG.header[lang]}</h2>
              <div className="flex items-center gap-6 overflow-hidden">
                <p className="hidden md:block text-[10px] font-bold uppercase tracking-widest truncate max-w-md">
                  {NEWSPAPER_CONFIG.headline[lang]}
                </p>
                <button 
                  onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
                  className="flex items-center gap-1 hover:bg-news-red bg-black text-white px-3 py-1 rounded-sm transition-colors text-[10px] whitespace-nowrap"
                >
                  {lang === 'vi' ? 'EN' : 'VI'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mt-12 flex flex-col items-start max-w-7xl mx-auto px-4 md:px-8">
        <p className="text-xl font-serif text-black/70 mb-4">
          {NEWSPAPER_CONFIG.tagline[lang]}
        </p>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-left leading-tight tracking-tight max-w-5xl mb-6">
          {NEWSPAPER_CONFIG.headline[lang]}
        </h2>
        <div className="flex items-center gap-4 text-sm text-black/60 mb-8 border-b border-black/10 w-full pb-4 italic">
          <span>{NEWSPAPER_CONFIG.meta.issue[lang]}</span>
        </div>
        
        <div className="bg-white/50 p-6 border-l-4 border-news-red mb-12 italic text-lg leading-relaxed">
          <p>
            {lang === 'vi' 
              ? '(Chinhphu.vn) - Tổng Bí thư Tô Lâm đã ký ban hành Nghị quyết số 79-NQ/TW, ngày 6/1/2026 của Bộ Chính trị về phát triển kinh tế nhà nước. Sau đây là bản tổng hợp nội dung Nghị quyết:'
              : '(Chinhphu.vn) - General Secretary To Lam has signed and promulgated Resolution No. 79-NQ/TW, dated January 6, 2026 of the Politburo on state economic development. Below is a summary of the Resolution:'}
          </p>
        </div>
      </div>
    </>
  );
};

const SidebarItem = ({ node, lang, onReadMore }: { node: MindmapNode, lang: Language, onReadMore: (node: MindmapNode) => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-8 border-b border-black/10 pb-6 last:border-0"
  >
    <div className="flex items-center gap-2 text-news-red text-[10px] font-black mb-2 uppercase italic leading-none">
      <Clock size={12} /> {lang === 'vi' ? 'TIÊU ĐIỂM' : 'FOCUS'}
    </div>
    <h4 className="text-xl font-black leading-[1.1] mb-2 hover:text-news-red transition-colors cursor-pointer" onClick={() => onReadMore(node)}>
      {node.title[lang]}
    </h4>
    <p className="text-sm text-black/80 mb-3 line-clamp-4 leading-tight italic">
      {node.content[lang]}
    </p>
    <div className="halftone w-full h-40 overflow-hidden mb-3 border border-black/10">
      <img src={node.image} className="w-full h-full object-cover grayscale brightness-105" alt={node.title[lang]} />
    </div>
    <button 
      onClick={() => onReadMore(node)}
      className="text-[10px] font-black uppercase flex items-center gap-1 hover:gap-2 transition-all group"
    >
      {lang === 'vi' ? 'Xem tiếp nội dung' : 'Read full report'} 
      <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

const MainStory = ({ lang, onReadMore }: { lang: Language, onReadMore: (node: MindmapNode) => void }) => {
  const mainNode = MINDMAP_DATA[2]; // Objectives as main
  const secondaryNode = MINDMAP_DATA[0]; // Context
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="news-column lg:col-span-6 px-6"
    >
      <div className="halftone h-[450px] w-full overflow-hidden mb-6 border-b-8 border-black relative group cursor-pointer" onClick={() => onReadMore(mainNode)}>
        <img src={mainNode.image} className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 transition-transform duration-700" alt={mainNode.title[lang]} />
        <div className="absolute bottom-6 left-6 bg-news-red p-3 text-[11px] font-bold text-white border-2 border-white max-w-xs shadow-xl">
          {mainNode.caption[lang]}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-black leading-none mb-4 italic underline decoration-news-red underline-offset-4">{mainNode.title[lang]}</h3>
          <p className="text-lg font-black leading-tight text-news-red mb-4">
            {mainNode.content[lang]}
          </p>
          <div className="space-y-2">
            {mainNode.fullContent?.[lang].slice(0, 2).map((p, i) => (
              <p key={i} className="text-sm leading-snug">{p}</p>
            ))}
          </div>
          <button onClick={() => onReadMore(mainNode)} className="bg-black text-white text-[10px] font-black px-4 py-2 hover:bg-news-red transition-colors flex items-center gap-2">
            {lang === 'vi' ? 'XEM CHI TIẾT NGHỊ QUYẾT' : 'VIEW RESOLUTION DETAILS'} <ArrowRight size={14} />
          </button>
        </div>
        
        <div className="border-l border-black/10 pl-6 space-y-4">
           <h4 className="text-lg font-black uppercase mb-2 border-b border-black">{secondaryNode.title[lang]}</h4>
           <div className="halftone h-32 w-full grayscale mb-2">
              <img src={secondaryNode.image} className="w-full h-full object-cover" alt="" />
           </div>
           <p className="text-xs leading-relaxed italic">{secondaryNode.content[lang]}</p>
           <ul className="text-[11px] space-y-1 list-none font-bold">
             {secondaryNode.fullContent?.[lang].map((p, i) => (
               <li key={i} className="flex gap-2"><span className="text-news-red">●</span> {p.slice(0, 40)}...</li>
             ))}
           </ul>
        </div>
      </div>
    </motion.div>
  );
};

const BottomGridItem = ({ node, lang, onReadMore }: { node: MindmapNode, lang: Language, onReadMore: (node: MindmapNode) => void }) => (
  <div className="news-column md:col-span-4 mt-12 bg-white p-4 border border-black/5 hover:border-black transition-colors group">
    <div className="flex justify-between items-start mb-3 border-b-2 border-black pb-2">
      <div className="flex items-center gap-2 text-news-red text-[10px] font-black uppercase tracking-tighter">
        <TrendingUp size={12} /> {lang === 'vi' ? 'DỮ LIỆU & GIẢI PHÁP' : 'DATA & SOLUTIONS'}
      </div>
      <span className="text-[10px] font-mono text-black/40">PAGE 0{node.id === 'solutions' ? '4' : '5'}</span>
    </div>
    <h4 className="text-2xl font-black mb-3 leading-none group-hover:text-news-red transition-colors cursor-pointer" onClick={() => onReadMore(node)}>
      {node.title[lang]}
    </h4>
    <p className="text-sm opacity-90 mb-4 h-16 line-clamp-3">{node.content[lang]}</p>
    <div onClick={() => onReadMore(node)} className="halftone h-56 overflow-hidden grayscale group-hover:grayscale-0 transition-all cursor-pointer border border-black/10 mb-4">
      <img src={node.image} className="w-full h-full object-cover" alt={node.title[lang]} />
    </div>
    <button onClick={() => onReadMore(node)} className="w-full border-2 border-black py-2 text-[10px] font-black uppercase hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2">
      {lang === 'vi' ? 'KHÁM PHÁ CHI TIẾT' : 'EXPLORE DETAILS'} <ArrowRight size={12} />
    </button>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [selectedNode, setSelectedNode] = useState<MindmapNode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (node: MindmapNode) => {
    setSelectedNode(node);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen pb-20 relative selection:bg-news-red selection:text-white paper-inner-shadow">
      <div className="fixed inset-0 pointer-events-none z-10 mix-blend-multiply opacity-20 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
      
      <Header lang={lang} setLang={setLang} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-12 bg-white/40 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t-4 border-black pt-12">
          
          {/* Sidebar Left */}
          <aside className="news-column lg:col-span-3 px-2">
            <h3 className="text-xs font-black mb-6 bg-news-red text-white px-4 py-2 inline-block uppercase italic tracking-widest shadow-lg">
              {lang === 'vi' ? 'BÌNH LUẬN CHIẾN LƯỢC' : 'STRATEGIC COMMENTARY'}
            </h3>
            <SidebarItem node={MINDMAP_DATA[0]} lang={lang} onReadMore={handleReadMore} />
            <SidebarItem node={MINDMAP_DATA[1]} lang={lang} onReadMore={handleReadMore} />
          </aside>

          {/* Main Story Center */}
          <MainStory lang={lang} onReadMore={handleReadMore} />

          {/* Sidebar Right */}
          <aside className="news-column lg:col-span-3 px-4 hidden lg:block">
             <div className="bg-stone-50 p-6 border-2 border-black border-double h-full">
                <div className="text-[11px] font-black text-center mb-8 uppercase tracking-[0.4em] border-b-2 border-black pb-4">
                  {lang === 'vi' ? 'CHỈ SỐ TĂNG TRƯỞNG' : 'GROWTH INDEX'}
                </div>
                {[
                  { label: lang === 'vi' ? 'Mục tiêu GDP 2030' : '2030 GDP Target', value: '7.0%' },
                  { label: lang === 'vi' ? 'Tỷ lệ Cải cách' : 'Reform Rate', value: '98.5%' },
                  { label: lang === 'vi' ? 'Doanh nghiệp SE Asia' : 'SE Asia SOEs', value: '50' },
                  { label: lang === 'vi' ? 'Vốn DNNN' : 'State Capital', value: '$1.2T' },
                  { label: lang === 'vi' ? 'Top 500 Thế giới' : 'Global Top 500', value: '1-3' },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-end mb-8 border-b border-black/10 pb-2">
                    <span className="text-[10px] font-black uppercase text-black/60 leading-none">{stat.label}</span>
                    <span className="text-2xl font-mono font-black border-b-4 border-news-red leading-none">{stat.value}</span>
                  </div>
                ))}
                
                <div className="mt-12 halftone h-72 grayscale contrast-125 border border-black cursor-pointer group relative overflow-hidden" onClick={() => handleReadMore(MINDMAP_DATA[3])}>
                  <img src={MINDMAP_DATA[3].image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Economic trend" />
                  <div className="absolute inset-x-0 bottom-0 bg-news-red text-white p-3 text-[10px] uppercase font-bold text-center translate-y-full group-hover:translate-y-0 transition-transform">
                    {lang === 'vi' ? 'CƠ SỞ LÝ LUẬN KINH TẾ CHÍNH TRỊ' : 'POLITICAL ECONOMY BASIS'}
                  </div>
                </div>
             </div>
          </aside>
        </div>

        {/* Bottom Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-4 border-black mt-16 pt-12">
            <BottomGridItem node={MINDMAP_DATA[4]} lang={lang} onReadMore={handleReadMore} />
            <BottomGridItem node={MINDMAP_DATA[3]} lang={lang} onReadMore={handleReadMore} />
            
            <div className="news-column md:col-span-4 bg-black text-white p-10 flex flex-col justify-center items-center text-center transform -rotate-1 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                < Award size={120} />
              </div>
              <Zap size={64} className="mb-6 text-news-red animate-pulse" />
              <h4 className="text-4xl font-black mb-4 uppercase leading-none tracking-tighter">
                {lang === 'vi' ? 'QUẢ ĐẤM THÉP 2045' : 'STEEL FIST 2045'}
              </h4>
              <p className="text-lg font-serif italic text-white/80 border-t border-white/20 pt-4">
                "{lang === 'vi' ? 'Kinh tế nhà nước là lực lượng nòng cốt dẫn dắt sự thịnh vượng của quốc gia.' : 'The state economy is the core force leading national prosperity.'}"
              </p>
            </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 md:px-8 border-t-8 border-black pt-8 mt-24 pb-12 bg-white/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[11px] font-black uppercase tracking-widest">
          <div className="flex flex-col gap-2">
            <h5 className="text-news-red text-xl font-black mb-2">{NEWSPAPER_CONFIG.header[lang]}</h5>
            <p className="opacity-60 leading-tight italic whitespace-pre-line">{NEWSPAPER_CONFIG.subHeader[lang]}</p>
            <p className="mt-4">{NEWSPAPER_CONFIG.meta.url}</p>
          </div>
          <div className="flex flex-col gap-2 border-x border-black/10 px-8">
            <h5 className="mb-4">{lang === 'vi' ? 'LIÊN HỆ PHÁT TRIỂN' : 'DEVELOPMENT CONTACT'}</h5>
            <p>Hotline: 0866994486</p>
            <p>Email: vqd2k6@gmail.com</p>
            <p className="mt-4 flex items-center gap-2"><MapPin size={14} /> {lang === 'vi' ? 'Ân Tường Tây, Hoài Ân, Bình Định' : 'An Tuong Tay, Hoai An, Binh Dinh'}</p>
          </div>
          <div className="flex flex-col items-center md:items-end justify-between">
            <div className="text-right">
               <p>{lang === 'vi' ? 'DỰ ÁN SINH VIÊN' : 'STUDENT PROJECT'}</p>
               <p className="text-news-red">© 2026 {NEWSPAPER_CONFIG.header[lang]}</p>
            </div>
            <div className="flex gap-6 mt-8">
              <a href="https://www.facebook.com/Vqd2k6?locale=vi_VN" target="_blank" rel="noreferrer" className="hover:text-news-red transition-colors">FACEBOOK</a>
              <a href="https://t.me/vqd2k6" target="_blank" rel="noreferrer" className="hover:text-news-red transition-colors">TELEGRAM</a>
              <a href="https://github.com/Vqd2k6" target="_blank" rel="noreferrer" className="hover:text-news-red transition-colors">GITHUB</a>
            </div>
          </div>
        </div>
      </footer>

      <Modal 
        node={selectedNode} 
        lang={lang} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}


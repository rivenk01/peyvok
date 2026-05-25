import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Clock, 
  HelpCircle, 
  Lightbulb, 
  Check, 
  ArrowRight, 
  ArrowDown, 
  ChevronRight, 
  X,
  ArrowLeftRight,
  Languages,
  Sun,
  Moon,
  RotateCcw,
  Sparkle,
  Award,
  Copy,
  Mic,
  Trash2,
  AlertTriangle,
  CheckCircle,
  MessageSquare,
  Sparkle as SparkleIcon,
  HelpCircle as QuizIcon,
  CornerDownLeft,
  BookOpen,
  Mail,
  Phone,
  Globe,
  MapPin,
  Github,
  Linkedin,
  Send,
  Facebook,
  Youtube,
  Laptop,
  Link2,
  User,
  Shield,
  Code,
  Database,
  Coins,
  Key,
  Cpu,
  Palette,
  Briefcase,
  GraduationCap,
  Eye,
  EyeOff,
  Settings,
  UserCheck,
  RefreshCw,
  Image as ImageIcon
} from "lucide-react";
import { TranslationResponse } from "./types";
import { PRESET_TERMS } from "./data";
import { PROFILE_TRANSLATIONS } from "./profileTranslations";
import { motion } from "motion/react";

const LOCALIZED_APP_TEXTS: Record<string, {
  headerTitle: string;
  headerSub: string;
  pasteLabel: string;
  copyLabel: string;
  clearLabel: string;
  voiceLabel: string;
  listeningLabel: string;
  badgeFree: string;
  badgeNoAds: string;
  badgeAi: string;
  submitButtonLabel: string;
  fromLabel: string;
  toLabel: string;
  spellcheckButtonLabel: string;
}> = {
  ku_badini: {
    headerTitle: "وەرگێڕی سەردەم ب ته‌کنۆلۆژیایا زیرەک",
    headerSub: "ب زوویترین دەم ڕستە و دەقان وەرگێڕە دگەل پێشکەشکرنا فەرهەنگۆک و کویزێن بەرهەمدار ل خوارێ",
    pasteLabel: "پەیستکردن",
    copyLabel: "کۆپی",
    clearLabel: "پاقژکرن",
    voiceLabel: "دەنگی بۆ تێکست",
    listeningLabel: "گوهگرتن...",
    badgeFree: "بێ بەرامبەر",
    badgeNoAds: "بێ ڕیکلام",
    badgeAi: "زیرەکیا دەستکرد",
    submitButtonLabel: "وەرگێڕان بۆ بادینی (Peyvok Decode)",
    fromLabel: "زمانێ دەستپێکێ",
    toLabel: "زمانێ وەرگێڕانێ",
    spellcheckButtonLabel: "ڕاستکرنا رێنووسێ (Grammarly)"
  },
  ku_sorani: {
    headerTitle: "وەرگێڕی سەردەم بە تەکنەلۆژیای زیرەک",
    headerSub: "لە زووترین کاتدا ڕستە و دەقەکان وەرگێڕە لەگەڵ فەرهەنگۆک و کویزەکان لە خوارەوە",
    pasteLabel: "پەیستکردن",
    copyLabel: "کۆپی",
    clearLabel: "پاککردنەوە",
    voiceLabel: "دەنگ بۆ دەق",
    listeningLabel: "گوێگرتن...",
    badgeFree: "بێ بەرامبەر",
    badgeNoAds: "بێ ڕیکلام",
    badgeAi: "زیرەکیی دەستکرد",
    submitButtonLabel: "وەرگێڕان بۆ بادینی (Peyvok Decode)",
    fromLabel: "زمانی دەستپێک",
    toLabel: "زمانی وەرگێڕان",
    spellcheckButtonLabel: "ڕاستکرنا رێنووسێ (Grammarly)"
  },
  en: {
    headerTitle: "Modern Translator with Smart AI Technology",
    headerSub: "Translate sentences and texts instantly, and access our dictionaries & quizzes below",
    pasteLabel: "Paste",
    copyLabel: "Copy",
    clearLabel: "Clear",
    voiceLabel: "Voice to Text",
    listeningLabel: "Listening...",
    badgeFree: "Totally Free",
    badgeNoAds: "No Ads",
    badgeAi: "Artificial Intelligence",
    submitButtonLabel: "Translate to Bahdini (Peyvok Decode)",
    fromLabel: "Source Language",
    toLabel: "Target Language",
    spellcheckButtonLabel: "AI Spellcheck (Grammarly)"
  },
  ar: {
    headerTitle: "المترجم الحديث بتقنيات الذكاء الاصطناعي الذكية",
    headerSub: "ترجم الجمل والنصوص فورياً، واستمتع بالمعجم والاختبارات التفاعلية أدناه",
    pasteLabel: "لصق",
    copyLabel: "نسخ",
    clearLabel: "مسح",
    voiceLabel: "صوت إلى نص",
    listeningLabel: "جاري الاستماع...",
    badgeFree: "متاح مجاناً",
    badgeNoAds: "خالي من الإعلانات",
    badgeAi: "ذكاء اصطناعي",
    submitButtonLabel: "ترجم إلى البادينية (Peyvok Decode)",
    fromLabel: "اللغة الأصلية",
    toLabel: "اللغة المستهدفة",
    spellcheckButtonLabel: "التدقيق الإملائي (Grammarly)"
  },
  de: {
    headerTitle: "Modernes Übersetzungs-Tool mit intelligenter KI",
    headerSub: "Übersetzen Sie Texte sofort und nutzen Sie Wörterbücher & Quizzes unten",
    pasteLabel: "Einfügen",
    copyLabel: "Kopieren",
    clearLabel: "Löschen",
    voiceLabel: "Sprache zu Text",
    listeningLabel: "Zuhören...",
    badgeFree: "Kostenlos",
    badgeNoAds: "Keine Werbung",
    badgeAi: "Künstliche Intelligenz",
    submitButtonLabel: "Auf Bahdini übersetzen (Peyvok Decode)",
    fromLabel: "Ausgangssprache",
    toLabel: "Zielsprache",
    spellcheckButtonLabel: "Rechtschreibprüfung (Grammarly)"
  },
  fr: {
    headerTitle: "Traducteur Moderne avec IA Intelligente",
    headerSub: "Traduisez des phrases instantanément et accédez à nos dictionnaire & quiz ci-dessous",
    pasteLabel: "Coller",
    copyLabel: "Copier",
    clearLabel: "Effacer",
    voiceLabel: "Voix vers Texte",
    listeningLabel: "Écoute...",
    badgeFree: "Entièrement Gratuit",
    badgeNoAds: "Sans Publicité",
    badgeAi: "Intelligence Artificielle",
    submitButtonLabel: "Traduire en Bahdini (Peyvok Decode)",
    fromLabel: "Langue Source",
    toLabel: "Langue Cible",
    spellcheckButtonLabel: "Correcteur d'Orthographe (Grammarly)"
  },
  tr: {
    headerTitle: "Yapay Zeka Destekli Modern Çeviri Platformu",
    headerSub: "Cümlelerinizi anında çevirin, sözlük ve interaktif bilgi yarışmalarını keşfedin",
    pasteLabel: "Yapıştır",
    copyLabel: "Kopyala",
    clearLabel: "Temizle",
    voiceLabel: "Ses Deşifresi",
    listeningLabel: "Dinleniyor...",
    badgeFree: "Tamamen Ücretsiz",
    badgeNoAds: "Reklamsız",
    badgeAi: "Yapay Zeka",
    submitButtonLabel: "Bahdini Lehçesine Çevir (Peyvok Decode)",
    fromLabel: "Kaynak Dil",
    toLabel: "Hedef Dil",
    spellcheckButtonLabel: "Yazım Denetimi (Grammarly)"
  },
  ru: {
    headerTitle: "Современный онлайн-переводчик с ИИ",
    headerSub: "Мгновенно переводите тексты, используйте встроенные словари и интерактивные тесты",
    pasteLabel: "Вставить",
    copyLabel: "Копировать",
    clearLabel: "Очистить",
    voiceLabel: "Голос в текст",
    listeningLabel: "Слушаю...",
    badgeFree: "Бесплатно",
    badgeNoAds: "Без рекламы",
    badgeAi: "Искусственный интеллект",
    submitButtonLabel: "Перевести на бадини (Peyvok Decode)",
    fromLabel: "Исходный язык",
    toLabel: "Целевой язык",
    spellcheckButtonLabel: "Проверка орфографии (Grammarly)"
  }
};

const getFloatingParticles = (siteLang: string) => {
  const isKurdish = ["ku_badini", "ku_sorani"].includes(siteLang);
  
  if (isKurdish) {
    return [
      { char: "پ", top: "15%", left: "12%", size: "text-lg", delay: 0 },
      { char: "ی", top: "75%", left: "85%", size: "text-2xl", delay: 0.5 },
      { char: "ڤ", top: "25%", left: "80%", size: "text-xl", delay: 1 },
      { char: "ۆ", top: "70%", left: "15%", size: "text-2xl", delay: 1.5 },
      { char: "ک", top: "45%", left: "8%", size: "text-lg", delay: 2 },
      { char: "ڕ", top: "80%", left: "45%", size: "text-xl", delay: 0.8 },
      { char: "ڵ", top: "12%", left: "65%", size: "text-2xl", delay: 1.8 },
      { char: "ژ", top: "50%", left: "90%", size: "text-lg", delay: 1.2 },
      { char: "چ", top: "35%", left: "75%", size: "text-xl", delay: 2.2 },
      { char: "گ", top: "85%", left: "25%", size: "text-xl", delay: 2.5 },
      
      // Floating Badini words
      { char: "پەیڤۆك", top: "20%", left: "30%", size: "text-xs font-black tracking-normal px-2.5 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10 backdrop-blur-sm shadow-sm", delay: 0.3, isWord: true },
      { char: "سلاو", top: "60%", left: "70%", size: "text-[11px] font-black tracking-normal px-2.5 py-1 bg-[#fbbf24]/5 rounded-full border border-[#fbbf24]/10 backdrop-blur-sm shadow-sm text-amber-400/40", delay: 1.1, isWord: true },
      { char: "باشی", top: "40%", left: "85%", size: "text-xs font-black tracking-normal px-2.5 py-1 bg-purple-500/5 rounded-full border border-purple-500/10 backdrop-blur-sm shadow-sm", delay: 2.4, isWord: true },
      { char: "کوردستان", top: "80%", left: "60%", size: "text-xs font-black tracking-normal px-2.5 py-1 bg-rose-500/5 rounded-full border border-rose-500/10 backdrop-blur-sm shadow-sm text-rose-500/40", delay: 1.7, isWord: true },
      { char: "زمان", top: "35%", left: "5%", size: "text-[11px] font-black tracking-normal px-2.5 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10 backdrop-blur-sm shadow-sm", delay: 0.9, isWord: true },
      { char: "پەیڤ", top: "12%", left: "80%", size: "text-xs font-black tracking-normal px-2.5 py-1 bg-pink-500/5 rounded-full border border-pink-500/10 backdrop-blur-sm shadow-sm", delay: 1.5, isWord: true },
      { char: "هێڤی", top: "85%", left: "10%", size: "text-xs font-black tracking-normal px-2.5 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/10 backdrop-blur-sm shadow-sm text-emerald-500/45", delay: 2.1, isWord: true }
    ];
  } else {
    // English custom attractive words and letters!
    return [
      { char: "A", top: "15%", left: "12%", size: "text-lg", delay: 0 },
      { char: "I", top: "75%", left: "85%", size: "text-2xl", delay: 0.5 },
      { char: "K", top: "25%", left: "80%", size: "text-xl", delay: 1 },
      { char: "V", top: "70%", left: "15%", size: "text-2xl", delay: 1.5 },
      { char: "E", top: "45%", left: "8%", size: "text-lg", delay: 2 },
      { char: "D", top: "80%", left: "45%", size: "text-xl", delay: 0.8 },
      { char: "L", top: "12%", left: "65%", size: "text-2xl", delay: 1.8 },
      { char: "X", top: "50%", left: "90%", size: "text-lg", delay: 1.2 },
      { char: "T", top: "35%", left: "75%", size: "text-xl", delay: 2.2 },
      { char: "S", top: "85%", left: "25%", size: "text-xl", delay: 2.5 },
      
      // Floating English attractive words
      { char: "Decode", top: "20%", left: "30%", size: "text-xs font-black tracking-widest px-2.5 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10 backdrop-blur-sm shadow-sm", delay: 0.3, isWord: true },
      { char: "Peyvok", top: "60%", left: "70%", size: "text-[10px] font-black tracking-wider px-2.5 py-1 bg-[#fbbf24]/5 rounded-full border border-[#fbbf24]/10 backdrop-blur-sm shadow-sm text-amber-400/40", delay: 1.1, isWord: true },
      { char: "Lexicon", top: "40%", left: "85%", size: "text-xs font-black tracking-wider px-2.5 py-1 bg-purple-500/5 rounded-full border border-purple-500/10 backdrop-blur-sm shadow-sm", delay: 2.4, isWord: true },
      { char: "Smart", top: "80%", left: "60%", size: "text-xs font-black tracking-wider px-2.5 py-1 bg-rose-500/5 rounded-full border border-rose-500/10 backdrop-blur-sm shadow-sm text-rose-500/40", delay: 1.7, isWord: true },
      { char: "Voice AI", top: "35%", left: "5%", size: "text-[10px] font-black tracking-wider px-2.5 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10 backdrop-blur-sm shadow-sm", delay: 0.9, isWord: true },
      { char: "Translate", top: "12%", left: "80%", size: "text-xs font-black tracking-wider px-2.5 py-1 bg-pink-500/5 rounded-full border border-pink-500/10 backdrop-blur-sm shadow-sm", delay: 1.5, isWord: true },
      { char: "Future", top: "85%", left: "10%", size: "text-xs font-black tracking-wider px-2.5 py-1 bg-emerald-500/5 rounded-full border border-emerald-500/10 backdrop-blur-sm shadow-sm text-emerald-500/45", delay: 2.1, isWord: true }
    ];
  }
};

interface WordTypewriterProps {
  text: string;
  speedMs?: number;
  className?: string;
  dir?: "rtl" | "ltr" | "auto";
}

const WordTypewriter: React.FC<WordTypewriterProps> = ({
  text,
  speedMs = 30,
  className = "",
  dir = "auto",
}) => {
  const words = text ? text.split(" ") : [];
  const [visibleWordsCount, setVisibleWordsCount] = useState(0);

  useEffect(() => {
    setVisibleWordsCount(0);
    if (!text) return;
    
    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current >= words.length) {
        setVisibleWordsCount(words.length);
        clearInterval(interval);
      } else {
        setVisibleWordsCount(current);
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, speedMs]);

  return (
    <span className={className} dir={dir}>
      {words.map((word, i) => {
        const isVisible = i < visibleWordsCount;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(4px)", y: 1.5 }}
            animate={isVisible ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(4px)", y: 1.5 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            style={{ display: "inline-block", marginRight: "0.22em" }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

const FlagImage = ({ code, className = "h-[14px] w-[21px] object-cover rounded-[3px] shadow-sm shrink-0 border border-slate-700/30" }: { code: string; className?: string }) => {
  const norm = code.toLowerCase().trim();

  // Custom premium Kurdistan flag Ala Rengîn
  if (norm === "kurdish" || norm === "ku_badini" || norm === "ku_sorani" || norm === "sun" || norm === "kurdistan") {
    return (
      <div className={`relative flex flex-col justify-between overflow-hidden shrink-0 ${className}`} style={{ aspectRatio: '3/2' }}>
        {/* Red stripe */}
        <div className="bg-[#e31e24] h-1/3 w-full"></div>
        {/* White stripe with gold sun */}
        <div className="bg-white h-1/3 w-full relative flex items-center justify-center">
          <div className="absolute h-[6px] w-[6px] rounded-full bg-[#fec111] flex items-center justify-center animate-pulse">
            <div className="absolute w-[1px] h-[7px] bg-[#fec111] rotate-0"></div>
            <div className="absolute w-[1px] h-[7px] bg-[#fec111] rotate-30"></div>
            <div className="absolute w-[1px] h-[7px] bg-[#fec111] rotate-60"></div>
            <div className="absolute w-[1px] h-[7px] bg-[#fec111] rotate-90"></div>
            <div className="absolute w-[1px] h-[7px] bg-[#fec111] rotate-120"></div>
            <div className="absolute w-[1px] h-[7px] bg-[#fec111] rotate-150"></div>
          </div>
        </div>
        {/* Green stripe */}
        <div className="bg-[#2a8d46] h-1/3 w-full"></div>
      </div>
    );
  }

  // Country code map
  const map: Record<string, string> = {
    english: "gb",
    en: "gb",
    arabic: "sa",
    ar: "sa",
    turkish: "tr",
    tr: "tr",
    german: "de",
    de: "de",
    french: "fr",
    fr: "fr",
    spanish: "es",
    es: "es",
    persian: "ir",
    fa: "ir",
    russian: "ru",
    ru: "ru"
  };

  const country = map[norm] || "gb";
  return (
    <img 
      src={`https://flagcdn.com/w40/${country}.png`} 
      alt={code} 
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};

const PeyvokLogo = ({ className = "h-9 w-9" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} select-none transition-transform duration-300 hover:scale-105`}
    >
      {/* Background shape mimicking the pasted stylized 'P' icon */}
      <path 
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 36 20 
           C 25 20, 16 29, 16 40 
           L 16 68
           C 16 79, 25 84, 36 84 
           L 54 84 
           C 71 84, 84 71, 84 54 
           L 84 36 
           C 84 21, 71 20, 54 20 
           L 36 20 
           Z 
           M 40 38 
           L 54 38 
           C 58 38, 62 41, 62 46 
           L 62 58 
           C 62 63, 58 66, 54 66 
           L 40 66 
           L 40 38 
           Z"
        fill="currentColor"
      />
      {/* Bottom left retro pixel decorations as in the logo image */}
      <rect x="0" y="56" width="12" height="12" rx="1.5" fill="currentColor" />
      <rect x="12" y="68" width="12" height="12" rx="1.5" fill="currentColor" />
      <rect x="24" y="80" width="12" height="12" rx="1.5" fill="currentColor" />
    </svg>
  );
};

// Dynamic footer translations for all supported site languages
const FOOTER_TRANSLATIONS: Record<string, {
  specialist: string;
  available: string;
  directContact: string;
  rights: string;
  emailMe: string;
  callMe: string;
}> = {
  ku_badini: {
    specialist: "گەشەپێدەرێ IT • داهێنەرێ تەکنۆلۆژی • کوردستان",
    available: "بەرهەڤە بۆ دەرفەتێن کار",
    directContact: "پەیوەندیا ئێکسەر دگەل من:",
    rights: "هەمی ماف پاراستینە © ٢٠٢٦ رێفینگ غزوان",
    emailMe: "نامێ بنێرە",
    callMe: "تەلەفۆنێ بکە"
  },
  ku_sorani: {
    specialist: "پەرەپێدەری IT • داهێنەری تەکنۆلۆژی • کوردستان",
    available: "بەردەستە بۆ هەلی کار",
    directContact: "پەیوەندی ڕاستەوخۆ لەگەڵ من:",
    rights: "سەرجەم مافەکان پارێزراون © ٢٠٢٦ ڕێفینگ غەزوان",
    emailMe: "ئیمەیڵ بنێرە",
    callMe: "تەلەفۆن بکە"
  },
  en: {
    specialist: "IT Developer • Innovation Specialist • Kurdistan",
    available: "Available for Opportunities",
    directContact: "Direct Contact Actions:",
    rights: "All rights reserved © 2026 Reving College & Academy",
    emailMe: "Email Me",
    callMe: "Call Me"
  },
  ar: {
    specialist: "مطور تكنولوجيا المعلومات • أخصائي ابتكار • كوردستان",
    available: "متاح لفرص العمل والتعاون",
    directContact: "أفعال الاتصال المباشر:",
    rights: "جميع الحقوق محفوظة © ٢٠٢٦ ريفينك غزوان",
    emailMe: "أرسل بريدًا",
    callMe: "اتصل بي"
  },
  de: {
    specialist: "IT-Entwickler • Innovationsspezialist • Kurdistan",
    available: "Verfügbar für Angebote",
    directContact: "Direkter Kontakt:",
    rights: "Alle Rechte vorbehalten © 2026 Reving College & Academy",
    emailMe: "E-Mail senden",
    callMe: "Anrufen"
  },
  fr: {
    specialist: "Développeur IT • Spécialiste de l'innovation • Kurdistan",
    available: "Disponible pour opportunités",
    directContact: "Contact direct:",
    rights: "Tous droits réservés © 2026 Reving College & Academy",
    emailMe: "Envoyer un e-mail",
    callMe: "Appeler"
  },
  tr: {
    specialist: "BT Geliştirici • İnovasyon Uzmanı • Kürdistan",
    available: "Fırsatlara Açık",
    directContact: "Doğrudan İletişim:",
    rights: "Her hakkı saklıdır © 2026 Reving College & Academy",
    emailMe: "E-posta Gönder",
    callMe: "Ara"
  },
  ru: {
    specialist: "ИТ-разработчик • Инициатор инноваций • Курдистан",
    available: "Доступен для предложений",
    directContact: "Прямая связь:",
    rights: "Все права защищены © 2026 Reving College & Academy",
    emailMe: "Написать",
    callMe: "Позвонить"
  }
};

// 8 Highly Crucial, Professional Badini Terms & Conditions for Peyvok
const PEYVOK_TERMS_LIST = [
  {
    num: "١",
    title: "خزمەتگۆزارییا سەربەخۆ و بێبەرامبەر (Independent Open-Access)",
    desc: "پلاتفۆرمی پەیڤۆک پڕۆژەیەکێ زانستی و فەرهەنگی پێشکەفتی یە ب تەمامی بێ بەرامبەر د خزمەتا جڤاک و قوتابیان دا. ئارمانجا ل پێش ئاسانکارییە د بەکارهێنان و دەولەمەندکرنا زمان و بەلاڤبوونا زارێ بادینی د جیهانا تەکنۆلۆژیایێ دا."
  },
  {
    num: "٢",
    title: "سروشتێ بەرهەمێن زیرەکییا دەستکرد (AI Modeling & Accuracy limits)",
    desc: "هەمی ئەنجامێن زمانەوانی ب ڕێکا تەکنەلۆژیایا مۆدێلێن وێژەیی یێن زیرەک دهێنە دارشتن. ژبەر کو ئاراستەیێن هەڵەی زمانەوانی ئەگەرەکێ کریکالە، نابیت بۆ کارێن فەرمی یێن بوارێن پزیشکی، دارایی یان بڕیارێن هەستیارێن یاسایی جێگیر بمینیت."
  },
  {
    num: "٣",
    title: "قەدەغەیا پەیامێن نەرێنی و کین ئامێز (Content Shield & Ethics)",
    desc: "بکارئینانا سیستەمی بۆ بابەتێن دەقێن توند، پەیڤێن نەشرین، بابەتێن کین و نەفرەتێ و دژ ب نۆرمێن زمانەوانی و بەها گشتی یێن جڤاکی قەدەغەیە؛ فیلتەرێن مە یێن سکیوریتی ب ئۆتۆماتیکی داخوازیان بلۆک دکەن."
  },
  {
    num: "٤",
    title: "پاراستنا بێ داتابەیس یان شوێن پێ (Private Local storage framework)",
    desc: "پاراستنا داتایێن تە ئەرکێ مە یێ بنەرەتی یە. نڤیسین و مێژوویا تە ل سەر چ سێرڤەرێن مە کارتێکەر نابیت و ناهێتە پاشکەوتکرن؛ دیرۆکا وەرگێڕانان بتنێ د ئامێرێ تە دا (Local Storage) کار دکەت و هەر کاتێ فەر ببی دشێی بڕەشینی."
  },
  {
    num: "٥",
    title: "یاسا و مافێن پاراستنا داهێنانێ (Developer Intellectual Assets)",
    desc: "پرۆگرامسازی، شێوازی کار و لێکدان، دیزاینێ ناڤ زاتی, لۆگۆ و هزرێن پاتێنت یێن گەشەپێدەر (ڕێفینگ غەزوان) د پاراستی نە. هەر جۆرە دەستکاری، گوهۆڕین یان بازرگانیکردن ب مەبەستێن دی ل دژی یاسا و عورفێ تەکنۆلۆژی یە."
  },
  {
    num: "٦",
    title: "بەرپرسیارییا تەمام یا بەکاربرنێ (Exclusive User Responsibility)",
    desc: "بەرپرسیاریێ یەکەم و کۆتایی ژ هەر زیان یان ناتەباییەک زمانەوانی د ئەنجامان دا دکەڤیتە سەر ملێ بەکاربر ب خۆ؛ پلاتفۆرمی پەیڤۆک یان ستافێ فەرمی یێ چێکەر بەرپرسیار نابن ژ هەر پێشهاتەک مادی یان مەعنەوی د کار دایە."
  },
  {
    num: "٧",
    title: "داخوازیێن زۆر و تێکدانی سیستەمی (Spam Detection & IP Ban)",
    desc: "ناردنا لۆد یان داخوازیێن زۆر یێن کارتێکەر ب شێوازی هێرشێن DDoS، سکرێپتان یان بۆتان بەلاڕێکرنە ژ مەرەمێن فێرکاری. ئەڤ یەکە دێ مەجبور کەت کو ناسنامەیا ئایپی (IP) یا ئامێرێ تە هەمیشەیی بهێتە سنۆردارکرن د سێرڤەری دا."
  },
  {
    num: "٨",
    title: "دەستکاری د یاسا و مەرجان دا (Terms Dynamic Evolution)",
    desc: "ئەم د جێگیرین بۆ هەموارکرن و بەرەوپێشبرنا ڤان مەرجان هەر کاتەکێ پێویست بکەت ب بێ ئاگەهداری پێشوەخت. بەردەوامیا تە یا بکارئینانێ ڕاستەوخۆ بەڵگەیە لسەر فەرماندەیی پێدان دگەل خال و یاسایێن مۆدێرن."
  }
];

// Safe curated fallbacks for presets which don't have new database fields yet
const DEFAULT_ATTENTION_NOTE = {
  noteTitleKurdish: "تێبینی لسەر ڕێنووسا بادینی",
  noteContentKurdish: "پیتا 'ڤ' (v) د زمانێ کوردی دا دەنگەکێ تایبەت هەیە و هەمبەر لاتی دەنگێ (V) یە. گەلەک جاران ب خەلەت وەک پیتا 'ب' دهێتە نڤیسین، بەلێ د ڕێنووسا دەڤەرا بادینان دا یا گرنگە ب پارێزراوی بمینیت.",
  noteTitleEnglish: "Orthography Attention",
  noteContentEnglish: "The 'v' (ڤ) sound is critical in Bahdini Kurdish. Do not substitute it with soft plosives, and ensure Latin-Hawar letters match correct phonetics.",
  typeSeverity: "attention"
};

const DEFAULT_QUIZ_DETAILS = {
  question: "کیش هه‌لبژارده‌ وه‌رگێڕانا دروست یا 'Procurement' نیشان دده‌ت؟",
  options: [
    "ئاڤاکرنا شیانان (Capacity building)",
    "کڕین و دابینکرن (Procurement)",
    "ڤەکۆلینا گونجاویێ (Feasibility study)",
    "بجهئینان (Implementation)"
  ],
  correctAnswerIndex: 1,
  explanation: "وەرگێڕانا 'Procurement' د شێوەزارێ بادینی دا دبیتە 'کڕین و دابینکرن' یان 'پەیداکرن'."
};

const KURDISH_SPELLING_DICTIONARY: Record<string, string> = {
  "روژ": "ڕۆژ",
  "رۆژ": "ڕۆژ",
  "كومپانی": "کۆمپانی",
  "كومپانى": "کۆمپانی",
  "كۆمپانی": "کۆمپانی",
  "كومپانیا": "کۆمپانییا",
  "كۆمپانیا": "کۆمپانییا",
  "ريك": "ڕێک",
  "ريكخستن": "ڕێکخستن",
  "ڕیکخستن": "ڕێکخستن",
  "ڕیک": "ڕێک",
  "راستی": "ڕاستی",
  "روونكرن": "ڕوونکرن",
  "روونکردن": "ڕوونکرن",
  "رەوش": "ڕەوش",
  "ريز": "ڕێز",
  "پروژه": "پڕۆژە",
  "پروژە": "پڕۆژە",
  "پڕوژە": "پڕۆژە",
  "بوچی": "بۆچی",
  "چوما": "بۆچی",
  "چما": "بۆچی",
  "هه می": "هەمی",
  "حەمی": "هەمی",
  "هه‌مي": "هەمی",
  "هەمیی": "هەمی",
  "کئم": "کێم",
  "گهورین": "گهۆرین",
  "گهورینێن": "گهۆرینێن",
  "مه زن": "مەزن",
  "مرۆف": "مرۆڤ",
  "مروڤ": "مرۆڤ",
  "مروف": "مرۆڤ",
  "هەتانۆکە": "هەتا نۆکە",
  "هەتا نوکە": "هەتا نۆکە",
};

function kurdishSpellCheck(text: string): { corrected: string; explanation: string; badWords: string[] } | null {
  if (!text || !text.trim()) return null;
  const hasArabicKurdish = /[\u0600-\u06FF]/.test(text);
  if (!hasArabicKurdish) return null;

  let corrected = text;
  const badWords: string[] = [];
  const changesList: string[] = [];

  if (corrected.includes("ك")) {
    corrected = corrected.replace(/ك/g, "ک");
    badWords.push("ك");
    changesList.push("گۆڕینی پەیڤا عەرەبی (ك) بۆ (ک)");
  }
  if (corrected.includes("ي") || corrected.includes("ى")) {
    corrected = corrected.replace(/[يى]/g, "ی");
    badWords.push("ي/ى");
    changesList.push("ڕاستکرنا پیتا (ي/ى) بۆ پیتا کوردی (ی)");
  }
  if (corrected.includes("ة")) {
    corrected = corrected.replace(/ة/g, "ە");
    badWords.push("ة");
    changesList.push("ڕاستکرنا پیتا تاء مربوطة (ة) بۆ پیتا کوردی (ە)");
  }

  const words = corrected.split(/\s+/);
  let dictionaryChanged = false;
  
  const correctedWords = words.map((w) => {
    const cleanWord = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()؟?،]/g, "");
    if (!cleanWord) return w;
    if (KURDISH_SPELLING_DICTIONARY[cleanWord]) {
      const rep = KURDISH_SPELLING_DICTIONARY[cleanWord];
      badWords.push(cleanWord);
      dictionaryChanged = true;
      return w.replace(cleanWord, rep);
    }
    return w;
  });

  if (dictionaryChanged) {
    corrected = correctedWords.join(" ");
    changesList.push("چاکسازی د زمانێ زار و ڕێنووسا بادینی دا");
  }

  if (corrected !== text) {
    return {
      corrected,
      explanation: changesList.join("، "),
      badWords
    };
  }
  return null;
}

const PeyvokAILoader: React.FC<{ siteLang?: string }> = ({ siteLang = "ku_badini" }) => {
  const [loadStep, setLoadStep] = useState(0);
  const [activeSubTask, setActiveSubTask] = useState("");
  
  const steps = [
    {
      titleKurdish: "پەیڤۆك یێ دهێت ئامادەکرن ...",
      titleEnglish: "Preparing linguistic parameters...",
      progress: 35,
      accent: "from-indigo-500 via-purple-500 to-pink-500",
      description: "سێتکرنا لێکۆلینێن دەستپێکی یێن زمانڤانی د سیستەمی دا..."
    },
    {
      titleKurdish: "پەیڤۆك یێ دهێت پرۆسسکرن...",
      titleEnglish: "Neural linguistic decoding in progress...",
      progress: 70,
      accent: "from-pink-500 via-amber-400 to-orange-500",
      description: "دابەشکرن و هەڵسەنگاندنا پەیڤێ دگەل چاوکانێن بادینی یێن دەڤەری..."
    },
    {
      titleKurdish: "پەیڤۆك یێ دهێت رێکخستن...",
      titleEnglish: "Formatting dialectal rules & footnotes...",
      progress: 100,
      accent: "from-emerald-500 via-cyan-400 to-indigo-500",
      description: "رێکخستنا دوماهیێ یا ڕستە، نموونە و کویزێن تایبەت..."
    }
  ];

  const subTasks = [
    "شیکارکردنا لێکەر و ناڤان...",
    "هەڵسەنگاندنا شێوەزارێ بادینی...",
    "دەرهێنانا چاوکانێن ڕەسەن...",
    "ڕاکێشانا پارامێتەرێن دەنگی...",
    "دروستکرنا ڕستەیێن رێنووسێ...",
    "کۆمکرنا نموونەیێن فەرهەنگۆکێ...",
    "بەرهەڤکرنا تێبینین ڕێزمانی...",
  ];

  useEffect(() => {
    const i1 = setTimeout(() => setLoadStep(1), 1200);
    const i2 = setTimeout(() => setLoadStep(2), 2450);

    // Active subtask rotation
    let subTaskIdx = 0;
    setActiveSubTask(subTasks[0]);
    const subTaskInterval = setInterval(() => {
      subTaskIdx = (subTaskIdx + 1) % subTasks.length;
      setActiveSubTask(subTasks[subTaskIdx]);
    }, 600);

    return () => {
      clearTimeout(i1);
      clearTimeout(i2);
      clearInterval(subTaskInterval);
    };
  }, []);

  const current = steps[loadStep];
  const glyphs = getFloatingParticles(siteLang);

  return (
    <div className="bg-[#0b061d] border border-indigo-950/80 rounded-[32px] p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[440px] text-center animate-fadeIn w-full">
      {/* Laser Scanning Line Bar */}
      <motion.div 
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30 z-20 pointer-events-none"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      
      {/* Floating Kurdish Alphabet Floating Particles */}
      {glyphs.map((glyph, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${glyph.size} font-black text-indigo-500/25 select-none pointer-events-none ${glyph.isWord ? 'font-sans text-indigo-400/25 border-indigo-500/15' : 'font-kurdish'}`}
          style={{ top: glyph.top, left: glyph.left }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.15, 0.45, 0.15],
            scale: [0.95, 1.1, 0.95]
          }}
          transition={{
            duration: 4 + (idx % 3),
            repeat: Infinity,
            delay: glyph.delay,
            ease: "easeInOut"
          }}
        >
          {glyph.char}
        </motion.div>
      ))}

      {/* Cybernetic HUD layout with dual rings */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="absolute h-36 w-36 rounded-full border-2 border-indigo-500/10 bg-indigo-950/20"></div>
        
        {/* Outer dashed spinning ring */}
        <motion.div 
          className="absolute h-32 w-32 rounded-full border-2 border-dashed border-indigo-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner solid spinning selector ring */}
        <motion.div 
          className="absolute h-26 w-26 rounded-full border-t-2 border-b-2 border-[#fbbf24] opacity-85"
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Pulse circular overlay */}
        <div className="absolute h-20 w-20 rounded-full bg-gradient-to-tr from-indigo-500/15 to-purple-500/15 animate-pulse"></div>

        {/* Core Icon Button */}
        <div className="relative h-14 w-14 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
          <RefreshCw className="h-6 w-6 text-white animate-spin" style={{ animationDuration: "3.5s" }} />
        </div>
      </div>

      {/* Core status info */}
      <div className="space-y-3.5 max-w-xl z-10 w-full">
        {/* Active Sub-Task Badge */}
        <div className="flex justify-center">
          <span className="bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent text-[#fbbf24] text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full border border-amber-500/35 uppercase flex items-center gap-1.5 shadow-sm font-kurdish leading-none">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping inline-block"></span>
            {activeSubTask}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-white select-none leading-relaxed tracking-tight font-kurdish" dir="rtl">
          {current.titleKurdish}
        </h2>
        
        <p className="text-xs sm:text-sm text-slate-400 font-bold max-w-md mx-auto leading-relaxed select-none min-h-[40px] font-kurdish" dir="rtl">
          {current.description}
        </p>

        <p className="text-[10px] font-mono font-black text-indigo-400 tracking-widest uppercase select-none flex items-center justify-center gap-1.5">
          <Cpu className="h-3 w-3 text-indigo-400 animate-pulse" />
          {current.titleEnglish}
        </p>
      </div>

      {/* Beautiful Progress Slider Engine */}
      <div className="w-full max-w-xs sm:max-w-md mt-6 bg-slate-950/70 p-1.5 rounded-2xl border border-indigo-950/60 z-10 shadow-inner">
        <div className="relative w-full h-2 bg-slate-950/90 rounded-xl overflow-hidden">
          <motion.div 
            className={`h-full bg-gradient-to-r ${current.accent}`}
            initial={{ width: "15%" }}
            animate={{ width: `${current.progress}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        <div className="flex justify-between items-center px-1.5 mt-2 font-mono text-[9px] font-black tracking-widest text-slate-500">
          <span>PROGRESS: {current.progress}%</span>
          <span className="text-amber-400 animate-pulse">DEPLOYED</span>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="flex items-center gap-2 mt-6 z-10">
        {steps.map((_, sIdx) => (
          <div 
            key={sIdx} 
            className={`h-2 rounded-full transition-all duration-300 ${
              sIdx === loadStep ? "w-8 bg-[#fbbf24]" : "w-2 bg-indigo-950"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("peyvok_dark_mode");
      return saved !== "false";
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("peyvok_dark_mode", String(isDarkMode));
      if (isDarkMode) {
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
      }
    }
  }, [isDarkMode]);

  const [translateQuery, setTranslateQuery] = useState("");
  const [isAutoGrammarEnabled, setIsAutoGrammarEnabled] = useState(true);
  const [autoCorrectFeedback, setAutoCorrectFeedback] = useState("");
  const [globalStats, setGlobalStats] = useState<any>({
    totalViews: 0,
    genders: { boy: 0, girl: 0, guest: 0 },
    translationsCount: 0,
    topTranslations: []
  });

  const [currentWord, setCurrentWord] = useState<TranslationResponse>(PRESET_TERMS["procurement"]);
  const [hasTranslated, setHasTranslated] = useState(false);
  const [history, setHistory] = useState<TranslationResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Dynamic language routing parameters
  const [sourceLanguage, setSourceLanguage] = useState<string>("English");
  const [targetLanguage, setTargetLanguage] = useState<string>("Kurdish");

  // Keep backward-compatible aliases
  const selectedLanguage = sourceLanguage as any;
  const setSelectedLanguage = (lang: any) => setSourceLanguage(lang);

  const LANGUAGES_CONFIG = [
    { code: "English", tag: "English", flag: "🇬🇧", placeholder: "Write something to translate...", localized: "English / ده‌ستپێك" },
    { code: "Arabic", tag: "العربية", flag: "🇸🇦", placeholder: "اكتب شيئاً لترجمته...", localized: "العربية / الفصحى" },
    { code: "Turkish", tag: "Türkçe", flag: "🇹🇷", placeholder: "Çevirmek için bir şey yazın...", localized: "Türkçe / توركی" },
    { code: "German", tag: "Deutsch", flag: "🇩🇪", placeholder: "Schreiben Sie something zum Übersetzen...", localized: "Deutsch / ئه‌لمانی" },
    { code: "French", tag: "Français", flag: "🇫🇷", placeholder: "Écrivez quelque chose à traduire...", localized: "Français / فڕەنسی" },
    { code: "Spanish", tag: "Español", flag: "🇪🇸", placeholder: "Escribe algo para traducir...", localized: "Español / ئیسپانی" },
    { code: "Persian", tag: "فارسی", flag: "🇮🇷", placeholder: "چیزی برای ترجمه بنویسید...", localized: "فارسی / ئیرانی" },
    { code: "Kurdish", tag: "بادینی", flag: "☀️", placeholder: "تشتەکی بنڤیسە ژبۆ وەرگێڕانێ...", localized: "بادینی" }
  ];

  const TARGET_LANGUAGES_CONFIG = [
    ...LANGUAGES_CONFIG.filter((l) => l.code === "Kurdish"),
    ...LANGUAGES_CONFIG.filter((l) => l.code !== "Kurdish")
  ];

  const handleSwapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
  };

  const handleApplyCorrection = (originalPart: string, correctedPart: string) => {
    setTranslateQuery((prev) => {
      // Direct replace of first occurrence or exact matches case-insensitively
      const index = prev.toLowerCase().indexOf(originalPart.toLowerCase());
      if (index !== -1) {
        return prev.substring(0, index) + correctedPart + prev.substring(index + originalPart.length);
      }
      return prev;
    });
  };
  
  // View states (Translator vs About Me Portfolio vs Privacy Policy)
  const [activeView, setActiveView] = useState<"translator" | "about-me" | "privacy">("translator");
  const [privacySubTab, setPrivacySubTab] = useState<"policy" | "rules">("policy");
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [siteLang, setSiteLang] = useState<"ku_badini" | "ku_sorani" | "en" | "ar" | "de" | "fr" | "tr" | "ru">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("peyvok_site_lang");
      if (saved) return saved as "ku_badini" | "ku_sorani" | "en" | "ar" | "de" | "fr" | "tr" | "ru";
    }
    return "ku_badini";
  });
  const [isSiteLangOpen, setIsSiteLangOpen] = useState(false);
  const t = PROFILE_TRANSLATIONS[siteLang] || PROFILE_TRANSLATIONS.ku_badini;

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("peyvok_site_lang", siteLang);
    }
  }, [siteLang]);

  // Skills interactive states
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string | null>(null);
  const [selectedSkillBadge, setSelectedSkillBadge] = useState<string | null>(null);

  // Dynamic Peyvok keyword stylist
  const highlightPeyvok = (text: string) => {
    const regex = /(Peyvok|پەیڤۆك|پەیڤۆک|پەیفۆك|پەیفۆک|بيفوك)/gi;
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) => {
          if (/(Peyvok|پەیڤۆك|پەیڤۆک|پەیفۆك|پەیفۆک|بيفوك)/i.test(part)) {
            return (
              <span key={index} className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent font-bold tracking-normal">
                {part}
              </span>
            );
          }
          return <span key={index} className="tracking-normal">{part}</span>;
        })}
      </>
    );
  };

  // Audio playback state
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showPasteFallbackTip, setShowPasteFallbackTip] = useState(false);

  // Voice Speech Recognition state
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);

  // Grammarly spellcheck states
  const [isCheckingGrammar, setIsCheckingGrammar] = useState(false);
  const [grammarlyCorrection, setGrammarlyCorrection] = useState<{
    correctedText: string;
    isCorrectAlready: boolean;
    correctionsMade: {
      originalPart: string;
      correctedPart: string;
      explanationKurdish: string;
      explanationEnglish: string;
    }[];
  } | null>(null);
  const [showGrammarlyPopup, setShowGrammarlyPopup] = useState(false);

  // DECENTRALIZED USER ACCESS PROFILE (CODE-BASED & TOKEN ENGINE)
  const [loggedInUserCode, setLoggedInUserCode] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("peyvok_active_code") || "";
    }
    return "";
  });

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("peyvok_logged_in") === "true";
    }
    return false;
  });

  const [userProfileName, setUserProfileName] = useState(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("peyvok_logged_in") === "true";
      if (loggedIn) {
        const activeCode = localStorage.getItem("peyvok_active_code") || "";
        if (activeCode === "admin1234") return "Admin Panel";
        return localStorage.getItem(`peyvok_name_${activeCode}`) || "بەکارهێنەرێ فەرمی";
      }
      return localStorage.getItem("peyvok_username") || "مێهڤانێ هێژا";
    }
    return "مێهڤانێ هێژا";
  });

  // --- Onboarding and First-time user welcome custom states ---
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("peyvok_onboarded") !== "true";
    }
    return false;
  });
  const [onboardingStep, setOnboardingStep] = useState<1 | 2>(1);
  const [onboardingGender, setOnboardingGender] = useState<"boy" | "girl">("boy");
  const [onboardingName, setOnboardingName] = useState("");
  const [onboardingCode, setOnboardingCode] = useState("");
  const [onboardingError, setOnboardingError] = useState("");
  const [onboardingLoading, setOnboardingLoading] = useState(false);
  const [onboardingSuccessMessage, setOnboardingSuccessMessage] = useState("");

  const [userProfileGender, setUserProfileGender] = useState<"boy" | "girl">(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("peyvok_logged_in") === "true";
      if (loggedIn) {
        const activeCode = localStorage.getItem("peyvok_active_code") || "";
        return (localStorage.getItem(`peyvok_gender_${activeCode}`) as "boy" | "girl") || "boy";
      }
      return (localStorage.getItem("peyvok_gender") as "boy" | "girl") || "boy";
    }
    return "boy";
  });

  const [userProfileTokens, setUserProfileTokens] = useState(() => {
    if (typeof window !== "undefined") {
      const loggedIn = localStorage.getItem("peyvok_logged_in") === "true";
      if (loggedIn) {
        const activeCode = localStorage.getItem("peyvok_active_code") || "";
        if (activeCode === "admin1234") return 999999;
        const savedTokens = localStorage.getItem(`peyvok_tokens_${activeCode}`);
        return savedTokens ? parseInt(savedTokens, 10) : 300000;
      } else {
        const storedGuestTokens = localStorage.getItem("peyvok_guest_tokens");
        if (storedGuestTokens) return parseInt(storedGuestTokens, 10);
        localStorage.setItem("peyvok_guest_tokens", "25000");
        return 25000;
      }
    }
    return 25000;
  });

  const [isUserConsoleOpen, setIsUserConsoleOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [showPeerReviewModal, setShowPeerReviewModal] = useState(false);
  const [peerReviewModalOriginal, setPeerReviewModalOriginal] = useState("");
  const [peerReviewModalTranslated, setPeerReviewModalTranslated] = useState("");
  const [consoleTab, setConsoleTab] = useState<"stats" | "profile" | "login" | "admin" | "feedbacks" | "train">("stats");

  // --- AUTOMATED VISITOR API KEY STATE ---
  const [personalApiKey, setPersonalApiKey] = useState(() => {
    if (typeof window !== "undefined") {
      let key = localStorage.getItem("peyvok_auto_api_key");
      if (!key) {
        key = "PEYVOK-API-" + Math.random().toString(36).substring(2, 11).toUpperCase() + "-" + Math.random().toString(36).substring(2, 7).toUpperCase();
        localStorage.setItem("peyvok_auto_api_key", key);
      }
      return key;
    }
    return "PEYVOK-API-PENDING";
  });

  // --- FEEDBACK SURVEY & REGIONAL DIALECT FEEDBACKS LIST ---
  const [validationRating, setValidationRating] = useState<"yes" | "no" | null>(null);
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [activeContactType, setActiveContactType] = useState<"instagram" | "facebook" | "phone" | "email">("instagram");
  const [activeSurveyForm, setActiveSurveyForm] = useState({
    regionalWord: "",
    regionOrTribe: "",
    usageDescription: "",
    contactHandle: ""
  });

  const [feedbacksList, setFeedbacksList] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("peyvok_regional_feedbacks");
      return stored ? JSON.parse(stored) : [
        {
          timestamp: new Date().toISOString(),
          originalWord: "procurement",
          translatedWord: "پەیداکرن / دابینکرن",
          rating: "no",
          userApiKey: "PEYVOK-API-DEMO1234",
          userOfficialCode: "GUEST",
          regionalVariant: "کڕین یان ستاندن",
          regionOrTribe: "هۆزا دوسکی (دهۆک)",
          meaningUsage: "بۆ دەستکەفتنا تشتان یان کرینا پێدویستیان ب کار دهێت.",
          contact: "+9647501234567"
        }
      ];
    }
    return [];
  });

  // --- CUSTOM AI RULES (DYNAMIC TEACHING LESSONS) ---
  const [customAiRules, setCustomAiRules] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("peyvok_ai_custom_rules");
      return stored ? JSON.parse(stored) : [
        {
          inputPhrase: "توی چلۆنی",
          regionOrDialect: "زارڤایێ شنگالی (شنگالیا)",
          englishTranslation: "How are you doing?",
          kurdishMeaning: "تۆ چۆنیت، حالێ تە چەوانە؟",
          usageExample: "توی چلۆنی برا؟ سەرچاڤا تە گەرم."
        }
      ];
    }
    return [];
  });

  const saveFeedbackLocally = (rating: "yes" | "no", customOriginal?: string, customTranslated?: string) => {
    const orig = customOriginal || (currentWord ? currentWord.originalText : "") || "General Suggestion";
    const trans = customTranslated || (currentWord ? currentWord.translatedText : "") || "General System";

    const feedbackUnit = {
      timestamp: new Date().toISOString(),
      originalWord: orig,
      translatedWord: trans,
      rating: rating,
      userApiKey: personalApiKey,
      userOfficialCode: loggedInUserCode || "GUEST",
      regionalVariant: rating === "no" ? activeSurveyForm.regionalWord : trans,
      regionOrTribe: rating === "no" ? activeSurveyForm.regionOrTribe : "Standard (Valid)",
      meaningUsage: rating === "no" ? activeSurveyForm.usageDescription : "Validated Standard",
      contact: rating === "no" ? activeSurveyForm.contactHandle : "",
      contactType: rating === "no" ? activeContactType : "email"
    };

    setFeedbacksList((prev) => {
      const updated = [feedbackUnit, ...prev];
      if (typeof window !== "undefined") {
        localStorage.setItem("peyvok_regional_feedbacks", JSON.stringify(updated));
      }
      return updated;
    });

    setSubmittedSuccessfully(true);
  };
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("peyvok_admin_auth") === "true";
    }
    return false;
  });

  const [adminPasscode, setAdminPasscode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("peyvok_admin_passcode") || "admin123";
    }
    return "admin123";
  });

  const [adminPasswordInput, setAdminPasswordInput] = useState("");
  const [adminError, setAdminError] = useState("");

  // --- Dynamic Admin State Management ---
  const [adminUserList, setAdminUserList] = useState<any[]>([]);
  const [adminIsLoading, setAdminIsLoading] = useState(false);
  const [adminSearchQuery, setAdminSearchQuery] = useState("");
  const [adminFeedback, setAdminFeedback] = useState("");

  const [adminFormName, setAdminFormName] = useState("");
  const [adminFormCode, setAdminFormCode] = useState("");
  const [adminFormGender, setAdminFormGender] = useState<"boy" | "girl">("boy");
  const [adminFormApiKey, setAdminFormApiKey] = useState("");
  const [adminFormTokens, setAdminFormTokens] = useState<number>(300000);
  const [adminFormIsEdit, setAdminFormIsEdit] = useState(false);

  // Track page-views and gender of visitors automatically on mount & user login state change
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const clientGender = isUserLoggedIn ? userProfileGender : "guest";
        
        const trackRes = await fetch("/api/stats/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ gender: clientGender })
        });
        
        if (trackRes.ok) {
          const trackData = await trackRes.json();
          if (trackData && trackData.stats) {
            setGlobalStats(trackData.stats);
          }
        }
      } catch (err) {
        console.warn("Could not dynamically track visitor count:", err);
      }
    };

    trackVisitor();

    const statsInterval = setInterval(async () => {
      try {
        const res = await fetch("/api/stats");
        if (res.ok) {
          const data = await res.json();
          setGlobalStats(data);
        }
      } catch (e) {
        console.warn("Stats refresh failed silently:", e);
      }
    }, 15000); // refresh every 15 seconds for hot live stats

    return () => clearInterval(statsInterval);
  }, [isUserLoggedIn, userProfileGender]);

  // Automated debounced Grammarly spellcheck on text type
  useEffect(() => {
    if (!translateQuery || !translateQuery.trim() || translateQuery.length < 5) {
      return;
    }

    const timer = setTimeout(() => {
      const normalized = translateQuery.trim().toLowerCase();
      const grammarCacheKey = `peyvok_grammar_cache_${sourceLanguage}_${normalized}`;
      const cached = localStorage.getItem(grammarCacheKey);
      
      if (cached) {
        try {
          const result = JSON.parse(cached);
          setGrammarlyCorrection(result);
          if (result && !result.isCorrectAlready) {
            setShowGrammarlyPopup(true);
            if (isAutoGrammarEnabled && result.correctedText && result.correctedText !== translateQuery) {
              setTranslateQuery(result.correctedText);
              setAutoCorrectFeedback("✨ AI ب ئۆتۆماتیکی ڕێنووسا تە ڕاستکرەڤە (Spelling Auto-Corrected)");
              setTimeout(() => setAutoCorrectFeedback(""), 4000);
            }
          } else {
            setShowGrammarlyPopup(false);
          }
          return;
        } catch(e){}
      }

      // Perform silent background call
      const runSilentGrammar = async () => {
        try {
          const response = await fetch("/api/correct", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-user-code": loggedInUserCode,
            },
            body: JSON.stringify({
              text: translateQuery,
              sourceLang: sourceLanguage
            })
          });
          if (response.ok) {
            const result = await response.json();
            setGrammarlyCorrection(result);
            if (result && !result.isCorrectAlready) {
              setShowGrammarlyPopup(true);
              if (isAutoGrammarEnabled && result.correctedText && result.correctedText.trim() !== translateQuery.trim()) {
                setTranslateQuery(result.correctedText);
                setAutoCorrectFeedback("✨ AI ب ئۆتۆماتیکی ڕێنووسا تە ڕاستکرەڤە (Spelling Auto-Corrected)");
                setTimeout(() => setAutoCorrectFeedback(""), 4005);
              }
            } else {
              setShowGrammarlyPopup(false);
            }
            localStorage.setItem(grammarCacheKey, JSON.stringify(result));
          }
        } catch(err) {
          console.warn("Silent autocorrect failed:", err);
        }
      };

      runSilentGrammar();
    }, 2000); // 2 second typing silence debounce

    return () => clearTimeout(timer);
  }, [translateQuery, isAutoGrammarEnabled]);

  const fetchAdminUserList = async () => {
    setAdminIsLoading(true);
    setAdminFeedback("");
    try {
      const resp = await fetch("/api/admin/users", {
        headers: { "x-admin-passcode": "admin1234" }
      });
      if (resp.ok) {
        const data = await resp.json();
        setAdminUserList(data);
      } else {
        setAdminFeedback("⚠️ شکست ل هەناردەکردنا زانیاریان (Failed to load users)");
      }
    } catch (e) {
      setAdminFeedback("⚠️ خەلەتەک د گەهشتنێ دا رویدا (Server connection failed)");
    } finally {
      setAdminIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAdminAuthenticated) {
      fetchAdminUserList();
    }
  }, [isAdminAuthenticated]);

  // Load dynamic training rules from server on startup
  useEffect(() => {
    fetch("/api/train")
      .then(res => {
        if (res.ok) return res.json();
        throw new Error("Failed to load");
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((item: any) => ({
            inputPhrase: item.originalWord,
            regionOrDialect: item.regionOrTribe,
            englishTranslation: item.whyUsed || "Dynamic Overrides",
            kurdishMeaning: item.meaning,
            usageExample: item.exampleSentence
          }));
          setCustomAiRules(mapped);
          localStorage.setItem("peyvok_ai_custom_rules", JSON.stringify(mapped));
        }
      })
      .catch(err => {
        console.warn("Could not sync startup training rules from backend, using LocalStorage caches:", err);
      });
  }, []);

  // Synchronize authenticated user profile on mount
  useEffect(() => {
    if (isUserLoggedIn && loggedInUserCode) {
      if (loggedInUserCode === "admin1234") {
        setIsAdminAuthenticated(true);
        setUserProfileName("Admin Panel");
        setUserProfileGender("boy");
        setUserProfileTokens(999999);
      } else if (loggedInUserCode === "aikurd0101") {
        setIsAdminAuthenticated(true);
        setUserProfileName("Peyvok HQ Moderator");
        setUserProfileGender("boy");
        setUserProfileTokens(999999);
      } else if (loggedInUserCode === "learnkrdai0000" || loggedInUserCode === "learnai1234") {
        setIsAdminAuthenticated(true);
        setUserProfileName("زیرەکیا لێکۆڵینێ (AI Learn Academy)");
        setUserProfileGender("boy");
        setUserProfileTokens(999999);
      } else {
        fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: loggedInUserCode })
        })
        .then(res => res.json())
        .then(data => {
          if (data && data.code) {
            const savedName = localStorage.getItem(`peyvok_name_${data.code}`) || data.name;
            const savedGender = (localStorage.getItem(`peyvok_gender_${data.code}`) || data.gender) as "boy" | "girl";
            const savedTokens = localStorage.getItem(`peyvok_tokens_${data.code}`) 
              ? parseInt(localStorage.getItem(`peyvok_tokens_${data.code}`)!, 10) 
              : data.tokens;

            setUserProfileName(savedName);
            setUserProfileGender(savedGender);
            setUserProfileTokens(savedTokens);
          }
        })
        .catch(err => {
          console.error("Could not sync user profile:", err);
        });
      }
    }
  }, [isUserLoggedIn, loggedInUserCode]);

  const handleAdminFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminFeedback("");
    if (!adminFormName.trim() || !adminFormCode.trim()) {
      setAdminFeedback("⚠️ تکایە ناڤ و کۆد بنڤیسە!");
      return;
    }

    try {
      const resp = await fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-passcode": "admin1234"
        },
        body: JSON.stringify({
          name: adminFormName.trim(),
          code: adminFormCode.trim(),
          gender: adminFormGender,
          apiKey: adminFormApiKey.trim(),
          tokens: adminFormTokens
        })
      });

      if (resp.ok) {
        const resData = await resp.json();
        setAdminUserList(resData.users);
        setAdminFeedback("✓ ب سەرکەفتن هاتە پاشەکەوتکرن! (Saved successfully)");
        
        // Reset form
        setAdminFormName("");
        setAdminFormCode("");
        setAdminFormGender("boy");
        setAdminFormApiKey("");
        setAdminFormTokens(300000);
        setAdminFormIsEdit(false);
      } else {
        const errorData = await resp.json();
        setAdminFeedback(`⚠️ خەلەتی: ${errorData.error}`);
      }
    } catch (err) {
      setAdminFeedback("⚠️ پەیوەندی پچڕا دگەل سێرڤەری.");
    }
  };

  const handleAdminDeleteUser = async (codeToDelete: string) => {
    if (!window.confirm("ئەرێ تۆ پشتڕاستی ژ ڕەشکرنا ئەڤی ئەکاونتی؟ (\nAre you sure you want to delete this profile?)")) return;
    setAdminFeedback("");
    try {
      const resp = await fetch(`/api/admin/users/${codeToDelete}`, {
        method: "DELETE",
        headers: { "x-admin-passcode": "admin1234" }
      });
      if (resp.ok) {
        const resData = await resp.json();
        setAdminUserList(resData.users);
        setAdminFeedback("✓ ئەکاونت ب سەرکەفتن هاتە ڕەشکرن.");
      } else {
        const errorData = await resp.json();
        setAdminFeedback(`⚠️ شکست: ${errorData.error}`);
      }
    } catch (e) {
      setAdminFeedback("⚠️ شکست ل سەر سێرڤەری.");
    }
  };

  const handleAdminSelectEdit = (user: any) => {
    setAdminFormName(user.name);
    setAdminFormCode(user.code);
    setAdminFormGender(user.gender);
    setAdminFormApiKey(user.apiKey || "");
    setAdminFormTokens(user.tokens || 300000);
    setAdminFormIsEdit(true);
    setAdminFeedback("تۆ نوکە خەریکی دەستکاریکردنا ئەکاونتی پێشوویت.");
  };

  const [countdownText, setCountdownText] = useState("");
  const [isReloadingTokens, setIsReloadingTokens] = useState(false);
  const [copiedConsoleMessage, setCopiedConsoleMessage] = useState(false);
  const [showUserKeyRevealed, setShowUserKeyRevealed] = useState(false);

  const userProfileKey = loggedInUserCode ? "PEYVOK-USER-" + loggedInUserCode : "GUEST_RESERVED_KEY_77";

  const handleRegenerateUserKey = () => {
    alert("ببورە! ئەڤ کلیلە یا تایبەتە و دڤێت ژ لایێ ئەدمینی ڤە بهێتە پێشکەشکرن ژبۆ پاراستنا ئەکاونتی و ئێمناهیا وێ.\n(This private personal key is extremely secure and must be requested/managed from the Admin Panel.)");
  };

  // User login inputs
  const [loginCodeField, setLoginCodeField] = useState("");
  const [loginKeyField, setLoginKeyField] = useState("");
  const [loginError, setLoginError] = useState("");

  // Token subtraction proxy
  const deductTokens = (cost: number) => {
    const nextTokens = Math.max(0, userProfileTokens - cost);
    setUserProfileTokens(nextTokens);
    if (typeof window !== "undefined") {
      if (isUserLoggedIn && loggedInUserCode) {
        localStorage.setItem(`peyvok_tokens_${loggedInUserCode}`, nextTokens.toString());
      } else {
        localStorage.setItem("peyvok_guest_tokens", nextTokens.toString());
      }
    }
  };

  const handleUpdateUserName = (newName: string) => {
    setUserProfileName(newName || "مێهڤانێ هێژا");
    if (typeof window !== "undefined") {
      if (isUserLoggedIn && loggedInUserCode) {
        localStorage.setItem(`peyvok_name_${loggedInUserCode}`, newName || "مێهڤانێ هێژا");
      } else {
        localStorage.setItem("peyvok_username", newName || "مێهڤانێ هێژا");
      }
    }
  };

  const handleToggleUserGender = () => {
    const nextGender = userProfileGender === "boy" ? "girl" : "boy";
    setUserProfileGender(nextGender);
    if (typeof window !== "undefined") {
      if (isUserLoggedIn && loggedInUserCode) {
        localStorage.setItem(`peyvok_gender_${loggedInUserCode}`, nextGender);
      } else {
        localStorage.setItem("peyvok_gender", nextGender);
      }
    }
  };

  const handleUserLoginSubmit = async () => {
    setLoginError("");
    const cleanedCode = loginCodeField.trim();
    if (!cleanedCode) {
      setLoginError("تکایە کۆدێ چوونەژوورێ بنڤیسە! (Please enter your passcode)");
      return;
    }

    if (cleanedCode === "aikurd0101") {
      setIsUserLoggedIn(true);
      setLoggedInUserCode("aikurd0101");
      setIsAdminAuthenticated(true);
      setUserProfileName("Peyvok HQ Moderator");
      setUserProfileGender("boy");
      setUserProfileTokens(999999);
      if (typeof window !== "undefined") {
        localStorage.setItem("peyvok_admin_auth", "true");
        localStorage.setItem("peyvok_logged_in", "true");
        localStorage.setItem("peyvok_active_code", "aikurd0101");
      }
      setLoginCodeField("");
      return;
    }

    if (cleanedCode === "learnkrdai0000" || cleanedCode === "learnai1234") {
      setIsUserLoggedIn(true);
      setLoggedInUserCode(cleanedCode);
      setIsAdminAuthenticated(true);
      setUserProfileName("زیرەکیا لێکۆڵینێ (AI Learn Academy)");
      setUserProfileGender("boy");
      setUserProfileTokens(999999);
      if (typeof window !== "undefined") {
        localStorage.setItem("peyvok_admin_auth", "true");
        localStorage.setItem("peyvok_logged_in", "true");
        localStorage.setItem("peyvok_active_code", cleanedCode);
      }
      setLoginCodeField("");
      return;
    }

    try {
      const resp = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: cleanedCode }),
      });

      if (resp.ok) {
        const data = await resp.json();
        setIsUserLoggedIn(true);
        setLoggedInUserCode(data.code);

        if (data.role === "admin" || data.code === "admin1234") {
          setIsAdminAuthenticated(true);
          setUserProfileName("Admin Panel");
          setUserProfileGender("boy");
          setUserProfileTokens(999999);
          if (typeof window !== "undefined") {
            localStorage.setItem("peyvok_admin_auth", "true");
            localStorage.setItem("peyvok_logged_in", "true");
            localStorage.setItem("peyvok_active_code", "admin1234");
          }
        } else {
          const savedName = localStorage.getItem(`peyvok_name_${data.code}`) || data.name;
          const savedGender = (localStorage.getItem(`peyvok_gender_${data.code}`) || data.gender) as "boy" | "girl";
          const savedTokens = localStorage.getItem(`peyvok_tokens_${data.code}`) 
            ? parseInt(localStorage.getItem(`peyvok_tokens_${data.code}`)!, 10) 
            : data.tokens;

          setUserProfileName(savedName);
          setUserProfileGender(savedGender);
          setUserProfileTokens(savedTokens);

          if (typeof window !== "undefined") {
            localStorage.setItem("peyvok_logged_in", "true");
            localStorage.setItem("peyvok_active_code", data.code);
          }
        }
        setLoginCodeField("");
      } else {
        const errData = await resp.json();
        setLoginError(errData.error || "کۆدێ چوونەژوورێ خەلەتە!");
      }
    } catch (e) {
      setLoginError("پەیوەندی ب سێرڤەری نەکرا! (Server connection error)");
    }
  };

  const handleUserLogout = () => {
    setIsUserLoggedIn(false);
    setLoggedInUserCode("");
    setUserProfileName("مێهڤانێ هێژا");
    setUserProfileGender("boy");
    setIsAdminAuthenticated(false);
    
    let guestTk = 25000;
    if (typeof window !== "undefined") {
      localStorage.setItem("peyvok_logged_in", "false");
      localStorage.removeItem("peyvok_active_code");
      localStorage.removeItem("peyvok_admin_auth");
      
      const stored = localStorage.getItem("peyvok_guest_tokens");
      if (stored) {
        guestTk = parseInt(stored, 10);
      } else {
        localStorage.setItem("peyvok_guest_tokens", "25000");
      }
    }
    setUserProfileTokens(guestTk);
  };

  const [showDeletionRequestedMsg, setShowDeletionRequestedMsg] = useState(false);
  const handleRequestAccountDeletion = () => {
    setShowDeletionRequestedMsg(true);
    setTimeout(() => {
      setShowDeletionRequestedMsg(false);
      handleUserLogout();
      setIsUserConsoleOpen(false);
    }, 2500);
  };

  const handleAdminAuthSubmit = () => {
    setAdminError("");
    if (adminPasswordInput === adminPasscode) {
      setIsAdminAuthenticated(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("peyvok_admin_auth", "true");
      }
    } else {
      setAdminError("کۆدێ ئەدمینی خەلەتە! (Incorrect Admin Passcode)");
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
    setAdminPasswordInput("");
    if (typeof window !== "undefined") {
      localStorage.setItem("peyvok_admin_auth", "false");
    }
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      let refillTime = 0;
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("peyvok_next_refill");
        if (stored) {
          refillTime = parseInt(stored, 10);
        } else {
          refillTime = now + 12 * 60 * 60 * 1000;
          localStorage.setItem("peyvok_next_refill", refillTime.toString());
        }
      }

      if (now >= refillTime) {
        const fullAmount = isUserLoggedIn ? 100000 : 25000;
        setUserProfileTokens(fullAmount);
        if (typeof window !== "undefined") {
          if (isUserLoggedIn && loggedInUserCode) {
            localStorage.setItem(`peyvok_tokens_${loggedInUserCode}`, fullAmount.toString());
          } else {
            localStorage.setItem("peyvok_guest_tokens", fullAmount.toString());
          }

          const nextTime = Date.now() + 12 * 60 * 60 * 1000;
          localStorage.setItem("peyvok_next_refill", nextTime.toString());
          refillTime = nextTime;
        }
      }

      const diff = refillTime - now;
      if (diff <= 0) {
        setCountdownText("00:00:00");
        return;
      }
      const hrs = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      const displayHrs = hrs.toString().padStart(2, '0');
      const displayMins = mins.toString().padStart(2, '0');
      const displaySecs = secs.toString().padStart(2, '0');
      setCountdownText(`${displayHrs}:${displayMins}:${displaySecs}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [isUserLoggedIn, loggedInUserCode]);

  // Quiz interactive state
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizQuestionsCount, setQuizQuestionsCount] = useState<number>(0);
  const [randomQuiz, setRandomQuiz] = useState<{
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  } | null>(null);

  // Dynamic disclaimer translation lookup table
  const getDynamicDisclaimer = () => {
    switch (sourceLanguage) {
      case "English":
        return "Maybe we make a mistake, but we try to make it better.";
      case "Arabic":
        return "ربما نرتكب بعض الأخطاء، لكننا نسعى دائماً لتقديم الأفضل.";
      case "German":
        return "Vielleicht machen wir Fehler, aber wir versuchen, es besser zu machen.";
      case "French":
        return "Peut-être que nous faisons des erreurs, mais nous essayons de faire mieux.";
      case "Spanish":
        return "Tal vez cometamos errores, pero nos esforzamos por hacerlo mejor.";
      case "Turkish":
        return "Belki hata yapıyoruz ama her zaman daha iyisini yapmaya çalışıyoruz.";
      case "Persian":
        return "شاید مرتکب اشتباه شویم، اما تلاش می‌کنیم بهتر عمل کنیم.";
      case "Kurdish":
        return "دبیت هندەک جاران خەلەتی هەبن، بەلێ ئەم دخەبتین دا کارێ خۆ باشتر لێ بکەین.";
      default:
        return "Maybe we make a mistake, but we try to make it better.";
    }
  };

  // Load history from localStorage
  useEffect(() => {
    const cached = localStorage.getItem("badini_translation_history_v3");
    if (cached) {
      try {
        setHistory(JSON.parse(cached));
      } catch (e) {
        console.error("Failed to parse history", e);
      }
    }
  }, []);

  // Reset quiz selectors whenever active word/quiz scope shifts
  useEffect(() => {
    setQuizSelectedOption(null);
    setRandomQuiz(null);
  }, [currentWord]);

  // Save history helper
  const saveToHistory = (item: TranslationResponse) => {
    setHistory((prev) => {
      const filtered = prev.filter((h) => h.originalText.toLowerCase() !== item.originalText.toLowerCase());
      const updated = [item, ...filtered].slice(0, 10); // Keep last 10
      localStorage.setItem("badini_translation_history_v3", JSON.stringify(updated));
      return updated;
    });
  };

  // API Call to Translate
  const handleTranslateSubmit = async (textToTranslate: string) => {
    if (!textToTranslate || !textToTranslate.trim()) return;

    if (sourceLanguage === targetLanguage) {
      setError("کێشەیا وەرگێڕانێ: زمانێ دەستپێکێ و زمانێ وەرگێڕانێ نکارن وەک هەڤ بن! هیڤییە زمانەکێ دی هەلبژێرە ژبۆ دەستپێکرنا وەرگێڕانێ.");
      return;
    }

    // Reset survey states on new translations
    setValidationRating(null);
    setSubmittedSuccessfully(false);
    setActiveSurveyForm({
      regionalWord: "",
      regionOrTribe: "",
      usageDescription: "",
      contactHandle: ""
    });

    // Check for inappropriate vulgarity or violent topics on the client-side
    const containsInappropriateContent = (text: string): boolean => {
      const normalized = text.toLowerCase().trim();
      const EnglishProfanities = [
        /\bfuck\b/i, /\bshit\b/i, /\bbitch\b/i, /\basshole\b/i, /\bcunt\b/i, /\bdick\b/i, /\bpussy\b/i, /\bmotherfucker\b/i, /\bwhore\b/i, /\bslut\b/i, /\bbastard\b/i
      ];
      const KurdishArabicProfanities = [
        "فاك", "فاک", "حیز", "کونده", "قوندەر", "سەکس", "سکس", "کیر", "قوز", "کوز", "عیر", "کس", "تەزین", "گۆن", "گون", "گەواد", "دیوس", "قەحبە", "قحبة", "شەرمۆتا", "شرموط", "منیک"
      ];
      if (normalized.includes("fuck you") || normalized.includes("fuckoff") || normalized.includes("fuck-you")) {
        return true;
      }
      for (const regex of EnglishProfanities) {
        if (regex.test(normalized)) return true;
      }
      for (const badWord of KurdishArabicProfanities) {
        if (normalized.includes(badWord)) return true;
      }
      const violentKeywords = [
        "ئێشکەنجە", "کوشتن", "مرن", "شەر", "چەک", "تفەنگ", "دەمانجە", "بۆمب", "ئیرهاب", "داعش", "قتل", "تعذيب", "تفجير", "ارهاب", "سلاح", "مسدس", "violence", "kill", "murder", "bomb", "terrorist", "torture", "weapon", "shoot"
      ];
      for (const vWord of violentKeywords) {
        if (normalized.includes(vWord)) return true;
      }
      return false;
    };

    if (containsInappropriateContent(textToTranslate)) {
      setIsLoading(true);
      setError(null);

      const moderatedResult: TranslationResponse = {
        originalText: textToTranslate,
        translatedText: "[⚠️ ڕێسا: ناڤەڕۆک هاتییە بەربەستکرن / Content Moderated]",
        sourceLanguageParsed: sourceLanguage,
        badiniTranslationArabicScript: "ئاگەهدارییا ئەکادیمی: پەیڤا نەشیاو هاتییە فلتەرکرن د سیستمێ پەیڤۆک دا",
        badiniTranslationLatinScript: "Hişyariya Ekademî: Peyva nexwestî hat fîlterkirin",
        pronunciationGuide: "Fîlter-kirî",
        meaningAndIntent: {
          kurdishDescription: "ئەڤ دەقە پەیڤەکا نەشیاو د ناڤ خۆ دا دگریت. ژبۆ پاراستنا جڤاکی و زانستی یا فەرهەنگۆکێ، پەیڤۆک ب هیچ ڕەنگەکی بابەتێن توند یان نەشیاو وەرناگێڕیت ب شێوازەکێ راستەوخۆ.",
          englishDescription: "This text contains words flagged as inappropriate/vulgar. To preserve social and academic integrity, Peyvok screens explicit inputs and replaces them with standard grammatical explanations."
        },
        whyItIsUsed: {
          kurdishDescription: "بۆچی دهێتە ئاگەهدارکرن: ژبۆ رێگریکردنێ ژ بەڵاوبوونا زمانێ توند یان نەشیاو د ناڤ پلاتفۆڕمێ دا و پاراستنا ستانداردێن بلند یێن ئەکادیمی.",
          englishDescription: "Why it is flagged: Clean and respectful language ensures a professional educational workspace for all learners."
        },
        howItIsUsedContext: "کوردستان و دەڤەرا بادینان کو پشت بەستنێ ل سەر زانستی و شیانێن رێزگرتنێ دکەت.",
        examples: [
          {
            badiniArabic: "هیڤی دکەین دەقێن خاوێن و رێزدار بنڤیسن ژبۆ سودمەندبوونا زمانان.",
            badiniLatin: "Hêvî dikîn deqên xawên û rêzdar binivîsin ji bo fêrbûnê.",
            englishTranslation: "Please write respectful and clean texts for language acquisition purposes.",
            arabicTranslation: "يرجى كتابة نصوص محترمة ونظيفة لأغراض تعلم اللغة."
          }
        ],
        isUnrelated: false,
        attentionOrNote: {
          noteTitleKurdish: "⚠️ ئاگەهدارییا رێسا و پاراستنێ",
          noteContentKurdish: "پەیڤۆک سیستەمەکێ فەرهەنگی و ئەکادیمی یە. لێکدان ڤ دگەل بابەتێن نەشیاو ب شێوازەکێ مۆدێرن دهێتە فلتەرکرن.",
          noteTitleEnglish: "⚠️ Content Moderation Warning",
          noteContentEnglish: "Peyvok is an academic dictionary. Obscene inputs are filtered out and replaced with concept training notices.",
          typeSeverity: "warning"
        },
        quizDetails: {
          question: "Which type of vocabulary is acceptable in research-oriented lexicons like Peyvok?",
          options: ["Polite & Academic language", "Vulgar slang", "Violent expressions", "Offensive words"],
          correctAnswerIndex: 0,
          explanation: "Academic references strictly safeguard linguistic integrity and prioritize professional communication."
        }
      };

      setTimeout(() => {
        setCurrentWord(moderatedResult);
        setHasTranslated(true);
        setIsLoading(false);
      }, 250);
      return;
    }

    // --- CHECK CUSTOM DYNAMIC AI RULES TAUGHT UNDER PASSPHRASE ---
    const matchedCustomRule = customAiRules.find(
      (rule) => rule.inputPhrase.trim().toLowerCase() === textToTranslate.trim().toLowerCase()
    );
    if (matchedCustomRule) {
      setIsLoading(true);
      setError(null);
      setGrammarlyCorrection(null);
      setShowGrammarlyPopup(false);
      
      const customResult: TranslationResponse = {
        originalText: textToTranslate,
        translatedText: matchedCustomRule.englishTranslation + " (" + matchedCustomRule.kurdishMeaning + ")",
        sourceLanguageParsed: sourceLanguage,
        badiniTranslationArabicScript: matchedCustomRule.kurdishMeaning,
        badiniTranslationLatinScript: matchedCustomRule.regionOrDialect || "Taught Custom Rule",
        pronunciationGuide: matchedCustomRule.inputPhrase,
        meaningAndIntent: {
          kurdishDescription: "ئەڤ پەیڤە ب رێیا سیستەمێ فێرکرنا تایبەت هاتییە ناسین. دەڤەرا کارپێکرنێ: " + (matchedCustomRule.regionOrDialect || "گشتی") + ". ڕامان: " + matchedCustomRule.kurdishMeaning,
          englishDescription: "This phrase was identified via Peyvok custom AI instruction consoles. Loaded Region/Dialect: " + (matchedCustomRule.regionOrDialect || "General") + ". Interpretation: " + matchedCustomRule.kurdishMeaning
        },
        whyItIsUsed: {
          kurdishDescription: "بۆچی دهێتە بکارئینان: ئەڤ پەیڤە وەک زارڤایەکێ تایبەت یێ دەڤەری یێ ئامادەکری پێشان دهێت.",
          englishDescription: "Why it is used: Rendered directly from dynamic interactive dictionary mapping on custom workspace profiles."
        },
        howItIsUsedContext: matchedCustomRule.usageExample || "د ناڤ ئاخافتنێن رۆژانە دا ل دەڤەرا گشتی دهێتە بکارئینان.",
        examples: [
          {
            badiniArabic: matchedCustomRule.usageExample || matchedCustomRule.inputPhrase,
            badiniLatin: "Rêسايا زمانەوانی يا تایبەت",
            englishTranslation: matchedCustomRule.englishTranslation,
            arabicTranslation: "تمت المعالجة عبر ملقن الذكاء الاصطناعي الخاص بـ Peyvok"
          }
        ],
        isUnrelated: false,
        attentionOrNote: {
          noteTitleKurdish: "💡 پەیڤەکا هاتییە فێرکرن (Custom Trained Word)",
          noteContentKurdish: "ئەڤ پەیڤە ژ دەڤەرا " + (matchedCustomRule.regionOrDialect || "نەناسراو") + " هاتییە تۆمارکرن د بن فێرکارییا کۆدا " + (loggedInUserCode || "learnai1234") + ".",
          noteTitleEnglish: "💡 Custom Trained Phrase",
          noteContentEnglish: "This vocabulary is registered under the custom educational dataset taught through the AI training console.",
          typeSeverity: "info"
        },
        quizDetails: {
          question: `What is the correct taught definition of "${matchedCustomRule.inputPhrase}" in our custom dictionary?`,
          options: [matchedCustomRule.kurdishMeaning, "Unrelated term", "Incorrect option", "Opposite meaning"],
          correctAnswerIndex: 0,
          explanation: "Successfully loaded dynamic custom database rule mapped using specialized AI instructions."
        }
      };

      setTimeout(() => {
        setCurrentWord(customResult);
        saveToHistory(customResult);
        setHasTranslated(true);
        setIsLoading(false);
      }, 200);
      return;
    }
    
    // Check 2000 character limit warning
    if (textToTranslate.length > 2000) {
      setError("خەلەتی: وەرگێڕان نابیت ژ ٢٠٠٠ پیتا پتر ل دەمەکێ دا بیت! (Text size goes over the 2000 character security threshold.)");
      return;
    }

    const normalizedText = textToTranslate.trim().toLowerCase();
    const cacheKey = `peyvok_cache_${sourceLanguage}_${targetLanguage}_${normalizedText}`;

    // Check local cache for extreme speed / zero latency
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      try {
        const cachedResult: TranslationResponse = JSON.parse(cachedData);
        setIsLoading(true);
        setError(null);
        setGrammarlyCorrection(null);
        setShowGrammarlyPopup(false);
        setTimeout(() => {
          setCurrentWord(cachedResult);
          saveToHistory(cachedResult);
          setHasTranslated(true);
          setIsLoading(false);
        }, 120); // 120ms pleasant snappy micro-animation loading transition
        return;
      } catch (e) {
        console.warn("Error parsing translation cache:", e);
      }
    }

    // Token depletion check
    const estimatedCost = Math.max(40, 10 + textToTranslate.length * 3);
    if (userProfileTokens < estimatedCost) {
      setError("کێشەیا تۆکنان: تووشبووینە كێمبوونا تۆکنان! ژبۆ پاراستنا ئەکاونتێ تە، کەتەلۆگا تۆکنا ل سەر سەر ئامادە بکە کلیلەکا بەلاش ل ژوورێ.");
      setIsUserConsoleOpen(true); // Open the profile modal automatically
      return;
    }

    setIsLoading(true);
    setError(null);
    setGrammarlyCorrection(null);
    setShowGrammarlyPopup(false);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-code": loggedInUserCode,
        },
        body: JSON.stringify({
          text: textToTranslate,
          sourceLang: sourceLanguage,
          targetLang: targetLanguage,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (errorData && errorData.error) {
          throw new Error(errorData.error);
        }
        throw new Error("تکست نەهاتە وەرگێڕان. هیڤییە پشتی دەمەکا دی لێکبدە.");
      }

      const result: TranslationResponse = await response.json();
      
      if (result.isUnrelated === true) {
        setError("رێفینگی ئەز فێری ئەڤێ چەندێ نەکریمە! هیڤیدکەم رستە یان پەیڤەکە گرێدایی زمان و وەرگێرانێ بنڤیسە");
      } else {
        // Successful translation! Subtract tokens dynamically
        deductTokens(estimatedCost);

        setCurrentWord(result);
        saveToHistory(result);
        setHasTranslated(true);

        // Store in cache for future instant retrievals
        try {
          localStorage.setItem(cacheKey, JSON.stringify(result));
        } catch (e) {
          console.warn("Could not save to translation cache:", e);
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "خەلەتیەک د وەرگێڕانێ دا دروست بوو. ژ ئەرێ خۆ بگەڕێ پشتی دەمەکێ کێم.");
    } finally {
      setIsLoading(false);
    }
  };

  // API Call to AI Grammarly spellchecker
  const performGrammarlyCheck = async () => {
    if (!translateQuery || !translateQuery.trim()) return;

    // Check 2000 character limit warning
    if (translateQuery.length > 2000) {
      setError("خەلەتی: ڕاستکرنا زمانەوانی نابیت ژ ٢٠٠٠ پیتا پتر ل دەمەکێ دا بیت! (Text size goes over the 2000 character security threshold.)");
      return;
    }

    const normalizedGrammarText = translateQuery.trim().toLowerCase();
    const grammarCacheKey = `peyvok_grammar_cache_${selectedLanguage}_${normalizedGrammarText}`;

    // Check local cache for grammar spellcheck
    const cachedGrammarData = localStorage.getItem(grammarCacheKey);
    if (cachedGrammarData) {
      try {
        const cachedResult = JSON.parse(cachedGrammarData);
        setIsCheckingGrammar(true);
        setError(null);
        setTimeout(() => {
          setGrammarlyCorrection(cachedResult);
          setShowGrammarlyPopup(true);
          setIsCheckingGrammar(false);
          // Auto replace if different
          if (!cachedResult.isCorrectAlready && cachedResult.correctedText) {
            setTranslateQuery(cachedResult.correctedText);
          }
        }, 120);
        return;
      } catch (e) {
        console.warn("Error parsing grammar cache:", e);
      }
    }

    // Token depletion check
    const estimatedCost = Math.max(30, 5 + translateQuery.length * 2);
    if (userProfileTokens < estimatedCost) {
      setError("کێشەیا تۆکنان: تووشبووینە كێمبوونا تۆکنان! کەتەلۆگا تۆکنا ل سەر سەر ئامادە بکە کلیلەکا بەلاش ل ژوورێ.");
      setIsUserConsoleOpen(true); // Open the profile modal automatically
      return;
    }

    setIsCheckingGrammar(true);
    setError(null);
    try {
      const response = await fetch("/api/correct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-code": loggedInUserCode,
        },
        body: JSON.stringify({
          text: translateQuery,
          sourceLang: selectedLanguage
        })
      });

      if (!response.ok) {
        throw new Error("نەشیا پرۆسێسا گرامەری مۆدێل بکەت.");
      }

      const result = await response.json();
      setGrammarlyCorrection(result);
      setShowGrammarlyPopup(true);
      
      // Store in grammar cache
      try {
        localStorage.setItem(grammarCacheKey, JSON.stringify(result));
      } catch (e) {
        console.warn("Could not save to grammar cache:", e);
      }

      // Successful Grammar assessment! Subtract tokens dynamically
      deductTokens(estimatedCost);

      // Auto replace if different
      if (!result.isCorrectAlready && result.correctedText) {
        setTranslateQuery(result.correctedText);
      }
    } catch (err: any) {
      console.error(err);
      setError("سیستەمی نەشیا ڕاستکرنەوەی زمانەوانی لێکبدات.");
    } finally {
      setIsCheckingGrammar(false);
    }
  };

  // Copy text helper
  const handleCopyText = (text: string) => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
    } catch (err) {
      console.warn("Failed to copy text:", err);
    }
  };

  // Paste text helper
  const handlePasteText = async () => {
    try {
      if (!navigator.clipboard || !navigator.clipboard.readText) {
        throw new Error("Clipboard read API is not available in this browser/context.");
      }
      const text = await navigator.clipboard.readText();
      if (text) {
        setTranslateQuery(text);
        setShowPasteFallbackTip(false);
      }
    } catch (err) {
      console.warn("Clipboard API blocked or not supported. Falling back to manual instructions:", err);
      setShowPasteFallbackTip(true);
    }
  };

  // Vocal simulation and readouts supporting all languages, specifically high quality Kurdish TTS
  const speakText = (text: string, lang: string = "en-US", forceVoice: string | null = null) => {
    if (isMuted) return;
    window.speechSynthesis.cancel();

    const audioId = text.substring(0, 15);
    setActiveAudioId(audioId);

    // Choose appropriate voice/code and pre-process text for authentic phonetics
    let determinedLang = lang;
    let processedText = text;

    if (forceVoice) {
      determinedLang = forceVoice;
    } else {
      if (lang === "tr-TR" || lang.startsWith("tr") || lang.startsWith("ku-Latn")) {
        determinedLang = "tr-TR";
        // Map Kurdish Latin Hawar script phonetics to Turkish TTS parser for flawless local accent!
        processedText = text
          .replace(/ê/gi, "e")
          .replace(/î/gi, "i")
          .replace(/û/gi, "u")
          .replace(/x/gi, "h")
          .replace(/q/gi, "k")
          .replace(/w/gi, "v")
          .replace(/r̃/gi, "r")
          .replace(/ḧ/gi, "h")
          .replace(/ẍ/gi, "g");
      } else if (lang === "ar-SA" || lang.startsWith("ar") || lang.startsWith("fa") || lang.startsWith("ku")) {
        // Persian TTS engine supports and pronounces Kurdish specific letters perfectly (پ چ ژ گ v)
        determinedLang = "fa-IR";
        processedText = text;
      } else if (sourceLanguage === "German" || lang.startsWith("de")) {
        determinedLang = "de-DE";
      } else if (sourceLanguage === "French" || lang.startsWith("fr")) {
        determinedLang = "fr-FR";
      } else if (sourceLanguage === "Spanish" || lang.startsWith("es")) {
        determinedLang = "es-ES";
      } else {
        determinedLang = "en-US";
      }
    }

    const utterance = new SpeechSynthesisUtterance(processedText);
    utterance.lang = determinedLang;

    if (determinedLang === "en-US") {
      utterance.rate = 0.95;
    } else if (determinedLang === "fa-IR" || determinedLang === "ar-SA") {
      utterance.rate = 0.82; // Authentic slower rate for beautiful Behdini spoken layout
    } else {
      utterance.rate = 0.9;
    }

    utterance.onend = () => setActiveAudioId(null);
    utterance.onerror = () => setActiveAudioId(null);

    // Try to select explicit speech voice
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const voices = window.speechSynthesis.getVoices();
      const matchedVoice = voices.find(v => v.lang.startsWith(determinedLang.split("-")[0]));
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
    }

    window.speechSynthesis.speak(utterance);
  };

  // Voice transcribe Speech to Text handler
  const startVoiceInput = () => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        
        // Match lang parameters dynamically based on sourceLanguage
        let langCode = "en-US";
        if (sourceLanguage === "Arabic") langCode = "ar-SA";
        else if (sourceLanguage === "Turkish") langCode = "tr-TR";
        else if (sourceLanguage === "German") langCode = "de-DE";
        else if (sourceLanguage === "French") langCode = "fr-FR";
        else if (sourceLanguage === "Spanish") langCode = "es-ES";
        else if (sourceLanguage === "Persian") langCode = "fa-IR";
        else if (sourceLanguage === "Kurdish") langCode = "ku-IQ";

        recognition.lang = langCode;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        setIsRecordingVoice(true);
        recognition.start();

        recognition.onresult = (event: any) => {
          const speechToText = event.results[0][0].transcript;
          if (speechToText) {
            setTranslateQuery((prev) => prev ? prev + " " + speechToText : speechToText);
          }
          setIsRecordingVoice(false);
        };

        recognition.onerror = () => {
          setIsRecordingVoice(false);
        };

        recognition.onend = () => {
          setIsRecordingVoice(false);
        };
      } else {
        alert("ئەم پشکە پێویستی بە وێبگەڕی مۆدێرن هەیە (وەک Google Chrome دەنگی تۆمار دەکات).");
      }
    }
  };

  // Generate a random vocabulary quiz question from current word database
  const generateRandomQuiz = () => {
    const keys = Object.keys(PRESET_TERMS);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const word = PRESET_TERMS[randomKey];

    const quiz = {
      question: `وەرگێڕانا دروست یا زاراوەیێ "${word.originalText}" چییە د بادینی دا؟`,
      options: [
        word.badiniTranslationArabicScript,
        "بوارێ رەوشەنبیری و گشتی",
        "تەرخانکرنا بودجەیێن کاتی",
        "ئاریشە چارەسەرکرنا تەکنیکی"
      ].sort(() => Math.random() - 0.5), // Scramble
      correctAnswerIndex: 0,
      explanation: `ڕامانا دروست یا ${word.originalText} دبیتە: "${word.badiniTranslationArabicScript}".`
    };

    // Re-locate correct index
    quiz.correctAnswerIndex = quiz.options.indexOf(word.badiniTranslationArabicScript);
    setRandomQuiz(quiz);
    setQuizSelectedOption(null);
  };

  const processingPlaceholder: TranslationResponse = {
    originalText: translateQuery || "Compiling text...",
    translatedText: "دکەتە وەرگێڕان... / AI Decoding in progress...",
    sourceLanguageParsed: sourceLanguage,
    badiniTranslationArabicScript: "وەرگێڕان...",
    badiniTranslationLatinScript: "Peyvok AI Working...",
    pronunciationGuide: "Pey-vok De-cod-ing",
    meaningAndIntent: {
      kurdishDescription: "سیستەمێ زیرەک یێ پەیڤۆک دکەتە لێکۆلین ل سەر بنەمایێن فەرهەنگۆکی ژبۆ بدەستڤەئینانا وەرگێڕانەکا زانستی و دروست د ناڤبەرا زارەکێن جودا یێن بادینی دا...",
      englishDescription: "The neural linguistic engine is indexing contextual grammar trees to match syntactic, semantic, and colloquial dialects in real-time."
    },
    whyItIsUsed: {
      kurdishDescription: "سیستەم دکەتە تۆمارکرن کا چەوان ئەڤ بابەتە دهێتە گۆتن د جڤاکێ بەهدینان دا بۆ بەرچاوکرنا مفایێن زەق و دروستێن زمانڤانی...",
      englishDescription: "Synthesizing tribal variables, local usages, and geographic relevance factors into semantic scores."
    },
    howItIsUsedContext: "بارودۆخێ پڕۆسێسکردنێ بەردەوامە...",
    examples: [
      {
        badiniArabic: "سیستەم یێ لێکددەت... (Deep Semantic Mapping...)",
        badiniLatin: "Sîstem yê lêkdîdet...",
        englishTranslation: "Decoding structural clauses to generate high quality examples.",
        arabicTranslation: "جاري توليد الجمل والتراكيب النحوية الملائمة..."
      }
    ],
    attentionOrNote: {
      noteTitleKurdish: "پڕۆسێسکرن بەردەوامە",
      noteContentKurdish: "تکایە چەند چرکەکان بگرە تا کورتیا زاراڤان و هۆزان ب دروستی دهێنە دارشتن.",
      noteTitleEnglish: "AI Processing",
      noteContentEnglish: "Please wait a few seconds while tribal and regional dialect factors are calibrated.",
      typeSeverity: "info"
    },
    quizDetails: {
      question: "Are you ready to test your knowledge?",
      options: ["Yes", "Sure", "Always", "Of course"],
      correctAnswerIndex: 0,
      explanation: "Quiz is being custom generated for your queried term."
    },
    culturalFootnotes: {
      titleKurdish: "لێکۆلینا دەڤەری و فۆلکلۆری د ناڤبەرا زاخۆ و دهۆک و ئامێدیێ دا",
      titleEnglish: "Neural Dialectal Parsing...",
      contentKurdish: "پەیڤۆک دکەتە جیاوازکرن د ناڤبەرا زار یێن رۆژهەڵات و رۆژئاڤا یێن بەهدینان دا دگەل جیاوازیێن عەشایەری و زمانڤانی...",
      contentEnglish: "Scanning historical archives, tribal lexicons, and geographic boundaries for precise localization.",
      variationsList: []
    }
  };

  const displayWord = isLoading ? processingPlaceholder : currentWord;

  // Active Attention Warning Object lookup
  const activeAttention = displayWord.attentionOrNote || DEFAULT_ATTENTION_NOTE;
  // Active Quiz Object lookup
  const activeQuiz = randomQuiz || displayWord.quizDetails || DEFAULT_QUIZ_DETAILS;

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDarkMode ? "bg-[#060310] text-slate-100" : "light bg-slate-50 text-slate-900"} pb-16 antialiased relative transition-colors duration-300`}>
      {/* Dynamic Ambient Blur Background elements for ultra-premium feel */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Decorative Branding Status Bar */}
      <div className="bg-[#0b071a]/95 border-b border-indigo-950/60 text-slate-400 py-3 px-4 sm:px-6 text-xs font-mono grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-y-3.5 gap-x-2 md:gap-4 relative z-50 backdrop-blur-md">
        
        {/* AVATAR PLACEMENT ON THE LEFT (Replaces "Reving" / Languages logo completely as user requested) */}
        <div 
          className="col-span-1 order-1 flex items-center gap-2.5 relative z-50 shrink-0"
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
        >
          <button
            type="button"
            onClick={() => setActiveView("about-me")}
            className={`relative h-9 w-9 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 transition-all active:scale-95 duration-300 cursor-pointer hover:rotate-3 shadow ${
              activeView === "about-me" ? "ring-2 ring-cyan-400/50" : ""
            }`}
            aria-label="Reving profile switcher"
          >
            <div className="h-full w-full rounded-full bg-[#11082c] overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#100b2f]/90 z-20"></div>
              
              {/* Laptop Coder Illustration Icon */}
              <span className="text-sm z-30 pb-0.5 pr-0.5">👨‍💻</span>
              
              {/* Small Kurdistan flag widget */}
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-slate-900 border border-slate-700/50 flex items-center justify-center text-[5px] z-40 shadow-sm">
                ☀️
              </div>
            </div>
          </button>

          {/* Popover overlay element positioned elegantly relative to far-left avatar */}
          {isProfileHovered && (
            <div 
              onClick={() => {
                setActiveView("about-me");
                setIsProfileHovered(false);
              }}
              className="absolute left-0 top-full mt-2 w-72 bg-gradient-to-b from-[#140b3b] to-[#0a0520] border border-cyan-500/30 hover:border-cyan-400/80 rounded-2xl p-4.5 shadow-2xl text-center z-50 animate-fadeIn animate-duration-150 cursor-pointer transition-colors group/popover"
            >
              <div className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-b from-[#38bdf8] to-[#818cf8] p-[2px] shadow-md flex items-center justify-center relative overflow-hidden">
                  <div className="h-full w-full rounded-full bg-[#10062f] flex items-center justify-center text-2xl">
                    👨‍💻
                  </div>
                </div>

                <h3 className="text-base font-black text-white mt-2.5 flex items-center gap-1 group-hover/popover:text-cyan-300 transition-colors">
                  Reving Ghazwan
                  <span className="text-xs">☀️</span>
                </h3>

                <p className="text-[10px] text-indigo-300 font-bold tracking-wide mt-0.5">
                  IT Leader & Academic Mentor
                </p>

                <div className="w-full h-[1px] bg-indigo-950/60 my-3"></div>

                <div className="text-[10px] text-cyan-400 font-black animate-pulse flex items-center justify-center gap-1 bg-cyan-950/30 border border-cyan-500/30 group-hover/popover:bg-cyan-900/40 group-hover/popover:border-cyan-400 px-3 py-2 rounded-xl transition-all w-full">
                  ✦ کلیک بکە بۆ دینتنا زانیاریێن زێدەتر ✦
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Global Navigation Tabs (Translator, About Me, Privacy & Terms). Hides completely during onboarding step 1 & 2 as requested */}
        {!isOnboardingOpen && (
          <div className="col-span-2 order-3 md:order-2 flex flex-row flex-nowrap overflow-x-auto md:overflow-visible items-center justify-start md:justify-center gap-1 sm:gap-2 bg-[#05030c] p-1.5 rounded-2xl border border-indigo-950/60 shadow-inner max-w-full no-scrollbar w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveView("translator")}
              className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-black transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer transform duration-300 shrink-0 select-none ${
                activeView === "translator"
                  ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-950/50 scale-105 border border-cyan-400/30"
                  : "text-indigo-200 hover:text-white hover:bg-indigo-950/50 hover:scale-[1.01] border border-transparent"
              }`}
            >
              <Languages className={`h-4 w-4 shrink-0 ${activeView === "translator" ? "animate-pulse" : ""}`} />
              <span className="whitespace-nowrap">{t.navTranslator}</span>
            </button>
            
            <button
              type="button"
              onClick={() => setActiveView("about-me")}
              className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-black transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer transform duration-300 shrink-0 select-none ${
                activeView === "about-me"
                  ? "bg-gradient-to-r from-amber-500 via-pink-600 to-purple-600 text-white shadow-md shadow-purple-950/50 scale-105 border border-amber-400/30"
                  : "text-indigo-200 hover:text-white hover:bg-indigo-950/50 hover:scale-[1.01] border border-transparent"
              }`}
            >
              <User className={`h-4 w-4 shrink-0 ${activeView === "about-me" ? "animate-bounce" : ""}`} style={{ animationDuration: '3s' }} />
              <span className="whitespace-nowrap">{t.navAboutMe}</span>
            </button>
            
            <button
              type="button"
              onClick={() => setActiveView("privacy")}
              className={`px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-black transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer transform duration-300 shrink-0 select-none ${
                activeView === "privacy"
                  ? "bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 text-white shadow-md shadow-teal-950/50 scale-105 border border-emerald-400/30"
                  : "text-indigo-200 hover:text-white hover:bg-indigo-950/50 hover:scale-[1.01] border border-transparent"
              }`}
            >
              <Shield className="h-4 w-4 shrink-0" />
              <span className="whitespace-nowrap">{t.navPrivacy}</span>
            </button>
          </div>
        )}

        {/* Theme Toggle, User Profile/Tokens & Language Dropdown */}
        <div className="col-span-1 order-2 md:order-3 flex items-center gap-1.5 justify-end md:ml-auto shrink-0">
          {/* USER CONSOLE MOVED TO TOP BAR */}
          <div className="relative shrink-0 select-none">
            <button
              onClick={() => setIsUserConsoleOpen(true)}
              className="flex items-center gap-2 bg-[#120731] hover:bg-[#1b0c47] border border-amber-500/40 rounded-xl px-2.5 py-1 text-[10.5px] font-black text-amber-300 transition-all cursor-pointer shadow-inner active:scale-95 focus:outline-none"
              title="Profile & Tokens"
            >
              <div className="w-5 h-5 rounded-lg bg-gradient-to-tr from-amber-500 via-amber-300 to-orange-500 p-0.5 shadow flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#0d0725] rounded-[5px] flex items-center justify-center text-[10px]">
                  {userProfileGender === "boy" ? "👦" : "👧"}
                </div>
              </div>
              
              <div className="flex flex-col text-right leading-none gap-0.5" dir="rtl">
                <span className="text-[9.5px] font-black text-amber-300">
                  {userProfileName}
                </span>
                <span className="text-[9px] text-emerald-400 font-extrabold font-mono flex items-center gap-0.5 justify-end">
                  <span>{userProfileTokens.toLocaleString()} TKN</span>
                </span>
              </div>
            </button>
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#120731] border border-[#3b2289]/45 text-indigo-100 hover:border-indigo-400 focus:outline-none transition-all cursor-pointer shadow-inner active:scale-95"
            title={isDarkMode ? "Light Mode" : "Dark Mode"}
          >
            {isDarkMode ? (
              <Sun className="h-3 w-3 text-amber-400" />
            ) : (
              <Moon className="h-11 w-11 text-indigo-600" />
            )}
          </button>

          <div className="relative col-span-1">
          <button
            type="button"
            onClick={() => setIsSiteLangOpen(!isSiteLangOpen)}
            className="flex items-center gap-1.5 bg-[#120731] border border-[#3b2289]/45 rounded-xl px-2 py-1 text-[10px] font-black text-indigo-100 hover:border-indigo-400 focus:outline-none transition-all cursor-pointer shadow-inner active:scale-95"
          >
            <Globe className="h-3 w-3 text-cyan-400 shrink-0" />
            <div className="flex items-center gap-1 min-w-[70px] text-left">
              <FlagImage code={
                siteLang === "ku_badini" ? "kurdistan" :
                siteLang === "ku_sorani" ? "kurdistan" :
                siteLang === "en" ? "english" :
                siteLang === "ar" ? "arabic" :
                siteLang === "de" ? "german" :
                siteLang === "fr" ? "french" :
                siteLang === "tr" ? "turkish" : "russian"
              } className="h-2.5 w-4 rounded-[2px] shadow-sm border border-indigo-950/20" />
              <span>
                {siteLang === "ku_badini" && "بادینی"}
                {siteLang === "ku_sorani" && "سۆرانی"}
                {siteLang === "en" && "English"}
                {siteLang === "ar" && "العربية"}
                {siteLang === "de" && "Deutsch"}
                {siteLang === "fr" && "Français"}
                {siteLang === "tr" && "Türkçe"}
                {siteLang === "ru" && "Русский"}
              </span>
            </div>
            <span className="text-[8px] text-indigo-400">▼</span>
          </button>

          {isSiteLangOpen && (
            <>
              {/* Backing clickable backdrop overlay to dismiss */}
              <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsSiteLangOpen(false)}></div>
              
              <div className="absolute right-0 mt-2 w-44 bg-gradient-to-b from-[#130b35] to-[#09051d] border border-indigo-900 rounded-2xl shadow-2xl p-1 z-50 animate-fadeIn max-h-[250px] overflow-y-auto custom-scrollbar">
                {[
                  { code: "ku_badini", label: "بادینی", flagCode: "kurdistan" },
                  { code: "ku_sorani", label: "سۆرانی", flagCode: "kurdistan" },
                  { code: "en", label: "English", flagCode: "english" },
                  { code: "ar", label: "العربية", flagCode: "arabic" },
                  { code: "de", label: "Deutsch", flagCode: "german" },
                  { code: "fr", label: "Français", flagCode: "french" },
                  { code: "tr", label: "Türkçe", flagCode: "turkish" },
                  { code: "ru", label: "Русский", flagCode: "russian" }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.code}
                    onClick={() => {
                      setSiteLang(item.code as any);
                      setIsSiteLangOpen(false);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded-lg text-[10px] font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      siteLang === item.code 
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-950/45" 
                        : "text-slate-300 hover:text-white hover:bg-indigo-950/40"
                    }`}
                  >
                    <FlagImage code={item.flagCode} className="h-2.5 w-4 rounded-[2px]" />
                    <span className="truncate">{item.label}</span>
                    {siteLang === item.code && <Check className="h-2.5 w-2.5 stroke-[3] ml-auto text-cyan-300" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>

    {!isOnboardingOpen && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
        
        {/* PREMIUM DISPLAY CLASS HEADER (Designed to stand out with Decentralized Premium User Console) */}
        <header className="mb-10 flex flex-col xl:flex-row xl:items-center xl:justify-between bg-gradient-to-b from-[#160d3d]/95 to-[#0e0828]/98 border border-[#2d1b6b]/50 shadow-2xl rounded-[32px] p-6 lg:p-8 gap-6 backdrop-blur-md relative overflow-visible group">
          {/* Subtle glow light indicators */}
          <div className="absolute top-0 left-10 w-44 h-[2px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-transparent"></div>
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-700"></div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-4 rounded-2xl text-white shadow-xl shadow-purple-950/40 relative group-hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => setActiveView("translator")}>
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <PeyvokLogo className="h-10 w-10 text-white" />
            </div>
            
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm shadow-amber-950/20">
                  <Sparkle className="h-3.5 w-3.5 fill-slate-950 animate-spin" style={{ animationDuration: '6s' }} />
                  {t.badgeKurdishPremium}
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-sans flex flex-wrap items-center gap-x-3.5 gap-y-2 leading-tight">
                <span className="block font-black tracking-tight">{highlightPeyvok(t.headerTitle)}</span>
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-sans text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-lg shadow-md shrink-0 self-center">AI</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                {t.headerSubtitle}
              </p>
            </div>
          </div>
        </header>

        {activeView === "translator" && (
          <>
            {/* HIGH-END TRANSLATE DECODER CARD (Centered, takes full-width layout) */}
            <div className="bg-[#100927] border border-indigo-950/60 rounded-[32px] p-6 lg:p-8 shadow-2xl mb-8 relative overflow-hidden">
          
              {/* Header decor lights */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-indigo-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span className="text-xs text-indigo-300">
                    <span className="font-bold tracking-normal">پەیڤۆك</span>{" "}
                    <span className="font-extrabold uppercase tracking-widest ml-1">AI Premium Translation</span>
                  </span>
                </div>
                <span className="bg-indigo-950/80 text-indigo-400 text-[10px] font-mono border border-indigo-900/50 px-2 py-0.5 rounded-full">
                  Secure Cloud Decoded
                </span>
              </div>

              <h2 className={`text-2xl font-black text-white mb-1 ${["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? 'text-right' : 'text-left'}`} dir={["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? "rtl" : "ltr"}>
                {(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).headerTitle} <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-400 bg-clip-text text-transparent font-bold tracking-normal drop-shadow-md text-[28px] inline-block px-1 select-none animate-pulse">پەیڤۆك</span>
              </h2>
              <p className={`text-xs text-slate-400 mb-6 ${["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? 'text-right' : 'text-left'}`} dir={["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? "rtl" : "ltr"}>
                {(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).headerSub}
              </p>

              {/* MODERN ACADEMIC PARTICIPATION BANNER */}
              <div className="bg-gradient-to-r from-[#170940] via-[#0f0729] to-[#04020a] border-2 border-indigo-500/40 rounded-[24px] p-5 mb-6 shadow-[0_0_35px_rgba(99,102,241,0.15)] relative overflow-hidden group hover:border-indigo-400/60 transition-all duration-300" dir="rtl">
                {/* Light decoration */}
                <div className="absolute -left-16 -top-16 w-36 h-36 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"></div>
                <div className="absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-amber-500/5 blur-3xl pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-5 relative z-10 text-right">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 bg-amber-500/15 border border-amber-500/30 text-amber-400 rounded-2xl shrink-0 shadow-lg mt-0.5" style={{ animation: 'bounce 4s infinite' }}>
                      <MessageSquare className="h-5.5 w-5.5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap justify-start">
                        <span className="text-[10px] bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-2.5 py-0.5 rounded-md font-black uppercase tracking-wider">
                          CAMPBELL ACADEMIC INVITATION
                        </span>
                        <span className="text-indigo-400 text-xs font-black">پەیڤۆک HQ</span>
                      </div>
                      <p className="text-[13px] text-slate-100 font-extrabold leading-relaxed text-right font-kurdish mt-1.5">
                        مە دفێت زمانێ مە بهێت زەنگین کرن ژ پەیفێن رەسەن و توژی هەریکارببە ئەگەر پەیفەك رامان دناف سیستەمێ مە نەبیت یان خەلەتیەک د وەرگێرانا سیستەمی دا هەبیت مە ئاگەداربکە.
                      </p>
                      <p className="text-[12.5px] text-amber-300 font-extrabold font-kurdish">
                        ئەرێ تە دفێت بەشداربی؟ (Would you like to participate?)
                      </p>
                    </div>
                  </div>
                  
                  <div className="shrink-0 w-full md:w-auto">
                    <button
                      onClick={() => {
                        setSubmittedSuccessfully(false);
                        setValidationRating("no");
                        setShowPeerReviewModal(true);
                      }}
                      className="w-full md:w-auto bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs px-6 py-3 rounded-2xl transition-all cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2 font-kurdish relative overflow-hidden group-hover:scale-[1.02]"
                    >
                      <span>👨‍🎓 بەلێ، دێ پشکدار بم (Join & Review)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* DUAL SELECTOR BAR - MULTI LANGUAGES SECTION */}
              <div className="bg-[#0b051e] p-4.5 rounded-2xl border border-indigo-950/85 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-11 items-center gap-4">
                  
                  {/* FROM LANGUAGE COLUMN */}
                  <div className="lg:col-span-5 space-y-2.5">
                    <div className="flex items-center justify-between mb-1 px-1">
                      <span className="text-[10px] font-black tracking-widest text-[#fbbf24] uppercase flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <Languages className="h-3 w-3 text-amber-400" />
                        <span>FROM ({(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).fromLabel})</span>
                      </span>
                      <span className="text-[9px] font-black tracking-widest text-[#fbbf24] bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-md uppercase font-mono shadow-[0_0_10px_rgba(251,191,36,0.15)] flex items-center gap-1.5 shrink-0 select-none">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
                        SOURCE CONSOLE
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 p-2.5 bg-gradient-to-b from-[#160f38] to-[#0c0622] border-2 border-amber-500/35 rounded-2xl max-h-[170px] overflow-y-auto custom-scrollbar shadow-[0_4px_25px_rgba(251,191,36,0.1)]">
                      {LANGUAGES_CONFIG.map((langObj) => {
                        const isSelected = sourceLanguage === langObj.code;
                        return (
                          <button
                            type="button"
                            key={`from-${langObj.code}`}
                            onClick={() => {
                              setSourceLanguage(langObj.code);
                              setGrammarlyCorrection(null);
                            }}
                            className={`w-full px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between border cursor-pointer group select-none relative ${
                              isSelected 
                                ? "bg-gradient-to-r from-amber-500/20 via-[#4f46e5]/20 to-[#120a2e]/90 border-amber-400 text-white shadow-lg shadow-amber-950/50 scale-[1.02] ring-1 ring-amber-400/30" 
                                : "bg-[#050212]/80 border-indigo-950/50 text-slate-300 hover:text-white hover:bg-[#120930]/90 hover:border-amber-500/20 hover:scale-[1.01]"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <FlagImage code={langObj.code} />
                                {isSelected && (
                                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-col items-start leading-tight">
                                <span className={`text-xs font-black ${isSelected ? "text-amber-300" : "text-slate-200"}`}>
                                  {langObj.code}
                                </span>
                                <span className="text-[9px] text-slate-400 font-medium tracking-normal">
                                  {langObj.localized}
                                </span>
                              </div>
                            </div>
                            
                            {isSelected ? (
                              <div className="flex items-center gap-1.5">
                                <span className="text-[9.5px] font-mono font-black text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30 uppercase animate-pulse">
                                  ACTIVE
                                </span>
                                <Check className="h-3.5 w-3.5 stroke-[3.5] text-[#fbbf24] shrink-0" />
                              </div>
                            ) : (
                              <span className="text-[9px] text-indigo-400/50 font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                Select
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* SWAP BUTTON COLUMN */}
                  <div className="lg:col-span-1 flex justify-center pt-2 lg:pt-5">
                    <button
                      type="button"
                      onClick={handleSwapLanguages}
                      className="bg-indigo-950/80 hover:bg-slate-900 border border-[#3b1275]/55 text-indigo-300 p-2.5 rounded-full transition-all cursor-pointer transform hover:scale-110 active:scale-95 shadow-md flex items-center justify-center animate-pulse"
                      title="Swap languages / زمانان بگۆڕە"
                    >
                      <ArrowLeftRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* TO LANGUAGE COLUMN */}
                  <div className="lg:col-span-5 space-y-2.5">
                    <div className="flex items-center justify-between mb-1 px-1">
                      <span className="text-[10px] font-black tracking-widest text-[#10b981] uppercase flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <Languages className="h-3 w-3 text-emerald-400" />
                        <span>TO ({(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).toLabel})</span>
                      </span>
                      <span className="text-[9px] font-black tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md uppercase font-mono shadow-[0_0_10px_rgba(16,185,129,0.15)] flex items-center gap-1.5 shrink-0 select-none">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                        TARGET CONSOLE
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 p-2.5 bg-gradient-to-b from-[#0c1a27] to-[#040d17] border-2 border-emerald-500/35 rounded-2xl max-h-[170px] overflow-y-auto custom-scrollbar shadow-[0_4px_25px_rgba(16,185,129,0.15)]">
                      {TARGET_LANGUAGES_CONFIG.map((langObj) => {
                        const isSelected = targetLanguage === langObj.code;
                        return (
                          <button
                            type="button"
                            key={`to-${langObj.code}`}
                            onClick={() => {
                              setTargetLanguage(langObj.code);
                            }}
                            className={`w-full px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between border cursor-pointer group select-none relative ${
                              isSelected 
                                ? "bg-gradient-to-r from-emerald-500/20 via-[#4f46e5]/20 to-[#120a2e]/90 border-emerald-400 text-white shadow-lg shadow-emerald-950/50 scale-[1.02] ring-1 ring-emerald-400/30" 
                                : "bg-[#050212]/80 border-indigo-950/50 text-slate-300 hover:text-white hover:bg-[#07152a]/90 hover:border-emerald-500/20 hover:scale-[1.01]"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <FlagImage code={langObj.code} />
                                {isSelected && (
                                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                                  </span>
                                )}
                              </div>
                              <div className="flex flex-col items-start leading-tight">
                                <span className={`text-xs font-black ${isSelected ? "text-emerald-300" : "text-slate-200"}`}>
                                  {langObj.code}
                                </span>
                                <span className="text-[9px] text-slate-400 font-medium tracking-normal">
                                  {langObj.localized}
                                </span>
                              </div>
                            </div>
                            
                            {isSelected ? (
                              <div className="flex items-center gap-1.5">
                                <span className="text-[9.5px] font-mono font-black text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30 uppercase animate-pulse">
                                  ACTIVE
                                </span>
                                <Check className="h-3.5 w-3.5 stroke-[3.5] text-[#10b981] shrink-0" />
                              </div>
                            ) : (
                              <span className="text-[9px] text-indigo-400/50 font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                Select
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>

              {/* WARNING BOX FOR IDENTICAL LANGUAGES */}
              {sourceLanguage === targetLanguage && (
                <div className="mb-6 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-500/30 rounded-2xl p-4 flex items-center justify-between gap-3 animate-fadeIn shadow-lg shadow-amber-950/25" dir="rtl">
                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <AlertTriangle className="h-5 w-5 animate-pulse" />
                    </div>
                    <div className="space-y-0.5 text-right font-sans">
                      <h5 className="text-sm font-black text-amber-300">ئاگاهی: زمانێن هەلبژارتی وەک هەڤن!</h5>
                      <p className="text-xs text-slate-300 font-bold leading-relaxed">
                        زمانێ دەستپێکێ و زمانێ وەرگێڕانێ نکارن هەردوو وەک هەڤ بن! ژبۆ دەستپێکرنا وەرگێڕانێ هیڤییە زمانەکێ دی هەلبژێری.
                      </p>
                    </div>
                  </div>
                </div>
              )}

          {/* PRIMARY TEXT AREA WITH CONTROL BAR */}
          <div className="space-y-4">
            {autoCorrectFeedback && (
              <div className="bg-[#05291b] border border-emerald-500/20 text-emerald-200 text-xs py-2 px-4 rounded-xl flex items-center gap-2 animate-fadeIn font-kurdish font-bold justify-between shadow-lg" dir="rtl">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  {autoCorrectFeedback}
                </span>
                <button type="button" onClick={() => setAutoCorrectFeedback("")} className="text-emerald-500 hover:text-white font-black text-sm p-1">&times;</button>
              </div>
            )}

            <div className="relative bg-[#0d0724] border border-[#231557]/60 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
              <textarea
                dir="auto"
                rows={3}
                value={translateQuery}
                onChange={(e) => setTranslateQuery(e.target.value)}
                placeholder={
                  LANGUAGES_CONFIG.find(l => l.code === sourceLanguage)?.placeholder || "تشتەکی بنڤیسە ژبۆ وەرگێڕانێ..."
                }
                className="w-full bg-transparent border-0 resize-none text-white placeholder-slate-500 focus:outline-none focus:ring-0 text-base font-semibold leading-relaxed p-3"
              />

              {isRecordingVoice && (
                <div className="mx-3 my-2 bg-rose-950/40 border border-rose-900/60 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute animate-ping h-6 w-6 rounded-full bg-rose-500 opacity-20"></span>
                      <div className="bg-rose-900 text-rose-300 p-2 rounded-full">
                        <Mic className="h-4 w-4 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-black text-rose-300">گوهگرتن یا چالاکە... (Listening Now)</h5>
                      <p className="text-[10px] text-rose-400 mt-0.5">
                        ب زمانێ <span className="underline font-bold text-white uppercase">{sourceLanguage}</span> باخڤە... دێ هێتە گۆڕین بۆ تێکستی
                      </p>
                    </div>
                  </div>

                  {/* Sparkling sound waves animated cleanly in pure tailwind */}
                  <div className="flex items-end gap-1 h-5 pb-0.5 shrink-0">
                    <span className="w-1 bg-rose-400 rounded-full animate-bounce h-2" style={{ animationDelay: "0ms", animationDuration: "0.55s" }}></span>
                    <span className="w-1 bg-rose-300 rounded-full animate-bounce h-4" style={{ animationDelay: "150ms", animationDuration: "0.6s" }}></span>
                    <span className="w-1 bg-rose-400 rounded-full animate-bounce h-5" style={{ animationDelay: "300ms", animationDuration: "0.5s" }}></span>
                    <span className="w-1 bg-rose-300 rounded-full animate-bounce h-3" style={{ animationDelay: "450ms", animationDuration: "0.7s" }}></span>
                    <span className="w-1 bg-rose-500 rounded-full animate-bounce h-1.5" style={{ animationDelay: "100ms", animationDuration: "0.45s" }}></span>
                  </div>
                </div>
              )}

              {/* REAL-TIME SPELLCHECK AND TYPO SUGGESTION */}
              {(() => {
                const checkResult = kurdishSpellCheck(translateQuery);
                if (!checkResult) return null;
                return (
                  <div className="mx-3 my-2.5 bg-indigo-950/50 border border-indigo-500/20 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn relative font-kurdish text-right shadow-md" dir="rtl">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                      </span>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-[#fbbf24] uppercase block mb-0.5">
                          💡 پێشنیارا ڕێنووسێ (Spelling suggestion)
                        </span>
                        <p className="text-xs text-slate-200 font-bold leading-normal">
                          دبیت تە مەبەست ل نڤیسینا دروست یا پەیڤێ بیت:{" "}
                          <span 
                            className="text-emerald-300 underline underline-offset-4 cursor-pointer hover:text-emerald-200 font-extrabold" 
                            onClick={() => setTranslateQuery(checkResult.corrected)}
                          >
                            {checkResult.corrected}
                          </span>
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium italic mt-0.5">
                          ({checkResult.explanation})
                        </p>
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={() => setTranslateQuery(checkResult.corrected)}
                      className="px-4 py-2 text-[10px] font-black rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all border border-emerald-500/30 shadow-sm cursor-pointer shrink-0 self-end sm:self-center font-kurdish"
                    >
                      ڕاستبکە (Apply)
                    </button>
                  </div>
                );
              })()}

              {showPasteFallbackTip && (
                <div className="mx-3 my-2 bg-amber-950/40 border border-amber-900/60 rounded-xl p-3.5 flex flex-col sm:flex-row items-start justify-between gap-3 animate-fadeIn relative">
                  <div className="flex items-start gap-2.5">
                    <div className="bg-amber-900/80 text-amber-300 p-2 rounded-lg shrink-0 mt-0.5">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-xs font-black text-amber-300">ڕێنماییا پەیستکرنێ (Clipboard Notice)</h5>
                      <p className="text-[11px] text-amber-400 font-semibold leading-relaxed" dir="rtl">
                        ڕێگەپێدانی پەیستکرنێ (Clipboard) ل پشکنەرێ تە هاتیە بلۆککرن. تکایە کلیكا بکە سەر جهێ نڤیسینێ و کلیلا <span className="text-white bg-slate-900 px-1 py-0.5 rounded font-mono font-bold">Ctrl + V</span> (یان <span className="text-white bg-slate-900 px-1 py-0.5 rounded font-mono font-bold">Cmd + V</span>) ل سەر کیبۆردێ بکاربینە بۆ دانانا دەقی.
                      </p>
                      <p className="text-[10px] text-slate-400 italic font-medium leading-normal">
                        Automatic paste is blocked by sandbox permissions. Please click inside the box and use <kbd className="px-1 py-0.5 bg-slate-800 rounded font-mono text-white text-[9px]">Ctrl+V</kbd> (<kbd className="px-1 py-0.5 bg-slate-800 rounded font-mono text-white text-[9px]">⌘+V</kbd>) to paste manually.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPasteFallbackTip(false)}
                    className="text-amber-300 hover:text-white text-[10px] font-bold px-2.5 py-1 rounded border border-amber-800/40 bg-amber-950/20 hover:bg-amber-900/40 transition-all cursor-pointer self-end sm:self-start shrink-0"
                  >
                    تێگەهشتم (Got it)
                  </button>
                </div>
              )}

              {/* Float helper action buttons inside textarea (Clear, Copy, Paste, Mic) */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between border-t border-indigo-950/50 pt-2 px-1 gap-2.5">
                
                {/* Left controls: Copy & Paste & Clear & Voice to Text */}
                <div className="flex flex-wrap items-center gap-1.5 xs:gap-2">
                  <button
                    type="button"
                    onClick={handlePasteText}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-indigo-950/60 transition-all flex items-center gap-1 text-[11px] font-bold"
                    title="Paste text from clipboard"
                  >
                    <Clock className="h-3.5 w-3.5 text-indigo-400" />
                    <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).pasteLabel}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyText(translateQuery)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-indigo-950/60 transition-all flex items-center gap-1 text-[11px] font-bold"
                    title="Copy input text"
                  >
                    <Copy className="h-3.5 w-3.5 text-indigo-400" />
                    <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).copyLabel}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setTranslateQuery("");
                      setGrammarlyCorrection(null);
                    }}
                    className="p-2 rounded-xl text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 transition-all flex items-center gap-1 text-[11px] font-bold"
                    title="Clear text area"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).clearLabel}</span>
                  </button>

                  <button
                    type="button"
                    onClick={startVoiceInput}
                    className={`px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1 text-[11px] font-bold border cursor-pointer font-kurdish relative overflow-hidden group ${
                      isRecordingVoice 
                        ? "bg-rose-950/80 text-rose-400 border-rose-500/40 animate-pulse shadow-md" 
                        : "bg-[#130d2f] text-indigo-300 hover:text-white border-[#27175c]/60 hover:bg-[#1a113e]"
                    }`}
                    title="Speak dynamically to write"
                  >
                    <Mic className={`h-3.5 w-3.5 ${isRecordingVoice ? "text-rose-400" : "text-indigo-400 group-hover:scale-110 transition-transform"}`} />
                    <span>{isRecordingVoice ? (LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).listeningLabel : (LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).voiceLabel}</span>
                  </button>
                </div>

                {/* SECURED CHARACTER METER */}
                <div className="flex items-center justify-end gap-1.5 px-3 py-1 rounded-xl bg-[#09031c] border border-indigo-950/80 self-end xs:self-auto min-w-[90px]">
                  <span className={`text-[10px] font-mono font-black ${
                    translateQuery.length > 2000 
                      ? "text-rose-400 animate-pulse" 
                      : translateQuery.length > 1700 
                        ? "text-amber-300" 
                        : "text-indigo-300"
                  }`}>
                    {translateQuery.length.toLocaleString()}
                  </span>
                  <span className="text-indigo-950 text-[10px] font-bold">/</span>
                  <span className="text-indigo-500 font-mono text-[10px] font-semibold">2,000</span>
                  <span className="text-indigo-400 text-[8.5px] font-black uppercase tracking-wider ml-0.5">LMT</span>
                </div>
              </div>
            </div>

            {/* AUTOCOMPLETE SUGGESTIONS CONTAINER */}
            {translateQuery.trim() && (() => {
              const query = translateQuery.toLowerCase().trim();
              const presetKeys = Object.keys(PRESET_TERMS);
              const customTaughtKeys = customAiRules.map(r => r.inputPhrase);
              const commonWords = [
                "procurement", "capacity", "feasibility", "study", "hello", "where", "water", "love", "peace", 
                "توی چلۆنی", "چەوانى", "د باسی", "سپاس", "برا", "زمان", "قوتابی", "فەرهەنگ", "ئاکرێ", "دهۆک", "زاخۆ"
              ];
              const combined = Array.from(new Set([...presetKeys, ...customTaughtKeys, ...commonWords]));
              const suggestions = combined.filter(word => 
                word.toLowerCase().includes(query) && word.toLowerCase() !== query
              ).slice(0, 5);

              if (suggestions.length === 0) return null;

              return (
                <div className="flex flex-wrap items-center gap-1.5 px-1 animate-fadeIn mt-1" dir="rtl">
                  <span className="text-[10px] uppercase font-black tracking-wider text-indigo-400">
                    پێشنیارکری (Suggestions):
                  </span>
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setTranslateQuery(s);
                        handleTranslateSubmit(s);
                      }}
                      type="button"
                      className="px-2.5 py-1 text-[11px] font-black bg-[#160d3d]/90 hover:bg-[#251566] text-amber-300 rounded-lg border border-indigo-950/70 hover:border-amber-500/40 transition-all duration-155 cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <span>{s}</span>
                      <ArrowRight className="h-2.5 w-2.5 text-indigo-400" />
                    </button>
                  ))}
                </div>
              );
            })()}

            {/* BUTTONS ROW: Translate Submit & Grammarly Spellcheck Corrector */}
            <div className="flex flex-col sm:flex-row gap-3">
              
              {/* Submission Button */}
              <button
                onClick={() => handleTranslateSubmit(translateQuery)}
                disabled={isLoading || !translateQuery.trim()}
                className="flex-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-black py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-indigo-950/40 flex items-center justify-center gap-2.5 text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).submitButtonLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              {/* Grammarly AI spellcheck activator */}
              <button
                onClick={performGrammarlyCheck}
                disabled={isCheckingGrammar || !translateQuery.trim()}
                className="bg-[#1b123f] hover:bg-[#251a54] text-purple-200 border border-purple-900/40 font-bold py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 text-xs"
              >
                {isCheckingGrammar ? (
                  <span className="h-4.5 w-4.5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 text-[#fbbf24] animate-bounce" />
                    <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).spellcheckButtonLabel}</span>
                  </>
                )}
              </button>
            </div>

            {/* ERROR / EXCEPTION HANDLING ALERTS */}
            {error && (
              error.toLowerCase().includes("رێفینگی") ? (
                <div className="bg-gradient-to-r from-red-500 via-pink-500 to-amber-500 p-[2px] rounded-3xl shadow-2xl animate-fadeIn mb-5 border border-red-400/25">
                  <div className="bg-[#0b0313] text-white p-6 lg:p-8 rounded-[22px] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-right" dir="rtl">
                    {/* Glowing background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-600/10 rounded-full blur-xl pointer-events-none"></div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/10 text-red-400 border border-red-500/30 shrink-0 shadow-lg animate-pulse">
                        <AlertTriangle className="h-7 w-7" />
                      </div>
                      <div className="space-y-1.5 text-center md:text-right">
                        <h4 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-red-400 via-pink-400 to-amber-300 bg-clip-text text-transparent leading-snug font-kurdish">
                          رێفینگی ئەز فێری ئەڤێ چەندێ نەکریمە!
                        </h4>
                        <p className="text-sm lg:text-base font-extrabold text-slate-200 font-kurdish">
                          هیڤیدکەم رستە یان پەیڤەکا گرێدایی زمان و وەرگێرانێ بنڤیسە.
                        </p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => setError(null)} 
                      className="px-6 py-3 text-xs lg:text-sm font-black rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/15 active:scale-95 shrink-0 shadow-md font-kurdish"
                    >
                      تێگەهشتم 👍
                    </button>
                  </div>
                </div>
              ) : error.includes("كێمبوونا تۆکنان") || error.includes("کێشەیا تۆکنان") ? (
                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 p-[2.5px] rounded-3xl shadow-2xl animate-fadeIn mb-5 border border-amber-400/20">
                  <div className="bg-[#0c0524] text-white p-6 lg:p-8 rounded-[22px] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-right" dir="rtl">
                    {/* Glowing background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl pointer-events-none"></div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/25 to-orange-500/10 text-amber-400 border border-amber-500/30 shrink-0 shadow-lg animate-bounce">
                        <Coins className="h-7 w-7" />
                      </div>
                      <div className="space-y-1.5 text-center md:text-right">
                        <h4 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-400 bg-clip-text text-transparent leading-snug">
                          تۆکنێن تە ب دوماهی هاتن! (Tokens Depleted)
                        </h4>
                        <p className="text-sm lg:text-base font-extrabold text-slate-200">
                          ب شێوێ فەرمی ٢٥٠,٠٠٠ تۆکنان ب دەستخۆڤە بینە ب تمامەت فڕی و بێ پارە!
                        </p>
                        <p className="text-xs text-slate-400">
                          تنها نامەکێ ب بۆ پەیجێ ئینستاگرامی بنێرە، ب تەنێ ناڤ و رەگەزێ خۆ بنڤیسە (کچ یا خود کوڕ).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://www.instagram.com/kurdtech.it.01"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 text-xs lg:text-sm font-black rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 transition-all cursor-pointer shadow-lg active:scale-95 shrink-0 flex items-center gap-2"
                      >
                        کۆدێ خۆ وەرگرە (٢٥٠,٠٠٠ تۆکن) 🎁
                      </a>
                      <button 
                        type="button" 
                        onClick={() => {
                          setError(null);
                          setIsUserConsoleOpen(true);
                        }} 
                        className="px-5 py-3 text-xs lg:text-sm font-black rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/15 active:scale-95 shrink-0"
                      >
                        کۆنسۆلێ بکاربینە 🔑
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-[#1f0e1d] border border-rose-950 text-rose-200 px-5 py-3.5 rounded-2xl text-xs flex items-center justify-between gap-3 animate-fadeIn">
                  <div className="flex items-center gap-2.5">
                    <AlertTriangle className="h-4.5 w-4.5 text-rose-500 shrink-0" />
                    <span dir="rtl" className="font-semibold text-right">{error}</span>
                  </div>
                  <button onClick={() => setError(null)} className="text-slate-400 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )
            )}

            {/* GRAMMARLY CORRECTION REPORT BOX */}
            {showGrammarlyPopup && grammarlyCorrection && (
              <div className="bg-[#111124] border border-indigo-900 rounded-2xl p-5 mt-2 animate-fadeIn">
                <div className="flex items-center justify-between mb-3.5 border-b border-indigo-950 pb-2.5">
                  <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest flex items-center gap-1.5">
                    <SparkleIcon className="h-4 w-4 fill-amber-400" />
                    AI Grammarly Report (کۆنترۆلا ڕێزنامه‌ و ڕێنووسێ)
                  </span>
                  <button onClick={() => setShowGrammarlyPopup(false)} className="text-slate-500 hover:text-slate-200">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {grammarlyCorrection.isCorrectAlready ? (
                  <p className="text-emerald-400 font-bold text-xs flex items-center gap-1.5" dir="rtl">
                    <CheckCircle className="h-4 w-4" />
                    ڕێنووسا تە یا دروستە! چ خەلەتی نەهاتنە دیتن. (Spelling look perfectly fine already)
                  </p>
                ) : (
                  <div className="space-y-3">
                    <p className="text-amber-200 font-bold text-xs" dir="rtl">
                      ئەم دەسنیشانکرنا چەند خەلەتییان د ڕێنووسا تە دا دکەین. تێکست نو بوو:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1 text-xs">
                      {grammarlyCorrection.correctionsMade.map((corr, cidx) => (
                        <div key={cidx} className="bg-[#17143c] p-3 rounded-xl border border-indigo-950 space-y-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-1.5 text-[11px]">
                                <span className="line-through text-rose-400 font-mono font-bold bg-rose-950/20 px-1.5 py-0.5 rounded">{corr.originalPart}</span>
                                <ArrowRight className="h-3 w-3 text-slate-500" />
                                <span className="text-emerald-400 font-mono font-black bg-emerald-950/20 px-1.5 py-0.5 rounded">{corr.correctedPart}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleApplyCorrection(corr.originalPart, corr.correctedPart)}
                                className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black px-2.5 py-1 rounded-md transition-all shadow-sm cursor-pointer flex items-center gap-1.5"
                              >
                                <Check className="h-3 w-3" />
                                <span>بگهرین ؟ (Fix it?)</span>
                              </button>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[#a5b4fc] text-[11px]" dir="rtl">📌 {corr.explanationKurdish}</p>
                              <p className="text-slate-400 text-[10px] italic">💡 {corr.explanationEnglish}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CORE DETAILS ROW - DYNAMIC SEARCH RESULTS */}
        {(hasTranslated || isLoading) && (
          <div className="space-y-8 relative">
            {isLoading ? (
              <PeyvokAILoader siteLang={siteLang} />
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-min gap-6">
              
              {/* SECTION A: PRIMARY TRANSLATION RESULT VIEW (8 Columns) */}
              <section className="col-span-12 lg:col-span-8 bg-[#0c081e] border border-indigo-950/80 rounded-[32px] p-6 lg:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden min-h-[300px]">
                
                {/* Visual watermark design in background */}
                <div className="absolute top-2 right-4 p-8 opacity-5 select-none text-right hidden lg:block">
                  <span className="text-9xl font-black text-white/50 uppercase">
                    {displayWord.originalText.substring(0, 10)}
                  </span>
                </div>
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest bg-gradient-to-r from-emerald-500/15 via-indigo-500/10 to-transparent text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl uppercase flex items-center gap-2 shadow-sm font-sans shrink-0">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-pulse shrink-0" />
                      وەرگێڕانا فەرمى / Core Translation
                    </span>
                    <span className="text-slate-400 text-xs font-semibold uppercase">{sourceLanguage} ➡️ {targetLanguage}</span>
                  </div>
                  
                  {/* Master Dual-Panel Display Text */}
                  <div className="space-y-4">
                    
                    {/* Source Text Card */}
                    <div className="bg-[#10092c] border border-[#21174d]/80 rounded-2xl p-4 sm:p-5 relative animate-fadeIn">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black tracking-widest text-[#fbbf24] uppercase flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                          ده‌ستپێك / From ({displayWord.sourceLanguageParsed || sourceLanguage})
                        </span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase">Original Text</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pt-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-300 tracking-tight leading-relaxed select-all" dir="auto">
                          {displayWord.originalText}
                        </h2>
                        
                        {(displayWord.sourceLanguageParsed === "Kurdish" || sourceLanguage === "Kurdish") && displayWord.badiniTranslationLatinScript && (
                          <span className="text-xs text-amber-300 font-mono bg-amber-950/30 border border-amber-900/30 px-2.5 py-1 rounded-lg">
                            {displayWord.badiniTranslationLatinScript}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Connecting Visual Element */}
                    <div className="flex justify-center -my-2 relative z-20">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-1.5 rounded-full shadow-lg shadow-indigo-950/50 flex items-center justify-center transform hover:scale-105 transition-all">
                        <ArrowDown className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Target Translation Card */}
                    <div className="bg-[#0e1635]/65 border border-emerald-900/40 rounded-2xl p-5 relative shadow-inner animate-fadeIn">
                      <div className="flex items-center justify-between mb-2 pb-1 border-b border-emerald-950/20">
                        <span className="text-[10px] font-black tracking-widest text-[#10b981] uppercase flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          وەرگێڕان / To ({targetLanguage})
                        </span>
                        <span className="text-[10px] text-emerald-500/80 font-bold uppercase">Translated text</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 pt-1">
                        <h1 className="text-2xl sm:text-3xl lg:text-3xl font-black text-white tracking-tight leading-relaxed select-all animate-none" dir="auto">
                          <span>{displayWord.translatedText || displayWord.badiniTranslationArabicScript}</span>
                        </h1>

                        {targetLanguage === "Kurdish" && displayWord.badiniTranslationLatinScript && (
                          <span className="text-xs text-emerald-400 font-black tracking-tight bg-emerald-950/45 border border-emerald-950/45 px-2.5 py-1 rounded-md">
                            {displayWord.badiniTranslationLatinScript}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Phonetic Pronunciation Guide & Kurdish Speech Synthesis */}
                    <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-indigo-950/40">
                      <span className="text-xs font-bold text-slate-400">Pronunciation Guide:</span>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-indigo-300 font-mono bg-indigo-950/40 px-2.5 py-1 rounded-lg border border-indigo-900/50 font-bold">
                          {displayWord.pronunciationGuide}
                        </span>
                        
                        {/* Source vocal audio playback */}
                        <button
                          type="button"
                          onClick={() => speakText(displayWord.originalText, "en-US")}
                          className={`p-1.5 rounded-lg border text-indigo-300 hover:text-white hover:bg-slate-905 transition-all cursor-pointer ${
                            activeAudioId === displayWord.originalText.substring(0, 15) ? "bg-indigo-600 text-white border-transparent animate-pulse" : "border-[#2d225e]/40"
                          }`}
                          title={`Speak Source Text (${sourceLanguage})`}
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>

                        <div className="h-4 w-[1px] bg-indigo-950/80 mx-1 hidden sm:block"></div>

                        {/* Interactive Kurdish Text to Speech Synthesis */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] text-slate-500 font-bold uppercase hidden sm:inline">Kurdish TTS:</span>
                          
                          {/* Arabic script synthesis */}
                          <button
                            type="button"
                            onClick={() => speakText(displayWord.badiniTranslationArabicScript, "ar-SA")}
                            className={`px-2.5 py-1 rounded-lg border text-emerald-400 hover:text-white hover:bg-emerald-950/40 transition-all text-[11px] font-black flex items-center gap-1.5 cursor-pointer ${
                              activeAudioId === displayWord.badiniTranslationArabicScript.substring(0, 15) ? "bg-emerald-600 text-white border-transparent animate-pulse" : "border-emerald-950/40 bg-[#071911]/35"
                            }`}
                            title="Vocalize in Kurdish Arabic script (زارێ بادینی)"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            <span>بادینی (دەم)</span>
                          </button>

                          {/* Latin script synthesis */}
                          <button
                            type="button"
                            onClick={() => speakText(displayWord.badiniTranslationLatinScript, "tr-TR")}
                            className={`px-2.5 py-1 rounded-lg border text-indigo-400 hover:text-white hover:bg-indigo-900/40 transition-all text-[11px] font-black flex items-center gap-1.5 cursor-pointer ${
                              activeAudioId === displayWord.badiniTranslationLatinScript.substring(0, 15) ? "bg-indigo-600 text-white border-transparent animate-pulse" : "border-indigo-950/40 bg-[#0e1635]/35"
                            }`}
                            title="Vocalize in Kurdish Latin Hawar script"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                            <span>Kurdish Latin</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Usage Field Context description */}
                    <div className="bg-[#100927] border border-indigo-950/80 rounded-2xl p-4.5 mt-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">بیاڤ و چارچۆڤێ پەیڤێ / Usage Domain & Field:</span>
                      <p className="text-slate-200 text-sm leading-relaxed font-semibold">
                        {displayWord.howItIsUsedContext || "د وارێن نڤیسار، راپۆرت، گرێبەست، و رێککەفتنێن فەرمی دا یێ بەربڵاڤە."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* REQUIREMENT 10: ALERTS, ATTENTIONS AND SYSTEM NOTES SCREEN LAYER */}
                <div className="mt-6 border-t border-indigo-950/50 pt-5">
                  <div className={`rounded-3xl p-6 border flex flex-col sm:flex-row gap-5 items-start justify-between relative overflow-hidden transition-all duration-300 ${
                    activeAttention.typeSeverity === "warning" 
                      ? "bg-gradient-to-br from-[#2f0d1a] via-[#1c0810] to-[#0a0208] border-rose-500/50 text-rose-200 shadow-[0_0_35px_rgba(239,68,68,0.15)]"
                      : "bg-gradient-to-br from-[#2f1e09] via-[#1b1005] to-[#070301] border-amber-500/50 text-amber-200 shadow-[0_0_35px_rgba(245,158,11,0.12)]"
                  }`}>
                    {/* Glowing background highlights */}
                    <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
                    <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full bg-rose-500/10 blur-3xl pointer-events-none"></div>

                    <div className="flex gap-4 items-start relative z-10 w-full sm:w-auto">
                      <div className={`p-2.5 rounded-2xl mt-0.5 shrink-0 uppercase text-[10px] font-black tracking-widest flex items-center gap-1.5 ${
                        activeAttention.typeSeverity === "warning" 
                          ? "bg-rose-500 text-slate-950 font-black shadow-lg shadow-rose-500/40 animate-pulse" 
                          : "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black shadow-lg shadow-amber-500/40"
                      }`}>
                        <span className="text-xs">📢</span>
                        <span>{activeAttention.typeSeverity === "warning" ? "WARNING" : "ATTENTION"}</span>
                      </div>
                      
                      <div className="space-y-1.5 text-right w-full sm:w-auto" dir="rtl">
                        <h4 className="text-base font-black text-white flex items-center gap-2 font-kurdish">
                          <span className={`h-2.5 w-2.5 rounded-full ${activeAttention.typeSeverity === "warning" ? "bg-rose-400 animate-ping" : "bg-amber-400"} shadow-md`}></span>
                          {activeAttention.noteTitleKurdish}
                        </h4>
                        <p className="text-xs text-slate-200 leading-relaxed font-bold font-kurdish">
                          {activeAttention.noteContentKurdish}
                        </p>
                      </div>
                    </div>

                    <div className="sm:border-r sm:border-indigo-905 sm:pr-4 sm:border-l-0 border-t sm:border-t-0 pt-3 sm:pt-0 shrink-0 max-w-sm space-y-1.5 text-right relative z-10" dir="ltr">
                      <span className="text-[10px] font-black text-amber-400 block uppercase tracking-widest leading-none mb-1">{activeAttention.noteTitleEnglish}</span>
                      <p className="text-[11px] text-slate-300 italic leading-relaxed">{activeAttention.noteContentEnglish}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION B: WHAT IS IT / MEANING & INTENT (4 Columns) */}
              <section className="col-span-12 lg:col-span-4 bg-gradient-to-b from-[#180e47] via-[#09041a] to-[#04010b] border-2 border-indigo-500/30 rounded-[32px] p-6 lg:p-8 shadow-[0_0_40px_rgba(99,102,241,0.15)] flex flex-col justify-between relative group overflow-hidden hover:scale-[1.01] transition-all duration-300">
                <div className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-indigo-400 via-purple-500 to-indigo-950"></div>
                
                {/* Visual glow indicator */}
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-505/10 blur-3xl pointer-events-none group-hover:bg-indigo-505/20 transition-all"></div>

                <div className="space-y-5">
                  <div className="bg-[#4f46e5]/25 border border-[#4f46e5]/40 text-indigo-300 w-fit p-3.5 rounded-2xl mb-1 relative overflow-hidden shadow-lg shadow-indigo-950/40">
                    <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
                    <HelpCircle className="h-6 w-6 text-indigo-300 relative z-10" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2 border-b border-indigo-500/20 pb-2">
                    <h3 className="text-xl font-black text-white font-sans tracking-normal flex flex-col gap-1 text-right w-full" dir="rtl">
                      <span className="text-xs text-indigo-400 font-extrabold tracking-widest uppercase text-left block">DEFINITION / پێناسە</span>
                      <span className="text-2xl text-white font-black bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">واتا و پێناسا پەیڤێ</span>
                    </h3>
                  </div>

                  {/* Kurdish custom Description - marked as bold */}
                  <p className="text-slate-100 text-sm leading-relaxed font-semibold text-right text-balance border-b border-indigo-950/40 pb-5" dir="rtl">
                    <span className="bg-[#0b0422] p-4.5 rounded-2xl border border-indigo-550/20 block leading-loose shadow-lg text-indigo-200">
                      {displayWord.meaningAndIntent.kurdishDescription}
                    </span>
                  </p>

                  {/* English Translation section */}
                  <div className="pt-2">
                    <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest block mb-1.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-indigo-400 rounded-full animate-ping"></span>
                      ENGLISH CONCEPT DEFINITION:
                    </span>
                    <p className="text-slate-200 text-xs leading-relaxed italic bg-[#060317] p-4 border border-indigo-950 rounded-xl shadow-inner" dir="ltr">
                      <span>{displayWord.meaningAndIntent.englishDescription}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-indigo-955/40 mt-6 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>LEXICON VALIDATION V3</span>
                  <span className="text-emerald-400 font-extrabold bg-[#061e12] text-emerald-300 border border-emerald-900/35 px-2.5 py-1 rounded-lg uppercase tracking-wider text-[9px]">AUTHENTIC DECODER</span>
                </div>
              </section>

              {/* SECTION C: WHY IS IT USED (4 Columns) */}
              <section className="col-span-12 lg:col-span-4 bg-gradient-to-b from-[#0a1e14] via-[#040f0a] to-[#010604] border-2 border-emerald-500/30 rounded-[32px] p-6 lg:p-8 shadow-[0_0_40px_rgba(16,185,129,0.12)] flex flex-col justify-between relative group overflow-hidden hover:scale-[1.01] transition-all duration-300">
                <div className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-emerald-400 via-teal-500 to-emerald-955"></div>
                
                {/* Visual glow indicator */}
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all"></div>

                <div className="space-y-5">
                  <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 w-fit p-3.5 rounded-2xl mb-1 relative overflow-hidden shadow-lg shadow-emerald-955/40">
                    <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
                    <Lightbulb className="h-6 w-6 text-emerald-300 relative z-10" />
                  </div>

                  <div className="flex items-center justify-between mb-2 border-b border-emerald-500/20 pb-2">
                    <h3 className="text-xl font-black text-white font-sans tracking-normal flex flex-col gap-1 text-right w-full" dir="rtl">
                      <span className="text-xs text-emerald-400 font-extrabold tracking-widest uppercase text-left block">PRACTICALITY / بکاربرن</span>
                      <span className="text-2xl text-white font-black bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">بۆچی دهێتە بکارئینان؟</span>
                    </h3>
                  </div>

                  {/* Badini Kurdish description */}
                  <p className="text-slate-200 text-sm leading-relaxed font-semibold text-right text-balance border-b border-indigo-950/40 pb-5" dir="rtl">
                    <span className="bg-[#030d07] p-4.5 rounded-2xl border border-emerald-500/20 block leading-loose shadow-lg text-emerald-350 font-kurdish">
                      {displayWord.whyItIsUsed.kurdishDescription}
                    </span>
                  </p>

                  {/* English reference translation */}
                  <div className="pt-2">
                    <span className="text-[10px] font-black text-emerald-300 uppercase tracking-widest block mb-1.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                      PRACTICAL USABILITY:
                    </span>
                    <p className="text-slate-200 text-xs leading-relaxed italic bg-[#010905] p-4 border border-emerald-950 rounded-xl shadow-inner" dir="ltr">
                      <span>{displayWord.whyItIsUsed.englishDescription}</span>
                    </p>
                  </div>

                  {/* Spectacular Geographic, Tribal & Cultural Footnotes Block */}
                  {displayWord.culturalFootnotes && (
                    <div className="mt-6 pt-5 border-t border-emerald-950/80 space-y-3 animate-fadeIn">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                        </span>
                        <span className="text-[10px] font-black tracking-widest text-[#fbbf24] uppercase font-sans">
                          {displayWord.culturalFootnotes.titleEnglish || "GEOGRAPHIC & TRIBAL VARIATIONS"}
                        </span>
                      </div>
                      
                      <div className="bg-[#15092a] border-2 border-amber-500/30 rounded-2xl p-4.5 shadow-xl space-y-3 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
                        {/* Background subtle amber gradient */}
                        <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
                        
                        <div className="text-right" dir="rtl">
                          <h4 className="text-xs font-black text-amber-300 mb-1 flex items-center gap-1.5 justify-end">
                            <span>{displayWord.culturalFootnotes.titleKurdish || "پێزانینێن کوور و دەڤەری"}</span>
                            <span className="text-[10px]">📍</span>
                          </h4>
                          <p className="text-xs text-slate-100 leading-relaxed font-bold font-kurdish">
                            <span>{displayWord.culturalFootnotes.contentKurdish}</span>
                          </p>
                        </div>
                        
                        {displayWord.culturalFootnotes.contentEnglish && (
                          <div className="text-left border-t border-indigo-950/40 pt-2.5">
                            <p className="text-[10.5px] text-slate-300 italic leading-snug">
                              <span>{displayWord.culturalFootnotes.contentEnglish}</span>
                            </p>
                          </div>
                        )}

                        {/* List of Variations with custom badges */}
                        {displayWord.culturalFootnotes.variationsList && displayWord.culturalFootnotes.variationsList.length > 0 && (
                          <div className="pt-2 space-y-2 border-t border-indigo-950/40">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Local Alternates & Synonyms:</span>
                            <div className="grid grid-cols-1 gap-1.5">
                              {displayWord.culturalFootnotes.variationsList.map((variant, ind) => (
                                <div key={ind} className="flex items-center justify-between text-[11px] bg-[#220d3f] p-2 rounded-xl border border-indigo-900/40 shadow-inner hover:bg-[#2b1150] transition-colors">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-[9px] font-black font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-305 uppercase border border-amber-550/30">
                                      {variant.groupOrPlace}
                                    </span>
                                    <span className="text-amber-200 font-extrabold select-all">
                                      {variant.alternativeTerm}
                                    </span>
                                  </div>
                                  <span className="text-[10px] text-slate-300 font-bold text-right font-kurdish" dir="rtl">
                                    {variant.localMeaningOrNuance}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-5 border-t border-[#091b12] mt-6 flex items-center justify-between text-[10px] text-slate-500 font-mono font-black">
                  <span>IMPORTANCE RATING</span>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
              </section>

              {/* SECTION D: EXAMPLES DICTATIONS CARD with neon highlights (12 Columns) */}
              <section className="col-span-12 lg:col-span-12 bg-[#100b2e] border border-indigo-950 rounded-[32px] p-6 lg:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="bg-indigo-600 text-white p-1 rounded-lg">
                        <Check className="h-4.5 w-4.5" />
                      </span>
                      ڕستە و نموونێن ئامادەکرى / Real Example Sentences
                    </h3>
                    <span className="text-[10px] text-amber-300 font-black uppercase bg-amber-500/15 border border-amber-500/30 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 whitespace-nowrap shadow-sm font-kurdish">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
                      </span>
                      ب کورتی و مفادار
                    </span>
                  </div>

                  <div className="space-y-4">
                    {displayWord.examples && displayWord.examples.length > 0 ? (
                      displayWord.examples.map((example, i) => (
                        <div key={i} className="bg-[#0b0521] border border-indigo-950/60 rounded-2xl p-4.5 shadow-sm space-y-3 relative group hover:border-indigo-800 transition-all overflow-hidden">
                          
                          {/* Audio trigger / Card header index - NON-ABSOLUTE to prevent overlapping with right-aligned Behdini text */}
                          <div className="flex items-center justify-between pb-2 border-b border-indigo-950/20">
                            <button
                              onClick={() => speakText(example.englishTranslation, "en-US")}
                              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer text-[10px] font-black tracking-wider uppercase flex items-center gap-1.5 ${
                                activeAudioId === example.englishTranslation.substring(0, 15)
                                  ? "bg-indigo-600 text-white border-transparent animate-pulse animate-none"
                                  : "bg-[#130b2e]/80 border-indigo-900/50 text-indigo-300 hover:text-white hover:bg-indigo-950"
                              }`}
                              title="Listen to translation"
                            >
                              <Volume2 className="h-3.5 w-3.5" />
                              <span>Listen</span>
                            </button>
                            <span className="text-[10px] text-amber-300 font-black tracking-widest bg-amber-500/15 border border-amber-500/25 px-3 py-1 rounded-xl font-kurdish">
                              نموونە {i + 1}
                            </span>
                          </div>

                          {/* Kurdish Behdini sentence */}
                          <div className="border-r-4 border-indigo-500 pr-4 mt-1">
                            <p className="text-base font-bold text-white text-right leading-relaxed font-kurdish text-balance" dir="rtl">
                              {example.badiniArabic}
                            </p>
                            <p className="text-xs text-indigo-300 font-semibold mt-1">
                              {example.badiniLatin}
                            </p>
                          </div>
                          
                          {/* Translated equivalents bar */}
                          <div className="pt-2.5 mt-2 border-t border-indigo-950/40 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400">
                            <div>
                              <span className="font-bold text-[9px] text-[#fbbf24] uppercase tracking-widest block mb-0.5">English</span>
                              <p className="italic text-slate-300">{example.englishTranslation}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-[9px] text-emerald-400 uppercase tracking-widest block mb-0.5">العربية</span>
                              <p className="text-slate-300">{example.arabicTranslation}</p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6 text-slate-500">
                        چ نموونە بۆ پەیڤا نوی نینن.
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 mt-6 text-right" dir="rtl">
                  * ب کرتەکرن لسەر هێمایا دەنگی، دەنگساز دێ تێکستا ئینگلیزی ب دەنگ خوڵقینیت.
                </p>
              </section>
            </div>

            {/* INTERACTIVE TRANSLATION FEEDBACK & SURVEY COMPONENT */}
            {hasTranslated && currentWord && !isLoading && (
              <div className="bg-[#0f072c] border border-indigo-950/80 rounded-[32px] p-6 lg:p-8 shadow-xl mt-6 relative overflow-hidden" dir="rtl">
                <div className="absolute top-0 right-0 w-[4px] bg-gradient-to-b from-amber-500 to-orange-500"></div>

                <div className="flex flex-col sm:flex-row items-center justify-between border-b border-indigo-950 pb-4 mb-5 gap-3">
                  <div className="text-right">
                    <span className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-widest leading-loose">
                      <MessageSquare className="h-4.5 w-4.5 text-amber-400" />
                      پێشنیار و هەڵسەنگاندنا ئەکادیمی (Academic Peer Review)
                    </span>
                    <h4 className="text-base font-extrabold text-white mt-1">
                      {siteLang === "ku_badini" || siteLang === "ku_sorani" 
                        ? "ئەرێ هوین ژی د بێژنە ڤێ پەیڤێ؟ یان دەڤەرا هەوە جودایە؟" 
                        : siteLang === "ar" 
                        ? "هل تستخدمون هذا اللفظ أيضاً؟ أم أن منطقتكم تنطقها بشكل مختلف؟" 
                        : "Do you say this word in your region? Or is it said differently?"}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1">
                      هاریکار بە د پاراستن و دەوڵەمەندکرنا فەرهەنگۆکی ب زارڤایێ بەهدینی یێ رەسەن
                    </p>
                  </div>

                  {/* Action choices buttons */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => {
                        setValidationRating("yes");
                        saveFeedbackLocally("yes");
                      }}
                      type="button"
                      className={`px-4.5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                        validationRating === "yes"
                          ? "bg-emerald-600/25 border-emerald-500 text-emerald-300 ring-2 ring-emerald-500/10"
                          : "bg-emerald-950/20 hover:bg-emerald-950/40 border-emerald-500/20 text-emerald-300"
                      } border`}
                    >
                      <CheckCircle className="h-4 w-4" />
                      <span>{siteLang === "ku_badini" || siteLang === "ku_sorani" ? "بەلێ، درستە" : "Yes, Correct"}</span>
                    </button>

                    <button
                      onClick={() => {
                        setValidationRating("no");
                        setSubmittedSuccessfully(false);
                      }}
                      type="button"
                      className={`px-4.5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                        validationRating === "no"
                          ? "bg-rose-600/25 border-rose-500 text-rose-300 ring-2 ring-rose-500/10"
                          : "bg-rose-950/20 hover:bg-rose-950/40 border-rose-500/20 text-rose-300"
                      } border`}
                    >
                      <X className="h-4 w-4" />
                      <span>{siteLang === "ku_badini" || siteLang === "ku_sorani" ? "نەخێر یان جودایە" : "Alternative / Wrong"}</span>
                    </button>
                  </div>
                </div>

                {/* Successful standard Checkmark explanation */}
                {submittedSuccessfully && validationRating === "yes" && (
                  <div className="p-4 bg-emerald-950/15 border border-emerald-500/30 rounded-2xl flex items-center gap-3 animate-fadeIn text-right text-xs font-bold text-emerald-300 leading-relaxed">
                    <span className="text-xl">🎓</span>
                    <div>
                      سۆپاس بۆ دڵنیاییدانا تە! پەیڤ ب تەواوی د لیستا دروستیا فەرمی یا پەیڤۆک دا هاتە نیشاندان و پاشەکەوتکرن ل سەر مەکینێ.
                    </div>
                  </div>
                )}

                {/* Survey Form if "Alternative" is selected */}
                {validationRating === "no" && !submittedSuccessfully && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      saveFeedbackLocally("no");
                    }}
                    className="space-y-4 pt-3 border-t border-indigo-950/50 animate-fadeIn text-right"
                  >
                    <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-[11px] font-bold text-amber-300 leading-relaxed">
                      💡 <strong>پێشنیارەکا زمانەوانی پێشکەش بکە:</strong> هیڤییە زانیاریان رێکبێخە دا لژنەیا زانستی پێداچوونێ ل سەر پەیڤێ بکەن.
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-black text-indigo-300 block">
                          دەڤەرا تە چ دبێژنێ؟ (پەیڤا جێگر یان وەرگێڕانا تە) *
                        </label>
                        <input
                          type="text"
                          required
                          value={activeSurveyForm.regionalWord}
                          onChange={(e) => setActiveSurveyForm(prev => ({ ...prev, regionalWord: e.target.value }))}
                          placeholder="بۆ نموونە: توی چلۆنی"
                          className="w-full bg-[#050212] border border-indigo-950 rounded-xl px-4 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-amber-500/50 text-right"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-black text-indigo-300 block">
                          ناڤێ دەڤەرێ، هۆزێ، یان مللەتێ تە *
                        </label>
                        <input
                          type="text"
                          required
                          value={activeSurveyForm.regionOrTribe}
                          onChange={(e) => setActiveSurveyForm(prev => ({ ...prev, regionOrTribe: e.target.value }))}
                          placeholder="بۆ نموونە: دەڤەرا شنگالێ / شنگالیا"
                          className="w-full bg-[#050212] border border-indigo-950 rounded-xl px-4 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-amber-500/50 text-right"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10.5px] font-black text-indigo-300 block">
                        مەرەم ژ ڤێ پەیڤێ، بۆچی بکار دئینین و نموونەکا کورت *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={activeSurveyForm.usageDescription}
                        onChange={(e) => setActiveSurveyForm(prev => ({ ...prev, usageDescription: e.target.value }))}
                        placeholder="ب کورت بنڤیسە بۆچی بکار دئینن و نموونە چوونە ناو ڕستە..."
                        className="w-full bg-[#050212] border border-indigo-950 rounded-xl px-4 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-amber-500/50 text-right resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2 col-span-1">
                        <label className="text-[10.5px] font-black text-[#857ab3] block text-right" dir="rtl">
                          جۆڕێ پەیوەندی یا ئۆپشنال هەڵبژێرە (Dynamic Contact Selector)
                        </label>
                        <div className="grid grid-cols-4 gap-1 p-1 bg-[#050212] rounded-xl border border-indigo-950">
                          {(["instagram", "facebook", "phone", "email"] as const).map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => {
                                setActiveContactType(type);
                                let prefix = "";
                                if (type === "instagram") prefix = "Instagram: @";
                                else if (type === "facebook") prefix = "Facebook: @";
                                else if (type === "phone") prefix = "Phone: ";
                                else if (type === "email") prefix = "Email: ";
                                setActiveSurveyForm(prev => ({ ...prev, contactHandle: prefix }));
                              }}
                              className={`py-1.5 text-[9px] font-black uppercase rounded-lg transition-all cursor-pointer text-center ${
                                activeContactType === type
                                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black shadow-md shadow-amber-500/25"
                                  : "text-slate-400 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {type === "phone" ? "Number" : type}
                            </button>
                          ))}
                        </div>

                        <input
                          type={activeContactType === "email" ? "email" : "text"}
                          value={activeSurveyForm.contactHandle}
                          onChange={(e) => setActiveSurveyForm(prev => ({ ...prev, contactHandle: e.target.value }))}
                          placeholder={
                            activeContactType === "instagram"
                              ? "Instagram: @username"
                              : activeContactType === "facebook"
                                ? "Facebook: @username"
                                : activeContactType === "phone"
                                  ? "Phone: +964..."
                                  : "Email: contact@domain.com"
                          }
                          className="w-full bg-[#050212] border border-indigo-950 rounded-xl px-4 py-2 text-xs font-mono text-white focus:outline-none focus:border-amber-500/50 text-left mt-2"
                        />
                      </div>

                      <div className="flex items-end justify-end col-span-1">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-[1.01] text-slate-950 font-black text-xs py-3 px-6 rounded-xl transition-all cursor-pointer text-center"
                        >
                          ناردن و پاشەکەوتکرن ل سەر مەکینێ 💾
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                {submittedSuccessfully && validationRating === "no" && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center gap-3 animate-fadeIn text-right text-xs font-bold text-amber-300 leading-relaxed">
                    <span className="text-xl">🎉</span>
                    <div>
                      سۆپاس بۆ پێشنیارێ! پێشنیارا تە ل سەر دەوڵەمەندبوونا دەڤەرا {activeSurveyForm.regionOrTribe} ب سەرکەفتن هاتە زێدەکرن بۆ ڕووبەرێ کۆنترۆڵا ئەندامان (Peyvok Users HQ).
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* NEW BENTO SECTION: MULTI-LANGUAGE DYNAMIC QUIZ (Completely replaces Trace Handwriting Laboratory) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* INTERACTIVE TRIVIA QUIZ COMPONENT (Span 12 for immersive quiz play) */}
              <section className="col-span-12 bg-[#0c0521] border border-indigo-950 rounded-[32px] p-6 lg:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 border-b border-indigo-950 pb-4">
                  <div>
                    <span className="flex items-center gap-1.5 text-xs font-black text-amber-400 uppercase tracking-widest">
                      <QuizIcon className="h-4.5 w-4.5 text-amber-400 fill-amber-400 animate-spin" />
                      کویز و ئەزموونی زمانەوانی / Dynamic Language Quiz
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-1 text-right sm:text-left" dir="rtl">
                      پشکنینا شیانێن خۆ بکە!
                    </h3>
                  </div>

                  {/* Level system HUD */}
                  <div className="flex items-center gap-3">
                    <span className="bg-indigo-950 text-indigo-300 text-[11px] font-mono px-3 py-1.5 rounded-xl border border-indigo-900/50">
                      Score: <span className="text-amber-400 font-extrabold">{quizScore} / {quizQuestionsCount}</span>
                    </span>
                    <button
                      onClick={generateRandomQuiz}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-md"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>کویزا هەرەمەکی (New Quiz)</span>
                    </button>
                  </div>
                </div>

                {/* Main Active Quiz layout container */}
                <div className="space-y-6">
                  <div className="bg-[#120a32]/80 border border-indigo-950 p-5 rounded-2xl relative">
                    <span className="text-[10px] text-indigo-400 font-mono font-bold uppercase block mb-1">کۆیزا پەیڤۆک:</span>
                    <p className="text-lg font-black text-white leading-relaxed text-right md:text-left">
                      {activeQuiz.question}
                    </p>
                  </div>

                  {/* MCQ click options grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {activeQuiz.options.map((optionText, idx) => {
                      const isAnswered = quizSelectedOption !== null;
                      const isSelectedCurrent = quizSelectedOption === idx;
                      const isCorrectChoice = idx === activeQuiz.correctAnswerIndex;
                      
                      let btnStyle = "bg-[#10072d]/70 hover:bg-[#190c42] border-[#201053] text-slate-300";
                      
                      if (isAnswered) {
                        if (isCorrectChoice) {
                          btnStyle = "bg-emerald-950/40 text-emerald-300 border-emerald-500 ring-2 ring-emerald-500/20";
                        } else if (isSelectedCurrent) {
                          btnStyle = "bg-rose-950/40 text-rose-300 border-rose-500 ring-2 ring-rose-500/20";
                        } else {
                          btnStyle = "bg-[#0b051f]/50 border-indigo-950 text-slate-500 cursor-not-allowed";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => {
                            if (quizSelectedOption === null) {
                              setQuizSelectedOption(idx);
                              setQuizQuestionsCount((prev) => prev + 1);
                              if (idx === activeQuiz.correctAnswerIndex) {
                                setQuizScore((prev) => prev + 1);
                              }
                            }
                          }}
                          className={`p-4 rounded-xl text-xs font-bold transition-all text-right border text-right sm:text-left flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] bg-[#1a0f44] px-1.5 py-0.5 rounded text-indigo-300">Option {idx + 1}</span>
                          </div>
                          <span className="font-sans leading-snug">{optionText}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback description once responded */}
                  {quizSelectedOption !== null && (
                    <div className="bg-[#0b041e] border border-indigo-950 rounded-2xl p-5 animate-fadeIn">
                      <div className="flex items-center gap-2 mb-2 font-black text-xs uppercase tracking-wider">
                        {quizSelectedOption === activeQuiz.correctAnswerIndex ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle className="h-4.5 w-4.5" />
                            بژیت! وڵامەکا دروستە 🎉 Correct Match!
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1">
                            <X className="h-4.5 w-4.5" />
                            وڵامەکا خەلەتە ❌ Incorrect Select.
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-semibold text-right sm:text-left" dir="rtl">
                        {activeQuiz.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </section>

            </div>
              </>
            )}
          </div>
        )}

        {/* RECENT SEARCHES & HISTORY LOG (ELEVATED BENTO CAPABILITY) */}
        {history.length > 0 && (
          <div className="mt-8 bg-[#0c0821] border border-indigo-950 rounded-[32px] p-6 lg:p-8 shadow-2xl relative overflow-hidden">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#fbbf24] mb-4 flex items-center gap-2">
              <Clock className="h-4.5 w-4.5 text-[#fbbf24]" />
              گەڕیانێن دوماهییێ / Enhanced Log History
            </h4>
            <div className="flex flex-wrap gap-3">
              {history.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentWord(item);
                    setHasTranslated(true);
                    setError(null);
                  }}
                  className={`px-4.5 py-3 rounded-2xl text-xs font-extrabold border transition-all flex items-center gap-2 shadow-inner ${
                    currentWord.originalText.toLowerCase() === item.originalText.toLowerCase()
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-lg"
                      : "bg-[#110a2e] text-slate-300 border-indigo-100/10 hover:border-indigo-900"
                  }`}
                >
                  <span className="font-mono bg-black/40 px-2 py-0.5 rounded border border-indigo-950/40 text-indigo-300">
                    {item.originalText}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
                  <span>{item.badiniTranslationArabicScript}</span>
                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  setHistory([]);
                  localStorage.removeItem("badini_translation_history_v3");
                }}
                className="px-4 py-2.5 rounded-2xl text-xs font-black text-rose-400 hover:bg-rose-950/30 border border-transparent transition-all ml-auto flex items-center gap-1.5 cursor-pointer"
                title="Wipe historical searches data"
              >
                <RotateCcw className="h-4 w-4" />
                <span>پارتکرنا دیرۆکێ</span>
              </button>
            </div>
          </div>
        )}

        {/* DYNAMIC DISCLAIMER COMPONENT (Selected dynamic error/politeness message) */}
        <div className="mt-10 relative overflow-hidden bg-[#0d0725]/85 border border-indigo-950/60 hover:border-[#4f46e5]/40 rounded-3xl p-6 text-center flex flex-col items-center justify-center space-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.45)] group transition-all duration-300">
          {/* Ambient blur behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#4f46e5]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#4f46e5]/10 transition-all duration-500"></div>
          
          <div className="flex items-center gap-2 relative z-10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
            </span>
            <p className="text-xs font-black tracking-wider text-amber-400 uppercase flex items-center gap-2 font-sans">
              <SparkleIcon className="h-4 w-4 text-[#fbbf24] animate-pulse" />
              <span>پەیڤەک ژ مۆدێلا مە</span>
              <span className="text-indigo-500 font-extrabold select-none">/</span>
              <span className="text-[10px] text-indigo-300 font-extrabold tracking-widest font-mono">AI Disclaimer Status</span>
            </p>
          </div>
          
          <p className="text-base sm:text-lg font-black bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(251,191,36,0.25)] antialiased italic max-w-2xl leading-relaxed relative z-10 transition-all duration-300">
            "{getDynamicDisclaimer()}"
          </p>
          
          <div className="flex items-center gap-1.5 bg-[#120731]/70 border border-[#2d1b6b]/50 px-3 py-1 rounded-xl text-[9px] font-mono font-black text-slate-400 uppercase tracking-widest relative z-10 shadow-inner">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>AI ENGINE SUPERVISED</span>
          </div>
        </div>
      </>
    )}
    {/* EXQUISITE PORTFOLIO AND ABOUT ME SCREEN (Reving Ghazwan's Professional Hub) */}
    {activeView === "about-me" && (
      <div className="space-y-8 animate-fadeIn mb-12">
        <div className="bg-[#100927] border border-indigo-950/60 rounded-[32px] p-6 lg:p-10 shadow-2xl relative overflow-visible">
          {/* Aesthetic multi-color gradient lighting strip on top of the card */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-400 via-indigo-500 via-purple-600 via-pink-500 to-amber-400 rounded-t-[32px]"></div>
          
          {/* Top Control Bar with Language Customization */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 pb-6 border-b border-indigo-950/50">
            <div className="flex items-center gap-3">
              <span className="text-3xl">☀️</span>
              <div>
                <h2 className="text-2xl font-black text-white flex items-center gap-2">
                  {t.aboutMeTitle}
                </h2>
                <p className="text-xs text-indigo-400 font-extrabold tracking-wider uppercase">
                  {t.aboutMeSubtitle}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">ACTIVE LANGUAGE: {siteLang.toUpperCase()}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PROFILE CARD (Span 4) */}
            <div className="lg:col-span-4 bg-[#0d0722] border border-indigo-950/80 rounded-[28px] p-6 text-center relative overflow-hidden group shadow-inner">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"></div>
              <div className="absolute -left-16 -top-16 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl"></div>

              {/* Character laptop avatar framework */}
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 p-[3px] shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="h-full w-full rounded-full bg-[#120835] flex items-center justify-center text-6xl relative">
                  <span className="relative z-10 animate-bounce" style={{ animationDuration: '4s' }}>👨‍💻</span>
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-indigo-950/80 to-transparent z-0"></div>
                </div>
                {/* Kurdistan flag badge corner */}
                <div className="absolute bottom-1 right-1 h-7 w-7 rounded-full bg-slate-950 border-2 border-slate-700/60 flex items-center justify-center text-xs shadow-lg">
                  ☀️
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mt-5 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-300">Reving Ghazwan</h3>
              <p className="text-xs text-indigo-400 font-mono font-bold uppercase tracking-wider mt-1">
                @revingkrd
              </p>

              <div className="inline-flex items-center gap-1.5 bg-[#090417] border border-indigo-950/80 px-4 py-2 rounded-2xl text-[11px] font-black text-slate-200 mt-4 shadow-inner">
                <MapPin className="h-3.5 w-3.5 text-rose-500" />
                <span>{t.locationLabel}</span>
              </div>

              {/* Status Indicators List exactly styled as user image */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="bg-purple-950/40 border border-purple-800/80 px-3 py-1.5 rounded-2xl text-xs font-black text-purple-300 shadow-sm">
                  {t.roleTags.designer}
                </span>
                <span className="bg-cyan-950/45 border border-cyan-800/80 px-3 py-1.5 rounded-2xl text-xs font-black text-cyan-300 shadow-sm">
                  {t.roleTags.programmer}
                </span>
                <span className="bg-amber-955 border border-amber-800/80 px-3 py-1.5 rounded-2xl text-xs font-black text-amber-300 shadow-sm">
                  {t.roleTags.creator}
                </span>
                <span className="bg-indigo-950/45 border border-indigo-800/80 px-3 py-1.5 rounded-2xl text-xs font-black text-indigo-200 shadow-sm">
                  {t.roleTags.techtur}
                </span>
                <span className="bg-emerald-950/45 border border-emerald-800/80 px-3 py-1.5 rounded-2xl text-xs font-black text-emerald-300 shadow-sm">
                  {t.roleTags.helper}
                </span>
              </div>

              {/* Custom Website Target and Call to Actions */}
              <div className="mt-8 pt-6 border-t border-indigo-950/30 space-y-3">
                <a
                  href="https://revingkrd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-black py-3.5 px-4 rounded-xl transition-all shadow-md shadow-indigo-950/50 flex items-center justify-center gap-2 group cursor-pointer border border-indigo-500/20"
                >
                  <Globe className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  <span>{t.websiteButton}</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="mailto:reving.ghazwan.it@gmail.com"
                    className="bg-[#11082c] border border-indigo-9dd/40 hover:border-indigo-550 text-slate-100 text-[11px] font-extrabold py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 hover:bg-indigo-950/30"
                  >
                    <Mail className="h-3.5 w-3.5 text-indigo-400" />
                    <span>{t.emailButton}</span>
                  </a>
                  <a
                    href="tel:+9647503938072"
                    className="bg-[#11082c] border border-indigo-9dd/40 hover:border-indigo-550 text-slate-100 text-[11px] font-extrabold py-2.5 px-2 rounded-xl transition-all flex items-center justify-center gap-1.5 hover:bg-indigo-950/30"
                  >
                    <Phone className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{t.callButton}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT PORTFOLIO HUB (Span 8) */}
            <div className="lg:col-span-8 space-y-8" dir={["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? "rtl" : "ltr"}>
              
              {/* STRIKING MAIN BIOGRAPHY BAR */}
              <div className="bg-[#110b2a] border border-indigo-950/60 rounded-[28px] p-6 lg:p-8 relative overflow-hidden shadow-sm">
                <div className="absolute right-4 top-4 text-7xl text-indigo-950/30 font-serif">“</div>
                <h4 className="text-xs font-mono font-black text-amber-400 tracking-wider uppercase mb-3">
                  ✦ {t.biographyTitle} ✦
                </h4>
                
                <div 
                  className="space-y-4 text-sm text-slate-300 leading-relaxed font-semibold"
                  dangerouslySetInnerHTML={{ __html: t.bioTextHtml }}
                />
              </div>

              {/* DETAILED SKILLS ACCORDION GRID */}
              <div className="mb-6 relative">
                <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent mb-4"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-r-4 border-cyan-400 pr-4 mt-2 mb-5">
                  <div>
                    <h3 className="text-xl font-black text-white flex items-center gap-2.5">
                      <Code className="h-5.5 w-5.5 text-cyan-400 animate-pulse" />
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-indigo-300 drop-shadow">{t.skillsTitle}</span>
                    </h3>
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                      Professional Core Competencies & Advanced Digital Frameworks
                    </p>
                  </div>
                  <span className="bg-cyan-950/45 border border-cyan-400/30 text-cyan-400 text-[10px] font-mono font-black px-3 py-1 rounded-full text-center sm:self-center">
                    ✦ RANK #1 IT EXPERTISE ✦
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      id: "software-dev",
                      title: "🖥️ Software Dev & C",
                      icon: Laptop,
                      skills: ["C", "C++", "Python", "Java", "C#"],
                      activeBorder: "border-cyan-500 bg-cyan-950/25 shadow-[0_0_20px_rgba(34,211,238,0.25)] ring-1 ring-cyan-500/30ScaleUp",
                      textColor: "text-cyan-400",
                      badgeActive: "bg-cyan-500 text-slate-950 border-cyan-300 shadow-md shadow-cyan-500/20",
                      badgeInactive: "bg-indigo-950/50 text-indigo-300/80 border-indigo-900/65 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/15"
                    },
                    {
                      id: "database",
                      title: "🗄️ Database Management",
                      icon: Database,
                      skills: ["SQL Server", "MySQL"],
                      activeBorder: "border-rose-500 bg-rose-950/25 shadow-[0_0_20px_rgba(244,63,94,0.25)] ring-1 ring-rose-500/30ScaleUp",
                      textColor: "text-rose-400",
                      badgeActive: "bg-rose-500 text-slate-950 border-rose-300 shadow-md shadow-rose-500/20",
                      badgeInactive: "bg-indigo-950/50 text-indigo-300/80 border-indigo-900/65 hover:text-rose-400 hover:border-rose-500/50 hover:bg-rose-950/15"
                    },
                    {
                      id: "web-dev",
                      title: "🌐 Full-Stack Web Dev",
                      icon: Globe,
                      skills: ["HTML", "CSS", "JS", "PHP", "Bootstrap", "AJAX"],
                      activeBorder: "border-emerald-500 bg-emerald-950/25 shadow-[0_0_20px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/30ScaleUp",
                      textColor: "text-emerald-400",
                      badgeActive: "bg-emerald-500 text-slate-950 border-emerald-300 shadow-md shadow-emerald-500/20",
                      badgeInactive: "bg-indigo-950/50 text-indigo-300/80 border-indigo-900/65 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-950/15"
                    },
                    {
                      id: "ai-ml",
                      title: "🤖 AI & Machine Learning",
                      icon: Cpu,
                      skills: ["Machine Learning", "Data Analysis", "Python AI"],
                      activeBorder: "border-purple-500 bg-purple-950/25 shadow-[0_0_20px_rgba(168,85,247,0.25)] ring-1 ring-purple-500/30ScaleUp",
                      textColor: "text-purple-400",
                      badgeActive: "bg-purple-500 text-slate-950 border-purple-300 shadow-md shadow-purple-500/20",
                      badgeInactive: "bg-indigo-950/50 text-indigo-300/80 border-indigo-900/65 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/15"
                    },
                    {
                      id: "ui-ux",
                      title: "🎨 UI/UX & Graphic Design",
                      icon: Palette,
                      skills: ["UI/UX Design", "Graphic Design", "Visual Content", "UI Design"],
                      activeBorder: "border-amber-500 bg-amber-950/35 shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/30ScaleUp",
                      textColor: "text-amber-400",
                      badgeActive: "bg-amber-500 text-slate-950 border-amber-300 shadow-md shadow-amber-500/20",
                      badgeInactive: "bg-indigo-950/50 text-indigo-300/80 border-indigo-900/65 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-950/15"
                    },
                    {
                      id: "app-dev",
                      title: "📱 App Dev & WinForms",
                      icon: SparkleIcon,
                      skills: ["Desktop Apps", "WinForms", "C# Apps"],
                      activeBorder: "border-sky-500 bg-sky-950/25 shadow-[0_0_20px_rgba(14,165,233,0.25)] ring-1 ring-sky-500/30ScaleUp",
                      textColor: "text-sky-400",
                      badgeActive: "bg-sky-500 text-slate-950 border-sky-300 shadow-md shadow-sky-500/20",
                      badgeInactive: "bg-indigo-950/50 text-indigo-300/80 border-indigo-900/65 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-950/15"
                    },
                    {
                      id: "tools",
                      title: "🛠️ IDEs, Tools, Networking & Algorithms",
                      icon: Award,
                      colSpan: true,
                      skills: ["MATLAB", "Cisco", "NetBeans", "MS Office", "Networking", "Algorithms"],
                      activeBorder: "border-indigo-500 bg-indigo-950/25 shadow-[0_0_20px_rgba(99,102,241,0.25)] ring-1 ring-indigo-500/30ScaleUp",
                      textColor: "text-indigo-400",
                      badgeActive: "bg-indigo-500 text-slate-950 border-indigo-300 shadow-md shadow-indigo-500/20",
                      badgeInactive: "bg-indigo-950/50 text-indigo-300/80 border-indigo-900/65 hover:text-indigo-400 hover:border-indigo-505/50 hover:bg-indigo-950/15"
                    }
                  ].map((cat) => {
                    const isCatSelected = selectedSkillCategory === cat.id;
                    const IconComp = cat.icon;
                    return (
                      <div 
                        key={cat.id} 
                        onClick={() => setSelectedSkillCategory(selectedSkillCategory === cat.id ? null : cat.id)}
                        className={`transition-all duration-350 p-5 rounded-2xl relative cursor-pointer select-none origin-center transform border ${
                          cat.colSpan ? "md:col-span-2" : ""
                        } ${
                          isCatSelected 
                            ? cat.activeBorder + " scale-[1.015]"
                            : "bg-[#0c061e] border-indigo-950/70 hover:border-indigo-800/60 hover:scale-[1.005]"
                        }`}
                      >
                        {/* Selected Indicator Light */}
                        {isCatSelected && (
                          <div className="absolute top-2.5 right-2.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                          </div>
                        )}

                        <div className="flex items-center gap-2.5 mb-3.5">
                          <IconComp className={`h-5 w-5 transition-transform duration-300 ${isCatSelected ? cat.textColor + " rotate-12 scale-110" : "text-slate-400"}`} />
                          <span className={`text-xs font-black tracking-wider uppercase transition-colors ${isCatSelected ? cat.textColor : "text-white"}`}>
                            {cat.title}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                          {cat.skills.map((s) => {
                            const isBadgeSelected = selectedSkillBadge === s;
                            return (
                              <button
                                key={s}
                                type="button"
                                onClick={() => setSelectedSkillBadge(selectedSkillBadge === s ? null : s)}
                                className={`transition-all duration-200 px-3 py-1.5 rounded-xl text-xs font-bold border-0 cursor-pointer ${
                                  isBadgeSelected 
                                    ? cat.badgeActive 
                                    : cat.badgeInactive
                                }`}
                              >
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* VISUAL EDUCATION & MILESTONES TIMELINE */}
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">{t.educationTitle}</span>
                </h3>

                <div className="space-y-4 text-left sm:text-right">
                  {/* Item 1 */}
                  <div className="bg-[#0b0521] border border-indigo-950/60 rounded-2xl p-5 relative group hover:border-indigo-800 transition-colors shadow-inner">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-indigo-950/30">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-amber-500 animate-pulse" />
                        <span className="text-white font-black text-sm">{t.diplomaTitle}</span>
                      </div>
                      <span className="text-xs font-black text-amber-400 bg-amber-950/40 border border-amber-800/20 px-2.5 py-1 rounded-full uppercase">
                        2024 – 2025
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                      {t.diplomaDesc}
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-[#0b0521] border border-indigo-950/60 rounded-2xl p-5 relative group hover:border-indigo-800 transition-colors shadow-inner">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-indigo-950/30">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-indigo-400" />
                        <span className="text-white font-black text-sm">{t.mentorTitle}</span>
                      </div>
                      <span className="text-xs font-black text-indigo-400 bg-indigo-950/40 border border-indigo-800/20 px-2.5 py-1 rounded-full uppercase">
                        2025 – 2026
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                      {t.mentorDesc}
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-[#0b0521] border border-indigo-950/60 rounded-2xl p-5 relative group hover:border-indigo-800 transition-colors shadow-inner">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-indigo-950/30">
                      <div className="flex items-center gap-2">
                        <Cpu className="h-5 w-5 text-emerald-400" />
                        <span className="text-white font-black text-sm">{t.traineeTitle}</span>
                      </div>
                      <span className="text-xs font-black text-emerald-400 bg-emerald-950/40 border border-emerald-800/20 px-2.5 py-1 rounded-full uppercase">
                        2025
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                      {t.traineeDesc}
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="bg-[#0b0521] border border-indigo-950/60 rounded-2xl p-5 relative group hover:border-indigo-800 transition-colors shadow-inner">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-indigo-950/30">
                      <div className="flex items-center gap-2">
                        <Palette className="h-5 w-5 text-rose-400" />
                        <span className="text-white font-black text-sm">{t.workerTitle}</span>
                      </div>
                      <span className="text-xs font-black text-rose-400 bg-[#32121e] border border-rose-900/30 px-2.5 py-1 rounded-full uppercase">
                        2026
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                      {t.workerDesc}
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    )}

    {/* MODERN COMPLIANT DISCREET PRIVACY POLICY VIEW (Peyvok and RevingKrd) */}
    {activeView === "privacy" && (
      <div className="space-y-8 animate-fadeIn mb-12">
        <div className="bg-[#100927] border border-indigo-950/60 rounded-[32px] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-500 via-indigo-600 to-purple-600"></div>

          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8" dir={["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? "rtl" : "ltr"}>
            <Shield className="h-12 w-12 text-teal-400 mx-auto animate-pulse" />
            <h2 className="text-3xl font-black text-white">
              {t.privacyTitle}
            </h2>
            <p className="text-xs text-indigo-300 font-mono uppercase tracking-widest bg-indigo-950/60 px-3 py-1 rounded-full inline-block">
              {t.privacySubtitle}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed font-semibold font-sans">
              {t.privacyHeaderDesc}
            </p>
          </div>

          {/* Elegant pill selector to toggle between Privacy and Terms */}
          <div className="flex justify-center mb-8" dir={["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? "rtl" : "ltr"}>
            <div className="bg-indigo-950/40 p-1 rounded-full border border-indigo-900/60 inline-flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => setPrivacySubTab("policy")}
                className={`px-4.5 py-1.5 rounded-full text-[11px] font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  privacySubTab === "policy"
                    ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>🛡️</span>
                <span>{siteLang === 'ku_badini' || siteLang === 'ku_sorani' ? 'سیاسەتا پاراستنێ' : 'Privacy Policy'}</span>
              </button>
              <button
                type="button"
                onClick={() => setPrivacySubTab("rules")}
                className={`px-4.5 py-1.5 rounded-full text-[11px] font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  privacySubTab === "rules"
                    ? "bg-gradient-to-r from-teal-500 to-indigo-600 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>📜</span>
                <span>{siteLang === 'ku_badini' || siteLang === 'ku_sorani' ? 'مەرج و یاسایێن بکارئینانێ' : 'Terms of Service'}</span>
              </button>
            </div>
          </div>

          {privacySubTab === "policy" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed" dir={["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? "rtl" : "ltr"}>
              {t.privacyItems.map((item, idx) => (
                <div key={idx} className="bg-[#0b051f] border border-indigo-950 p-6 rounded-2xl relative transition-all hover:border-indigo-800 shadow-inner group">
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-950/80 text-cyan-300 border border-indigo-900/40">
                      {item.badge}
                    </span>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 inline-block mb-3 animate-pulse"></span>
                  <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 font-semibold leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6" dir={["ku_badini", "ku_sorani", "ar"].includes(siteLang) ? "rtl" : "ltr"}>
              <div className="p-4 bg-teal-500/5 border border-teal-500/20 rounded-2xl text-right text-[11px] font-bold text-teal-300/90 leading-relaxed">
                🗣️ <strong>مەرج و یاسایێن گشتی:</strong> هیڤییە بەریا بکارئینانا خزمەتگۆزاریێن پلاتفۆرمی پەیڤۆک (Peyvok) ڤان خالان ب هووری بخوینە. پاراستنا مافێ تە و یێ سیستەمی ئەرکێ مەیە. دوماهی نویگرن: نیسانا ٢٠٢٦.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 leading-relaxed">
                {PEYVOK_TERMS_LIST.map((term, index) => (
                  <div key={index} className="bg-[#0b051f] border border-indigo-950/80 p-5 rounded-2xl relative transition-all hover:border-indigo-800/80 shadow-md group text-right">
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black font-mono px-2 rounded-full bg-teal-950/80 text-teal-400 border border-teal-900/40">
                        {term.num}
                      </span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-teal-400 inline-block mb-2 group-hover:scale-125 transition-transform duration-300 shrink-0"></span>
                    <h3 className="text-sm font-black text-white mb-1.5">{term.title}</h3>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-semibold font-sans">
                      {term.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Secure seals */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10 pt-6 border-t border-indigo-950/40 text-[11px] font-mono text-slate-400">
            <span className="bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-md">✦ GDPR COMPLIANT SPIRIT</span>
            <span className="bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-md">✦ NO USER ACCOUNTS REQUIRED</span>
            <span className="bg-slate-900/60 border border-slate-800 px-3 py-1 rounded-md">✦ SECURE REVIING INFRASTRUCTURE</span>
          </div>

        </div>
      </div>
    )}

        {/* ENHANCED/WORLD-CLASS FOOTER BLOCK (Perfectly matched to reference mockup layout) */}
        <footer className="mt-16 bg-[#0c041f] border border-[#211550]/60 rounded-[32px] p-6 lg:p-8 shadow-2xl relative overflow-hidden z-10 animate-fadeIn">
          {/* Aesthetic multi-color gradient lighting strip on top of the card */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-600 via-teal-500 to-emerald-400"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Column 1: Profile Main Identity Info (Span 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 p-[1.5px] shadow-lg shrink-0">
                  <div className="h-full w-full bg-[#0a051d] rounded-2xl flex items-center justify-center font-black text-white text-lg font-mono">
                    RG
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    Reving Ghazwan
                  </h3>
                  <span className="font-mono text-[9px] text-[#fbbf24] font-black uppercase tracking-widest block mt-0.5">
                    {(FOOTER_TRANSLATIONS[siteLang] || FOOTER_TRANSLATIONS['en']).specialist}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start">
                <span className="bg-emerald-950/40 text-emerald-400 py-1.5 px-3 rounded-full text-[10px] font-mono font-black border border-emerald-900/40 inline-flex items-center gap-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow shadow-emerald-400"></span>
                  <span>{(FOOTER_TRANSLATIONS[siteLang] || FOOTER_TRANSLATIONS['en']).available}</span>
                </span>
                <span className="bg-indigo-950/40 text-indigo-300 py-1.5 px-3 rounded-full text-[10px] font-mono font-bold border border-indigo-900/40">
                  Duhok, Kurdistan
                </span>
              </div>
            </div>

            {/* Column 2: Detailed Text Contact List (Span 4) */}
            <div className="lg:col-span-4 bg-[#11082d]/60 p-4.5 rounded-2xl border border-[#1b1046]/45 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="h-4 w-4 text-[#fbbf24] shrink-0" />
                <a href="mailto:reving.ghazwan.it@gmail.com" className="hover:text-amber-400 transition-colors truncate">
                  reving.ghazwan.it@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:+9647503938072" className="hover:text-emerald-400 transition-colors">
                  +964 750 393 8072
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Globe className="h-4 w-4 text-purple-400 shrink-0" />
                <a href="https://revingkrd.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  revingkrd.com
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
                <span className="truncate">Duhok, Kurdistan Region, Iraq</span>
              </div>
            </div>

            {/* Column 3: Actionable Grid & Socials (Span 3) */}
            <div className="lg:col-span-3 space-y-3.5">
              <div className="w-full bg-gradient-to-r from-amber-500/25 via-[#3b1275]/40 to-[#0c0326]/90 border-2 border-amber-400 p-4 sm:p-5 rounded-2xl shadow-[0_4px_30px_rgba(245,158,11,0.3)] scale-[1.02] ring-2 ring-amber-400/30 text-center select-none animate-pulse">
                <span className="text-base sm:text-lg lg:text-xl font-black text-amber-300 block tracking-normal" dir="auto">
                  {(FOOTER_TRANSLATIONS[siteLang] || FOOTER_TRANSLATIONS['en']).directContact}
                </span>
              </div>
              
              {/* Direct call social buttons */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="mailto:reving.ghazwan.it@gmail.com"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold py-2 px-3 rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{(FOOTER_TRANSLATIONS[siteLang] || FOOTER_TRANSLATIONS['en']).emailMe}</span>
                </a>
                <a
                  href="tel:+9647503938072"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold py-2 px-3 rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{(FOOTER_TRANSLATIONS[siteLang] || FOOTER_TRANSLATIONS['en']).callMe}</span>
                </a>
              </div>

              {/* Stacked Row of rounded socials */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5">
                <a
                  href="https://revingkrd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#120a32] hover:bg-purple-950/50 border border-indigo-950 hover:border-purple-900 rounded-xl transition-all text-slate-400 hover:text-white"
                  title="Portfolio Website"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#120a32] hover:bg-purple-950/50 border border-indigo-950 hover:border-purple-900 rounded-xl transition-all text-slate-400 hover:text-white"
                  title="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#120a32] hover:bg-purple-950/50 border border-indigo-950 hover:border-purple-900 rounded-xl transition-all text-slate-400 hover:text-white"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#120a32] hover:bg-purple-950/50 border border-indigo-950 hover:border-purple-900 rounded-xl transition-all text-slate-400 hover:text-white"
                  title="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Lower Copyright Row - Upgraded to ultra-modern luxury glassmorphic capsule */}
          <div className="mt-10 p-6 bg-gradient-to-r from-[#0d0725]/90 via-[#140b3c]/85 to-[#0d0725]/90 border border-indigo-950 hover:border-indigo-800/80 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 relative overflow-hidden group">
            {/* Absolute accent background flare */}
            <div className="absolute top-1/2 left-10 -translate-y-1/2 w-28 h-28 bg-amber-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/10 transition-all duration-500"></div>
            
            <div className="flex items-center gap-3.5 relative z-10">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]"></span>
              </span>
              
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-black bg-gradient-to-r from-amber-400 via-amber-200 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_1.5px_6px_rgba(245,158,11,0.2)] font-sans tracking-wide leading-normal">
                  {(FOOTER_TRANSLATIONS[siteLang] || FOOTER_TRANSLATIONS['en']).rights}
                </span>
                <span className="text-[9px] font-medium text-slate-500 tracking-wider uppercase mt-1 leading-none">
                  ✦ Peyvok AI Hub • Global Digital Network ✦
                </span>
              </div>
            </div>
            
            {/* Outline pill indicators with micro-interactions */}
            <div className="flex flex-wrap justify-center gap-2 relative z-10">
              <span className="px-3 py-1 rounded-xl border border-purple-500/30 text-purple-300 bg-purple-950/20 hover:bg-purple-950/40 hover:border-purple-400 text-[10.5px] font-black transition-all duration-300 cursor-default flex items-center gap-1.5 shadow-sm">
                <span>{(siteLang === 'ku_badini' || siteLang === 'ku_sorani') ? "کوردستان" : "Kurdistan"}</span>
                <span className="text-[10px]">🏔️</span>
              </span>
              <span className="px-3 py-1 rounded-xl border border-emerald-500/30 text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 hover:border-emerald-400 text-[10.5px] font-black transition-all duration-300 cursor-default flex items-center gap-1.5 shadow-sm">
                <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).badgeFree}</span>
                <span className="text-[10px]">💸</span>
              </span>
              <span className="px-3 py-1 rounded-xl border border-rose-500/30 text-rose-300 bg-rose-950/20 hover:bg-rose-950/40 hover:border-rose-400 text-[10.5px] font-black transition-all duration-300 cursor-default flex items-center gap-1.5 shadow-sm">
                <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).badgeNoAds}</span>
                <span className="text-[10px]">🚫</span>
              </span>
              <span className="px-3 py-1 rounded-xl border border-amber-500/30 text-amber-300 bg-amber-950/20 hover:bg-amber-950/40 hover:border-amber-400 text-[10.5px] font-black transition-all duration-300 cursor-default flex items-center gap-1.5 shadow-sm">
                <span>{(LOCALIZED_APP_TEXTS[siteLang] || LOCALIZED_APP_TEXTS.ku_badini).badgeAi}</span>
                <span className="text-[10px]">🤖</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    )}

      {showPeerReviewModal && (
        <div className="fixed inset-0 z-[999] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn duration-200">
          <div className="relative w-full max-w-2xl bg-[#0a0520] border-2 border-indigo-500/40 rounded-[24px] p-6 sm:p-7 shadow-[0_15px_50px_rgba(99,102,241,0.25)] max-h-[95vh] overflow-y-auto custom-scrollbar" dir="rtl">
            
            {/* Design accents */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            {/* Close Button */}
            <button
              onClick={() => {
                setShowPeerReviewModal(false);
                setSubmittedSuccessfully(false);
                setValidationRating("no");
                setActiveSurveyForm({
                  regionalWord: "",
                  regionOrTribe: "",
                  usageDescription: "",
                  contactHandle: ""
                });
              }}
              className="absolute top-5 left-5 p-2 rounded-xl bg-[#130b35] hover:bg-[#1f1155] text-slate-400 hover:text-white transition-all cursor-pointer border border-[#2b1773]"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="text-right space-y-1.5 mb-5 mt-1">
              <span className="text-[10px] tracking-widest text-[#fbbf24] border border-[#fbbf24]/30 bg-[#fbbf24]/10 px-2.5 py-1 rounded-md uppercase font-mono font-black shadow-[0_0_10px_rgba(251,191,36,0.15)] inline-block select-none">
                CAMPBELL ACADEMIC INTERACTION
              </span>
              <h3 className="text-lg font-black text-white font-kurdish flex items-center gap-2 mt-2">
                <span>پێشنیار و هەڵسەنگاندنا ئەکادیمی (Academic Peer Review)</span>
              </h3>
              <p className="text-xs text-slate-400 font-kurdish">
                تو دشێی سیستەمی باشتر بکەی ب رێکا پێشکەشکرنا پەیڤێن رەسەن یان ڕاستکرنا خەلەتیان. سەرنجێن تە دێ هێنە پاراستن.
              </p>
            </div>

            {submittedSuccessfully ? (
              <div className="bg-emerald-950/15 border-2 border-emerald-500/30 p-6 rounded-2xl text-center space-y-4 my-4 animate-scaleUp">
                <div className="mx-auto w-12 h-12 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-black text-emerald-400 font-kurdish">سۆپاسیا تە دکەین بۆ پشکداریێ!</h4>
                  <p className="text-xs text-emerald-100 font-kurdish leading-relaxed">
                    پێشنیار و پێزانینێن تە یا لێکۆڵینێ ب سەرکەفتیان هاتە زەخیرەکرن د سیستەمی دا و دێ هێتە لێکۆڵین ب شێوازەکێ ئەکادیمی.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowPeerReviewModal(false);
                    setSubmittedSuccessfully(false);
                    setValidationRating("no");
                    setActiveSurveyForm({
                      regionalWord: "",
                      regionOrTribe: "",
                      usageDescription: "",
                      contactHandle: ""
                    });
                  }}
                  className="bg-emerald-500 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer hover:bg-emerald-400 active:scale-95"
                >
                  باشە (Close)
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Editable Primary Evaluation Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#110931]/80 border border-indigo-950 p-4 rounded-2xl">
                  <div className="space-y-1.5 text-right">
                    <label className="text-[11px] font-black text-slate-400 font-kurdish">پەیڤا سەرەکی (English / Original Word)</label>
                    <input
                      type="text"
                      dir="ltr"
                      value={peerReviewModalOriginal || (currentWord ? currentWord.originalText : "")}
                      onChange={(e) => setPeerReviewModalOriginal(e.target.value)}
                      placeholder="e.g. procurement"
                      className="w-full bg-[#08021a] border border-indigo-950/80 rounded-xl p-2 px-3 text-xs text-white font-semibold font-mono focus:border-indigo-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5 text-right">
                    <label className="text-[11px] font-black text-slate-400 font-kurdish">وەرگێڕانا نوکە (Current System Translation)</label>
                    <input
                      type="text"
                      dir="rtl"
                      value={peerReviewModalTranslated || (currentWord ? currentWord.translatedText : "")}
                      onChange={(e) => setPeerReviewModalTranslated(e.target.value)}
                      placeholder="e.g. دابینکرن"
                      className="w-full bg-[#08021a] border border-indigo-950/80 rounded-xl p-2 px-3 text-xs text-white font-extrabold font-kurdish focus:border-indigo-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Regional Dialects Corrections */}
                <div className="bg-[#120a35]/65 border border-indigo-500/20 p-4 rounded-2xl space-y-3.5">
                  <h4 className="text-[11px] font-black text-amber-400 uppercase tracking-wider font-kurdish flex items-center justify-start gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    فورما پێشنیارێ: پەیڤا دروست و پێزانینێن ئەکادیمی
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {/* Input: Regional / Word Suggestion */}
                    <div className="space-y-1.5 text-right">
                      <label className="text-[11px] font-extrabold text-[#fbbf24] font-kurdish">پێشنیار یان پەیڤا تە یا دروست <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        dir="rtl"
                        value={activeSurveyForm.regionalWord}
                        onChange={(e) => setActiveSurveyForm(prev => ({ ...prev, regionalWord: e.target.value }))}
                        placeholder="بۆ نموونە: کڕین یان ستاندن"
                        className="w-full bg-[#050212] border border-indigo-950 rounded-xl p-2.5 px-3.5 text-xs text-white font-black font-kurdish focus:border-amber-500 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Input: Region, dialect or tribe name */}
                    <div className="space-y-1.5 text-right">
                      <label className="text-[11px] font-extrabold text-[#fbbf24] font-kurdish">زارڤا، دەڤەر، یان هۆزێ بدەنە دیارکرن <span className="text-red-400">*</span></label>
                      <input
                        type="text"
                        dir="rtl"
                        value={activeSurveyForm.regionOrTribe}
                        onChange={(e) => setActiveSurveyForm(prev => ({ ...prev, regionOrTribe: e.target.value }))}
                        placeholder="بۆ نموونە: دەڤەرا دوسکی، barzani..."
                        className="w-full bg-[#050212] border border-indigo-950 rounded-xl p-2.5 px-3.5 text-xs text-white font-black font-kurdish focus:border-amber-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Input: Usage explanation */}
                  <div className="space-y-1.5 text-right">
                    <label className="text-[11px] font-extrabold text-[#fbbf24] font-kurdish">شلوڤەکرن یان چەوانیا بکارهێنانێ ل دەڤەرا هەوە <span className="text-red-400">*</span></label>
                    <textarea
                      dir="rtl"
                      rows={2}
                      value={activeSurveyForm.usageDescription}
                      onChange={(e) => setActiveSurveyForm(prev => ({ ...prev, usageDescription: e.target.value }))}
                      placeholder="بۆچی ئەڤ پەیڤە دروستترە؟ پێناسە یان نموونە بو وێ پەیڤێ بنفیسە..."
                      className="w-full bg-[#050212] border border-indigo-950 rounded-xl p-2.5 px-3.5 text-xs text-white font-extrabold font-kurdish focus:border-amber-500 focus:outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Unified Contact Info Block */}
                  <div className="bg-[#09051c] border border-indigo-950 rounded-xl p-3 space-y-2">
                    <label className="text-[11px] font-black text-slate-400 font-kurdish flex items-center justify-between">
                      <span>جۆڕێ پەیوەندی یا ئۆپشنال هەڵبژێرە (Dynamic Contact Selector):</span>
                    </label>

                    {/* Inline Tab buttons */}
                    <div className="grid grid-cols-4 gap-1">
                      {(["instagram", "facebook", "phone", "email"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            setActiveContactType(type);
                            let prefix = "";
                            if (type === "instagram") prefix = "Instagram: @";
                            else if (type === "facebook") prefix = "Facebook: ";
                            else if (type === "phone") prefix = "Phone: ";
                            else if (type === "email") prefix = "Email: ";
                            setActiveSurveyForm((prev) => ({ ...prev, contactHandle: prefix }));
                          }}
                          className={`p-1.5 text-[10px] font-black font-kurdish rounded-lg border transition-all truncate cursor-pointer ${
                            activeContactType === type
                              ? "bg-amber-500/15 border-amber-500 text-amber-400"
                              : "bg-[#0b0621] border-indigo-950/60 text-slate-400 hover:text-white"
                          }`}
                        >
                          {type === "phone" ? "NUMBER" : type.toUpperCase()}
                        </button>
                      ))}
                    </div>

                    <input
                      type={activeContactType === "email" ? "email" : "text"}
                      dir={["phone", "email"].includes(activeContactType) ? "ltr" : "rtl"}
                      value={activeSurveyForm.contactHandle}
                      onChange={(e) => {
                        const val = e.target.value;
                        setActiveSurveyForm(prev => ({ ...prev, contactHandle: val }));
                      }}
                      placeholder={
                        activeContactType === "instagram"
                          ? "Instagram: @user"
                          : activeContactType === "facebook"
                            ? "Facebook: user"
                            : activeContactType === "phone"
                              ? "Phone: +964..."
                              : "Email: example@mail.com"
                      }
                      className="w-full bg-[#050212] border border-indigo-950/80 rounded-xl p-2 px-3 text-xs text-indigo-300 font-mono focus:border-amber-500/80 focus:outline-none transition-all text-right"
                    />
                  </div>
                </div>

                {/* Form submit footer */}
                <div className="flex items-center justify-end gap-3 mt-4 border-t border-indigo-950/40 pt-4">
                  <button
                    onClick={() => {
                      setShowPeerReviewModal(false);
                      setSubmittedSuccessfully(false);
                      setValidationRating("no");
                      setActiveSurveyForm({
                        regionalWord: "",
                        regionOrTribe: "",
                        usageDescription: "",
                        contactHandle: ""
                      });
                    }}
                    className="p-3 text-[11px] font-extrabold text-slate-400 hover:text-white transition-all font-kurdish cursor-pointer"
                  >
                    پەشیمان بووم (Cancel)
                  </button>
                  <button
                    disabled={!activeSurveyForm.regionalWord || !activeSurveyForm.regionOrTribe || !activeSurveyForm.usageDescription}
                    onClick={() => {
                      const orig = peerReviewModalOriginal || (currentWord ? currentWord.originalText : "");
                      const trans = peerReviewModalTranslated || (currentWord ? currentWord.translatedText : "");
                      saveFeedbackLocally("no", orig, trans);
                    }}
                    className="bg-[#fbbf24] hover:bg-amber-400 text-slate-950 font-black text-xs px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer font-kurdish"
                  >
                    خەزنکرن و پێشکەشکرن (Save Suggestion)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isUserConsoleOpen && (
          <div className="fixed inset-0 z-[999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn duration-200">
            <div className="relative w-full max-w-lg bg-[#0f082e] border border-amber-500/35 rounded-[32px] p-6 sm:p-8 shadow-[0_10px_50px_rgba(245,158,11,0.15)] overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar">
              {/* Golden neon lines decor */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-500 via-amber-300 to-orange-500"></div>

              {/* Close Button */}
              <button
                onClick={() => {
                  setIsUserConsoleOpen(false);
                  setShowUserKeyRevealed(false);
                  setCopiedConsoleMessage(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-xl bg-[#1b0d45] hover:bg-[#25125d] text-slate-400 hover:text-white transition-all cursor-pointer border border-[#231557]"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Title Header */}
              <div className="text-center space-y-2 mb-4" dir="rtl">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-300 to-orange-500 p-0.5 shadow-lg flex items-center justify-center">
                  <div className="w-full h-full bg-[#0d0725] rounded-[14px] flex items-center justify-center text-3xl">
                    {userProfileGender === "boy" ? "👦" : "👧"}
                  </div>
                </div>
                <h3 className="text-lg font-black text-amber-300 uppercase tracking-wider">
                  کۆنسۆلا ئەکاونتێ تە یێ تایبەت
                </h3>
                <p className="text-xs text-slate-400">
                  ڕێکخستنا نهێنیا زانیاریان، کلیلان، و تۆکنێن زمانەوانی یێن پاراستی
                </p>
              </div>

              {/* Global Navigation Row */}
              <div className="flex items-center justify-center gap-1.5 p-1 bg-[#09031d] border border-indigo-950 rounded-2xl mb-3">
                <button
                  type="button"
                  onClick={() => setConsoleTab("stats")}
                  className={`px-4 py-2 text-[10.5px] font-black rounded-xl transition-all cursor-pointer ${
                    consoleTab === "stats" ? "bg-amber-500 text-slate-950 font-extrabold" : "text-indigo-300 hover:text-white"
                  }`}
                >
                  📊 سەرژمێری و کۆنترۆل (Live Stats)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (isUserLoggedIn) {
                      setConsoleTab("profile");
                    } else {
                      setConsoleTab("login");
                    }
                  }}
                  className={`px-4 py-2 text-[10.5px] font-black rounded-xl transition-all cursor-pointer ${
                    consoleTab !== "stats" ? "bg-amber-500 text-slate-950 font-extrabold" : "text-indigo-300 hover:text-white"
                  }`}
                >
                  👤 {isUserLoggedIn ? "هژمارا من" : "لۆگین (Sign In)"}
                </button>
              </div>

              {/* Core Content Form - Dynamic depending on login state */}
              <div className="space-y-5 mt-4 text-right" dir="rtl">
                {consoleTab === "stats" ? (
                  <div className="space-y-6 animate-fadeIn text-right font-kurdish" dir="rtl">
                    <div className="bg-[#12072f] border border-indigo-950 p-4 rounded-2xl text-center space-y-1">
                      <span className="text-amber-400 text-[10px] font-black tracking-widest uppercase">AUTOMATED PLATFORM REPORT</span>
                      <h4 className="text-sm font-black text-white">ئامارێن گشتى یێن پەیڤۆک (Platform Statistics)</h4>
                      <div className="h-0.5 w-10 bg-amber-500 mx-auto rounded-full mt-1.5"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#130d2f] border border-[#27155c]/35 rounded-2xl p-4 text-center space-y-1 shadow-inner">
                        <span className="text-slate-400 text-[9.5px] uppercase font-black tracking-wider">سەردان (Views)</span>
                        <p className="text-xl font-bold text-amber-300 font-mono">
                          {(globalStats?.totalViews || 0).toLocaleString()}
                        </p>
                      </div>

                      <div className="bg-[#130d2f] border border-[#27155c]/35 rounded-2xl p-4 text-center space-y-1 shadow-inner">
                        <span className="text-slate-400 text-[9.5px] uppercase font-black tracking-wider">وەرگێڕان (Translations)</span>
                        <p className="text-xl font-bold text-emerald-300 font-mono">
                          {(globalStats?.translationsCount || 0).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#110729] border border-[#27155c]/35 rounded-2xl p-4">
                      <span className="text-indigo-300 text-[9.5px] uppercase font-black tracking-widest block mb-3 border-b border-[#27155c]/25 pb-1.5">
                        دابەشبوونا سەردانیکەران (Demographics)
                      </span>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-[#130d2f] p-2.5 rounded-xl border border-indigo-950/60 shadow-sm">
                          <span className="text-lg block">👦</span>
                          <span className="text-[9.5px] font-bold text-indigo-200 block">کوڕ (Boys)</span>
                          <span className="text-xs font-black text-white font-mono mt-0.5 block">
                            {globalStats?.genders?.boy || 0}
                          </span>
                        </div>

                        <div className="bg-[#130d2f] p-2.5 rounded-xl border border-indigo-950/60 shadow-sm">
                          <span className="text-lg block">👧</span>
                          <span className="text-[9.5px] font-bold text-indigo-200 block">کچ (Girls)</span>
                          <span className="text-xs font-black text-white font-mono mt-0.5 block">
                            {globalStats?.genders?.girl || 0}
                          </span>
                        </div>

                        <div className="bg-[#130d2f] p-2.5 rounded-xl border border-indigo-950/60 shadow-sm">
                          <span className="text-lg block">🤝</span>
                          <span className="text-[9.5px] font-bold text-indigo-200 block">مێڤان (Guests)</span>
                          <span className="text-xs font-black text-white font-mono mt-0.5 block">
                            {globalStats?.genders?.guest || 0}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#110729] border border-[#27155c]/35 rounded-2xl p-4">
                      <span className="text-indigo-300 text-[9.5px] uppercase font-black tracking-widest block mb-3 border-b border-[#27155c]/25 pb-1.5">
                        🔥 گەڕانێن پاشەکەوتکرى (Top Searches)
                      </span>
                      
                      {globalStats?.topTranslations && globalStats.topTranslations.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5 text-right justify-center">
                          {globalStats.topTranslations.map((term: any, idx: number) => (
                            <div 
                              key={idx} 
                              onClick={() => {
                                setTranslateQuery(term.text);
                                setIsUserConsoleOpen(false);
                              }}
                              className="bg-[#21114b] hover:bg-[#341d72] border border-[#3e2280]/40 rounded-xl px-2.5 py-1.5 flex items-center justify-between gap-2 text-xs text-white transition-all cursor-pointer font-bold select-none"
                              title="Click to check translation"
                            >
                              <span>{term.text}</span>
                              <span className="bg-amber-500/10 text-amber-300 border border-amber-500/25 px-1 py-0.5 rounded font-mono text-[9px]">
                                {term.count}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[10px] text-slate-500 text-center py-4 font-semibold italic">
                          سیستەم نووکە چاودێریا زانیاریان دکەت... (Listening for translation logs)
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  !isUserLoggedIn ? (
                  /* 1. PASSCODE LOGIN SCREEN (NOT LOGGED IN) */
                  <div className="space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                      تکایە کۆدێ چوونەژوورێ بنڤیسە داکو بشێی ناڤ، ڕەگەز، یان هژمارا خۆ بگۆڕی.
                    </p>

                    {loginError && (
                      <div className="bg-rose-950/40 border border-rose-500/30 p-3 rounded-xl text-[11px] text-rose-300 leading-relaxed font-semibold">
                        ⚠️ {loginError}
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-indigo-300 uppercase block">کۆدێ چوونەژوورێ (Entrance Passcode)</label>
                      <input
                        type="password"
                        value={loginCodeField}
                        onChange={(e) => setLoginCodeField(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleUserLoginSubmit();
                        }}
                        placeholder="••••"
                        className="w-full bg-[#050212] border-2 border-indigo-950 rounded-xl p-3 text-xs text-white tracking-widest font-mono text-center focus:outline-none focus:border-amber-500/50"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleUserLoginSubmit}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-[1.02] font-black text-xs py-3 rounded-xl transition-all cursor-pointer text-slate-950 mt-2"
                    >
                      تەئکیدکرن و چوونەژوورێ (Sign In & Connect) 🔑
                    </button>

                    <div className="bg-[#120a2e]/30 border border-indigo-950 p-4 rounded-xl text-[10.5px] text-slate-400 leading-relaxed font-semibold">
                      💡 <strong className="text-amber-300">مێهڤانێ هێژا:</strong> ئەگەر تە کۆد هەیە داخل ببە، یان دشێی ب شێوازێ مێهڤان کارپێبکەی ب ٢٥,٠٠٠ تۆکنان بێی بەندبوونا مەکینەی.
                    </div>
                  </div>
                ) : (loggedInUserCode === "admin1234" || loggedInUserCode === "aikurd0101" || loggedInUserCode === "learnkrdai0000" || loggedInUserCode === "learnai1234") ? (
                  /* USER SECURE PANELS AND WORKSPACE HQ - PREMIUM MULTI-TAB CONTROLS */
                  <div className="space-y-5">
                    
                    {/* NAV ROW FOR PREMIUM WORKSPACE USERS */}
                    <div className="flex flex-wrap items-center justify-start gap-1.5 p-1 bg-[#09031d] border border-indigo-950 rounded-2xl">
                      <button
                        type="button"
                        onClick={() => setConsoleTab("profile")}
                        className={`px-3 py-1.5 text-[10px] font-black rounded-xl transition-all cursor-pointer ${
                          consoleTab === "profile" ? "bg-amber-500 text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        👤 پرۆفایل
                      </button>

                      {loggedInUserCode === "admin1234" && (
                        <button
                          type="button"
                          onClick={() => setConsoleTab("admin")}
                          className={`px-3 py-1.5 text-[10px] font-black rounded-xl transition-all cursor-pointer ${
                            consoleTab === "admin" ? "bg-amber-500 text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          ⚙️ هژمارەکان
                        </button>
                      )}

                      {(loggedInUserCode === "admin1234" || loggedInUserCode === "aikurd0101") && (
                        <button
                          type="button"
                          onClick={() => setConsoleTab("feedbacks")}
                          className={`px-3 py-1.5 text-[10px] font-black rounded-xl transition-all cursor-pointer ${
                            consoleTab === "feedbacks" ? "bg-amber-500 text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          📖 راپۆڕتێن دەڤەری
                        </button>
                      )}

                      {(loggedInUserCode === "admin1234" || loggedInUserCode === "learnkrdai0000" || loggedInUserCode === "learnai1234") && (
                        <button
                          type="button"
                          onClick={() => setConsoleTab("train")}
                          className={`px-3 py-1.5 text-[10px] font-black rounded-xl transition-all cursor-pointer ${
                            consoleTab === "train" ? "bg-amber-500 text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          🤖 فێرکرنا AI
                        </button>
                      )}
                    </div>

                    {/* SUB-VIEW 1: PERSONAL ACCOUNT PROFILE EDITING */}
                    {consoleTab === "profile" && (
                      <div className="space-y-5 animate-fadeIn">
                        {/* GENDER */}
                        <div className="space-y-2">
                          <label className="text-[11px] font-black tracking-widest text-[#cfc7ff] uppercase block">
                            ڕەگەز (Gender Avatar Selection)
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => {
                                setUserProfileGender("boy");
                                if (typeof window !== "undefined" && loggedInUserCode) {
                                  localStorage.setItem(`peyvok_gender_${loggedInUserCode}`, "boy");
                                }
                              }}
                              className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all cursor-pointer ${
                                userProfileGender === "boy"
                                  ? "bg-gradient-to-r from-amber-500/20 to-[#120a2e] border-amber-400 text-white shadow animate-fadeIn"
                                  : "bg-[#070317] border-[#221752] text-slate-400 hover:text-white hover:bg-slate-900"
                              }`}
                            >
                              <span className="text-xl">👦</span>
                              <span>کوڕ (Male)</span>
                              {userProfileGender === "boy" && <Check className="h-3.5 w-3.5 text-amber-400 stroke-[3]" />}
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setUserProfileGender("girl");
                                if (typeof window !== "undefined" && loggedInUserCode) {
                                  localStorage.setItem(`peyvok_gender_${loggedInUserCode}`, "girl");
                                }
                              }}
                              className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all cursor-pointer ${
                                userProfileGender === "girl"
                                  ? "bg-gradient-to-r from-amber-500/20 to-[#120a2e] border-amber-400 text-white shadow animate-fadeIn"
                                  : "bg-[#070317] border-[#221752] text-slate-400 hover:text-white hover:bg-slate-900"
                              }`}
                            >
                              <span className="text-xl">👧</span>
                              <span>کچ (Female)</span>
                              {userProfileGender === "girl" && <Check className="h-3.5 w-3.5 text-amber-400 stroke-[3]" />}
                            </button>
                          </div>
                        </div>

                        {/* NAME */}
                        <div className="space-y-2">
                          <label className="text-[11px] font-black tracking-widest text-[#cfc7ff] uppercase block">
                            ناڤێ تە یێ فەرمی (Your Display Name)
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              maxLength={25}
                              value={userProfileName}
                              onChange={(e) => handleUpdateUserName(e.target.value || "مێهڤانێ هێژا")}
                              className="w-full bg-[#050212] border-2 border-indigo-950/80 rounded-xl p-3 text-sm text-white font-bold focus:outline-none focus:border-amber-500/50 text-right"
                              placeholder="ناڤێ خۆ بنڤیسە..."
                            />
                            <div className="absolute left-3 top-3.5 text-slate-400">
                              <User className="h-4 w-4" />
                            </div>
                          </div>
                        </div>

                        {/* VISITOR REASONING KEY GENERATOR MODULE */}
                        <div className="p-4 bg-indigo-950/20 border border-indigo-505/25 rounded-2xl space-y-2.5 text-right">
                          <div className="flex items-center justify-between border-b border-indigo-950/65 pb-1.5">
                            <span className="text-[11.5px] font-black text-amber-300 uppercase flex items-center gap-1.5">
                              <Key className="h-4 w-4 text-amber-400" />
                              مۆڵەتا سەردانیکەرێ خۆکار (Automated Visitor Key)
                            </span>
                            <span className="text-[9.5px] bg-[#fbbf24]/20 border border-amber-500/40 text-amber-400 px-2 py-0.5 rounded font-black font-mono">
                              ACTIVE REASONING
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-300 leading-relaxed font-semibold">
                            ئەڤ کلیلا ل خوارێ ب شێوازەکێ خۆکار بۆ هەر سەردانیکەرەکی دهێتە دروستکرن. تۆ دشێی وەک ئادمین گەرمترین سەرژمێری و تۆکنێن زمانەوانی رێکبێخی:
                          </p>
                          <div className="flex items-center gap-2 bg-[#05010f] border border-indigo-950 rounded-xl p-2.5 font-mono text-center">
                            <input
                              type="text"
                              readOnly
                              value={personalApiKey}
                              className="w-full bg-transparent border-0 text-[10.5px] font-black text-amber-400 tracking-wide focus:outline-none focus:ring-0 text-left"
                            />
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(personalApiKey);
                                setAdminFeedback("✓ کلیلا سەردانیکەر هاتە کۆپیکردن ب سەرکەفتن.");
                                setTimeout(() => setAdminFeedback(""), 2000);
                              }}
                              type="button"
                              className="text-indigo-400 hover:text-white text-xs shrink-0 bg-indigo-950/60 p-1.5 rounded border border-indigo-900/40 cursor-pointer"
                              title="Copy key"
                            >
                              <Copy className="h-3 w-3" />
                            </button>
                          </div>
                        </div>

                        {/* TOKEN RESERVE STATS */}
                        <div className="p-4 bg-emerald-950/10 border border-emerald-500/20 rounded-2xl relative overflow-hidden text-right">
                          <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-emerald-500"></div>
                          
                          <div className="flex items-center justify-between font-bold">
                            <div>
                              <h4 className="text-xs text-emerald-400">خەزینا تۆکنێن پاراستی (Token Reserve)</h4>
                              <p className="text-[10px] text-slate-400 mt-1">ب هەر کارەکێ وەرگێڕانێ دێ تۆکن کێم بن</p>
                            </div>
                            
                            <div className="text-right">
                              <span className="text-lg text-emerald-400 font-mono tracking-wide">
                                {userProfileTokens.toLocaleString()} TKN
                              </span>
                            </div>
                          </div>

                          <div className="mt-3.5 bg-[#050212] border border-amber-500/35 rounded-xl p-4 text-[11px] leading-relaxed font-semibold text-slate-300 space-y-3">
                            <div className="flex items-center gap-1.5 text-amber-400 font-extrabold pb-1.5 border-b border-indigo-950/60">
                              <Sparkles className="h-4 w-4 shrink-0 text-amber-400 animate-pulse" />
                              <span>خۆڕا نوو بكە (Refill Tokens for Free) 💸</span>
                            </div>
                            <p className="leading-relaxed text-slate-300 pb-1">
                              تە دڤێت خەزینا خۆ یا تۆکنێن بەردەست ژبۆ وەرگێڕانێ گەورەتر لێ بکەی؟ دشێی ٣٠٠,٠٠٠ تۆکنان ب تەواوەی بەلاش ب دەستکەوی ب نامەکێ بۆ پەیجێ ئینستاگرامى:
                            </p>
                            <a
                              href="https://www.instagram.com/kurdtech.it.01"
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:scale-[1.01] hover:from-amber-400 hover:to-orange-400 text-slate-950 transition-all font-black text-center block text-[10.5px] cursor-pointer"
                            >
                              ئینستاگرام لقێ ڕێکارێ تۆکنان 🔗
                            </a>
                          </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="bg-[#070317] border border-[#2a1b65]/55 p-4 rounded-2xl space-y-3">
                          <h4 className="text-xs font-black text-amber-300 flex items-center gap-2">
                            <Shield className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                            <span>کریار و ئەکشنز (Actions)</span>
                          </h4>

                          <button
                            type="button"
                            onClick={handleUserLogout}
                            className="w-full bg-rose-600/20 hover:bg-rose-600/45 border border-rose-500/40 text-rose-300 hover:text-white font-black text-xs py-2.5 rounded-xl transition-all cursor-pointer text-center block"
                          >
                            دەرکەفتن ژ ئەکاونتی (Log Out Profile) 🚪
                          </button>

                          <div className="pt-2 border-t border-indigo-950/50 text-center">
                            <button
                              type="button"
                              onClick={handleRequestAccountDeletion}
                              className="text-[10.5px] text-rose-400 hover:text-rose-300 hover:underline transition-all cursor-pointer font-bold"
                            >
                              ⚙️ داخوازیا ژێبرنا هژمارا خۆ بکە (Request Permanent Account Deletion)
                            </button>
                            {showDeletionRequestedMsg && (
                              <p className="text-[10px] text-amber-400 font-bold mt-1.5 animate-pulse">
                                ⏳ داخوازیا ژێبرنێ ب سەرکەفتن هاتە تۆمارکردن ل سەر داتابەیسێ سیستەمی...
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SUB-VIEW 2: DYNAMIC ADMIN INTERFACE (REAL USERS DATABASE) */}
                    {consoleTab === "admin" && loggedInUserCode === "admin1234" && (
                      <div className="space-y-6 animate-fadeIn font-semibold text-xs text-slate-300">
                        <div className="p-3.5 bg-amber-500/10 border border-amber-500/35 rounded-2xl flex items-center gap-3 text-right">
                          <Shield className="h-6 w-6 text-amber-400 shrink-0" />
                          <div>
                            <h4 className="text-xs font-black text-amber-300">ڕووبەرێ کۆنترۆڵا ئەندامان (Peyvok Users HQ)</h4>
                            <p className="text-[10.5px] text-slate-300 mt-0.5">دەستکاریا ئەکاونتێن فەرمی بکە د داتابەیسێ دا (Add, View, Edit, and Delete profiles dynamically)</p>
                          </div>
                        </div>

                        {adminFeedback && (
                          <div className="p-3 bg-violet-950/40 border border-indigo-505/20 text-[11px] font-bold text-amber-300 rounded-xl leading-relaxed text-right animate-pulse">
                            💡 {adminFeedback}
                          </div>
                        )}

                        {/* ADD / EDIT COMPACT FORM FOR ADMIN */}
                        <form onSubmit={handleAdminFormSubmit} className="p-4 bg-[#08041d] border border-indigo-950 rounded-2xl space-y-3.5 text-right">
                          <div className="flex items-center justify-between border-b border-indigo-950/70 pb-2">
                            <span className="text-[11px] font-black text-[#cfc7ff]">
                              {adminFormIsEdit ? "📝 دەستکاریکردنا ئەکاونتی (Edit Account)" : "➕ زێدەکرنا هژمارەکا نوو (Create Member Profile)"}
                            </span>
                            {adminFormIsEdit && (
                              <button
                                type="button"
                                onClick={() => {
                                  setAdminFormName("");
                                  setAdminFormCode("");
                                  setAdminFormGender("boy");
                                  setAdminFormApiKey("");
                                  setAdminFormTokens(250000);
                                  setAdminFormIsEdit(false);
                                  setAdminFeedback("دەستکاری پاشگەزکرایەوە.");
                                }}
                                className="text-[10px] text-rose-400 font-extrabold hover:underline cursor-pointer"
                              >
                                بەتالکرن (Cancel)
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">ناڤێ ئەندامی (Display Name)</label>
                              <input
                                type="text"
                                required
                                placeholder="ڕێبین دهۆك"
                                value={adminFormName}
                                onChange={(e) => setAdminFormName(e.target.value)}
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none text-right"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">کۆدێ چوونەژوورێ (Passcode)</label>
                              <input
                                type="text"
                                required
                                placeholder="2026"
                                value={adminFormCode}
                                onChange={(e) => setAdminFormCode(e.target.value)}
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold font-mono text-white focus:outline-none text-center"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">ڕەگەز (Gender)</label>
                              <select
                                value={adminFormGender}
                                onChange={(e) => setAdminFormGender(e.target.value as "boy" | "girl")}
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-2 py-2 text-xs font-semibold text-white focus:outline-none text-right"
                              >
                                <option value="boy">👦 کوڕ (Male)</option>
                                <option value="girl">👧 کچ (Female)</option>
                              </select>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">هژمارا تۆکنان (Allocated Tokens)</label>
                              <input
                                type="number"
                                required
                                value={adminFormTokens}
                                onChange={(e) => setAdminFormTokens(parseInt(e.target.value, 15) || 0)}
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold font-mono text-white focus:outline-none text-center"
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">کلیل بۆکارپێکری (Personal OpenAI/Gemini Key - Optional)</label>
                            <input
                              type="password"
                              placeholder="ئارەزوومەندانە (🔑 AI SECURE KEY ...)"
                              value={adminFormApiKey}
                              onChange={(e) => setAdminFormApiKey(e.target.value)}
                              className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none text-left"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:scale-[1.01] text-white font-black text-xs py-2 rounded-xl transition-all cursor-pointer text-center"
                          >
                            {adminFormIsEdit ? "نووکرنەڤە و پاشکەوتکرنێ (Update & Save)" : "خەزنکردن و زێدەکرنا لستێ (Save Profile)"}
                          </button>
                        </form>

                        {/* LIST MEMBERS TABLE */}
                        <div className="border border-indigo-950 rounded-2xl overflow-hidden bg-[#060315] text-right">
                          <div className="bg-[#0c0724] px-4 py-3 border-b border-indigo-950">
                            <h4 className="text-xs font-black text-amber-300">فەهرەسا ئەندامێن ناڤ هاتی (Registered Workspace Directory)</h4>
                          </div>

                          <div className="overflow-x-auto max-h-[220px] custom-scrollbar">
                            <table className="w-full text-xs font-medium text-slate-300 text-right">
                              <thead className="bg-[#0b0521] text-[10px] text-slate-400 font-extrabold uppercase border-b border-indigo-950">
                                <tr>
                                  <th className="p-3 text-right">ناو / ئەندام</th>
                                  <th className="p-3 text-center">کۆدێ چوون</th>
                                  <th className="p-3 text-center">ڕەگەز</th>
                                  <th className="p-3 text-left">تۆکن</th>
                                  <th className="p-3 text-center">بژاردە</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-indigo-950/70 text-right">
                                {adminUserList.map((user) => (
                                  <tr key={user.code} className="hover:bg-[#120a2f]/50 transition-colors">
                                    <td className="p-3 font-extrabold text-white">
                                      {user.name}
                                    </td>
                                    <td className="p-3 text-center font-bold font-mono text-emerald-400">
                                      {user.code}
                                    </td>
                                    <td className="p-3 text-center">
                                      <span className="text-xs" title={user.gender === "boy" ? "Male" : "Female"}>
                                        {user.gender === "boy" ? "👦 کوڕ" : "👧 کچ"}
                                      </span>
                                    </td>
                                    <td className="p-3 text-left font-mono font-bold text-indigo-200">
                                      {user.tokens?.toLocaleString() || 0} TKN
                                    </td>
                                    <td className="p-3 text-center">
                                      <div className="flex items-center justify-center gap-1.5">
                                        <button
                                          type="button"
                                          onClick={() => handleAdminSelectEdit(user)}
                                          className="text-[9.5px] bg-amber-500/20 text-amber-300 hover:text-white px-2 py-0.5 rounded cursor-pointer font-bold"
                                        >
                                          Edit
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => handleAdminDeleteUser(user.code)}
                                          className="text-[9.5px] bg-rose-500/20 text-rose-300 hover:text-white px-2 py-0.5 rounded cursor-pointer font-bold"
                                        >
                                          Del
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                                {adminUserList.length === 0 && (
                                  <tr>
                                    <td colSpan={5} className="p-8 text-center text-slate-500 font-bold">
                                      هیچ هژمارەک ژ لیستی دا نییە! (Profiles are empty)
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* SESSION LOGOUT */}
                        <div className="bg-[#12040b]/30 border border-rose-950/60 p-4 rounded-2xl">
                          <button
                            type="button"
                            onClick={handleUserLogout}
                            className="w-full bg-rose-900/10 hover:bg-rose-900/30 border border-rose-500/40 text-rose-200 hover:text-white font-extrabold text-xs py-2.5 rounded-xl transition-all cursor-pointer text-center"
                          >
                            دەرکەفتن ژ ئەکاونتی ئەدمینی (Close Administrator Session) 🚪
                          </button>
                        </div>
                      </div>
                    )}

                    {/* SUB-VIEW 3: FEEDBACK REGISTRY REPORT & WORD EXPORT */}
                    {consoleTab === "feedbacks" && (loggedInUserCode === "admin1234" || loggedInUserCode === "aikurd0101") && (
                      <div className="space-y-5 animate-fadeIn text-right">
                        <div className="p-3.5 bg-amber-500/10 border border-amber-500/35 rounded-2xl">
                          <h4 className="text-xs font-black text-amber-300 flex items-center gap-2">
                            <BookOpen className="h-4.5 w-4.5" />
                            <span>ئەرشیفا وەرگێرانێن دەڤەری (Regional Dialects Registry Ledger)</span>
                          </h4>
                          <p className="text-[10px] text-slate-300 mt-1 font-semibold leading-relaxed">
                            تۆ زانیاری زانستی و پێشنیارێن کەتوار یێن دەرکەفتی د ناڤ سیستەمی دا کۆنترۆل دکەی دگەل پەیوەندیان:
                          </p>
                        </div>

                        {/* EXPORT OPTIONS BOX */}
                        <div className="grid grid-cols-2 gap-3 p-3 bg-indigo-950/20 border border-indigo-950 rounded-2xl">
                          <button
                            onClick={() => {
                              const printWin = window.open("", "_blank");
                              if (!printWin) {
                                alert("Please allow popups to save or print the PDF ledger report!");
                                return;
                              }
                              let recordsHtml = "";
                              feedbacksList.forEach((item, idx) => {
                                recordsHtml += `
                                  <tr style="border-bottom: 1px solid #e2e8f0; font-size: 12px; font-family: sans-serif;">
                                    <td style="padding: 10px; text-align: center; font-weight: bold; color: #475569;">${idx + 1}</td>
                                    <td style="padding: 10px; text-align: right; font-weight: bold; color: #1e1b4b;">${item.originalWord}</td>
                                    <td style="padding: 10px; text-align: right; color: #312e81; font-weight: 700;">${item.translatedWord}</td>
                                    <td style="padding: 10px; text-align: right; color: #b45309; font-weight: bold; font-size: 13px;">${item.regionalVariant}</td>
                                    <td style="padding: 10px; text-align: right; color: #0d9488; font-weight: 600;">${item.regionOrTribe}</td>
                                    <td style="padding: 10px; text-align: right; color: #334155; max-width: 250px; line-height: 1.4;">${item.meaningUsage}</td>
                                    <td style="padding: 10px; text-align: left; font-family: monospace; color: #4f46e5; font-weight: bold;">${item.contact || "Standard"}</td>
                                  </tr>
                                `;
                              });

                              const fullReportHtml = `
                                <!DOCTYPE html>
                                <html dir="rtl">
                                <head>
                                  <meta charset="utf-8">
                                  <title>پەیڤۆک - ڕاپۆرتا پیشکەفتیا زمانەوانی یا دەڤەری</title>
                                  <style>
                                    body { font-family: system-ui, -apple-system, sans-serif; background-color: #f8fafc; color: #0f172a; padding: 40px; margin: 0; }
                                    .container { max-width: 1100px; margin: 0 auto; background: white; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; padding: 45px; }
                                    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 4px solid #f59e0b; padding-bottom: 24px; margin-bottom: 30px; }
                                    .header h1 { font-size: 24px; font-weight: 900; margin: 0; color: #1e1b4b; }
                                    .header p { margin: 6px 0 0 0; color: #475569; font-weight: 600; font-size: 13px; }
                                    .meta-box { text-align: left; background: #f1f5f9; border-radius: 12px; padding: 12px 20px; font-size: 12px; color: #475569; font-weight: bold; }
                                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                                    th { background-color: #f8fafc; color: #475569; font-weight: 800; font-size: 12px; padding: 14px 12px; text-align: right; border-bottom: 3px solid #e2e8f0; }
                                    td { border-bottom: 1px solid #f1f5f9; }
                                    .print-btn { background: #f59e0b; color: #0f172a; border: none; font-weight: 900; padding: 12px 24px; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-size: 14px; margin-bottom: 25px; transition: all 0.2s; box-shadow: 0 4px 6px -1px rgba(245,158,11,0.2); }
                                    .print-btn:hover { background: #d97706; transform: translateY(-1px); }
                                    @media print {
                                      body { background-color: white; padding: 0; }
                                      .container { box-shadow: none; border: none; max-width: 100%; padding: 0; }
                                      .print-btn { display: none; }
                                    }
                                  </style>
                                </head>
                                <body>
                                  <div class="container">
                                    <button class="print-btn" onclick="window.print()">🖨️ چاپکردن یان پاشەکەوتکردن ب شێوازێ PDF / Print to PDF</button>
                                    <div class="header">
                                      <div>
                                        <h1>📖 ڕاپۆرتا ئەکادیمی یا پیشکەفتیا زمانەوانی یا دەڤەری</h1>
                                        <p>پەیڤۆک (Peyvok Regional Dialects Academy Report Ledger)</p>
                                      </div>
                                      <div class="meta-box">
                                        <div style="margin-bottom: 4px;">رێکەفت: ${new Date().toLocaleDateString("ku")}</div>
                                        <div>کۆمبونا پێشنیاران: ${feedbacksList.length} پێشنیار</div>
                                      </div>
                                    </div>

                                    <table>
                                      <thead>
                                        <tr>
                                          <th style="width: 5%; text-align: center;">#</th>
                                          <th style="width: 18%;">پەیڤا بنەڕەتی (English)</th>
                                          <th style="width: 18%;">وەرگێڕانا فەرمی</th>
                                          <th style="width: 22%;">پێشنیارا دەڤەری (Kurdish Variant)</th>
                                          <th style="width: 15%;">دەڤەر / هۆز / مللەت</th>
                                          <th style="width: 14%;">مەرەم و نموونە</th>
                                          <th style="width: 8%; text-align: left;">پەیوەندی</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        ${recordsHtml || `<tr><td colspan="7" style="text-align:center; padding: 40px; color:#94a3b8; font-weight:bold;">لیستا پێشنیاران یا چۆڵە</td></tr>`}
                                      </tbody>
                                    </table>
                                  </div>
                                </body>
                                </html>
                              `;
                              printWin.document.write(fullReportHtml);
                              printWin.document.close();
                            }}
                            type="button"
                            className="py-2.5 px-3 rounded-xl bg-indigo-900 hover:bg-[#120a2e] hover:text-white text-indigo-200 border border-indigo-800 font-black text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                          >
                            <span>📄 چاپ یان PDF</span>
                          </button>

                          <button
                            onClick={() => {
                              let htmlContent = `
                                <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
                                <head>
                                  <title>Peyvok Academic Lexicon Report</title>
                                  <style>
                                    body { font-family: Arial, sans-serif; direction: rtl; }
                                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                                    th, td { border: 1px solid #000; padding: 8px; text-align: right; }
                                    th { background-color: #f2f2f2; }
                                  </style>
                                </head>
                                <body>
                                  <h2>Peyvok Academic Lexicon & Dialectal Registry Report</h2>
                                  <p>Generated on: ${new Date().toLocaleDateString()}</p>
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>پەیڤا بنەڕەتی</th>
                                        <th>وەرگێڕانا فەرمی</th>
                                        <th>پێشنیارا دەڤەری</th>
                                        <th>دەڤەر / هۆز / مللەت</th>
                                        <th>مەرەم و نموونە</th>
                                        <th>سەرچاوە و ناڤنیشان</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                              `;

                              feedbacksList.forEach(item => {
                                htmlContent += `
                                  <tr>
                                    <td>${item.originalWord}</td>
                                    <td>${item.translatedWord}</td>
                                    <td>${item.regionalVariant}</td>
                                    <td>${item.regionOrTribe}</td>
                                    <td>${item.meaningUsage}</td>
                                    <td>${item.contact || "نەهاتییە پێشکەشکرن"}</td>
                                  </tr>
                                `;
                              });

                              htmlContent += `
                                    </tbody>
                                  </table>
                                </body>
                                </html>
                              `;

                              const blob = new Blob([htmlContent], { type: "application/msword" });
                              const url = URL.createObjectURL(blob);
                              const link = document.createElement("a");
                              link.href = url;
                              link.download = `Peyvok_Academic_Report_${Date.now()}.doc`;
                              link.click();
                              URL.revokeObjectURL(url);
                            }}
                            type="button"
                            className="py-2.5 px-3 rounded-xl bg-[#fbbf24] hover:bg-amber-400 text-slate-950 font-black text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                          >
                            <span>💾 هەناردەکردنی Word</span>
                          </button>
                        </div>

                        {/* TABLE REPORTS */}
                        <div className="border border-indigo-950 rounded-2xl overflow-hidden bg-[#060315]">
                          <div className="overflow-x-auto max-h-[220px] custom-scrollbar">
                            <table className="w-full text-[11px] font-medium text-slate-300 text-right">
                              <thead className="bg-[#0b0521] text-[10px] text-slate-400 font-extrabold uppercase border-b border-indigo-950">
                                <tr>
                                  <th className="p-3 text-right">پەیڤا پەرێسکراو</th>
                                  <th className="p-3 text-right">وەرگێڕانێت دەڤەری</th>
                                  <th className="p-3 text-center">دەڤەر / مللەت / هۆز</th>
                                  <th className="p-3 text-left">پێوەندی</th>
                                  <th className="p-3 text-center">بژاردە</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-indigo-950/70 text-right">
                                {feedbacksList.map((item, idx) => (
                                  <tr key={idx} className="hover:bg-[#120a2f]/50 transition-colors">
                                    <td className="p-3 font-extrabold text-white">
                                      <div className="text-slate-400 text-[9px] font-mono leading-none mb-1">
                                        Org: {item.originalWord}
                                      </div>
                                      {item.translatedWord}
                                    </td>
                                    <td className="p-3 text-right text-[#fbbf24] font-extrabold">
                                      {item.regionalVariant}
                                      <p className="text-[9.5px] text-slate-400 leading-normal font-medium mt-1">
                                        رامان: {item.meaningUsage}
                                      </p>
                                    </td>
                                    <td className="p-3 text-center text-indigo-300 font-bold">
                                      {item.regionOrTribe}
                                    </td>
                                    <td className="p-3 text-left">
                                      {item.contactType && (
                                        <span className={`inline-block text-[9px] font-black uppercase px-2 py-0.5 rounded-md mb-1 ${
                                          item.contactType === "instagram" ? "bg-pink-500/15 text-pink-400 border border-pink-500/25" :
                                          item.contactType === "facebook" ? "bg-blue-500/15 text-blue-400 border border-blue-500/25" :
                                          item.contactType === "phone" ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25" :
                                          "bg-indigo-500/15 text-indigo-400 border border-indigo-500/25"
                                        }`}>
                                          {item.contactType === "phone" ? "NUMBER" : item.contactType.toUpperCase()}
                                        </span>
                                      )}
                                      <div className="text-emerald-400 font-mono font-bold text-xs leading-normal">
                                        {item.contact || "Pending"}
                                      </div>
                                    </td>
                                    <td className="p-3 text-center">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setFeedbacksList(prev => {
                                            const filterd = prev.filter((_, i) => i !== idx);
                                            localStorage.setItem("peyvok_regional_feedbacks", JSON.stringify(filterd));
                                            return filterd;
                                          });
                                          setAdminFeedback("✓ پێشنیار ژ لیستی هاتە ڕەشکرن.");
                                          setTimeout(() => setAdminFeedback(""), 2200);
                                        }}
                                        className="text-rose-400 hover:text-rose-200 bg-rose-950/40 p-1 rounded cursor-pointer"
                                        title="Remove feedback"
                                      >
                                        <Trash2 className="h-3 w-3" />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                                {feedbacksList.length === 0 && (
                                  <tr>
                                    <td colSpan={5} className="p-8 text-center text-slate-500 font-bold">
                                      هیچ پێشنیارەک دەست نیشان نەکراوە! (Review log empty)
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SUB-VIEW 4: AI NEURAL TRAINING SYSTEM (CUSTOM RULES) */}
                    {consoleTab === "train" && (loggedInUserCode === "admin1234" || loggedInUserCode === "learnkrdai0000" || loggedInUserCode === "learnai1234") && (
                      <div className="space-y-5 animate-fadeIn text-right">
                        <div className="p-3.5 bg-purple-950/30 border border-purple-500/20 rounded-2xl">
                          <h4 className="text-xs font-black text-purple-300 flex items-center gap-1.5 leading-normal">
                            <span className="text-sm">🤖</span>
                            <span>سیستەمێ فێرکرنا زیرەکیا دەستکرد (AI Neural Training Engine)</span>
                          </h4>
                          <p className="text-[10px] text-slate-300 mt-1 leading-relaxed font-semibold">
                            ڕێسا بەردەوامەکان، تاقیکردنەوەکان و پێزانینێن فێرکاری بۆ مۆدێلا فەرهەنگۆکی ئامادەکراو تۆمار بکە:
                          </p>
                        </div>

                        {/* FORM TO ADD DYNAMIC AI TERM LESSONS */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const target = e.currentTarget;
                            const fd = new FormData(target);
                            const newRule = {
                              inputPhrase: (fd.get("inputPhrase") as string || "").trim(),
                              regionOrDialect: (fd.get("regionOrDialect") as string || "").trim(),
                              englishTranslation: (fd.get("englishTranslation") as string || "").trim(),
                              kurdishMeaning: (fd.get("kurdishMeaning") as string || "").trim(),
                              usageExample: (fd.get("usageExample") as string || "").trim()
                            };

                            if (!newRule.inputPhrase || !newRule.kurdishMeaning) {
                              setAdminFeedback("⚠️ تکایە پەیڤ و ڕامانێ پڕبکەنەوە.");
                              return;
                            }

                            setCustomAiRules(prev => {
                              // Filter out any rule representing the same word
                              const filtered = prev.filter(r => r.inputPhrase.trim().toLowerCase() !== newRule.inputPhrase.trim().toLowerCase());
                              const updated = [newRule, ...filtered];
                              localStorage.setItem("peyvok_ai_custom_rules", JSON.stringify(updated));
                              return updated;
                            });

                            // REST Sync to backend server
                            fetch("/api/train", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({
                                originalWord: newRule.inputPhrase,
                                meaning: newRule.kurdishMeaning,
                                whyUsed: newRule.englishTranslation,
                                exampleSentence: newRule.usageExample,
                                regionOrTribe: newRule.regionOrDialect
                              })
                            })
                            .then(res => {
                              if (!res.ok) console.warn("Could not sync rule to server backend");
                            })
                            .catch(err => console.error("Sync error:", err));

                            target.reset();
                            setAdminFeedback("✓ ڕێسایا فێرکارییا زیرەکیا دەستکرد ب سەرکەفتن هاتە تۆمارکردن.");
                            setTimeout(() => setAdminFeedback(""), 2200);
                          }}
                          className="p-4 bg-[#09041a] border border-indigo-950 rounded-2xl space-y-3"
                        >
                          <span className="text-[10.5px] font-black text-purple-300 block pb-1 border-b border-indigo-950/50">
                            🏫 فێرکرن و ڕێسا پۆلێنکردنا زیرەکیا دەستکرد (Custom Model Alignment Form - learnai1234)
                          </span>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">ڕستە / پەیڤا سەرەکی ب [ئینگلیزی یان لادان] (Model Input Phrase) *</label>
                              <input
                                name="inputPhrase"
                                type="text"
                                required
                                placeholder="بۆ نموونە: 'بەتنێ' یان 'only'"
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none text-right"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">زارڤا، دەڤەر، یان هۆز (Dialect, Region or Tribe)</label>
                              <input
                                name="regionOrDialect"
                                type="text"
                                placeholder="بۆ نموونە: زاخۆ، دهۆک، یان دوسکی"
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none text-right"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">بۆچی دهێتە بکارئینان (Why It Is Used / Context)</label>
                              <input
                                name="englishTranslation"
                                type="text"
                                placeholder="بۆ نموونە: بۆ چێکرنا سینتاکسێ ڕاست یێ ڕێزمانێ"
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none text-right"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">ڕامان (Kurdish Meaning / Interpretation) *</label>
                              <input
                                name="kurdishMeaning"
                                type="text"
                                required
                                placeholder="بۆ نموونە: بتنێ"
                                className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none text-right"
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9.5px] font-bold text-slate-400 block pb-1 text-right">ڕستە (Kurdish Example Sentence usage)</label>
                            <input
                              name="usageExample"
                              type="text"
                              placeholder="بۆ نموونە: ئەز بتنێ دێ چمە زاخۆ."
                              className="w-full bg-[#03010b] border border-indigo-950 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none text-right"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-[1.01] text-white font-black text-xs py-2 rounded-xl transition-all cursor-pointer text-center"
                          >
                            🚀 تۆمارکردن و دەرسدانا جێمینای (Deploy AI Custom Rule)
                          </button>
                        </form>

                        {/* LIST CURRENT CUSTOM TAUGHT LESSONS */}
                        <div className="border border-indigo-950 rounded-2xl overflow-hidden bg-[#060315]">
                          <div className="bg-[#0c0724] px-4 py-3 border-b border-indigo-950">
                            <h4 className="text-xs font-black text-purple-300">ڕێدۆزێن زانیاری یێن کۆنترۆڵکراو (Custom AI Knowledge Bases)</h4>
                          </div>

                          <div className="overflow-x-auto max-h-[180px] custom-scrollbar">
                            <table className="w-full text-xs font-medium text-slate-300 text-right">
                              <thead className="bg-[#0b0521] text-[10px] text-slate-400 font-extrabold uppercase border-b border-indigo-950">
                                <tr>
                                  <th className="p-2.5 text-right">پەیڤ دەرکری</th>
                                  <th className="p-2.5 text-right font-sans">English Mapped</th>
                                  <th className="p-2.5 text-center">دەڤەر / زارڤا</th>
                                  <th className="p-2.5 text-center">بژاردە</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-indigo-950/70 text-right">
                                 {customAiRules.map((rule, idx) => (
                                  <tr key={idx} className="hover:bg-[#120a2f]/50 transition-colors">
                                    <td className="p-2.5 font-extrabold text-white">
                                      {rule.inputPhrase}
                                      <p className="text-[9.5px] text-slate-400 leading-normal font-medium mt-0.5">
                                        رامان: {rule.kurdishMeaning}
                                      </p>
                                    </td>
                                    <td className="p-2.5 text-right font-bold text-amber-300 font-mono text-[11px]">
                                      {rule.englishTranslation}
                                    </td>
                                    <td className="p-2.5 text-center text-indigo-300 font-bold">
                                      {rule.regionOrDialect || "گشتی"}
                                    </td>
                                    <td className="p-2.5 text-center">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          const ruleToDelete = customAiRules[idx];
                                          setCustomAiRules(prev => {
                                            const filterd = prev.filter((_, i) => i !== idx);
                                            localStorage.setItem("peyvok_ai_custom_rules", JSON.stringify(filterd));
                                            return filterd;
                                          });

                                          // REST Delete sync to backend server
                                          fetch("/api/train", {
                                            method: "DELETE",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify({ originalWord: ruleToDelete.inputPhrase })
                                          })
                                          .then(res => {
                                            if (!res.ok) console.warn("Could not delete sync rule from server");
                                          })
                                          .catch(err => console.error("Deletion sync error:", err));

                                          setAdminFeedback("✓ ڕێسا ژ داتابەیسێ مێشکی هاتە لادان.");
                                          setTimeout(() => setAdminFeedback(""), 2200);
                                        }}
                                        className="text-rose-400 hover:text-rose-200 bg-rose-950/40 p-1 rounded cursor-pointer"
                                        title="Delete dynamic rule"
                                      >
                                        <Trash2 className="h-3 w-3" />
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                                {customAiRules.length === 0 && (
                                  <tr>
                                    <td colSpan={4} className="p-5 text-center text-slate-500 font-bold">
                                      ڕێسایا مۆدێلێ تەمامە و بەتاڵە! (No dynamic taught lessons)
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                ) : (
                  /* 2. PROFILE EDITING SCREEN (LOGGED IN) */
                  <div className="space-y-5">
                    {/* AVATAR / GENDER */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-black tracking-widest text-[#cfc7ff] uppercase block">
                        ڕەگەز (Gender Avatar Selection)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setUserProfileGender("boy");
                            if (typeof window !== "undefined" && loggedInUserCode) {
                              localStorage.setItem(`peyvok_gender_${loggedInUserCode}`, "boy");
                            }
                          }}
                          className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all cursor-pointer ${
                            userProfileGender === "boy"
                              ? "bg-gradient-to-r from-amber-500/20 to-[#120a2e] border-amber-400 text-white shadow"
                              : "bg-[#070317] border-[#221752] text-slate-400 hover:text-white hover:bg-slate-900"
                          }`}
                        >
                          <span className="text-xl">👦</span>
                          <span>کوڕ (Male)</span>
                          {userProfileGender === "boy" && <Check className="h-3.5 w-3.5 text-amber-400 stroke-[3]" />}
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setUserProfileGender("girl");
                            if (typeof window !== "undefined" && loggedInUserCode) {
                              localStorage.setItem(`peyvok_gender_${loggedInUserCode}`, "girl");
                            }
                          }}
                          className={`py-3.5 px-4 rounded-xl border flex items-center justify-center gap-2 font-bold text-xs transition-all cursor-pointer ${
                            userProfileGender === "girl"
                              ? "bg-gradient-to-r from-amber-500/20 to-[#120a2e] border-amber-400 text-white shadow"
                              : "bg-[#070317] border-[#221752] text-slate-400 hover:text-white hover:bg-[#12042e]"
                          }`}
                        >
                          <span className="text-xl">👧</span>
                          <span>کچ (Female)</span>
                          {userProfileGender === "girl" && <Check className="h-3.5 w-3.5 text-amber-400 stroke-[3]" />}
                        </button>
                      </div>
                    </div>

                    {/* NAME INPUT */}
                    <div className="space-y-2">
                      <label className="text-[11px] font-black tracking-widest text-[#cfc7ff] uppercase block">
                        ناڤێ تە یێ فەرمی (Your Display Name)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          maxLength={25}
                          value={userProfileName}
                          onChange={(e) => handleUpdateUserName(e.target.value || "مێهڤانێ هێژا")}
                          className="w-full bg-[#050212] border-2 border-indigo-950/80 rounded-xl p-3 text-sm text-white font-bold focus:outline-none focus:border-amber-500/50 text-right"
                          placeholder="ناڤێ خۆ بنڤیسە..."
                        />
                        <div className="absolute left-3 top-3.5 text-slate-400">
                          <User className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* TOKEN VAULT WITH INFORMATION ONLY - NO FREE REFILL */}
                    <div className="p-4 bg-emerald-950/10 border border-emerald-500/20 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 bottom-0 w-[4px] bg-emerald-500"></div>
                      
                      <div className="flex items-center justify-between font-bold">
                        <div>
                          <h4 className="text-xs text-emerald-400">خەزینا تۆکنێن پاراستی (Token Reserve)</h4>
                          <p className="text-[10px] text-slate-400 mt-1">ب هەر کارەکێ وەرگێڕانێ دێ تۆکن کێم بن</p>
                        </div>
                        
                        <div className="text-right">
                          <span className="text-lg text-emerald-400 font-mono tracking-wide">
                            {userProfileTokens.toLocaleString()} TKN
                          </span>
                        </div>
                      </div>

                      {/* Info refill with premium layout and direct guidance */}
                      <div className="mt-3.5 bg-[#050212] border border-amber-500/35 rounded-xl p-4 text-[11px] leading-relaxed font-semibold text-slate-300 space-y-3">
                        <div className="flex items-center gap-1.5 text-amber-400 font-extrabold pb-1.5 border-b border-indigo-950/60">
                          <Sparkles className="h-4 w-4 shrink-0 text-amber-400 animate-pulse" />
                          <span>خۆڕا نوو بكە (Refill Tokens for Free) 💸</span>
                        </div>
                        <p className="leading-relaxed text-slate-300">
                          تە دڤێت خەزینا خۆ یا تۆکنێن بەردەست ژبۆ وەرگێڕانێ گەورەتر لێ بکەی؟ دشێی ٣٠٠,٠٠٠ تۆکنان ب تەواوەی بەلاش ب دەستکەوی.
                        </p>
                        <div className="bg-[#0b0521] p-3 rounded-lg border border-[#231557]/60 space-y-1 text-right">
                          <span className="text-[10px] text-indigo-300 font-black">فەرموون ب رێکارەکا سادە:</span>
                          <p className="text-[9.5px] text-slate-400 leading-normal">
                            نامەکێ بۆ پەیجێ فەرمی یێ ئینستاگرامی بنێرە، تەنها ناڤ و رەگەزێ خۆ بنڤیسە (کچ یان کوڕ) داکو کۆدێ تە فرێکەین.
                          </p>
                        </div>
                        <a
                          href="https://www.instagram.com/kurdtech.it.01"
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:scale-[1.01] hover:from-amber-400 hover:to-orange-400 text-slate-950 transition-all font-black text-center block text-xs cursor-pointer shadow-md"
                        >
                          کۆدێ ٣٠٠,٠٠٠ تۆکنان ژ ئینستاگرامی وەرگرە 🔗
                        </a>
                      </div>
                    </div>

                    {/* ACTIONS AND ACCOUNT DELETION */}
                    <div className="bg-[#070317] border border-[#2a1b65]/55 p-4 rounded-2xl space-y-3">
                      <h4 className="text-xs font-black text-amber-300 flex items-center gap-2">
                        <Shield className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                        <span>کریار و ئەکشنز (Actions)</span>
                      </h4>

                      <button
                        type="button"
                        onClick={handleUserLogout}
                        className="w-full bg-rose-600/20 hover:bg-rose-600/45 border border-rose-500/40 text-rose-300 hover:text-white font-black text-xs py-2.5 rounded-xl transition-all cursor-pointer text-center block"
                      >
                        دەرکەفتن ژ ئەکاونتی (Log Out Profile) 🚪
                      </button>

                      <div className="pt-2 border-t border-indigo-950/50 text-center">
                        <button
                          type="button"
                          onClick={handleRequestAccountDeletion}
                          className="text-[10.5px] text-rose-400 hover:text-rose-300 hover:underline transition-all cursor-pointer font-bold"
                        >
                          ⚙️ داخوازیا ژێبرنا هژمارا خۆ بکە (Request Permanent Account Deletion)
                        </button>
                        {showDeletionRequestedMsg && (
                          <p className="text-[10px] text-amber-400 font-bold mt-1.5 animate-pulse">
                            ⏳ داخوازیا ژێبرنێ ب سەرکەفتن هاتە تۆمارکردن ل سەر داتابەیسێ سیستەمی...
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )
                )}
              </div>

              {/* Action Close */}
              <div className="mt-6 pt-4 border-t border-indigo-950/50 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsUserConsoleOpen(false);
                    setShowUserKeyRevealed(false);
                    setCopiedConsoleMessage(false);
                  }}
                  className="bg-amber-600 hover:bg-amber-500 hover:scale-[1.02] text-slate-900 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  تێگەهشتم و پاشەکەوت بوو (Done & Applied)
                </button>
              </div>

            </div>
          </div>
        )}

        {/* EXQUISITE MODERN ONBOARDING STEPPED SCREEN */}
        {isOnboardingOpen && (() => {
          // Define localization dictionary for pristine onboarding experience
          const ONBOARDING_LOCALES: Record<string, {
            header: string;
            subHeader: string;
            step2Title: string;
            step2Sub: string;
            optAGuestHeader: string;
            optAGuestDesc: string;
            optAGuestBtn: string;
            optBPremiumHeader: string;
            optBPremiumDesc: string;
            optBPremiumBtn: string;
            optBInputLabel: string;
            optBInputPlaceholder: string;
            optBSubmitBtn: string;
            backBtn: string;
            successMsg: string;
            successPremiumMsg: string;
            orLoginLabel: string;
            guestName: string;
          }> = {
            ku_badini: {
              header: "بۆ پلاتفۆڕمێ پەیڤۆك AI بەخێربێی!",
              subHeader: "باشترین سیستمێ زمانەوانی ژبۆ ڕونكرن، بەراوردكرن و وەرگێڕانا زمانێن جیهانی د گەل زارێ کوردی-بادینی ب شێوازی مۆدرن و کوالیتیەکا بەرز.",
              step2Title: "چەوا بەرەڤ جیهانا دیجیتاڵی یا سەردەم بچم؟",
              step2Sub: "هەلبژاردنەکێ پێشکەشبکە داکو خەزینەیا تۆکنێن تە دەستپێ بکەن بۆ کارێ وەرگێڕانێ",
              optAGuestHeader: "بەردەوام بە وەک مێهڤان",
              optAGuestDesc: "بکاربینە دگەل ٢٥,٠٠٠ تۆکنێن فڕی. تێبینی: دەمێ تو لاپەڕەی ریفرێش دکەی، تۆکنێن تە یێن نوو نابن یان دبیت ژ دەست بدەی.",
              optAGuestBtn: "چوونەژوور وەک مێهڤان 🚀",
              optBPremiumHeader: "وەرگرتنا ٣٠٠,٠٠٠ تۆکنان وەک دیاری 🎁",
              optBPremiumDesc: "ژبۆ وەرگرتنا کۆدێ بەلاش، نامەیەکێ بۆ لاپەڕێ فەرمی یێ ئینستاگرامی بفرێکه دگەل ناڤ و رەگەزێ خۆ.",
              optBPremiumBtn: "داخوازکرنا کۆدی ژ ئینستاگرامی 🔗",
              optBInputLabel: "کۆدێ هاتی ل خوارێ بنڤیسە:",
              optBInputPlaceholder: "کۆدێ بنڤیسە...",
              optBSubmitBtn: "ناردن",
              backBtn: "⬅️ گەڕانەوە بۆ زمانی",
              successMsg: "بخێرهاتی مێڤانێ هێژا! چوونەژوورێ ل پاش بن سێرڤەر...",
              successPremiumMsg: "بەخێربێی! ئەکاونتێ تە ب سەرکەفتوویی چالاک بوو دگەل ٣٠٠,٠٠٠ تۆکنان.",
              orLoginLabel: "یان بچۆ ژوور ئەگەر کۆدەکت پێشوەختە هەیە:",
              guestName: "مێهڤانێ هێژا"
            },
            ku_sorani: {
              header: "بەخێربێی بۆ پلاتفۆرما Peyvok AI!",
              subHeader: "باشترین سیستمی زمانەوانی بۆ ڕوونکردنەوە، بەراوردکردن و وەرگێڕانی زمانە جیهانییەکان لەگەڵ زاری کوردی بادینی بە شێوازێکی مۆدێرن و کوالیتی بەرز.",
              step2Title: "چۆن بەرەو جیهانی دیجیتاڵیی سەردەم بچم؟",
              step2Sub: "هەڵبژاردنێک بکە بۆ ئەوەی خەزینەی تۆکنەکانت دەست پێبکەن بۆ کاری وەرگێڕان.",
              optAGuestHeader: "بەردەوام بە وەک میوان",
              optAGuestDesc: "بەکاربهێنە لەگەڵ ٢٥,٠٠٠ تۆکنی خۆڕایی. تێبینی: بە ڕیفرێشکردنی لاپەڕە، تۆکنەکانت دووبارە دەبنەوە یان لەدەستیان دەدەیت.",
              optAGuestBtn: "چوونەژوور وەک میوان 🚀",
              optBPremiumHeader: "وەرگرتنی ٣٠٠,٠٠٠ تۆکن وەک دیاری 🎁",
              optBPremiumDesc: "بۆ وەرگرتنی کۆدی بەلاش، تەنها نامەیەک بنێرە بۆ لاپەڕەی فەرمی ئینستاگرام، ناو و ڕەگەزی خۆت دیاری بکە.",
              optBPremiumBtn: "داواکردنی کۆد لە ئینستاگرام 🔗",
              optBInputLabel: "کۆدی هاتووە بنووسە لە خوارەوە:",
              optBInputPlaceholder: "کۆدەکە بنووسە...",
              optBSubmitBtn: "ناردن",
              backBtn: "⬅️ گەڕانەوە بۆ زمانەکان",
              successMsg: "بەخێربێی میوانی بەڕێز! چوونەژوورەوە...",
              successPremiumMsg: "بەخێربێی! ئەکاونتەکەت بە سەرکەوتوویی چالاک بوو لەگەڵ ٣٠٠,٠٠٠ تۆکن.",
              orLoginLabel: "یان بچۆ ژوورەوە ئەگەر کۆدەکت پێشوەختە هەیە:",
              guestName: "میوانی بەڕێز"
            },
            en: {
              header: "Welcome to Peyvok AI Portal!",
              subHeader: "The ultimate linguistic platform to explain, compare, and translate world languages with Kurdish Badini in a modern, high-quality interface.",
              step2Title: "How to enter the modern digital world?",
              step2Sub: "Select one of the options below to initialize your translation token reserve.",
              optAGuestHeader: "Continue as Guest",
              optAGuestDesc: "Use instantly with 25,000 free tokens. Note: Refreshing the page will reset guest tokens or you may lose them.",
              optAGuestBtn: "Enter as Guest 🚀",
              optBPremiumHeader: "Get 300,000 free tokens 🎁",
              optBPremiumDesc: "To get the free code, simply send a message with your name and gender (girl/boy) to our official Instagram page.",
              optBPremiumBtn: "Request code from Instagram 🔗",
              optBInputLabel: "Write the code you received below:",
              optBInputPlaceholder: "Enter code...",
              optBSubmitBtn: "Submit",
              backBtn: "⬅️ Back to languages",
              successMsg: "Welcome, dear guest! Entering dashboard...",
              successPremiumMsg: "Welcome! Your account has been successfully activated with 300,000 premium tokens.",
              orLoginLabel: "Or login if you already have a code:",
              guestName: "Dear Guest"
            },
            ar: {
              header: "مرحبًا بك في بوابة Peyvok AI!",
              subHeader: "المنصة اللغوية المثالية لتوضيح ومقارنة وترجمة اللغات العالمية مع الكردية البادينية بواجهة عصرية وعالية الجودة.",
              step2Title: "كيف أنتقل إلى العالم الرقمي الحديث؟",
              step2Sub: "حدد خياراً من الخيارات أدناه لتبدأ برصيد التوكنز الخاص بك لعمليات الترجمة.",
              optAGuestHeader: "الاستمرار كضيف",
              optAGuestDesc: "استخدم الخدمة فوراً مع 25,000 توكن مجاني. تنبيه: عند إعادة تحديث الصفحة، سيتم إعادة تعيين رصيد الضيف أو قد تفقده.",
              optAGuestBtn: "الدخول كضيف 🚀",
              optBPremiumHeader: "احصل على 300,000 توكن كهدية 🎁",
              optBPremiumDesc: "للحصول على الرمز مجانًا، ما عليك سوى إرسال رسالة باسمك وجنسك (بنت/ولد) إلى صفحتنا الرسمية على إنستغرام.",
              optBPremiumBtn: "طلب الرمز عبر إنستغرام 🔗",
              optBInputLabel: "اكتب الرمز الذي حصلت عليه أدناه:",
              optBInputPlaceholder: "اكتب الرمز هنا...",
              optBSubmitBtn: "إرسال",
              backBtn: "⬅️ العودة إلى اللغات",
              successMsg: "أهلاً بك، أيها الضيف العزيز! جاري فتح لوحة التحكم...",
              successPremiumMsg: "أهلاً ومرحبًا بك! تم تفعيل حسابك بنجاح بنظام بريميوم مع 300,000 توكن.",
              orLoginLabel: "أو سجل دخولك إذا كان لديك رمز مسبقاً:",
              guestName: "ضيف عزيز"
            },
            tr: {
              header: "Peyvok AI Portalına Hoş Geldiniz!",
              subHeader: "Dünya dillerini Kürtçe Badini ile modern ve kaliteli bir arayüzde açıklamak, karşılaştırmak ve çevirmek için nihai dil platformu.",
              step2Title: "Modern dijital dünyaya nasıl adım atabilirim?",
              step2Sub: "Çeviri jeton havuzunuzu başlatmak için aşağıdaki seçeneklerden birini seçin.",
              optAGuestHeader: "Misafir Olarak Devam Et",
              optAGuestDesc: "Yenileme yapıldığında sıfırlanabilecek 25.000 ücretsiz jeton ile anında kullanın.",
              optAGuestBtn: "Misafir Olarak Giriş Yap 🚀",
              optBPremiumHeader: "300.000 Hediye Jeton Alın 🎁",
              optBPremiumDesc: "Ücretsiz kodu almak için resmi Instagram sayfamıza adınızı ve cinsiyetinizi (kız/erkek) belirten bir mesaj göndermeniz yeterlidir.",
              optBPremiumBtn: "Instagram'dan Kod İste 🔗",
              optBInputLabel: "Size gelen kodu aşağıya yazın:",
              optBInputPlaceholder: "Kodu girin...",
              optBSubmitBtn: "Gönder",
              backBtn: "⬅️ Dillere Geri Dön",
              successMsg: "Hoş geldiniz, sevgili misafir! Kontrol paneline yönlendiriliyorsunuz...",
              successPremiumMsg: "Hoş geldiniz! Premium hesabınız 300.000 jeton ile başarıyla etkinleştirildi.",
              orLoginLabel: "Veya zaten bir kodunuz varsa giriş yapın:",
              guestName: "Sevgili Misafir"
            },
            de: {
              header: "Willkommen im Peyvok AI Portal!",
              subHeader: "Die ultimative Plattform zur Erkennung, zum Vergleich und zur Übersetzung von Weltsprachen mit kurdischem Badini in einer modernen Benutzeroberfläche.",
              step2Title: "Wie trete ich in die moderne digitale Welt ein?",
              step2Sub: "Wählen Sie eine der Optionen aus, um Ihr Übersetzungs-Token-Glaubensguthaben zu initialisieren.",
              optAGuestHeader: "Als Gast fortfahren",
              optAGuestDesc: "Sofortige Nutzung mit 25.000 kostenlosen Token. Hinweis: Beim Aktualisieren der Seite wird das Gastguthaben zurückgesetzt.",
              optAGuestBtn: "Als Gast beitreten 🚀",
              optBPremiumHeader: "Erhalten Sie 300.000 Gratis-Token 🎁",
              optBPremiumDesc: "Senden Sie einfach eine Nachricht mit Ihrem Namen und Geschlecht (Mädchen/Junge) an unsere offizielle Instagram-Seite, um den Code kostenlos zu erhalten.",
              optBPremiumBtn: "Code auf Instagram anfordern 🔗",
              optBInputLabel: "Tragen Sie den erhaltenen Code unten ein:",
              optBInputPlaceholder: "Code eingeben...",
              optBSubmitBtn: "Absenden",
              backBtn: "⬅️ Zurück zur Sprachauswahl",
              successMsg: "Willkommen, lieber Gast! Weiterleitung zum Dashboard...",
              successPremiumMsg: "Willkommen! Ihr Premium-Konto wurde erfolgreich mit 300.000 Token aktiviert.",
              orLoginLabel: "Oder loggen Sie sich ein, wenn Sie bereits einen Code haben:",
              guestName: "Lieber Gast"
            },
            fr: {
              header: "Bienvenue sur le portail Peyvok AI !",
              subHeader: "Le centre linguistique ultime pour décrire, comparer et traduire des langues mondiales avec le kurde badini dans une interface moderne.",
              step2Title: "Comment entrer dans le monde numérique moderne ?",
              step2Sub: "Sélectionnez une option ci-dessous pour initialiser votre réserve de jetons.",
              optAGuestHeader: "Continuer en tant qu'invité",
              optAGuestDesc: "Entrez instantanément avec 25 000 jetons gratuits. Note : Réactualiser réinitialisera vos jetons d'invité.",
              optAGuestBtn: "Entrer en tant qu'invité 🚀",
              optBPremiumHeader: "Obtenez 300 000 jetons gratuits 🎁",
              optBPremiumDesc: "Envoyez un message sur notre page Instagram, mentionnez votre nom et genre (fille/garçon) pour recevoir votre code premium !",
              optBPremiumBtn: "Demander le code sur Instagram 🔗",
              optBInputLabel: "Saisissez votre code coupon ci-dessous :",
              optBInputPlaceholder: "Saisir le code...",
              optBSubmitBtn: "Envoyer",
              backBtn: "⬅️ Retour aux langues",
              successMsg: "Bienvenue, cher invité ! Redirection vers le tableau de bord...",
              successPremiumMsg: "Bienvenue ! Votre compte premium a été activé avec 300 000 jetons.",
              orLoginLabel: "Ou connectez-vous si vous avez déjà un code :",
              guestName: "Cher Invité"
            },
            ru: {
              header: "Добро пожаловать в языковой портал Peyvok AI!",
              subHeader: "Лучший лингвистический центр для описания, сравнения и перевода мировых языков с курдским бадини в современном интерфейсе.",
              step2Title: "Как войти в современный цифровой мир?",
              step2Sub: "Выберите один из вариантов, чтобы запустить свой баланс токенов перевода.",
              optAGuestHeader: "Продолжить как гость",
              optAGuestDesc: "Мгновенный вход в систему с лимитом 25 000 бесплатных токенов. Примечание: обновление страницы сбросит баланс гостя.",
              optAGuestBtn: "Войти как гость 🚀",
              optBPremiumHeader: "Получить 300 000 подарочных токенов 🎁",
              optBPremiumDesc: "Напишите на наш Instagram, просто отправьте ваше имя и пол (девочка или мальчик), чтобы мгновенно получить код!",
              optBPremiumBtn: "Запросить код в Instagram 🔗",
              optBInputLabel: "Введите промокод ниже:",
              optBInputPlaceholder: "Введите полученный код...",
              optBSubmitBtn: "Отправить",
              backBtn: "⬅️ Назад к выбору языка",
              successMsg: "Добро пожаловать, уважаемый Гость! Перенаправление в панель...",
              successPremiumMsg: "Добро пожаловать! Ваш премиум-аккаунт успешно активирован с 300 000 токенами.",
              orLoginLabel: "Или войдите, если у вас уже есть код:",
              guestName: "Уважаемый Гость"
            }
          };

          const currentLocale = ONBOARDING_LOCALES[siteLang] || ONBOARDING_LOCALES.ku_badini;

          return (
            <div className="fixed inset-0 z-[9999] bg-[#03010b]/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto w-full max-w-full">
              <div className="relative w-full max-w-3xl bg-[#0b0521] border border-indigo-500/30 rounded-[36px] p-6 sm:p-10 shadow-[0_15px_60px_rgba(99,102,241,0.2)] overflow-hidden max-h-[92vh] overflow-y-auto custom-scrollbar text-white flex flex-col justify-between" dir="rtl">
                {/* Top abstract neon line */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500"></div>
                
                {/* Glow spots */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Progress Indicator */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 pb-4 border-b border-indigo-950/50 w-full">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
                    <div className={`h-2 w-14 rounded-full transition-all duration-300 ${onboardingStep === 2 ? 'bg-gradient-to-r from-indigo-500 to-pink-500' : 'bg-indigo-950'}`}></div>
                  </div>
                  <span className="text-xs sm:text-sm font-black tracking-wider text-slate-100 font-mono uppercase bg-[#140b38] px-3.5 py-1.5 rounded-xl border border-indigo-500/20 shadow-inner block text-center">
                    Peyvok Welcoming Portal • Step {onboardingStep} of 2
                  </span>
                </div>

                {/* Step 1: LANGUAGE SELECTION */}
                {onboardingStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="text-center space-y-2">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 mb-2">
                        <Languages className="h-7 w-7 animate-pulse" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
                        بۆ پلاتفۆڕمێ پەیڤۆك AI بەخێربێی!
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        باشترین سیستمێ زمانەوانی ژبۆ ڕونكرن، بەراوردكرن و وەرگێڕانا زمانێن جیهانی د گەل زارێ کوردی-بادینی ب شێوازی مۆدرن و کوالیتیەکا بەرز.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-bold text-indigo-300 text-center uppercase tracking-wider">
                        تکایە زمانێ نیشاندانا سیستەمی دیاربکە (Preferred App Language)
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { code: "ku_badini" as const, name: "کوردی (بادینی)", flag: "☀️" },
                          { code: "ku_sorani" as const, name: "کوردی (سۆرانی)", flag: "☀️" },
                          { code: "en" as const, name: "English", flag: "🇬🇧" },
                          { code: "ar" as const, name: "العربية", flag: "🇸🇦" },
                          { code: "tr" as const, name: "Türkçe", flag: "🇹🇷" },
                          { code: "de" as const, name: "Deutsch", flag: "🇩🇪" },
                          { code: "fr" as const, name: "Français", flag: "🇫🇷" },
                          { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
                        ].map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setSiteLang(lang.code);
                              setOnboardingStep(2);
                            }}
                            className="p-3 sm:p-4 rounded-2xl bg-[#060312] border border-indigo-950 hover:border-cyan-400/80 hover:bg-gradient-to-b hover:from-cyan-950/10 hover:to-indigo-950/20 text-center transition-all cursor-pointer group active:scale-95 space-y-1"
                          >
                            <span className="text-xl sm:text-2xl block group-hover:scale-110 transition-transform">{lang.flag}</span>
                            <span className="text-xs font-black text-slate-200 group-hover:text-white block truncate">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: WELCOME AND TOKEN OPTIONS */}
                {onboardingStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    {onboardingSuccessMessage ? (
                      <div className="text-center py-8 space-y-4 animate-scaleUp">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 animate-bounce">
                          <Check className="h-8 w-8 stroke-[3]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-emerald-400">SUCCESS!</h3>
                        <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                          {onboardingSuccessMessage}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="text-center space-y-1.5">
                          <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                            {currentLocale.step2Title}
                          </h3>
                          <p className="text-xs text-slate-400">
                            {currentLocale.step2Sub}
                          </p>
                        </div>

                        {onboardingError && (
                          <div className="bg-rose-950/50 border border-rose-500/35 p-3.5 rounded-2xl text-xs text-rose-300 font-extrabold text-center leading-relaxed">
                            ⚠️ {onboardingError}
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                          {/* Option A: Guest 25,000 Token - Simplified with single-button enter */}
                          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#06041c] to-[#04020c] border border-indigo-950/80 hover:border-indigo-500/20 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                            {/* subtle radial backdrop flare */}
                            <div className="absolute -top-12 -left-12 w-28 h-28 bg-indigo-500/5 rounded-full blur-xl pointer-events-none"></div>

                            <div className="space-y-3">
                              <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest block bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-md w-fit font-mono">
                                Guest Session
                              </span>
                              <h4 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                                {currentLocale.optAGuestHeader}
                              </h4>
                              <div className="flex items-center gap-1.5 text-cyan-300 font-mono font-bold text-sm bg-cyan-950/30 px-3 py-1.5 rounded-xl w-fit border border-cyan-500/10">
                                <Coins className="h-4 w-4 text-cyan-400" />
                                <span>25,000 💎</span>
                              </div>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                {currentLocale.optAGuestDesc}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-indigo-950/60 mt-auto">
                              <button
                                type="button"
                                onClick={() => {
                                  const finalizedName = currentLocale.guestName;
                                  if (typeof window !== "undefined") {
                                    localStorage.setItem("peyvok_username", finalizedName);
                                    localStorage.setItem("peyvok_gender", "boy");
                                    localStorage.setItem("peyvok_onboarded", "true");
                                    // initialize guest tokens only if not ever stored
                                    const savedGuestTk = localStorage.getItem("peyvok_guest_tokens");
                                    if (!savedGuestTk) {
                                      localStorage.setItem("peyvok_guest_tokens", "25000");
                                      setUserProfileTokens(25000);
                                    } else {
                                      setUserProfileTokens(parseInt(savedGuestTk, 10));
                                    }
                                  }
                                  setUserProfileName(finalizedName);
                                  setUserProfileGender("boy");
                                  setOnboardingSuccessMessage(currentLocale.successMsg);
                                  setTimeout(() => {
                                    setIsOnboardingOpen(false);
                                  }, 1800);
                                }}
                                className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 hover:scale-[1.02] text-white font-black text-xs sm:text-sm transition-all cursor-pointer shadow-[0_4px_15px_rgba(79,70,229,0.3)] active:scale-95 flex items-center justify-center gap-1.5"
                              >
                                <span>{currentLocale.optAGuestBtn}</span>
                              </button>
                            </div>
                          </div>

                          {/* Option B: Free 300,000 Token - ULTRA-PREMIUM Instagram Code request */}
                          <div className="p-6 rounded-3xl bg-[#04020d] border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
                            {/* golden highlight corner effect */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none"></div>

                            <div className="space-y-3">
                              <span className="text-[10px] text-amber-400 font-black uppercase tracking-widest block bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md w-fit font-mono">
                                Free Coupon
                              </span>
                              <h4 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                                {currentLocale.optBPremiumHeader}
                              </h4>
                              <div className="flex items-center gap-1.5 text-amber-300 font-mono font-bold text-sm bg-amber-950/50 px-3 py-1.5 rounded-xl w-fit border border-amber-500/20 animate-pulse">
                                <Sparkles className="h-4 w-4 text-[#fbbf24]" />
                                <span>300,000 💎</span>
                              </div>
                              <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                                {currentLocale.optBPremiumDesc}
                              </p>
                            </div>

                            <div className="space-y-4 pt-3 border-t border-indigo-950/60 flex-grow flex flex-col justify-end">
                              <a
                                href="https://www.instagram.com/kurdtech.it.01"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 hover:scale-[1.02] active:scale-95 text-slate-950 transition-all font-black text-center text-xs cursor-pointer shadow-[0_4px_15px_rgba(245,158,11,0.25)] flex items-center justify-center gap-1.5"
                              >
                                <span>{currentLocale.optBPremiumBtn}</span>
                              </a>

                              <div className="space-y-2">
                                <label className="text-[10px] text-slate-300 font-bold block">
                                  {currentLocale.optBInputLabel}
                                </label>
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    placeholder={currentLocale.optBInputPlaceholder}
                                    value={onboardingCode}
                                    onChange={(e) => setOnboardingCode(e.target.value)}
                                    className="flex-grow bg-[#08041d] border border-indigo-950 focus:border-amber-500/50 rounded-xl p-2.5 text-xs text-white text-center font-mono focus:outline-none"
                                  />
                                  <button
                                    type="button"
                                    disabled={onboardingLoading || !onboardingCode.trim()}
                                    onClick={async () => {
                                      setOnboardingError("");
                                      setOnboardingLoading(true);
                                      try {
                                        const resp = await fetch("/api/login", {
                                          method: "POST",
                                          headers: { "Content-Type": "application/json" },
                                          body: JSON.stringify({ code: onboardingCode.trim() }),
                                        });
                                        if (resp.ok) {
                                          const data = await resp.json();
                                          setIsUserLoggedIn(true);
                                          setLoggedInUserCode(data.code);
                                          
                                          const savedName = localStorage.getItem(`peyvok_name_${data.code}`) || data.name;
                                          const savedGender = (localStorage.getItem(`peyvok_gender_${data.code}`) || data.gender) as "boy" | "girl";
                                          const savedTokens = localStorage.getItem(`peyvok_tokens_${data.code}`) 
                                            ? parseInt(localStorage.getItem(`peyvok_tokens_${data.code}`)!, 10) 
                                            : data.tokens;

                                          setUserProfileName(savedName);
                                          setUserProfileGender(savedGender);
                                          setUserProfileTokens(savedTokens);

                                          localStorage.setItem("peyvok_logged_in", "true");
                                          localStorage.setItem("peyvok_active_code", data.code);
                                          localStorage.setItem("peyvok_onboarded", "true");

                                          setOnboardingSuccessMessage(currentLocale.successPremiumMsg);
                                          setTimeout(() => {
                                            setIsOnboardingOpen(false);
                                          }, 2500);
                                        } else {
                                          const errData = await resp.json();
                                          setOnboardingError(errData.error || "کۆدێ چوونەژوورێ خەلەتە! دووبارە بپشکنە.");
                                        }
                                      } catch (e) {
                                        setOnboardingError("نەبوونا پەیوەندیێ دگەل سێرڤەری مۆدێل.");
                                      } finally {
                                        setOnboardingLoading(false);
                                      }
                                    }}
                                    className="px-3 sm:px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors cursor-pointer disabled:opacity-40"
                                  >
                                    {onboardingLoading ? "..." : currentLocale.optBSubmitBtn}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-indigo-950/50">
                          <button
                            type="button"
                            onClick={() => setOnboardingStep(1)}
                            className="text-[11px] text-slate-400 hover:text-white font-extrabold flex items-center gap-1.5"
                          >
                            <span>{currentLocale.backBtn}</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}

              </div>
            </div>
          );
        })()}

    </div>
  );
}


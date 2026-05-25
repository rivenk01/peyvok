export interface ProfileTranslation {
  navTranslator: string;
  navAboutMe: string;
  navPrivacy: string;
  headerTitle: string;
  headerSubtitle: string;
  badgeKurdishPremium: string;
  aboutMeTitle: string;
  aboutMeSubtitle: string;
  biographyTitle: string;
  bioTextHtml: string;
  skillsTitle: string;
  educationTitle: string;
  diplomaTitle: string;
  diplomaDesc: string;
  mentorTitle: string;
  mentorDesc: string;
  traineeTitle: string;
  traineeDesc: string;
  workerTitle: string;
  workerDesc: string;
  privacyTitle: string;
  privacySubtitle: string;
  privacyHeaderDesc: string;
  privacyItems: {
    title: string;
    desc: string;
    badge: string;
  }[];
  websiteButton: string;
  emailButton: string;
  callButton: string;
  locationLabel: string;
  roleTags: {
    designer: string;
    programmer: string;
    creator: string;
    techtur: string;
    helper: string;
  };
}

export const PROFILE_TRANSLATIONS: Record<string, ProfileTranslation> = {
  ku_badini: {
    navTranslator: "وەرگێڕان",
    navAboutMe: "پێناسە",
    navPrivacy: "تایبەتمەندی",
    headerTitle: "وەرگێرە زیرەك - پەیڤۆك",
    headerSubtitle: "باشترین سیستەمێ زمانەوانی ژبۆ ڕونکردن و هەمبەرکرنا زمانێن جیهانی د گەل زارێ کوردی-بادینی",
    badgeKurdishPremium: "دیزاینێ دیجیتالی یێ جیهانی ☀️ Kurdistan",
    aboutMeTitle: "پرۆفایلێ من یێ پیشەیی",
    aboutMeSubtitle: "رێبەر و پێشخەرێ بوارێ IT • دهۆک، سێمێل / شەریا",
    biographyTitle: "داستانا سەرکەفتنێ و داهێنانێ",
    bioTextHtml: `<p class="text-lg text-slate-100 font-extrabold leading-snug">
      ئەز <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-black text-2xl">رێفینگ غزوان</span>، دەرچوویێ <span class="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent font-black text-2xl animate-pulse">ئێکێ</span> یێ لسەر ئاستێ <span class="text-white font-black">زانکۆیا پۆلیتەکنیکی یا دهۆکێ</span> – <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-black">پەیمانگەها تەکنیکی یا زاخۆ</span> – بەشێ تەکنۆلۆژیایا پێزانینان (<span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-extrabold font-mono">IT</span>) بۆ سالا خویندنێ ٢٠٢٤-٢٠٢٥.
    </p>
    <p class="text-slate-300 font-semibold text-sm leading-relaxed">
      گەشەپێدەرەکێ تەکنۆلۆژی یێ خودان ئومێد و پالپشتەکێ سەرەکی بۆ قوتابیان دا کو بگەهنە خەونێن خۆ یێن داهێنەرانە.
    </p>
    <div class="relative bg-gradient-to-l from-[#19023c] to-[#040114]/40 border border-[#3b1c6e]/40 p-5 rounded-r-none rounded-l-2xl shadow-xl overflow-hidden group">
      <div class="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-amber-400 via-[#ffd700] to-orange-500 rounded-lg animate-pulse"></div>
      <div class="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
      <p class="text-slate-100 font-bold italic leading-relaxed text-[13px] relative z-10 pl-2">
        "کارێ من نەک بتنێ کۆدکرنە؛ ئەز بزاڤێ دکەم هەموو ئاستەنگێن تەکنیکی بکەمە دەرگەهەک بۆ سەرکەفتنا تە و جڤاکێ خۆ. ئەز باوەرم کو داهێنان بتنێ کلیلە بۆ نەخشەکێشانا پاشەڕۆژێ؛ چونکی هەر قوتابیەک هەژی سەرکەفتنێ یە ب زمانێ خۆ!"
      </p>
      <div class="absolute bottom-2 left-3 text-amber-400/10 text-4xl select-none font-serif">”</div>
    </div>`,
    skillsTitle: "شیکاریا شارەزاییێن تەکنیکی و تەکنۆلۆژیا",
    educationTitle: "کارنامەیا خویندنێ و ئەزموونێن فەرمی",
    diplomaTitle: "دیپلۆم د تەکنۆلۆژیایا پێزانینان (IT) – یەکەمێ بەشێ خۆ (Rank #1)",
    diplomaDesc: "پەیمانگەها تەکنیکی یا زاخۆ · دەرچووی ب پلەیا نایاب و نمرەیا نایاب یا نیشتمانی. پسپۆر د جێبەجێکرنا کۆد و داتابەیسان.",
    mentorTitle: "رێبەرێ قوتابیان و گەشەپێدەرێ IT (Student Mentor)",
    mentorDesc: "ڕێبەریکرن و هەمبەرکرنا پرۆژەیێن دەرچوونێ یێن قوتابیان د بوارێ پرۆگرامینگ و داتابەیسێ دا ژبۆ ئامادەکرنا وان بۆ بوارێ کارکرنێ.",
    traineeTitle: "راهێنەری د بوارێ پشتەڤانیا تەکنیکی دا (Technical Support)",
    traineeDesc: "کارکرن د ژینگەها نەخۆشخانێ دا بۆ پاراستنا تورێن کۆمپیوتەری و دابینکرنا خزمەتگوزاریێن پاراستنا سیستەمان.",
    workerTitle: "رێڤەبەر و کارمەندێ چاپخانەیێ (Printing House)",
    workerDesc: "بۆ ماوێ ٣ هەیڤان مژولی دیزاین و رێکخستنا کاروبارێن نڤیسار و رێکخستنا دۆکیۆمێنتێن کوالێتی بەرز ل دهۆکێ.",
    privacyTitle: "سیاسەتا پاراستنا پێزانینان",
    privacySubtitle: "پێوەرێن توند و پاراستنا نهێنیا تە",
    privacyHeaderDesc: "ئەم ل Peyvok د دڵنیاین کو پێزانینێن تە یێن پاراستی نە و چ جۆڕە داتا بۆ لایەنێ دەرڤە ناهێنە هنارتن.",
    privacyItems: [
      {
        title: "١. پاککرنا دەقێ کاری (Zero-Data Trace)",
        desc: "هەر دەقەک یان وەرگێرانەک ل سەر دەمێ کارکرنێ بتنێ هەمبەر دبیت و پاشتر ژ سیستەمی دهێتە سڕین بێ کو چ دەستکاریا داتایێ بهێتە کرن.",
        badge: "دڵنیایی"
      },
      {
        title: "٢. عەمبارکرنا خوەماڵیی (Local Device Storage)",
        desc: "هەموو مێژوو و ئەنجامێن وەرگێڕانێن تە د ناڤ ئامێرێ تە یێ تایبەت دا دهێنە پاراستن د ڕێکا localStorage دا.",
        badge: "ناڤخۆیی"
      },
      {
        title: "٣. گەرەنتیا گشتگیر (Academic Shield)",
        desc: "سیستەم چ جۆرە سەکردەیێن گەشتی کۆم ناکەت، دەنگ یان وەرگێڕان بتنێ بۆ مەبەستا زمانەوانی و ب فەرمی دهێنە بکارئینان.",
        badge: "ئەکادیمی"
      },
      {
        title: "٤. سکیوریتی تەکنیکی (Direct Secure Proxies)",
        desc: "پێزانین دگەل مۆدێلا زمانەوانی یا Gemini دهێنە گۆهرین ب ڕێکا پرۆکسیەکێ پاراستی ژبۆ رێگری ل ئاشکرابوونا ناسنامەیێ.",
        badge: "تەکنیکی"
      }
    ],
    websiteButton: "سەردانا مالپەرێ من بکە (revingkrd.com)",
    emailButton: "نامەیەکێ بنێرە",
    callButton: "پەیوەندیێ بکە",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 دیزاینەر",
      programmer: "💻 پرۆگرامەر",
      creator: "🎬 داهێنەر",
      techtur: "🔧 تەکنیشیەن",
      helper: "🤝 پشتەڤان"
    }
  },
  ku_sorani: {
    navTranslator: "وەرگێڕان",
    navAboutMe: "پێناسە",
    navPrivacy: "تایبەتمەندی",
    headerTitle: "وەرگێڕی زیرەک - پەیڤۆک",
    headerSubtitle: "باشترین سیستەمی زمانی بۆ ڕوونکردنەوە و بەراوردکردنی زمانی جیھانی لەگەڵ زاراوەی کوردی-بادینی",
    badgeKurdishPremium: "دیزاینی دیجیتاڵی جیھانی ☀️ کوردستان",
    aboutMeTitle: "پرۆفایلی من ی پیشەیی",
    aboutMeSubtitle: "ڕێبەر و نوێخواز لە بواری IT • دهۆک, سێمێل / شەریا",
    biographyTitle: "چیرۆکی سەرکەوتن و داهێنان",
    bioTextHtml: `<p class="text-lg text-slate-100 font-extrabold leading-snug">
      من <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-black text-2xl">رێفینگ غزوان</span>، دەرچووی <span class="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent font-black text-2xl animate-pulse">یەکەک</span>ی سەر ئاستی <span class="text-white font-black">زانکۆی پۆلیتەکنیکی دهۆک</span> – <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-black">پەیمانگای تەکنیکی زاخۆ</span> – بەشی تەکنۆلۆژیای زانیاری (<span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-extrabold font-mono">IT</span>) بۆ ساڵی خوێندنی ٢٠٢٤-٢٠٢٥.
    </p>
    <p class="text-slate-300 font-semibold text-sm leading-relaxed">
      پەرەپێدەرێکی تەکنۆلۆژی خاوەن ئاوات و پاڵپشتێکی سەرەکی بۆ قوتابیان تا بگەهنە خەونە داهێنەرەکانیان.
    </p>
    <div class="relative bg-gradient-to-l from-[#19023c] to-[#040114]/40 border border-[#3b1c6e]/40 p-5 rounded-r-none rounded-l-2xl shadow-xl overflow-hidden group">
      <div class="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-amber-400 via-[#ffd700] to-orange-500 rounded-lg animate-pulse"></div>
      <div class="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
      <p class="text-slate-100 font-bold italic leading-relaxed text-[13px] relative z-10 pl-2">
        "کارەکەم تەنها کۆدنووسین نییە؛ هەوڵ دەدەم هەموو ئاستەنگە تەکنیکییەکان بکەمە دەروازەیەک بۆ سەرکەوتنی تۆ و کۆمەڵگەکەم. پێموایە داهێنان تەنها کلیلە بۆ نەخشەکێشانی پاشەڕۆژ； چونکە هەر قوتابییەک شایستەی گەیشتنە بە لوتکەی سەرکەوتن بە زمانی خۆی!"
      </p>
      <div class="absolute bottom-2 left-3 text-amber-400/10 text-4xl select-none font-serif">”</div>
    </div>`,
    skillsTitle: "شیکردنەوەی لێهاتوویە تەکنیکییەکان و تەکنۆلۆژیا",
    educationTitle: "مێژووی خوێندن و ئەزموونی پیشەیی",
    diplomaTitle: "دیپلۆم لە تەکنۆلۆژیای زانیاری (IT) – یەکەمی بەش (Rank #1)",
    diplomaDesc: "پەیمانگای تەکنیکی زاخۆ · دەرچووی نایاب بە پلەی باڵای نیشتمانی. پسپۆر لە جێبەجێکردنی کۆد و نەرمەکاڵا.",
    mentorTitle: "ڕێبەری قوتابیان و پەرەپێدەری IT",
    mentorDesc: "ڕێبەریکردنی پڕۆژەکانی دەرچوونی قوتابیان لە بواری پرۆگرامینگ و داتابەیس تا خۆیان بۆ بازاڕی کار ئامادە بکەن.",
    traineeTitle: "ڕاهێنراوی پشتگیری تەکنیکی (Hospital IT)",
    traineeDesc: "کارکردن لە ژینگەی نەخۆشخانە بۆ پاراستنی تۆڕەکانی کۆمپیوتەر و چارەسەرکردنی کێشە تەکنیکییەکان.",
    workerTitle: "کارمەندی نووسینگەی چاپ و دیزاین",
    workerDesc: "بۆ ماوەی ٣ مانگ لە چاپخانەیەکی دهۆک کارم کردووە لەسەر گرافیگ دیزاین و رێکخستنی راپۆرتەکان.",
    privacyTitle: "سیاسەتی پاراستنی زانیارییەکان",
    privacySubtitle: "پێوەرەکانی پاراستن و نهێنی زانیاری",
    privacyHeaderDesc: "ئێمە پابەندین بە پاراستنی تەواوی نهێنییەکانت بەبێ کۆکردنەوەی هیچ جۆرە داتایەکی کەسی.",
    privacyItems: [
      {
        title: "١. نەهێشتنی شوێنەواری داتا (Zero-Data Capture)",
        desc: "تەواوی نووسینەکان تەنها بۆ پڕۆسەی وەرگێڕانەکە بەکاردێن و هیچ مێژوویەک لە دەرەوەی ئامێرەکەت پاشەکەوت ناکرێت.",
        badge: "پارێزراو"
      },
      {
        title: "٢. پاشەکەوتی ناوخۆیی (Local Cache Store)",
        desc: "زانیارییەکان لە ناو localStorage ی مۆبایل یان کۆمپیوتەرەکەت تۆمار دەبن و دەتوانیت لە خوارەوە پاکی بکەیتەوە.",
        badge: "ناوخۆیی"
      },
      {
        title: "٣. پیشەیی بوون (Academic Integrity)",
        desc: "ئەم پڕۆژەیە لە پێناو بڵاوکردنەوەی زانیاری زمانەوانی و بە شێوەیەکی خۆڕایی بۆ خزمەتی قوتابیان گەشەی پێدراوە.",
        badge: "ئەکادیمی"
      },
      {
        title: "٤. سکیوریتی پێشکەوتوو (Secure API Proxies)",
        desc: "سەرجەم پەیوەندییەکان بە ڕێگەیەki کۆدکراوی پارێزراودا دەڕۆن بۆ مۆدێلی جیھانی Gemini 3.5.",
        badge: "ئاسایش"
      }
    ],
    websiteButton: "سەردانی ماڵپەڕەکەم بکە (revingkrd.com)",
    emailButton: "ئیمەیڵ بنێرە",
    callButton: "پەیوەندی بکە",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 دیزاینەر",
      programmer: "💻 پرۆگرامەر",
      creator: "🎬 داهێنەر",
      techtur: "🔧 پەرەپێدەر",
      helper: "🤝 هاوکار"
    }
  },
  en: {
    navTranslator: "Translator",
    navAboutMe: "About Me",
    navPrivacy: "Privacy Policy",
    headerTitle: "Smart Translator - Peyvok",
    headerSubtitle: "The supreme linguistic engine translating global languages with Bahdini Kurdish dialect",
    badgeKurdishPremium: "Global Digital Design ☀️ Kurdistan",
    aboutMeTitle: "My Professional Hub",
    aboutMeSubtitle: "IT Developer & Student Mentor • Duhok, semel/ Shariya",
    biographyTitle: "Aspiration, Mission & Success Story",
    bioTextHtml: `<p class="text-lg text-white font-black leading-snug">
      I am <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-2xl">Reving Ghazwan</span>, the Top Graduate of <span class="text-amber-400 font-black">Duhok Polytechnic University</span> – Zakho Technical Institute – Department of IT, Class of 2024–2025.
    </p>
    <p class="text-slate-350 font-semibold text-sm">
      An ambitious tech developer and a primary supporter for students to achieve their creative dreams.
    </p>
    <p class="border-l-4 border-cyan-400 pl-4 text-indigo-200 font-extrabold italic bg-[#150e35] py-3.5 px-4 rounded-r-2xl shadow-inner leading-relaxed text-sm">
      "My work is not just about coding; I strive to turn all technical obstacles into gateways to success for you and my community. I believe that innovation is the only key to shaping the future; because every student deserves to reach the pinnacle of success in their own language!"
    </p>`,
    skillsTitle: "Technical Skills & Technologies Breakdown",
    educationTitle: "Education & Professional Milestones",
    diplomaTitle: "Diploma in Information Technology (IT) – Ranked #1 Student",
    diplomaDesc: "Zakho Technical Institute · Graduated with Highest Distinction. Evaluated as the top academic performer with specialized focus in structural coding.",
    mentorTitle: "Student Mentor & Software Developer",
    mentorDesc: "Actively guiding and consulting senior IT students in building and refining graduation projects, databases, and modern systems.",
    traineeTitle: "Hospital Tech Support Trainee",
    traineeDesc: "Maintained critical hospital local environments, configured networks, resolved systemic hardware bugs, and administered databases.",
    workerTitle: "Printing House Graphic Designer & Administrator",
    workerDesc: "Crafted complex layouts, directed creative printing deliverables, managed digital assets, and reported local audits for 3 months.",
    privacyTitle: "Data Privacy Standards",
    privacySubtitle: "Strict Data Governance & Privacy Regulations",
    privacyHeaderDesc: "We implement advanced encryption protocols to protect your linguistic inputs. Your data never leaves your personal custody.",
    privacyItems: [
      {
        title: "1. Zero-Data Capture Policies",
        desc: "All submitted text for translation is compiled strictly on-the-fly and fully disposed of immediately after execution.",
        badge: "Secure"
      },
      {
        title: "2. Autonomous Local Storage",
        desc: "Settings, cache, and results are persisted strictly inside your local browser storage (localStorage) for lightning-fast performance.",
        badge: "Local"
      },
      {
        title: "3. Academic Integrity Principles",
        desc: "This AI-powered dictionary is dedicated to public linguistic preservation, curated by top scholar Reving Ghazwan as a student resource.",
        badge: "Academic"
      },
      {
        title: "4. Direct Encrypted Request Proxies",
        desc: "API communications are routed securely via server-side endpoints to protect your IP address from third-party networks.",
        badge: "Advanced"
      }
    ],
    websiteButton: "Visit My Website (revingkrd.com)",
    emailButton: "Send Email",
    callButton: "Make a Call",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 Designer",
      programmer: "💻 Programmer",
      creator: "🎬 Creator",
      techtur: "🔧 TechTur",
      helper: "🤝 Helper"
    }
  },
  ar: {
    navTranslator: "المترجم الذكي",
    navAboutMe: "تعريف ريفينك",
    navPrivacy: "الخصوصية",
    headerTitle: "المترجم الذكي - پەیڤۆك",
    headerSubtitle: "النظام اللغوي الأمثل لشرح ومقارنة اللغات العالمية مع اللهجة الكردية البادينية",
    badgeKurdishPremium: "تصميم رقمي عالمي ☀️ كردستان",
    aboutMeTitle: "ملفي المهني والتقني",
    aboutMeSubtitle: "مطور برمجيات ومرشد أكاديمي • دهوك، سميل / شاريا",
    biographyTitle: "قصة النجاح والرسالة والمسار الأكاديمي",
    bioTextHtml: `<p class="text-lg text-slate-100 font-extrabold leading-snug">
      أنا <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-black text-2xl">ريفينك غزوان</span>, الخريج <span class="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent font-black text-2xl animate-pulse">الأول</span> على مستوى <span class="text-white font-black">جامعة دهوك التقنية</span> – <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-black">المعهد التقني زاخو</span> – قسم تكنولوجيا المعلومات (<span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-extrabold font-mono">IT</span>) للعام الدراسي ٢٠٢٤-٢٠٢٥.
    </p>
    <p class="text-slate-300 font-semibold text-sm leading-relaxed">
      مطور تكنولوجي طموح والداعم الأكاديمي والتقني الأول للطلاب في تحويل أحلامهم وابتكاراتهم إلى واقع ملموس.
    </p>
    <div class="relative bg-gradient-to-l from-[#19023c] to-[#040114]/40 border border-[#3b1c6e]/40 p-5 rounded-r-none rounded-l-2xl shadow-xl overflow-hidden group font-sans">
      <div class="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-amber-400 via-[#ffd700] to-orange-500 rounded-lg animate-pulse"></div>
      <div class="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
      <p class="text-slate-100 font-bold italic leading-relaxed text-[13px] relative z-10 pl-2">
        "عملي لا يقتصر فقط على البرمجة، بل أسعى لمساعدة مجتمعي وتذليل كل العقبات التقنية للطلاب. أعتقد تماماً أن الابتكار هو المفتاح الوحيد لصياغة المستقبل، ومساعدة كل طالب للوصول إلى القمة بلغته الخاصة!"
      </p>
      <div class="absolute bottom-2 left-3 text-amber-400/10 text-4xl select-none font-serif">”</div>
    </div>`,
    skillsTitle: "خارطة المهارات والأدوات والتقنيات التقنية",
    educationTitle: "المسيرة الأكاديمية والخبرة العملية",
    diplomaTitle: "دبلوم في تكنولوجيا المعلومات (IT) - المرتبة الأولى (الخريج الأول)",
    diplomaDesc: "المعهد التقني زاخو · تخرج بامتياز مع مرتبة الشرف الأولى. تخصص متقدم في هندسة الكود وقواعد البيانات البنائية.",
    mentorTitle: "مرشد الطلاب ومطور البرمجيات المستقل",
    mentorDesc: "توجيه وتدريب الطلاب على تطوير مشاريع التخرج البرمجية، وتحليل أفكارهم الريادية لدخول سوق العمل بنجاح.",
    traineeTitle: "متدرب في الدعم الفني وتكنولوجيا المستشفيات",
    traineeDesc: "إدارة وصيانة شبكات الحاسوب، وتكوين الخوادم وتأمين الأنظمة التقنية في بيئة الرعاية الصحية.",
    workerTitle: "مصمم جرافيك وإداري في دار ومطبعة نشر",
    workerDesc: "عمل لمدة ٣ أشهر في مطبعة بالدهوك لتوفير تصاميم النشر والطباعة الرقمية وإعداد التقارير الإدارية المتقدمة.",
    privacyTitle: "معايير خصوصية البيانات للزوار",
    privacySubtitle: "تأمين وحماية البيانات بخصوصية كاملة",
    privacyHeaderDesc: "نحن ملتزمون بحماية خصوصيتك ولغة مدخلاتك. لا نجمع أو نشارك أي بيانات للمستخدمين.",
    privacyItems: [
      {
        title: "١. عدم تتبع المدخلات نهائياً (Zero-Data Capture)",
        desc: "تتم معالجة جميع النصوص بداخل التطبيق مؤقتاً للتأكد من الترجمة، وتُحذف مباشرةً من الذاكرة فوراً.",
        badge: "آمن"
      },
      {
        title: "٢. تخزين محلي كامل (Local Offline Storage)",
        desc: "تُحفظ سجلات بحثك وإعدادات لغتك محلياً على جهازك الخاص دون الوصول لها من أي خوادم خارجية.",
        badge: "محلي"
      },
      {
        title: "٣. خيار تعليمي أكاديمي شفاف (Academic Ethics)",
        desc: "تم تصميم وتطوير هذه المنصة الذكية كأداة أكاديمية خيرية تخدم الطلبة للحفاظ على اللغة الكردية البادينية.",
        badge: "أخلاقي"
      },
      {
        title: "٤. حماية مباشرة مشفرة للطلبات (IP Shield)",
        desc: "يتم توجيه اتصالات النماذج ببروتوكولات مشفرة لضمان سرية طلبك وحماية هويتك على شبكة الإنترنت.",
        badge: "متقدم"
      }
    ],
    websiteButton: "زيارة موقعي الرسمي (revingkrd.com)",
    emailButton: "ارسل بريد الكتروني",
    callButton: "اتصل بي الآن",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 مصمم",
      programmer: "💻 مبرمج",
      creator: "🎬 صانع محتوى",
      techtur: "🔧 فني تقني",
      helper: "🤝 مساعد"
    }
  },
  de: {
    navTranslator: "Übersetzer",
    navAboutMe: "Über Mich",
    navPrivacy: "Datenschutz",
    headerTitle: "Intelligenter Übersetzer - Peyvok",
    headerSubtitle: "Das überlegene linguistische System zur Übersetzung globaler Sprachen in den kurdischen Bahdini-Dialekt",
    badgeKurdishPremium: "Globales Digitaldesign ☀️ Kurdistan",
    aboutMeTitle: "Mein Professionelles Hub",
    aboutMeSubtitle: "IT-Entwickler & Akademischer Mentor • Duhok, semel/ Shariya",
    biographyTitle: "Erfolgsgeschichte, Vision & Leitbild",
    bioTextHtml: `<p class="text-lg text-white font-black leading-snug">
      Ich bin <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-2xl">Reving Ghazwan</span>, Spitzenabsolvent der <span class="text-amber-400 font-black">Duhok Polytechnic University</span> – Zakho Technical Institute – Abteilung für Informationstechnologie (IT), Jahrgang 2024–2025.
    </p>
    <p class="text-slate-300 font-semibold text-sm">
      Ein visionärer Software-Spezialist und Hauptunterstützer von Studenten, um ihre innovativen Träume in die Realität umzusetzen.
    </p>
    <p class="border-l-4 border-cyan-400 pl-4 text-indigo-200 font-extrabold italic bg-[#150e35] py-3.5 px-4 rounded-r-2xl shadow-inner leading-relaxed text-sm">
      "Bei meiner Arbeit geht es nicht nur um Programmierung; mein Ziel ist es, technische Komplexität in sichere Pfade für die Zukunft zu verwandeln. Jeder Student verdient den absoluten Erfolg!"
    </p>`,
    skillsTitle: "Technische Fähigkeiten & Werkzeuge im Überblick",
    educationTitle: "Bildungsweg & Berufliche Stationen",
    diplomaTitle: "Diplom in Informationstechnologie (IT) – Jahrgangsbester (Rank #1)",
    diplomaDesc: "Zakho Technical Institute · Absolviert mit Auszeichnung. Tiefgehende Spezialisierung in Systementwicklung und Datenverwaltung.",
    mentorTitle: "Studentischer Begleiter & IT-Entwickler",
    mentorDesc: "Beratung von Studenten bei der Entwicklung, Umsetzung und Validierung von Abschlussprojekten und Softwarelösungen.",
    traineeTitle: "Praktikant im Bereich Technischer Support",
    traineeDesc: "Administration und Instandhaltung von Krankenhausnetzwerken und Unterstützung der IT-Infrastruktur im klinischen Umfeld.",
    workerTitle: "Mitarbeiter in Grafikdesign & Druckereiabteilung",
    workerDesc: "Erstellung von Drucklayouts, Steuerung der Medienproduktion und administrative Abwicklung im Team für 3 Monate in Duhok.",
    privacyTitle: "Datenschutzbestimmungen",
    privacySubtitle: "Hervorragende Sicherheitsstandards für Ihre Texte",
    privacyHeaderDesc: "Wir garantieren die Sicherheit Ihrer Daten über servergestützte, verschlüsselte Verbindungen. Deine Privatsphäre ist geschützt.",
    privacyItems: [
      {
        title: "1. Keine Speicherung von Texten (Zero-Data Capture)",
        desc: "Sämtliche Eingaben zur Übersetzung werden flüchtig verarbeitet und unmittelbar nach dem Abschluss verworfen.",
        badge: "Sicher"
      },
      {
        title: "2. Lokale Speicherung im Browser",
        desc: "Sämtlicher Cache sowie Suchanfragen verbleiben ausschließlich lokal im Speicher Ihres eigenen Endgeräts.",
        badge: "Lokal"
      },
      {
        title: "3. Akademische Integrität",
        desc: "Diese Plattform wurde als studentisches Hilfsprojekt entwickelt, um den freien Zugang zur kurdischen Sprache zu bewahren.",
        badge: "Akademisch"
      },
      {
        title: "4. Verschlüsselte Server-Proxies",
        desc: "Anfragen werden über verschlüsselte Node-Endpunkte geleitet, um Ihre persönliche IP-Adresse und sensiblen Kommunikationsmerkmale zu verbergen.",
        badge: "Advanced"
      }
    ],
    websiteButton: "Besuchen Sie meine Website (revingkrd.com)",
    emailButton: "E-Mail senden",
    callButton: "Anrufen",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 Designer",
      programmer: "💻 Programmierer",
      creator: "🎬 Creator",
      techtur: "🔧 TechTur",
      helper: "🤝 Helfer"
    }
  },
  fr: {
    navTranslator: "Traducteur",
    navAboutMe: "À Propos",
    navPrivacy: "Confidentialité",
    headerTitle: "Traducteur Intelligent - Peyvok",
    headerSubtitle: "Le meilleur moteur linguistique pour transcrire et comparer les langues globales avec le kurde badini",
    badgeKurdishPremium: "Design Digital de Prestige ☀️ Kurdistan",
    aboutMeTitle: "Mon Centre Professionnel",
    aboutMeSubtitle: "Développeur Informatique & Mentor Universitaire • Duhok, semel/ Shariya",
    biographyTitle: "Historique de réussite, Vision et Philosophie",
    bioTextHtml: `<p class="text-lg text-white font-black leading-snug">
      Je suis <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-2xl">Reving Ghazwan</span>, major de la promotion de l'<span class="text-amber-400 font-black">Université Polytechnique de Duhok</span> – Institut Technique de Zakho – Option Informatique, promotion 2024-2025.
    </p>
    <p class="text-slate-300 font-semibold text-sm">
      Un concepteur logiciel passionné et un encadrant incontournable pour aider les étudiants à concrétiser leurs projets d'innovation.
    </p>
    <p class="border-l-4 border-cyan-400 pl-4 text-indigo-200 font-extrabold italic bg-[#150e35] py-3.5 px-4 rounded-r-2xl shadow-inner leading-relaxed text-sm">
      "Mon rôle dépasse la simple ligne de programmation; je m'attache à transformer les barrières techniques en opportunités viables pour la réussite de tous."
    </p>`,
    skillsTitle: "Cartographie Interactive des Compétences",
    educationTitle: "Parcours Éducatif & Jalons Professionnels",
    diplomaTitle: "Diplôme en Technologies de l'information (IT) – Numéro Un (Major de Promotion)",
    diplomaDesc: "Zakho Technical Institute · Diplôme d'Excellence Nationale. Compétences avancées en bases de données et ingénierie informatique.",
    mentorTitle: "Mentor Étudiant & Développeur Full-Stack",
    mentorDesc: "Accompagnement et révision de projets académiques de fin d'études en programmation orientée objet.",
    traineeTitle: "Stagiaire en Assistance Technique Informatique",
    traineeDesc: "Maintenance de parcs informatiques en milieu hospitalier et configuration de protocoles réseau.",
    workerTitle: "Graphiste & Concepteur PAO en Imprimerie",
    workerDesc: "Pendant 3 mois à Duhok, chargé de la mise en page, du suivi qualité d'impression et de rapports administratifs.",
    privacyTitle: "Normes de Confidentialité",
    privacySubtitle: "Politique stricte de protection des données utilisateur",
    privacyHeaderDesc: "Vos requêtes d'apprentissage et de traduction sont strictement cryptées. Aucune donnée n'est revendue à des tiers.",
    privacyItems: [
      {
        title: "1. Traitement Éphémère (Zero-Data Capture)",
        desc: "Les textes saisis pour la traduction sont traités temporairement dans la mémoire vive puis purgés sur-le-champ.",
        badge: "Sécurisé"
      },
      {
        title: "2. Sauvegarde Exclusive en Local",
        desc: "L'historique et les options personnalisées sont conservés à 100% au sein du stockage interne de votre navigateur.",
        badge: "Local"
      },
      {
        title: "3. Engagement Pédagogique Libre",
        desc: "Cette application a été mise en œuvre volontairement par Reving Ghazwan pour l'essor de la langue kurdo-badini.",
        badge: "Éthique"
      },
      {
        title: "4. Proxies d'API Sécurisés",
        desc: "Les appels de traduction sont acheminés par un serveur Node dédié qui masque votre adresse IP d'origine.",
        badge: "Avancé"
      }
    ],
    websiteButton: "Visiter mon site officiel (revingkrd.com)",
    emailButton: "Envoyer un e-mail",
    callButton: "Passer un appel",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 Designer",
      programmer: "💻 Programmeur",
      creator: "🎬 Créateur",
      techtur: "🔧 TechTur",
      helper: "🤝 Assistant"
    }
  },
  tr: {
    navTranslator: "Çevirmen Portal",
    navAboutMe: "Hakkımda",
    navPrivacy: "Gizlilik Politikası",
    headerTitle: "Akıllı Çevirmen - Peyvok",
    headerSubtitle: "Küresel dilleri Kürtçe Bahdini lehçesiyle çeviren yetkin dil sistemi",
    badgeKurdishPremium: "Üstün Dijital Tasarım ☀️ Kürdistan",
    aboutMeTitle: "Kişisel Profesyonel Panelim",
    aboutMeSubtitle: "Yazılım Geliştirici & Akademik Danışman • Duhok, semel/ Shariya",
    biographyTitle: "Başarı Hikayesi, Hedef ve Akademik Kariyer",
    bioTextHtml: `<p class="text-lg text-white font-black leading-snug">
      Ben <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-2xl">Reving Ghazwan</span>, <span class="text-amber-400 font-black">Duhok Politeknik Üniversitesi</span> – Zaho Teknik Enstitüsü – Bilişim Teknolojileri (IT) Bölümü 2024–2025 yılı Birincisi ve Mezunuyum.
    </p>
    <p class="text-slate-300 font-semibold text-sm">
      Öğrencilerin yaratıcı fikirlerini teknolojik projelere dönüştürmelerinde her zaman öncülük eden, azimli bir yazılımcıyım.
    </p>
    <p class="border-l-4 border-cyan-400 pl-4 text-indigo-200 font-extrabold italic bg-[#150e35] py-3.5 px-4 rounded-r-2xl shadow-inner leading-relaxed text-sm">
      "Benim için kod yazmak bir meslekten fazlasıdır; teknik engelleri aşmak, topluluğuma faydalı olmak ve her öğrencinin anadilinde başarıya ulaşmasını sağlamak tek hedefimdir."
    </p>`,
    skillsTitle: "Teknik Yetkinlikler ve Teknolojiler Tablosu",
    educationTitle: "Eğitim Geçmişi & Profesyonel Çalışmalar",
    diplomaTitle: "Bilişim Teknolojileri (IT) Ön Lisans Diploması – Sınıf Birincisi (Rank #1)",
    diplomaDesc: "Zaho Teknik Enstitüsü · En Yüksek Onur Derecesi (Highest Distinction) ile mezuniyet. Algoritmalar ve mimari tasarım odaklı çalışma.",
    mentorTitle: "Öğrenci Mentörü & Yazılım Geliştirici",
    mentorDesc: "Bilgisayar yazılım ve IT öğrencilerinin mezuniyet projelerinin tasarımı, veri tabanı şemaları üzerine mentörlük.",
    traineeTitle: "Klinik BT Destek ve Altyapı Stajyeri",
    traineeDesc: "Hastane bilgi sistemlerinin çalışır halde tutulması, yerel ağların kurulması ve donanımsal sistem hatalarının çözülmesi.",
    workerTitle: "Matbaa Grafik Tasarımcısı & Ofis Çalışanı",
    workerDesc: "Duhok'ta bir matbaada 3 ay boyunca tasarım süreçlerinin yürütülmesi, baskı dosyalarının oluşturulması ve yönetim raporları.",
    privacyTitle: "Ziyaretçi Veri Gizliliği Bildirimi",
    privacySubtitle: "Üst Düzey Güvenlik ve Tam Veri Kontrolü",
    privacyHeaderDesc: "Çeviri ve ses girdilerinizin gizliliğini korumayı garanti ediyoruz. Hiçbir verinizi saklamıyor veya dış ağlarla paylaşmıyoruz.",
    privacyItems: [
      {
        title: "1. Geçici Veri İşleme (Zero-Data Capture)",
        desc: "Çeviri penceresine yazdığınız girdiler yalnızca o an kullanılır ve işlem tamamlanır tamamlanmaz sunucu belleğinden silinir.",
        badge: "Güvenli"
      },
      {
        title: "2. Tamamen Yerel Depolama (Local Storage)",
        desc: "Sistem, arama geçmişinizi ve tercihlerinizi dış sunuculardan bağımsız olarak yalnızca kendi tarayıcınızda (localStorage) saklar.",
        badge: "Yerel"
      },
      {
        title: "3. Akademik ve Kültürel Destek",
        desc: "Bu proje, Kürtçe'nin Badini lehçesini korumak ve öğrencilere ücretsiz dil kaynağı sağlamak amacıyla akademik amaçlarla kurulmuştur.",
        badge: "Akademik"
      },
      {
        title: "4. Güvenli API Ağ Geçidi (Encrypted Proxies)",
        desc: "Gemini 3.5 yapay zeka entegrasyonu tamamen şifrelenmiş sunucu proksileri üzerinden çalışır ve IP adresinizi dış ağlardan gizler.",
        badge: "Gelişmiş"
      }
    ],
    websiteButton: "Resmi Web Sitemi Ziyaret Et (revingkrd.com)",
    emailButton: "E-Posta Gönder",
    callButton: "Beni Ara",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 Tasarımcı",
      programmer: "💻 Programcı",
      creator: "🎬 Üretici",
      techtur: "🔧 Tekniker",
      helper: "🤝 Yardımcı"
    }
  },
  ru: {
    navTranslator: "Переводчик",
    navAboutMe: "Обо Мне",
    navPrivacy: "Конфиденциальность",
    headerTitle: "Умный переводчик - Peyvok",
    headerSubtitle: "Передовая лингвистическая система для транскрипции глобальных языков на курдский бадини",
    badgeKurdishPremium: "Дизайн Мирового Класса ☀️ Курдистан",
    aboutMeTitle: "Мой Профессиональный Центр",
    aboutMeSubtitle: "IT-Разработчик и Академический Наставник • Duhok, semel/ Shariya",
    biographyTitle: "История Успеха, Миссия и Жизненные Цели",
    bioTextHtml: `<p class="text-lg text-white font-black leading-snug">
      Я <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold text-2xl">Ревинг Газван</span>, лучший выпускник <span class="text-amber-400 font-black">Политехнического университета Дохука</span> – Технического института Захо – факультета информационных технологий (IT), выпуск 2024–2025 гг.
    </p>
    <p class="text-slate-300 font-semibold text-sm">
      Амбициозный технологический разработчик и ключевой наставник для продвижения креативных проектов молодых специалистов.
    </p>
    <p class="border-l-4 border-cyan-400 pl-4 text-indigo-200 font-extrabold italic bg-[#150e35] py-3.5 px-4 rounded-r-2xl shadow-inner leading-relaxed text-sm">
      "Моя работа строится не просто вокруг программирования. Моя миссия — превратить сложные вызовы в безопасные ступени к успеху для каждого моего студента."
    </p>`,
    skillsTitle: "Интерактивная карта академических навыков",
    educationTitle: "История образования и трудовой опыт",
    diplomaTitle: "Диплом в области информационных технологий (IT) — Лучший Выпускник (Rank #1)",
    diplomaDesc: "Технический институт Захо · Диплом с отличием первого класса. Расширенная подготовка в изучении функционального программирования и баз данных.",
    mentorTitle: "Ментор студентов и IT-разработчик",
    mentorDesc: "Наставничество и консультирование бакалавров по вопросам ведения баз данных и защиты дипломных выпускных программ.",
    traineeTitle: "Стажер по технической поддержке",
    traineeDesc: "Обслуживание защищенных локальных сетей в клинических условиях, аудит системного аппаратного обеспечения.",
    workerTitle: "Графический дизайнер типографии",
    workerDesc: "В течение 3 месяцев работал в типографии в Дохуке; занимался проектированием макетов, подготовкой печатных медиа-материалов.",
    privacyTitle: "Положение о конфиденциальности данных",
    privacySubtitle: "Высокие стандарты защиты пользовательских трансляций",
    privacyHeaderDesc: "Мы соблюдаем высокие стандарты безопасности. Ваши текстовые запросы не подлежат записи и никогда не передаются сторонним лицам.",
    privacyItems: [
      {
        title: "1. Полное отсутствие логов (Zero-Data Capture)",
        desc: "Любые вводимые текстовые потоки обрабатываются исключительно в оперативной памяти и сразу удаляются после завершения задачи.",
        badge: "Безопасно"
      },
      {
        title: "2. Локальное хранение в браузере",
        desc: "Ваш словарь, настройки и кеш хранятся локально в веб-системе вашего собственного устройства.",
        badge: "Локально"
      },
      {
        title: "3. Академическая корпоративная этика",
        desc: "Данное ПО разработано как независимый благотворительный ресурс для поддержания курдского языка бадини.",
        badge: "Этично"
      },
      {
        title: "4. Зашифрованные Node-прокси запросы",
        desc: "Взаимодействие с ИИ осуществляется через зашифрованные прокси для скрытия вашего исходного IP-адреса.",
        badge: "Максимум"
      }
    ],
    websiteButton: "Посетить мой официальный сайт (revingkrd.com)",
    emailButton: "Написать письмо",
    callButton: "Позвонить",
    locationLabel: "Duhok, semel/ Shariya",
    roleTags: {
      designer: "🎨 Дизайнер",
      programmer: "💻 Программист",
      creator: "🎬 Создатель",
      techtur: "🔧 Техник",
      helper: "🤝 Помощник"
    }
  }
};

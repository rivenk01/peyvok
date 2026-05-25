import { TranslationResponse } from "./types";

export const PRESET_TERMS: { [key: string]: TranslationResponse } = {
  "procurement": {
    originalText: "Procurement",
    translatedText: "کڕین و دابینکرن (پایداری)",
    sourceLanguageParsed: "English",
    badiniTranslationArabicScript: "کڕین و دابینکرن (پایداری)",
    badiniTranslationLatinScript: "Kirîn û Dabînkirin (Paydarî)",
    pronunciationGuide: "Pro-kyor-mênt / Da-bîn-ki-rin",
    meaningAndIntent: {
      kurdishDescription: "مەرەم ژێ هەموو کار و پرۆسێن دابینکرن یان کڕینا ب دروستی یا کەلووپەل، خزمەتگوزاری، یان کارانە بۆ رێکخراوەکێ، فەرمانگەهەکێ یان کۆمپانیەکێ. ئەڤ کارە ب رێکارێن فەرمی تێتە ئەنجامدان دا پێدڤی بهێنە مسۆگەرکرن.",
      englishDescription: "Procurement is the process of finding and agreeing to terms, and acquiring goods, services, or works from an external source, often via a competitive bidding process."
    },
    whyItIsUsed: {
      kurdishDescription: "بۆچی دهێتە بکارئینان: بۆ رێکخستنا کارێ کڕینێ ب شێوازەکێ یاسایی دا کۆمپانیا یان رێکخراو باشترین کوالێتی ب باشترین بهایێ گونجای بدەست خۆ ڤە بینیت و رێگری ل گەندەلیێ بهێتە کرن.",
      englishDescription: "Why it is used: To organize buying processes legally, ensuring the company gets the highest-quality goods at the best possible price while avoiding corruption and delays."
    },
    howItIsUsedContext: "د کار و بازرگانیێ دا، کۆمپانیێن مەزن و حکومەت پشکەکا تایبەت هەیە پێ د بێژن (بەشێ دابینکرنێ)، کو کار و بارێن گرێبەست و کڕینان پێکدئینیت.",
    examples: [
      {
        badiniArabic: "بەشێ دابینکرنێ ل کونسۆلیخانەیێ دەست ب کڕینا کەرەستێن نوی کر.",
        badiniLatin: "Beşê dabînkirinê li konsolîxaneyê dest bi kirîna keresteyên nû kir.",
        englishTranslation: "The procurement department at the consulate started acquiring new materials.",
        arabicTranslation: "بدأ قسم المشتريات والتجهیز في القنصلية بشراء تجهيزات جديدة."
      },
      {
        badiniArabic: "پرۆسەیا دابینکرنێ دڤێت یا روون و شەفاف بیت دا کو چ گەندەلی تێدا نەبیت.",
        badiniLatin: "Proseya dabînkirinê divêt ya rûn û şefaf bît da ku tu gendelî têda nebit.",
        englishTranslation: "The procurement process must be transparent so that there is no corruption in it.",
        arabicTranslation: "يجب أن تكون عملية الشراء والتجهيز شفافة لضمان عدم وجود أي فساد فيها."
      }
    ],
    culturalFootnotes: {
      titleKurdish: "تێبینی فۆلکلۆری و دەڤەری: دابینکرن ل بەهدینان",
      titleEnglish: "TRIBAL & GEOGRAPHIC CORRELATION",
      contentKurdish: "پەیڤا 'دابینکرن' یان 'پەیداکرن' د ناڤبەرا دەڤەرێن جودا یێن بادینان دا دهێتە گوهۆڕین. بۆ نموونە ل دەڤەرا زاخۆ پتر بەرێ خۆ ددەنە پەیڤا 'پەیداکرن' یان 'کڕین'، ل دەمێ ل دهۆک و ئامێدیێ شێوازێ فەرمی یێ 'دابینکرن' یان 'پەککەفتن' دهێتە کارئینان.",
      contentEnglish: "The formal concept of procurement varies between different Behdini regions. In Zakho, terms like 'Peydakirin' are colloquially preferred, while in Duhok and Amadiya, 'Dabînkirin' is standard in official capacities.",
      variationsList: [
        { groupOrPlace: "زاخۆ / زاخۆیی", alternativeTerm: "پەیداکرن / Peydakirin", localMeaningOrNuance: "پتر مەرەم پێ ب دەستڤەئینانا کەرەستەیانە ب کریاری" },
        { groupOrPlace: "ئامێدی / بەرواری", alternativeTerm: "پێگوهۆڕین / Pêgohorîn", localMeaningOrNuance: "پەیداکرنا دەستبەجێ یا پێدڤیێن مالێ ب زوویی" }
      ]
    }
  },
  "feasibility study": {
    originalText: "Feasibility Study",
    translatedText: "خواندن یان لێکۆڵینا سەرکەفتنا پڕۆژەی (ڤەکۆلینا گونجاویێ)",
    sourceLanguageParsed: "English",
    badiniTranslationArabicScript: "خواندن یان لێکۆڵینا سەرکەفتنا پڕۆژەی (ڤەکۆلینا گونجاویێ)",
    badiniTranslationLatinScript: "Vekolîna Guncawiyê (Xwendina Rêbariyê)",
    pronunciationGuide: "Fî-zî-bî-lî-tî sta-dî / Ve-ko-lî-na gun-ca-wi-yê",
    meaningAndIntent: {
      kurdishDescription: "خواندنا پێشوەختە یا سەرکەفتن و شاندنا هزرەکا پرۆژەی د روویێ دارایی، تەکنیکی و بازاڕی دا، دا دیار ببیت کا پرۆژە دێ یا سەرکەفتی بیت یان نە بەری کو پاره لێ بهێتە مەزینکرن.",
      englishDescription: "An assessment of the practicality of a proposed plan or method, evaluating financial, technical, and operational viability before investing capital."
    },
    whyItIsUsed: {
      kurdishDescription: "بۆچی دهێتە بکارئینان: دا ژیان و وەبەرهێنانا مرۆڤی و دارایی نەچیته هەدەر و دڵنیایی هەبیت کو بازاڕ پێشوازیێ ل ڤی کارى کەت و ئاریشێن تەکنیکی نابنە رێگر.",
      englishDescription: "Why it is used: To safeguard human and financial capital from failing, giving stakeholders statistics-based confidence that the project is indeed doable and profitable."
    },
    howItIsUsedContext: "بەری دەستپێکرنا کۆمپانیەکێ یان کارگەهەکێ، وەبەرهێنەر داخواکارن کو ڤەکۆلینا گونجاویێ بۆ پڕۆژەی بهێتە چێکرن.",
    examples: [
      {
        badiniArabic: "ئەم نەبەرینە چ بودجەیان مەزێخین تا ڤەکۆلینا گونجاویێ تمام نەبیت.",
        badiniLatin: "Em neberîne tu budceyan mezêxin ta vekolîna guncawiyê temam nebit.",
        englishTranslation: "We won't spend any budgets until the feasibility study is completed.",
        arabicTranslation: "لن ننفق أي ميزانيات حتى تكتمل دراسة الجدوى."
      }
    ],
    culturalFootnotes: {
      titleKurdish: "خواندنا بەرگی ل دەڤەرا ئاکرێ و بەرواری بالکا",
      titleEnglish: "REGIONAL LINGUISTIC NUANCE",
      contentKurdish: "ل دەڤەرا ئاکرێ و چەندین هۆزێن رۆژهەڵاتی یێن بادینان، پەیڤا 'گونجاوی' ب شێوازێ 'شیاوی' دهێتە گۆتن، ل دەمێ بۆ کورتکرنێ دبێژنێ 'سەخبێرکرنێ' ل ناوماڵ و کارێن گوندان دا.",
      contentEnglish: "In Akre and eastern tribal areas of Behdinan, 'Guncawî' (suitability) is occasionally subbed with 'Şiyawî' (capability), reflecting dynamic micro-dialectal branches.",
      variationsList: [
        { groupOrPlace: "ئاکرێ / ئاکرەیی", alternativeTerm: "ڤەکۆلینا شیاویێ", localMeaningOrNuance: "بەکارهێنانا پەیڤا 'شیاوی' بۆ گونجاویێ د ئاخفتنێ دا" },
        { groupOrPlace: "بەهدینان گشتی", alternativeTerm: "سەربۆرا کاران", localMeaningOrNuance: "پشکنین یان بەردیمەنیا بەر فرەهیا دەستپێکێ" }
      ]
    }
  },
  "capacity building": {
    originalText: "Capacity Building",
    translatedText: "ئاڤاکرنا شیانان",
    sourceLanguageParsed: "English",
    badiniTranslationArabicScript: "ئاڤاکرنا شیانان",
    badiniTranslationLatinScript: "Avakirina Şiyanan",
    pronunciationGuide: "Ka-pa-sî-tî bîl-dîng / A-va-ki-ri-na şî-ya-nan",
    meaningAndIntent: {
      kurdishDescription: "پەرەپێدان یان مەکته‌بکرنا زانین، کارامەیی و رێکارێن رێکخراون و گرۆپان، دا کو بشێن ل گەل گۆهرینێن سەردەم بگونجن و کارێ خۆ ب رەنگەکێ باشتر ئەنجام بدەن.",
      englishDescription: "The process of developing and strengthening the skills, instincts, abilities, processes, and resources that organizations and communities need to survive, adapt, and thrive."
    },
    whyItIsUsed: {
      kurdishDescription: "بۆچی دهێتە بکارئینان: بۆ پێشخستنا هێزا کاری و فەرمانبەران دا ئاستێ وان یێ بەرهەمهێنانێ بلند ببیت و ب مۆدێرنترین تەکنیک کار بکەن.",
      englishDescription: "Why it is used: To upgrade workforce capabilities, ensuring individuals excel in executing tasks with maximum speed, innovation, and independent confidence."
    },
    howItIsUsedContext: "رێکخراوێن خێرخوازی یێن جیهانی گەلەک بوارێن مەشق و راهێنانێ دکەنە دیاری د ژێر ناڤێ (پەرەپێدان و ئاڤاکرنا شیانان).",
    examples: [
      {
        badiniArabic: "ئەڤ خولە بۆ ئاڤاکرنا شیانێن فەرمانبەرێن دابینکرنێ هاتیە ڤەکرن.",
        badiniLatin: "Ev xule bo avakirina şiyanên fermanberên dabînkirinê hatiye vekirin.",
        englishTranslation: "This workshop is hosted for building the capacity of procurement officers.",
        arabicTranslation: "تم تفعيل هذه الدورة لبناء قدرات موظفي التجهيزات."
      }
    ],
    culturalFootnotes: {
      titleKurdish: "ئاڤاکرنا شیانان ل زۆنا بەهدینان",
      titleEnglish: "GROWTH & DEVELOPMENT LINGUISTICS",
      contentKurdish: "پەیڤا 'ئاڤاکرنا شیانان' زارۆڤەکێ نوو یێ لێک جودایە. ل گوندان، دەمێ دهێتە باسکرن ل سەر بەرهەمهێنان یان مەشق پێکرنا بنەجەهـ، پاتیارێن سەرکردەک د بێژنێ 'فێرکرن و مەشککرن'، کو مژار دەربارەی دانا لێهاتوویێ یە.",
      contentEnglish: "While 'Avakirina Şiyanan' is a modern professional translation, classical Behdini speakers in high rural villages use expressions like 'Fêrkirin û Meşkkirin' (teaching & drilling) to describe upgrading manual capability.",
      variationsList: [
        { groupOrPlace: "دهۆک / زاخۆ گشتی", alternativeTerm: "پەرەپێدانا کارامەیی", localMeaningOrNuance: "پتر د بەشێن فەرمی و زانکۆی دا دهێتە باسکرن" },
        { groupOrPlace: "دەڤەرا دوسکی / مزوری", alternativeTerm: "لێهاتویی", localMeaningOrNuance: "پێشخستنا هۆز و میراتیێن زارەکی" }
      ]
    }
  },
  "implementation": {
    originalText: "Implementation",
    translatedText: "جیبه‌جێکرن / بجهئینان",
    sourceLanguageParsed: "English",
    badiniTranslationArabicScript: "جیبه‌جێکرن / بجهئینان",
    badiniTranslationLatinScript: "Cîbicîkirin / Bicehînan",
    pronunciationGuide: "Im-plî-mên-têy-şin / Ci-bi-ci-ki-rin",
    meaningAndIntent: {
      kurdishDescription: "گوهرینا پلان و هزرا بۆ سەر زەڤییا راستیێ و ئەنجامدانا کارى ب شێوازەکێ کریاری و رێکخستی، پشتی کۆ هەمی راوێژکاری تەواو دبن.",
      englishDescription: "The execution or carrying out of a plan, method, design, idea, model, specification, standard, or policy."
    },
    whyItIsUsed: {
      kurdishDescription: "بۆچی دهێتە بکارئینان: ژبەر کو هزرا د نڤیسارێ دا ب تنێ چ مفای ناگەهینیت تا کو ب شێوازەکێ کریاری نەهێتە بجهئینان و ئەنجامێن وێ نەهێنە دیتن.",
      englishDescription: "Why it is used: Put simply, ideas inside notebooks have zero utility until they are actively implemented, generating real physical value and serving users."
    },
    howItIsUsedContext: "پشتی نڤیسینا پلانێ، قۆناغا بجهئینانێ دهێت کو زۆرترین هێز و فۆکس تێدا هێتە مەزێختن.",
    examples: [
      {
        badiniArabic: "بجهئینانا ب دروستی یا پلانێ، سەرکەفتنا پڕۆژەی مسۆگەر دکەت.",
        badiniLatin: "Bicehînana bi dirustî ya planê, serkeftina projeyî misoger diket.",
        englishTranslation: "Direct and accurate implementation of the plan guarantees project success.",
        arabicTranslation: "التنفيذ السليم للمخطط يضمن نجاح المشروع."
      }
    ],
    culturalFootnotes: {
      titleKurdish: "زارا 'بجهئینان' ل تەکیا عیبادەتکاران و بەهدینی",
      titleEnglish: "FOLKLORIC VARIATION",
      contentKurdish: "پەیڤا 'بجهئینان' د فۆلکلۆرێ بادینان دا جهەکێ مەزن هەیە. دبێژن 'پەیڤ بجهـ چوو' ئانکو پلان هاتە جێبەجێکرن یان چێبوو. د ناڤ جڤاکێن عەشایەری دا بۆ تەمامکرنا سویند فەرمان د دەن ب شێوازی 'سەرهاتن' یان 'ب سەر برن'.",
      contentEnglish: "The root of 'Bicehînan' relates strictly to landing or placing words into real space ('Peyv biceh çû'). Tribal dispute leaders and religious village scholars prefer 'Serehatin' or 'Bi ser birin' to denote fully honoring an agreement.",
      variationsList: [
        { groupOrPlace: "زاخۆ / سندی", alternativeTerm: "ب سەر برن / Bi ser birin", localMeaningOrNuance: "ب تەمامی جیبەجێکرنا فەرمانەکێ بی چ دوودلی" },
        { groupOrPlace: "شێخان / یەزیدی گوندێن پير", alternativeTerm: "سەرهاتن / Serehatîn", localMeaningOrNuance: "جیبەجێکرن و مەزندانییا قەول و نەریتێن دێرین" }
      ]
    }
  }
};

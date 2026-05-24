export interface TranslationRequest {
  text: string;
  sourceLang: string;
}

export interface TranslationResponse {
  originalText: string;
  translatedText: string;
  sourceLanguageParsed: string;
  badiniTranslationArabicScript: string;
  badiniTranslationLatinScript: string;
  pronunciationGuide: string;
  meaningAndIntent: {
    kurdishDescription: string;
    englishDescription: string;
  };
  whyItIsUsed: {
    kurdishDescription: string;
    englishDescription: string;
  };
  howItIsUsedContext: string;
  examples: {
    badiniArabic: string;
    badiniLatin: string;
    englishTranslation: string;
    arabicTranslation: string;
  }[];
  isUnrelated?: boolean;
  attentionOrNote?: {
    noteTitleKurdish: string;
    noteContentKurdish: string;
    noteTitleEnglish: string;
    noteContentEnglish: string;
    typeSeverity: string;
  };
  quizDetails?: {
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
  };
  culturalFootnotes?: {
    titleKurdish: string;
    titleEnglish: string;
    contentKurdish: string;
    contentEnglish: string;
    variationsList: {
      groupOrPlace: string;
      alternativeTerm: string;
      localMeaningOrNuance: string;
    }[];
  };
}

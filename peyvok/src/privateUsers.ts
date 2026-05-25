// This is the private user configuration file.
// Only you (the admin) can see and edit this file.
// You can add your custom names, genders, Gemini API keys, and login codes here.
// Users will log in by typing their 'code' only.

export interface PrivateUser {
  name: string;
  gender: "boy" | "girl";
  apiKey: string; // The Gemini API key associated with this user
  code: string;   // The passcode the user enters to log in (must not be like the apiKey)
  tokens: number; // Initial token balance
}

export const PRIVATE_USERS: PrivateUser[] = [
  {
    name: "ڕێبین دهۆك",
    gender: "boy",
    apiKey: "", // Write your Gemini api key here if any (e.g. "AIzaSy...")
    code: "1994", // The passcode to type to load this profile
    tokens: 250000
  },
  {
    name: "سارا زاخۆ",
    gender: "girl",
    apiKey: "",
    code: "2005",
    tokens: 250000
  },
  {
    name: "Reving Ghazwan",
    gender: "boy",
    apiKey: "", // Write your admin Gemini key here if any
    code: "7777",
    tokens: 999999
  }
];

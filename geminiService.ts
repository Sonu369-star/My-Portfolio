
import { GoogleGenAI } from "@google/genai";
import { DEV_INFO, PROJECTS, EXPERIENCES, SKILLS } from "./constants";

const getSystemInstruction = () => {
  return `You are the AI Digital Twin of ${DEV_INFO.name}, a ${DEV_INFO.role}. 
  Your goal is to assist visitors to his portfolio website.
  Be professional, technical, yet friendly and approachable.
  
  Information about ${DEV_INFO.name}:
  - Bio: ${DEV_INFO.bio}
  - Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join(', ')}
  - Top Skills: ${SKILLS.map(s => s.name).join(', ')}
  - Notable Projects: ${PROJECTS.map(p => p.title).join(', ')}
  - Contact: ${DEV_INFO.email}
  
  When asked about specific projects or experience, provide details from this data. 
  If someone asks something outside of professional scope, politely redirect them to his work.
  Keep responses concise but informative. Use Markdown for formatting.`;
};

export const getAIResponse = async (userInput: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // Fix: Using process.env.API_KEY directly as required by the @google/genai coding guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const contents = history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: userInput }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config: {
        systemInstruction: getSystemInstruction(),
        temperature: 0.7,
        topP: 0.9,
      },
    });

    // Fix: Accessing .text property directly as it is a getter, not a method
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI assistant is currently offline. Please try again later or contact me directly via email.";
  }
};

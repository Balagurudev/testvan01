import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDesignStrategy = async (prompt: string) => {
  try {
    // Using the Thinking model as requested for complex strategy tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 32768 }, // Max thinking budget for deep reasoning
        systemInstruction: `You are a world-class Design Director at a brutalist, avant-garde design studio called VANTAGE. 
        Your goal is to provide a comprehensive, high-level design strategy based on the user's rough idea.
        
        Output Structure (Markdown):
        1. **Core Concept**: A philosophical or abstract anchor for the brand/project.
        2. **Visual Direction**: Specific references to art movements, materials, or lighting (e.g., "Brutalist concrete textures mixed with neon noir").
        3. **Typography & Color**: Suggest specific font categories (e.g., "Grotesque Sans") and a color palette rationale.
        4. **User Experience**: A key interaction or behavioral principle.
        
        Tone: Professional, artistic, slightly abstract but actionable. concise.`,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
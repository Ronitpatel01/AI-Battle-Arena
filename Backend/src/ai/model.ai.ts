import { ChatGoogle } from "@langchain/google";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatCohere } from "@langchain/cohere";
import config from "../config/config.js";



export const geminiModel = new ChatGoogle({
    model: "gemini-flash-latest",
    apiKey: config.GOOGLE_API_KEY,
})


export const geminiAIModel = new ChatGoogleGenerativeAI({
    model: "gemini-flash-latest",
    apiKey: config.GOOGLE_API_KEY,
});


export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.COHERE_API_KEY,
})
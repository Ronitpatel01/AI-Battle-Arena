import {config} from "dotenv";
config();

type CONFIG = {
  readonly GOOGLE_API_KEY: string,
  readonly MISTRALAI_API_KEY: string,
  readonly COHERE_API_KEY: string,
};

const app_config : CONFIG = { 
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
    MISTRALAI_API_KEY: process.env.MISTRALAI_API_KEY || "",
    COHERE_API_KEY: process.env.COHERE_API_KEY || "",
}
export default app_config;
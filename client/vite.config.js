import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Ei line-ta add koro

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Ekhane add koro
  ],
});

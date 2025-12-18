import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "",
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [tailwindcss()],
});

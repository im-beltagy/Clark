import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      external: [
        "/src/common/SectionTitle/Index",
        "/src/assets/sass/resets",
        "/src/assets/sass/variables",
        "/src/assets/sass/configs",
        "/src/common/MotionDiv/Index",
      ],
    },
  },
});

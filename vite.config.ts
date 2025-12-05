import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";
import { fileURLToPath } from "url";
import { dirname } from "path";

// تحويل import.meta.url إلى __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // يمكنك إضافة البلجن الخاص بالصور هنا إذا تريد:
    // metaImagesPlugin(),
    // runtimeErrorOverlay(), // إذا تريد عرض الأخطاء على المتصفح
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(__dirname, "client"), // مجلد الفرونت
  build: {
    outDir: path.resolve(__dirname, "dist"), // الآن build يخرج إلى dist فقط (آمن للنشر على Vercel/GitHub Pages)
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500, // الحد المسموح لحجم الملفات الكبيرة
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

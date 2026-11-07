import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: `${root}index.html`,
        tracking: `${root}tracking.html`,
        deliveries: `${root}delivery-admin.html`,
        courier: `${root}courier.html`,
      },
    },
  },
});

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpine from '@astrojs/alpinejs';
import cloudflare from '@astrojs/cloudflare';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind(), alpine(), icon()],
  adapter: cloudflare()
});
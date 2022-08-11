// svelte.config.js
// import adapter from '@sveltejs/adapter-static';
import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    // adapter: adapter({
    //   // default options are shown. On some platforms
    //   // these options are set automatically — see below
    //   pages: 'build',
    //   assets: 'build',
    //   fallback: null,
    //   precompress: false
    // }),
    adapter: vercel({
      // if true, will deploy the app using edge functions
      // (https://vercel.com/docs/concepts/functions/edge-functions)
      // rather than serverless functions
      edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false
    }),

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: false
    }
  }
}
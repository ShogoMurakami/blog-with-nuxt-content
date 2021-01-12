import getRoutes from "./utils/getRoutes";

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '5hogo-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '5hogoのblogです．' },
      { property: "og:site_name", content: "5hogo-blog" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://hogo-blog.web.app",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "5hogo-blog",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "5hogoのblogです．",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://images.hive.blog/DQmeyP4VA3SKBmPRsdVJ1fQvAC93wfyohoCZ6gVgcmwgyhG/dog-5858985_1280.jpg",
      },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "720" },
      { name: "twitter:site", content: "@5hogoDev1" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://hogo-blog.web.app",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "5hogo-blog",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "5hogoのblogです．",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://images.hive.blog/DQmeyP4VA3SKBmPRsdVJ1fQvAC93wfyohoCZ6gVgcmwgyhG/dog-5858985_1280.jpg",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600&family=Noto+Sans+JP&display=swap'},
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://hogo-blog.web.app",
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    "@nuxtjs/sitemap",
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  },
  sitemap: {
    hostname: 'https://hogo-blog.web.app',
    routes() {
      return getRoutes();
    },
  },
}

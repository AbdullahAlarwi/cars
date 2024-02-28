// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "mycar",
      script: [
        {
          src: "/assets/js/bootstrap.bundle.min.js",
        },
        {
          src: "/assets/js/jquery-3.6.0.min.js",
        },
        {
          src: "/assets/js/jquery-ui.min.js",
        },
        {
          src: "/assets/js/jquery.magnific-popup.min.js",
        },
        {
          src: "/assets/js/jquery.smartmenus.min.js",
        },
        {
          src: "/assets/js/lazy.js",
        },
        {
          src: "/assets/js/owl.carousel.min.js",
        },
        {
          src: "/assets/js/script-v2.js",
        },
        {
          src: "/assets/js/slick.min.js",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/font-awesome.min.css",
    "~/assets/css/jquery-ui.min.css",
    "~/assets/css/magnific-popup.css",
    "~/assets/css/owl.carousel.min.css",
    "~/assets/css/responsive-v2.css",
    "~/assets/css/slick.css",
    "~/assets/css/sm-clean.css",
    "~/assets/css/sm-core-css.css",
    "~/assets/css/style-v2.css",
    "~/assets/css/style.css",
  ],
});

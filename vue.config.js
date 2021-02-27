module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_base.scss";
            @import "@/styles/_mixins.scss";
            @import "@/styles/_global.scss";
            @import "@/styles/_keyframes.scss";
          `,
      },
    },
  },
};

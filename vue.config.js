module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/frontend/dist/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/styles/styles.scss";
            @import "@/styles/_variables.scss";
            @import "@/styles/_mixins.scss";
          `,
      },
    },
  },
};

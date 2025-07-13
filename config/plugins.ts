module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      breakpoints: {
        thumbnail: 245,
        small: 800,
        medium: 1600,
        large: 2400,
      },
    },
  },
});

module.exports = () => ({
  //https://github.com/mancku/strapi-plugin-schemas-to-ts
  'schemas-to-ts': {
    enabled: true,
    config: {
      acceptedNodeEnvs: ['development'],
    }
  },
  //https://docs.strapi.io/dev-docs/plugins/documentation
  documentation: {
    enabled: true,
    config: {
      'x-strapi-config': {
        plugins: []
      }
    }
  }
});

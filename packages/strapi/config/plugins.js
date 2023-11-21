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
    servers: [{ url: 'http://localhost:5000/api', description: 'Development server' }],
    config: {
      'x-strapi-config': {
        plugins: []
      }
    }
  }
});

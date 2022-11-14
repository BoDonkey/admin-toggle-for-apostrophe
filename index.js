module.exports = {
  options: {
    components: {}
  },
  init(self) {
    self.enableBrowserData();
    self.apos.template.append('body', 'admin-toggle-for-apostrophe:toggle');
  },
  components(self) {
    return {
      async toggle(req, data) {
        if (req.user === undefined) {
          return null;
        }
      }
    }
  },
  methods(self) {
    return {
      getBrowserData(req) {
        return {
          components: 'TheAdminToggle'
        }
      }
    }
  }
};

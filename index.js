module.exports = {
  options: {
    components: {}
  },
  init(self) {
    self.enableBrowserData();
    self.apos.template.append('main', 'admin-toggle-for-apostrophe:toggle');
  },
  components(self) {
    return {
      async toggle(req, data) {}
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

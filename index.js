module.exports = {
  handlers(self) {
    return {
      'apostrophe:ready': {
        addToggle() {
          self.apos.template.append('body', 'admin-toggle-for-apostrophe:toggle');
        }
      }
    };
  },
  components(self) {
    return {
      async toggle(req, data) {
        if (req.user === undefined) {
          return null;
        }
      }
    };
  }
};

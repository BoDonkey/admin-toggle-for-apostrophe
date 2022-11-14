import Vue from 'Modules/@apostrophecms/ui/lib/vue';

export default function() {
  return new Vue({
    el: '#admin-toggle',
    render: function (h) {
      return h('TheAdminToggle');
    }
  });
};

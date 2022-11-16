# admin-toggle-for-apostrophe

![toggle](https://user-images.githubusercontent.com/13168224/202276500-8aff4e6e-abb3-4a3f-826b-896cc313adc6.gif)

This extension allows toggle of the visibility of the ApostropheCMS adminBar for use with templates with fixed headers.

## Usage:

After installation, add the module to the `app.js` file.

```js
require('apostrophe')({
  short-name: 'my-project',
  modules: {
    'admin-toggle-for-apostrophe': {}
  }
});
```
A green toggle button will appear on all pages if logged in as anything besides `guest`. Clicking this will hide the visibility of the adminBar in order to see templates where the top section is positioned 'absolute' to the top of the page.

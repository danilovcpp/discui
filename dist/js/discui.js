/*!
  * DiscUI v0.0.1 (undefined)
  * Copyright 2019 undefined
  * Licensed under MIT (undefined)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  //import AsideMenu from './aside-menu'
  //import Sidebar from './sidebar'

  ($ => {
    if (typeof $ === 'undefined') {
      throw new TypeError('DiscUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
    }

    const version = $.fn.jquery.split(' ')[0].split('.');
    const minMajor = 1;
    const ltMajor = 2;
    const minMinor = 9;
    const minPatch = 1;
    const maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('DiscUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);
  /*export {
    AjaxLoad,
    AsideMenu,
    Sidebar
  }

  // Global functions
  import getStyle from './utilities/get-style'
  window.getStyle = getStyle

  import hexToRgb from './utilities/hex-to-rgb'
  window.hexToRgb = hexToRgb

  import hexToRgba from './utilities/hex-to-rgba'
  window.hexToRgba = hexToRgba

  import rgbToHex from './utilities/rgb-to-hex'
  window.rgbToHex = rgbToHex*/

}));
//# sourceMappingURL=discui.js.map

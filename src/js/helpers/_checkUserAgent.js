const body = document.querySelector('body');

// mobile user agent
const iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
const iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
const MacOS = /Macintosh/.test(navigator.userAgent) && !window.MSStream;

switch (true) {
  case iPhone:
    body.classList.add('iphone');
    break;
  case iPad:
    body.classList.add('ipad');
    break;
  case MacOS:
    body.classList.add('macos');
    break;
  case iOS:
    body.classList.add('ios');
    break;
  case iPhone || iPad || MacOS:
    body.classList.add('apple-device');
    break;

  default:
    break;
}

// desktop user agent

const UAString = navigator.userAgent;
const ua = navigator.userAgent.toLowerCase();
/* eslint-disable no-empty */
if (ua.indexOf('safari') !== -1) {
  if (ua.indexOf('chrome') > -1) {
  } else {
    body.classList.add('safari');
  }
}

if (window.navigator.userAgent.indexOf('Edge') > -1) {
  body.classList.add('edge');
}
if (UAString.indexOf('Trident') !== -1 && UAString.indexOf('rv:11') !== -1) {
  body.classList.add('ie');
}
if (UAString.indexOf('Trident') !== -1 && UAString.indexOf('rv:10') !== -1) {
  body.classList.add('ie');
}

import 'focus-visible';
// import $ from 'jquery';
import './helpers/_checkUserAgent';
import lazyImages from './modules/_lazyImages';
import documentReady from './helpers/_documentReady';

documentReady(() => {
  lazyImages();
});

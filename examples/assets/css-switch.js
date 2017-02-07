window.addEventListener('load', function() {
  // fetch link element
  var selector = 'link[href="../../src/css/mui.css"]',
      linkEl = document.querySelector(selector);

  // build element
  var selectEl = document.createElement('select');
  selectEl.innerHTML = [
    '<optgroup label="Basic">',
    '<option value="../../src/css/mui.css" selected>mui.css</option>',
    '<option value="../../src/css/mui.min.css">mui.min.css</option>',
    '<option value="../../src/css/mui-rtl.css">mui-rtl.css</option>',
    '<option value="../../src/css/mui-rtl.min.css">mui-rtl.min.css</option>',
    '</optgroup>',

    '<optgroup label="No Globals">',
    '<option value="../../src/extra/mui-noglobals.css">mui-noglobals.css</option>',
    '<option value="../../src/extra/mui-noglobals.min.css">mui-noglobals.min.css</option>',
    '<option value="../../src/extra/mui-noglobals-rtl.css">mui-noglobals-rtl.css</option>',
    '<option value="../../src/extra/mui-noglobals-rtl.min.css">mui-noglobals-rtl.min.css</option>',
    '</optgroup>'
  ].join('');

  selectEl.style.position = 'absolute';
  selectEl.style.top = '0px';
  selectEl.style.right = '0px';

  // change css file
  selectEl.addEventListener('change', function(ev) {
    linkEl.href = '../../src/css/' + this.value + '?' + (new Date());
  });

  document.body.appendChild(selectEl);
});

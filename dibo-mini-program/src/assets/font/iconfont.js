!(function(c) {
  var e,
    l =
      '<svg><symbol id="icon-fenxiangfangshi" viewBox="0 0 1024 1024"><path d="M800 704c-39.584 0-74.528 18.368-98.016 46.592l-273.472-154.72A191.04 191.04 0 0 0 448 512c0-28.928-6.592-56.256-18.048-80.864l204.64-131.84A127.04 127.04 0 0 0 704 320a128 128 0 1 0-128-128c0 21.504 5.792 41.44 15.168 59.232l-197.408 127.168A191.36 191.36 0 0 0 256 320a192 192 0 1 0 135.2 328.288l283.168 160.192A129.376 129.376 0 0 0 672 832a128 128 0 1 0 128-128zM704 128a64 64 0 1 1-0.032 128.032A64 64 0 0 1 704 128z m96 768a64 64 0 1 1 0.032-128.032A64 64 0 0 1 800 896z"  ></path></symbol><symbol id="icon-bianji" viewBox="0 0 1024 1024"><path d="M880.288 232.48L560.192 45.12a95.648 95.648 0 0 0-96.64 0L143.68 232.48A96.64 96.64 0 0 0 96 315.904v397.664c0 34.784 18.624 66.88 48.736 84l320 181.92a95.52 95.52 0 0 0 94.496 0l320-181.92A96.576 96.576 0 0 0 928 713.568V315.904a96.64 96.64 0 0 0-47.712-83.424zM864 713.568c0 11.584-6.208 22.304-16.256 28l-320 181.92a31.776 31.776 0 0 1-31.488 0l-320-181.92A32.192 32.192 0 0 1 160 713.568V315.904c0-11.456 6.048-22.048 15.904-27.808l319.872-187.36a31.84 31.84 0 0 1 32.192 0l320.128 187.392c9.856 5.728 15.904 16.32 15.904 27.776v397.664z"  ></path><path d="M512 320a192 192 0 1 0 0 384 192 192 0 0 0 0-384z m0 320a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"  ></path></symbol><symbol id="icon-guanlianshebei" viewBox="0 0 1024 1024"><path d="M260.096 544H160a32 32 0 0 1-32-32V256h480v256a32 32 0 0 1-32 32h-54.976a32 32 0 0 0 0 64H576a96 96 0 0 0 96-96V160a96 96 0 0 0-96-96H160a96 96 0 0 0-96 96v352a96 96 0 0 0 96 96h100.096a32 32 0 0 0 0-64zM128 160a32 32 0 0 1 32-32h416a32 32 0 0 1 32 32v32H128V160z"  ></path><path d="M864 416h-90.88a32 32 0 0 0 0 64H864a32 32 0 0 1 32 32v256H416v-256a32 32 0 0 1 32-32h63.072a32 32 0 0 0 0-64H448a96 96 0 0 0-96 96v352a96 96 0 0 0 96 96h416a96 96 0 0 0 96-96V512a96 96 0 0 0-96-96z m32 448a32 32 0 0 1-32 32H448a32 32 0 0 1-32-32v-32h480v32z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[e.length - 1].getAttribute('data-injectcss');
  if (t && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener('DOMContentLoaded', t, !1), e();
        };
        document.addEventListener('DOMContentLoaded', t, !1);
      }
    else
      document.attachEvent &&
        ((a = e),
        (n = c.document),
        (i = !1),
        (o = function() {
          i || ((i = !0), a());
        }),
        (l = function() {
          try {
            n.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(l, 50);
          }
          o();
        })(),
        (n.onreadystatechange = function() {
          'complete' == n.readyState && ((n.onreadystatechange = null), o());
        }));
    var a, n, i, o, l;
  })(function() {
    var e, t, a, n, i, o;
    ((e = document.createElement('div')).innerHTML = l),
      (l = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (a = t),
        (n = document.body).firstChild
          ? ((i = a), (o = n.firstChild).parentNode.insertBefore(i, o))
          : n.appendChild(a));
  });
})(window);

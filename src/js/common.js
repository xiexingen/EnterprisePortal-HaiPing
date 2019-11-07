//尺寸
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      var maxFontSize = Math.min(80, 100 * (clientWidth / 750));
      docEl.style.fontSize = maxFontSize + "px";
    };
  // Abort if browser does not support addEventListener
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
$(function() {
  //导航定位
  var nav = $(".header"); //得到导航对象
  var win = $(window); //得到窗口对象
  var sc = $(document); //得到document文档对象。
  win.scroll(function() {
    if (sc.scrollTop() >= 50) {
      nav.addClass("fixedheader");
      $(".sousuo").show();
      $(".header_t").css("margin-left", "1.28rem");
      $(".header_sousuo").hide();
      $(".bao_ss").removeClass("pbottom");
    } else {
      nav.removeClass("fixedheader");
      $(".sousuo").hide();
      $(".header_t").css("margin-left", "2.04rem");
      $(".header_sousuo").show();
      $(".bao_ss").addClass("pbottom");
    }
  });
  $(".sousuo").click(function() {
    $(".header_sousuo").fadeIn(300);
    $(".bao_ss").addClass("pbottom");
  });
  //详情页-点击显示全部
  $(".ckall .clickb").click(function() {
    $(this)
      .parent()
      .hide();
    $(this)
      .parent()
      .parent(".wz_t")
      .css("height", "auto");
  });
  //列表页-回到顶部
  $(".hdb").hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".hdb").fadeIn(300);
    } else {
      $(".hdb").fadeOut(300);
    }
  });
  $(".hdb").click(function() {
    $("html ,body").animate({ scrollTop: 0 }, 300);
  });
  //   //在线商城-弹框
  //   $(".zxsc").click(function() {
  //     $(".zxsctc")
  //       .fadeIn(300)
  //       .delay(3000)
  //       .fadeOut(300);
  //   });

  function baiduZhiZhu(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  }

  function zhiZhu360(){
    var src = "https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba";
    document.write('<script src="' + src + '" id="sozz"><\/script>');
  }

  baiduZhiZhu();
  zhiZhu360();
});

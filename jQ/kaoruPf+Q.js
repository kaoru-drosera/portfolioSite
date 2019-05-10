var swiper = new Swiper('.swiper-container',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: true,
  },
  pagination:{
    // ページネーションは、
    // スライド全体のページ数を
    // 表示してくれる仕組みのこと。
    el: '.swiper-pagination',
    clickable: true,
    // 「クリックした場所に移動できる」
    // ようにするには、「clickable: true,」を
    // 指定する必要がある。
    type: 'bullets',
  }
});

// バーガーメニュー・スムーズスクロール
$(function(){

  // クリックでボタン表示
  $('.fRburg').click(function() {
      $(this).toggleClass('FburglistFire');

      if ($(this).hasClass('FburglistFire')) {
          $('.Fburglist').addClass('FburglistFire');
          $('.Fburglist').hide().fadeIn();
      } else {
          $('.Fburglist').removeClass('FburglistFire');
          $('.Fburglist').show().fadeOut();
      }
    });

    $('.fRburg').on('click',function(){
      $('.fRburgO').toggleClass("fRburg1");
      if($('.fRburgO').hasClass("fRburg1")){
        $('.fRburgO').addClass('fRburg1');
      }else{
        $('.fRburgO').removeClass('fRburg1');
      }
     return false;
    });

    // by:0yenQ+sinQ.js

});

$(function(){
  // スムーズスクロール
  $('a[href^="#"]').click(function(){

    // スクロールの速度
    var speed = 400; //ミリ秒。
    // アンカーの値を取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html':href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーズスクロール
    $('body,html').animate({scrollTop:position},speed,'swing');
    return false;

  });
});


$(function(){
  var $fim = $('.fixedMenu');

  var $height1 = $('.heroTop').outerHeight;
  var $height2 = $('.greet').outerHeight;
  var $heightSum = $height1 + $height2;
  // ↑「herotopとgreetの高さを自動で取得して、
  // その高さまでスクロールダウンしたらfixedメニューを隠す、
  // という仕掛けを作りたい。」

  // herotopとgreetの高さを自動で取得して、
  // 「要素をスライド非表示」
  // の上のこーどの数値に割り当てたい。

  $fim.hide();


    $(window).on('scroll',function(){
      // スクロール位置を取得
      if($(this).scrollTop() > 1000){
        // 要素をスライド非表示
        $fim.slideDown('slow');
      } else {
        // 要素をスライド表示
        $fim.slideUp('slow');
      }
  });
});

// 大本命・大鬼門
// スクロール登場アニメーション

  // スクロールアニメーション（メイン）
  $(window).on('load',function(){

    // 遅れて連続登場
    $('.QD ,.JF').each(function(i){
      $(this).css('transition-delay', 0.3 * i + 's')
    });
    $('.QD').addClass('fire');


    // 「not a function」エラーでまず疑うべき原因は2つ。
    // 1.jQueryが読み込めていない
    // 2.関数の書き間違い

    var winh = $(window).height();
    // ウィンドウの高さをこれで調べる？

    $('.JQ,.JF').each(function(){
      $(this).data('top',$(this).offset().top - (winh * 0.75));

      $(window).on('scroll',function(){
        var myTop = $(window).scrollTop();

        $('.JQ, .JF').each(function(){
          if(myTop >= $(this).data('top')){
            $(this).addClass('fire');
          }
        });

        // $('.JF').each(function(i){
        //   if(myTop >= $(this).data('top')){
        //     $(this).addClass('fire');
        //   }
        // });

    });
    });

    $('.QE').each(function(){
      $(this).data('bottom',$(this).offset().bottom);
    });

  });

// 大本命・大鬼門
// スクロール登場アニメーション
// こ　こ　ま　で















;


// $(function() {
//   if(!$('.numbered-para').text().length){
//     $('.numbered-para').css('margin-bottom', '-37')
//   }
// } )

(function(d) {
  var config = {
  kitId: 'hsd0uya',
  scriptTimeout: 3000,
  async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document)

$(function() {
    if($('#first-view').length){
        let imgpass = "images/";
        let imgfile = [];
        imgfile[0] = 'bg00.jpg';
        imgfile[1] = 'bg01.jpg';
        imgfile[2] = 'bg02.jpg';
        imgfile[3] = 'bg03.jpg';
        imgfile[4] = 'bg04.jpg';
        let n = Math.floor(Math.random() * imgfile.length);
        let bgbox = $('#first-view');
        bgbox.css('background-image', 'url(' + imgpass + imgfile[n] + ')');
    }
} )

$(window).on('scroll', function(){

    let scrollTop = $(window).scrollTop();
    let bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）
  
    if(bgPosition){
      $('#first-view').css('background-position', 'center calc(50% + '+ bgPosition + 'px)');
    }
  });

  //fadeするタイトル
  // $(function() {
  //   $(window).scroll(function () {
  //     let scrollTop = $(window).scrollTop();
  //     let fvHeight = $('#first-view').height();
  //     let TOFactor = scrollTop / fvHeight
  //     // if( $('.code-title').css('opacity') < 1 ) {
  //     if( TOFactor <= 1.5) {        
  //       let titleOpacity = Math.min( ( TOFactor - 0.2 ) ** 4, 1);
  //       $('.code-title').css('opacity', titleOpacity)}
  //   }
  //   )
  // })

  // $(function () {
  //   $(window).scroll(function () {
  //     const windowHeight = $(window).height();
  //     const scroll = $(window).scrollTop();
  
  //     $('.element').each(function () {
  //       const targetPosition = $(this).offset().top;
  //       if (scroll > targetPosition - windowHeight + 100) {
  //         $(this).addClass("is-fadein");
  //       }
  //     });
  //   });
  // });


const marqueeTexts = document.querySelectorAll('.marquee-inner');

marqueeTexts.forEach((marqueeText) => {
  marqueeText.animate(
    {
      translate: [0, 'calc(-100% - 1rem)']
    },
    {
      duration: 5000,
      iterations: Infinity
    }
  );
});

// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor'); 

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}
$(document).ready(async function () {
  await loadFull(tsParticles);
  $("#tsparticles")
    .particles()
    .init(
      options={
      backgroundMode: {
        enable: false,
        zIndex: -100
      },
      background: {
        color: "#000"
      },
      fpsLimit: 30,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: false, mode: "grab" },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: { enable: false, force: 2, smooth: 10 }
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 100,
            duration: 0.5,
            opacity: 100,
            size: 20,
            speed: 3
          },
          grab: { distance: 400, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
          repulse: { distance: 200, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#fff" },
        links: {
          color: "#fff",
          distance: 100,
          enable: true,
          opacity: 0.4,
          width: 2
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          direction: "none",
          enable: true,
          outMode: "out",
          random: true,
          size: true,
          speed: 2,
          straight: true
        },
        number: { density: { enable: true, area: 900 }, value: 100 },
        opacity: {
          random: true,
          value: 0.5
        },
        shape: {
          type: "character",
          character: {
            "value": ["История серии ФФ", "Атака титанов", "Харуха и депрессия", "Фильмы Кубрика", "Поиски немо в картинках", "Бегущий в лабиринте", "Ланнестеры из книг", "Аниме 90х", "Гарри Поттер", "Ересь хоруса", "История примархов", "Мой кампейн на Зендрике", "Как избежать цикла страданий", "ЗВ"],
            "font": "Gymkhana",
            "style": "",
            "weight": ""
          }
        },
        size: {
          random: true,
          value: 10
        }
      },
      detectRetina: true
    }
    );
});

$(window).resize(function(){
 if($(window).width() >= 800){
   $("#tsparticles")
     .particles()
     .init(
       options={
       backgroundMode: {
         enable: false,
         zIndex: -100
       },
       background: {
         color: "#000"
       },
       fpsLimit: 30,
       interactivity: {
         detectsOn: "window",
         events: {
           onClick: { enable: false, mode: "grab" },
           onHover: {
             enable: true,
             mode: "bubble",
             parallax: { enable: false, force: 2, smooth: 10 }
           },
           resize: true
         },
         modes: {
           bubble: {
             distance: 100,
             duration: 0.5,
             opacity: 100,
             size: 20,
             speed: 3
           },
           grab: { distance: 400, line_linked: { opacity: 0.5 } },
           push: { particles_nb: 4 },
           remove: { particles_nb: 2 },
           repulse: { distance: 200, duration: 0.4 }
         }
       },
       particles: {
         color: { value: "#fff" },
         links: {
           color: "#fff",
           distance: 100,
           enable: true,
           opacity: 0.4,
           width: 2
         },
         move: {
           attract: { enable: false, rotateX: 600, rotateY: 1200 },
           direction: "none",
           enable: true,
           outMode: "out",
           random: true,
           size: true,
           speed: 2,
           straight: true
         },
         number: { density: { enable: true, area: 900 }, value: 100 },
         opacity: {
           random: true,
           value: 0.5
         },
         shape: {
           type: "character",
           character: {
             "value": ["История серии ФФ", "Атака титанов", "Харуха и депрессия", "Фильмы Кубрика", "Поиски немо в картинках", "Бегущий в лабиринте", "Ланнестеры из книг", "Аниме 90х", "Гарри Поттер", "Ересь хоруса", "История примархов", "Мой кампейн на Зендрике", "Как избежать цикла страданий", "ЗВ"],
             "font": "Gymkhana",
             "style": "",
             "weight": ""
           }
         },
         size: {
           random: true,
           value: 10
         }
       },
       detectRetina: true
     }
     );
 }
 else {
   $("#tsparticles")
     .particles()
     .init(
       options={
       backgroundMode: {
         enable: false,
         zIndex: -100
       },
       background: {
         color: "#000"
       },
       fpsLimit: 30,
       interactivity: {
         detectsOn: "window",
         events: {
           onClick: { enable: false, mode: "grab" },
           onHover: {
             enable: false,
             mode: "bubble",
             parallax: { enable: false, force: 2, smooth: 10 }
           },
           resize: true
         },
         modes: {
           bubble: {
             distance: 100,
             duration: 0.5,
             opacity: 100,
             size: 20,
             speed: 3
           },
           grab: { distance: 400, line_linked: { opacity: 0.5 } },
           push: { particles_nb: 4 },
           remove: { particles_nb: 2 },
           repulse: { distance: 200, duration: 0.4 }
         }
       },
       particles: {
         color: { value: "#fff" },
         links: {
           color: "#fff",
           distance: 100,
           enable: true,
           opacity: 0.4,
           width: 2
         },
         move: {
           attract: { enable: false, rotateX: 600, rotateY: 1200 },
           direction: "none",
           enable: true,
           outMode: "out",
           random: true,
           size: true,
           speed: 2,
           straight: true
         },
         number: { density: { enable: true, area: 900 }, value: 100 },
         opacity: {
           random: true,
           value: 0.5
         },
         shape: {
           type: "character",
           character: {
             "value": ["История серии ФФ", "Атака титанов", "Харуха и депрессия", "Фильмы Кубрика", "Поиски немо в картинках", "Бегущий в лабиринте", "Ланнестеры из книг", "Аниме 90х", "Гарри Поттер", "Ересь хоруса", "История примархов", "Мой кампейн на Зендрике", "Как избежать цикла страданий", "ЗВ"],
             "font": "Gymkhana",
             "style": "",
             "weight": ""
           }
         },
         size: {
           random: true,
           value: 10
         }
       },
       detectRetina: true
     }
     );
 }
});

$( function() {
  $( " #drag-me " ).draggable({ containment: "parent" });
} );

var textArray = ["297",">2K",">1K"];
var index = 0;
setInterval(function(){
  $("#numbers").animate({

  },function()
  {
    if(textArray.length > index) {
      $(this).text(textArray[index]).animate({opacity:1})
      index++;
    }
    else
    index = 0;
  });
},4000);

$( function() {
$.fn.extend({
 airport: function(array) {

  var self = $(this);
  var chars = ['а','б','в','г','д','е','ж','й','з','и','к','л','м','н','о','п','р','с','т','у','ф','х','ц','щ','э','ю','я','-', ''];
  var longest = 0;
  var items = items2 = array.length;

  function pad(a,b) { return a + new Array(b - a.length + 1).join(' '); }

  $(this).empty();

  while(items--)
    if(array[items].length > longest) longest = array[items].length; //ячейки

  while(items2--)
    array[items2] = pad(array[items2],longest);

  spans = longest;
  while(spans--)
    $(this).prepend("<span class='c" + spans + "'></span>");

  function testChar(a,b,c,d){
    if(c >= array.length)
      setTimeout(function() { testChar(0,0,0,0); }, 1000);
    else if(d >= longest)
      setTimeout(function() { testChar(0,0,c+1,0); }, 1000); //следующее слово
    else {
      $(self).find('.c'+a).html((chars[b]=="")?"":chars[b]);
      setTimeout(function() {
        if(b > chars.length)
          testChar(a+1,0,c,d+1);
        else if(chars[b] != array[c].substring(d,d+1).toLowerCase())
          testChar(a,b+1,c,d); //перебор
        else
          testChar(a+1,0,c,d+1); //новый спан
      }, 20);
    }
  }
  testChar(0,0,0,0);
    }
  });

  $('.test').airport([ 'таймлайнов', 'тайтлов', 'фанатов']);

});


  setTimeout(function () {
    $(".cards_clone").addClass("anim");
  }, 1999)

  $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function() {
      if ($('.commentary').isInViewport()) {
          $(".commentary").addClass('comment-animate');
      } else {
          $(".commentary").removeClass('comment-animate');
      }
  });

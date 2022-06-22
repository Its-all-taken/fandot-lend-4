// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// starting from v2 you can add only the features you need reducing the bundle size
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
    },
      function (container) {
        // container is the particles container where you can play/pause or stop/start.
        // the container is already started, you don't need to start it manually.
      }
    );
});

$( function() {
  $( " #drag-me " ).draggable({ containment: "parent" });
} );

$(function loopim() {
  		$(".pupa").animate({ "margin-top": "-300%" }, 4000, 'linear', 'loop');
      $( ".pupa" ).clone().appendTo(".loopa");
    });

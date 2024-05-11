var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#two",
    start: "0% 95%",
    end: "70% 40%",
    scrub: true,
  },
});

tl.to(
  "#fanta",
  {
    width: "40%",
    top: "130%",
    left: "0%",
  },
  "orange"
);

tl.to(
  "#orange-cut",
  {
    top: "148%",
    left: "5%",
  },
  "orange"
);

tl.to(
  "#orange",
  {
    width: "17%",
    top: "169%",
    left: "80%",
  },
  "orange"
);

tl.to(
  "#leaf",
  {
    top: "120%",
    rotate: "130deg",
    left: "85%",
    zIndex: 1,
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#three",
    start: "0% 95%",
    end: "70% 40%",
    scrub: true,
  },
});


tl2.from(
  "#pepsi",
  { opacity: 0,
    y: 180, 
    ease: "power1.out", 
    duration: 1 },
  "ca"
);
tl2.from("#iceCube", { 
  opacity: 0, 
  y: -30, 
  duration: 1 
}, "ca");

tl2.from(
  "#sprite",
  { opacity: 0,
     y: 180, 
     ease: "power1.out",
      duration: 1 },
  "ca"
);
tl2.from("#lemon", { opacity: 0, y: -30, duration: 1 }, "ca");

tl2.to(
  "#orange-cut",
  {
    width: "18%",
    left: "41%",
    top: "200%",
  },
  "ca"
);

tl2.to(
  "#fanta",
  {
    width: "33%",
    top: "213%",
    left: "34%",
  },
  "ca"
);

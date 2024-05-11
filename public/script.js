

var tl = gsap.timeline({
    scrollTrigger:{
      trigger: "#two",
      start: "0% 95%",
      end: "70% 40%",
      scrub: true,
    }
  });

tl.to("#fanta",{
         width:"40%",
        top: "130%",
        left: "0%"
    }, 'orange')
    
    tl.to("#orange-cut",{
    top:"148%",
    left: "5%"
}, 'orange')

tl.to("#orange",{
    width: "17%",
    top:"170%",
    left: "80%"
}, 'orange')

tl.to("#leaf",{
    top:"120%",
    rotate: "130deg",
    left: "90%",
    zIndex:1
}, 'orange')


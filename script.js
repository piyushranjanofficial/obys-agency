function locomotiveAnime(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#wraper"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wraper", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#wraper").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnime();


/* ------------------------ Loader Animation ------------------------------ */
function loaderanime(){
    
    let tl = gsap.timeline()
    
    tl.from(".line h1",{
        y:100,
        stagger:0.25,
        duration: 0.6,
        delay:0.3,
    })
    
    tl.from("#line1-part1",{
        opacity: 0,
        onStart: function(){
            const h5text = document.querySelector("#line1-part1 h5");
            let count = 0;
    
        setInterval(function(){
            if(count < 100){
                h5text.innerHTML = count++; 
            }else{
                h5text.innerHTML = count;
            }
       
         },30)
        }
    })
    
    tl.to(".line h2",{
        animationName: "anime",
        opacity: 1,
    })
    
    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        // delay: 4,
    })
    
    tl.from("#page1",{
        // delay: 0.2,
        y:1200,
        opacity:0,
        ease: Power4
    })
    tl.to("#loader",{
        display: "none"
    })
    tl.from("#nav, #nav-center",{
        y: 50,
        opacity: 0,
        duration: 0.35,
    })
    
    tl.from("#hero h2, #under-hero h3",{
        y:100,
        opacity: 0,
        stagger: 0.2,
    })
    
    }

    loaderanime();

/* ------------------------------ Cursor Animation---------------------------- */
// function cursorAnime(){
//         const cursor = document.querySelector("#cursor");
//         const wraper = document.querySelector("#wraper");
    
//         document.addEventListener("mousemove",function(event){
//             gsap.to(cursor,{
//                x: event.x,
//                y: event.y,
//                ease: "back.out"
//         })
//     })
//   }

//   cursorAnime();

  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });





/* ------------------------------ flags Animation---------------------------- */
function flagAnime(){
    const flags = document.querySelector("#flags");
    const wraper = document.querySelector("#wraper");
    const h3txt = document.querySelector("#under-hero");

    wraper.addEventListener("mousemove",function(event){
        gsap.to(flags,{
           x: event.x,
           y: event.y,
           ease: "back.out"
        })
    })

    h3txt.addEventListener("mouseenter", function(){
        gsap.to(flags,{
            opacity: 1,
        })
    })

    h3txt.addEventListener("mouseleave", function(){
        gsap.to(flags,{
            opacity: 0,
        })
    })
}
flagAnime();


/*---------------- Video animation ------------------- */

function videoContainerEffect() {

  let videoCursor = document.querySelector("#play-button");
  let videoContainer = document.querySelector("#elem-feature-sec2");


  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(videoCursor, {
        x: dets.x - 1000,
        y: dets.y - 100,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(videoCursor, {
      top: "10%",
    });
  });
  let flag = 0;
  videoContainer.addEventListener("click", function () {
    let video = document.querySelector(".videoContainer video");
    let img = document.querySelector(".videoContainer img");
   

    if (flag == 0) {
      video.play();
      img.style.opacity = "0";
      document.querySelector(
        videoCursor
      ).innerHTML = `<i class="ri-pause-mini-fill"></i>`;
      gsap.to(videoCursor,{
        scale : '0.6'
      })
      flag = 1;
    }else{
      video.pause();
      img.style.opacity = "1";
      document.querySelector(
        videoCursor
      ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
      gsap.to(videoCursor,{
        scale : '1'
      })

      flag = 0;
    }
  });
}
videoContainerEffect();

   /* --------------------- Magnet Effect ---------------- */
function magnetEffect(){
    Shery.makeMagnet(".menu-opener__square, #right-nav a", {
        ease: "cubic-bezier(0.25, 1, 0.35, 1)",
      });
}
magnetEffect();


/* ---------------- Gooey Effect 1-------------------- */

function gooeyAnimation(){
    Shery.imageEffect("#img-container-gooey1", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.8,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.831661333563954},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.43,"range":[0,2]},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        debug: false,
        gooey: true,
      });
}
gooeyAnimation();
    

/*----------------- Gooey Effect 2 ------------------- */

function gooeyAnimation2(){
    Shery.imageEffect("#img-container-gooey2", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8316527143581938},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        debug: false,
        gooey: true,
    });
}
gooeyAnimation2();

/*----------------- Gooey Effect 3 ------------------- */

function gooeyAnimation3(){
    Shery.imageEffect("#img-container-gooey3", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8316527143581938},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        debug: false,
        gooey: true,
    });
}
gooeyAnimation3();

/*----------------- Gooey Effect 4 ------------------- */

function gooeyAnimation4(){
    Shery.imageEffect("#img-container-gooey4", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8316527143581938},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        debug: false,
        gooey: true,
    });
}
gooeyAnimation4();


/*----------------- Gooey Effect 5 ------------------- */

function gooeyAnimation5(){
    Shery.imageEffect("#img-container-gooey5", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8316527143581938},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        debug: false,
        gooey: true,
    });
}
gooeyAnimation5();


/*----------------- Gooey Effect 6 ------------------- */

function gooeyAnimation6(){
    Shery.imageEffect("#img-container-gooey6", {
        style: 6,
        config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.8316527143581938},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        debug: false,
        gooey: true,
    });
}
gooeyAnimation6();


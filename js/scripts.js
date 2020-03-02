gsap.to('#cookie',{
    rotation:1080,
    duration:14,
    repeat:-1
});
gsap.to('#donut',{
    rotation:720,
    duration:20,
    repeat:-1
});
gsap.fromTo('#loli',{x:0,y:0},{
    x:0,
    y:10,
    repeat:-1,
    yoyo:true,

});
gsap.fromTo('#star',{x:0,y:0},
{
    x:-2,
    y:0,
    scale:-.1,
    repeat:-1,
    yoyo:true,
    opacity:1,
    delay:1,
    duration:6,
    
});
gsap.fromTo('#star1',{x:0,y:0},
{
    x:2,
    y:2,
    scale:1,
    repeat:-1,
    yoyo:true,
    opacity:0,
    delay:5,
    duration:1
    
});
gsap.fromTo('#star2',{x:0,y:0},
{
    x:2,
    y:0,
    scale:-.5,
    repeat:-1,
    yoyo:true,
    opacity:.8,
    delay:2,
    duration:2
    
});

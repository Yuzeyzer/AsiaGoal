let scene = document.getElementById('scenee');
let parallax = new Parallax(scene);
let bg = document.querySelector('.juice')
TweenMax.from(".black-block",1.5,{
    delay:2,
    top:"100%",
    ease: Expo.easeInOut
})
TweenMax.staggerFrom('.hero__content_text h1 span',0.6,{
    delay:0.6,
    opacity:0,
    y:40,
},0.4)
TweenMax.to('.hero__content_text h1',1,{
    delay:2.2,
    color:"#fff"
})
TweenMax.from(".leaves .layer:nth-child(1)", 2,{
    delay:2,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})
TweenMax.from(".leaves .layer:nth-child(2)", 2,{
    delay:2.1,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(3)", 2,{
    delay:2.2,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(4)", 2,{
    delay:2.3,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(5)", 2,{
    delay:2.5,
    opacity:0,
    y:-800,
    ease:Expo.easeInOut
})
const kidPlayer = ()=> {
    let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("./src/images/kid3.jpg");
img.width = window.innerWidth;
img.height = window.innerHeight;
app.stage.addChild(img);

let dethmap = new PIXI.Sprite.from("./src/images/kid3-map.jpg");
dethmap.width = window.innerWidth;
dethmap.height = window.innerHeight;
app.stage.addChild(dethmap);

let displacementFilter = new PIXI.filters.DisplacementFilter(dethmap);
app.stage.filters = [displacementFilter];
window.onmousemove = function(e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 120;
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 120;
};
}
setTimeout(kidPlayer,5000)
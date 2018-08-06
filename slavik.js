function movingNav() {
    const buttons = document.querySelectorAll('.button-clear');
    const nav = document.querySelector('nav');
    const highlightedSpan = document.createElement('span');
    highlightedSpan.classList.add('moving-link');
    document.body.appendChild(highlightedSpan);

    const startingTop = nav.getBoundingClientRect().top;
    const startingLeft = nav.getBoundingClientRect().left;

    highlightedSpan.style.top = `${startingTop}px`;
    // highlightedSpan.style.left = `${startingLeft}px`;

    function movingEffect() {
        const coords = this.getBoundingClientRect();
        console.log(coords);
        const coordsObj = {
            width: coords.width,
            height: coords.height,
            top: coords.top,
            left: coords.left
        }
        highlightedSpan.style.width = `${coordsObj.width}px`;
        highlightedSpan.style.height = `${coordsObj.height}px`;
        highlightedSpan.style.transform = `translate(${coordsObj.left}px, 0px`;

    }
    buttons.forEach(e => e.addEventListener('mouseenter', movingEffect));

}


function movingBg(){
    const cosmosBg = document.querySelector('.intro');

    function bgAnimate(e) {
        let {
            offsetX: x,
            offsetY: y
        } = e;
        if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }
        const xmove = (x * 0.002) + 50;
        const ymove = (y * 0.008) + 50;
        console.log(xmove);
        cosmosBg.style.backgroundPosition = `${xmove}% ${ymove}%`
    }
    cosmosBg.addEventListener('mousemove', bgAnimate, false);
}












movingBg();
movingNav();

// const walk=400;
// const intro= document.querySelector('.intro');
// const cat= document.querySelector('.cat');

// function catRotate(e){
//   const {offsetWidth:width, offsetHeight:height} = intro;
//   let {offsetY:y, offsetX:x} = e;

//   let wide= width/2;
//   let heit=height/2;
//   if (this !== e.target ) {
//     x = x + (e.target.offsetLeft - 20);
//       y = y + e.target.offsetTop + 26;
//   }
//     var centrox= x-wide;
//   var centroy=heit-y;
//   x = Math.round((centroy * 0.06)+10);
//   y =Math.round ((centrox * 0.06));
//   // width 800 height 400
//   // top left x10 y-10 bottom right x-10 y10
//   const xWalk = Math.round((x / width * walk) - (walk / 2));
//   const yWalk = Math.round((y / height * walk) - (walk / 2));
//   cat.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
// }


// intro.addEventListener('mousemove',catRotate,true);
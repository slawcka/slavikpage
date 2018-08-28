var xmovebg;
var ymovebg;
var catOpacity = 1;
var catSize = 50;
//justImagesArr[0][0].downsized.url
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

function movingBg() {
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
        xmovebg = xmove;
        console.log(xmove);
        cosmosBg.style.backgroundPosition = `${xmovebg}% ${ymovebg}px`
    }
    cosmosBg.addEventListener('mousemove', bgAnimate, false);
}

window.addEventListener('scroll', function (ev) {
    var layer, movement, topDistance, speed, catlayer;
    catlayer = document.querySelector('.layer3');
    topDistance = this.pageYOffset;
    catOpacity -= 0.1;
    catSize -= 8;
    catlayer.style.opacity = catOpacity;
    catlayer.style.backgroundSize = `${catSize}%`;
    layer = document.querySelectorAll('[data-speed]');
    layer.forEach(lay => {
        speed = lay.getAttribute('data-speed');
        movement = -(topDistance / speed);
        ymovebg = movement;
        lay.style.transform = `translateY(${movement}px)`;

    })
})

function Giphy(ev) {
    ev.preventDefault();
    var GiphyHost, GiphyTrending, GiphyApiKey, url,secondRow,formInput,
        imageDiv, searchValue, gifsContainer, GiphySearch, searchurl,gifcol;
    console.log(ev)
    searchValue = document.querySelector('.searchgif').value;
    gifsContainer = document.querySelector('.container-gifs');
    secondRow= document.querySelector('.container-gifs');
    GiphyHost = 'http://api.giphy.com';
    GiphyTrending = '/v1/gifs/trending?';
    GiphySearch = '/v1/gifs/search?q=' + searchValue;
    GiphyApiKey = '&api_key=fJiNOIqTsyA5YZZRQFss1cfh5FTLYPKQ&limit=20';
    var gifArr=[];
    url = GiphyHost + GiphyTrending + GiphyApiKey;
    searchurl = GiphyHost + GiphySearch + GiphyApiKey;
    image = document.querySelector('.giphyimage');
    secondRow.innerHTML="";

    fetch(searchurl)
        .then(data => data.json())
        .then(res => {res.data.forEach(i => {gifArr.push(i.images.fixed_width_downsampled.url)})})
        
   function chunkinator(){  
    gifcol=document.querySelectorAll('.gifcol');
    var tempArray = [];
    var chunkCount = Math.ceil(gifArr.length/5);
    for(var i = 0; i < chunkCount; i++){
        tempArray.push(gifArr.splice(0, 5))
    }
    //console.log(tempArray)
    tempArray.forEach(e=> {
        var newColumn= document.createElement('div');
            newColumn.classList.add('col-3','gifcol');
            secondRow.appendChild(newColumn);
            e.forEach(c=>{
                var imgSrc=c;
                var newimg = document.createElement('img');
                newimg.classList.add('giphys');
                newimg.setAttribute('src',imgSrc);
                newColumn.appendChild(newimg);
            })
    }); 
    
    if (tempArray.length>1){
        tempArray=[];
        gifArr=[];
    }
   }
   setTimeout(chunkinator,800);
}; //giphy funcio

function gifTrending(ev){
    ev.preventDefault();
    var GiphyHost, GiphyTrending, GiphyApiKey, url,secondRow,formInput,
        imageDiv, searchValue, gifsContainer, GiphySearch, searchurl,gifcol;
    console.log(ev)
    searchValue = document.querySelector('.searchgif').value;
    gifsContainer = document.querySelector('.container-gifs');
    secondRow= document.querySelector('.container-gifs');
    GiphyHost = 'http://api.giphy.com';
    GiphyTrending = '/v1/gifs/trending?';
    GiphySearch = '/v1/gifs/search?q=' + searchValue;
    GiphyApiKey = '&api_key=fJiNOIqTsyA5YZZRQFss1cfh5FTLYPKQ&limit=20';
    var gifArr=[];
    url = GiphyHost + GiphyTrending + GiphyApiKey;
    searchurl = GiphyHost + GiphySearch + GiphyApiKey;
    image = document.querySelector('.giphyimage');
    secondRow.innerHTML="";

    fetch(url)
        .then(data => data.json())
        .then(res => {res.data.forEach(i => {gifArr.push(i.images.fixed_width_downsampled.url)})})
        
   function chunkinator(){  
    gifcol=document.querySelectorAll('.gifcol');
    var tempArray = [];
    var chunkCount = Math.ceil(gifArr.length/5);
    for(var i = 0; i < chunkCount; i++){
        tempArray.push(gifArr.splice(0, 5))
    }
    //console.log(tempArray)
    tempArray.forEach(e=> {
        var newColumn= document.createElement('div');
            newColumn.classList.add('col-3','gifcol');
            secondRow.appendChild(newColumn);
            e.forEach(c=>{
                var imgSrc=c;
                var newimg = document.createElement('img');
                newimg.classList.add('giphys');
                newimg.setAttribute('src',imgSrc);
                newColumn.appendChild(newimg);
            })
    }); 
    
    if (tempArray.length>1){
        tempArray=[];
        gifArr=[];
    }
   }
   setTimeout(chunkinator,800);
}

function liveNav(){
    
    const nav= document.querySelector('#main-nav');
    const topOfNav= nav.offsetTop;
    window.addEventListener('scroll',fixNav);
    function fixNav() {
        
        if (window.scrollY >= 200){
            document.body.classList.add('fixed-nav');
            
        }
        else {
            document.body.classList.remove('fixed-nav');
        }
    }

}

function pomodoro(){
    var workInput = document.querySelector('.workinput');
        var breakInput = document.querySelector('.breakinput');
        var startButton = document.querySelector('.start');
        var resetButton= document.querySelector('.reset');
        var incrementButtons = document.querySelectorAll('.increments');
        var timerContainerDiv=document.querySelector('.timer-wrap');
        var timerDiv = document.querySelector('.display');
        var sessionTypeDiv=document.querySelector('.sessiontype');
        var audio = new Audio('alarm.mp3');
        var iswork = true;
        let interval;
        timerDiv.textContent = '25:00';

        function timer() {
            clearInterval(interval);
            sessionTypeDiv.textContent='work that ass';
            var workSeconds = workInput.value * 60;
            var breakSeconds = breakInput.value * 60;
            let duration;
            iswork ? duration = workSeconds : duration = breakSeconds;
            var now = Date.now();
            var then = now + duration * 1000;
            interval = setInterval(() => {
                var remainingtime = Math.round((then - Date.now()) / 1000);
                transformDisplay(remainingtime);
                if (remainingtime <= 0) {
                    clearInterval(interval);
                    iswork = !iswork;
                    timer();
                    sessionTriggers();
                }
            }, 1000);
        }
        //countdown with date(), display time to html
        function transformDisplay(seconds) {
            var remainingMinutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;
            const display =
                `${remainingMinutes<10 ? '0' : ''}${remainingMinutes}:${remainingSeconds < 10 ? '0' : '' }${remainingSeconds}`;
            document.title = display + ' time iki ' + `${iswork ? 'pirikuro' : 'paxalkos' }`;
            timerDiv.textContent = display;
        }
        function resetTimer(){
            clearInterval(interval);
            timerDiv.textContent= workInput.value + ':00';
            timerContainerDiv.classList.remove('work-session');
            timerContainerDiv.classList.remove('break-session');
            sessionTypeDiv.textContent="Let's do some work bitch";
        }
        function sessionTriggers() {
            audio.play();
            if (iswork) {
                timerContainerDiv.classList.add('work-session');
                timerContainerDiv.classList.remove('break-session');
                sessionTypeDiv.textContent='work that ass';
            }
            else {
                timerContainerDiv.classList.remove('work-session');
                timerContainerDiv.classList.add('break-session');
                sessionTypeDiv.textContent='rest that ass';
            }
        }
        //updates plus minus input values
        function updateVals() {
            let exp = this.getAttribute("name");
            switch (exp) {
                case 'pluswork':
                    workInput.value++
                        break;
                case 'minuswork':
                    workInput.value--
                        break;
                case 'plusbreak':
                    breakInput.value++
                        break;
                case 'minusbreak':
                    breakInput.value--
            }
        }
        //event listeners
        startButton.addEventListener('click', timer);
        resetButton.addEventListener('click',resetTimer);
        workInput.addEventListener('change', (ev => {
            workInput.value = ev.target.value;
            timerDiv.textContent = ev.target.value + ':00'
        }))
        breakInput.addEventListener('change', (ev => {
            breakInput.value = ev.target.value;
        }))
        incrementButtons.forEach(e => {
            e.addEventListener('click', updateVals)
        })
}
liveNav();
pomodoro();


const inputGif = document.querySelector('.gifform');
const buttonGif=document.querySelector('.trending');
buttonGif.addEventListener('click',gifTrending);
inputGif.addEventListener('submit', Giphy);           
// movingNav();  



/* 


*/



        // for(i=0;i<justImagesArr.length;i++){
        //     var newColumn= document.createElement('div');
        //     newColumn.classList.add('.col-4');
        //     secondRow.appendChild(newColumn);
        //     console.log('justImagesArr[i]'+justImagesArr[i].length)
           
        // }
    //justImagesArr[0][0].downsized.url
           
            /* gifarr.push(...res.data) */ 
            // gifArr.forEach(ez => {
            //     var newColumn= document.createElement('div');
            //     newColumn.classList.add('.col-4');
            //     secondRow.appendChild(newColumn);
            //     ez.forEach(inner=> {
            //         var imageInArray=inner.data[i].images.downsized_medium.url;
            //         newColumn.appendChild(imageInArray)
            //     })
            // })
/* 
for (i = 0; i < res.data.length; i++) {
                var imageInArray=res.data[i].images.downsized_medium.url;
                var newimg = document.createElement('img');
                
                newimg.classList.add('giphys');
                newimg.setAttribute('src',imageInArray);
                gifsContainer.appendChild(newimg);

                
            }
function chunkArray(myArray, chunk_size){
    var results = [];
    
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

// Split in group of 3 items
var result = chunkArray([1,2,3,4,5,6,7,8], 3);
// Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]
console.log(result);


images.original.mp4
url

http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
https://api.giphy.com/v1/gifs/search?api_key=wOkuLOpg0lyr0TN1NMtr0qIAsJpFW7rn&q=
node.setAttribute("src", res.data[i].images.fixed_width.url);
        _tenGifs.appendChild(node);

.then(res => gifarr.push(...res.data));
http://api.giphy.com/v1/gifs/trending?&api_key=fJiNOIqTsyA5YZZRQFss1cfh5FTLYPKQ&limit=5

document.getElementById("gif~"+i);      
        node.setAttribute("src", res.data[i].images.fixed_width.url);
        _tenGifs.appendChild(node);


        const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

*/

// movingBg();


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
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
    //stop form from submitting
    var GiphyHost, GiphyTrending, GiphyApiKey, url,secondRow,
        imageDiv, searchValue, gifsContainer, GiphySearch, searchurl;
    searchValue = document.querySelector('.searchgif').value;
    gifsContainer = document.querySelector('.container-gifs');
    secondRow= document.querySelector('.second-row');
    GiphyHost = 'http://api.giphy.com';
    GiphyTrending = '/v1/gifs/trending?';
    GiphySearch = '/v1/gifs/search?q=' + searchValue;
    GiphyApiKey = '&api_key=fJiNOIqTsyA5YZZRQFss1cfh5FTLYPKQ&limit=20';
    var gifArr=[];
    url = GiphyHost + GiphyTrending + GiphyApiKey;
    searchurl = GiphyHost + GiphySearch + GiphyApiKey;
    image = document.querySelector('.giphyimage');

    fetch(searchurl)
        .then(data => data.json())
        .then(res => {res.data.forEach(i => {gifArr.push(i.images.fixed_width_downsampled.url)})})
        
   function chunkinator(){  
    
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
            console.log('e length '+e.length)
            e.forEach(c=>{
                var imgSrc=c;
                var newimg = document.createElement('img');
                newimg.classList.add('giphys');
                newimg.setAttribute('src',imgSrc);
                newColumn.appendChild(newimg);
            })
    });     
       
   }

   setTimeout(chunkinator,800);


}; //giphy funcio
        var samplearr= ['askme','doit','sayit']
        var samplearrtwo=samplearr.slice(0,2);
        var zosia;
        
        
        
        // for(i=0;i<justImagesArr.length;i++){
        //     var newColumn= document.createElement('div');
        //     newColumn.classList.add('.col-4');
        //     secondRow.appendChild(newColumn);
        //     console.log('justImagesArr[i]'+justImagesArr[i].length)
           
        // }
    //justImagesArr[0][0].downsized.url
           
            /* gifarr.push(...res.data) */ 

    var containerGifs = document.querySelector('.container-gifs');
    
    
   
    


    

/* 


*/
    
            
            
            
            // gifArr.forEach(ez => {
            //     var newColumn= document.createElement('div');
            //     newColumn.classList.add('.col-4');
            //     secondRow.appendChild(newColumn);
            //     ez.forEach(inner=> {
            //         var imageInArray=inner.data[i].images.downsized_medium.url;
            //         newColumn.appendChild(imageInArray)
            //     })
            // })

const inputGif = document.querySelector('.gifform');
inputGif.addEventListener('submit', Giphy);


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
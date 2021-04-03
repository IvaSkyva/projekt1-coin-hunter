// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


let w = screen.width;
let h = screen.height;
let panacek = document.getElementById('panacek');


document.onkeydown = detectKey;

function detectKey(e) {
    
    let posLeft = document.getElementById('panacek').offsetLeft;
    let posTop = document.getElementById('panacek').offsetTop;
       
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        if (posTop > 0) {
            panacek.style.top  = (posTop-10)+"px";
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if(posTop < h - 250) {
            panacek.style.top  = (posTop+10)+"px";
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
        if(posLeft > 0) {
            panacek.style.left  = (posLeft-10)+"px";
        }
    }
    else if (e.keyCode == '39') {
       // right arrow
        if(posLeft < w - 160) {
            panacek.style.left  = (posLeft+10)+"px";
        }
    }
    console.log(panacek);
}

let getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

let mince= document.querySelector('#mince');

// setInterval(() => {

   mince.style.left= getRandom(0, (w - 200))+'px'; //  Horizontally
   mince.style.top = getRandom(0, (h - 200))+'px'; //  Vertically
   console.log(mince); 
 // }, 6000); // every 6 seconds

 

 let r1 = panacek.getBoundingClientRect();
 console.log(r1.top, r1.right, r1.bottom, r1.left);

 let r2 = mince.getBoundingClientRect();
 console.log(r2.top, r2.right, r2.bottom, r2.left);



 let panacekSirka = panacek.width;
 let panacekVyska = panacek.height;
 let minceSirka = mince.width;
 let minceVyska = mince.height;
 
 let minceX = mince.style.left;
 let minceY = mince.style.top;
 
 let panacekX = panacek.style.left;
 let panacekY = panacek.style.top;

 console.log(panacekX);
 console.log(panacekY);
 


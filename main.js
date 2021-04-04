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
let mince= document.querySelector('#mince');
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;
let minceSirka = mince.width;
let minceVyska = mince.height;



document.onkeydown = detectKey;

function detectKey(e) {
    
    let posLeft = panacek.offsetLeft;
    let posTop = panacek.offsetTop;
       
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        if (posTop > 0) {
            panacek.style.top  = (posTop-50)+"px";

        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if(posTop < h - 250) {
            panacek.style.top  = (posTop+50)+"px";
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
        if(posLeft > 0) {
            panacek.style.left  = (posLeft-50)+"px";
        }
    }
    else if (e.keyCode == '39') {
       // right arrow
        if(posLeft < w - 160) {
            panacek.style.left  = (posLeft+50)+"px";
        }
    }

    detekujKolizi();
}

function detekujKolizi() {
    let panacekX = panacek.offsetLeft;
    let panacekY = panacek.offsetTop;
    let minceX = mince.offsetLeft;
    let minceY = mince.offsetTop;

    if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        // panacek a mince se prekryvaji
        console.log("kolize");
        cink();
    }

}

function cink() {    
    let audio = document.querySelector('#zvukmince');
    audio.play();
}

let getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);



setInterval(() => {

   mince.style.left= getRandom(0, (w - 200))+'px'; //  Horizontally
   mince.style.top = getRandom(0, (h - 200))+'px'; //  Vertically
   console.log(mince); 
  }, 3000); // every 3 seconds

 

 let r1 = panacek.getBoundingClientRect();
 console.log(r1.top, r1.right, r1.bottom, r1.left);

 let r2 = mince.getBoundingClientRect();
 console.log(r2.top, r2.right, r2.bottom, r2.left);



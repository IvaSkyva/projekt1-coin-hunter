// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program




let w = screen.width;
let h = screen.height;

document.onkeydown = detectKey;

function detectKey(e) {
    let posLeft = document.getElementById('panacek').offsetLeft;
    let posTop = document.getElementById('panacek').offsetTop;
    
    
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        if (posTop > 0) {
        document.getElementById('panacek').style.marginTop  = (posTop-58)+"px";
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        if(posTop < h - 250) {
        document.getElementById('panacek').style.marginTop  = (posTop+58)+"px";
        }
    }
    else if (e.keyCode == '37') {
       // left arrow
        if(posLeft > 0) {
        document.getElementById('panacek').style.marginLeft  = (posLeft-58)+"px";
        }
    }
    else if (e.keyCode == '39') {
       // right arrow
        if(posLeft < w - 160) {
        document.getElementById('panacek').style.marginLeft  = (posLeft+58)+"px";
        }
    }
}
  
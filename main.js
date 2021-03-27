// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


document.onkeydown = detectKey;
function detectKey(e) {
    var posLeft = document.getElementById('panacek').offsetLeft;
    var posTop = document.getElementById('panacek').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('panacek').style.marginTop  = (posTop-58)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById('panacek').style.marginTop  = (posTop+58)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById('panacek').style.marginLeft  = (posLeft-58)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById('panacek').style.marginLeft  = (posLeft+58)+"px";
    }
}
  
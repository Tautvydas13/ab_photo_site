/* ==================================================
   Filter Works
================================================== */

works_filter = function () {
    
    // Activate isotope with jQuery code:
    $('#projects').isotope({
        itemSelector: '.albums-item',
        layoutMode: 'fitRows'
    });
    // Isotope click function
    $('#iso-options ul li a').click(function(){
        $('#iso-options ul li a').removeClass('selected');
        $(this).addClass('selected');

        var selector = $(this).attr('data-option-value');
        $('#projects').isotope({
            filter: selector
        });
        return false;
    });
}

/* ==================================================
   Auto toggle Home background image
================================================== */

// current|previous image CLASS toggle
function toggleClass(picNo) {
    var activeElementId = "background-pic-" + picNo;
    
    var previousElement1 = (picNo == 0) ? images.length - 1 : picNo - 1;
    var previousElementId1 = "background-pic-" + previousElement1;
    var previousElement2 = (previousElement1 == 0) ? images.length - 1 : previousElement1 - 1;
    var previousElementId2 = "background-pic-" + previousElement2;
    var previousElement3 = (previousElement2 == 0) ? images.length - 1 : previousElement2 - 1;
    var previousElementId3 = "background-pic-" + previousElement3;
    
    //previous elements
    document.getElementById(previousElementId1).classList.remove();
    document.getElementById(previousElementId1).className = "fa fa-circle-o";
    document.getElementById(previousElementId2).classList.remove();
    document.getElementById(previousElementId2).className = "fa fa-circle-o";
    document.getElementById(previousElementId3).classList.remove();
    document.getElementById(previousElementId3).className = "fa fa-circle-o";
    
    //current element
    document.getElementById(activeElementId).classList.remove();
    document.getElementById(activeElementId).className = "fa fa-circle";
}

// IMAGE toggle
function displayImage(i) {
    document.getElementById("home-background").style.backgroundImage = images[i];
    toggleClass(i);
}

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("home-background").style.backgroundImage = images[x];
    toggleClass(x);
}

var images = [], x = -1;
images[0] = "url('images/header-pic1.jpg')";
images[1] = "url('images/header-pic2.jpg')";
images[2] = "url('images/header-pic3.jpg')";
images[3] = "url('images/header-pic4.jpg')";

// start|stop timer for auto toggle
var go = false;

function timer() {
    if(!go) {return;}
    displayNextImage();
    setTimeout(timer, 5000);
}

function stopTimer(){
    go = false;  
} 

function startTimer(){
    go = true;
    timer();
}



$(document).ready(function() {
    
    // pretty album display
    works_filter();
    
    // textarea tag auto size
    var tx = document.getElementsByTagName('textarea');
    for (var i = 0; i < tx.length; i++) {
      tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    }
    
});
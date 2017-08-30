var button = document.getElementById('click');
var counter = 0;


// Counter increment
button.onclick = function (){
    var span = document.gerElementById('count');
    counter = counter + 1;
    span.innerHtml = counter.toString();
    
};
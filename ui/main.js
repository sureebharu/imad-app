var button = document.getElementById('click');
var counter = 0;

// Counter increment
button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
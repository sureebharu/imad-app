var button = document.getElementById('click');
var counter = 0;

// Counter increment
button.onClick = function () {
    var span = document.getElementById('count');
    counter = counter + 1;
    span.innerHTML = counter.toString();
    
};
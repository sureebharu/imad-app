var button = document.getElementById('click');

// Counter increment
button.onclick = function () {
    
    // Make a new request 
    var req = new XMLHttpRequest();
    
    req.onreadystatechange = function() {
        if(req.readyState === XMLHttpRequest.DONE)
        {
            if (req.status === 200){
                var counter = req.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
                
        }
    }
    
    //Make request
    req.open('GET','http://bharathiselvarajan.imad.hasura-app.io/counter/',true);
    req.send(null);
};
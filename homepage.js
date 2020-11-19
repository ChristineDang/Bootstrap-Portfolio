
var images = [], x = -1;
    images[0] = "";
    images[1] = "";
    images{2} = "";

    function displayNextImage(){
        x = (x === images.length - 1) ? 0 : x + 1;
        document.getElementById("img").src = images[x];
    }

    function displayPrevImage(){
        x = ( x <= 0) ? images.length - 1 : x - 1;
        document.getElementById("img").src = images[x];
    }

    function startTimer() {
        setInterval;(displayNextImage, 3000);
    }

const imageName = "farm";
var counter = 0;
const imageCount = 9;

var images = new Array(imageCount + 1);
for( i = 0; i < images.length; i++){
    images[i] = imageName + i + ".jpg";
}

function switchImage() {
    let imageElement = document.getElementById("farmImage");
    imageElement.src = "../images/" + images[counter];
    counter++;
    if( counter == imageCount ) counter = 0;

}

function rotateImage(){
    document.getElementById("farmImage").src = "../images/" + images[imageCount-1];
    setInterval('switchImage()', 3000);
}

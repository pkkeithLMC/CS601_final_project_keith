const pianoImg = document.getElementById('piano');
const celloImg = document.getElementById('cello');
const tubaImg = document.getElementById('tuba');
const saxImg = document.getElementById('sax');
const accordionImg = document.getElementById('accordion');

pianoImg.addEventListener('click', function() {
    const pianoText = document.getElementById('piano_text');
    // Toggle the display of the extra text
    if (pianoText.style.display === 'none' ) {
        pianoText.style.display = 'block';
    } else {
        pianoText.style.display = 'none';
    } }
);


celloImg.addEventListener('click', function() {
    const celloText = document.getElementById('cello_text');
    // Toggle the display of the extra text
    if (celloText.style.display === 'none') {
        celloText.style.display = 'block';
    } else {
        celloText.style.display = 'none';
    }
}
 );


 tubaImg.addEventListener('click', function() {
    const tubaText = document.getElementById('tuba_text');
    // Toggle the display of the extra text
    if (tubaText.style.display === 'none') {
        tubaText.style.display = 'block';
    } else {
        tubaText.style.display = 'none';
    }
}
 );
 
saxImg.addEventListener('click', function() {
    const saxText = document.getElementById('sax_text');
    // Toggle the display of the extra text
    if (saxText.style.display === 'none') {
        saxText.style.display = 'block';
    } else {
        saxText.style.display = 'none';
    }
}
 );

 accordionImg.addEventListener('click', function() {
    const accordionText = document.getElementById('accordion_text');
    // Toggle the display of the extra text
    if (accordionText.style.display === 'none') {
        accordionText.style.display = 'block';
    } else {
        accordionText.style.display = 'none';
    }
}
 );
let =document.getElementById('song1');
let =document.getElementById('song2');
let =document.getElementById('song3');
let =document.getElementById('song4');
let =document.getElementById('song5');
let =document.getElementById('song6');
let =document.getElementById('song7');
let =document.getElementById('song8');
let =document.getElementById('song9');
let =document.getElementById('song10');
let can=0;

let btnMoneda=document.getElementById('moneda');
let cancion=document.getElementById("cancion");
let btnPlay=document.getElementById("play");
let nombre=document.getElementById("nom");
let artista=document.getElementById("art");


sonAir.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 1;
});

sonBossa.addEventListener("click", function () {
    alert('Seleccionaste la de  ');
    document.getElementById("img").src = "img/.png";
    can = 2;
});

sonBring.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 3;
});

sonBrutal.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 4;
});

sonHeart.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 5;
});

sonChan.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 6;
});

sonDonde.addEventListener("click", function () {
    alert('');
    document.getElementById("img").src = "img/.png";
    can = 7;
});

sonLove.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 8;
});

sonDueles.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 9;
});

sonFairytale.addEventListener("click", function () {
    alert('Seleccionaste la de ');
    document.getElementById("img").src = "img/.png";
    can = 10;
});



btnMoneda.addEventListener('click', function() {
    alert('Se ingresaron los creditos');
    switch (can){
        case 1:
            alert('Moneda ingresada! \nSe reproduce ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
           
        break;
        case 2:
            alert('Moneda ingresada! \nSe reproduce  ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay ></audio>';
            nombre.innerHTML="  ";
          
        break;
        case 3:
            alert('Moneda ingresada! \nSe reproduce  ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
            
        break;
        case 4:
            alert('Moneda ingresada! \nSe reproduce  ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
        
        break;
        case 5:
            alert('Moneda ingresada! \nSe reproduce  ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
        
        break;
        case 6:
            alert('Moneda ingresada! \nSe reproduce ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
     
        break;
        case 7:
            alert('Moneda ingresada! \nSe reproduce ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
         
        break;
        case 8:
            alert('Moneda ingresada! \nSe reproduce ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
     
        break;
        case 9:
            alert('Moneda ingresada! \nSe reproduce ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
    
        break;
        case 10:
            alert('Moneda ingresada! \nSe reproduce ')
            cancion.innerHTML = '<audio src="snd/.mp3" autoplay></audio>';
            nombre.innerHTML="";
       
        

        break;
    }
})
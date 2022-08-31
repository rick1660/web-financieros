window.addEventListener('scroll', function() {
    var animacion = document.getElementById('logo-t-blanco');
    var animacion2 = document.getElementById('tecnm-blanco');
    var animacion3 = document.getElementById('tec-cln');
    var animacion4 = document.getElementById('logo_cln');
    var posicionObj1 = animacion.getBoundingClientRect().top;
    var posicionObj2 = animacion2.getBoundingClientRect().top;
    var posicionObj3 = animacion3.getBoundingClientRect().top;
    var posicionObj4 = animacion4.getBoundingClientRect().top;

    if (window.innerWidth > 993) {
        if (window.innerWidth <= 2000) {
            if (posicionObj1 == 60) {
                animacion.style.animation = 'mover 1s ease-out';
                animacion4.style.animation = 'mover 1s ease-in';
                animacion.style.visibility = "visible";
                animacion2.style.visibility = "visible";
                animacion3.style.visibility = "visible";
                animacion4.style.visibility = "visible";
            } else if (posicionObj1 > 60) {
                animacion.style.visibility = "hidden";
                animacion2.style.visibility = "hidden";
                animacion3.style.visibility = "hidden";
                animacion4.style.visibility = "hidden";
            }
        } else if (window.innerWidth <= 2700) {
            $('.fb-page').css('data-width', '500');
            if (posicionObj1 == 80) {
                animacion.style.animation = 'mover 1s ease-out';
                animacion4.style.animation = 'mover 1s ease-in';
                animacion.style.visibility = "visible";
                animacion2.style.visibility = "visible";
                animacion3.style.visibility = "visible";
                animacion4.style.visibility = "visible";
            } else if (posicionObj1 > 80) {
                animacion.style.visibility = "hidden";
                animacion2.style.visibility = "hidden";
                animacion3.style.visibility = "hidden";
                animacion4.style.visibility = "hidden";
            }
        } else if (window.innerWidth <= 3500) {
            if (posicionObj1 == 81) {
                animacion.style.animation = 'mover 1s ease-out';
                animacion4.style.animation = 'mover 1s ease-in';
                animacion.style.visibility = "visible";
                animacion2.style.visibility = "visible";
                animacion3.style.visibility = "visible";
                animacion4.style.visibility = "visible";
            } else if (posicionObj1 > 81) {
                animacion.style.visibility = "hidden";
                animacion2.style.visibility = "hidden";
                animacion3.style.visibility = "hidden";
                animacion4.style.visibility = "hidden";
            }
        } else if (window.innerWidth <= 4200) {
            if (posicionObj1 == 85) {
                animacion.style.animation = 'mover 1s ease-out';
                animacion4.style.animation = 'mover 1s ease-in';
                animacion.style.visibility = "visible";
                animacion2.style.visibility = "visible";
                animacion3.style.visibility = "visible";
                animacion4.style.visibility = "visible";
            } else if (posicionObj1 > 85) {
                animacion.style.visibility = "hidden";
                animacion2.style.visibility = "hidden";
                animacion3.style.visibility = "hidden";
                animacion4.style.visibility = "hidden";
            }
        } else if (window.innerWidth <= 5600) {
            if (posicionObj1 == 125) {
                animacion.style.animation = 'mover 1s ease-out';
                animacion4.style.animation = 'mover 1s ease-in';
                animacion.style.visibility = "visible";
                animacion2.style.visibility = "visible";
                animacion3.style.visibility = "visible";
                animacion4.style.visibility = "visible";
            } else if (posicionObj1 > 125) {
                animacion.style.visibility = "hidden";
                animacion2.style.visibility = "hidden";
                animacion3.style.visibility = "hidden";
                animacion4.style.visibility = "hidden";
            }
        } else {
            if (posicionObj1 == 150) {
                animacion.style.animation = 'mover 1s ease-out';
                animacion4.style.animation = 'mover 1s ease-in';
                animacion.style.visibility = "visible";
                animacion2.style.visibility = "visible";
                animacion3.style.visibility = "visible";
                animacion4.style.visibility = "visible";
            } else if (posicionObj1 > 150) {
                animacion.style.visibility = "hidden";
                animacion2.style.visibility = "hidden";
                animacion3.style.visibility = "hidden";
                animacion4.style.visibility = "hidden";
            }
        }



    }
});
$(".boton-buscador").on('click', function() {
    var texto = document.getElementById('texto-buscador').value;
    window.location.replace("/?s=" + texto);
});

var input = document.getElementById('texto-buscador');
input.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        var texto = document.getElementById('texto-buscador').value;
        window.location.replace("/?s=" + texto);
    }
});
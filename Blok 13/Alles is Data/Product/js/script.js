// Coördinaten voor de driehoeken van het logo.
var driehoekenData = [
    { letter: 'a', x1: 250, y1: 0, x2: 250, y2: 120, x3: 190, y3: 60, cx: 228, cy: 60, tx: 222, ty: 65 },
    { letter: 'b', x1: 253, y1: 0, x2: 253, y2: 120, x3: 313, y3: 60, cx: 275, cy: 60, tx: 270, ty: 67 },
    { letter: 'c', x1: 128, y1: 122, x2: 248, y2: 122, x3: 188, y3: 62, cx: 188, cy: 100, tx: 183, ty: 105 }, 
    { letter: 'd', x1: 255, y1: 122, x2: 375, y2: 122, x3: 315, y3: 62, cx: 315, cy: 100, tx: 309, ty: 107 },
    { letter: 'e', x1: 128, y1: 125, x2: 248, y2: 125, x3: 188, y3: 185, cx: 188, cy: 147, tx: 182, ty: 152 },
    { letter: 'f', x1: 255, y1: 125, x2: 375, y2: 125, x3: 315, y3: 185, cx: 315, cy: 147, tx: 312, ty: 154 },
    { letter: 'g', x1: 123, y1: 127, x2: 123, y2: 247, x3: 63, y3: 187, cx: 101, cy: 187, tx: 95, ty: 191 }, 
    { letter: 'h', x1: 126, y1: 127, x2: 126, y2: 247, x3: 186, y3: 187, cx: 148, cy: 187, tx: 143, ty: 194 },
    { letter: 'i', x1: 377, y1: 127, x2: 377, y2: 247, x3: 317, y3: 187, cx: 355, cy: 187, tx: 352, ty: 194 },
    { letter: 'j', x1: 380, y1: 127, x2: 380, y2: 247, x3: 440, y3: 187, cx: 402, cy: 187, tx: 400, ty: 193 },
    { letter: 'k', x1: 1, y1: 249, x2: 121, y2: 249, x3: 61, y3: 189, cx: 61, cy: 227, tx: 56, ty: 234 }, 
    { letter: 'l', x1: 382, y1: 249, x2: 502, y2: 249, x3: 442, y3: 189, cx: 442, cy: 227, tx: 439, ty: 234 },
    { letter: 'm', x1: 1, y1: 252, x2: 121, y2: 252, x3: 61, y3: 312, cx: 61, cy: 274, tx: 53, ty: 280 },
    { letter: 'n', x1: 382, y1: 252, x2: 502, y2: 252, x3: 442, y3: 312, cx: 442, cy: 274, tx: 437, ty: 280 },
    { letter: 'o', x1: 123, y1: 254, x2: 123, y2: 374, x3: 63, y3: 314, cx: 101, cy: 314, tx: 95, ty: 319 },
    { letter: 'p', x1: 126, y1: 254, x2: 126, y2: 374, x3: 186, y3: 314, cx: 148, cy: 314, tx: 143, ty: 318 },
    { letter: 'q', x1: 250, y1: 254, x2: 250, y2: 374, x3: 190, y3: 314, cx: 228, cy: 314, tx: 222, ty: 318 },
    { letter: 'r', x1: 253, y1: 254, x2: 253, y2: 374, x3: 313, y3: 314, cx: 275, cy: 314, tx: 271, ty: 319 },
    { letter: 's', x1: 377, y1: 254, x2: 377, y2: 374, x3: 317, y3: 314, cx: 355, cy: 314, tx: 350, ty: 319 },
    { letter: 't', x1: 380, y1: 254, x2: 380, y2: 374, x3: 440, y3: 314, cx: 402, cy: 314, tx: 399, ty: 320 },
    { letter: 'u', x1: 128, y1: 376, x2: 248, y2: 376, x3: 188, y3: 316, cx: 188, cy: 354, tx: 182, ty: 360 }, 
    { letter: 'v', x1: 255, y1: 376, x2: 375, y2: 376, x3: 315, y3: 316, cx: 315, cy: 354, tx: 310, ty: 360 },
    { letter: 'w', x1: 128, y1: 379, x2: 248, y2: 379, x3: 188, y3: 439, cx: 188, cy: 401, tx: 181, ty: 407 },
    { letter: 'x', x1: 255, y1: 379, x2: 375, y2: 379, x3: 315, y3: 439, cx: 315, cy: 401, tx: 310, ty: 406 },
    { letter: 'y', x1: 250, y1: 381, x2: 250, y2: 501, x3: 190, y3: 441, cx: 228, cy: 441, tx: 223, ty: 446 },
    { letter: 'z', x1: 253, y1: 381, x2: 253, y2: 501, x3: 313, y3: 441, cx: 275, cy: 441, tx: 270, ty: 446 }
];

// Variabelen voor de letters.
var alfabet = 'abcdefghijklmnopqrstuvwxyz';
var splitAlfabet = alfabet.split('');
var lettersInNaam = 0;

// Variabelen voor de logo's.
var namen = ['criminalminds', 'davidrossi', 'aaronhotchner', 'derekmorgan', 'spencerreid', 'penelopegarcia', 'jenniferjareau', 'sannevanamsterdam'];
var kleurenCM = ['#d83232', '#ad1e2c', '#8e0325'],
    kleurenRossi = ['#2c2621', '#150f0c']
    kleurenHotchner = ['#3f3b35', '#1d1915'],
    kleurenMorgan = ['#5c564a', '#4a3a28'],
    kleurenReid = ['#e5e2e8', '#463a2f', '#231c18'],
    kleurenGarcia = ['#dfd4c4', '#cbae8c', '#2998b9'],
    kleurenJareau = ['#d1b899', '#7c6342', '#231b1b'],
    kleurenSanne = ['#a4ecff', '#70c3d9', '#3d9bb4', '#09728e'];

// Alle functies worden aangeroepen in de document.ready().
$(document).ready(function() {
    maakLogo('#CMlogo', 500, 500, kleurenCM, namen[0]);
    animateCmLogo();
    cmLogoKlik();
    naarNominates();
    naarMainCast();
    terugNaarMenu();
}); 

// Functie om het logo te maken.
function maakLogo(container, breedte, hoogte, kleuren, naam) {
    // Doorloop het alfabet en stop nullen in een nieuwe array.
    var aantalLetters = [];
    for(var i = 0; i < splitAlfabet.length; i++) {
        aantalLetters.push(0);
    }

    // Variabelen voor de namen.
    var name = naam;
    var nameArray = name.split('');

    // Verander de nullen in de array in het aantal letters dat in de naam voorkomt.
    for(var i = 0; i < nameArray.length; i++) {
        var placeInAlpha = splitAlfabet.indexOf(nameArray[i]);
        aantalLetters[placeInAlpha]++; 
    }

    // Variabelen voor de breedte en hoogte van het 'canvas'.
    var w = breedte;
    var h = hoogte;

    // Selecteer de div waarin het logo gemaakt moet worden.
    var svg = d3.select(container)
        .append('svg')
        .attr('width', w)
        .attr('height', h);

        $(svg.node()).get(0).setAttribute('viewBox', '0 0 502 502');

    // Teken de driehoeken van het logo.
    var svg_enter = svg.selectAll('path')
        .data(driehoekenData)
        .enter();

    // Zorg ervoor dat 'path', 'circle' en 'text' worden opgeslagen in een 'g' (group).
    var svg_g = svg_enter.append('g');
        svg_g.append('path')
            .attr('d', function(d) {
                return 'M ' + d.x1 + ' ' + d.y1 + ' L ' + d.x2 + ' ' + d.y2 + ' L ' + d.x3 + ' ' + d.y3;
            })
            .style('fill', function(d, i) {
                lettersInNaam = aantalLetters[i];
                if(lettersInNaam == 1) return kleuren[0];
                if(lettersInNaam == 2) return kleuren[1];
                if(lettersInNaam == 3) return kleuren[2];
                if(lettersInNaam == 4) return kleuren[3];
                else return '#6e7274';
            })
            .on('mouseover', function(){
                // Parent = 'g' (group) element, children zijn 'path', 'circle' en 'text'.
                $(this).parent().children("circle, text").show();
            })
            .on('mouseout', function(){
                $(this).parent().children("circle, text").hide();
            });

        // Teken de cirkels voor het mouseover effect.
        svg_g.append('circle')
            .attr('cx', function(d) { return d.cx; })
            .attr('cy', function(d) { return d.cy; })
            .attr('r', '15')
            .on('mouseover', function(){
                $(this).parent().children("circle, text").show();
            })
            .on('mouseout', function(){
                $(this).parent().children("circle, text").hide();
            });

        // Maak de tekst voor het mouseover effect.
        svg_g.append('text')
            .text(function(d) { return d.letter; })
            .attr('x', function(d) { return d.tx; })
            .attr('y', function(d) { return d.ty; })
            .on('mouseover', function(){
                $(this).parent().children('circle, text').show();
            })
            .on('mouseout', function(){
                $(this).parent().children('circle, text').hide();
            });
}

// Functie om het CM logo te animeren (fadeIn() & animate()).
function animateCmLogo() {
    $('#CMlogo').delay(500).fadeIn(1500);

    $('#CMlogo').animate({
        marginTop: 50
    }, 800);

    $('#CMlogoText').delay(2100).fadeIn(1500);
}

// Klik functie om vanaf het logo naar het volgende scherm te gaan.
function cmLogoKlik() {
    $('#CMlogo g').click(function() {
        $('#CMlogoText').fadeOut(750);

        $('#achtergrond').delay(750).animate({ 
            width: 1100 
        }, 1500);

        $('svg').delay(750).animate({ 
            width: 250, 
            height: 250 
        }, 1500);

        $('#CMlogo').delay(750).animate({ 
            width: 250, 
            height: 250, 
            marginTop: 25, 
            marginLeft: 25 
        }, 1500);

        $('#intro').delay(1500).fadeIn(1500);
        $('#vlak1').delay(2000).fadeIn(1000);
        $('#vlak2').delay(2500).fadeIn(1000);
        $('#vlak3').delay(3000).fadeIn(1000);
    });
}

// Functie die ervoor zorgt dat je de nominaties & wins te zien krijgt.
function naarNominates() {
    $('#vlak1').click(function() {
        $('#deel1').fadeOut(1000);
        $('#deel2').delay(1000).fadeIn(1500);
        $('#terugKnop').delay(1000).fadeIn(1500);
    });
}

// Klik functie die alle logo's van de personages in een nieuw scherm zichtbaar maakt.
function naarMainCast() {
    var kliks = 0;

    $('#vlak3').click(function() {
        kliks++;

        // Als er nog niet eerder op de button is geklikt worden de logo's aangemaakt en de animaties uitgevoerd.
        if(kliks <= 1) {
            $('#deel1').fadeOut(1000);

            maakLogo('#CMlogo2', 250, 250, kleurenCM, namen[0]);
            maakLogo('#logoRossi', 250, 250, kleurenRossi, namen[1]);
            maakLogo('#logoHotchner', 250, 250, kleurenHotchner, namen[2]);
            maakLogo('#logoMorgan', 250, 250, kleurenMorgan, namen[3]);
            maakLogo('#logoReid', 250, 250, kleurenReid, namen[4]);
            maakLogo('#logoGarcia', 250, 250, kleurenGarcia, namen[5]);
            maakLogo('#logoJareau', 250, 250, kleurenJareau, namen[6]);

            $('#deel3').delay(1000).fadeIn(1500);
            $('#terugKnop').delay(1000).fadeIn(1500);
            logosNaarMenu();
        }

        // Als er wel al op de button is geklikt, fade het geheel weer in.
        else {
            $('#deel1').fadeOut(1000);
            $('#deel3').fadeIn(1000);
            $('#deel4').fadeIn(1000);
            $('#namen').fadeIn(1000);
            $('#terugKnop').fadeIn(1000);
        }
        
    });
}

// Functie die ervoor zorgt dat je weer terug gaat naar het menu.
function terugNaarMenu() {
    $('#terugKnop').click(function() {
        $('#deel2').fadeOut(1000);
        $('#deel3').fadeOut(1000);
        $('#deel4').fadeOut(1000);
        $('#namen').fadeOut(1000);
        $('#terugKnop').fadeOut(1000);

        $('#deel1').delay(1000).fadeIn(1500);
    })
}

// Functie die alle logo's van de personages naar het menu onderin animeert.
function logosNaarMenu() {
    $('#logoRossi svg').delay(2500).animate({
        width: 110,
        height: 110
    }, 750);

    $('#logoRossi').delay(2500).animate({
        width: 110,
        height: 110,
        left: 40,
        bottom: 0
    }, 750);

    $('#logoJareau svg').delay(3250).animate({
        width: 110,
        height: 110
    }, 750);

    $('#logoJareau').delay(3250).animate({
        width: 110,
        height: 110,
        left: 940,
        bottom: 0
    }, 750);

    $('#logoHotchner svg').delay(4000).animate({
        width: 110,
        height: 110
    }, 750);

    $('#logoHotchner').delay(4000).animate({
        width: 110,
        height: 110,
        left: 220,
        bottom: 0
    }, 750);

    $('#logoGarcia svg').delay(4750).animate({
        width: 110,
        height: 110
    }, 750);

    $('#logoGarcia').delay(4750).animate({
        width: 110,
        height: 110,
        left: 760,
        bottom: 0
    }, 750);

    $('#logoMorgan svg').delay(5500).animate({
        width: 110,
        height: 110
    }, 750);

    $('#logoMorgan').delay(5500).animate({
        width: 110,
        height: 110,
        left: 400,
        bottom: 0
    }, 750);

    $('#logoReid svg').delay(6250).animate({
        width: 110,
        height: 110
    }, 750);

    $('#logoReid').delay(6250).animate({
        width: 110,
        height: 110,
        left: 580,
        bottom: 0
    }, 750);

    $('#CMlogo2').delay(7000).fadeOut(1000);
    $('#deel3').delay(7000).animate({
        height: 110,
        bottom: 30
    }, 500, logoShowData);

    $('#namen').delay(8000).fadeIn(1000);
    $('#deel4').delay(8000).fadeIn(1000);
}

// Functie voor het logo menu, bepaalt wanneer een logo actief is en er data getoond moet worden.
function logoShowData() {

    $('#logoRossi, #logoHotchner, #logoMorgan, #logoReid, #logoGarcia, #logoJareau').addClass('nietActiefLogo');
    $('#vlakLinks, #vlakRechts').show();

    $('#logoRossi, #logoHotchner, #logoMorgan, #logoReid, #logoGarcia, #logoJareau').click(function(){
        var count = $('.actiefLogo').length;
        console.log(count);

        if(count == 0) {
            $(this).removeClass('nietActiefLogo').addClass('actiefLogo').addClass('eersteActiefLogo');
            
            zetVlakData('#vlakLinks', this, false);
        }
        else if(count == 1) {
            // Als er één logo actief is en er nogmaals op wordt geklikt.
            if($(this).attr('id') == $('.eersteActiefLogo').attr('id')){
                $('.eersteActiefLogo')
                    .removeClass('eersteActiefLogo')
                    .addClass('nietActiefLogo')
                    .removeClass('actiefLogo');

                zetVlakData('#vlakLinks', this, true);
                zetVlakData('#vlakRechts', this, true);
                return;
            }
            $(this).removeClass('nietActiefLogo')
                .addClass('actiefLogo')
                .addClass('tweedeActiefLogo');
            
            zetVlakData('#vlakRechts', this, false);
        }

        // Als er al twee actieve logo's zijn:
        else {
            if($(this).attr('id') == $('.eersteActiefLogo').attr('id')){
                // Eerste logo wordt inactief gemaakt (als deze actief is en er nogmaals op wordt geklikt).
                $('.eersteActiefLogo')
                    .removeClass('eersteActiefLogo')
                    .removeClass('actiefLogo')
                    .addClass('nietActiefLogo');

                // Verander het tweede actieve logo in het eerste actieve logo.
                $('.tweedeActiefLogo')
                    .removeClass('tweedeActiefLogo')
                    .addClass('eersteActiefLogo');

                // Zet data van #vlakRechts in #vlakLinks
                $('#vlakLinks').html($('#vlakRechts').html());

                zetVlakData('#vlakRechts', this, true);
                return;
            }
            // Tweede logo wordt inactief gemaakt (als deze actief is en er nogmaals op wordt geklikt).
            else if($(this).attr('id') == $('.tweedeActiefLogo').attr('id')) {
                zetVlakData('#vlakRechts', this, true);
                
                $('.tweedeActiefLogo')
                    .removeClass('tweedeActiefLogo')
                    .removeClass('actiefLogo')
                    .addClass('nietActiefLogo');
                return;
            }

            $('.eersteActiefLogo')
                .removeClass('eersteActiefLogo')
                .removeClass('actiefLogo')
                .addClass('nietActiefLogo');

            $('#vlakLinks').html($('#vlakRechts').html());

            $('.tweedeActiefLogo')
                .removeClass('tweedeActiefLogo')
                .addClass('eersteActiefLogo');

            $(this).addClass('tweedeActiefLogo')
                .removeClass('nietActiefLogo')
                .addClass('actiefLogo');

            // Zet data die bij $(this) hoort in #vlakRechts
            zetVlakData('#vlakRechts', this);
        }
    });
}

// Functie die ervoor zorgt dat de juiste data wordt geladen voor de personages.
function zetVlakData(vlak, logoid, leegmaken){
    // Maakt het vlak leeg indien nodig.
    if(leegmaken == true) {
        $(vlak).html('')
        return;
    }

    console.log('ID van logoid is: ' + $(logoid).attr('id') + ' en vlak is: ' + vlak);

    // Laadt de juiste data.
    switch($(logoid).attr('id')){
        case 'logoRossi':
            $(vlak).html('<img src="img/dataRossi.png" />');
            break;
        case 'logoHotchner':
            $(vlak).html('<img src="img/dataHotch.png" />');
            break;
        case 'logoMorgan':
            $(vlak).html('<img src="img/dataMorgan.png" />');
            break;
        case 'logoReid':
            $(vlak).html('<img src="img/dataReid.png" />');
            break;
        case 'logoGarcia':
            $(vlak).html('<img src="img/dataGarcia.png" />');
            break;
        case 'logoJareau':
            $(vlak).html('<img src="img/dataJareau.png" />');
            break;
    }
}
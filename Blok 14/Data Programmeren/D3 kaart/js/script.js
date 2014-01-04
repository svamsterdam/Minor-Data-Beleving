$(document).ready(function(){
	// Hoogte en breedte variablen van het SVG element.
	var width = 600,
		height = 400;

	// Maak het SVG element aan en zet de hoogte en breedte.
	var svg = d3.select('#kaart').append('svg')
		.attr('width', width)
		.attr('height', height);

	// Maak een group aan.
	var group = svg.append('g');

	// Maak een platte kaart projectie.
	var projection = d3.geo.mercator()
						.scale(350)
			     		.translate([170, 630]);

	/* Selecteer het 'group' element, laadt alle data van de GeoJSON, per 'Feature' intern in het 'group' element.
	   Voeg een 'path' element toe aan het 'group' element en vul het attribuut 'd' van het 'path' element met de
	   coördinaten uit de GeoJSON dataset. */
	group.selectAll()
		 .data(geoJsonData.features)
			.enter()
				.append('path')
					.attr('d', d3.geo.path().projection(projection))
					.attr('fill', function(d){
						// Geef de landen een kleur gebaseerd op de data.
						if(d.fill == 1) return '#79cde0';
						if(d.fill == 2) return '#6ab2c3';
						if(d.fill == 3) return '#5a97a6';
						if(d.fill == 4) return '#4b7c88';
						if(d.fill == 5) return '#3b616b';
						else return '#45575b';
					});
});
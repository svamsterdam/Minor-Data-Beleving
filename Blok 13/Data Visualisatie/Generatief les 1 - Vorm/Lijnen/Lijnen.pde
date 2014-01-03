/* Schrijf de code in Processing waar je gebruik maakt van de volgende regels:
   * Gebruik alleen horizontale en verticale lijnen.
   * De lijnen lopen van rand tot rand met een vaste tussenruimte (zie afbeelding).
   * Maak gebruik van 9 kleuren die verdeeld zijn over 3 sets.
     * Set 1 rood, blauw en groen
     * Set 2 paars, oranje en turquoise
     * Set 3 lichtpaars, licht oranje, en licht turquoise
   * Rood is de eerste kleur, blauw de tweede en groen de derde kleur.
   * Paars, oranje en turquoise worden alleen verticaal gebruikt.
   * Licht paars, licht oranje en licht turquoise alleen horizontaal.

Set 1 - horizontaal & verticaal
Rood: 235, 51, 40 
Blauw: 53, 74, 154 
Groen: 87, 151, 46

Set 2 - verticaal 
Paars: 149, 123, 182
Oranje: 237, 123, 3
Turquoise: 87, 199, 199

Set 3 - horizontaal 
Lichtpaars: 201, 184, 217
Licht oranje: 249, 208, 171
Licht turquoise: 190, 216, 217 */

void setup() {
  size(870, 630);
  background(255);
  strokeWeight(10);
  noSmooth();
  
  int lijnAfstand = 120;
  
  // Set 2 - verticale lijnen.
  for(int i = 0; i < width; i++) {
    // Paarse lijnen.
    stroke(149, 123, 182);
    line((lijnAfstand*i)+35, 0, (lijnAfstand*i)+35, height);

    // Oranje lijnen.
    stroke(237, 123, 3);
    line((lijnAfstand*i)+75, 0, (lijnAfstand*i)+75, height);

    // Turqoise lijnen.
    stroke(87, 199, 199);
    line((lijnAfstand*i)+115, 0, (lijnAfstand*i)+115, height);   
  }
  
  // Set 1 - horizontale & verticale lijnen.
  for(int i = 0; i < 40; i++) {
    // Rode lijnen.
    stroke(235, 51, 40);
    line(0, (lijnAfstand*i)+15, width, (lijnAfstand*i)+15);
    line((lijnAfstand*i)+15, 0, (lijnAfstand*i)+15, height);
         
    // Blauwe lijnen.
    stroke(53, 74, 154);
    line(0, (lijnAfstand*i)+55, width, (lijnAfstand*i)+55);
    line((lijnAfstand*i)+55, 0, (lijnAfstand*i)+55, height);
    
    // Groene lijnen.
    stroke(87, 151, 46);
    line(0, (lijnAfstand*i)+95, width, (lijnAfstand*i)+95);
    line((lijnAfstand*i)+95, 0, (lijnAfstand*i)+95, height);
  }
  
  // Set 3 - horizontale lijnen.
  for(int i = 0; i < height; i++) {
    // Lichtpaarse lijnen.
    stroke(201, 184, 217);
    line(0, (lijnAfstand*i)+35, width, (lijnAfstand*i)+35);
  
    // Licht oranje lijnen.
    stroke(249, 208, 171);
    line(0, (lijnAfstand*i)+75, width, (lijnAfstand*i)+75);
  
    // Licht turqoise lijnen.
    stroke(190, 216, 217);
    line(0, (lijnAfstand*i)+115, width, (lijnAfstand*i)+115); 
  }
}

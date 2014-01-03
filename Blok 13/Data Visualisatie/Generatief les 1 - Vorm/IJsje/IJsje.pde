/* Print een als PDF bestand gegenereerd vanuit een Processing sketch. Een paar regels voor wat betreft de code: 
   * Je mag alleen zwart (0) en wit (255) gebruiken. 
   * Je mag alleen de tekenfuncties triangle(), rect() en ellipse() 1 keer gebruiken. 
   * Geen andere tekenfuncties zijn toegestaan (geen beginShape of afbeeldingen).  
   * Ontwerp een ijshoorntje (hoorntje + bolletje ijs). */

import processing.pdf.*;

void setup() {
  size(400, 400, PDF, "ijsje.pdf");
  background(255);
  
  ellipse(width/2, (height/2)-100, 100, 100);
  fill(0);
  triangle((width/2)-50, (height/2)-98, (width/2)+50, (height/2)-98, width/2, (height/2)+150);

  println("Finished.");
  exit();
}

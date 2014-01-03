void setup() {
  size(600, 600);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 100);
  noStroke();
  
  // Variabele voor de kleur (hue).
  int kleur = 198;
  
  for(int i = 0; i < 10; i++) {
    fill(kleur, 100-10*i, 100);
    rect((50*i)+50, 50, 50, height-100); 
  }
}

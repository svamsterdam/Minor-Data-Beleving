/* Kenmerken voor het creeëren van mijn identiteit:
   * Gestructureerd
   * Kleuren rood/oranje/geel 
   * Driehoeken */
   
// Variabelen voor de canvas.
int breedteX = 700;
int hoogteY = 500;
int spacing = 50;

// Variabelen voor de X & Y positie.
int posX = 0;
int posY = 0;
int position = spacing*2;

// Variabelen voor de kleuren.
int hue1 = 0;
int hue2 = 36;
int saturation1 = 70;
int saturation2 = 90;
int brightness = 100;

void setup() {
  size(breedteX, hoogteY);
  colorMode(HSB, 360, 100, 100);
  background(0, 0, 100);
  noStroke();
  noSmooth();
  
  // Driehoeken maken en plaatsen.
  for(int i = 0; i < width; i++) {
    for(int j = 0; j < height; j++) {   
   
      // Driehoeken linksboven.      
      fill(random(hue1, hue2), random(saturation1, saturation2), brightness);
      triangle(posX+(i*position), posY+(j*position), posX+(i*position), posY+spacing+(j*position), posX+spacing+(i*position), posY+spacing+(j*position));
      fill(random(hue1, hue2), random(70, saturation2), brightness);
      triangle(posX+(i*position), posY+(j*position), posX+spacing+(i*position), posY+(j*position), posX+spacing+(i*position), posY+spacing+(j*position));
      
      // Driehoeken rechtsonder.
      fill(random(hue1, hue2), random(saturation1, saturation2), brightness);
      triangle(posX+50+(i*position), posY+50+(j*position), posX+50+(i*position), posY+spacing+50+(j*position), posX+spacing+50+(i*position), posY+spacing+50+(j*position));
      fill(random(hue1, hue2), random(saturation1, saturation2), brightness);
      triangle(posX+50+(i*position), posY+50+(j*position), posX+spacing+50+(i*position), posY+50+(j*position), posX+spacing+50+(i*position), posY+spacing+50+(j*position));
        
      // Driehoeken rechtsboven.
      fill(random(hue1, hue2), random(saturation1, saturation2), brightness);
      triangle(posX+50+(i*position), posY+spacing+(j*position), posX+spacing+50+(i*position), posY+spacing+(j*position), posX+spacing+50+(i*position), posY+(j*position));
      fill(random(hue1, hue2), random(saturation1, saturation2), brightness);
      triangle(posX+50+(i*position), posY+spacing+(j*position), posX+50+(i*position), posY+(j*position), posX+spacing+50+(i*position), posY+(j*position));
        
      // Driehoken linksonder.
      fill(random(hue1, hue2), random(saturation1, saturation2), brightness);
      triangle(posX+(i*position), posY+spacing+50+(j*position), posX+spacing+(i*position), posY+spacing+50+(j*position), posX+spacing+(i*position), posY+50+(j*position));
      fill(random(hue1, hue2), random(saturation1, saturation2), brightness);
      triangle(posX+(i*position), posY+spacing+50+(j*position), posX+(i*position), posY+50+(j*position), posX+spacing+(i*position), posY+50+(j*position));
    }
  }
}

let xBolinha = 0;
let yBolinha = 200;
let diametro = 30;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  //criar bolinha
  circle(xBolinha,yBolinha,diametro);
  
  //movimentação bolinha
  xBolinha += velocidadeXBolinha;
  //yBolinha += velocidadeYBolinha;
  
  //colisão com as borda 
  if (xBolinha > width || xBolinha < 0){
    xBolinha = 0
    diametro = 30
  }
  //mudança do tamanho
  if (xBolinha > 100){
    diametro = 50
  }
  if (xBolinha > 500){
    diametro = 15
  }
}
//Declarando as variáveis que irei usar no decorrer do código, separando elas em setores:
//(A maioria das varíáveis estão suprimidas, pois foi mais fácil pra mim de repetir elas no código)

//Legenda:
// p = posição 
// x = eixo X
// y = eixo Y
// v = velocidade
// b = botão
// 1 = jogador 1
// 2 = jogador 2

//Exemplos:
// pbx = posição da bola no eixo X (b é a abreviação de bola, quando está entre outras letras)
// vnomey = velocidade do meu nome no eixo Y
// bam1 = botão amarelo do jogador 1


//variáveis que usei na primeira tela do Jogo (Intro):

//var intro nome (meu nome)
  var pnomex = 51;
  var pnomey = 51;
  var vnomex = 2.1;
  var vnomey = 6;
 
//var intro P (letra P)
  var ppx = 0;
  var ppy = 200;
  var vpx = 3;

//var intro O (letra O)
  var pox = 535;
  var poy = 0;
  var voy = 1.5;

//var intro N (letra N)
  var pnx = 640;
  var pny = 620;
  var vny = -3;

//var intro G (letra G)
  var pgx = 1240;
  var pgy = 200;
  var vgx = -3.5;

//var bola (posição, raio e cor) (bcor = cor da bola)
  var pbx = 1240/2;
  var pby = 600/2;
  var raio = 10;
  var bcor = 0;

//var velocidade da bola
  var vbx = 0;
  var vby = 0;

//variável que usei pra determinar a velocidade da bola na escolha da dificuldade:
//(mais informações mais pra baixo do código):
var v = 0;

//var jogador 1 (posição e cor)
  var p1x = 25;
  var p1y = 240;
  var cor1 = 250;

//var jogador 2 (posição e cor)
  var p2x = 1195;
  var p2y = 240;
  var cor2 = 250;

//var placar (os pontos de cada jogador)
  var pontos1 = 0;
  var pontos2 = 0;

//Variáveis que usei para a jogabilidade do jogo nas mudanças de tela (Configurações) :
//configurções
  var menu = 0;
  var button;
  var button2;
  var button3;

//cores disponíveis (já determinei em variáveis pra não precisar repetir o código)
  var amarelo = "yellow";
  var vermelho = "red";
  var rosa = "DeepPink";
  var azul = "blue";
  var ciano = "cyan";
  var laranja = "orange";
  var roxo = "DarkViolet";
  var verde = "lime";
  var vinho = "DarkRed";
  var marrom = "Sienna";

//Todos os botões da ala de escolha de cores, para cada jogador:
//var botão das cores:
  var bam1;
  var bam2;
  var bvm1;
  var bvm2;
  var brs1;
  var brs2;
  var baz1;
  var baz2;
  var bc1;
  var bc2;
  var bl1;
  var bl2;
  var brx1;
  var brx2;
  var bvd1;
  var bvd2;
  var bvh1;
  var bvh2;
  var bm1;
  var bm2;

//Função Setup: tem praticamente todas as funções do código:
//funções que envolvem "desenho" na área do jogo (menus, cenário, borda, intro)
//funções dos botões
//função do teclado
//funções da jogabilidade (cérebro do jogo)
//funções auxiliares  
function setup() {
  createCanvas(1240,600);
  fundo();
  cenario();
  borda();
  elementos();
  jogabilidade();
  config();
  inicio();
  keyTyped();
  dificuldade();
  menu2();
  botão();
  começo();
  botão2();
  botão3();
  menucor();
  selecionarcor1();
  selecionarcor2();
  intro();
  nome();
  P();
  O();
  N();
  G();
  bam1();
  bam2();
  bvm1();
  bvm2();
  brs1();
  brs2();
  baz1();
  baz2();
  bc1();
  bc2();
  bl1();
  bl2();
  brx1();
  brx2();
  bvd1();
  bvd2();
  bvh1();
  bvh2();
  bm1();
  bm2();

}

//Na minha função Draw não está tão cheia, pois coloquei muito das coisas em funções separadas:
//A partir de agora vão aparecer funções que só são comentadas no decorrer do código:
function draw(){
  config();

//O sistema que usei pra fazer as "passagens de tela" do jogo foi com o IF e a variável MENU:
//A variável MENU representa praticamente quantas mudanças de jogabilidade vão ocorrer:
//Os botões que não foram apertados precisam ser retirados (.hide)
//INTRODUÇÃO (primeira tela)
  if(menu==0){
    começo();
    button2.hide();
    button3.hide();
    bam1.hide();
    bam2.hide();
    bvm1.hide();
    bvm2.hide();
    brs1.hide();
    brs2.hide();
    baz1.hide();
    baz2.hide();
    bc1.hide();
    bc2.hide();
    bl1.hide();
    bl2.hide();
    brx1.hide();
    brx2.hide();
    bvd1.hide();
    bvd2.hide();
    bvh1.hide();
    bvh2.hide();
    bm1.hide();
    bm2.hide();
  }

//REGRAS E COMANDOS (segunda tela)
  if(menu==1){
    inicio();
    button.hide();
    button2.show();
  }

//SELEÇÃO DE CORES (terceira tela)
  if(menu==2){
    menu++
    menucor();
    bam1.show();
    bam2.show();
    bvm1.show();
    bvm2.show();
    brs1.show();
    brs2.show();
    baz1.show();
    baz2.show();
    bc1.show();
    bc2.show();
    bl1.show();
    bl2.show();
    brx1.show();
    brx2.show();
    bvd1.show();
    bvd2.show();
    bvh1.show();
    bvh2.show();
    bm1.show();
    bm2.show();
  }
}

//Função que usei pra fazer as passagens de tela pelo teclado:
function keyTyped(){

//Verificar se os DOIS jogadores escolheram CORES e as CORES serem diferentes:
//Passar para a quarta tela:
  if(keyCode == 32 && menu == 3 && cor1 != 250 && cor2 != 250 && cor1 != cor2){
    
    //SELEÇÃO DA DIFICULDADE(quarta tela)
    dificuldade();
    menu++

    bam1.hide();
    bam2.hide();
    bvm1.hide();
    bvm2.hide();
    brs1.hide();
    brs2.hide();
    baz1.hide();
    baz2.hide();
    bc1.hide();
    bc2.hide();
    bl1.hide();
    bl2.hide();
    brx1.hide();
    brx2.hide();
    bvd1.hide();
    bvd2.hide();
    bvh1.hide();
    bvh2.hide();
    bm1.hide();
    bm2.hide();
  }

//Mecanismo de mudar a velociadade da bola quando seleciona a dificuldade(1, 2 ou 3)
//A variável V representa a velocidade que será colocada pra ambos dos eixos x e y
//DIFICULDADE 1
  if(keyCode == 49 && menu == 4){
    
    v = 6;

  //Efeito de selecionar o botão:
  //(versão do menu da dificuldade com botões mais fracos)
    menu2();

    fill(150);
    stroke(0);
    strokeWeight(2);
    square(570, 250, 100);

    fill(100);
    stroke(200);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("2", 605, 318 );

    fill(150);
    stroke(0);
    strokeWeight(2);
    square(720, 250, 100);

    fill(100);
    stroke(200);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("3", 755, 318 );

  //Botão selecionado (1)
  //(botão selecionado com stroke vermelha)
    fill(105,105,105);
    stroke("red");
    strokeWeight(4);
    square(420, 250, 100);

    fill(0);
    stroke(250);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("1", 455, 318 );
    
  }

//Repetir a mesma coisa para os outros botões (níveis de dificuldade), mudando a variável V
//DIFICULDADE 2
  if(keyCode == 50 && menu == 4){

    v = 8;

  //Efeito de selecionar
    menu2();

    fill(150);
    stroke(0);
    strokeWeight(2);
    square(420, 250, 100);

    fill(100);
    stroke(200);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("1", 455, 318 );

    fill(150);
    stroke(0);
    strokeWeight(2);
    square(720, 250, 100);

    fill(100);
    stroke(200);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("3", 755, 318 );

  //Botão selecionado (2)
    fill(105,105,105);
    stroke("red");
    strokeWeight(4);
    square(570, 250, 100);

    fill(0);
    stroke(250);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("2", 605, 318 );
  }

//DIFICULDADE 3
  if(keyCode == 51 && menu == 4){
    
    v = 10;

  //Efeito de selecionar
    menu2();

    fill(150);
    stroke(0);
    strokeWeight(2);
    square(420, 250, 100);

    fill(100);
    stroke(200);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("1", 455, 318 );

    fill(150);
    stroke(0);
    strokeWeight(2);
    square(570, 250, 100);

    fill(100);
    stroke(200);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("2", 605, 318 );

  //Botão selecionado (3)
    fill(105,105,105);
    stroke("red");
    strokeWeight(4);
    square(720, 250, 100);

    fill(0);
    stroke(250);
    strokeWeight(5);
    textSize(50);
    textFont('Arial');
    text("3", 755, 318 );
  }

//Começar o jogo de fato:
//Verificar se foi escolhida alguma dificuldade, e atribuir a velocidade aos eixos
  if(keyCode == 13 && menu == 4 && v != 0){
    vbx = vbx + 1*v;
    vby = vby + 1*v;
    fundo();
    borda();
    elementos();
    jogabilidade();
    menu++
  }


}

//Função exclusiva para rodar o jogo de fato (pertence a função draw)
//É preciso usar essa função para parar qualquer efeito do ENTER
function config(){

  if(menu==5){
    fundo();
    borda();
    elementos();
    jogabilidade();
  }

}

//BOTÃO DE START (primeira tela)
function botão(){
  let col = color(250);
  button = createButton('START');
  button.position(370, 360);
  button.size(500, 70);
  button.mousePressed(começar);
  button.style('background-color', col);

}

//Função do botão
function começar(){
  menu++
}

//PRIMEIRA TELA (desenho):
function começo(){
  background(100);
  stroke(0);
  fill(0);
  rect(0, 0, 1240, 20);
  fill(0);
  rect(0, 0, 20, 600);
  fill(0);
  rect(1220, 0, 20, 600);
  fill(0);
  rect(0, 580, 1240, 20);
  intro();

}

//Elementos da Introdução:
function intro(){
  fill(0);
  nome();
  P();
  O();
  N();
  G();
     
}

//Meu nome e seu movimento na introdução
function nome(){
  fill(0);
  stroke(0);
  strokeWeight(1);
  textStyle(BOLD);
  textSize(25);
  text("Lívia Bion © 2021", pnomex, pnomey);
  
    if(pnomex < 945){  
      pnomex += vnomex;

    }

    else if (pnomex = 945){
      vnomex = 0;
    }

    if(pnomey < 560){
      pnomey += vnomey;

      if((pnomey > 549) && (pnomex < 800)){
        vnomey = -vnomey;
      } 

      if((pnomey < 51) && (pnomex < 800)){
        vnomey = -vnomey;
      }
    }   

}

//Letra P e seu movimento na introdução
function P (){
  square(ppx,ppy, 15);
  square(ppx, ppy + 20, 15);
  square(ppx,ppy + 40, 15);
  square(ppx, ppy + 60, 15);
  square(ppx,ppy + 80, 15);
  square(ppx, ppy + 100, 15);
  square(ppx + 20,ppy, 15);
  square(ppx + 40, ppy, 15);
  square(ppx + 60,ppy + 20, 15);
  square(ppx + 20, ppy + 40, 15);
  square(ppx + 40,ppy + 40, 15);
    if(ppx < 430){
      ppx += vpx;
    }
    else if(ppx = 430){
      vpx = 0;
    }
}

//Letra O e seu movimento na introdução
function O(){
  square(pox, poy + 20, 15);
  square(pox,poy + 40, 15);
  square(pox, poy + 60, 15);
  square(pox,poy + 80, 15);
  square(pox + 20, poy, 15);
  square(pox + 40, poy, 15);
  square(pox + 20, poy + 100, 15);
  square(pox + 40, poy + 100, 15);
  square(pox + 60, poy + 20, 15);
  square(pox + 60,poy + 40, 15);
  square(pox + 60, poy + 60, 15);
  square(pox + 60,poy + 80, 15);
    if(poy < 200){
      poy += voy;
    }
    else if(poy = 200){
      voy = 0;
    }
}

//Letra N e seu movimento na introdução
function N(){
  square(pnx,pny, 15);
  square(pnx, pny + 20, 15);
  square(pnx,pny + 40, 15);
  square(pnx, pny + 60, 15);
  square(pnx,pny + 80, 15);
  square(pnx, pny + 100, 15);
  square(pnx + 60,pny, 15);
  rect(pnx + 20, pny + 5, 5, 10);
  rect(pnx + 25, pny + 20, 5, 10);
  rect(pnx + 30, pny + 35, 5, 10);
  rect(pnx + 35, pny + 50, 5, 10);
  rect(pnx + 40, pny + 65, 5, 10);
  rect(pnx + 45, pny + 80, 5, 10);
  rect(pnx + 50, pny + 95, 5, 10);
  square(pnx + 60,pny, 15);
  square(pnx + 60, pny + 20, 15);
  square(pnx + 60,pny + 40, 15);
  square(pnx + 60, pny + 60, 15);
  square(pnx + 60,pny + 80, 15);
  square(pnx + 60, pny + 100, 15);
    if(pny > 200){
      pny += vny;
    }
    else if(pny = 200){
      vny = 0;
    }
}

//Letra G e seu movimento na introdução
function G(){
  square(pgx,pgy, 15);
  square(pgx, pgy + 20, 15);
  square(pgx,pgy + 40, 15);
  square(pgx, pgy + 60, 15);
  square(pgx,pgy + 80, 15);
  square(pgx, pgy + 100, 15);
  square(pgx + 20, pgy, 15);
  square(pgx + 40, pgy, 15);
  square(pgx + 60, pgy, 15);
  square(pgx + 20, pgy + 100 , 15);
  square(pgx + 40, pgy + 100 , 15);
  square(pgx + 60, pgy + 100 , 15);
  square(pgx + 60, pgy + 80 , 15);
  square(pgx + 60, pgy + 60 , 15);
  square(pgx + 40, pgy + 60 , 15);
    if(pgx > 745){
      pgx += vgx;
    }
    else if(pgx = 745){
      vgx = 0;
    }
}

//BOTÃO DA SEGUNDA TELA 
function botão2(){
  let col = color(250);
  button2 = createButton('CONTINUAR');
  button2.position(420, 500);
  button2.size(400, 35);
  button2.mousePressed(cores);
  button2.style('background-color', col);

}

//Função do botão
function cores(){
  button2.hide();
  menu++

}

//BOTÕES DO MENU DA ESCOLHA DE CORES
//Eles se repetem, uma para cada jogador (1 e 2)
//Ligados a ele a função e o efeito de selecionar
//Vou comentar só na primeira cor pra explicar

//botão amarelo(bam)

//Criando o botão amarelo do jogador 1
function bam1(){
  let col = color(amarelo);
  bam1 = createButton("");
  bam1.position(425, 190);
  bam1.size(45, 45);
  bam1.mousePressed(am1);
  bam1.style('background-color', col);
  bam1.mouseClicked(amarelo1);

}

//Função do botão, mudar a cor do jogador 1 para a cor escolhida
function am1(){
  cor1 = amarelo;
}

//Efeito de selecionar
//(Sobrepor um retangulo sobre a ala dos botões do jogador 1 da mesma cor do fundo)
//(Criar um quadrado branco atrás um pouco maior)
function amarelo1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(423.5, 188.5, 48, 48);
}

//Criando o botão amarelo do jogador 2
function bam2(){
  let col = color(amarelo);
  bam2 = createButton("");
  bam2.position(675, 190);
  bam2.size(45, 45);
  bam2.mousePressed(am2);
  bam2.style('background-color', col);
  bam2.mouseClicked(amarelo2);

}

//Função do botão, mudar a cor do jogador 2 para a cor escolhida
function am2(){
  cor2 = amarelo;
}

//Efeito de selecionar
//(Sobrepor um retangulo sobre a ala dos botões do jogador 2 da mesma cor do fundo)
//(Criar um quadrado branco atrás um pouco maior)
function amarelo2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(673.5, 188.5, 48, 48);
}

//botão vermelho(bvm)

function bvm1(){
  let col = color(vermelho);
  bvm1 = createButton("");
  bvm1.position(425, 245);
  bvm1.size(45, 45);
  bvm1.mousePressed(vm1);
  bvm1.style('background-color', col);
  bvm1.mouseClicked(vermelho1);

}

function vm1(){
  cor1 = vermelho;
}

function vermelho1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(423.5, 243.5, 48, 48);
}

function bvm2(){
  let col = color(vermelho);
  bvm2 = createButton("");
  bvm2.position(675, 245);
  bvm2.size(45, 45);
  bvm2.mousePressed(vm2);
  bvm2.style('background-color', col);
  bvm2.mouseClicked(vermelho2);

}

function vm2(){
  cor2 = vermelho;
}

function vermelho2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(673.5, 243.5, 48, 48);
}


//botão rosa(brs)

function brs1(){
  let col = color(rosa);
  brs1 = createButton("");
  brs1.position(425, 300);
  brs1.size(45, 45);
  brs1.mousePressed(rs1);
  brs1.style('background-color', col);
  brs1.mouseClicked(rosa1);

}

function rs1(){
  cor1 = rosa;
}

function rosa1(){
  selecionarcor1()
  fill(255);
  stroke(255);
  rect(423.5, 298.5, 48, 48);
}

function brs2(){
  let col = color(rosa);
  brs2 = createButton("");
  brs2.position(675, 300);
  brs2.size(45, 45);
  brs2.mousePressed(rs2);
  brs2.style('background-color', col);
  brs2.mouseClicked(rosa2);

}

function rs2(){
  cor2 = rosa;
}

function rosa2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(673.5, 298.5, 48, 48);
}

//botão azul(baz)

function baz1(){
  let col = color(azul);
  baz1 = createButton("");
  baz1.position(425, 355);
  baz1.size(45, 45);
  baz1.mousePressed(az1);
  baz1.style('background-color', col);
  baz1.mouseClicked(azul1);

}

function az1(){
  cor1 = azul;
}

function azul1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(423.5, 353.5, 48, 48);
}

function baz2(){
  let col = color(azul);
  baz2 = createButton("");
  baz2.position(675, 355);
  baz2.size(45, 45);
  baz2.mousePressed(az2);
  baz2.style('background-color', col);
  baz2.mouseClicked(azul2);

}

function az2(){
  cor2 = azul;
}

function azul2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(673.5, 353.5, 48, 48);
}


//botão marrom (bm)

function bm1(){
  let col = color(marrom);
  bm1 = createButton("");
  bm1.position(425, 410);
  bm1.size(45, 45);
  bm1.mousePressed(m1);
  bm1.style('background-color', col);
  bm1.mouseClicked(marrom1);

}

function m1(){
  cor1 = marrom;
}

function marrom1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(423.5, 408.5, 48, 48);
}

function bm2(){
  let col = color(marrom);
  bm2 = createButton("");
  bm2.position(675, 410);
  bm2.size(45, 45);
  bm2.mousePressed(m2);
  bm2.style('background-color', col);
  bm2.mouseClicked(marrom2);

}

function m2(){
  cor2 = marrom;
}

function marrom2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(673.5, 408.5, 48, 48);
}


//botão ciano (bc)

function bc1(){
  let col = color(ciano);
  bc1 = createButton("");
  bc1.position(520, 190);
  bc1.size(45, 45);
  bc1.mousePressed(c1);
  bc1.style('background-color', col);
  bc1.mouseClicked(ciano1);

}

function c1(){
  cor1 = ciano;
}

function ciano1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(518.5, 188.5, 48, 48);
}

function bc2(){
  let col = color(ciano);
  bc2 = createButton("");
  bc2.position(770, 190)
  bc2.size(45, 45);
  bc2.mousePressed (c2);
  bc2.style('background-color', col);
  bc2.mouseClicked(ciano2);

}

function c2(){
  cor2 = ciano;
}

function ciano2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(768.5, 188.5, 48, 48);
}

//botão laranha (bl)
  
function bl1(){
  let col = color(laranja);
  bl1 = createButton("");
  bl1.position(520, 245);
  bl1.size(45, 45);
  bl1.mousePressed(l1);
  bl1.style('background-color', col);
  bl1.mouseClicked(laranja1);

}

function l1(){
  cor1 = laranja;
}

function laranja1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(518.5, 243.5, 48, 48);
}

function bl2(){
  let col = color(laranja);
  bl2 = createButton("");
  bl2.position(770, 245);
  bl2.size(45, 45);
  bl2.mousePressed (l2);
  bl2.style('background-color', col);
  bl2.mouseClicked(laranja2);

}

function l2(){
  cor2 = laranja;
}

function laranja2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(768.5, 243.5, 48, 48);
}

//botão roxo (brx)

function brx1(){
  let col = color(roxo);
  brx1 = createButton("");
  brx1.position(520, 300);
  brx1.size(45, 45);
  brx1.mousePressed(rx1);
  brx1.style('background-color', col);
  brx1.mouseClicked(roxo1);

}


function rx1(){
  cor1 = roxo;
}

function roxo1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(518.5, 298.5, 48, 48);
}

function brx2(){
  let col = color(roxo);
  brx2 = createButton("");
  brx2.position(770, 300);
  brx2.size(45, 45);
  brx2.mousePressed (rx2);
  brx2.style('background-color', col);
  brx2.mouseClicked(roxo2);
}

function rx2(){
  cor2 = roxo;
}

function roxo2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(768.5, 298.5, 48, 48);
}
//botão verde (bvd)

function bvd1(){
  let col = color(verde);
  bvd1 = createButton("");
  bvd1.position(520, 355);
  bvd1.size(45, 45);
  bvd1.mousePressed(vd1);
  bvd1.style('background-color', col);
  bvd1.mouseClicked(verde1);

}

function vd1(){
  cor1 = verde
}

function verde1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(518.5, 353.5, 48, 48);
}

function bvd2(){
  let col = color(verde);
  bvd2 = createButton("");
  bvd2.position(770, 355);
  bvd2.size(45, 45);
  bvd2.mousePressed (vd2);
  bvd2.style('background-color', col);
  bvd2.mouseClicked(verde2);

}

function vd2(){
  cor2 = verde;

} 

function verde2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(768.5, 353.5, 48, 48);
}


//botão vinho (bvh)

function bvh1(){
  let col = color(vinho);
  bvh1 = createButton("");
  bvh1.position(520, 410);
  bvh1.size(45, 45);
  bvh1.mousePressed(vh1);
  bvh1.style('background-color', col);
  bvh1.mouseClicked(vinho1);


}

function vh1(){
  cor1 = vinho;
}

function vinho1(){
  selecionarcor1();
  fill(255);
  stroke(255);
  rect(518.5, 408.5, 48, 48);
}

function bvh2(){
  let col = color(vinho);
  bvh2 = createButton("");
  bvh2.position(770, 410);
  bvh2.size(45, 45);
  bvh2.mousePressed (vh2);
  bvh2.style('background-color', col);
  bvh2.mouseClicked(vinho2);

}

function vh2(){
  cor2 = vinho;
  

} 

function vinho2(){
  selecionarcor2();
  fill(255);
  stroke(255);
  rect(768.5, 408.5, 48, 48);
}

//MENU DA ESCOLA DE CORES (terceira tela) (desenho)
function menucor(){

//cenário
  fundo();
  borda();
  cenario();
  selecionarcor1();
  selecionarcor2();

  fill(54, 54, 54);
  stroke(0);
  strokeWeight(2);
  rect(370, 50, 500, 500, 20);

  fill(250);
  stroke(0);
  strokeWeight(3.8);
  textSize(35);
  textFont('minecrafter');
  text("ESCOLHA DE CORES:", 445, 95);

  fill(250);
  stroke(250);
  strokeWeight(2.5);
    for(i=135; i<=470; i+=28){
    rect(619,i,2,20);
  }

  stroke(0);
  strokeWeight(0.8);
  fill(250);
  textSize(23);
  stroke(0);
  strokeWeight(1);
  text("JOGADOR 1", 430, 155);

  stroke(0);
  strokeWeight(0.8);
  fill(250);
  textSize(23);
  stroke(0);
  strokeWeight(1);
  text("JOGADOR 2", 680, 155);

  fill(105,105,105);
  stroke(0);
  strokeWeight(1);
  rect(440,480, 360, 50, 20);

  fill(0);
  textSize(20);
  strokeWeight(2);
  stroke(0);
  text("APERTE ESPAÇO PARA CONTINUAR", 452.5 ,510.5 );


}
//Funções que trabalham para o efeito de selecionar do botões das cores
//ALA DO JOGADOR 1
function selecionarcor1(){
  fill(54, 54, 54);
  stroke(54, 54, 54);
  strokeWeight(0);
  rect(415, 185, 160, 280);
}

//ALA DO JOGADOR 2
function selecionarcor2(){
  fill(54, 54, 54);
  stroke(54, 54, 54);
  strokeWeight(0);
  rect(665, 185, 160, 280);
}

//REGRAS E CONTROLES (segunda tela) (desenho)
function inicio(){

  //cenário
  fundo();
  borda();
  cenario();

  //início
  fill(54, 54, 54);
  stroke(0);
  strokeWeight(2);
  rect(370, 50, 500, 500, 20);

  fill(250);
  stroke(0);
  strokeWeight(3.8);
  textSize(35);
  textFont('minecrafter');
  text("BEM-VINDO AO PONG!", 437, 90);

  fill(0);
  stroke(0);
  strokeWeight(1.6);
  textSize(15);
  textFont('Arial');
  text("O PONG É UM JOGO QUE FOI CONSTRUIDO A PARTIR DO PING", 400, 120);
  text("PONG TRADICIONAL. É JOGADO COM DOIS JOGADORES, QUE SE", 380, 140);
  text("OPÕE CADA UM EM UM LADO DA TELA CONTROLANDO SUA BAR-", 380, 160);
  text("RA, A FIM DE FAZER A BOLA TOCAR NO LADO DO OPONENTE. O", 380, 180);
  text("VENCEDOR É DECRETADO ASSIM QUE SE ALCANÇA 10 PONTOS.", 380, 200);

  fill(250);
  stroke(0);
  strokeWeight(3);
  textSize(25);
  textFont('Arial');
  textStyle(BOLD);
  text("CONTROLES:", 535 ,240);
  textStyle(NORMAL);


  fill(0);
  stroke(0);
  strokeWeight(2.5);
    for(i=255; i<=475; i+=27.5){
    rect(619,i,2,20);
  }

  stroke(0);
  strokeWeight(0.8);
  fill(0);
  square(400, 300, 60, 10);
  square(400, 390, 60, 10);
  textSize(18);
  stroke(0);
  strokeWeight(1);
  text("JOGADOR 1", 450, 275);

  stroke(0);
  strokeWeight(0.8);
  fill(0);
  square(780, 300, 60, 10);
  square(780, 390, 60, 10);
  textSize(18);
  stroke(0);
  strokeWeight(1);
  text("JOGADOR 2", 690, 275);

  fill(255);
  stroke(0);
  strokeWeight(1);
  textFont('minecrafter');
  textSize(30);
  text("W", 415, 342);
  text("S", 422, 431);

  fill(0);
  stroke(0);
  strokeWeight(1);
  triangle(485, 300, 475, 315, 495, 315);
  rect(484,315, 2, 45);
  triangle(485, 450, 475, 435, 495, 435);
  rect(484, 390, 2, 45);
  triangle(755, 300, 745, 315, 765, 315);
  rect(754,315, 2, 45);
  triangle(755, 450, 745, 435, 765, 435);
  rect(754, 390, 2, 45);

  fill(250);
  stroke(0);
  strokeWeight(0.7);
  triangle(810, 315, 805, 325, 815, 325);
  triangle(810, 435, 805, 425, 815, 425);
  stroke(250);
  strokeWeight(1);
  rect(809.5, 325, 1, 20);
  rect(809.5, 405, 1, 20);

  stroke(0);
  strokeWeight(0.8);
  fill(250);
  rect(540, 315, 20,120, 20);
  rect(680, 315,20,120, 20);
      
}

//MENU DIFILCUDADE PART 1 (quarta tela) (desenho)
//Dividido em duas partes pra auxiliar no efeito de selecionar
function dificuldade(){

  //cenário
  fundo();
  borda();
  cenario();
  menu2();

  fill(105,105,105);
  stroke(0);
  strokeWeight(2);
  square(420, 250, 100);

  fill(105,105,105);
  stroke(0);
  strokeWeight(2);
  square(570, 250, 100);

  fill(105,105,105);
  stroke(0);
  strokeWeight(2);
  square(720, 250, 100);

  fill(0);
  stroke(250);
  strokeWeight(5);
  textSize(50);
  textFont('Arial');
  text("1", 455, 318 );
  text("2", 605, 318 );
  text("3", 755, 318 );

}

//MENU DIFILCUDADE PART 2 (quarta tela) (desenho)
function menu2(){

  fill(54, 54, 54);
  stroke(0);
  strokeWeight(2);
  rect(320, 125, 600, 350, 20);

  fill(250);
  stroke(0);
  strokeWeight(3);
  textFont("minecrafter");
  textStyle(BOLD);
  textSize(30);
  text("ESCOLHA SUA DIFICULDADE:", 395, 165);
  textStyle(NORMAL);

  fill(250);
  textStyle(BOLD);
  stroke(0);
  strokeWeight(2);
  textSize(25);
  textFont('Arial');
  text("(DIGITE 1, 2 OU 3)", 500, 195);
  textStyle(NORMAL);

  fill(0);
  textFont('Arial');
  textSize(20);
  stroke(0);
  strokeWeight(2);
  text("FÁCIL", 442.5, 245);

  fill(0);
  textFont('Arial');
  textSize(20);
  stroke(0);
  strokeWeight(2);
  text("MÉDIO", 590, 245);

  fill(0);
  textFont('Arial');
  textSize(20);
  stroke(0);
  strokeWeight(2);
  text("DIFÍCIL", 735, 245);

  fill(105,105,105);
  stroke(0);
  strokeWeight(1);
  rect(440,390, 360, 50, 20);

  fill(0);
  textSize(20);
  strokeWeight(2);
  stroke(0);
  text("APERTE ENTER PARA COMEÇAR", 458 ,422.5 );

}


//BORDA E PLACAR(desenho)
//Borda
function borda(){
  fill(0);
  rect(0, 0, 1240, 30);
  fill(0);
  rect(0, 0, 10, 600);
  fill(0);
  rect(1230, 0, 10, 600);
  fill(0);
  rect(0, 570, 1240, 30);

//Placar
  fill(cor1);
  rect(515, 5, 20);
  fill(cor2);
  rect(695, 5, 20);
}

//JOGABILIDADE E ELEMENTOS DO PONG
//Bola, barras dos jogadores, pontos no placar
function elementos(){ 

  //Bola
  fill(bcor);  
  circle(pbx,pby,raio*2);

  //Movimento da bola
  pbx += vbx;
  pby += vby;

  //Colisão da bola com o lado direito
  //Registro de pontos para o jogador 1
  if(pbx + raio > 1230){
    pontos1++
    pby = 290;
    pbx = 620;
    vbx = -vbx;
  }

  //Colisão da bola com o lado esquerda
  //Registro de pontos para o jogador 2
  if(pbx + raio < 30){
    pontos2++
    pby = 290;
    pbx = 620;
    vbx = -vbx;
  }

  //Colisão da bola com o chão
  if(pby + raio > 570){
    vby = -vby;
}

  //Colisão da bola com o teto
  if(pby + raio < 50){
    vby = -vby;
}

  //Colisões com as barras dos jogadores
  //Barra do Jogador 1
  if((pbx >= p1x) && (pbx <= p1x + 20) && (pby >= p1y) && (pby <= p1y + 120)){
    vbx = -vbx;
  } 

  //Barra do Jagador 2
  if((pbx >= p2x) && (pbx <= p2x + 20) && (pby >= p2y) && (pby <= p2y + 120)){
    vbx = -vbx;
  } 

  //Jogador 1
  //Barra
  stroke(54,54,54);
  strokeWeight(0.8);
  fill(cor1);
  rect(p1x, p1y, 20,120, 20);

  //Comando para ativar a função ao teclado para a movimentação contínua
  if (keyIsPressed == true){ 

  //Controle da barra com o teclado (W e S) e limitando ela no espaço do jogo
    //SUBIR(W)
     if (key == "w" && p1y != 40){
        p1y = p1y - 8;
  }   

    //DESCER(S)
    if (key == "s" && p1y != 440){
      p1y = p1y + 8;
    }
  }

  //Jogador 2
  //Barra
  stroke(54,54,54);
  strokeWeight(0.8);
  fill(cor2);
  rect(p2x,p2y,20,120, 20);

  //Controle da barra com o teclado (W e S) e limitando ela no espaço do jogo
  //SUBIR( SETA PARA CIMA)
  if (keyIsDown(UP_ARROW) && p2y != 40){
    p2y = p2y - 8;
  }

  //DESCER( SETA PARA BAIXO)
  if (keyIsDown(DOWN_ARROW) && p2y != 440){
    p2y = p2y + 8;
  }

  //Registro de pontos no placar
  stroke(250);
  strokeWeight(1);
  fill(250);
  textSize(20);
  textFont('minecrafter');
  text(pontos1,550, 22);
  text(pontos2,665, 22);      
}

//Função que é o desenho de fundo, que aparece em por trás dos menus
function cenario(){
  stroke(54,54,54);
  strokeWeight(0.8);
  fill(cor1);
  rect(p1x, p1y, 20,120, 20);

  stroke(54,54,54);
  strokeWeight(0.8);
  fill(cor2);
  rect(p2x,p2y,20,120, 20);

  stroke(250);
  strokeWeight(1);
  fill(250);
  textSize(20);
  textFont('minecrafter');
  text(pontos1,550, 22);
  text(pontos2,665, 22);

}

//BACKGROUND
function fundo(){
  background(105,105,105);
  fill(54, 54, 54);
  for(i=0; i<=600; i+=27.5){
    strokeWeight(0);
    rect(610,i,20,20);
  }
}  

//JOGABILIDADE DE FIM DO JOGO
//(1)Reconhecer vencedor
//(2)Parar jogo
//(3)Anunciar vencedor
function jogabilidade(){

  //JOGADOR 1 CAMPEÃO
  //Reconhecer vencedor
  if(pontos1 == 10){

  //Parar Jogo
    vbx = 0;
    vby = 0;

  //MENU FINAL (Anunciar vencedor) (desenho)
    button3.show();
    fill(54, 54, 54);
    stroke(0);
    strokeWeight(2);
    rect(420, 150, 400, 300, 20);

    fill(250);
    stroke(0);
    strokeWeight(5);
    textSize(60);
    textFont('minecrafter');
    text("FIM DE JOGO", 437, 210);
    
    fill(0);
    textSize(30);
    strokeWeight(4);
    stroke(250);
    text("APERTE ENTER", 510 ,375 );
    text("PARA RECOMEÇAR", 490 ,415 );

    fill(cor1);
    stroke(0);
    strokeWeight(1.3);
    textFont('Arial');
    textSize(25);
    text("JOGADOR 1 GANHOU", 490, 251);

    fill(0);
    strokeWeight(0);
    rect(520,270, 200, 50);

    fill(250);
    strokeWeight(0);
    textSize(30);
    text(pontos1, 565, 306);
    text("0" + pontos2, 640, 306);
    text("x", 614, 304);

    fill(cor1);
    rect(530, 280, 30);
    fill(cor2);
    rect(680, 280, 30);


}


  //JOGADOR 2 CAMPEÃO
  //Reconhecer Vencedor
  if(pontos2 == 10){

  //Parar jogo
    vbx = 0;
    vby = 0;

  //MENU FINAL (Anunciar vencedor) (desenho)  
    button3.show();
    fill(54, 54, 54);
    stroke(0);
    strokeWeight(2);
    rect(420, 150, 400, 300, 20);

    fill(250);
    stroke(0);
    strokeWeight(5);
    textSize(60);
    textFont('Minecrafter');
    text("FIM DE JOGO", 437, 210);

    fill(0);
    textSize(30);
    strokeWeight(4);
    stroke(250);
    text("APERTE ENTER", 510 ,375 );
    text("PARA RECOMEÇAR", 490 ,415 );

    fill(cor2);
    stroke(0);
    strokeWeight(1,3);
    textFont('Arial');
    textSize(25);
    text("JOGADOR 2 GANHOU", 490, 251);

    fill(0);
    strokeWeight(0);
    rect(520,270, 200, 50);

    fill(250);
    strokeWeight(0);
    textSize(30);
    text("0" + pontos1, 570, 306);
    text(pontos2, 640, 306);
    text("x", 614, 304);

    fill(cor1);
    rect(530, 280, 30);
    fill(cor2);
    rect(680, 280, 30);
  }
}

//BOTÃO DO MENU FINAL
//Recomeçar o jogo
function botão3(){
  let col = color(160);
  button3 = createButton('CLIQUE AQUI PARA RECOMEÇAR');
  button3.position(470, 340);
  button3.size(300, 90);
  button3.mousePressed(recomeçar);
  button3.style('background-color', col);
}

//Função de Recomeçar:
//Zerar algumas variáveis, necessário para o início
function recomeçar(){
  p1x = 25;
  p1y = 240;
  cor1 = 250;
  p2x = 1195;
  p2y = 240;
  cor2 = 250;
  menu = 1;
  pontos1 = 0;
  pontos2 = 0;
  v = 0;
  button3.hide();

} 

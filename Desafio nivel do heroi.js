let xp=["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]
let pontuacao=prompt("Digite sua pontuação")
let nome=prompt("Digite Seu Nome")
nivel=""

switch (true){
    case(pontuacao<1000):
        nivel=xp[0]
        break;
    case(pontuacao>=1001 && pontuacao<=2000):
        nivel=xp[1]
        break;
    case(pontuacao>=2001 && pontuacao <=5000):
        nivel=xp[2]
        break;
    case(pontuacao >=5001 && pontuacao <=7000):
        nivel=xp[3]
        break;
    case(pontuacao>=7001 && pontuacao <=8000):
        nivel=xp[4]
        break;
    case(pontuacao>=8001 && pontuacao <=9000):
        nivel=xp[5]
        break;
    case(pontuacao>=9001 && pontuacao <=10000):
        nivel=xp[6]
        break;
    case(pontuacao>=10001):
        nivel=xp[7]
        break;
    default: console.log("Pontuação inválida")
}

console.log("O Herói de nome "+nome+" está no nível de "+nivel)
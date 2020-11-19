
const planets = [
    {
        "id": 1,
        "nome": "Mercúrio",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Merc%C3%BArio.jpg",
        "description": "Mercúrio é o menor dos planetas, e o que está mais próximo do sol. Ele gira lentamente, cerca de duas vezes para cada três órbitas em volta do astro rei. Mercúrio não tem luas e anéis, e sua atmosfera é tão fina que os cientistas a classificam como uma exosfera.",
        "temp": "A temperatura na sua superfície pode chegar, durante o período diurno, a 550ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 2,
        "nome": "Vênus",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/V%C3%AAnus.jpg",
        "description": "O segundo planeta mais próximo do sol é Vênus, e por causa de sua proximidade à Terra, é o maior planeta visto no céu noturno. Sua atmosfera é formada principalmente de ácido sulfúrico e dióxido de carbono, sendo a mais espessa entre entre todos os planetas terrestres. A densidade de sua atmosfera faz com que a pressão do ar na superfície seja 90 vezes maior que a da Terra. Essa pressão, juntamente com o calor, tornam o planeta decididamente inóspito para a vida.",
        "temp": "A grande concentração de gás carbônico mantém a temperatura do planeta a mais de 460ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 3,
        "nome": "Terra",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Terra.jpg",
        "description": "A Terra, o terceiro planeta a partir do sol, é o único planeta conhecido por abrigar seres vivos e por ter água líquida em sua superfície. Sua atmosfera é crucial para a capacidade da Terra de suportar a vida, sendo formada principalmente de nitrogênio, oxigênio e dióxido de carbono. Embora a superfície da Terra seja composta principalmente de água, o planeta também possui grandes massas de terra, que abrigam uma grande variedade de ecossistemas.",
        "temp": "Possui temperatura média de 14ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 4,
        "nome": "Marte",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Marte.jpg",
        "description": "O quarto planeta a partir do Sol, Marte, foi conhecido pelos astrônomos da antiguidade como o Planeta Vermelho. Esse planeta é conhecido pelos grandes vulcões e vales profundos em sua superfície, e Marte experimenta frequentes tempestades de vento em todo o planeta. Algumas das características da superfície de Marte, como leitos de rios secos, sugerem a possibilidade de que já existiu água no planeta, e que ainda pode fluir abaixo de sua superfície.",
        "temp": "A atmosfera menos espessa propicia uma variação de temperatura entre -76ºC e -10ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 5,
        "nome": "Júpiter",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Jupiter.jpg",
        "description": "Mais longe do sol, passando por um anel de asteroides, está o maior planeta do nosso sistema solar: Júpiter, o primeiro dos planetas gigantes gasosos. Sua característica mais visível são suas nuvens coloridas, causadas pelas enormes tempestades em sua atmosfera, que consiste principalmente de hidrogênio, hélio, amônia e gelo de água. A maior e mais distinta das tempestades já vistas, a Grande Mancha Vermelha, é maior que a própria Terra.",
        "temp": "A temperatura em sua superfície é muito baixa, chegando -100ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 6,
        "nome": "Saturno",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Saturno.jpg",
        "description": "Saturno, o sexto planeta a partir do sol, também é um gigante gasoso, e sua característica mais impressionante é seu complexo sistema de anéis. Mas além disso, Saturno possui também 62 luas. Os anéis de Saturno orbitam o planeta em uma faixa fina de cerca de um quilômetro de espessura. O interior de Saturno, assim como Júpiter, é constituído principalmente de hidrogênio e hélio. Aproximando-se do núcleo, a forte pressão transforma os gases em líquidos e, finalmente, em uma forma metálica que conduz eletricidade.",
        "temp": "A temperatura em Saturno pode chegar a -140ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 7,
        "nome": "Urano",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Urano.jpg",
        "description": "Enquanto a maioria dos planetas gira em torno de seu eixo com uma leve inclinação, o gigante de gelo Urano gira em um eixo paralelo à sua órbita. Por causa disso, cada polo do planeta fica virado para o sol por 42 anos, enquanto o outro lado fica na completa escuridão. Urano é quatro vezes o tamanho da Terra, e cada ano nele equivale a 84 anos terrestres, de modo que ele leva mais de 30 mil dias para dar uma volta ao redor do Sol. Sua atmosfera é composta em grande parte por metano, possuindo um núcleo denso e congelado.",
        "temp": "A temperatura no planeta pode chegar a -200ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 8,
        "nome": "Netuno",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Netuno.jpg",
        "description": "Netuno é o planeta mais distante do sol e, como Urano, é um lugar muito frio, um ano em Netuno equivale à 165 anos terrestres. Sua atmosfera é composta principalmente de metano, o que dá ao planeta sua cor azul. Netuno tem um diâmetro aproximadamente quatro vezes maior que o da Terra, treze luas em sua órbita, e um fraco sistema de anéis.",
        "temp": "A temperatura no planeta é extremamente baixa, chegando a -218ºC.",
        "galaxy": "Via Láctea"
    },
    {
        "id": 9,
        "nome": "Lua",
        "img": "https://github.com/denison3965/Api-planet/blob/main/Img-planet/Lua.jpg",
        "description": "A lua é um satélite natural do planeta Terra. Ela é o único corpo celeste a receber seres humanos. A Lua é o satélite natural do planeta Terra, distanciados por aproximadamente 384.405 km.",
        "temp": "As temperaturas variam de -184 graus Celsius durante à noite a 214 graus Celsius durante o dia.",
        "galaxy": "Via Láctea"
    }
]

module.exports = planets
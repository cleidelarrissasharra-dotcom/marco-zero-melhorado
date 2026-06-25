import { PointOfInterest, TriviaQuestion } from "./types";

export const MARCO_ZERO: PointOfInterest = {
  id: "marco-zero",
  title: "Praça do Marco Zero",
  subtitle: "Praça Barão do Rio Branco",
  description: "O ponto inicial da contagem das distâncias rodoviárias do estado de Pernambuco e o coração pulsante do Recife Antigo.",
  longDescription: "Oficialmente denominada Praça Barão do Rio Branco, a praça foi fundada em 1938. Destaca-se por sua vasta rosa dos ventos desenhada no chão pelo artista plástico pernambucano Cícero Dias, e pela vista panorâmica do Parque das Esculturas Francisco Brennand, situado no molhe do porto. É o principal palco de grandes manifestações culturais do estado, incluindo a monumental abertura do Carnaval do Recife.",
  image: "https://images.unsplash.com/photo-1628153401140-5477038e235e?auto=format&fit=crop&w=1200&q=80",
  tags: ["História", "Arte Urbana", "Carnaval", "Cartão Postal"],
  facts: [
    "O painel de Cícero Dias foi inspirado em sua renomada obra 'Eu vi o mundo... ele começava no Recife'.",
    "A estátua de bronze no centro homenageia o Barão do Rio Branco, diplomata brasileiro.",
    "Do outro lado do estuário, a Coluna de Cristal de Francisco Brennand ergue-se com 32 metros de altura."
  ],
  location: "Bairro do Recife, Recife - PE",
  historicalPeriod: "Início do Século XX (Reformulação do Porto)"
};

export const PONTOS_TURISTICOS: PointOfInterest[] = [
  {
    id: "rua-bom-jesus",
    title: "Rua do Bom Jesus",
    subtitle: "Antiga Rua dos Judeus",
    description: "Considerada uma das ruas mais bonitas do mundo por publicações internacionais.",
    longDescription: "Esta via histórica, que remonta ao período de ocupação holandesa (século XVII), abriga a Sinagoga Kahal Zur Israel (a primeira das Américas) e o Centro Cultural Judaico de Pernambuco. Caracteriza-se por seu casario colorido de estilo colonial português e holandês, calçamento em paralelepípedos e pela forte energia cultural dos artesãos locais que expõem aos finais de semana.",
    image: "https://images.unsplash.com/photo-1596738141905-51e94b519d69?auto=format&fit=crop&w=1200&q=80",
    tags: ["História", "Arquitetura", "Cultura Judaica", "Patrimônio"],
    facts: [
      "Foi eleita a terceira rua mais bonita do mundo pela prestigiada revista Architectural Digest em 2020.",
      "A Sinagoga Kahal Zur Israel foi fundada em 1636, durante o governo de Maurício de Nassau.",
      "Abrigava os portões da cidade e o antigo observatório astronômico de Nassau."
    ],
    location: "Bairro do Recife, Recife - PE",
    historicalPeriod: "Período Holandês (Século XVII)"
  },
  {
    id: "bonecos-gigantes",
    title: "Embaixada dos Bonecos Gigantes",
    subtitle: "Patrimônio Vivo de Pernambuco",
    description: "Um espaço cultural fantástico onde ficam expostos os famosos bonecos que comandam o Carnaval.",
    longDescription: "Fundada para preservar a rica tradição dos bonecos colossais que animam as ladeiras de Olinda e as ruas do Recife no Carnaval, a embaixada abriga representações impressionantes de grandes personalidades nacionais e internacionais da história, música, política, cinema e esportes. Cada boneco é moldado em argila, fibra de vidro e decorado com roupas de alfaiataria fina de alta durabilidade.",
    image: "https://images.unsplash.com/photo-1512411995873-1fcfbf25539d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Carnaval", "Folclore", "Artesanato", "Entretenimento"],
    facts: [
      "Os primeiros bonecos surgiram em Olinda na década de 1930, inspirados nos gigantes das festividades europeias.",
      "Cada boneco chega a medir entre 3 e 4 metros de altura e pesa cerca de 15 a 20 quilos.",
      "O artista plástico Silvio Botelho é considerado o principal artesão e pai dos bonecos gigantes modernos."
    ],
    location: "Rua do Bom Jesus, 183 - Recife Antigo",
    historicalPeriod: "Tradição do Século XX"
  }
];

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: "Qual o nome oficial da Praça do Marco Zero?",
    options: [
      "Praça Barão do Rio Branco",
      "Praça Joaquim Nabuco",
      "Praça da República",
      "Praça Cícero Dias"
    ],
    correctAnswer: 0,
    explanation: "Oficialmente ela é chamada de Praça Barão do Rio Branco, inaugurada em 1938 com a estátua do diplomata esculpida por Felix Charpentier."
  },
  {
    id: 2,
    question: "O que fica localizado no molhe portuário visível a partir do Marco Zero?",
    options: [
      "O Forte de São João Batista",
      "O Parque das Esculturas de Francisco Brennand",
      "O Palácio do Campo das Princesas",
      "O Mercado de São José"
    ],
    correctAnswer: 1,
    explanation: "O Parque das Esculturas de Francisco Brennand abriga diversas obras emblemáticas, como a famosa Coluna de Cristal de 32 metros de altura."
  },
  {
    id: 3,
    question: "A Rua do Bom Jesus abriga uma instituição religiosa histórica pioneira nas Américas. Qual é?",
    options: [
      "A Catedral de São Pedro dos Clérigos",
      "A Sinagoga Kahal Zur Israel",
      "A Igreja de Nossa Senhora do Rosário dos Pretos",
      "O Templo Budista Jodoshu"
    ],
    correctAnswer: 1,
    explanation: "A Sinagoga Kahal Zur Israel, fundada em 1636, é reconhecida historicamente como a primeira sinagoga oficial das Américas."
  },
  {
    id: 4,
    question: "Qual publicação internacional elegeu a Rua do Bom Jesus como uma das mais bonitas do mundo?",
    options: [
      "National Geographic",
      "The New York Times",
      "Architectural Digest",
      "Lonely Planet"
    ],
    correctAnswer: 2,
    explanation: "A revista norte-americana Architectural Digest colocou a Rua do Bom Jesus em 3º lugar na lista das ruas mais bonitas do mundo em 2020."
  }
];

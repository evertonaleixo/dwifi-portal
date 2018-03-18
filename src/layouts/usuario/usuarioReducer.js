const initialState = {
 pessoas: [
  {
    nome: "Antônio Paiva",
    wallet: 0xCc06d32dD07A3e5ABE549e3E01BF2D069a8c10cE,
    foto: "/images/pessoa1.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Caetana Paiva",
    wallet: 0x354b9359cda774DabAf7c704A479a1bA2c551681,
    foto: "/images/pessoa2.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Deolindo Mundez",
    wallet: 0xdEA5b6DC8CCC0AF5BEAFAA613F388808D57f06b1,
    foto: "/images/pessoa3.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Evangelista Silva",
    wallet: 0x1D410E013921C44bd76fa57C5F573fbA2a209135,
    foto: "/images/pessoa4.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Germana Pereira",
    wallet: 0x61954FaBE3B58f7A39047da22eAB119DB58834c0,
    foto: "/images/pessoa5.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Luciana Pinhal",
    wallet: 0x55b6C8a61549Ad9F6ce53766E2BeCCF13625B9bF,
    foto: "/images/pessoa6.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Marilda Lucena",
    wallet: 0xd9010d1e2e46272953dA9Cd3215167C5A09a6b1C,
    foto: "/images/pessoa7.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Miguelina Afonso",
    wallet: 0xb3203c2D6273612b5A1d244674082f6f6fbB71B4,
    foto: "/images/pessoa8.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Rafael Jesus",
    wallet: 0xe481C317c14631f53Ab234e57a50678107557E89,
    foto: "/images/pessoa9.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Salomão Silva",
    wallet: 0xB8624285484597576E21127Ec2Fe5c72def01e6D,
    foto: "/images/pessoa10.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
]
}

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PEOPLE':
      return {state, ...action.payload}
    case 'SELECT_PERSON':
      let pessoas = state.pessoas.map(p => {
        if (p.nome !== action.payload.nome) {
          wallet: 
          p.active = false
        }else {
          p.active = true
        }})
      state.pessoas = pessoas;
      return { ...state }
    default:
      return state
  } 
}

export default usuarioReducer

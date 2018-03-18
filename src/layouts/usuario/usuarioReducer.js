const initialState = {
 pessoas: [
  {
    nome: "Antônio Paiva",
    foto: "/images/pessoa1.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Caetana Paiva",
    foto: "/images/pessoa2.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Deolindo Mundez",
    foto: "/images/pessoa3.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Evangelista Silva",
    foto: "/images/pessoa4.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Germana Pereira",
    foto: "/images/pessoa5.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Luciana Pinhal",
    foto: "/images/pessoa6.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Marilda Lucena",
    foto: "/images/pessoa7.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Miguelina Afonso",
    foto: "/images/pessoa8.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Rafael Jesus",
    foto: "/images/pessoa9.png",
    historia: "Sou Antonio Paiva, trabalho como marceneiro. Meu filho estuda em colégio público e precisa usar internet constantemente para fazer trabalhos. Infelizmente, nem sempre consigo comprar crédito de acesso. Por isso gostaria de sua contribuição.",
    active: false
  },
  {
    nome: "Salomão Silva",
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

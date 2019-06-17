export const Tags = [
    {id:0, name:"Checkouts"}, 
    {id:1, name:"Formulários"}, 
    {id:2, name:"Depoimentos"},
    {id:3, name:"Emails"}, 
    {id:4, name:"Campanhas"}, 
    {id:5, name:"Lançamentos"},
]

export const Groups = [
    {id:0, name: "Frases"},
    {id:2, name: "Palavras"}
]

export const Copies = [
    {
        id: 1,
        group: 0,
        category: 0,
        tags: [0,1,2],
        items: [
            {id:0, content:"Anônimo"},
            {id:1, content:"Autêntico"},
            {id:2, content:"Suporte"},
        ]
    },
    {
        id: 2,
        group: 0,
        category: 1,
        tags: [3,4,5],
        items: [
            {id:0, content:"Oferta Limitada"},
            {id:1, content:"Estoque esgotando"},
            {id:2, content:"Apenas 3 sobrando"},
        ]
    }, 
]

export const Categories = [
    {id:0, name:"Segurança"},
    {id:1, name:"Escassez"}
]

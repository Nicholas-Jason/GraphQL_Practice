import { platform } from "os";

let games =[
    {id: '1', title: 'Elden Ring', platform:['PS4','PS5','Switch 2','Xbox One','Series X','Windows']},
    {id: '2', title: 'Black Myth Wukong', platform:['PS5','Series X','Windows']},
    {id: '3', title: 'Lies of P', platform:['PS4','PS5','Series X','Xbox One','Windows','MacOS']}

]

let authors=[
    {id:'1', name: 'Stephen King', verified: true},
    {id: '2', name: 'Geroge RR Martin', verified: true},
    {id: '3', name: 'Jack Jack', verified: false}
]

let reviews=[
    {id:'1', rating: 7, content: 'Outrageous',author_id:'1',game_id:'2'},
    {id:'1', rating: 8, content: 'Magnificent',author_id:'1',game_id:'3'},
    {id:'3', rating: 10, content: 'Perfect writing',author_id:'2',game_id:'2'},
    {id:'4', rating: 2, content: 'Horrendous',author_id:'3',game_id:'1'}
]

export default{games,authors,reviews}
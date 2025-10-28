export const typeDefs= `#graphql`
type Game ={
    id: Number,
    title: String,
    platform: [String]
}

type Review = {
    id: Number,
    rating: Number
    content: String
}
type Author = {
    id: Number,
    name: String,
    verified: Boolean
}
type Query ={
    reviews: [Review]
    review(id: Number): Review
    games: [Game]
    game(id: Number): Game
    authors: [Author]
    author(id: Number): Author
}


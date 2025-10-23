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
    games: [Game]
    authors: [Author]
}


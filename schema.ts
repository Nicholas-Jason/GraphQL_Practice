export const typeDefs= `#graphql`
type Game ={
    id: Number,
    title: String,
    platform: [String],
    reviews: [Review]
}

type Review = {
    id: Number,
    rating: Number
    content: String,
    game: Game,
    author: Author
}
type Author = {
    id: Number,
    name: String,
    verified: Boolean,
    reviews: [Review]
}
type Query ={
    reviews: [Review]
    review(id: Number): Review
    games: [Game]
    game(id: Number): Game
    authors: [Author]
    author(id: Number): Author
}
type Mutation={
    deleteGame(id: Number): [Game],
    addGame(title: String,platform: [String],reviews: [Review]): Game
    }


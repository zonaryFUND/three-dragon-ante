import { CardUniqueAttributes } from "./card/card";

export type Player = {
    gold: number
    hole: number
    hand: CardUniqueAttributes[]
    firstAnte?: CardUniqueAttributes
    flight: {
        card: CardUniqueAttributes
        dead?: true
    }
}
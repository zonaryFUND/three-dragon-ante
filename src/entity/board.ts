import { Player } from "./player";
import { CardType } from "./card/card";

export type Board = {
    players: {[id: string]: Player}
    deck: CardType[]
    trash: CardType[]
    ante: CardType[]
    stake: number
    effect: CardType[]
    gambit: number
    round: number
    nextStartPlayer?: string
}
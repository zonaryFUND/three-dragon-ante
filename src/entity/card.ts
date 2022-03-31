export type NonAttributeType = "bahamut" | "chromatic-wyrmling" | "dracolich" | "metalic-wyrmling" | "tiamat"
export type MetalType = "copper" | "gold" | "silver" | "brass" | "bronze"
export type ChromaticType = "green" | "black" | "blue" | "white" | "red"
export type MortalType = "archmage" | "dragonrider" | "dragonslayer" | "druid" | "fool" | "illusionist" | "cobold" |
    "merchant-prince" | "priest" | "princess" | "prophet" | "queen" | "sorcerer" | "thief" | "wyrm-priest"

export type CardType = NonAttributeType | MetalType | ChromaticType | MortalType
export type CardDefinition = {
    type: CardType
    strength: number
}

export type Card = {
    name: string
    definition: CardDefinition
    alignment: "good" | "evil" | "mortal"
    legendary: boolean
}
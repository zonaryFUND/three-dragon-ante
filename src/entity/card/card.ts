export type NonAttributeType = "bahamut" | "chromatic-wyrmling" | "dracolich" | "metalic-wyrmling" | "tiamat"
export type MetalType = "copper" | "gold" | "silver" | "brass" | "bronze"
export type ChromaticType = "green" | "black" | "blue" | "white" | "red"
export type MortalType = "archmage" | "dragonrider" | "dragonslayer" | "druid" | "fool" | "illusionist" | "cobold" |
    "merchant-prince" | "priest" | "princess" | "prophet" | "queen" | "sorcerer" | "thief" | "wyrm-priest"

export type CardType = NonAttributeType | MetalType | ChromaticType | MortalType
export type CardUniqueAttributes = {
    type: CardType
    strength: number
}

export type Alignment = "good" | "evil" | "mortal"

export type Card = {
    name: string
    uniqueAttributes: CardUniqueAttributes
    alignment: Alignment
    legendary: boolean
}
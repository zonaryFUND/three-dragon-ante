import { CardUniqueAttributes, Card, Alignment } from "./card";

export function CardFactory(uniqueAttributes: CardUniqueAttributes): Card {
    const { name, alignment, legendary } = (() => {
        switch (uniqueAttributes.type) {
            case "bahamut":
                return { name: "バハムート", alignment: "good", legendary: true }
            case "tiamat":
                return { name: "ティアマト", alignment: "evil", legendary: true }
            case "metalic-wyrmling":
                return { name: "メタリック・ワームリング", alignment: "good", legendary: true }
            case "chromatic-wyrmling":
                return { name : "黒魔ティック・ワームリング", alignment: "evil", legendary: true }
            case "dracolich":
                return { name: "ドラコリッチ", alignment: "evil", legendary: true }

            case "archmage":
                return { name: "アーチメイジ", alignment: "mortal", legendary: false }
            case "dragonrider":
                return { name: "ドラゴンライダー", alignment: "mortal", legendary: false }
            case "dragonslayer":
                return { name: "ドラゴンスレイヤー", alignment: "mortal", legendary: false }
            case "druid":
                return { name: "ドルイド", alignment: "mortal", legendary: false }
            case "fool":
                return { name: "フール", alignment: "mortal", legendary: false }
            case "illusionist":
                return { name: "イリュージョニスト", alignment: "mortal", legendary: false }
            case "cobold":
                return { name: "コボルド", alignment: "mortal", legendary: false }
            case "merchant-prince":
                return { name: "マーチャント・プリンス", alignment: "mortal", legendary: false }
            case "priest":
                return { name: "プリースト", alignment: "mortal", legendary: false }
            case "princess":
                return { name: "プリンセス", alignment: "mortal", legendary: false }
            case "prophet":
                return { name: "プロフェット", alignment: "mortal", legendary: false }
            case "queen":
                return { name: "クイーン", alignment: "mortal", legendary: false }
            case "sorcerer":
                return { name: "ソーサラー", alignment: "mortal", legendary: false }
            case "thief":
                return { name: "シーフ", alignment: "mortal", legendary: false }
            case "wyrm-priest":
                return { name: "ワームプリースト", alignment: "mortal", legendary: false }

            case "black": {
                const legendary = uniqueAttributes.strength == 8
                return { name: legendary ? "ブラック・レイダー" : "ブラック・ドラゴン", alignment: "evil", legendary }
            }
            case "blue": {
                const legendary = uniqueAttributes.strength == 10
                return { name: legendary ? "ブルー・オーヴァーロード" : "ブルー・ドラゴン", alignment: "evil", legendary }
            }
            case "brass": {
                const legendary = uniqueAttributes.strength == 8
                return { name: legendary ? "ブラス・スルタン" : "ブラス・ドラゴン", alignment: "good", legendary }
            }
            case "bronze": {
                const legendary = uniqueAttributes.strength == 10
                return { name: legendary ? "ブロンズ・ウォーロード" : "ブロンズ・ドラゴン", alignment: "good", legendary }
            }
            case "copper": {
                const legendary = uniqueAttributes.strength == 9
                return { name: legendary ? "カッパー・トリックスター" : "カッパー・ドラゴン", alignment: "good", legendary }
            }
            case "gold": {
                const legendary = uniqueAttributes.strength == 12
                return { name: legendary ? "ゴールド・モナーク" : "ゴールド・ドラゴン", alignment: "good", legendary }
            }
            case "green": {
                const legendary = uniqueAttributes.strength == 5
                return { name: legendary ? "グリーン・スキーマ―" : "グリーン・ドラゴン", alignment: "evil", legendary }
            }
            case "red": {
                const legendary = uniqueAttributes.strength == 11
                return { name: legendary ? "レッド・デストロイヤー" : "レッド・ドラゴン", alignment: "evil", legendary }
            }
            case "silver": {
                const legendary = uniqueAttributes.strength == 11
                return { name: legendary ? "シルヴァー・シーア" : "シルヴァー・ドラゴン", alignment: "good", legendary }
            }
            case "white": {
                const legendary = uniqueAttributes.strength == 7
                return { name: legendary ? "ホワイト・ハンター" : "ホワイト・ドラゴン", alignment: "evil", legendary }
            }   
        }
    })()

    return { name, uniqueAttributes, alignment: alignment as Alignment, legendary }
}
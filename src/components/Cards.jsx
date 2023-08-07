import React from "react";
import CharacterCard from "./CharacterCard";

export default function Cards({cardList}) {
    return (
        <div>
            {cardList.map((card) => {
                return <CharacterCard
                name = {card.name}
                status = {card.status}
                species = {card.species}
                gender = {card.gender}
                origin = {card.origin}
                image = {card.image}
                id = {card.id}
                />
            })}
        </div>
    )
}
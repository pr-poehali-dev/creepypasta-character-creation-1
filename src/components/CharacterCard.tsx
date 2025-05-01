
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Icon from "./ui/icon";

interface Character {
  id: number;
  name: string;
  image: string;
  description: string;
  creator: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Card className="bg-creepy-shadow border-creepy-mist overflow-hidden hover:border-creepy-blood transition-all duration-300 h-full flex flex-col">
      <Link to={`/characters/${character.id}`} className="overflow-hidden relative">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={character.image} 
            alt={character.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
      </Link>
      
      <CardHeader className="pb-2">
        <Link 
          to={`/characters/${character.id}`} 
          className="font-creepster text-2xl text-creepy-blood hover:text-red-700 transition-colors"
        >
          {character.name}
        </Link>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-creepy-bone opacity-90 line-clamp-3">
          {character.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t border-creepy-mist flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm text-creepy-bone opacity-75">
          <Icon name="User" className="h-3 w-3" />
          <span>{character.creator}</span>
        </div>
        
        <Link 
          to={`/characters/${character.id}`}
          className="text-sm text-creepy-blood hover:text-red-700 flex items-center gap-1"
        >
          <span>Подробнее</span>
          <Icon name="ArrowRight" className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;

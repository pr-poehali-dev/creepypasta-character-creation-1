
import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const characters = [
  {
    id: 1,
    name: "Безликий Шептун",
    image: "https://images.unsplash.com/photo-1546704864-07235973413a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Существо, которое шепчет ваши самые темные секреты в темноте. У него нет лица, только рот, растянутый в вечной ухмылке.",
    creator: "МастерУжаса"
  },
  {
    id: 2,
    name: "Кукольник",
    image: "https://images.unsplash.com/photo-1634911952447-637f1325336d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Создатель живых кукол из частей человеческих тел. Его мастерская скрыта в подвалах заброшенного театра.",
    creator: "ТеньВТумане"
  },
  {
    id: 3,
    name: "Кровавая Мэри",
    image: "https://images.unsplash.com/photo-1616196334218-caffda11e3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    description: "Призрак, который появляется в зеркалах, если произнести ее имя три раза. Ее лицо изуродовано, а руки покрыты кровью ее жертв.",
    creator: "ПризракИзЗеркала"
  }
];

const FeaturedCharacters = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="font-creepster text-4xl text-creepy-blood mb-2">Популярные персонажи</h2>
        <p className="text-lg text-creepy-bone opacity-90 max-w-2xl mx-auto">
          Встречайте самых жутких обитателей наших кошмаров, созданных нашим сообществом
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {characters.map(character => (
          <CharacterCard 
            key={character.id}
            character={character}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/characters" 
          className="inline-flex items-center text-creepy-blood hover:text-red-700 font-medium gap-2"
        >
          <span>Смотреть всех персонажей</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCharacters;


import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-creepy-dark flex flex-col items-center justify-center p-4 text-center">
      <Icon name="Skull" className="text-creepy-blood h-24 w-24 mb-6" />
      <h1 className="font-creepster text-6xl text-creepy-blood mb-4">404</h1>
      <p className="text-2xl text-creepy-bone mb-2">Страница не найдена</p>
      <p className="text-creepy-bone opacity-80 mb-8 max-w-md">
        Похоже, вы заблудились в темноте. Эта страница исчезла или никогда не существовала.
      </p>
      <Button 
        className="bg-creepy-blood hover:bg-red-900 text-white flex items-center gap-2"
        size="lg"
        asChild
      >
        <Link to="/">
          <Icon name="Home" className="h-5 w-5" />
          <span>Вернуться на главную</span>
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;

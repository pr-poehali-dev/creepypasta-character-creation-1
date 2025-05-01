
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedCharacters from "@/components/FeaturedCharacters";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-creepy-dark text-creepy-bone flex flex-col">
      <NavBar />
      <Hero />
      <FeaturedCharacters />
      
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="font-creepster text-4xl text-creepy-blood mb-4">Создай своего монстра</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Придумайте и создайте собственного персонажа для ваших историй. Опишите его внешность,
            способности и жуткую историю происхождения.
          </p>
          <Button 
            className="mt-6 bg-creepy-blood hover:bg-red-900 text-white flex items-center gap-2"
            size="lg"
            asChild
          >
            <Link to="/characters/create">
              <Icon name="PlusCircle" className="h-5 w-5" />
              <span>Создать персонажа</span>
            </Link>
          </Button>
        </div>
      </section>
      
      <footer className="bg-creepy-dark border-t border-creepy-mist mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Skull" className="text-creepy-blood h-6 w-6" />
              <span className="font-creepster text-xl text-creepy-blood">CreepyTales</span>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-creepy-bone opacity-70">
              © 2025 CreepyTales. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

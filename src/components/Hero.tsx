
import React from "react";
import { Button } from "./ui/button";
import Icon from "./ui/icon";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
          filter: "brightness(0.2)" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-creepster text-5xl md:text-6xl text-creepy-blood mb-6 leading-tight">
            Где оживают твои кошмары
          </h1>
          <p className="text-lg md:text-xl text-creepy-bone mb-8 max-w-2xl">
            Добро пожаловать в мир ужасов и страшных историй. Создавайте своих жутких персонажей, 
            делитесь своими кошмарами и читайте истории, от которых стынет кровь в жилах.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-creepy-blood hover:bg-red-900 text-white font-semibold flex items-center gap-2"
              asChild
            >
              <Link to="/stories">
                <Icon name="BookOpen" className="h-5 w-5" />
                <span>Читать истории</span>
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-creepy-blood text-creepy-bone hover:bg-creepy-blood font-semibold flex items-center gap-2"
              asChild
            >
              <Link to="/signup">
                <Icon name="UserPlus" className="h-5 w-5" />
                <span>Присоединиться</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-creepy-dark to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

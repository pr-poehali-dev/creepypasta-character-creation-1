
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

type CharacterType = {
  name: string;
  type: string;
  image: string;
  backstory: string;
  scaryFactor: number;
  abilities: string[];
  location: string;
};

const INITIAL_CHARACTER: CharacterType = {
  name: "",
  type: "",
  image: "",
  backstory: "",
  scaryFactor: 5,
  abilities: [],
  location: "",
};

const CreateCharacter = () => {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<CharacterType>(INITIAL_CHARACTER);
  const [currentAbility, setCurrentAbility] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (value: string) => {
    setCharacter((prev) => ({ ...prev, type: value }));
  };

  const handleScaryFactorChange = (value: number[]) => {
    setCharacter((prev) => ({ ...prev, scaryFactor: value[0] }));
  };

  const addAbility = () => {
    if (currentAbility.trim() !== "") {
      setCharacter((prev) => ({
        ...prev,
        abilities: [...prev.abilities, currentAbility.trim()],
      }));
      setCurrentAbility("");
    }
  };

  const removeAbility = (index: number) => {
    setCharacter((prev) => ({
      ...prev,
      abilities: prev.abilities.filter((_, i) => i !== index),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCharacter((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Валидация полей
    if (!character.name || !character.type || !character.backstory) {
      toast.error("Заполните обязательные поля");
      setIsSubmitting(false);
      return;
    }

    // Здесь был бы запрос к API для сохранения персонажа
    setTimeout(() => {
      toast.success("Персонаж успешно создан!");
      setIsSubmitting(false);
      navigate("/characters");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-creepy-dark text-creepy-bone flex flex-col">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-creepy-shadow rounded-lg p-6 border border-creepy-mist">
          <h1 className="font-creepster text-3xl md:text-4xl text-creepy-blood mb-6 text-center">
            Создание персонажа
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-creepy-bone">Имя персонажа *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={character.name}
                    onChange={handleChange}
                    className="bg-creepy-dark border-creepy-mist text-creepy-bone"
                    placeholder="Введите имя вашего кошмара"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="type" className="text-creepy-bone">Тип существа *</Label>
                  <Select value={character.type} onValueChange={handleTypeChange}>
                    <SelectTrigger className="bg-creepy-dark border-creepy-mist text-creepy-bone">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent className="bg-creepy-shadow border-creepy-mist text-creepy-bone">
                      <SelectItem value="ghost">Призрак</SelectItem>
                      <SelectItem value="demon">Демон</SelectItem>
                      <SelectItem value="monster">Монстр</SelectItem>
                      <SelectItem value="cryptid">Криптид</SelectItem>
                      <SelectItem value="human">Человек</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="location" className="text-creepy-bone">Место обитания</Label>
                  <Input
                    id="location"
                    name="location"
                    value={character.location}
                    onChange={handleChange}
                    className="bg-creepy-dark border-creepy-mist text-creepy-bone"
                    placeholder="Где обитает это существо?"
                  />
                </div>
                
                <div>
                  <Label className="text-creepy-bone">Фактор страха</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">1</span>
                    <Slider
                      value={[character.scaryFactor]}
                      min={1}
                      max={10}
                      step={1}
                      onValueChange={handleScaryFactorChange}
                      className="flex-1"
                    />
                    <span className="text-sm">10</span>
                  </div>
                  <div className="text-center text-sm mt-1">
                    {character.scaryFactor < 4
                      ? "Немного пугающий"
                      : character.scaryFactor < 7
                      ? "Вызывает ужас"
                      : "Кошмар воплоти"}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="image" className="text-creepy-bone">Изображение</Label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-creepy-mist rounded-md">
                    {character.image ? (
                      <div className="space-y-2 text-center">
                        <img
                          src={character.image}
                          alt="Preview"
                          className="mx-auto h-32 w-auto object-cover rounded"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setCharacter(prev => ({ ...prev, image: "" }))}
                          className="border-creepy-mist text-creepy-bone"
                        >
                          Удалить
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-1 text-center">
                        <Icon name="Image" className="mx-auto h-12 w-12 text-creepy-mist" />
                        <div className="flex text-sm">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-creepy-dark rounded-md font-medium text-creepy-blood hover:text-creepy-bone"
                          >
                            <span>Загрузить файл</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </label>
                          <p className="pl-1">или перетащите сюда</p>
                        </div>
                        <p className="text-xs text-creepy-mist">
                          PNG, JPG, GIF до 10MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label className="text-creepy-bone">Способности</Label>
                  <div className="flex space-x-2 mb-2">
                    <Input
                      value={currentAbility}
                      onChange={(e) => setCurrentAbility(e.target.value)}
                      className="bg-creepy-dark border-creepy-mist text-creepy-bone"
                      placeholder="Введите способность"
                    />
                    <Button
                      type="button"
                      onClick={addAbility}
                      variant="outline"
                      className="border-creepy-mist text-creepy-bone"
                    >
                      <Icon name="Plus" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {character.abilities.map((ability, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-creepy-dark p-2 rounded border border-creepy-mist"
                      >
                        <span>{ability}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => removeAbility(index)}
                          className="h-8 w-8 p-0 text-creepy-mist hover:text-creepy-blood"
                        >
                          <Icon name="X" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="backstory" className="text-creepy-bone">История персонажа *</Label>
              <Textarea
                id="backstory"
                name="backstory"
                value={character.backstory}
                onChange={handleChange}
                className="bg-creepy-dark border-creepy-mist text-creepy-bone h-40"
                placeholder="Расскажите жуткую историю вашего персонажа..."
                required
              />
            </div>
            
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-creepy-blood hover:bg-red-900 text-creepy-bone w-full sm:w-auto"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" className="animate-spin" />
                    <span>Создание...</span>
                  </>
                ) : (
                  <>
                    <Icon name="PlusCircle" />
                    <span>Создать персонажа</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
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

export default CreateCharacter;

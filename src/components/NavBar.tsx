
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./ui/icon";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-creepy-dark text-creepy-bone border-b border-creepy-mist">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Skull" className="text-creepy-blood h-8 w-8" />
            <span className="font-creepster text-3xl text-creepy-blood">CreepyTales</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-3 md:mt-0 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Поиск историй..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-creepy-shadow text-creepy-bone border-creepy-mist pl-8"
            />
            <Icon
              name="Search"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-creepy-mist h-4 w-4"
            />
          </div>

          <NavigationMenu className="mt-2 md:mt-0">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-creepy-bone hover:bg-creepy-shadow">
                  Истории
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-creepy-shadow text-creepy-bone">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-creepy-dark p-6 no-underline outline-none focus:shadow-md"
                          href="/stories"
                        >
                          <Icon name="BookOpen" className="h-6 w-6 text-creepy-blood" />
                          <div className="mb-2 mt-4 text-lg font-medium text-creepy-blood">
                            Популярные истории
                          </div>
                          <p className="text-sm leading-tight text-creepy-bone opacity-80">
                            Самые страшные истории нашего сообщества
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/stories/new" title="Новые истории" icon="FileText">
                      Свежие кошмары от наших авторов
                    </ListItem>
                    <ListItem href="/stories/categories" title="Категории" icon="Tags">
                      Истории по категориям и тегам
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-creepy-bone hover:bg-creepy-shadow">
                  Персонажи
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-creepy-shadow text-creepy-bone">
                    <ListItem href="/characters" title="Галерея персонажей" icon="Users">
                      Монстры и кошмары пользователей
                    </ListItem>
                    <ListItem href="/characters/create" title="Создать персонажа" icon="UserPlus">
                      Создайте собственное чудовище
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-2 mt-2 md:mt-0">
            <Button
              variant="outline"
              className="border-creepy-blood text-creepy-bone hover:bg-creepy-blood"
              asChild
            >
              <Link to="/signin">Войти</Link>
            </Button>
            <Button className="bg-creepy-blood text-creepy-bone hover:bg-red-900" asChild>
              <Link to="/signup">Регистрация</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: string; title: string }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-creepy-mist hover:text-creepy-bone focus:bg-creepy-mist focus:text-creepy-bone",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            <Icon name={icon} className="h-4 w-4 text-creepy-blood" />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-creepy-bone opacity-80">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;

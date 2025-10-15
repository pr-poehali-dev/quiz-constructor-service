import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"start" | "questions" | "form">("start");
  const [questions, setQuestions] = useState<any[]>([]);

  const templates = [
    {
      title: "Создать квиз без шаблона",
      icon: "Plus",
      action: "create"
    },
    {
      title: "Быстрый опросник",
      icon: "FileText",
      action: "select"
    },
    {
      title: "Магазин",
      icon: "ShoppingBag",
      action: "select"
    },
    {
      title: "Калькулятор",
      icon: "Calculator",
      action: "select"
    },
    {
      title: "Скоро будет",
      icon: "Lock",
      action: "locked",
      locked: true
    },
    {
      title: "Скоро будет",
      icon: "Lock",
      action: "locked",
      locked: true
    }
  ];

  const readyTemplates = [
    {
      title: "Подбор недвижимости",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости ремонта квартиры",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости строительства загородного дома",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости стоматологических услуг",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости установки системы охраны",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости отопления",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимость окон",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости ремонта автомобиля",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости химчистки",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Подбор автомобиля на вторичном рынке",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    },
    {
      title: "Расчет стоимости дизайна интерьера",
      image: "https://cdn.poehali.dev/files/25761ba0-c7be-445b-8780-f82cf42e90a7.png"
    }
  ];

  const questionTypes = [
    { name: "Варианты ответов", icon: "List" },
    { name: "Варианты с картинками", icon: "ImageIcon" },
    { name: "Варианты и картинка", icon: "LayoutGrid" },
    { name: "Калькулятор", icon: "Calculator" }
  ];

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), title: "", answers: [""] }]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white flex">
      <aside className="w-80 bg-[#0f1520] border-r border-white/5 flex flex-col">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">Qz</span>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-7 h-7">
                <AvatarImage src="" />
                <AvatarFallback className="bg-blue-600 text-white text-xs">L</AvatarFallback>
              </Avatar>
              <span className="text-sm">L23.F</span>
              <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                <Icon name="Check" size={10} className="mr-1" />
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-white/60">
            <Icon name="User" size={20} />
          </Button>
        </div>

        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-white/60">
            <Icon name="Home" size={18} />
            <span className="text-sm">Все заявки</span>
          </div>
          
          <div className="px-3 py-2 text-white/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/40">Тариф</span>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Icon name="Plus" size={14} />
              </Button>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-between group">
            Создать квиз
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="px-3 py-2">
            <span className="text-sm text-white/40">Черновик</span>
          </div>

          <div className="px-3 py-2">
            <div className="text-sm text-white/60 flex items-center justify-between">
              <span>Мои квизы</span>
              <span className="text-xs text-white/40">8</span>
            </div>
          </div>
        </div>

        <div className="mt-auto p-4 space-y-2 border-t border-white/5">
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white">
            <Icon name="CircleHelp" size={18} className="mr-2" />
            Написать в поддержку
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white/60 hover:text-white">
            Сменить аккаунт
          </Button>
          <div className="px-3 py-2 text-xs text-white/40">
            Реферальная программа
            <Button className="w-full mt-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs">
              Подробнее
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">Создать квиз</h1>
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={18} />
            </Button>
          </div>
        </header>

        {activeTab === "start" && (
          <div className="flex-1 overflow-auto p-6">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="grid grid-cols-3 gap-4">
                {templates.map((template, index) => (
                  <Card 
                    key={index}
                    className={`bg-[#0f1520] border-white/10 hover:border-blue-500/50 transition-all p-6 cursor-pointer group ${
                      template.locked ? 'opacity-50' : ''
                    }`}
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        template.locked ? 'bg-white/5' : 'bg-blue-600/20 group-hover:bg-blue-600/30'
                      }`}>
                        <Icon 
                          name={template.icon as any} 
                          size={28} 
                          className={template.locked ? 'text-white/30' : 'text-blue-400'}
                        />
                      </div>
                      <h3 className="text-sm font-medium">{template.title}</h3>
                      {!template.locked && template.action === "create" ? (
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => setActiveTab("questions")}
                        >
                          Создать с нуля
                        </Button>
                      ) : !template.locked ? (
                        <div className="flex gap-2 w-full">
                          <Button variant="outline" className="flex-1 border-white/10">
                            Выбрать
                          </Button>
                          <Button variant="ghost" size="icon" className="border border-white/10">
                            <Icon name="Eye" size={16} />
                          </Button>
                        </div>
                      ) : (
                        <Button variant="outline" disabled className="w-full border-white/10">
                          <Icon name="Lock" size={14} className="mr-2" />
                          Посмотреть
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Готовые шаблоны по нишам</h2>
                <div className="grid grid-cols-3 gap-4">
                  {readyTemplates.map((template, index) => (
                    <Card 
                      key={index}
                      className="bg-[#0f1520] border-white/10 hover:border-blue-500/50 transition-all overflow-hidden group cursor-pointer"
                    >
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium mb-3">{template.title}</h3>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 border-white/10 text-xs">
                            Выбрать
                          </Button>
                          <Button variant="ghost" size="icon" className="border border-white/10 h-9 w-9">
                            <Icon name="Eye" size={14} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-blue-600/10 border-blue-500/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">Qz</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/80">Сложности с выбором?</p>
                    <p className="text-xs text-white/60">Напишите нам. Мы поможем выбрать нужный макет</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20">
                      <Icon name="MessageCircle" size={18} />
                    </Button>
                    <Button size="icon" variant="ghost" className="bg-white/10 hover:bg-white/20">
                      <Icon name="Send" size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "questions" && (
          <div className="flex-1 overflow-auto">
            <div className="border-b border-white/5">
              <div className="flex items-center gap-4 px-6 py-3">
                <Button
                  variant={activeTab === "start" ? "default" : "ghost"}
                  className={activeTab === "start" ? "bg-blue-600" : ""}
                  onClick={() => setActiveTab("start")}
                >
                  Стартовая страница
                </Button>
                <Button
                  variant={activeTab === "questions" ? "default" : "ghost"}
                  className={activeTab === "questions" ? "bg-blue-600" : ""}
                >
                  Вопросы
                </Button>
                <Button
                  variant={activeTab === "form" ? "default" : "ghost"}
                  className={activeTab === "form" ? "bg-blue-600" : ""}
                  onClick={() => setActiveTab("form")}
                >
                  Форма контактов
                </Button>
              </div>
            </div>

            <div className="p-6 max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-medium">Заголовок страницы</h2>
                  <Icon name="Pencil" size={16} className="text-white/40" />
                </div>
              </div>

              <Input 
                placeholder="Впишите заголовок вопроса"
                className="bg-[#0f1520] border-white/10 mb-6"
              />

              <div className="grid grid-cols-4 gap-3 mb-6">
                {questionTypes.map((type, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-white/10 bg-[#0f1520] hover:bg-blue-600/20 hover:border-blue-500/50 h-auto py-4 flex flex-col gap-2"
                  >
                    <Icon name={type.icon as any} size={24} className="text-blue-400" />
                    <span className="text-xs">{type.name}</span>
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                {questions.map((question, index) => (
                  <Card key={question.id} className="bg-[#0f1520] border-white/10 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 flex-1">
                        <Icon name="List" size={20} className="text-blue-400" />
                        <Input 
                          placeholder="Впишите заголовок вопроса"
                          className="bg-transparent border-none text-base px-0"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/40">Необязательный вопрос</span>
                        <Badge variant="outline" className="border-white/20">
                          {index + 1}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <Input 
                        placeholder="Добавьте ответ"
                        className="bg-[#0a0f1a] border-white/10"
                      />
                      <p className="text-xs text-white/40 px-3">
                        Добавьте ответ или нажмите "Enter"
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        onClick={() => removeQuestion(question.id)}
                      >
                        <Icon name="X" size={14} className="mr-1" />
                        Удалить этот вопрос
                      </Button>
                    </div>
                  </Card>
                ))}

                <Button
                  onClick={addQuestion}
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700"
                >
                  <Icon name="Plus" size={24} />
                </Button>
              </div>

              <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/5">
                <Button 
                  variant="ghost"
                  className="text-white/60 hover:text-white"
                >
                  <Icon name="X" size={16} className="mr-2" />
                  Очистить все
                </Button>
                <Button className="bg-transparent border border-white/20 hover:bg-white/5">
                  Настроить форму
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}

        <footer className="h-16 border-t border-white/5 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-white/60">
              <Icon name="Eye" size={16} className="mr-2" />
              Предпросмотр
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Icon name="Monitor" size={16} />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 bg-blue-600">
              <Icon name="Smartphone" size={16} />
            </Button>
          </div>
          
          <Button className="bg-blue-600 hover:bg-blue-700 px-6">
            Опубликовать
          </Button>
        </footer>
      </main>

      <aside className="w-80 bg-[#0f1520] border-l border-white/5 p-6">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" size="icon">
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={20} />
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Редактор</h3>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-between">
              Редактор
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-start border-white/10"
            >
              <Icon name="Settings" size={18} className="mr-2" />
              Установка
            </Button>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-start border-white/10"
            >
              <Icon name="Zap" size={18} className="mr-2" />
              Запуск рекламы
            </Button>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-start border-white/10"
            >
              <Icon name="LayoutGrid" size={18} className="mr-2" />
              Расширения
            </Button>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-start border-white/10"
            >
              <Icon name="Palette" size={18} className="mr-2" />
              Дизайн
            </Button>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-start border-white/10"
            >
              <Icon name="Link" size={18} className="mr-2" />
              Интеграции
            </Button>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-start border-white/10"
            >
              <Icon name="Settings" size={18} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-sm font-medium mb-3">Pages</h4>
          <div className="flex items-center gap-2 px-3 py-2 rounded bg-white/5">
            <Icon name="Lock" size={14} />
            <span className="text-sm text-white/60">Скоро будет</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;

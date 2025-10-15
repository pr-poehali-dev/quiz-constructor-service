import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Zap",
      title: "Быстрое создание",
      description: "Создавайте квизы за минуты с помощью интуитивного конструктора"
    },
    {
      icon: "BarChart3",
      title: "Аналитика",
      description: "Отслеживайте конверсию и результаты в реальном времени"
    },
    {
      icon: "Users",
      title: "Управление заявками",
      description: "Получайте контакты клиентов и управляйте ими из одного места"
    },
    {
      icon: "Paintbrush",
      title: "Гибкая настройка",
      description: "Настраивайте дизайн и логику квиза под ваши задачи"
    },
    {
      icon: "Eye",
      title: "Предпросмотр",
      description: "Тестируйте квиз перед публикацией в режиме реального времени"
    },
    {
      icon: "Share2",
      title: "Интеграции",
      description: "Подключайте CRM, email-рассылки и другие сервисы"
    }
  ];

  const plans = [
    {
      name: "Базовый",
      price: "0₽",
      period: "навсегда",
      features: ["1 активный квиз", "До 100 заявок/мес", "Базовая аналитика", "Поддержка email"],
      highlighted: false
    },
    {
      name: "Профи",
      price: "1234₽",
      period: "в месяц",
      features: ["До 10 квизов", "До 1000 заявок/мес", "Полная аналитика", "Интеграции", "Приоритетная поддержка"],
      highlighted: true
    },
    {
      name: "Бизнес",
      price: "5000₽",
      period: "в месяц",
      features: ["Безлимит квизов", "Безлимит заявок", "Расширенная аналитика", "Все интеграции", "Персональный менеджер", "Белый лейбл"],
      highlighted: false
    }
  ];

  const examples = [
    {
      title: "Натяжные потолки",
      submissions: 4,
      conversion: 22,
      status: "active"
    },
    {
      title: "Мойки из камня",
      submissions: 0,
      conversion: 0,
      status: "converting"
    },
    {
      title: "Универсальный фитнес-тренер",
      submissions: 2,
      conversion: 15,
      status: "preview"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              Qz
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Тарифы
            </a>
            <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
              Примеры
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Войти
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Конструктор квизов нового поколения
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Создавайте квизы,<br />которые продают
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Интерактивный конструктор для создания квизов с высокой конверсией. 
              Без программирования, с полной аналитикой и интеграциями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Создать квиз
                <Icon name="Sparkles" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Смотреть примеры
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности конструктора</h2>
            <p className="text-muted-foreground text-lg">
              Всё необходимое для создания эффективных квизов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-muted-foreground text-lg">
              Выберите подходящий план для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 relative ${plan.highlighted ? 'border-primary shadow-lg shadow-primary/20 scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.period}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры готовых квизов</h2>
            <p className="text-muted-foreground text-lg">
              Посмотрите, как работают квизы наших клиентов
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {examples.map((example, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-muted-foreground font-mono text-sm">
                      №{index + 1}
                    </div>
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Icon name="Send" className="text-muted-foreground" size={16} />
                      <span className="text-sm">
                        Заявки: <span className="font-semibold">{example.submissions}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="TrendingUp" className="text-muted-foreground" size={16} />
                      <span className="text-sm">
                        Конверсия: <span className="font-semibold">{example.conversion}%</span>
                      </span>
                    </div>
                    <Badge 
                      variant="outline"
                      className={
                        example.status === 'active' ? 'border-green-500/50 text-green-500' :
                        example.status === 'converting' ? 'border-primary/50 text-primary' :
                        'border-muted-foreground/50'
                      }
                    >
                      {example.status === 'active' ? 'Активен' :
                       example.status === 'converting' ? 'Конверсия' :
                       'Предпросмотр'}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Открыть
                      <Icon name="ExternalLink" className="ml-2" size={14} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы начать?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Создайте свой первый квиз бесплатно прямо сейчас
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              Создать квиз
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                Qz
              </div>
              <span className="text-muted-foreground text-sm">© 2024 Quiz Constructor</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Написать в поддержку
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Партнёрская программа
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

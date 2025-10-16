import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface Topic {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  replies: number;
  views: number;
  rating: number;
  category: string;
  lastActivity: string;
}

const categories = [
  { name: 'Главная', icon: 'Home', color: 'bg-[#4A7C59]' },
  { name: 'Поведение и воспитание', icon: 'Brain', color: 'bg-[#8B7355]' },
  { name: 'Стримминг', icon: 'Sparkles', color: 'bg-[#E8DCC4]' },
  { name: 'Здоровье и ветеринария', icon: 'Heart', color: 'bg-[#4A7C59]' },
  { name: 'Питание и рацион', icon: 'Apple', color: 'bg-[#8B7355]' },
  { name: 'Фотогалерея питомцев', icon: 'Camera', color: 'bg-[#E8DCC4]' },
  { name: 'Уход за сахарным поссумом', icon: 'Leaf', color: 'bg-[#4A7C59]' },
];

const mockTopics: Topic[] = [
  {
    id: 1,
    title: 'Мой поссум не хочет спускаться с дерева',
    author: 'Анна Петрова',
    authorAvatar: 'AP',
    replies: 24,
    views: 156,
    rating: 87,
    category: 'Поведение и воспитание',
    lastActivity: '2 часа назад'
  },
  {
    id: 2,
    title: 'Лучший рацион для малыша поссума',
    author: 'Максим Соколов',
    authorAvatar: 'МС',
    replies: 45,
    views: 289,
    rating: 142,
    category: 'Питание и рацион',
    lastActivity: '5 часов назад'
  },
  {
    id: 3,
    title: 'Познакомьтесь с моей Лили! 🌸',
    author: 'Елена Волкова',
    authorAvatar: 'ЕВ',
    replies: 67,
    views: 523,
    rating: 215,
    category: 'Фотогалерея питомцев',
    lastActivity: '1 день назад'
  },
  {
    id: 4,
    title: 'Вопрос по прививкам для поссумов',
    author: 'Игорь Смирнов',
    authorAvatar: 'ИС',
    replies: 31,
    views: 198,
    rating: 94,
    category: 'Здоровье и ветеринария',
    lastActivity: '3 часа назад'
  },
  {
    id: 5,
    title: 'Как приучить к лотку?',
    author: 'Ольга Кузнецова',
    authorAvatar: 'ОК',
    replies: 52,
    views: 341,
    rating: 128,
    category: 'Поведение и воспитание',
    lastActivity: '4 часа назад'
  }
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('Главная');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = mockTopics.filter(topic => 
    (activeCategory === 'Главная' || topic.category === activeCategory) &&
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-[#E8DCC4] to-[#F5F5F0]">
      <header className="bg-[#4A7C59] text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🐾</div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Sugar Glider Forum</h1>
                <p className="text-[#E8DCC4] text-sm mt-1">Сообщество владельцев сахарных поссумов</p>
              </div>
            </div>
            <Button className="bg-[#8B7355] hover:bg-[#6d5a42] text-white rounded-full px-6">
              <Icon name="UserPlus" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-[#E8DCC4] shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="text-[#4A7C59] flex items-center gap-2">
                  <Icon name="FolderTree" size={20} />
                  Разделы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      activeCategory === category.name
                        ? 'bg-[#4A7C59] text-white shadow-md scale-105'
                        : 'bg-[#F5F5F0] text-[#2C2C2C] hover:bg-[#E8DCC4]'
                    }`}
                  >
                    <Icon name={category.icon as any} size={18} />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-[#E8DCC4] shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-[#4A7C59] flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Топ участников
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: 'Елена Волкова', rating: 2150, avatar: 'ЕВ' },
                  { name: 'Максим Соколов', rating: 1890, avatar: 'МС' },
                  { name: 'Анна Петрова', rating: 1654, avatar: 'АП' }
                ].map((user, index) => (
                  <div key={user.name} className="flex items-center gap-3">
                    <Badge className={`${index === 0 ? 'bg-[#8B7355]' : 'bg-[#4A7C59]'} text-white`}>
                      #{index + 1}
                    </Badge>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-[#E8DCC4] text-[#2C2C2C] text-xs">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#2C2C2C]">{user.name}</p>
                      <p className="text-xs text-[#8B7355]">{user.rating} баллов</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-6 animate-fade-in">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B7355]" />
                <Input
                  placeholder="Поиск по форуму..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 rounded-2xl border-[#E8DCC4] bg-white/80 backdrop-blur-sm focus:ring-[#4A7C59] focus:border-[#4A7C59]"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredTopics.map((topic, index) => (
                <Card 
                  key={topic.id} 
                  className="bg-white/90 backdrop-blur-sm border-[#E8DCC4] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 flex-1">
                        <Avatar className="h-12 w-12 border-2 border-[#E8DCC4]">
                          <AvatarFallback className="bg-[#4A7C59] text-white font-semibold">
                            {topic.authorAvatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-[#2C2C2C] hover:text-[#4A7C59] transition-colors cursor-pointer mb-1">
                            {topic.title}
                          </CardTitle>
                          <div className="flex items-center gap-3 text-sm text-[#8B7355]">
                            <span className="font-medium">{topic.author}</span>
                            <span>•</span>
                            <span>{topic.lastActivity}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-[#8B7355] text-white whitespace-nowrap">
                        {topic.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-[#4A7C59]">
                        <Icon name="MessageCircle" size={18} />
                        <span className="font-medium">{topic.replies}</span>
                        <span className="text-[#8B7355]">ответов</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#4A7C59]">
                        <Icon name="Eye" size={18} />
                        <span className="font-medium">{topic.views}</span>
                        <span className="text-[#8B7355]">просмотров</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <div className="flex items-center gap-1 bg-[#4A7C59] text-white px-3 py-1 rounded-full">
                          <Icon name="TrendingUp" size={16} />
                          <span className="font-bold">{topic.rating}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="rounded-full border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white"
                        >
                          Читать
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <Card className="bg-white/80 backdrop-blur-sm border-[#E8DCC4] shadow-lg">
                <CardContent className="py-12 text-center">
                  <Icon name="Search" size={48} className="mx-auto text-[#E8DCC4] mb-4" />
                  <p className="text-[#8B7355] text-lg">Темы не найдены</p>
                  <p className="text-[#8B7355]/60 text-sm mt-2">Попробуйте изменить поисковый запрос</p>
                </CardContent>
              </Card>
            )}

            <div className="mt-8 flex justify-center">
              <Button className="bg-[#4A7C59] hover:bg-[#3a6247] text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg">
                <Icon name="Plus" size={20} className="mr-2" />
                Создать новую тему
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

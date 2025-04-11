import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  BarChart2,
  MapPin,
  MessageSquare,
  FileText,
  Search,
} from "lucide-react";
import PainelPromessas from "./PainelPromessas";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <BarChart2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Observatório de Caçapava
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Início
            </Link>
            <Link
              to="/promessas"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Promessas
            </Link>
            <Link
              to="/mapa"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Mapa
            </Link>
            <Link
              to="/pesquisas"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Pesquisas
            </Link>
            <Link
              to="/comunicacao"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Comunicação
            </Link>
            <Link
              to="/transparencia"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Transparência
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-300 text-slate-700"
            >
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Monitoramento Cívico para Caçapava
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Acompanhe promessas eleitorais, avalie serviços públicos e
              participe ativamente da gestão da cidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium px-6 py-3 rounded-full"
              >
                Explorar Promessas
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20 font-medium px-6 py-3 rounded-full"
              >
                Como Funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Cards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-slate-800">
            Navegue pela Plataforma
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Escolha a área que deseja explorar e comece a participar da
            transformação de Caçapava
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none overflow-hidden group">
              <div className="bg-emerald-500 h-2 w-full"></div>
              <CardHeader className="pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="bg-emerald-100 p-3 rounded-full group-hover:bg-emerald-200 transition-colors">
                    <FileText className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Painel de Promessas</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Acompanhe o cumprimento das promessas eleitorais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-slate-700">
                  Monitore o status de cada promessa, com evidências e linha do
                  tempo de progresso.
                </p>
                <Button
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                  asChild
                >
                  <Link to="/promessas">Acessar Painel</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none overflow-hidden group">
              <div className="bg-blue-500 h-2 w-full"></div>
              <CardHeader className="pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Mapa Interativo</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Visualize dados por região da cidade
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-slate-700">
                  Explore indicadores de satisfação por bairro e acompanhe obras
                  em andamento.
                </p>
                <Button
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                  asChild
                >
                  <Link to="/mapa">Explorar Mapa</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none overflow-hidden group">
              <div className="bg-amber-500 h-2 w-full"></div>
              <CardHeader className="pt-6">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="bg-amber-100 p-3 rounded-full group-hover:bg-amber-200 transition-colors">
                    <MessageSquare className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">Comunicação Cidadã</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Relate problemas e priorize demandas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-slate-700">
                  Compartilhe problemas do seu bairro e vote nas demandas mais
                  importantes.
                </p>
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                  asChild
                >
                  <Link to="/comunicacao">Participar</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content - Painel de Promessas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-800">
                Painel de Promessas
              </h2>
              <p className="text-slate-600 text-lg">
                Acompanhe o status das promessas eleitorais
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Tabs defaultValue="todas" className="w-full">
                <TabsList className="w-full md:w-auto bg-slate-100">
                  <TabsTrigger value="todas" className="flex-1 md:flex-initial">
                    Todas
                  </TabsTrigger>
                  <TabsTrigger value="saude" className="flex-1 md:flex-initial">
                    Saúde
                  </TabsTrigger>
                  <TabsTrigger
                    value="educacao"
                    className="flex-1 md:flex-initial"
                  >
                    Educação
                  </TabsTrigger>
                  <TabsTrigger
                    value="infraestrutura"
                    className="flex-1 md:flex-initial"
                  >
                    Infraestrutura
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            <Badge className="cursor-pointer bg-slate-800 text-white hover:bg-slate-700 px-4 py-1 text-sm">
              Todas
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 px-4 py-1 text-sm"
            >
              Em andamento
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-green-500 hover:text-white border-green-500 text-green-500 px-4 py-1 text-sm"
            >
              Concluídas
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-amber-500 hover:text-white border-amber-500 text-amber-500 px-4 py-1 text-sm"
            >
              Não iniciadas
            </Badge>
            <Badge
              variant="outline"
              className="cursor-pointer hover:bg-red-500 hover:text-white border-red-500 text-red-500 px-4 py-1 text-sm"
            >
              Descartadas
            </Badge>
          </div>

          {/* Painel de Promessas Component */}
          <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
            <PainelPromessas />
          </div>

          <div className="mt-10 text-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
              asChild
            >
              <Link to="/promessas">Ver todas as promessas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Participe do Observatório de Caçapava
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Sua participação é fundamental para construirmos uma cidade mais
              transparente e participativa.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Cadastre-se
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/20 font-medium px-8 py-3 rounded-full"
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <BarChart2 className="h-6 w-6 mr-2 text-blue-400" />
                Observatório de Caçapava
              </h3>
              <p className="text-slate-300">
                Plataforma de monitoramento cívico para transparência e
                participação cidadã.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4 text-blue-300">
                Navegação
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-blue-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-blue-400" />
                    </span>
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    to="/promessas"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-blue-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-blue-400" />
                    </span>
                    Promessas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mapa"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-blue-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-blue-400" />
                    </span>
                    Mapa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pesquisas"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-blue-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-blue-400" />
                    </span>
                    Pesquisas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4 text-green-300">
                Recursos
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/sobre"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-green-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-green-400" />
                    </span>
                    Sobre o Projeto
                  </Link>
                </li>
                <li>
                  <Link
                    to="/metodologia"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-green-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-green-400" />
                    </span>
                    Metodologia
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dados"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-green-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-green-400" />
                    </span>
                    Dados Abertos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contato"
                    className="text-slate-300 hover:text-white flex items-center"
                  >
                    <span className="bg-green-900/30 p-1 rounded mr-2 inline-flex">
                      <ChevronRight className="h-3 w-3 text-green-400" />
                    </span>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-4 text-purple-300">
                Conecte-se
              </h4>
              <p className="text-slate-300 mb-6">
                Receba atualizações sobre o Observatório
              </p>
              <div className="flex space-x-3">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                  size="icon"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button
                  className="bg-sky-500 hover:bg-sky-600 text-white rounded-full"
                  size="icon"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full"
                  size="icon"
                >
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
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Observatório de Caçapava. Todos
              os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

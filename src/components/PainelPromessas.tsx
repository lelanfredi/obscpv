import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter, ChevronDown } from "lucide-react";
import PromessaCard from "./PromessaCard";
import PromessaDetalhes from "./PromessaDetalhes";

interface Promessa {
  id: string;
  titulo: string;
  categoria: string;
  status: "não iniciada" | "em andamento" | "concluída" | "descartada";
  responsavel: string;
  descricao: string;
  dataAtualizacao: string;
  evidencias?: {
    tipo: string;
    url: string;
    descricao: string;
  }[];
  timeline?: {
    data: string;
    descricao: string;
  }[];
}

const PainelPromessas = () => {
  const [filtroCategoria, setFiltroCategoria] = useState<string>("todas");
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [termoBusca, setTermoBusca] = useState<string>("");
  const [promessaSelecionada, setPromessaSelecionada] =
    useState<Promessa | null>(null);
  const [modalAberto, setModalAberto] = useState<boolean>(false);

  // Dados de exemplo para promessas
  const promessas: Promessa[] = [
    {
      id: "1",
      titulo: "Construção de nova UBS no bairro Vila Menino Jesus",
      categoria: "saúde",
      status: "em andamento",
      responsavel: "Secretaria de Saúde",
      descricao:
        "Construção de uma nova Unidade Básica de Saúde no bairro Vila Menino Jesus para atender aproximadamente 5.000 moradores da região.",
      dataAtualizacao: "2023-10-15",
      evidencias: [
        {
          tipo: "foto",
          url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
          descricao: "Terreno preparado para início das obras",
        },
        {
          tipo: "documento",
          url: "#",
          descricao: "Contrato de licitação assinado",
        },
      ],
      timeline: [
        {
          data: "2023-05-10",
          descricao: "Anúncio do projeto",
        },
        {
          data: "2023-07-22",
          descricao: "Licitação concluída",
        },
        {
          data: "2023-09-15",
          descricao: "Início da preparação do terreno",
        },
      ],
    },
    {
      id: "2",
      titulo: "Revitalização da Praça da Bandeira",
      categoria: "infraestrutura",
      status: "concluída",
      responsavel: "Secretaria de Obras",
      descricao:
        "Revitalização completa da Praça da Bandeira, incluindo novos bancos, iluminação LED, playground e academia ao ar livre.",
      dataAtualizacao: "2023-08-20",
      evidencias: [
        {
          tipo: "foto",
          url: "https://images.unsplash.com/photo-1596140096558-9f52a3a7b9a1?w=800&q=80",
          descricao: "Praça revitalizada",
        },
      ],
      timeline: [
        {
          data: "2023-02-15",
          descricao: "Início das obras",
        },
        {
          data: "2023-08-10",
          descricao: "Conclusão da revitalização",
        },
      ],
    },
    {
      id: "3",
      titulo: "Programa de Alfabetização Digital para Idosos",
      categoria: "educação",
      status: "não iniciada",
      responsavel: "Secretaria de Educação",
      descricao:
        "Programa para ensinar habilidades básicas de informática e uso de smartphones para idosos em todas as regiões da cidade.",
      dataAtualizacao: "2023-09-05",
    },
    {
      id: "4",
      titulo: "Ampliação do efetivo da Guarda Municipal",
      categoria: "segurança",
      status: "em andamento",
      responsavel: "Secretaria de Segurança",
      descricao:
        "Contratação de 50 novos guardas municipais e aquisição de 10 novas viaturas para patrulhamento.",
      dataAtualizacao: "2023-11-01",
      evidencias: [
        {
          tipo: "documento",
          url: "#",
          descricao: "Edital de concurso público",
        },
      ],
      timeline: [
        {
          data: "2023-06-20",
          descricao: "Publicação do edital de concurso",
        },
        {
          data: "2023-09-15",
          descricao: "Realização das provas",
        },
        {
          data: "2023-10-30",
          descricao: "Divulgação dos resultados",
        },
      ],
    },
    {
      id: "5",
      titulo: "Criação do Parque Ecológico Municipal",
      categoria: "meio ambiente",
      status: "descartada",
      responsavel: "Secretaria de Meio Ambiente",
      descricao:
        "Criação de um parque ecológico com trilhas, centro de educação ambiental e áreas de preservação.",
      dataAtualizacao: "2023-07-10",
    },
    {
      id: "6",
      titulo: "Reforma da Escola Municipal João Paulo II",
      categoria: "educação",
      status: "concluída",
      responsavel: "Secretaria de Educação",
      descricao:
        "Reforma completa da estrutura física, incluindo telhado, banheiros, salas de aula e quadra esportiva.",
      dataAtualizacao: "2023-03-15",
      evidencias: [
        {
          tipo: "foto",
          url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
          descricao: "Escola reformada",
        },
      ],
      timeline: [
        {
          data: "2022-12-10",
          descricao: "Início das obras",
        },
        {
          data: "2023-02-28",
          descricao: "Conclusão da reforma",
        },
      ],
    },
  ];

  // Filtrar promessas com base nos critérios selecionados
  const promessasFiltradas = promessas.filter((promessa) => {
    const matchCategoria =
      filtroCategoria === "todas" || promessa.categoria === filtroCategoria;
    const matchStatus =
      filtroStatus === "todos" || promessa.status === filtroStatus;
    const matchBusca =
      termoBusca === "" ||
      promessa.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      promessa.descricao.toLowerCase().includes(termoBusca.toLowerCase());

    return matchCategoria && matchStatus && matchBusca;
  });

  // Função para abrir o modal de detalhes
  const abrirDetalhes = (promessa: Promessa) => {
    setPromessaSelecionada(promessa);
    setModalAberto(true);
  };

  // Função para fechar o modal de detalhes
  const fecharDetalhes = () => {
    setModalAberto(false);
  };

  // Categorias disponíveis para filtro
  const categorias = [
    "todas",
    "saúde",
    "educação",
    "segurança",
    "infraestrutura",
    "meio ambiente",
    "transporte",
    "cultura",
    "esporte",
    "assistência social",
  ];

  // Status disponíveis para filtro
  const statusOptions = [
    "todos",
    "não iniciada",
    "em andamento",
    "concluída",
    "descartada",
  ];

  // Função para obter a cor do badge com base no status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "não iniciada":
        return "bg-gray-500";
      case "em andamento":
        return "bg-blue-500";
      case "concluída":
        return "bg-green-500";
      case "descartada":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-white rounded-xl shadow-sm">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Painel de Promessas
        </h2>
        <p className="text-gray-600">
          Acompanhe o status das promessas eleitorais e seu cumprimento
        </p>
      </div>

      {/* Filtros e busca */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            placeholder="Buscar promessas..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex gap-2">
          <Select value={filtroCategoria} onValueChange={setFiltroCategoria}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Filter size={16} />
                <SelectValue placeholder="Categoria" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {categorias.map((categoria) => (
                <SelectItem key={categoria} value={categoria}>
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filtroStatus} onValueChange={setFiltroStatus}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <ChevronDown size={16} />
                <SelectValue placeholder="Status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((status) => (
                <SelectItem key={status} value={status}>
                  <div className="flex items-center gap-2">
                    {status !== "todos" && (
                      <div
                        className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}
                      />
                    )}
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabs para visualização */}
      <Tabs defaultValue="cards" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="lista">Lista</TabsTrigger>
        </TabsList>

        <TabsContent value="cards" className="w-full">
          {promessasFiltradas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promessasFiltradas.map((promessa) => (
                <PromessaCard
                  key={promessa.id}
                  promessa={promessa}
                  onClick={() => abrirDetalhes(promessa)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">
                Nenhuma promessa encontrada com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setFiltroCategoria("todas");
                  setFiltroStatus("todos");
                  setTermoBusca("");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="lista" className="w-full">
          {promessasFiltradas.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 border-b">Título</th>
                    <th className="text-left p-3 border-b">Categoria</th>
                    <th className="text-left p-3 border-b">Status</th>
                    <th className="text-left p-3 border-b">Responsável</th>
                    <th className="text-left p-3 border-b">Atualização</th>
                    <th className="text-left p-3 border-b">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {promessasFiltradas.map((promessa) => (
                    <tr key={promessa.id} className="hover:bg-gray-50">
                      <td className="p-3 border-b">{promessa.titulo}</td>
                      <td className="p-3 border-b capitalize">
                        {promessa.categoria}
                      </td>
                      <td className="p-3 border-b">
                        <Badge className={getStatusColor(promessa.status)}>
                          {promessa.status}
                        </Badge>
                      </td>
                      <td className="p-3 border-b">{promessa.responsavel}</td>
                      <td className="p-3 border-b">
                        {new Date(promessa.dataAtualizacao).toLocaleDateString(
                          "pt-BR",
                        )}
                      </td>
                      <td className="p-3 border-b">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => abrirDetalhes(promessa)}
                        >
                          Ver detalhes
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">
                Nenhuma promessa encontrada com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setFiltroCategoria("todas");
                  setFiltroStatus("todos");
                  setTermoBusca("");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Modal de detalhes */}
      {promessaSelecionada && (
        <PromessaDetalhes
          promessa={promessaSelecionada}
          aberto={modalAberto}
          onClose={fecharDetalhes}
        />
      )}
    </div>
  );
};

export default PainelPromessas;

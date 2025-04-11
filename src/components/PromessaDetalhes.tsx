import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CalendarIcon,
  CheckCircle2,
  Clock,
  FileText,
  Link2,
  MapPin,
  User2,
} from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface Evidence {
  type: "document" | "image" | "link";
  title: string;
  url: string;
  date: string;
}

interface PromessaDetalhesProps {
  isOpen?: boolean;
  onClose?: () => void;
  promessa?: {
    id: string;
    titulo: string;
    categoria: string;
    status: "não iniciada" | "em andamento" | "concluída" | "descartada";
    descricao: string;
    responsavel: string;
    dataPromessa: string;
    prazoEstimado: string;
    progresso: number;
    regiao: string;
    timeline: TimelineEvent[];
    evidencias: Evidence[];
  };
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "não iniciada":
      return "bg-slate-200 text-slate-800";
    case "em andamento":
      return "bg-blue-100 text-blue-800";
    case "concluída":
      return "bg-green-100 text-green-800";
    case "descartada":
      return "bg-red-100 text-red-800";
    default:
      return "bg-slate-200 text-slate-800";
  }
};

const PromessaDetalhes: React.FC<PromessaDetalhesProps> = ({
  isOpen = false,
  onClose = () => {},
  promessa = {
    id: "1",
    titulo: "Construção de nova UBS no bairro Vila Menino Jesus",
    categoria: "Saúde",
    status: "em andamento",
    descricao:
      "Construção de uma nova Unidade Básica de Saúde no bairro Vila Menino Jesus para atender aproximadamente 5.000 moradores da região leste da cidade. A unidade contará com 8 consultórios, sala de vacinação, farmácia e espaço para pequenos procedimentos.",
    responsavel: "Secretaria Municipal de Saúde",
    dataPromessa: "2022-09-15",
    prazoEstimado: "2024-12-31",
    progresso: 45,
    regiao: "Zona Leste",
    timeline: [
      {
        date: "2022-09-15",
        title: "Promessa realizada",
        description: "Durante comício no bairro Vila Menino Jesus",
      },
      {
        date: "2023-03-10",
        title: "Projeto aprovado",
        description: "Aprovação do projeto pela Câmara Municipal",
      },
      {
        date: "2023-06-22",
        title: "Licitação concluída",
        description: "Empresa XYZ Construções venceu o processo licitatório",
      },
      {
        date: "2023-08-15",
        title: "Início das obras",
        description: "Cerimônia de início das obras com presença do prefeito",
      },
    ],
    evidencias: [
      {
        type: "document",
        title: "Projeto Arquitetônico",
        url: "https://example.com/projeto.pdf",
        date: "2023-02-28",
      },
      {
        type: "image",
        title: "Foto do terreno",
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
        date: "2023-05-10",
      },
      {
        type: "image",
        title: "Início da construção",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
        date: "2023-08-15",
      },
      {
        type: "link",
        title: "Notícia sobre o andamento da obra",
        url: "https://example.com/noticia",
        date: "2023-11-20",
      },
    ],
  },
}) => {
  const [activeTab, setActiveTab] = useState("detalhes");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="outline" className="mb-2">
                {promessa.categoria}
              </Badge>
              <DialogTitle className="text-2xl font-bold">
                {promessa.titulo}
              </DialogTitle>
            </div>
            <Badge className={getStatusColor(promessa.status)}>
              {promessa.status.charAt(0).toUpperCase() +
                promessa.status.slice(1)}
            </Badge>
          </div>
          <DialogDescription className="text-base mt-2">
            {promessa.descricao}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Tabs
            defaultValue="detalhes"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
              <TabsTrigger value="timeline">Linha do Tempo</TabsTrigger>
              <TabsTrigger value="evidencias">Evidências</TabsTrigger>
            </TabsList>

            <TabsContent value="detalhes" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <User2 className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Responsável</p>
                        <p className="font-medium">{promessa.responsavel}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Região</p>
                        <p className="font-medium">{promessa.regiao}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">
                          Data da Promessa
                        </p>
                        <p className="font-medium">
                          {formatDate(promessa.dataPromessa)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Prazo Estimado</p>
                        <p className="font-medium">
                          {formatDate(promessa.prazoEstimado)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium">Progresso</p>
                      <p className="text-sm font-medium">
                        {promessa.progresso}%
                      </p>
                    </div>
                    <Progress value={promessa.progresso} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="relative pl-6 border-l-2 border-gray-200 space-y-6">
                      {promessa.timeline.map((event, index) => (
                        <div key={index} className="relative">
                          <div className="absolute -left-[17px] bg-white p-1">
                            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">
                              {formatDate(event.date)}
                            </p>
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="evidencias" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {promessa.evidencias.map((evidencia, index) => (
                        <div
                          key={index}
                          className="border rounded-lg overflow-hidden"
                        >
                          {evidencia.type === "image" && (
                            <div className="h-40 overflow-hidden">
                              <img
                                src={evidencia.url}
                                alt={evidencia.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="p-3">
                            <div className="flex items-center gap-2 mb-2">
                              {evidencia.type === "document" && (
                                <FileText className="h-4 w-4 text-blue-600" />
                              )}
                              {evidencia.type === "link" && (
                                <Link2 className="h-4 w-4 text-green-600" />
                              )}
                              {evidencia.type === "image" && <></>}
                              <p className="text-sm text-gray-500">
                                {formatDate(evidencia.date)}
                              </p>
                            </div>
                            <h4 className="font-medium">{evidencia.title}</h4>
                            <a
                              href={evidencia.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline mt-1 inline-block"
                            >
                              {evidencia.type === "image"
                                ? "Ver imagem em tamanho completo"
                                : "Acessar"}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PromessaDetalhes;

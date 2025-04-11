import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Info,
  Construction,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";

interface Neighborhood {
  id: string;
  name: string;
  satisfactionLevel: "high" | "medium" | "low";
  coordinates: { x: number; y: number };
}

interface Project {
  id: string;
  name: string;
  description: string;
  status: "planned" | "in-progress" | "completed" | "delayed";
  type: "infrastructure" | "education" | "health" | "security" | "other";
  location: string;
  coordinates: { x: number; y: number };
  startDate: string;
  endDate?: string;
  budget: number;
  progress: number;
}

const MapaInterativo = () => {
  // Mock data for neighborhoods
  const neighborhoods: Neighborhood[] = [
    {
      id: "1",
      name: "Centro",
      satisfactionLevel: "high",
      coordinates: { x: 250, y: 250 },
    },
    {
      id: "2",
      name: "Vila Resende",
      satisfactionLevel: "medium",
      coordinates: { x: 350, y: 200 },
    },
    {
      id: "3",
      name: "Jardim Rafael",
      satisfactionLevel: "low",
      coordinates: { x: 150, y: 300 },
    },
    {
      id: "4",
      name: "Vila Menino Jesus",
      satisfactionLevel: "medium",
      coordinates: { x: 400, y: 350 },
    },
    {
      id: "5",
      name: "Piedade",
      satisfactionLevel: "high",
      coordinates: { x: 300, y: 150 },
    },
  ];

  // Mock data for projects
  const projects: Project[] = [
    {
      id: "1",
      name: "Reforma da Praça Central",
      description:
        "Revitalização completa da praça central com novos bancos, iluminação e paisagismo.",
      status: "in-progress",
      type: "infrastructure",
      location: "Centro",
      coordinates: { x: 260, y: 260 },
      startDate: "2023-06-15",
      endDate: "2023-12-30",
      budget: 500000,
      progress: 65,
    },
    {
      id: "2",
      name: "Construção de UBS",
      description:
        "Construção de nova Unidade Básica de Saúde com 10 consultórios.",
      status: "planned",
      type: "health",
      location: "Vila Resende",
      coordinates: { x: 360, y: 210 },
      startDate: "2024-01-10",
      budget: 1200000,
      progress: 0,
    },
    {
      id: "3",
      name: "Pavimentação de Ruas",
      description: "Asfaltamento de 5 ruas principais do bairro.",
      status: "completed",
      type: "infrastructure",
      location: "Jardim Rafael",
      coordinates: { x: 160, y: 310 },
      startDate: "2023-02-10",
      endDate: "2023-05-20",
      budget: 800000,
      progress: 100,
    },
    {
      id: "4",
      name: "Reforma da Escola Municipal",
      description:
        "Reforma completa da estrutura e ampliação de salas de aula.",
      status: "delayed",
      type: "education",
      location: "Vila Menino Jesus",
      coordinates: { x: 410, y: 360 },
      startDate: "2023-01-15",
      endDate: "2023-08-30",
      budget: 950000,
      progress: 40,
    },
  ];

  const [selectedNeighborhood, setSelectedNeighborhood] =
    useState<Neighborhood | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectTypeFilter, setProjectTypeFilter] = useState<string>("all");
  const [projectStatusFilter, setProjectStatusFilter] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    if (projectTypeFilter !== "all" && project.type !== projectTypeFilter)
      return false;
    if (projectStatusFilter !== "all" && project.status !== projectStatusFilter)
      return false;
    return true;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "planned":
        return <Info className="h-4 w-4 text-blue-500" />;
      case "in-progress":
        return <Construction className="h-4 w-4 text-yellow-500" />;
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "delayed":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned":
        return "bg-blue-100 text-blue-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "delayed":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  const getSatisfactionColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Mapa Interativo de Caçapava
        </h2>
        <p className="text-gray-600">
          Visualize bairros, projetos em andamento e indicadores de satisfação.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters */}
        <div className="w-full lg:w-1/4 space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Filtros</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Tipo de Projeto
                  </label>
                  <Select
                    value={projectTypeFilter}
                    onValueChange={setProjectTypeFilter}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os tipos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os tipos</SelectItem>
                      <SelectItem value="infrastructure">
                        Infraestrutura
                      </SelectItem>
                      <SelectItem value="education">Educação</SelectItem>
                      <SelectItem value="health">Saúde</SelectItem>
                      <SelectItem value="security">Segurança</SelectItem>
                      <SelectItem value="other">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Status do Projeto
                  </label>
                  <Select
                    value={projectStatusFilter}
                    onValueChange={setProjectStatusFilter}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os status</SelectItem>
                      <SelectItem value="planned">Planejado</SelectItem>
                      <SelectItem value="in-progress">Em andamento</SelectItem>
                      <SelectItem value="completed">Concluído</SelectItem>
                      <SelectItem value="delayed">Atrasado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-medium mb-2">Legenda</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Satisfação Alta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Satisfação Média</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">Satisfação Baixa</span>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Info className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Planejado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Construction className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Em andamento</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Concluído</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Atrasado</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Projetos</h3>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm">{project.name}</h4>
                        {getStatusIcon(project.status)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={getStatusColor(project.status)}
                        >
                          {project.status === "planned" && "Planejado"}
                          {project.status === "in-progress" && "Em andamento"}
                          {project.status === "completed" && "Concluído"}
                          {project.status === "delayed" && "Atrasado"}
                        </Badge>
                        <Badge variant="outline">{project.location}</Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm">
                    Nenhum projeto encontrado com os filtros selecionados.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="w-full lg:w-3/4">
          <Card className="h-[600px]">
            <CardContent className="p-0 h-full relative">
              <div className="w-full h-full bg-gray-100 relative overflow-hidden">
                {/* This would be replaced with an actual map component */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1577086664693-894d8405334a?w=1200&q=80')] bg-cover bg-center opacity-20 absolute"></div>

                <div className="absolute inset-0 p-4">
                  {/* Neighborhood indicators */}
                  {neighborhoods.map((neighborhood) => (
                    <div
                      key={neighborhood.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${neighborhood.coordinates.x}px`,
                        top: `${neighborhood.coordinates.y}px`,
                      }}
                      onClick={() => setSelectedNeighborhood(neighborhood)}
                    >
                      <div
                        className={`w-6 h-6 rounded-full ${getSatisfactionColor(neighborhood.satisfactionLevel)} flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md`}
                      >
                        {neighborhood.id}
                      </div>
                    </div>
                  ))}

                  {/* Project markers */}
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${project.coordinates.x}px`,
                        top: `${project.coordinates.y}px`,
                      }}
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="bg-white p-1 rounded-full shadow-md border border-gray-300">
                        {getStatusIcon(project.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Neighborhood Dialog */}
      <Dialog
        open={!!selectedNeighborhood}
        onOpenChange={() => setSelectedNeighborhood(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedNeighborhood?.name}</DialogTitle>
            <DialogDescription>
              Informações sobre o bairro e indicadores de satisfação
            </DialogDescription>
          </DialogHeader>

          {selectedNeighborhood && (
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full ${getSatisfactionColor(selectedNeighborhood.satisfactionLevel)}`}
                ></div>
                <span>
                  Nível de Satisfação:
                  {selectedNeighborhood.satisfactionLevel === "high" && " Alto"}
                  {selectedNeighborhood.satisfactionLevel === "medium" &&
                    " Médio"}
                  {selectedNeighborhood.satisfactionLevel === "low" && " Baixo"}
                </span>
              </div>

              <div>
                <h4 className="font-medium mb-2">Projetos no Bairro</h4>
                <div className="space-y-2">
                  {projects
                    .filter(
                      (project) =>
                        project.location === selectedNeighborhood.name,
                    )
                    .map((project) => (
                      <div key={project.id} className="p-3 border rounded-md">
                        <div className="flex items-center justify-between">
                          <h5 className="font-medium">{project.name}</h5>
                          {getStatusIcon(project.status)}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {project.description}
                        </p>
                      </div>
                    ))}

                  {projects.filter(
                    (project) => project.location === selectedNeighborhood.name,
                  ).length === 0 && (
                    <p className="text-gray-500 text-sm">
                      Nenhum projeto cadastrado para este bairro.
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedNeighborhood(null)}
                  className="w-full"
                >
                  Fechar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Project Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.name}</DialogTitle>
            <DialogDescription>
              Detalhes do projeto e status atual
            </DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <div className="mt-4 space-y-4">
              <p className="text-gray-700">{selectedProject.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Local</h4>
                  <p>{selectedProject.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Status</h4>
                  <div className="flex items-center gap-2 mt-1">
                    {getStatusIcon(selectedProject.status)}
                    <span>
                      {selectedProject.status === "planned" && "Planejado"}
                      {selectedProject.status === "in-progress" &&
                        "Em andamento"}
                      {selectedProject.status === "completed" && "Concluído"}
                      {selectedProject.status === "delayed" && "Atrasado"}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Data de Início
                  </h4>
                  <p>
                    {new Date(selectedProject.startDate).toLocaleDateString(
                      "pt-BR",
                    )}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Previsão de Término
                  </h4>
                  <p>
                    {selectedProject.endDate
                      ? new Date(selectedProject.endDate).toLocaleDateString(
                          "pt-BR",
                        )
                      : "A definir"}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">
                    Orçamento
                  </h4>
                  <p>R$ {selectedProject.budget.toLocaleString("pt-BR")}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Tipo</h4>
                  <p>
                    {selectedProject.type === "infrastructure" &&
                      "Infraestrutura"}
                    {selectedProject.type === "education" && "Educação"}
                    {selectedProject.type === "health" && "Saúde"}
                    {selectedProject.type === "security" && "Segurança"}
                    {selectedProject.type === "other" && "Outro"}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  Progresso
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${selectedProject.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">0%</span>
                  <span className="text-xs text-gray-500">
                    {selectedProject.progress}%
                  </span>
                  <span className="text-xs text-gray-500">100%</span>
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                >
                  Fechar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapaInterativo;

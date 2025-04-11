import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

interface PromessaCardProps {
  id: string;
  titulo: string;
  categoria: string;
  status: "não iniciada" | "em andamento" | "concluída" | "descartada";
  responsavel: string;
  descricao: string;
  progresso: number;
  dataAtualizacao: string;
  onClick?: (id: string) => void;
}

const statusColors = {
  "não iniciada": "bg-slate-200 text-slate-800",
  "em andamento": "bg-blue-100 text-blue-800",
  concluída: "bg-green-100 text-green-800",
  descartada: "bg-red-100 text-red-800",
};

const PromessaCard = ({
  id,
  titulo = "Título da Promessa",
  categoria = "Categoria",
  status = "não iniciada",
  responsavel = "Nome do Responsável",
  descricao = "Descrição breve da promessa eleitoral feita durante a campanha.",
  progresso = 0,
  dataAtualizacao = "01/01/2023",
  onClick = () => {},
}: PromessaCardProps) => {
  return (
    <Card className="w-[350px] h-[220px] overflow-hidden hover:shadow-md transition-shadow bg-white">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-base line-clamp-1">{titulo}</h3>
            <Badge variant="outline" className="mt-1">
              {categoria}
            </Badge>
          </div>
          <Badge className={`${statusColors[status]}`}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{descricao}</p>
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <User size={14} className="mr-1" />
          <span>{responsavel}</span>
        </div>
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1">
            <span>Progresso</span>
            <span>{progresso}%</span>
          </div>
          <Progress value={progresso} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center text-xs text-gray-500">
          <Calendar size={14} className="mr-1" />
          <span>Atualizado em {dataAtualizacao}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onClick(id)}
          className="text-xs"
        >
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PromessaCard;

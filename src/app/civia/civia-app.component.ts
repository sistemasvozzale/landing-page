import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

type Tone = "green" | "amber" | "blue" | "red" | "gray";

@Component({
  selector: "app-civia",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./civia-app.component.html",
  styleUrl: "./civia-app.component.css"
})
export class CiviaAppComponent {
  drawerOpen = false;
  active = "dashboard";
  notificationsOpen = false;
  selectedRole = "Presidente";
  legislativeTab = "proposicoes";
  adminTab = "protocolos";

  roles = ["Presidente", "Diretor Administrativo", "Contador", "Secretaria"];

  menu = [
    { id: "dashboard", label: "Dashboard 360°", icon: "pi pi-th-large", crumb: "Início" },
    { id: "legislativo", label: "Módulo Legislativo", icon: "pi pi-file-edit", crumb: "Legislativo" },
    { id: "administrativo", label: "Módulo Administrativo", icon: "pi pi-briefcase", crumb: "Administrativo" },
    { id: "contabil", label: "Módulo Contábil", icon: "pi pi-calculator", crumb: "Contábil" },
    { id: "transparencia", label: "Relatórios de Transparência", icon: "pi pi-chart-bar", crumb: "Transparência" },
    { id: "configuracoes", label: "Configurações", icon: "pi pi-cog", crumb: "Configurações" }
  ];

  metrics = [
    { label: "Sessões no mês", value: "18", detail: "+12% vs. mês anterior", icon: "pi pi-calendar", tone: "blue" },
    { label: "Proposições ativas", value: "47", detail: "9 aguardam votação", icon: "pi pi-file", tone: "amber" },
    { label: "Execução orçamentária", value: "78,4%", detail: "Dentro do limite planejado", icon: "pi pi-chart-line", tone: "green" },
    { label: "Alertas críticos", value: "3", detail: "Prazos TCE e contratos", icon: "pi pi-exclamation-triangle", tone: "red" }
  ];

  agenda = [
    { titulo: "Sessão Ordinária", quando: "Hoje, 14h00 - Plenário Principal", badge: "Confirmada", tone: "blue" as Tone },
    { titulo: "Reunião de Comissão de Finanças", quando: "Amanhã, 09h30 - Sala 03", badge: "Pendente", tone: "amber" as Tone },
    { titulo: "Audiência Pública - LDO 2026", quando: "Quinta-feira, 19h00 - Câmara", badge: "Agendada", tone: "green" as Tone },
    { titulo: "Entrega de Relatório - TCE", quando: "Sexta-feira, 17h00 - Online", badge: "Prazo", tone: "gray" as Tone }
  ];

  proposicoes = [
    ["PL 042/2025", "Projeto de Lei", "Reajuste do subsídio dos vereadores", "Ver. Carlos Mendes", "Em votação", "amber"],
    ["PL 041/2025", "Projeto de Lei", "Dia Municipal do Servidor Público", "Ver. Ana Lima", "Em comissão", "blue"],
    ["REQ 019/2025", "Requerimento", "Informações sobre obras na Av. Central", "Ver. Pedro Costa", "Aguardando", "gray"],
    ["PL 035/2025", "Projeto de Lei", "Conselho Municipal de Meio Ambiente", "Ver. Pedro Costa", "Aprovado", "green"]
  ];

  sessoes = [
    { titulo: "Sessão Ordinária Nº 18/2025", data: "28/05/2025 - 14h00", local: "Plenário Principal", status: "Confirmada", tone: "blue" as Tone },
    { titulo: "Sessão Extraordinária Nº 17/2025", data: "27/05/2025 - 10h00", local: "Plenário Principal", status: "Em andamento", tone: "amber" as Tone },
    { titulo: "Sessão Ordinária Nº 16/2025", data: "21/05/2025 - 14h00", local: "Plenário Principal", status: "Encerrada", tone: "green" as Tone }
  ];

  protocolos = [
    ["PROT-2025-0847", "Ofício", "Solicitação de informações - MP/SP", "Presidência", "Urgente", "red"],
    ["PROT-2025-0846", "Requerimento", "Pedido de certidão negativa", "Secretaria", "Em análise", "blue"],
    ["PROT-2025-0845", "Nota Fiscal", "NF referente contrato 12/2025", "Contabilidade", "Aguardando", "amber"],
    ["PROT-2025-0844", "Ofício", "Convite para audiência pública", "Presidência", "Concluído", "green"]
  ];

  servidores = [
    ["MAT-1024", "Maria Aparecida Rocha", "Diretora Geral", "Efetivo", "Ativo", "green"],
    ["MAT-1183", "João Batista Nunes", "Contador", "Efetivo", "Ativo", "green"],
    ["MAT-1455", "Luciana Prado", "Recepcionista", "Contrato", "Vencendo", "amber"],
    ["MAT-1478", "Eduardo Camargo", "Motorista", "Contrato", "Vencendo", "amber"]
  ];

  execucaoCategorias = [
    { nome: "Pessoal e Encargos", valor: "R$ 1.420.000", pct: 49.9 },
    { nome: "Custeio e Manutenção", valor: "R$ 680.000", pct: 23.9 },
    { nome: "Investimentos", valor: "R$ 420.000", pct: 14.8 },
    { nome: "Transferências", valor: "R$ 327.320", pct: 11.5 }
  ];

  empenhos = [
    ["EMP-2025-0312", "Empresa ABC Ltda", "Material de Consumo", "R$ 18.400", "Liquidado", "green"],
    ["EMP-2025-0311", "TecnoServ Informática", "Serviços PJ", "R$ 12.900", "Empenhado", "blue"],
    ["EMP-2025-0310", "Construtora Paraitinga", "Obras e Instalações", "R$ 96.000", "Em análise", "amber"],
    ["EMP-2025-0305", "Auto Posto Paraitinga", "Combustíveis", "R$ 6.140", "Anulado", "red"]
  ];

  transparenciaCategorias = [
    { titulo: "Receitas e Despesas", icon: "pi pi-dollar", desc: "Execução orçamentária mensal, empenhos e pagamentos", update: "28/05/2025" },
    { titulo: "Licitações e Contratos", icon: "pi pi-file", desc: "Processos licitatórios e contratos vigentes", update: "27/05/2025" },
    { titulo: "Folha de Pagamento", icon: "pi pi-users", desc: "Remuneração de servidores e agentes políticos", update: "25/05/2025" },
    { titulo: "Atas e Votações", icon: "pi pi-check-square", desc: "Registro completo de sessões, votações e atas", update: "28/05/2025" }
  ];

  notifications = [
    { nivel: "CRÍTICO", tone: "red" as Tone, tempo: "5 min atrás", texto: "Prazo SICONFI vence em 3 dias - Balancete de maio pendente", lida: false },
    { nivel: "ATENÇÃO", tone: "amber" as Tone, tempo: "1h atrás", texto: "Sessão Ordinária confirmada para hoje às 14h00 - 5 itens na pauta", lida: false },
    { nivel: "INFO", tone: "blue" as Tone, tempo: "2h atrás", texto: "PL 035/2025 aprovado em plenário - Publicação pendente", lida: true }
  ];

  get currentMenu() {
    return this.menu.find((item) => item.id === this.active) ?? this.menu[0];
  }

  navigate(id: string): void {
    this.active = id;
    this.drawerOpen = false;
  }

  toneClass(tone: Tone | string): string {
    return `tag-${tone}`;
  }
}

import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { FormsModule } from "@angular/forms";

type ModuleBlock = {
  id: string;
  tag: string;
  title: string;
  items: string[];
  cta: string;
  image: string;
  alt: string;
  reverse?: boolean;
  dark?: boolean;
  bg: "surface" | "white" | "night";
};

@Component({
  selector: "app-landing",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./landing.component.html",
  styleUrl: "./landing.component.css"
})
export class LandingComponent {
  scrolled = false;
  menuOpen = false;
  sent = false;
  testimonialIndex = 0;
  selectedModules: string[] = [];
  demoForm = {
    nome: "",
    email: "",
    whatsapp: "",
    cargo: "",
    municipio: ""
  };

  cargoOptions = [
    "Presidente da Câmara",
    "Vereador(a)",
    "Diretor(a) Administrativo",
    "Contador(a)",
    "Servidor(a) / Assessoria"
  ];

  links = [
    { label: "Plataforma Civia", href: "#civia", caret: true },
    { label: "Educação", href: "#educacao", caret: true },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Blog", href: "#blog" },
    { label: "Fale Conosco", href: "#demo" }
  ];

  stats = [
    { value: "+200", label: "Câmaras atendidas" },
    { value: "3", label: "Módulos integrados" },
    { value: "+50", label: "Turmas formadas" },
    { value: "5", label: "Anos de estrada" }
  ];

  dores = ["Falta de controle", "Risco no TCE", "Processos lentos", "Equipe sobrecarregada", "Sem transparência"];

  civiaModules = [
    {
      icon: "pi pi-building-columns",
      title: "Legislativo",
      text: "Gestão de sessões, votações e documentos do plenário em um só lugar.",
      tone: "brand"
    },
    {
      icon: "pi pi-folder",
      title: "Administrativo",
      text: "Controle de processos, contratos e patrimônio sem gargalos.",
      tone: "mid"
    },
    {
      icon: "pi pi-chart-bar",
      title: "Contábil",
      text: "Prestação de contas, orçamento e conformidade com o TCE.",
      tone: "gold"
    }
  ];

  moduleBlocks: ModuleBlock[] = [
    {
      id: "modulo-legislativo",
      tag: "Módulo Legislativo",
      title: "Plenário sob controle, sessão por sessão.",
      items: ["Gestão de sessões e pautas", "Registro de votações", "Controle de presenças", "Gestão de proposições", "Publicação automática"],
      cta: "Conhecer módulo legislativo",
      image: "assets/mockup-legislativo.jpg",
      alt: "Tela do módulo legislativo da plataforma Civia",
      bg: "surface"
    },
    {
      id: "modulo-administrativo",
      tag: "Módulo Administrativo",
      title: "Processos organizados, gestão sem gargalos.",
      items: ["Gestão de contratos", "Controle patrimonial", "RH e folha de pagamento", "Protocolo e documentos", "Licitações e compras"],
      cta: "Conhecer módulo administrativo",
      image: "assets/mockup-administrativo.jpg",
      alt: "Tela do módulo administrativo da plataforma Civia",
      reverse: true,
      bg: "white"
    },
    {
      id: "modulo-contabil",
      tag: "Módulo Contábil",
      title: "Prestação de contas sem surpresas no TCE.",
      items: ["Orçamento e execução", "Empenhos e liquidações", "Relatórios TCE automáticos", "LRF e transparência", "SICONFI e integrações"],
      cta: "Conhecer módulo contábil",
      image: "assets/mockup-contabil.jpg",
      alt: "Dashboard contábil da plataforma Civia",
      dark: true,
      bg: "night"
    }
  ];

  educationCards = [
    { icon: "pi pi-graduation-cap", title: "Cursos", text: "Formação online para equipes e gestores com certificação.", cta: "Ver cursos" },
    { icon: "pi pi-bolt", title: "Imersões", text: "Experiência presencial intensiva para lideranças.", cta: "Ver imersões" },
    { icon: "pi pi-handshake", title: "Consultorias", text: "Suporte especializado e personalizado para sua câmara.", cta: "Falar com consultor" }
  ];

  testimonials = [
    {
      text: "A plataforma Civia transformou completamente a forma como gerenciamos nossa câmara. A prestação de contas ficou muito mais segura e ágil.",
      name: "João Silva",
      role: "Presidente da Câmara Municipal de Uberaba/MG",
      initials: "JS"
    },
    {
      text: "Reduzimos em semanas o tempo de preparação das sessões. A equipe finalmente trabalha com processos claros e auditáveis.",
      name: "Maria Fernandes",
      role: "Presidente da Câmara Municipal de Caruaru/PE",
      initials: "MF"
    },
    {
      text: "Os relatórios para o TCE saem prontos. Foi a primeira vez que encerramos o exercício sem nenhuma pendência apontada.",
      name: "Ricardo Alves",
      role: "Diretor Administrativo - Câmara de Chapecó/SC",
      initials: "RA"
    },
    {
      text: "Além do sistema, a capacitação da Educação Vozzale elevou o nível técnico de toda a nossa equipe interna.",
      name: "Beatriz Nunes",
      role: "Secretária Legislativa - Câmara de Marabá/PA",
      initials: "BN"
    }
  ];

  differentials = [
    { icon: "pi pi-shield", title: "Segurança jurídica", text: "Rotinas alinhadas à legislação municipal." },
    { icon: "pi pi-balance-scale", title: "Conformidade com TCE", text: "Relatórios e prazos sempre em dia." },
    { icon: "pi pi-send", title: "Tecnologia moderna", text: "Nuvem, integrações e atualizações contínuas." },
    { icon: "pi pi-heart", title: "Suporte dedicado", text: "Especialistas em gestão pública ao seu lado." }
  ];

  benefits = ["Demonstração ao vivo", "Sem compromisso", "Atendimento especializado", "Adaptado à sua câmara"];
  formModules = ["Legislativo", "Administrativo", "Contábil", "Educação / Consultoria"];

  footerColumns = [
    { title: "Plataforma Civia", links: ["Módulo Legislativo", "Módulo Administrativo", "Módulo Contábil", "Planos e Preços"] },
    { title: "Educação", links: ["Cursos", "Imersões", "Consultorias"] },
    { title: "Empresa", links: ["Sobre Nós", "Blog", "Carreiras", "Parceiros"] },
    { title: "Suporte", links: ["Central de Ajuda", "WhatsApp", "Abrir chamado"] }
  ];

  socials = [
    { icon: "pi pi-linkedin", label: "LinkedIn" },
    { icon: "pi pi-instagram", label: "Instagram" },
    { icon: "pi pi-youtube", label: "YouTube" },
    { icon: "pi pi-whatsapp", label: "WhatsApp" }
  ];

  constructor() {
    window.setInterval(() => this.nextTestimonial(), 7000);
  }

  @HostListener("window:scroll")
  onScroll(): void {
    this.scrolled = window.scrollY > 24;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  previousTestimonial(): void {
    this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial(): void {
    this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length;
  }

  selectTestimonial(index: number): void {
    this.testimonialIndex = index;
  }

  submitDemo(): void {
    const modules = this.selectedModules.length ? this.selectedModules.join(", ") : "Não informado";
    const message = [
      "Olá, quero agendar uma demonstração do Civia.",
      `Nome: ${this.demoForm.nome}`,
      `E-mail: ${this.demoForm.email}`,
      `WhatsApp: ${this.demoForm.whatsapp}`,
      `Cargo: ${this.demoForm.cargo}`,
      `Município/Estado: ${this.demoForm.municipio}`,
      `Interesse: ${modules}`
    ].join("\n");

    this.sent = true;
    window.open(`https://wa.me/5534999990000?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  toggleModule(module: string, checked: boolean): void {
    this.selectedModules = checked
      ? Array.from(new Set([...this.selectedModules, module]))
      : this.selectedModules.filter((item) => item !== module);
  }
}

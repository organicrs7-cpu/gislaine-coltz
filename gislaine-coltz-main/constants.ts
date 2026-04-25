import { GraduationCap, Globe, Award, HeartHandshake, TrendingUp, Users } from 'lucide-react';
import { Feature, Module, FaqItem, Testimonial } from './types';

// Images provided by user
export const IMAGES = {
  hero: "/images/gislaine-hero.png", // New hero image
  bio: "/images/gislaine-2.png", // Beige blazer - Approachable
  logo: "/images/logo-v2.png", // White text logo
  texture: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?q=80&w=2940&auto=format&fit=crop" // Elegant texture background
};

export const LINKS = {
  checkout: "#pricing", // Placeholder for anchor link
  whatsapp: "https://wa.me/message/RTNL6F7Y3IASO1",
};

export const FEATURES: Feature[] = [
  {
    title: "Certificação Internacional",
    description: "Seja reconhecida mundialmente com um certificado válido dentro e fora do país.",
    icon: Globe
  },
  {
    title: "Método Exclusivo",
    description: "Aprenda a técnica autoral Gislaine Coltz que fideliza clientes na primeira sessão.",
    icon: Award
  },
  {
    title: "Prática e Teoria",
    description: "Domine a anatomia, fisiologia e os movimentos manuais com precisão.",
    icon: GraduationCap
  },
  {
    title: "Mentoria de Carreira",
    description: "Não aprenda apenas a técnica, aprenda a vender e posicionar sua marca.",
    icon: TrendingUp
  }
];

export const MODULES: Module[] = [
  {
    number: "01",
    title: "Fundamentos da Drenagem",
    description: "Anatomia do sistema linfático, localização dos linfonodos, direção correta da linfa, pressão ideal e princípios essenciais para uma drenagem segura e eficiente."
  },
  {
    number: "02",
    title: "Técnica Gisliane Coltz",
    description: "Passo a passo completo da drenagem corporal: pernas, joelhos, pés, abdômen, braços, mãos, costas e cintura — incluindo repetições, ritmo, ativação dos linfonodos, posicionamento correto das mãos e correção dos erros mais comuns."
  },
  {
    number: "03",
    title: "Gestantes",
    description: "Adaptações seguras para gestantes: ajustes de pressão, quantidade ideal de repetições, regiões que exigem mais cuidado e como atender gestantes com retenção elevada."
  },
  {
    number: "04",
    title: "Posicionamento e Vendas",
    description: "Como estruturar atendimentos de 30 a 45 minutos, organizar a sequência profissional, fidelizar clientes, aumentar indicações, precificar atendimentos e crescer sua agenda com drenagem."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Fernanda Oliveira",
    role: "Esteticista",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    content: "O curso foi um divisor de águas na minha carreira. A técnica da Gislaine é impecável e minhas clientes notam a diferença e o resultado logo na primeira sessão. Hoje minha agenda vive lotada!"
  },
  {
    name: "Carla Mendes",
    role: "Empreendedora",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    content: "O bônus de vendas nas redes sociais pagou o curso na primeira semana. Aprendi a cobrar o valor justo e hoje tenho fila de espera. O investimento se paga muito rápido!"
  },
  {
    name: "Juliana Santos",
    role: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
    content: "Didática perfeita. A segurança que adquiri com a técnica não tem preço. O suporte é maravilhoso e a comunidade de alunas ajuda muito no dia a dia para tirar dúvidas reais."
  },
  {
    name: "Renata Souza",
    role: "Massoterapeuta",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    content: "Já fiz diversos cursos, mas nenhum tem a entrega da Gislaine. Ela ensina o 'pulo do gato' que ninguém conta. O certificado internacional foi um diferencial enorme no meu espaço."
  },
  {
    name: "Patricia Costa",
    role: "Massoterapeuta",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop",
    content: "Eu tinha medo de investir no início, mas o retorno foi muito rápido. Hoje posso cobrar o valor que meu trabalho merece e tenho alunas que atravessam a cidade só para serem atendidas por mim."
  },
  {
    name: "Beatriz Lima",
    role: "Esteticista",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=200&auto=format&fit=crop",
    content: "A parte de desintoxicação abriu minha mente. As clientes saem da maca se sentindo leves e renovadas. O método é suave mas os resultados são profundos e visíveis na hora."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O curso oferece certificado?",
    answer: "Sim! Ao concluir todas as aulas, você receberá um Certificado Internacional assinado por Gislaine Coltz."
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "Você terá 1 ano de acesso irrestrito para assistir às aulas quantas vezes quiser."
  },
  {
    question: "Como vou receber o acesso?",
    answer: "O acesso será enviado para o seu e-mail assim que o pagamento for finalizado. Verifique o e-mail cadastrado no checkout."
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não. O método ensina do zero absoluto até técnicas avançadas."
  },
  {
    question: "Como funcionam as aulas?",
    answer: "São aulas gravadas em alta definição, com closes detalhados nos movimentos para você não perder nenhum detalhe."
  }
];
import { Component } from "@angular/core";
import { Experience } from "../experience-card/experience-card.component";

@Component({
  selector: "app-experience-timeline",
  templateUrl: "./experience-timeline.component.html",
  styleUrls: ["./experience-timeline.component.scss"]
})
export class ExperienceTimelineComponent {
  experiences: Experience[] = [
    {
      title: "Desenvolvedor FullStack",
      company: "MeuVidraceiro",
      description:
        "Responsável por liderar projetos e entregar código de alta qualidade e robustez para uma variedade de projetos, incluindo o desenvolvimento e integração de um módulo de emissão de NF-es e NFS-es, a construção de um sistema dedicado para gestão de usuários e assinatura de planos, integrações com a api do IUGU e PlugNotas e modelagem de bancos",
      interval: {
        start: "set 2022",
        end: "atual"
      },
      href: "https://www.meuvidraceiro.com.br",
      externals: [
        {
          display: "App MV",
          href: "https://app.meuvidraceiro.com.br"
        }
      ],
      chips: [
        "Angular",
        "Restify",
        "Express",
        "NestJS",
        "Docker",
        "Kubernetes",
        "SCSS",
        "TypeScript",
        "Node.js",
        "TypeORM",
        "PostgreSQL"
      ]
    },
    {
      title: "Desenvolvedor FullStack",
      company: "tl mídias",
      description:
        "Responsável pelo planejamento, design e construção de landing pages próprias e para clientes donos de Delivery.",
      interval: {
        start: "out 2023",
        end: "atual"
      },
      href: "https://www.tlmidias.com.br",
      chips: [
        "Angular",
        "Next.js",
        "NestJS",
        "Node.js",
        "WordPress",
        "SCSS",
        "TypeScript"
      ]
    },
    {
      title: "Desenvolvedor Angular",
      company: "softwillians it solutions",
      description:
        "Trabalhei em colaboração com a equipe de front-end responsável pelo site da plataforma da Watch Brasil. Desenvolvi um player de vídeo utilizando a base do KalturaPlayer, além de um guia de programação eletrônico (EPG) com atualização em tempo real.",
      chips: ["Angular", "TypeScript", "SCSS", "Android Studio", "Capacitor"],
      interval: {
        start: "fev 2022",
        end: "set 2022"
      },
      href: "https://www.softwillians.com.br",
      externals: [
        {
          display: "WatchTv",
          href: "https://play.watch.tv.br/try"
        }
      ]
    }
  ];
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]> ([
    {
      summary: {
        strong: 'Trainee na área de Desktop',
        p: 'Asimov Jr. | mai 2024 - presente',
      },
      text: 'Capacitação para desenvolvimento de sites e aplicativos.',
    },
    {
      summary: {
        strong: 'Capitã de Hardware',
        p: 'Black Bee Drones | nov 2022 - out 2023',
      },
      text: 'Atuava gerindo projetos e pessoas. Representei a equipe como capitã de hardware na competição internacional de drones na Alemanha em setembro de 2023, onde conseguimos premiação de terceiro lugar na modalidade indoor e uma menção honrosa de melhor voo autônomo indoor.',
    },
    {
      summary: {
        strong: 'Desenvolvedora de Hardware',
        p: 'Black Bee Drones | jul 2021 - out 2023',
      },
      text: 'Desenvolvia hardware de drones autônomos montados pela própria equipe com o objetivo de realizar as missões das provas da International Micro Air Vehicle Conference and Competition.',
    },
    {
      summary: {
        strong: 'Pesquisadora',
        p: 'CEFET-MG | jan 2020 - dez 2020',
      },
      text: 'Realizei uma iniciação científica na área da física com o tema "Classificação das estrelas por meio do diagrama H-R".',
    },
   
  ]);
  trackByFn(index: number, item: IExperience): any {
    return item.summary.strong; // ou qualquer campo único do seu objeto
  }
}

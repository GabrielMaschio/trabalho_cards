import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  type: string | undefined;
  id: string | undefined;
  plan: any;

  constructor(private route: ActivatedRoute, private planService: PlanService) {} // Injete o serviço

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const typeParam = this.route.snapshot.paramMap.get('type');

    this.type = typeParam !== null ? typeParam : undefined;
    this.id = idParam !== null ? idParam : undefined;

    this.loadPlan(this.id, this.type);
  }

  loadPlan(id: string | undefined, type: string | undefined) {
    if (id && type) {
      if (type === 'fitness') {
        this.plan = this.planService.getFitnessById(Number(id)); // Certifique-se de que esta função existe no serviço
      } else {
        this.plan = this.planService.getNutritionById(Number(id)); // Certifique-se de que esta função existe no serviço
      }
    }
  }
}

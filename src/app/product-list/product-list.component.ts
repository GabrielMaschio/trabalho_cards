import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { PlanService } from '../plan.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  fitness: any[] = [];
  nutrition: any[] = [];

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.fitness = this.planService.getFitness();
    this.nutrition = this.planService.getNutrition();
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '@app/core/services/portfolio.service';
import { Category } from '@app/core/types/project';
import { FlipbookComponent } from '../flipbook/flipbook.component';

@Component({
  selector: 'app-portfolio',
  imports: [FlipbookComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  
  categories: Category[] = [];
  selectedCategory: Category | null = null;


  ngOnInit(): void {
    this.categories = this.portfolioService.getCategories();
  }

  onSelect(category: Category) {
    this.selectedCategory = category;
  }
}

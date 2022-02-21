import { Component, OnInit } from '@angular/core';
import { PortfolioserviceService } from 'src/app/services/portfolioservice.service';

@Component({
  selector: 'app-scroll-cards',
  templateUrl: './scroll-cards.component.html',
  styleUrls: ['./scroll-cards.component.scss']
})
export class ScrollCardsComponent implements OnInit {

  constructor(private portfolioservice: PortfolioserviceService) { }

  ngOnInit(): void {
    this.AllVideos = this.portfolioservice.AllVideos
  }

  GetSrc(card: any){
    this.portfolioservice.GetSrc(card);
    
  }

  AllVideos!: any;
}

import { Component, Input, OnInit } from '@angular/core';
import { PortfolioserviceService } from 'src/app/services/portfolioservice.service';

@Component({
  selector: 'app-playervideo',
  templateUrl: './playervideo.component.html',
  styleUrls: ['./playervideo.component.scss']
})
export class PlayervideoComponent implements OnInit {

  constructor(public portfolioservice: PortfolioserviceService) { }

  guarda=true;

  slides?: Array<Number>

  vsrc = this.portfolioservice.vsrc;
  AllVideos =  this.portfolioservice.AllVideos

  ngOnInit(): void {
    
  }

  GetSrc(card: any){
    this.portfolioservice.GetSrc(card);
    this.guarda = true;
  }


  

}

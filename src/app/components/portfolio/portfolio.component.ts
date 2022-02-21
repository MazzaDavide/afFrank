import { Component, Input, OnInit } from '@angular/core';
import { PortfolioserviceService } from 'src/app/services/portfolioservice.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  static vsrc: any;

  constructor( public portfolioservice: PortfolioserviceService) { }

  guarda = false
  // fs = require('fs');
  // dir = "../../../assets/images/work"
  //files = this.fs.readdirSync(this.dir)
  
  public vsrc?: string;
  videoimg?: string;

  ngOnInit(): void {
    console.log("video: ", this.AllVideos);
    
  } 

  AllVideos = this.portfolioservice.AllVideos
  searchText!: any;
  filteredVideos: any;
  
  Filtra(){
    debugger
    this.filteredVideos = this.AllVideos.filter( x => {
      x.title.includes(this.searchText);
    });
    
  }

  GetSrc(card: any){
    this.portfolioservice.GetSrc(card);
    this.guarda = true;
    localStorage.setItem("card", card);
    localStorage.setItem("card", card);
    window.scroll(0,0);
  }

  // path = require('path');

  GetFile(){
    // const directoryPath = this.path.join(__dirname, 'work');
    // //passsing directoryPath and callback function
    // this.fs.readdir(directoryPath, function (err: string, files: any[]) {
    //   //handling error
    //   if (err) {
    //       return console.log('Unable to scan directory: ' + err);
    //   } 
    //   //listing all files using forEach
    //   files.forEach(function (file) {
    //       // Do whatever you want to do with the file
    //       console.log(file); 
    //   });

    // });
    // const fs = require('fs');
    // const dir = "../../../assets/images/work"
    // const files = fs.readdirSync(dir)

    // for (const file of files) {
    //   console.log(file)
    // }
  }
}



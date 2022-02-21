
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.scss']
})
export class FotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  folder = 'https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work';
  foto: any;
  clicked = false;

  Open(){
    this.clicked = true
  }


  // GetFoto() {
  //   var fs = require('fs')
  //   fs.readdir(this.folder, (files: any) => {
  //     files.forEach((file: any) => {
  //       this.foto = file;
  //       console.log(this.foto);
  //     });
  //   });
  // }

  AllFoto = [
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_1.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_2.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_3.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_4.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_5.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_6.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_7.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_8.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_9.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_10.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_11.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_12.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_13.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_14.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_15.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_16.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_21.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_22.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_23.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_24.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_25.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_26.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_27.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_28.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_29.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_30.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_31.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_32.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny_33.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/dreffunny.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06112.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06117.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06118.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06119.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06121.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06123.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06127.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06129.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06137.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06151.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06156.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06160.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06163.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06164.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06165.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06166.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06167.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06168.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06169.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06170.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06172.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06173.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06174.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06175.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06176.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06177.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06178.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06179.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06180.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06182.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06187.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06191.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06192.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06195.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06196.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06198.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06202.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06203.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06204.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06205.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06206.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06207.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06209.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06210.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06211.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06225.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06226.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06239.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06241.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06251.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06254.jpg",
    "https://affrankstorage.blob.core.windows.net/contsinerfrank/images/work/DSC06266.jpg",

  ]


}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioserviceService {

  constructor() {

  }

  AllVideos = [
    {
      title: "Karim - Chronicles",
      description: "Questo video è incredibile",
      src: "assets/images/Chronicles.png",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/K4rim%20-%20Chronicles%20%231%20(prod.%20Rich%20Polo).mp4",
      date: 2022,
      direct: "a.f.Frank e Brandon Bonato",
      trailer: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Karim%20instagram.mp4",
      votes: [],
      comments: []
    },
    {
      title: "22simba - VENTIDUE",
      description: "Questo video è incredibile",
      src: "assets/images/Ventidue - Simba.png",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba%20-%20VENTIDUE%20(1).mp4",
      date: 2022,
      direct: "a.f.Frank",
      colorist: "https://www.instagram.com/nesimov_/",
      others: "https://www.instagram.com/borrrts/",
      votes: [],
      comments: []
    },
    {
      title: "22simba - PER I ROIZ",
      description: "Questo video è incredibile",
      src: "assets/images/22simba-PERIROIZ.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - PER I ROIZ (1).mp4",
      date: 2021,
      direct: "a.f.Frank",
      colorist: "https://www.instagram.com/nesimov_/",
      others: "https://www.instagram.com/borrrts/",
      votes: [],
      comments: []
    },
    {
      title: "22Simba - V",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/22Simba.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - V.mp4",
      date: 2021,
      direct: "a.f.Frank e Brandon Bonato",
      colorist: "https://www.instagram.com/nesimov_/",
      others: "https://www.instagram.com/borrrts/",
      votes: [],
      comments: []
    },
    {
      title: "22simba - Proteggimi",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Bluparte2.jpeg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - Proteggimi def.mp4",
      date: 2021,
      direct: "a.f.Frank",
      votes: [],
      comments: []
    },
    {
      title: "Manfro - Est99",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Est99.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Manfro - est99.mp4",
      date: 2021,
      direct: "a.f.Frank",
      votes: [],
      comments: []
    },
    {
      title: "PYT - STELLA BLU",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/PYT-STELLA BLU.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/PYT - STELLA BLU (prod. Garelli, YaluDream).mp4",
      date: 2021,
      direct: "a.f.Frank e Brandon Bonato",
      colorist: "https://www.instagram.com/nesimov_/",
      others: "https://www.instagram.com/borrrts/",
      votes: [],
      comments: []
    },
    {
      title: "Tyler Strikes - TRYHARD FreeStyle",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Tyler.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Tyler Strikes - TRYHARD Freestyle.mp4",
      date: 2021,
      direct: "a.f.Frank",
      votes: [],
      comments: []
    },
    {
      title: "Shorty Shok - 2359",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Shorty.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/SHORTY SHOK - 2359 (Prod. Kid Riff).mp4",
      date: 2021,
      votes: [],
      comments: []
    },
    {
      title: "Funny - MOON WALK",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/sfondonerodef.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Funny Contenuto corretto.mp4",
      date: 2021,
      votes: [],
      comments: []
    }
  ]

  card?: any;

  GetSrc(card: any) {
    this.card = card;
    console.log("card: ", card);
  }

}

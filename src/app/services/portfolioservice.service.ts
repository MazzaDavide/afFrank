import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioserviceService {

  constructor() {

  }

  AllVideos = [
    {
      title: "22simba - PER I ROIZ",
      description: "Questo video è incredibile",
      src: "assets/images/22simba-PERIROIZ.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - PER I ROIZ.webm",
      date: 2021,
      direct: "a.f.Frank",
      colorist: "https://www.instagram.com/nesimov_/",
      others: "https://www.instagram.com/borrrts/"
    },
    {
      title: "22Simba - V",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/22Simba.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - V.mp4",
      date: 2021,
      direct: "a.f.Frank e Brandon Bonato",
      colorist: "https://www.instagram.com/nesimov_/",
      others: "https://www.instagram.com/borrrts/"
    },
    {
      title: "22simba - Proteggimi",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Bluparte2.jpeg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/22simba - Proteggimi def.mp4",
      date: 2021,
      direct: "a.f.Frank"
    },
    {
      title: "Manfro feat. Pyt - BLOCCO",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Blocco.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/BLOCCO feat. Pyt.mp4",
      date: 2021,
      direct: "a.f.Frank"
    },
    {
      title: "Manfro - Est99",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Est99.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Manfro - est99.mp4",
      date: 2021,
      direct: "a.f.Frank"
    },
    {
      title: "PYT - STELLA BLU",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/PYT-STELLA BLU.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/PYT - STELLA BLU (prod. Garelli, YaluDream) [Official Video].webm",
      date: 2021,
      direct: "a.f.Frank e Brandon Bonato",
      colorist: "https://www.instagram.com/nesimov_/",
      others: "https://www.instagram.com/borrrts/"
    },
    {
      title: "Tyler Strikes - TRYHARD FreeStyle",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Tyler.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Tyler Strikes - TRYHARD Freestyle.mp4",
      date: 2021,
      direct: "a.f.Frank"
    },
    {
      title: "Shorty Shok - 2359",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/Shorty.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/SHORTY SHOK - 2359 (Prod. Kid Riff).mp4",
      date: 2021
    },
    {
      title: "Funny - MOON WALK",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      src: "assets/images/sfondonerodef.jpg",
      videosrc: "https://affrankstorage.blob.core.windows.net/contsinerfrank/videos/Funny Contenuto corretto.mp4",
      date: 2021
    }
  ]

  vsrc?: string;
  videoimg?: string;
  title?: string;
  date?: number
  direct?: string
  colorist?: string
  others?: string

  GetSrc(card: any) {
    this.vsrc = card.videosrc;
    this.videoimg = card.src;
    this.title = card.title;
    this.date = card.date;
    this.colorist = card.colorist;
    this.direct = card.direct;
    this.others = card.others
    console.log("src video: ", this.vsrc, "img: ", this.videoimg);
  }

}

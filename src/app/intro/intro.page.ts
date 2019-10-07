import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }
  
  slides = [
    {
      title: "LA NUEVA FORMA DE TRANSPORTE",
      subTitle: "BI-CI amigable con el medio ambiente, práctico y seguro para su movilidad.",
      description: "¿Qué problemas estamos resolviendo?",
      icon: "play"
    },
    {
      title: "LA NUEVA FORMA DE TRANSPORTE",
      subTitle: "BI-CI amigable con el medio ambiente, práctico y seguro para su movilidad.",
      description: "¿Qué problemas estamos resolviendo?",
      icon: "play"
    },
    {
      title: "LA NUEVA FORMA DE TRANSPORTE",
      subTitle: "BI-CI amigable con el medio ambiente, práctico y seguro para su movilidad.",
      description: "¿Qué problemas estamos resolviendo?",
      icon: "bicycle"
    }    
  ]
  
  constructor(private router: Router, private storage: Storage) {}

  finish(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {KSSwiperSlide, KSSwiperContainer} from '../../../node_modules/angular2-swiper/dist/ks-swiper';   


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
   providers: [KSSwiperSlide, KSSwiperContainer]
})
export class HomePage {

 myList :list[];runNow:list;temp:list;
 
  constructor(public navCtrl: NavController) {
   this.myList = [
     {
        title : "Hello",
        singer : "Adele",
        duration : 5.29,
        image : "http://www.kontrolmag.com/wp-content/uploads/2017/01/adele.jpg",
        run : true

      },{
        title : "That's What I Like",
        singer : "Someone",
        duration : 4.12,
        image : "https://youmeandtrends.com/wp-content/uploads/2016/12/Best-Singers"+
        "-of-All-Times-Most-Popular-singers-of-all-times.jpg",
         run : false

      },{
        title : "come ur hero",
        singer : "UnKnown",
        duration : 3.2,
        image : "http://www.thefamouspeople.com/profiles/images/demi-lovato-1.jpg",
        run : false

      },{
        title : "goodbye",
        singer : "Adam",
        duration : 3.8,
        image : "https://s-media-cache-ak0.pinimg.com/originals/ec/e4/bf/ece4bfae70aa18e5742c0ed7a6858f80.jpg",
        run : false
      }
      ];
    this.runNow = {
      
        title : "Hello",
        singer : "Adele",
        duration : 5.29,
        image : "http://www.kontrolmag.com/wp-content/uploads/2017/01/adele.jpg",
        run : true
    };


  }

  run (list:list){
    this.runNow = list;
  this.myList.forEach(element => {
    element.run = false;
  });
  list.run = true;
  }

}
interface list{
  title :string;
  singer:string;
  duration :number;
  image :string;
  run :boolean;
}



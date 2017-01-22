import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ItemDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-detail-page',
  templateUrl: 'item-detail-page.html'
})
export class ItemDetailPage {
	title;
	description;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPagePage');
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}

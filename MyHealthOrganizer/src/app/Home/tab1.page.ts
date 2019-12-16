import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { HealthService } from '../health.service';
import { InputDialogService } from '../input-dialog.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public dataService: HealthService,
              public inputDialogService: InputDialogService,
              public callNumber: CallNumber,
              public socialSharing: SocialSharing) { }

  loadItems() {
    return this.dataService.getItems();
  }

  /*Add a Provider*/
  addItem() {
    console.log('Inserting:');
    this.inputDialogService.presentAlert();
  }

  /*Edit Provider Info*/
  editItem(m, i) {
    console.log('Updating:', m, i);
    this.inputDialogService.presentAlert(m, i);
  }

  /*Remove Provider*/
  removeItem(m, i) {
    console.log('Removing: ', m, i);
    this.dataService.removeItem(i);
  }

 onSuccess(result) {
      console.log('Success:' + result);
  }
onError(result) {
    console.log('Error:' + result);
    this.callNumber.callNumber('18000000000', true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
}

/*Share Provider Info*/
async shareItem(m, i) {
  console.log('Share: ', m, i);
  const message = 'Sharing Provider Info - Name:' + m.Name + '- Phone:' + m.Phone;
  const subject = 'Sharing via My Health & Wellness Organizer';
  this.socialSharing.share().then(() => {
    console.log('Shared Successfully!');
  }).catch((error) => {
    console.error('Error during sharing', error);
  });
}
}

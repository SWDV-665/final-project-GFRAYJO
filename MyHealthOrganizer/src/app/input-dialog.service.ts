import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HealthService } from './health.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  async presentAlert(m ?, i ?: undefined) {
    const alert = await this.alertCtrl.create({
      header: m ? 'Edit item' : 'Add item',
      message: m ? 'Edit details' : 'Add details',
      inputs: [
        {
          name: 'Name',
          placeholder: 'Provider Name',
          value: m ? m.Name : null
        },
        {
          name: 'Address',
          placeholder: 'Address',
          value: m ? m.Address : null
        },
        {
          name: 'City',
          placeholder: 'City',
          value: m ? m.City : null
        },
        {
          name: 'State',
          placeholder: 'State',
          value: m ? m.State : null
        },
        {
          name: 'Zip',
          placeholder: 'Zip',
          value: m ? m.Zip : null
        },
        {
          name: 'Phone',
          placeholder: 'Phone',
          value: m ? m.Phone : null
        },
        {
          name: 'url',
          placeholder: 'url',
          value: m ? m.url : null
        },
      ],
      buttons: [
        {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        // tslint:disable-next-line: no-shadowed-variable
        handler: data => {
          console.log('Save clicked', data);
          if (i !== undefined) {
            m.Name = data.Name;
            m.Address = data.Address;
            m.City = data.City;
            m.State = data.State;
            m.Zip = data.Zip;
            m.Phone = data.Phone;
            m.url = data.url;
            this.dataService.editItem(m, i);
          } else {
            this.dataService.addItem(data);
          }
        }
      }]
    });
    alert.present();
   }

  constructor(public alertCtrl: AlertController,
              public dataService: HealthService) {
               }
}

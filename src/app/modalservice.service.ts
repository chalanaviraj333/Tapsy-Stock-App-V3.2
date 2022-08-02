import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddnotesPage } from './addnotes/addnotes.page';
import { AddVerifiedProductPage } from './car-tab/car-brands-all-modals/add-verified-product/add-verified-product/add-verified-product.page';
import { EditRemoteProgramDetailsPage } from './car-tab/edit-remote-program-details/edit-remote-program-details.page';
import { FilterPage } from './filter/filter.page';
import { FiltertabthreePagePage } from './filtertabthree-page/filtertabthree-page.page';
import { FiltertabtwopagePage } from './filtertabtwopage/filtertabtwopage.page';
import { GarageRemote } from './interfaces/garage-remote';
import { LowStockModalPage } from './low-stock-modal/low-stock-modal.page';
import { Remote } from './interfaces/remote';
import { RemoteShell } from './remote-shell';
import { RemotedetailsmodalPage } from './remotedetailsmodal/remotedetailsmodal.page';
import { SelectedCar } from './selected-car';
import { ViewGarageRemoteDetailsPage } from './view-garage-remote-details/view-garage-remote-details.page';

@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {

  constructor(public modalController: ModalController) { }

// add car notes model
  async onClickaddNotes(selectedCar: SelectedCar) {
      const modal = await this.modalController.create({
        component: AddnotesPage,
        componentProps: {
          "selectedCar": selectedCar
        },
        cssClass: 'my-add-notes-class',
        swipeToClose: true,
      });
      return await modal.present();
  }

  async onClickViewItem(selectedRemote: Remote) {
    const modal = await this.modalController.create({
      component: RemotedetailsmodalPage,
      componentProps: {
        "selectedRemote": selectedRemote
      },
      cssClass: 'view-Remote-Details-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

  async onClickFilter() {
    const modal = await this.modalController.create({
      component: FilterPage,
      cssClass: 'filtermodal-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }

  async onClickFilterTabTwo() {
    const modal = await this.modalController.create({
      component: FiltertabtwopagePage,
      cssClass: 'filtermodal-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }

  async onClickFilterTabThree() {
    const modal = await this.modalController.create({
      component: FiltertabthreePagePage,
      cssClass: 'filtermodal-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }

  async onClickViewItemRemoteShell(selectedRemote: RemoteShell) {
    const modal = await this.modalController.create({
      component: RemotedetailsmodalPage,
      componentProps: {
        "selectedRemote": selectedRemote
      },
      cssClass: 'view-Remote-Details-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

  async onCLickLowStockItmes() {
    const modal = await this.modalController.create({
      component: LowStockModalPage,
      cssClass: 'low-stock-page-class',
      swipeToClose: true,
    });
    return await modal.present();

  }

  async onClickViewGarageRemote(selectedGarageRemote: GarageRemote) {
    const modal = await this.modalController.create({
      component: ViewGarageRemoteDetailsPage,
      componentProps: {
        "selectedGarageRemote": selectedGarageRemote
      },
      cssClass: 'view-Remote-Details-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

  async onClickAddVerifiedProduct(selectedsubmodelbrand: string, subModelKey: string, buttontype: string) {
    const modal = await this.modalController.create({
      component: AddVerifiedProductPage,
      componentProps: {
        "selectedsubmodelbrand": selectedsubmodelbrand,
        "subModelKey": subModelKey,
        "buttontype": buttontype
      },
      cssClass: 'view-Remote-Details-class',
      swipeToClose: true,
    });
    return await modal.present();
  }

 async viewEditCarProgramDetails() {
    const modal = await this.modalController.create({
      component: EditRemoteProgramDetailsPage,
      componentProps: {
        // "selectedRemote": selectedRemote
      },
      cssClass: 'view-edit-remote-program-page-class',
      swipeToClose: true,
    });
    return await modal.present();
  }



}

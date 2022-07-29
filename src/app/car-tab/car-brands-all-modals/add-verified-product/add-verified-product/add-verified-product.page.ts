import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Remote } from 'src/app/remote';
import { DatabaseServiceService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-add-verified-product',
  templateUrl: './add-verified-product.page.html',
  styleUrls: ['./add-verified-product.page.scss'],
})
export class AddVerifiedProductPage implements OnInit {

  @Input() selectedsubmodelbrand : string;
  @Input() subModelKey : string;
  @Input() buttontype : string;

  constructor(public databaseService: DatabaseServiceService, private modalController: ModalController) { }

  ngOnInit() {
    if (this.buttontype == 'addremote') {
      this.databaseService.getAllProductsBasedonBrand(this.selectedsubmodelbrand, this.buttontype);
    }
    else if (this.buttontype == 'addremoteshell') {
      this.databaseService.getAllProductsBasedonBrand(this.selectedsubmodelbrand, this.buttontype);
    }
  }

  onClickProduct(carproduct: any) {
    this.databaseService.addVerifiedProductoSubModel(carproduct, this.subModelKey , this.buttontype);
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

}

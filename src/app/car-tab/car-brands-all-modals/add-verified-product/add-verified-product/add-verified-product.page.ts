import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  @Input() modelstartyear : number;
  @Input() modelendyear : number;

  private selectedProduct: any = {};
  private selectedYear: number = 0; 

  public yearslist: Array<{selected: boolean, year: number}> = [];

  constructor(public databaseService: DatabaseServiceService, private modalController: ModalController) { }

  ngOnInit() {
    if (this.buttontype == 'addremote') {
      this.databaseService.getAllProductsBasedonBrand(this.selectedsubmodelbrand, this.buttontype);
    }
    else if (this.buttontype == 'addremoteshell') {
      this.databaseService.getAllProductsBasedonBrand(this.selectedsubmodelbrand, this.buttontype);
    }

    this.getallsubmodelyears(this.modelstartyear, this.modelendyear);
    
  }

  getallsubmodelyears(startYear, endyear) {
    startYear = startYear;  
    while ( startYear <= endyear ) {
        this.yearslist.push({selected: false, year: startYear++});
    }   
    return this.yearslist;
    }

  onClickProduct(carproduct: any) {
    const currentValue = this.databaseService.byBrandBasedProducts.find(element => element.key == carproduct.key).selected;

    this.databaseService.byBrandBasedProducts.find(element => element.key == carproduct.key).selected = !currentValue;

    this.selectedProduct = carproduct;
    
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  onClickyear(caryear: any) {

    const currentValue = this.yearslist.find(element => element == caryear).selected;
    this.yearslist.find(element => element == caryear).selected = !currentValue;

    this.selectedYear = caryear.year;

  }

  onClickDataSave() {
    this.databaseService.addVerifiedProductoSubModel(this.selectedProduct, this.selectedYear, this.subModelKey , this.buttontype);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { DatabaseServiceService } from 'src/app/services/database-service.service';
import { CarSubModel } from 'src/app/interfaces/car-sub-model';
import { ModalserviceService } from 'src/app/modalservice.service';

@Component({
  selector: 'app-result-sub-model',
  templateUrl: './result-sub-model.page.html',
  styleUrls: ['./result-sub-model.page.scss'],
})
export class ResultSubModelPage implements OnInit {

  public selectedSubModel: CarSubModel = {key: '', brand: '', model: '', submodel: '', typeofignition: '', icon: '', startyear: 2001, endyear: 2002, compatibleremotes: [], compatibleremoteshells: []};
  public modelstartYear: string = '';
  public modelendYear: string = '';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private routerOutlet: IonRouterOutlet,
    private modelService: ModalserviceService,
    public databaseService: DatabaseServiceService
  ) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (
        !paramMap.has(
        "startyear" && "endyear"
        )
      ) {
        // redirect
        return;
      }
      this.modelstartYear = paramMap.get("startyear");
      this.modelendYear = paramMap.get("endyear");
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedSubModel = JSON.parse(params["data"])
    });
  }

  ngOnInit() {
    this.databaseService.getAllCarSubModels(this.selectedSubModel.brand, this.selectedSubModel.model);
    
  }

  onClickItemModal(selectedtapsycode: string) {

  }

  onCLickAddVerifiedRemote(selectedsubmodelbrand: string) {
    const subModelKey: string = this.selectedSubModel.key;
    const buttontype: string = 'addremote';
    this.modelService.onClickAddVerifiedProduct(selectedsubmodelbrand, subModelKey, buttontype);
  }

  onClickAddVerifiedRemoteShell(selectedsubmodelbrand: string) {
    const subModelKey: string = this.selectedSubModel.key;
    const buttontype: string = 'addremoteshell';
    this.modelService.onClickAddVerifiedProduct(selectedsubmodelbrand, subModelKey, buttontype);
  }

}

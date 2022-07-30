import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DatabaseServiceService } from 'src/app/services/database-service.service';
import { CarSubModel } from 'src/app/interfaces/car-sub-model';
import { ModalserviceService } from 'src/app/modalservice.service';

@Component({
  selector: 'app-result-sub-model',
  templateUrl: './result-sub-model.page.html',
  styleUrls: ['./result-sub-model.page.scss'],
})
export class ResultSubModelPage implements OnInit {

  public selectedSubModel: CarSubModel = {key: '', brand: '', model: '', submodel: '', typeofignition: '', profile: '', chipID: '', freq: '', updatedat: '', icon: '', startyear: 2001, endyear: 2002, compatibleremotes: [], compatibleremoteshells: [], compatibleKDRemotes: [], compatibleXhorseRemote: []};
  public modelstartYear: string = '';
  public modelendYear: string = '';
  public navigationExtras: NavigationExtras = {queryParams: {"data": JSON.stringify(this.selectedSubModel)}};

  public appPages = [
    { title: 'Key Program',
      numberofitems: 0,
      children: [
        {
          title: 'All Lost Keys',
          url: '/new-restricted-system',
          icon: 'remove-circle-outline',
          verifiedbyAdmin: true,
        },
        {
          title: 'Spare Key',
          url: '/new-restricted-system',
          icon: 'add-circle-outline',
          verifiedbyAdmin: false,
        },
      ]
    },
    { title: 'Remote Program',
    numberofitems: 0,
      children: [
        {
          title: 'How to program',
          url: '/new-restricted-system',
          icon: 'add-circle-outline',
          verifiedbyAdmin: true,
        }
      ]
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private modelService: ModalserviceService,
    public databaseService: DatabaseServiceService,
    private router: Router
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

  onClickProgramItem(sub: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "data": JSON.stringify(this.selectedSubModel)
      }
    }
     if (sub == 'Spare Key') {
      this.router.navigate(
        ["tabs/car-brand-page/car-model-page/car-sub-model-page/result-sub-model/spare-key-program"],
         navigationExtras);
     }
  }

}

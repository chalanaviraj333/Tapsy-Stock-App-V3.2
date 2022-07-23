import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseServiceService } from 'src/app/database-service.service';

@Component({
  selector: 'app-car-sub-model',
  templateUrl: './car-sub-model.component.html',
  styleUrls: ['./car-sub-model.component.scss'],
})
export class CarSubModelComponent implements OnInit {

  public selectedBrand: string;
  public selectedModel: string;

  // 
  public turntomodels: boolean = true;
  public turntoyear: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public databaseService: DatabaseServiceService
  ) {

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (
        !paramMap.has(
          "selectedBrand" && "selectedModel" && "startyear" && "endyear"
        )
      ) {
        // redirect
        return;
      }
      this.selectedBrand = paramMap.get("selectedBrand");
      this.selectedModel = paramMap.get("selectedModel");
    });
  }

  ngOnInit() {

    this.databaseService.getAllCarSubModels(this.selectedBrand, this.selectedModel);
  }

  onClick(x, startyear, endyear) {
    const selectedModel = x;

    this.router.navigateByUrl(
      "tabs/tab1/year/" +
        this.selectedBrand +
        "/" +
        selectedModel +
        "/" +
        startyear +
        "/" +
        endyear
    );
  }

  _ionChange(event) {
    const val = event.target.value;
    this.databaseService.perfromSearchCarModel(val);
  }

  onChangeType(event) {
    this.turntoyear = !this.turntoyear;
    this.turntomodels = !this.turntomodels;
  }

}

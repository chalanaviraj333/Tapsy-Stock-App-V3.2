import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { DatabaseServiceService } from 'src/app/database-service.service';

@Component({
  selector: 'app-sub-car-model-page',
  templateUrl: './sub-car-model-page.page.html',
  styleUrls: ['./sub-car-model-page.page.scss'],
})
export class SubCarModelPagePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  public hideButton: boolean = false;
  public selectedBrand: string;
  public selectedModel: string;

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



  logScrollStart() {
    setTimeout(() => {
      this.hideButton = true;
    }, 500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
    setTimeout(() => {
      this.hideButton = false;
    }, 4000);
  }

  onChangeType(event) {
    console.log(event.target.value);
  }

}

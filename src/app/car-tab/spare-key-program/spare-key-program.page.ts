import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarSubModel } from 'src/app/interfaces/car-sub-model';

@Component({
  selector: 'app-spare-key-program',
  templateUrl: './spare-key-program.page.html',
  styleUrls: ['./spare-key-program.page.scss'],
})
export class SpareKeyProgramPage implements OnInit {

  public selectedSubModel: CarSubModel = {key: '', brand: '', model: '', submodel: '', typeofignition: '', profile: '', chipID: '', freq: '', updatedat: '', icon: '', startyear: 2001, endyear: 2002, compatibleremotes: [], compatibleremoteshells: [], compatibleKDRemotes: [], compatibleXhorseRemote: []};
  public compatibleproducts: Array<any>;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedSubModel = JSON.parse(params["data"])
    });

    if (this.selectedSubModel.compatibleremotes !== undefined) {
      this.compatibleproducts = this.selectedSubModel.compatibleremotes;
    }
    if (this.selectedSubModel.compatibleKDRemotes !== undefined)
    {
      this.selectedSubModel.compatibleKDRemotes.forEach(remote => {
        this.compatibleproducts.push(remote);
      });
    }
  }

}

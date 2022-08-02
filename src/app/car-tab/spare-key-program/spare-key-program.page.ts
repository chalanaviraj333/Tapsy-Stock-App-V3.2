import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarSubModel } from 'src/app/interfaces/car-sub-model';
import { KdRemote } from 'src/app/interfaces/kd-remote';
import { ModalserviceService } from 'src/app/modalservice.service';

@Component({
  selector: 'app-spare-key-program',
  templateUrl: './spare-key-program.page.html',
  styleUrls: ['./spare-key-program.page.scss'],
})
export class SpareKeyProgramPage implements OnInit {

  public selectedSubModel: CarSubModel = {key: '', brand: '', model: '', submodel: '', typeofignition: '', profile: '', chipID: '', freq: '', updatedat: '', icon: '', startyear: 2001, endyear: 2002, compatibleremotes: [], compatibleremoteshells: [], compatibleKDRemotes: [], compatibleXhorseRemote: []};
  public compatibleproducts: Array<any>;

  // dummy kd remotearray delete before publish
  private kdRemotes: Array<KdRemote> = [{key: '', buttons: 0, kdtype: 'NB Series', productType: 'KD', kdrefname: 'Honda \ 15FIT CIVIC NEW XRV WITH G 47 CHIP', image: 'https://firebasestorage.googleapis.com/v0/b/tapsy-stock-app-v3-database.appspot.com/o/images%2Fkdremotes%2FKDR-15FIT-CIVIC-NEW-XRV-WITH-G-47-CHIP(433).png?alt=media&token=ba6b4f34-fce9-43b5-94b5-2bc7dc435e0a'}]

  constructor(private activatedRoute: ActivatedRoute, private modelService: ModalserviceService ) { }

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
    this.kdRemotes.forEach(kdRemote => {
      this.compatibleproducts.push(kdRemote);
    });
  }

  onClickeditCarProgramDetails() {
    this.modelService.viewEditCarProgramDetails();
  }

}

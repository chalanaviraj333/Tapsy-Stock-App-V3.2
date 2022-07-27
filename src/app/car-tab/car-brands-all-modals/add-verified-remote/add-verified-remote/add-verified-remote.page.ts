import { Component, Input, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/database-service.service';
import { Remote } from 'src/app/remote';

@Component({
  selector: 'app-add-verified-remote',
  templateUrl: './add-verified-remote.page.html',
  styleUrls: ['./add-verified-remote.page.scss'],
})
export class AddVerifiedRemotePage implements OnInit {

  @Input() selectedsubmodelbrand : string;
  @Input() subModelKey : string;

  constructor(public databaseService: DatabaseServiceService) { }

  ngOnInit() {
    this.databaseService.getAllProductsBasedonBrand(this.selectedsubmodelbrand);
  }

  onClickRemote(remote: Remote) {
    this.databaseService.addVerifiedRemotetoSubModel(remote, this.subModelKey);
  }

}

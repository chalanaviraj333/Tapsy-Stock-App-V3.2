import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-remote-program-details',
  templateUrl: './edit-remote-program-details.page.html',
  styleUrls: ['./edit-remote-program-details.page.scss'],
})
export class EditRemoteProgramDetailsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  _onClickDismiss() {
    this.modalController.dismiss();
  }

  onSubmitNext(form: NgForm) {

  }

}

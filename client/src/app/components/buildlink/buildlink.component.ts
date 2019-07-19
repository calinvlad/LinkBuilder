import { Component, OnInit } from '@angular/core';
import {BuildlinkService} from "../../service/buildlink.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CONF} from "../../conf";

@Component({
  selector: 'app-buildlink',
  templateUrl: './buildlink.component.html',
  styleUrls: ['./buildlink.component.sass']
})
export class BuildlinkComponent implements OnInit {

  constructor(
    private _buildService: BuildlinkService
  ) { }
  conf = CONF
  _link: Array<any>
  link: any

  buildForm = new FormGroup( {
    name: new FormControl(''),
    link: new FormControl('')
  })


  ngOnInit() {
  }

  build() {
    if(this.buildForm.value) {
      this._buildService.build(this.buildForm.value).subscribe((result) => {
        this._link = result.data.name
        this.link = this.conf.url + this._link.data.name
      })
    }
  }

  copy(link) {
    alert(link)
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (link));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

}

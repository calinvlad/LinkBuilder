import { Component, OnInit } from '@angular/core';
import {BuildlinkService} from "../../service/buildlink.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {CONF} from "../../conf";

@Component({
  selector: 'app-readlink',
  templateUrl: './readlink.component.html',
  styleUrls: ['./readlink.component.sass']
})
export class ReadlinkComponent implements OnInit {
  _link: any
  link:  any
  conf = CONF

  constructor(
    private _buildService: BuildlinkService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    const name = this.route.params['_value'].name
    this._buildService.getByName(name).subscribe((result) => {
      this._link = result
      if(this._link.data) {
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this._link.data.link);
      } else {
        this.router.navigate([''])
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthersService } from '../authers.service';
import { NationlaityService } from '../nationlaity.service';
@Component({
  selector: 'app-add-auther',
  templateUrl: './add-auther.component.html',
  styleUrls: ['./add-auther.component.css']
})
export class AddAutherComponent implements OnInit {
  auther: any = {}
  nationalities: any = []

  constructor(private _authersService: AuthersService ,private _activatedRoute :ActivatedRoute ,private _nationality: NationlaityService) { }

  addAuther(auther: any) {

    var autherid = this._activatedRoute.snapshot.params["id"];

    if(autherid==null||autherid==0)
    this._authersService.addAuther(auther.value).subscribe()
    
    else
    this._authersService.updateAuther(autherid,auther.value).subscribe()

  }


  autherForm = new FormGroup({
    name: new FormControl(),
    nationalityId: new FormControl(),
  })
  ngOnInit(): void {
    this._nationality.getNationality().subscribe((res)=>{
    this.nationalities=res;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthersService } from '../authers.service';
import { LanguageService } from '../language.service';
import { NationlaityService } from '../nationlaity.service';
LanguageService
@Component({
  selector: 'app-add-nationality',
  templateUrl: './add-nationality.component.html',
  styleUrls: ['./add-nationality.component.css']
})
export class AddNationalityComponent implements OnInit {

  nationality: any = {}
  languages :any=[]
  
  constructor(private _nationlaityService: NationlaityService ,private _activatedRoute :ActivatedRoute
    ,private _languageService:LanguageService) { }

  addNationality(nationality: any) {

    var nationalityid = this._activatedRoute.snapshot.params["id"];

    if(nationalityid==null||nationalityid==0)
    this._nationlaityService.addNationality(nationality.value).subscribe()
    
    else
    this._nationlaityService.updateNationality(nationalityid,nationality.value).subscribe()

  }


  nationalityForm = new FormGroup({
    name: new FormControl(),
    languageId: new FormControl(),
  })
  ngOnInit(): void {
    this._languageService.getlanguages().subscribe((res)=>{
      this.languages=res;
      })
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthersService } from '../authers.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  language: any = {}
  
  constructor(private _languageService: LanguageService ,private _activatedRoute :ActivatedRoute) { }

  addLanguage(language: any) {

    var languageid = this._activatedRoute.snapshot.params["id"];

    if(languageid==null||languageid==0)
    this._languageService.addlanguage(language.value).subscribe()
    
    else
    this._languageService.updatelanguage(languageid,language.value).subscribe()

  }


  languageForm = new FormGroup({
    name: new FormControl(),
  })
  ngOnInit(): void {
  }


}

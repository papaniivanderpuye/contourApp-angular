import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

import {AutosizeModule} from 'ngx-autosize';
 


@Component({
  
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

 

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  use(): void {
    var myString= this.hero.template;
    var match = myString.match(/\[.*?\]/g);
    
    var setOfMatch = Array.from(new Set(match));

    var modal = document.getElementById('myModal');

    
    var i = 0;
    for (i = 0; i < setOfMatch.length; i++){
        var x;
        var placeholder = setOfMatch[i].toString();
        var name=prompt("What should "+ placeholder + " be?",placeholder);
        if (name!=null){
          myString= myString.replace(placeholder,name);
         
      }
      else{
        break;
      }
    }
    this.hero.final = myString;
    this.displayModal(modal);

  }
  

    // When the user clicks on the button, open the modal 
  displayModal(modal): void  {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  hideModal(): void  {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    this.hero.final = "";
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
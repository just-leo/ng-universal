import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated//uniq attributes on tags and styles of component has scopes
})
export class RecipeItemComponent implements OnInit {

  //Input receive an originl name from scope and bind to another name (like alias)
  @Input('recipeItem') recipe: {name: string, description: string, imagePath: string}

  constructor() { }

  //once after construct
  ngOnInit() {}

  //after bound
  ngOnChanges() {}

  //change detected -> it'll run
  ngDoCheck() {}

  //<ng-content>
  ngAfterContentInit() {}

  //after ng-content has been checked
  ngAfterContentChecked() {}

  //after initialization of views tree
  ngAfterViewInit() {}

  //after check in view tree
  ngAfterViewChecked() {}

  ngOnDestroy() {}
}

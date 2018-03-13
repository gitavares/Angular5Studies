import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'; //it's not necessary. Angular can destroy it automatically

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription; //it's not necessary. Angular can destroy it automatically

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // this.route.params  //in this case, Angular will destroy it automatically
    this.paramsSubscription = this.route.params //it's not necessary. Angular can destroy it automatically. Just to know
      .subscribe(  //allow refresh for the new params
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

  ngOnDestroy(){ //it's not necessary. Angular can destroy it automatically
    this.paramsSubscription.unsubscribe();
  }

}

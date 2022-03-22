import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit, OnDestroy {

  public user !: User
  private userSubscription !: Subscription
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.user = {} as User

    // სერვისში აღწერილი ფუნქციის გამოყენებით მომაქვს კონკრეტული მომხმარებელი
    this.userSubscription = this.apiService.getUserInfoById(this.route.snapshot.params['id']).subscribe((data: User) => {
      this.user = data
    })
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public allUsers !: User[]

  private getAllUsersSubscription !: Subscription

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    this.allUsers = []

    // სერვისში აღწერილი ფუნქციის გამოყენებით მომაქვს ყველა მომხმარებელი და ვათავსებ ცვლადში რომელზეც შემდეგ მოხდება ციკლით გადავლა
    this.getAllUsersSubscription = this.apiService.getAllUsers().subscribe((data: Array<User>) => {
      this.allUsers = data
    })
  }

  ngOnDestroy(): void {
    this.getAllUsersSubscription.unsubscribe()
  }

}
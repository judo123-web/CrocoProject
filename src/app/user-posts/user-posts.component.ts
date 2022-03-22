import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../interfaces/interfaces';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit, OnDestroy {

  public posts !: Post[]
  public userId !: number
  private userSubscribtion !: Subscription

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.userId = this.route.snapshot.params["id"]
    this.posts = []

    // სერვისში აღწერილი ფუნქციის გამოყენებით მომაქვს კონკრეტულ user-ID- სთან დაკავშირებული პოსტები
    this.userSubscribtion = this.apiService.getAllPostsByUserId(this.userId).subscribe((data) => {
      this.posts = data
    })
  }

  ngOnDestroy(): void {
    this.userSubscribtion.unsubscribe()
  }

}

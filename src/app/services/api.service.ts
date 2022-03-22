import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }


  // ამ ფუნქციით ხდება გეთ რექვესტის გაგზავნა და ყველა მომხმარებლის ინფორმაციის წამოღება
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }


  // ამ ფუნქციით ხდება გეთ რექვესტის გაგზავნა და კონკრეტული მომხმარებლის ინფორმაციის წამოღება id-ის მიხედვით
  getUserInfoById(id: string): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  // ამ ფუნქციით მომაქვს პოსტები user-id ის მიხედვით
  getAllPostsByUserId(user_id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
  }
}
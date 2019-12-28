import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message, Page } from '@nx-demo/shared/models';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/message');
  pages$ = this.http.get<Page[]>('/api/pages');
  constructor(private http: HttpClient) {}
}

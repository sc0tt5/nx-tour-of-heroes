import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Message, Page } from '@nx-demo/shared/models';

@Component({
  selector: 'nx-demo-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOneComponent {
  hello$ = this.http.get<Message>('/api/message');
  pages$ = this.http.get<Page[]>('/api/pages');
  constructor(private http: HttpClient) {}
}

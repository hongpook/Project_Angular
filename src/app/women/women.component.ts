import { Component } from '@angular/core';
import { Posts } from '../get-data';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  posts = Posts
}

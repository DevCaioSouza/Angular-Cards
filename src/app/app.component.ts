import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'https://picsum.photos/id/108/2000/1333',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'https://picsum.photos/id/1036/2000/1333',
      username: 'mountain lover',
      content: 'Here is a picture of a snowy mountain'
    },
    {
      title: 'Mountain biking',
      imageUrl: 'https://picsum.photos/id/203/2000/1333',
      username: 'Bike Rider',
      content: 'I did some biking today'
    },

  ]
}

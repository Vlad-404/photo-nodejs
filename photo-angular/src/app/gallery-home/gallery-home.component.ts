import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-home',
  templateUrl: './gallery-home.component.html',
  styleUrls: ['./gallery-home.component.css']
})

export class GalleryHomeComponent {
  galleries = [
    {title: "Architecture", imageUrl: "https://res.cloudinary.com/drtxn8d5t/image/upload/v1598659115/ip5puuoub18swxhrd7nw.jpg"},
    {title: "Seasons", imageUrl: "https://res.cloudinary.com/drtxn8d5t/image/upload/v1598656884/gyw7ttigjtdl0qhmnzru.jpg"},
    {title: "Food", imageUrl: "https://res.cloudinary.com/drtxn8d5t/image/upload/v1607002040/IMG_20181124_204424_la1pnz.jpg"},
    {title: "Landscapes", imageUrl: "https://res.cloudinary.com/drtxn8d5t/image/upload/v1607345621/photo-portfolio/DSC_0140_iisobc.jpg"}
  ]
}

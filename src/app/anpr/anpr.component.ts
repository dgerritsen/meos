import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anpr',
  templateUrl: './anpr.component.html',
  styleUrls: ['./anpr.component.css']
})
export class AnprComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Grab elements, create settings, etc.
    const video = (<HTMLVideoElement><any>document.getElementById('video'));

    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }

  }

}

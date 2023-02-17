import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  testo_esempio : string = "Frase d'esempio";

  onAnchorClick(text:HTMLInputElement): boolean {
    //alert(text.value);
    this.testo_esempio = text.value;
    return false;
  }

}

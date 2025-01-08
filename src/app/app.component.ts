import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CustomstylepracticeComponent } from './customstylepractice/customstylepractice.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule} from '@angular/forms'
import { MindReaderComponent } from './mind-reader/mind-reader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,MainComponent,CustomstylepracticeComponent,DatabindingComponent,FormsModule,MindReaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zeroda';
  
}

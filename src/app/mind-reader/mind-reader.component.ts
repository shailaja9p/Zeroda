import { Component } from '@angular/core';

@Component({
  selector: 'app-mind-reader',
  imports: [],
  templateUrl: './mind-reader.component.html',
  styleUrl: './mind-reader.component.css'
})
export class MindReaderComponent {
choosen:string='';
result:string='';
readNo(event:any){
  
  if(event.target.value<=10 && event.target.value>0){
    this.choosen="You have choosen: "+event.target.value;
    if(event.target.value==1){
      this.result="Whenever something challenging happens, maintain composure, take a few deep breaths, and shift your focus to something positive. ― Roy T. Bennett";
    }else if(event.target.value==2){
      this.result="Positive thinking is a valuable tool that can help you overcome obstacles, deal with pain, and reach new goals. - Amy Morin"

    }else if(event.target.value==3){
      this.result="You may find the worst enemy or best friend in yourself. - English Proverb";

    }else if(event.target.value==4){
      this.result="If you are positive, you’ll see opportunities instead of obstacles. – Widad Akrawi"

    }else if(event.target.value==5){
      this.result="A positive attitude causes a chain reaction of positive thoughts, events, and outcomes. It is a catalyst and sparks extraordinary results. - Wade Boggs"

    }
    else if(event.target.value==6){
      this.result="Positive thinking is more than just a tagline. It changes the way we behave. And I firmly believe that when I am positive, it not only makes me better, but it also makes those around me better. - Harvey Mackay";

    }
    else if(event.target.value==7){
      this.result="The power of positive thinking can change your life. - Devin McCourty";

    }
    else if(event.target.value==8){
      this.result="Enjoy every step you take. If you're curious, there is always something new to be discovered in the backdrop of your daily life. ― Roy T. Bennett, The Light in the Heart";

    }
    else if(event.target.value==9){
      this.result="Luck is a dividend of sweat. The more you sweat, the luckier you get. – Ray Kroc";
    }
    else if(event.target.value==10){
      this.result="Doing Good is a simple and universal vision. A vision to which each and every one of us can connect and contribute to its realization. A vision based on the belief that by doing good deeds, positive thinking and affirmative choice of words, feelings, and actions, we can enhance goodness in the world. - Shari Arison";

    }
  }else{
    this.result='';
    this.choosen="You have choosen: "+event.target.value+" Enter the value within the specified range";
  }
}

}

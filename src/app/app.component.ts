declare var humanizeDuration: any;

import { Component } from '@angular/core';

import { HumanizeDuration } from 'humanize-duration-ts';
import { HumanizeDurationLanguage } from 'humanize-duration-ts';


export class Session {
  start: Date;
  end: Date;
  breaks: Break[] = [];
}

export class Break {
   start: Date;
   end: Date;
   duration: number;
   durationString: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Time Pickers!';
  session: Session;
  duration: string;
  breakIsOnGoing: boolean;
  langService: HumanizeDurationLanguage = new HumanizeDurationLanguage();
  humanizer: HumanizeDuration = new HumanizeDuration(this.langService);


  start(): void {
  	if (this.session !== undefined) {
  		return;
  	}
    this.session = new Session();
  	this.session.start = new Date();
  }

  end(): void {
    if (this.session !== undefined && this.session.end == undefined) {
      if (this.breakIsOnGoing) {
        this.break();
      }
    	this.session.end = new Date();
      this.duration = this.humanizer.humanize(this.calculateDuration(), 
        { delimiter: ' and ', round: true });
    }
  }

  break(): void {
    if (this.session !== undefined && this.session.end == undefined) {
      if(!this.breakIsOnGoing) {
        let breakSession =  new Break();
        breakSession.start = new Date();
        this.session.breaks.push(breakSession);
        this.breakIsOnGoing = true;
      } else {
        let breakOngoing = this.session.breaks.filter(b => 
              b.end == undefined);
        breakOngoing[0].end = new Date();
        this.breakIsOnGoing = false;
      }
    }
  }

  calculateDuration(): number {
    let daySession = this.session.end.getTime() 
            - this.session.start.getTime();

    for (let b of this.session.breaks) {
      let durationBreak = b.end.getTime() - b.start.getTime();
      b.duration = durationBreak;
      b.durationString = this.humanizer.humanize(durationBreak, 
        { delimiter: ' and ', round: true });
      daySession = daySession - durationBreak;
    }
    return daySession;
  }

  reset(): void {
    this.session = undefined;
    this.duration = "";
  }

}

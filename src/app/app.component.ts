import {Component} from '@angular/core';
import {ApiService} from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pointPoker';
  issue: any = [];
  storyPoints = ['0.5', '1', '2', '3', '5', '8', '13', '20'];


  public openIssue: -1;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.api.getIssue()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.issue.push({
            name: d.title,
            text: d.body,
            number: d.number
          });
        }
        console.log(this.issue);
      });
  }

  postSP() {
    this.api.postLabel()
  }


}


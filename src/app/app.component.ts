import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './models/question';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';
  questions$: Observable<Question<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}

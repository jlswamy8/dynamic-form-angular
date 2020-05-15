import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {


  @Input() questions: Question<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private questionService: QuestionService) {  }

  ngOnInit() {
    this.form = this.questionService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}

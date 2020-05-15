import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from '../models/question';
import { DropdownQuestion } from '../models/question-dropdown';
import { TextboxQuestion } from '../models/question-textbox';
import { of } from 'rxjs';
import { DateQuestion } from '../models/question-date';


@Injectable()
export class QuestionService {
  constructor() { }

  toFormGroup(questions: Question<string>[] ) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  getQuestions() {

    let questions: Question<string>[] = [

    /*  new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      */

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),
      new DateQuestion({
        key: 'date',
        label: 'Date',
        type: 'date',
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
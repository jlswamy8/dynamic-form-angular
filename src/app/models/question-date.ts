import { Question } from './question';

export class DateQuestion extends Question<string> {
  controlType = 'date';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
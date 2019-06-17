import { Component, EventEmitter, Output } from '@angular/core';
import { ParametersInput } from './interfaces/parameters-input';
import fonts from '../../../fonts';
import comments from '../../../comments';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Fonts } from 'figlet';

@Component({
  selector: 'app-parameters-input',
  templateUrl: './parameters-input.component.html',
  styleUrls: ['./parameters-input.component.css']
})
export class ParametersInputComponent {
  @Output()
  values: EventEmitter<ParametersInput> = new EventEmitter<ParametersInput>();

  readonly fonts: Fonts[] = fonts;
  readonly comments: string[] = comments.map(c => c.name);

  formGroup: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      text: 'Hello, world!',
      font: 'Big',
      comment: 'None',
      borders: false,
      margins: this.fb.group({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      })
    });

    this.formGroup.get('comment')
      .valueChanges
      .subscribe(v => this.disabledBordersIfNoComments(v));

    this.formGroup.valueChanges.subscribe(v => this.values.emit(v));

    this.values.emit(this.formGroup.value);
  }

  private disabledBordersIfNoComments(comment: string): void {
    const commentControl = this.formGroup.get('borders') as FormControl;

    if (comment === 'None' && !commentControl.enabled) {
      commentControl.disable();
    } else if (!commentControl.disabled) {
      commentControl.enable();
    }
  }
}

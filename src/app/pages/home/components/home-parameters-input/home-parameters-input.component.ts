import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParametersInput } from './parameters-input';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { COMMENTS } from '../../../../data/comments';
import { FONTS } from '../../../../data/fonts';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowDownCircle,
  heroArrowLeftCircle,
  heroArrowRightCircle,
  heroArrowUpCircle,
} from '@ng-icons/heroicons/outline';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home-parameters-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgIconComponent, NgClass],
  providers: [
    provideIcons({
      heroArrowLeftCircle,
      heroArrowRightCircle,
      heroArrowUpCircle,
      heroArrowDownCircle,
    }),
  ],
  templateUrl: './home-parameters-input.component.html',
  styleUrl: './home-parameters-input.component.scss',
})
export class HomeParametersInputComponent implements OnInit {
  @Output()
  parametersChange: EventEmitter<ParametersInput> =
    new EventEmitter<ParametersInput>();

  readonly fonts: string[] = FONTS;
  readonly comments: string[] = COMMENTS.map(c => c.name);

  formGroup: FormGroup;

  protected readonly arrowLeftCircle = heroArrowLeftCircle;
  protected readonly arrowRightCircle = heroArrowRightCircle;
  protected readonly arrowUpCircle = heroArrowUpCircle;
  protected readonly arrowDownCircle = heroArrowDownCircle;

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      text: 'Hello, world!',
      font: 'Big',
      comment: 'None',
      borders: false,
      margins: this.fb.group({
        left: 1,
        right: 1,
        top: 1,
        bottom: 1,
      }),
    });
  }

  get borders(): AbstractControl | null {
    return this.formGroup.get('borders');
  }

  ngOnInit(): void {
    this.formGroup
      .get('comment')
      ?.valueChanges.subscribe(v => this.disabledBordersIfNoComments(v));

    this.formGroup.valueChanges.subscribe(v => this.onParametersChange(v));
    this.parametersChange.emit(this.formGroup.value);
    this.enableBordersInput(false);
  }

  private disabledBordersIfNoComments(comment: string): void {
    const commentControl = this.formGroup.get('borders') as FormControl;

    if (comment === 'None' && !commentControl.enabled) {
      commentControl.disable();
    } else if (!commentControl.disabled) {
      commentControl.enable();
    }
  }

  private onParametersChange(value: ParametersInput): void {
    if (value.comment === 'None') {
      value.borders = false;
      this.enableBordersInput(false);
    } else {
      this.enableBordersInput(true);
    }

    this.formGroup.setValue(value, { emitEvent: false });
    this.parametersChange.emit(value);
  }

  private enableBordersInput(value: boolean): void {
    if (value) this.borders?.enable();
    else this.borders?.disable();
  }
}

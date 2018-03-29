import {Component, EventEmitter, Output} from '@angular/core';
import {ParametersInput} from './interfaces/parameters-input';
import fonts from '../../../fonts';
import comments from '../../../comments';

@Component({
    selector: 'app-parameters-input',
    templateUrl: './parameters-input.component.html',
    styleUrls: ['./parameters-input.component.css']
})
export class ParametersInputComponent {

    @Output()
    values: EventEmitter<ParametersInput> = new EventEmitter<ParametersInput>();

    fonts: string[] = fonts;
    comments: string[] = comments.map(c => c.name);
    parameters: ParametersInput = {
        text: 'Hello, world!',
        font: 'Big',
        comment: 'None'
    };

    constructor() {
        this.values.emit(this.parameters);
    }

    changed() {
        this.values.emit(this.parameters);
    }
}

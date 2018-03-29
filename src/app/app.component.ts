import {Component} from '@angular/core';
import {ParametersInput} from './components/parameters-input/interfaces/parameters-input';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    parameters: ParametersInput = {
        text: 'Hello, world!',
        font: 'Big',
        comment: 'None'
    };
}

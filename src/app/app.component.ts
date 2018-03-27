import {Component, OnInit} from '@angular/core';
import {FigletService} from './services/figlet/figlet.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    figlet: string;

    constructor(private readonly figletService: FigletService) {
    }

    ngOnInit(): void {
        this.figletService.text('Hello', 'Small').subscribe(v => this.figlet = v);
    }
}

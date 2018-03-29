import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FigletService} from '../../services/figlet/figlet.service';
import {ClipboardService} from 'ngx-clipboard';

@Component({
    selector: 'app-figlet',
    templateUrl: './figlet.component.html',
    styleUrls: ['./figlet.component.css'],
    providers: [FigletService, ClipboardService]
})
export class FigletComponent implements OnInit, OnChanges {
    @Input()
    font: string;

    @Input()
    text: string;

    private figlet: string;
    private copied = false;

    constructor(private readonly figletService: FigletService,
                private readonly clipboardService: ClipboardService) {
    }

    ngOnInit() {
        this.update();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    private update() {
        this.figletService.text(this.text, this.font).subscribe(v => this.figlet = v);
    }

    copyToClipboard() {
        this.copied = true;
        this.clipboardService.copyFromContent(this.figlet);

        setTimeout(() => {
            this.copied = false;
        }, 1000);
    }
}

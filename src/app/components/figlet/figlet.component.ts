import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FigletService} from '../../services/figlet/figlet.service';
import {ClipboardService} from 'ngx-clipboard';
import {CommentsService} from '../../services/comments/comments.service';
import {BorderService} from '../../services/border/border.service';

@Component({
    selector: 'app-figlet',
    templateUrl: './figlet.component.html',
    styleUrls: ['./figlet.component.css'],
    providers: [
        FigletService,
        CommentsService,
        BorderService,
        ClipboardService
    ]
})
export class FigletComponent implements OnInit, OnChanges {
    @Input()
    text: string;

    @Input()
    font: string;

    @Input()
    comment = 'None';

    @Input()
    bodered = false;

    private figlet: string;
    private copied = false;

    constructor(private readonly figletService: FigletService,
                private readonly commentsService: CommentsService,
                private readonly borderService: BorderService,
                private readonly clipboardService: ClipboardService) {
    }

    ngOnInit() {
        this.update();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    private update() {
        console.log('update: bordered ?', this.bodered);
        this.figletService.text(this.text, this.font).subscribe(
            v => {
                v = this.commentsService.comment(v, this.comment);
                v = this.bodered ? this.borderService.border(v, this.comment) : v;
                this.figlet = v;
            }
        );
    }

    copyToClipboard() {
        this.copied = true;
        this.clipboardService.copyFromContent(this.figlet);

        setTimeout(() => {
            this.copied = false;
        }, 1000);
    }
}

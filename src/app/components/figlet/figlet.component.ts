import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FigletService} from '../../services/figlet/figlet.service';
import {ClipboardService} from 'ngx-clipboard';
import {CommentsService} from '../../services/comments/comments.service';
import {BorderService} from '../../services/border/border.service';
import {MarginsService} from '../../services/margins/margins.service';
import {Margins} from '../../services/margins/margins';

@Component({
    selector: 'app-figlet',
    templateUrl: './figlet.component.html',
    styleUrls: ['./figlet.component.css'],
    providers: [
        FigletService,
        MarginsService,
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

    @Input()
    margins: Margins = {};

    private figlet: string;
    private copied = false;

    constructor(private readonly figletService: FigletService,
                private readonly marginsService: MarginsService,
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
        this.figletService.text(this.text, this.font).subscribe(
            v => {
                v = this.marginsService.add_margins(v, this.margins);
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
        }, 2000);
    }
}

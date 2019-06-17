import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FigletService } from '../../services/figlet/figlet.service';
import { ClipboardService } from 'ngx-clipboard';
import { CommentsService } from '../../services/comments/comments.service';
import { BorderService } from '../../services/border/border.service';
import { MarginsService } from '../../services/margins/margins.service';
import { Margins } from '../../services/margins/margins';
import { Fonts } from 'figlet';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  font: Fonts;

  @Input()
  comment = 'None';

  @Input()
  bordered = false;

  @Input()
  margins: Margins = {};

  figlet$: Observable<string>;

  copied = false;

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

  copyToClipboard() {
    this.figlet$
      .pipe(take(1))
      .subscribe(f => {
        this.clipboardService.copyFromContent(f);
        this.copied = true;

        setTimeout(() => {
          this.copied = false;
        }, 2000);
      });
  }

  private update() {
    this.figlet$ = this.figletService.text(this.text, this.font)
      .pipe(
        map(t => this.marginsService.add_margins(t, this.margins)),
        map(t => this.commentsService.comment(t, this.comment)),
        map(t => this.bordered ? this.borderService.border(t, this.comment) : t)
      );
  }
}

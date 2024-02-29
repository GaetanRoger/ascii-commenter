import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Margins } from '../../../../services/margins/margins';
import { BorderService } from '../../../../services/border/border.service';
import { FigletService } from '../../../../services/figlet/figlet.service';
import { MarginsService } from '../../../../services/margins/margins.service';
import { CommentsService } from '../../../../services/comments/comments.service';
import { ClipboardService } from 'ngx-clipboard';
import figlet from 'figlet';
import { filter, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-figlet',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home-figlet.component.html',
  styleUrl: './home-figlet.component.scss',
})
export class HomeFigletComponent implements OnChanges {
  //
  // Inputs / Outputs
  //

  @Input()
  text?: string;

  @Input()
  font?: figlet.Fonts;

  @Input()
  comment?: string = 'None';

  @Input()
  bordered?: boolean = false;

  @Input()
  margins?: Margins = {};

  //
  // Properties
  //

  figlet$?: Observable<string | null | undefined>;
  copied = false;

  getFigletLines(figlet: string): string[] {
    return (figlet ?? '').split('\n');
  }

  //
  // Constructor
  //

  constructor(
    private readonly figletService: FigletService,
    private readonly marginsService: MarginsService,
    private readonly commentsService: CommentsService,
    private readonly borderService: BorderService,
    private readonly clipboardService: ClipboardService
  ) {}

  //
  // Angular hooks
  //

  ngOnChanges(_: SimpleChanges): void {
    this.update();
  }

  //
  // Public / protected methods
  //

  protected copyToClipboard(text: string | null | undefined) {
    this.copied = true;
    this.clipboardService.copyFromContent(text ?? '');

    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }

  //
  // Private methods
  //

  private update() {
    this.figlet$ = this.figletService.text(this.text, this.font).pipe(
      filter(text => !!text),
      map(text => this.marginsService.add_margins(text, this.margins)),
      map(text => this.commentsService.comment(text, this.comment)),
      map(text =>
        this.bordered ? this.borderService.border(text, this.comment) : text
      )
    );
  }
}

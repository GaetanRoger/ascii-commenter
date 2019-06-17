import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { defaults, Fonts, text as figlet } from 'figlet';

@Injectable()
export class FigletService {

  constructor() {
    defaults({fontPath: '/assets/fonts'});
  }

  /**
   * Return the text in the figlet font.
   *
   * If no text or font is given, returns an empty string.
   */
  text(text: string, font: Fonts): Observable<string> {
    return new Observable<string>(subscriber => {
      // If text is undefined, null or empty, return an empty string
      if (!text || !font) {
        subscriber.next('');
        subscriber.complete();
        return;
      }

      figlet(text, font, (err: Error, res: string) => {
        console.log('err', err);

        if (err) {
          subscriber.next(this.generateErrorMessage(err));
          subscriber.complete();
          return;
        }

        let lines = res.split('\n');

        // Removing empty lines
        lines = lines.filter(l => l.trim().length > 0);

        // Removing blanks characters at the beginning of every line
        while (lines.every(v => v.charAt(0) === ' ')) {
          lines = lines.map(l => l.substr(1));
        }

        subscriber.next(lines.join('\n'));
        subscriber.complete();
      });
    });

  }

  private generateErrorMessage(err: Error) {
    return `Unable to generate text, an error occurred: ${err.message}\n`
      + 'Maybe try with a different font?';
  }
}

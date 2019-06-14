import {Injectable} from '@angular/core';
import * as figlet from 'figlet';
import { Observable } from 'rxjs';

@Injectable()
export class FigletService {

    constructor() {
        figlet.defaults({fontPath: 'assets/fonts'});
    }

    /**
     * Return the text in the figlet font.
     *
     * If the text is undefined, null or empty, returns an empty string.
     */
    text(text: string, font: string): Observable<string> {
        return new Observable<string>(subscriber => {
            // If text is undefined, null or empty, return an empty string
            if (!text) {
                subscriber.next('');
                subscriber.complete();
                return;
            }


            figlet(text, font, (err: object, res: string) => {
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

}

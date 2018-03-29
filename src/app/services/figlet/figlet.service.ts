import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as figlet from 'figlet';

@Injectable()
export class FigletService {

    constructor() {
        figlet.defaults({fontPath: 'assets/fonts'});
    }

    text(text: string, font: string): Observable<string> {
        return new Observable<string>(subscriber => {
            if (!text) {
                subscriber.next('');
                subscriber.complete();
            }


            figlet(text, font, (err: object, res: string) => {
                const lines = res.split('\n');

                // If all line start with a space char, we remove it
                if (lines.filter(l => l.charAt(0) === ' ').length === lines.length) {
                    res = lines.map(l => l.substr(1)).join('\n');
                }

                subscriber.next(res);
                subscriber.complete();
            });
        });

    }

}

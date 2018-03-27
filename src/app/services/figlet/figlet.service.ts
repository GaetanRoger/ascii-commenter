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
            figlet(text, font, (err: object, res: string) => {
                subscriber.next(res);
                subscriber.complete();
            });
        });

    }

}

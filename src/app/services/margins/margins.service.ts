import {Injectable} from '@angular/core';
import {Margins} from './margins';

@Injectable()
export class MarginsService {
    add_margins(text: string, margins: Margins): string {
        if (!margins || !text) {
            return text;
        }

        let lines = text.split('\n');

        // Adding default values
        const marginsWithDefaults: Margins = {
            left: margins.left ? margins.left : 0,
            right: margins.right ? margins.right : 0,
            top: margins.top ? margins.top : 0,
            bottom: margins.bottom ? margins.bottom : 0
        };

        // Generating empty lines and columns
        const marginsSpaces = {
            left: Array(marginsWithDefaults.left).join(' '),
            right: Array(marginsWithDefaults.right).join(' '),
            top: '',
            bottom: ''
        };

        lines = lines.map(l => marginsSpaces.left + l + marginsSpaces.right);

        const maxWidth = Math.max(...lines.map(l => l.length)) + 1;

        marginsSpaces.top = Array(marginsWithDefaults.top).join(Array(maxWidth).join(' ') + '\n');
        marginsSpaces.bottom = Array(marginsWithDefaults.bottom).join('\n' + Array(maxWidth).join(' '));

        return marginsSpaces.top + lines.join('\n') + marginsSpaces.bottom;
    }
}

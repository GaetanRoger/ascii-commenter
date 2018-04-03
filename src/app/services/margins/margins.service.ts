import {Injectable} from '@angular/core';
import {Margins} from './margins';

@Injectable()
export class MarginsService {

    constructor() {
    }

    add_margins(text: string, margins: Margins): string {
        if (!margins || !text) {
            return text;
        }

        let lines = text.split('\n');

        // Adding default values
        const margins_with_defaults: Margins = {
            left: margins.left ? margins.left : 0,
            right: margins.right ? margins.right : 0,
            top: margins.top ? margins.top : 0,
            bottom: margins.bottom ? margins.bottom : 0
        };

        // Generating empty lines and columns
        const margins_spaces = {
            left: Array(margins_with_defaults.left).join(' '),
            right: Array(margins_with_defaults.right).join(' '),
            top: '',
            bottom: ''
        };

        console.log('m_w_d', margins_with_defaults, 'm_s', margins_spaces);

        lines = lines.map(l => margins_spaces.left + l + margins_spaces.right);

        const max_width = Math.max(...lines.map(l => l.length)) + 1;

        margins_spaces.top = Array(margins_with_defaults.top).join(Array(max_width).join(' ') + '\n');
        margins_spaces.bottom = Array(margins_with_defaults.bottom).join('\n' + Array(max_width).join(' '));

        return margins_spaces.top + lines.join('\n') + margins_spaces.bottom;
    }
}

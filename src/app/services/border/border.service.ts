import {Injectable} from '@angular/core';
import comments from '../../../comments';

@Injectable()
export class BorderService {
    private readonly NO_COMMENT_NAME = 'None';

    constructor() {
    }

    private static count_first_spaces(str: string): number {
        const match = str.match(/^( +)/);

        if (match) {
            return match[1].length;
        }

        return 0;
    }

    border(text: string, comment_name: string): string {
        // Getting the comment type object from its name
        const comment_type = comments.find(v => v.name === comment_name);

        // If not comment exists with this name, ignoring
        // It also covers the case where `comment_name` is undefined, null or empty
        if (!comment_type || !text || comment_name === this.NO_COMMENT_NAME) {
            return text;
        }

        // If no first or last, adding one
        if (!comment_type.first) {
            text = comment_type.char + '\n' + text;
        }
        if (!comment_type.last) {
            text += '\n' + comment_type.char;
        }

        // Preparing lines and chars
        const lines = text.split('\n');
        const space = comment_type.space === undefined || comment_type.space === true ? ' ' : '';
        const right_char = comment_type.right ? comment_type.right : comment_type.char;

        // Getting the max length of the text
        const max_width = Math.max(...lines.map(l => l.length));

        // Calculating top & bottom border
        const first_and_char_length_diff = comment_type.first ? comment_type.first.length - comment_type.char.length : 0;
        const border_width = (max_width + 1 + right_char.length - first_and_char_length_diff) / comment_type.char.length;
        const border = Array(border_width).join(comment_type.char);

        // Adding border
        return lines.map((l, i) => {
            // If first row
            if (i === 0) {
                return l + border;
            }

            // If last row
            if (i === lines.length - 1) {
                const spaces_count = BorderService.count_first_spaces(l);
                return Array(spaces_count + 1).join(' ') + border + l.trim();
            }

            // Other rows
            return l + space + right_char;
        })
            .join('\n');
    }
}

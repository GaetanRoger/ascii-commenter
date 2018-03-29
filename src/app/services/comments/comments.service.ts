import {Injectable} from '@angular/core';
import comments from '../../../comments';

@Injectable()
export class CommentsService {
    constructor() {
    }

    /**
     * Add comments symbols to the text
     *
     * @param {string} text
     * @param {string} comment_name
     */
    comment(text: string, comment_name: string): string {
        // Getting the comment type object from its name
        const comment_type = comments.find(v => v.name === comment_name);

        // If not comment exists with this name, ignoring
        // It also covers the case where `comment_name` or `text` is undefined, null or empty
        if (!comment_type || !text) {
            return text;
        }

        // Computing the first, last and left chars (see `CommentType` interface for rules)
        const left_char = comment_type.left ? comment_type.left : comment_type.char;
        const first_char = comment_type.first ? comment_type.first + '\n' : '';
        const last_char = comment_type.last ? '\n' + comment_type.last : '';
        const space = comment_type.space === undefined || comment_type.space === true ? ' ' : '';

        // Adding the comments symbols
        return first_char
            + text.split('\n')
                .map(l => {
                    return left_char + space + l;
                }).join('\n')
            + last_char;
    }
}

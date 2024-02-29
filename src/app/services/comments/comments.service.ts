import { Injectable } from '@angular/core';
import { COMMENTS } from '../../data/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  /**
   * Add comments symbols to the text
   *
   * @param text
   * @param comment_name
   */
  comment(
    text: string | null | undefined,
    comment_name: string | null | undefined
  ): string | null | undefined {
    // Getting the comment type object from its name
    const comment_type = COMMENTS.find(v => v.name === comment_name);

    // If not comment exists with this name, ignoring
    // It also covers the case where `comment_name` or `text` is undefined, null or empty
    if (!comment_type || !text) {
      return text;
    }

    // Computing the first, last and left chars (see `CommentType` interface for rules)
    const left_char = comment_type.left ? comment_type.left : comment_type.char;
    const first_char = comment_type.first ? comment_type.first + '\n' : '';
    const last_char = comment_type.last ? '\n' + comment_type.last : '';
    const space =
      comment_type.space === undefined || comment_type.space ? ' ' : '';

    // Adding the comments symbols
    return (
      first_char +
      text
        .split('\n')
        .map(l => {
          return left_char + space + l;
        })
        .join('\n') +
      last_char
    );
  }
}

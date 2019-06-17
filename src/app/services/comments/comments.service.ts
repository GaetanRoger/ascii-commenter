import { Injectable } from '@angular/core';
import comments from '../../../comments';
import { CommentType } from './comment-type';

@Injectable()
export class CommentsService {
  /**
   * Add comments symbols to the text
   */
  comment(text: string, commentName: string): string {
    // Getting the comment type object from its name
    const commentType: CommentType = comments.find(v => v.name === commentName);

    // If no comment exists with this name, ignoring
    // It also covers the case where `commentName` or `text` is undefined, null or empty
    if (!commentType || !text) {
      return text;
    }

    // Computing the first, last and left chars (see `CommentType` interface for rules)
    const leftChar = commentType.left ? commentType.left : commentType.char;
    const firstChar = commentType.first ? commentType.first + '\n' : '';
    const lastChar = commentType.last ? '\n' + commentType.last : '';
    const space = commentType.space === undefined || commentType.space === true ? ' ' : '';

    // Adding the comments symbols
    return firstChar
      + text.split('\n')
        .map(textLine => leftChar + space + textLine)
        .join('\n')
      + lastChar;
  }
}

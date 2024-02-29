/**
 * All comment types MUST be defined using this interface.
 *
 * In the documentation, the word "char" will often be used, because
 * it is often only a character. But nothing prevents using a string if needed.
 *
 * First and last chars MUST be set on independent lines, at the beginning and end respectively.
 * `char` MUST be used in place of `left` if `left` is not defined.
 */
export interface CommentType {
  /**
   * Name of the comment type.
   */
  name: string;

  /**
   * Main character of the comment type.
   *
   * It will be used for borders and other filling needs.
   */
  char: string;

  /**
   * If the first character is different, specify it here.
   *
   * For example, the multiple lines C style would be `/*`.
   */
  first?: string;

  /**
   * If the last character is different, specify it here.
   *
   * For example, the multiple lines C style would be `*\/`.
   */
  last?: string;

  /**
   * If the left character of a multiple line comment is different, specify it here.
   *
   * For example, using the single line C style for multiple lines: `//`.
   */
  left?: string;

  /**
   * If the right character of a multiple line comment is different, specify it here.
   *
   * It will only be used in a bordered mode.
   */
  right?: string;

  /**
   * Should a space be added between the left char and the text.
   *
   * Default value SHOULD be `true`.
   */
  space?: boolean;
}

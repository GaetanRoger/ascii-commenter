import {CommentsService} from './comments.service';

describe('CommentsService', () => {
    const HELLO_WORLD = 'Hello, world!';
    const MULTI_LINES_HELLO_WORLD = 'Hello,\nworld!\nHow are you?';

    let service: CommentsService;
    beforeEach(() => {
        service = new CommentsService();
    });

    /*
     * GLOBAL CASES
     */

    it('should not comment if "None" comment name is sent', () => {
        const result = service.comment(HELLO_WORLD, 'None');

        expect(result).toBe(HELLO_WORLD);
    });

    it('should not comment if comment name is undefined, null or empty', () => {
        const resultUndefined = service.comment(HELLO_WORLD, undefined);
        const resultNull = service.comment(HELLO_WORLD, null);
        const resultEmpty = service.comment(HELLO_WORLD, '');

        expect(resultUndefined).toBe(HELLO_WORLD);
        expect(resultNull).toBe(HELLO_WORLD);
        expect(resultEmpty).toBe(HELLO_WORLD);
    });

    it('should not comment if comment name is unknown', () => {
        const resultUndefined = service.comment(HELLO_WORLD, 'fdsfsdfs');
        const resultNull = service.comment(HELLO_WORLD, 'wtf this comment');
        const resultEmpty = service.comment(HELLO_WORLD, '123456789613648');

        expect(resultUndefined).toBe(HELLO_WORLD);
        expect(resultNull).toBe(HELLO_WORLD);
        expect(resultEmpty).toBe(HELLO_WORLD);
    });


    /*
     * C
     */

    it('should comment one line of text using C multiple lines style comment', () => {
        const result = service.comment(HELLO_WORLD, 'C');

        expect(result).toBe('/*\n * Hello, world!\n */');
    });

    it('should comment three lines of text using C multiple lines style comment', () => {
        const result = service.comment(MULTI_LINES_HELLO_WORLD, 'C');

        expect(result).toBe('/*\n * Hello,\n * world!\n * How are you?\n */');
    });


    /*
     * C++
     */

    it('should comment one line of text using C++ style comment', () => {
        const result = service.comment(HELLO_WORLD, 'C++');

        expect(result).toBe('// ' + HELLO_WORLD);
    });

    it('should comment three lines of text using C++ style comment', () => {
        const result = service.comment(MULTI_LINES_HELLO_WORLD, 'C++');

        expect(result).toBe('// Hello,\n// world!\n// How are you?');
    });


    /*
     * Python
     */

    it('should comment one line of text using Python style comment', () => {
        const result = service.comment(HELLO_WORLD, 'Python');

        expect(result).toBe('# ' + HELLO_WORLD);
    });

    it('should comment three lines of text using Python style comment', () => {
        const result = service.comment(MULTI_LINES_HELLO_WORLD, 'Python');

        expect(result).toBe('# Hello,\n# world!\n# How are you?');
    });


    /*
     * HTML
     */

    it('should comment one line of text using HTML style comment', () => {
        const result = service.comment(HELLO_WORLD, 'HTML');

        expect(result).toBe(`<!--\n  -- ${HELLO_WORLD}\n  -->`);
    });

    it('should comment three lines of text using HTML style comment', () => {
        const result = service.comment(MULTI_LINES_HELLO_WORLD, 'HTML');

        expect(result).toBe('<!--\n  -- Hello,\n  -- world!\n  -- How are you?\n  -->');
    });
});

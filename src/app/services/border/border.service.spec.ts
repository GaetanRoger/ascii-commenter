import {BorderService} from './border.service';

describe('BorderService', () => {
    const HELLO_WORLD_C = '/*\n * Hello, world!\n */';
    const HELLO_WORLD_CPP = '// Hello, world!';
    const HELLO_WORLD_HTML = '<!--\n  -- Hello, world!\n  -->';

    let service: BorderService;

    beforeEach(() => {
        service = new BorderService();
    });


    /*
     * GLOBAL CASES
     */

    it('should return input if text is undefined, null or empty', () => {
        const undefinedResult = service.border(undefined, 'C');
        const nullResult = service.border(null, 'C');
        const emptyResult = service.border('', 'C');

        expect(undefinedResult).toBe(undefined);
        expect(nullResult).toBe(null);
        expect(emptyResult).toBe('');
    });

    it('should not border if "None" comment name is sent', () => {
        const result = service.border(HELLO_WORLD_CPP, 'None');

        expect(result).toBe(HELLO_WORLD_CPP);
    });

    it('should not border if comment name is undefined, null or empty', () => {
        const resultUndefined = service.border(HELLO_WORLD_CPP, undefined);
        const resultNull = service.border(HELLO_WORLD_CPP, null);
        const resultEmpty = service.border(HELLO_WORLD_CPP, '');

        expect(resultUndefined).toBe(HELLO_WORLD_CPP);
        expect(resultNull).toBe(HELLO_WORLD_CPP);
        expect(resultEmpty).toBe(HELLO_WORLD_CPP);
    });

    it('should not border if comment name is unknown', () => {
        const resultUndefined = service.border(HELLO_WORLD_CPP, 'fdsfsdfs');
        const resultNull = service.border(HELLO_WORLD_CPP, 'wtf this comment');
        const resultEmpty = service.border(HELLO_WORLD_CPP, '123456789613648');

        expect(resultUndefined).toBe(HELLO_WORLD_CPP);
        expect(resultNull).toBe(HELLO_WORLD_CPP);
        expect(resultEmpty).toBe(HELLO_WORLD_CPP);
    });


    /*
     * C++
     */

    it('should border a single C++ commented line', () => {
        const result = service.border(HELLO_WORLD_CPP, 'C++');

        expect(result).toBe('///////////////////\n// Hello, world! //\n///////////////////');
    });


    /*
     * C++
     */

    it('should border multiple C commented lines', () => {
        const result = service.border(HELLO_WORLD_C, 'C');

        expect(result).toBe('/*****************\n * Hello, world! *\n *****************/');
    });


    /*
     * HTML
     */

    it('should border multiple HTML commented lines', () => {
        const result = service.border(HELLO_WORLD_HTML, 'HTML');

        expect(result).toBe('<!-------------------\n  -- Hello, world! --\n  ------------------->');
    });
});

import {FigletService} from './figlet.service';

describe('FigletService', () => {
    let service: FigletService;
    beforeEach(() => {
        service = new FigletService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should generate hello world ascii art', (done: DoneFn) => {
        service.text('Hello, world!', 'Small').subscribe(v => {
            expect<string>(v).toBe(
                ' _  _     _ _                        _    _ _ \n' +
                '| || |___| | |___    __ __ _____ _ _| |__| | |\n' +
                '| __ / -_) | / _ \\_  \\ V  V / _ \\ \'_| / _` |_|\n' +
                '|_||_\\___|_|_\\___( )  \\_/\\_/\\___/_| |_\\__,_(_)\n' +
                '                 |/                           '
            );
            done();
        });
    });

    it('should generate an empty string if text is undefined', (done: DoneFn) => {
        service.text(undefined, 'Small').subscribe(v => {
            expect<string>(v).toBe('');
            done();
        });
    });

    it('should generate an empty string if text is null', (done => {
        service.text(null, 'Small').subscribe(v => {
            expect<string>(v).toBe('');
            done();
        });
    }));

    it('should generate an empty string if text is empty', (done => {
        service.text('', 'Small').subscribe(v => {
            expect<string>(v).toBe('');
            done();
        });
    }));
});
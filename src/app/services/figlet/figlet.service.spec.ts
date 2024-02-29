import { FigletService } from './figlet.service';

describe('FigletService', () => {
  let service: FigletService;
  beforeEach(() => {
    service = new FigletService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate "hello world" ascii art using "Small" font', (done: DoneFn) => {
    service.text('Hello, world!', 'Small').subscribe(v => {
      expect<string>(v).toBe(
        ' _  _     _ _                        _    _ _ \n' +
          '| || |___| | |___    __ __ _____ _ _| |__| | |\n' +
          "| __ / -_) | / _ \\_  \\ V  V / _ \\ '_| / _` |_|\n" +
          '|_||_\\___|_|_\\___( )  \\_/\\_/\\___/_| |_\\__,_(_)\n' +
          '                 |/                           '
      );
      done();
    });
  });

  it('should generate "Hello!" ascii art using "Def Leppard" font', done => {
    service.text('Hello!', 'Def Leppard').subscribe(v => {
      expect<string>(v).toBe(
        '                                                      :         \n' +
          '                    ,;                               t#,        \n' +
          '.    .            f#i            i              i   ;##W.   ;f. \n' +
          'Di   Dt         .E#t            LE             LE  :#L:WE   i##:\n' +
          'E#i  E#i       i#W,            L#E            L#E .KG  ,#D  i##:\n' +
          'E#t  E#t      L#D.            G#W.           G#W. EE    ;#f i##:\n' +
          'E#t  E#t    :K#Wfff;         D#K.           D#K. f#.     t#ii##:\n' +
          'E########f. i##WLLLLt       E#K.           E#K.  :#G     GK i##:\n' +
          'E#j..K#j...  .E#L         .E#E.          .E#E.    ;#L   LW. i##:\n' +
          'E#t  E#t       f#E:      .K#E           .K#E       t#f f#:  i##:\n' +
          'E#t  E#t        ,WW;    .K#D           .K#D         f#D#;   i#W.\n' +
          'f#t  f#t         .D#;  .W#G           .W#G           G#t    ,i. \n' +
          ' ii   ii           tt :W##########Wt :W##########Wt   t     :G#:\n' +
          '                      :,,,,,,,,,,,,,.:,,,,,,,,,,,,,.        iKt '
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

  it('should generate an empty string if text is empty', done => {
    service.text('', 'Small').subscribe(v => {
      expect<string>(v).toBe('');
      done();
    });
  });

  it('should generate an empty string if text is null', done => {
    service.text(null, 'Small').subscribe(v => {
      expect<string>(v).toBe('');
      done();
    });
  });
});

import {Margins} from '../../../services/margins/margins';
import { Fonts } from 'figlet';

export interface ParametersInput {
    text: string;
    font: Fonts;
    borders?: boolean;
    comment?: string;
    margins?: Margins;
}

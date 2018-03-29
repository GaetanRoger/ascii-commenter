import {Margins} from '../../../services/margins/margins';

export interface ParametersInput {
    text: string;
    font: string;
    borders?: boolean;
    comment?: string;
    margins?: Margins;
}

import { Margins } from '../../../../services/margins/margins';
import figlet from 'figlet';

export interface ParametersInput {
  text: string;
  font: figlet.Fonts;
  borders?: boolean;
  comment?: string;
  margins?: Margins;
}

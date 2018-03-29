export interface ParametersInput {
    text: string;
    font: string;
    borders?: boolean;
    comment?: string;
    margins?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
}

export interface IContact {
    title: string;
    firstNane: string;
    lastName: string;
    labelLineName: string;
    emailAddress: string;
    validated?: boolean;
    validatedDate?: Date;
}
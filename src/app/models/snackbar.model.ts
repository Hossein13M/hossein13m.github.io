export type SnackBarTypes = 'onSuccess' | 'onError';

export interface SnackbarModel {
    classes: Array<string>;
    message: string;
}

export interface SnackBar {
    onSuccess: SnackbarModel;
    onError: SnackbarModel;
}

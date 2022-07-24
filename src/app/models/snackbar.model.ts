export interface SnackbarModel {
    classes: Array<string>;
    message: string;
}

export interface SnackBar {
    onSuccess: SnackbarModel;
    onError: SnackbarModel;
}

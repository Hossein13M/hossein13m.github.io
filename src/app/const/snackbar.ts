import type { SnackBar } from '../models/snackbar.model';

export const Snackbar: SnackBar = {
    onSuccess: {
        classes: ['bg-custom-yellow-500', 'text-custom-purple-500', 'font-bold'],
        message: 'Your Message Has Been Sent',
    },
    onError: {
        classes: ['bg-red-500', 'text-black', 'font-bold'],
        message: 'There Was a Problem. Please Check The Form And Try Again!',
    },
};

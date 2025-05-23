import React from 'react';
import { Search } from 'styled-icons/feather';

const icons = {
    Search: <Search />
};

const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    colors: {
        blues: {
            0: 'hsl(210, 100%, 98%)',  // Very light blue
            1: 'hsl(210, 100%, 95%)',
            2: 'hsl(210, 100%, 85%)',
            3: 'hsl(210, 100%, 75%)',
            4: 'hsl(210, 100%, 65%)',
            5: 'hsl(210, 100%, 55%)',
            6: 'hsl(210, 100%, 45%)',
            7: 'hsl(210, 100%, 35%)',
            8: 'hsl(210, 100%, 25%)',
            9: 'hsl(210, 100%, 15%)',
            10: 'hsl(210, 100%, 5%)'   // Very dark blue
        }
    }
};

const variants = {
    iconButton: {
        primary: {
            color: theme.colors.blues[8]
        },
        contrast: {
            color: theme.colors.blues[0]
        }
    },
    header: {
        primary: {
            backgroundColor: theme.colors.blues[8],
            color: theme.colors.blues[0]
        }
    }
};

export const blue = { ...theme, variants, icons };
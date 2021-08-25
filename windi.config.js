import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // DaisyUI Dark theme colors.
                "primary": "#793ef9",           /* Primary color */
                "primary-focus": "#570df8",     /* Primary color - focused */
                "primary-content": "#ffffff",   /* Foreground content color to use on primary color */

                "secondary": "#f000b8",         /* Secondary color */
                "secondary-focus": "#bd0091",   /* Secondary color - focused */
                "secondary-content": "#ffffff", /* Foreground content color to use on secondary color */

                "accent": "#37cdbe",            /* Accent color */
                "accent-focus": "#2aa79b",      /* Accent color - focused */
                "accent-content": "#ffffff",    /* Foreground content color to use on accent color */

                "neutral": "#2a2e37",           /* Neutral color */
                "neutral-focus": "#16181d",     /* Neutral color - focused */
                "neutral-content": "#ffffff",   /* Foreground content color to use on neutral color */

                "base-100": "#3d4451",          /* Base color of page, used for blank backgrounds */
                "base-200": "#2a2e37",          /* Base color, a little darker */
                "base-300": "#16181d",          /* Base color, even more darker */
                "base-content": "#ebecf0",      /* Foreground content color to use on base color */

                "info": "#66c6ff",              /* Info */
                "success": "#87d039",           /* Success */
                "warning": "#e2d562",           /* Warning */
                "error": "#ff6f6f",             /* Error */
            },
            fontFamily: {
            },
        },
    },
})

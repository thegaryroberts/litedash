import { injectGlobal } from "emotion"
import { theme } from "Themes"

(() => injectGlobal`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    html, body {
        margin: 0;
    }

    body {
        background: linear-gradient(to top, hsl(331, 30%, 37%) 0%, hsl(346, 81%, 37%) 50%, hsl(334, 15%, 21%) 100%);
        background-repeat: no-repeat;
        background-attachment: fixed;
        color: white;
        height: 95vh;
        min-width: 302px;
    }

    a[href] {
        color: ${theme.color.primaryHighlight};

        &:hover {
            color: white;
        }
    }
`)()

/*
        background: linear-gradient(to top, hsl(301, 30%, 37%) 0%, hsl(316, 81%, 37%) 50%, hsl(304, 15%, 21%) 100%);
        background: radial-gradient(
            circle,
            #3f163c 0%,
            #1c0e1b 39%,
            #fef3a5 40%,
            #fcd14f 41%,
            #801463 44%,
            #3d2d3c 55%,
            #251824 70%,
            #140b13 100%
        );
*/

import { injectGlobal } from "emotion"

(() => injectGlobal`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        height: 90%;
    }

    body {
        background: linear-gradient(to bottom, #7c437b 0%, #ad1283 50%, #3d2d3c 100%);
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
        color: white;
        height: 100%;
    }

    a[href] {
        color: hsla(330, 90%, 90%, 1)
    }
`)()

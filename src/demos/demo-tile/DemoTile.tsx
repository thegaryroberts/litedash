import React, { SFC } from "react"

import { styledWithTheme } from "Themes"

// @ts-ignore
import colorWheelCroppedImage from "../../assets/color-wheel.png"

const DemoTileWrapper = styledWithTheme("a")`
    background-color: ${(props) => props.theme.color.ultraRare};
    border: 2px solid ${(props) => props.theme.color.ultraRare};
    border-radius: 30px;
    display: block;
    height: 150px;
    width: 400px;
    margin: 80px 50px;

    text-decoration: none;

    box-shadow:
        0px 2px 1px hsla(220, 96%, 57%, 0.82),
        2px 5px 4px hsla(40, 83%, 0%, 0.4),
        2px 6px 6px hsla(40, 83%, 10%, 0.2);

    transition: transform 0.2s ease-out;

    .text {
        color: ${(props) => props.theme.color.primaryHighlight};
        font-size: 1.5em;
        transition: transform 0.2s ease-in-out;

        text-shadow:
            0px 1px 0px hsla(40, 83%, 100%, 0.6),
            0px 2px 2px hsla(220, 96%, 77%, 0.82),
            2px 5px 4px hsla(40, 83%, 0%, 1);
    }

    &:hover {
        border-width: 3px;
        cursor: pointer;
        transform: scale(1.1);

        .text {
            transform: scale(2.2) rotate(-20deg);
            text-shadow:
                0px 1px 1px hsla(220, 96%, 77%, 1),
                0px 2px 2px hsla(220, 96%, 77%, 0.82),
                2px 5px 4px hsla(40, 83%, 0%, 0.4);
        }
    }

    ${(props) => props.theme.mq.phablet} {
    }
`

const DemoTileImage = styledWithTheme("div")`
    background-image: url(${colorWheelCroppedImage});
    background-size: 400px 150px;
    border: 2px solid ${(props) => props.theme.color.primaryHighlight};
    border-radius: 30px;
    height: 100%;
    width: 100%;
    margin: 4px;
    box-shadow:
        0px 2px 1px hsla(220, 96%, 57%, 0.82),
        2px 5px 4px hsla(40, 83%, 0%, 0.4),
        2px 6px 6px hsla(40, 83%, 10%, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    transition: transform 0.2s ease-in-out;

    &:hover {
        border: 2px solid ${(props) => props.theme.color.primaryMuted};
        opacity: 1;
        transform: rotate(${(props: { slant: number }) => props.slant + -4}deg);
    }
`

export const DemoTile: SFC<{ href: string, slant: number }> = ({ children, href, slant }) => (
    <DemoTileWrapper href={href}>
        <DemoTileImage slant={slant}>
            <span className="text">{children}</span>
        </DemoTileImage>
    </DemoTileWrapper>
)

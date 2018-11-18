import styled from "react-emotion"

export const Tagline = styled("div")`
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 0.8em;
    text-align: center;

    text-shadow:
        0px 2px 4px hsla(40, 83%, 0%, 1),
        0px 3px 6px hsla(40, 83%, 10%, 1);

    position: fixed;
    width: 100%;
    bottom: 200px;

    ${(props) => props.theme.mq.phablet} {
        font-size: 1.8em;
        bottom: 200px;
    }

    ${(props) => props.theme.mq.tablet} {
        font-size: 1.6em;
        bottom: 200px;
    }
`

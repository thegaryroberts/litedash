import styled from "react-emotion"

export const Intro = styled("div")`
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 0.8em;
    text-align: center;
    margin-bottom: 250px;

    ${(props) => props.theme.mq.phablet} {
        font-size: 1.8em;
    }

    ${(props) => props.theme.mq.tablet} {
        font-size: 1.6em;
    }
`

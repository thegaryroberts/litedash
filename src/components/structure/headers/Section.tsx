import styled from "react-emotion"

export const Section = styled("h2")`
    background-image: linear-gradient(
        to right,
        hsla(301, 40%, 10%, 0),
        hsla(301, 40%, 10%, 0),
        hsla(301, 40%, 20%, 0.8),
        hsla(301, 40%, 10%, 0),
        hsla(301, 40%, 10%, 0)
    );

    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 3em;
    margin: 0 0 20px 0;
    text-align: center;
    text-decoration: underline;
`

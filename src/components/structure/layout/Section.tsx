import styled from "react-emotion"

export const Section = styled("section")`
    background-color: hsla(301, 40%, 20%, 0.97);
    border-radius: 2px;
    font-size: 0.8em;
    border: 1px solid hsla(301, 40%, 40%, 0.9);
    margin: 0 20px 20px 20px;
    padding: 10px 10px;

    @media (${(props) => props.theme.layout.tabletUp}) {
        margin: 0 40px 20px 40px;
        padding: 10px 20px;
    }

    @media (${(props) => props.theme.layout.desktopUp}) {
        margin: 0 auto 20px auto;
        padding: 10px 20px;
        max-width: 1000px;
    }
`

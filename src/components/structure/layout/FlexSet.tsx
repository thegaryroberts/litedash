import styled from "react-emotion"

export const FlexSet = styled("div")`
    font-family: ${(props) => props.theme.fontFamily.content};
    font-size: 2em;
    text-align: center;
    margin: 0 auto 20px auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1400px;
`

import styled from 'styled-components';
import React from 'react';

const OriginActionButton = styled.button `
    @media (max-width: 1024px) {
        margin-top: 30px;
    }
    height: 50px;
    font-size: 15pt;
    font-family: 'Times New Roman', Times, serif;
    width: 200px;
    margin-right: 20px;
`

export function ActionButton (props) {
    const { name, textColor, backGroundColor } = props;
    const Button = styled(OriginActionButton)`
        color: ${textColor};
        background-color: ${backGroundColor};
    `

    return (
        <Button>
            {props.name}
        </Button>
    )
}

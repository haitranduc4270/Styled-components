import styled from 'styled-components';
import React from 'react';

const LayoutCost = styled.div`
    display: flex;
    justify-content: start;
    font-size: 30pt;
    font-style: italic;
    color: $color_5;
    margin-bottom: 30px;
       
    & p {
        margin:  0px;
    }
`

export function Cost () {
    return (
        <LayoutCost>
            <p>600.000 -</p>
            <p>700.000</p>
        </LayoutCost>
    )
}

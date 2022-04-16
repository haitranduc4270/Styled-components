import styled from 'styled-components';
import React from 'react';

const PropertyLayout = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 15px;

    & button {
        border: 1px solid rgb(139, 146, 146);
        margin-right: 10px ;
        height: 30px;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;
        background-color: inherit;

        &:focus {
            border: 2px solid rgb(135, 226, 55);
            margin-right: 10px ;
            height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            margin-bottom: 10px;
            background-color: inherit;
        }
    }

    & span {
        color: rgb(139, 146, 146);
        width: 100px;
        border: none;
        padding-left: 0px;
    }
}
` 
const StateLayout = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 30px;

    & span {
        color: rgb(139, 146, 146);
        width: 100px;
        border: none;
        padding-left: 0px;
    }

    & p {
        
        width: 70px;
        height: 30px;
        text-align: center;
        border: none;
    }

` 
export function PropertyBar (props) {
    if(props.type == "state") {
        return (
            <StateLayout>
                <span> {props.name} </span>
                <p>{props.value}</p>
            </StateLayout>
        )
    }
    else return (
        
        <PropertyLayout>
            <span> {props.name} </span>
            {
                props.value.map(value => {
                    return (
                        <button> {value} </button>
                    )
                })
            }
        </PropertyLayout>
    )
}
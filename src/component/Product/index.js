import styled from 'styled-components';
import { Thumbnail } from "./Thumbnail";
import { Name } from './Name';
import { Cost } from './Cost';
import { PropertyBar } from './PropertyBar';
import { ActionButton } from './ActionButton';
import React from "react";

const LayoutProduct = styled.div `
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 180px;
    padding: 10%;

    @media (max-width: 1024px) {
        flex-direction: column;
        margin-top: 40px;
        margin-bottom: 80px;
    
    }
`
const ProducInfo = styled.div `
    margin-left: 100px;

    @media (max-width: 1024px) {
        margin-left: 0px;
        margin-top: 30px;
    }
`

const thumbnailSource = "https://static.wixstatic.com/media/c837a6_36adfb820f064400b84353c8cca75209~mv2.jpg/v1/fill/w_306,h_408,al_c,q_80,usm_0.66_1.00_0.01/c837a6_36adfb820f064400b84353c8cca75209~mv2.webp";
const ColorValues = ["Màu xanh", "Màu đỏ", "Màu vàng", "Mày đen", "Màu xanh", "Màu đỏ", "Màu vàng", "Mày đen"];
const sizeValues = ["S", "M", "XS", "M", "L", "XL", "XXL", "XXXL"];
const state = "Còn hàng"

function Product () {
    return (
        <div>
            <LayoutProduct>
                <Thumbnail src={thumbnailSource}></Thumbnail>
                <ProducInfo>
                    <Name>Lọ nước màu xanh không chắc là cái gì</Name>
                    <Cost></Cost>
                    <PropertyBar name="Màu sắc : " value={ColorValues}></PropertyBar>
                    <PropertyBar name="Kích cỡ : " value={sizeValues}></PropertyBar>
                    <PropertyBar name="Trạng Thái : " value={state} type="state"></PropertyBar>
                    <ActionButton name="Thêm vào giỏ hàng" textColor="rgb(61,90,35)" backGroundColor="white"></ActionButton>
                    <ActionButton name="Mua ngay" textColor="white" backGroundColor="rgb(61,90,35)"></ActionButton>
                </ProducInfo>
            </LayoutProduct>
        </div>
    )
}  

export default Product;
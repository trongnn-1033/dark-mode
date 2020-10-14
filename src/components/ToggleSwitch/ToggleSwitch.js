import style from "styled-components";

export default style.label`
    & span{
        display: flex;
        width: 50px;
        height: 25px;
        background-color: #ccc;
        border-radius: 999px;
        padding-left: 7px;
        box-sizing: border-box;
        cursor: pointer;
        transition: all .5s ease;
        &::before{
            content: "";
            display: block;
            width: 20px;
            height: 20px;
            background-color: #ffffff;
            border-radius: 50%;
            margin:auto 0;
            transition: all .5s ease;
        }
    }
    input{
        display:none;
    }
    input:checked + span{
        background-color: #3c51fb;
        box-shadow: 0 0 15px 0 #3c51fb;
        &:before{
            transform: translateX(17px);
            background-color: white;
        }
    }
`
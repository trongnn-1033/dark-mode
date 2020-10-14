import style from "styled-components";

export default style.section`
    width: 100%;
    height: 100vh;
    padding: 25px 0 0 60px;
    background-color: ${ props => props.theme.color.backGroundContent };
    overflow: hidden;
    & .content-header{
        display: flex;
        align-items: center;
        padding-right: 75px;
        color: ${ props => props.theme.color.text };
        &__right{
            display: flex;
            align-items: center;
            margin-left: auto;
            & label{
                margin-right: 30px;
            }
            i{
                &:first-child{
                    margin-right: 10px;
                }
            }
        }
        i{
            font-size: 1.7rem;
            cursor: pointer;
        }
        &>i{
            margin-right: 30px;
        }
        &__search{
            position: relative;
            i{
                position: absolute;
                top: 50%;
                left: 15px;
                font-size: 1.3rem;
                transform: translateY(-50%);

            }
            input{
                padding : 10px 10px 10px 45px;
                border: 0;
                border-radius: 999px;
                background-color: ${
                    props => props.length ? props.theme.color.colorBox : "initial"
                };
                color: #ffffff;
                transition: background-color .35s ease;
                &:focus{
                    background-color: ${ props => props.theme.color.colorBox };
                }
                
            }
        }

`
import styled from "styled-components";

export default styled.section`
  width: 100%;
  height: 100vh;
  padding: 25px 0 0 60px;
  background-color: ${(props) => props.theme.color.backGroundContent};
  overflow-y: auto;

  &::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }
  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 999px;
  }
  & .content-header {
    display: flex;
    align-items: center;
    padding-right: 75px;
    margin-bottom: 30px;
    color: ${(props) => props.theme.color.text};
    &__right {
      display: flex;
      align-items: center;
      margin-left: auto;
      & label {
        margin-right: 30px;
      }
      i {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
    i {
      font-size: 1.7rem;
      cursor: pointer;
    }
    & > i {
      margin-right: 30px;
    }
    & .fa-chevron-right::before {
      transform: translateX(2px);
    }
    & > i,
    &__right > i:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transition: background-color 0.35s ease;
      &:hover {
        background-color: ${(props) => props.theme.color.colorBox};
      }
    }
    &__search {
      position: relative;
      i {
        position: absolute;
        top: 50%;
        left: 15px;
        font-size: 1.3rem;
        transform: translateY(-50%);
      }
      input {
        padding: 10px 10px 10px 45px;
        border: 0;
        border-radius: 999px;
        background-color: ${(props) =>
          props.length ? props.theme.color.colorBox : "initial"};
        color: ${(props) => props.theme.color.colorInput};
        transition: background-color 0.35s ease;
        &:focus {
          background-color: ${(props) => props.theme.color.colorBox};
        }
      }
    }
  }

  & .content-center {
    display: flex;
    padding-right: 75px;

    &__popular {
      width: calc(70% - 20px);
      margin-right: 40px;
    }
  }

  @media all and (max-width: 1000px){
    & .content-center {
      flex-direction: column;
      padding-bottom: 200px;
      &__popular{
        width: 100%;
        margin-right: 0;
      }
      &__mood{
        margin-top: 20px;
      }
    }
  }

  @media all and (max-width: 750px){
    padding-left: 20px;
    & .content-header {
      padding-right: 20px;
      &__search {
        display: none;
      }
    }
    & .content-center {
      padding-right: 20px
    }
  }
`;

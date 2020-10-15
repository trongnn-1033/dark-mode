import styled from "styled-components";

export default styled.div`
  h1 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.colorTitle};
    font-size: 2.3rem;
  }
  & .content-popular {
    &__item {
      display: flex;
      align-items: center;
      padding: 5px 20px 5px 15px;
      background-color: ${(props) => props.theme.color.colorBox};
      cursor: pointer;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      img {
        width: 30px;
        height: 30px;
        margin-right: 17px;
      }
      p {
        font-size: 1.5rem;
        color: ${(props) => props.theme.color.text};
        &:first-of-type {
          margin-right: 45px;
        }
      }
    }
    &__right {
      display: flex;
      align-items: center;
      margin-left: auto;
      i {
        color: ${(props) => props.theme.color.text};
      }
      p {
        margin-right: 55px;
      }
    }
  }
`;

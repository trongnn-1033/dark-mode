import styled from "styled-components";

export default styled.div`
  h1 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.colorTitle};
    font-size: 2.3rem;
  }
  & .content-explore {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 10px;
    overflow-x: auto;
    &:hover::-webkit-scrollbar-thumb {
      visibility: visible;
    }

    &::-webkit-scrollbar {
      height: 5px;
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      visibility: hidden;
      background: #000;
      border-radius: 999px;
      transition: visibility 0.5s ease;
    }

    &__item:not(:last-child) {
      margin-right: 35px;
    }
    img {
      width: 160px;
      height: 160px;
      border-radius: 10px;
      margin-bottom: 5px;
    }
    h2,
    h3 {
      font-weight: 400;
      text-transform: capitalize;
    }
    h2 {
      color: ${(props) => props.theme.color.colorTitle};
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    h3 {
      color: ${(props) => props.theme.color.text};
      font-size: 1.2rem;
    }
  }
`;

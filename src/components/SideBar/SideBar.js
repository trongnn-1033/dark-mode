import styled from "styled-components";

export default styled.section`
  position: relative;
  width: 245px;
  height: 100vh;
  padding: 30px 20px 0;
  background-color: ${(props) => props.theme.color.backGroundSideBar};
  color: ${(props) => props.theme.color.text};
  & .sidebar-item {
    h3 {
      color: ${(props) => props.theme.color.itemSideBarTitle};
      font-size: 1.5rem;
      margin-bottom: 15px;
      font-weight: 300;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    li {
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      &.-active {
        color: ${(props) => props.theme.color.textDefault};
        background-color: ${(props) => props.theme.color.itemSideBar};
        box-shadow: ${(props) =>
          ` 0 0 20px 0 ${props.theme.color.itemSideBar} `};
      }
    }
    i,
    span {
      font-size: 1.5rem;
    }
    i {
      width: 25px;
    }
    &:not(:first-child) {
      margin-top: 50px;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 100;
    width: 2px;
    height: 100%;
    background-color: ${(props) => props.theme.color.itemSlideBarBorder};
  }
`;

import styled from "styled-components";

export default styled.div`
  h1 {
    margin-bottom: 10px;
    color: ${(props) => props.theme.color.colorTitle};
    font-size: 2.3rem;
  }

  & .content-mood {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    & > div {
      display: flex;
      width: calc(50% - 5px);
      height: 115px;
      background-color: ${(props) => props.theme.color.colorBox};
      &:nth-child(odd) {
        margin-right: 10px;
      }
      &:nth-child( n + 3 ) {
        margin-top: 10px;
      }

      h2 {
        margin: auto;
        color: ${(props) => props.theme.color.text};
        font-size: 1.7rem;
        font-weight: 400;
        text-transform: capitalize;
      }
    }
  }
`;

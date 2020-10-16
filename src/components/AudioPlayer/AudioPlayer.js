import styled from "styled-components";

export default styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: ${(props) => props.theme.color.audioBackGround};
  color: ${(props) => props.theme.color.text};

  audio {
    display: none;
  }

  img {
    width: 45px;
    height: 40px;
  }

  & .audio-player {
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    width: 210px;

    i {
      cursor: pointer;
      font-size: 1.5rem;

      &:nth-child(2) {
        color: ${(props) => props.theme.color.colorPlayIcon};
      }
    }
  }

  & .audio-content {
    display: flex;
    align-items: center;
    margin-right: 80px;

    &__volume {
      position: relative;
      font-size: 2rem;
      padding: 0 35px;

      i{
        width:15px;
      }
    }

    &__slider {
      position: absolute;
      bottom: 300%;
      left: -15%;
      transform: rotate(-90deg);
      input[type="range"] {
        & {
          -webkit-appearance: none;
          width: 100%;
          height: 25px;
          background: red;
          outline: none;
          opacity: 0.7;
          -webkit-transition: 0.2s;
          transition: opacity 0.2s;
        }

        &:hover {
          opacity: 1;
        }

        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 25px;
          height: 25px;
          background: blue;
          cursor: pointer;
        }
        &::-ms-thumb {
          background: yellow;
        }

          &::-moz-range-thumb {
          width: 25px;
          height: 25px;
          background: yellow;
          cursor: pointer;
        }
      }
    }

    &__img {
      display: flex;
      align-items: center;

      img {
        margin-right: 15px;
      }
    }

    &__title {
      h2 {
        color: ${(props) => props.theme.color.colorTitle};
        font: 200 2rem ${(props) => props.theme.font.titleFont};
      }
      h3 {
        font: 200 1.3rem ${(props) => props.theme.font.titleFont};
      }
    }
  }

  & .audio-time {
    display: flex;
    align-items: center;
    flex: 1;
    padding-right: 75px;

    &__slider {
      flex: 1;
      padding: 0 15px;
      cursor: pointer;
    }
  }

  @media all and (max-width: 750px) {
    & .audio-player {
      width: 186px;
    }

    & .audio-content {
      margin-right: 30px;
      &__volume {
        padding: 0 15px;
      }
    }

    & .audio-time {
      padding-right: 20px;
    }
  }
`;

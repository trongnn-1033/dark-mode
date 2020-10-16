const  reactInputSlider = (color) => {
  return {
    track: {
      backgroundColor: color.colorBox,
      width: '100% ',
      height: "5px",
    },
    active: {
      backgroundColor: color.itemSideBar,
      boxShadow: ` 0 0 5px 0 ${color.itemSideBar} `,
      height: "5px",
    },
    thumb: {
      width: "8px",
      height: "8px",
      backgroundColor: color.itemSideBar,
      borderRadius: '50%',
    },
  }

}

const  reactVolumeSlider = (color) => {
  return {
    track: {
      backgroundColor: color.colorBox,
      width: '100px',
      height: "10px",
    },
    active: {
      backgroundColor: color.itemSideBar,
      boxShadow: ` 0 0 5px 0 ${color.itemSideBar} `,
      height: "5px",
    },
    thumb: {
      width: "8px",
      height: "8px",
      backgroundColor: color.itemSideBar,
      borderRadius: '50%',
    },
  }

}

export {
  reactInputSlider,
  reactVolumeSlider
}
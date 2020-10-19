const  reactVolumeSlider = (color) => {
  return {
    railStyle:{
      backgroundColor: color.colorVolume,
      width: 10,
    },
    trackStyle:{
      backgroundColor: color.itemSideBar,
      boxShadow: ` 0 0 5px 0 ${color.itemSideBar} `,
      width: 10
    },
    handleStyle:{
      width: 0,
      height: 0,
      border: 0,
    }
  }

}

const  reactInputSlider = (color) => {
  return {
    railStyle:{
      backgroundColor: color.colorBox,
      height:5
    },
    trackStyle:{
      backgroundColor: color.itemSideBar,
      boxShadow: ` 0 0 5px 0 ${color.itemSideBar} `,
      height: 5
    },
    handleStyle:{
      marginTop: -2,
      width: 8,
      height: 8,
      border: 0,
      backgroundColor: color.itemSideBar,
    }
  }

}

export {
  reactInputSlider,
  reactVolumeSlider
}
function Tile({tileState}){

  function renderSwitch(param){

    var style;

    switch(param) {
      case 'g':
        style={
          width: 35,
          height: 35,
          backgroundColor: 'green',
          border: "solid 1px black",
          borderRadius:'50%'
        }
        break;
      case 'r':
        style={
          width: 35,
          height: 35,
          backgroundColor: 'red',
          border: "solid 1px black",
          borderRadius:'50%'
        }
        break;
      case 0:
        style={
          width: 35,
          height: 35,
          backgroundColor: '#DFD7CB',
          border: "solid 1px black",
          borderRadius:'50%'
        }
        break;
      default:
        style={
          width: 35,
          height: 35,
          backgroundColor: '#cc9900',
          margin: "10px 0 0px" 
        }
    }

    return style;

  }

  return(
    <div
      style={renderSwitch(tileState)}
    />
  );

}

export default Tile;
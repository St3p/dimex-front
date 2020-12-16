function Funh7Hole(props){
  const { h7Hole } = props;
  const ish7HoleOn = props.h7Hole;
  if (ish7HoleOn){
    return(
      <>
      <tr>
        <td></td>
        <td>H7</td>
        <td></td>
        <td>{h7Hole}</td>
      </tr>
      </>
    );
  }else {
    return null};
}

function Funh8Hole(props){
  const { h8Hole } = props;
  const ish8Hole = props.h8Hole;
  if (ish8Hole){
    return(
      <>
      <tr>
        <td></td>
        <td>H8</td>
        <td></td>
        <td>{h8Hole}</td>
      </tr>
      </>
    );
  }else {
    return null};
}

function Funh9Hole(props){
  const { h9Hole } = props;
  const ish9Hole = props.h9Hole;
  if (ish9Hole){
    return(
      <>
      <tr>
        <td></td>
        <td>H9</td>
        <td></td>
        <td>{h9Hole}</td>
      </tr>
      </>
    );
  }else {
    return null};
}

function Funh11Hole(props){
  const { h11Hole } = props;
  const ish11Hole = props.h11Hole;

    if (ish11Hole){
      return(
        <>
        <tr>
          <td></td>
          <td>H11</td>
          <td></td>
          <td>{h11Hole}</td>
        </tr>
        </>
      );
    }else {
    return null};
}

function Funh6Axis(props){
  const { h6Axis } = props;
  const ish6Axis =props.h6Axis;
  if (ish6Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h6</td>
        <td></td>
        <td>{h6Axis}</td>
      </tr>
      </>
    );
  }else {
    return null};
}

function Funh11Axis(props){
  const { h11Axis } = props;
  const ish11Axis =props.h11Axis;
  if (ish11Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h11</td>
        <td></td>
        <td>{h11Axis}</td>
      </tr>
      </>
    );
  }else {
    return null};
}

function Funh9Axis(props){
  const { h9Axis } = props;
  const ish9Axis = props.h9Axis;
  if (ish9Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h9</td>
        <td></td>
        <td>{h9Axis}</td>
      </tr>
      </>
    );
  }else {
    return null};
}

function Funh7Axis(props){
  const { h7Axis } = props;
  const ish7Axis = props.h7Axis;
  if (ish7Axis){
    return(
      <>
      <tr>
        <td></td>
        <td>h7</td>
        <td></td>
        <td>{h7Axis}</td>
      </tr>
      </>
    );
  }else {
    return null};
}



function StepFiveSection(props) {
  const { h7Hole, h8Hole, h9Hole, h11Hole, h6Axis, h7Axis, h9Axis, h11Axis} = props;
  return (
    <>
    <Funh7Hole
      h7Hole={h7Hole}/>
    <Funh8Hole
      h8Hole={h8Hole}/>
    <Funh9Hole
      h9Hole={h9Hole}/>
    <Funh11Hole
      h11Hole={h11Hole}/>
    <Funh6Axis
      h6Axis={h6Axis}/>
    <Funh7Axis
      h7Axis={h7Axis}/>
    <Funh9Axis
      h9Axis={h9Axis}/>
    <Funh11Axis
      h11Axis={h11Axis}/>

    </>
  );
}

export default StepFiveSection;


function StepFiveSection(props) {
  const { h7Hole, h8Hole, h9Hole, h11Hole, h6Axis, h7Axis, h9Axis, h11Axis} = props;
  const ish7HoleOn = props.h7Hole;
  const ish8Hole = props.h8Hole;
  const ish9Hole = props.h9Hole;
  const ish11Hole = props.h11Hole;
  const ish6Axis =props.h6Axis;
  const ish7Axis = props.h7Axis;
  const ish9Axis = props.h9Axis;
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
  }
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
  }
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
  }
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
  }

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
  }
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
  }
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
  }
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
  }
}
export default StepFiveSection;

function StepFourSection(props){
  const { straightness, flatness, perpendicularity,
  circularity, cylindricity, profileLine, parallelism,
  angularity, profileOfSurface, symmetry, concentricity } = props;
  const isPerpendicularityOn = props.perpendicularity;
  const isFlatnessOn = props.flatness;
  const isStraightnessOn = props.straightness;
  const isCircularityOn = props.circularity;
  const isCylindricityOn = props.cylindricity;
  const isProfileLineOn = props.profileLine;
  const isParallelismOn = props.parallelism;
  const isAngularityOn = props.angularity;
  const isProfileOfSurfaceOn = props.profileOfSurface;
  const isSymetryOn = props.symmetry;
  const isConcentricityOn= props.concentricity;
  if (isConcentricityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>concentricity</td>
        <td></td>
        <td>{concentricity}</td>
      </tr>
      </>
    );
  }
  if (isPerpendicularityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Perpendicularity</td>
        <td></td>
        <td>{perpendicularity}</td>
      </tr>
      </>
    );
  }
  if (isFlatnessOn){
    return(
      <>
      <tr>
        <td></td>
        <td>flatness</td>
        <td></td>
        <td>{flatness}</td>
      </tr>
      </>
    );
  }
  if (isStraightnessOn){
    return(
      <>
      <tr>
        <td></td>
        <td>straightness</td>
        <td></td>
        <td>{straightness}</td>
      </tr>
      </>
    );
  }
  if (isCircularityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Circularity</td>
        <td></td>
        <td>{circularity}</td>
      </tr>
      </>
    );
  }
  if (isCylindricityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>cylindricity</td>
        <td></td>
        <td>{cylindricity}</td>
      </tr>
      </>
    );
  }
  if (isProfileLineOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Profile Line</td>
        <td></td>
        <td>{profileLine}</td>
      </tr>
      </>
    );
  }
  if (isAngularityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>angularity</td>
        <td></td>
        <td>{angularity}</td>
      </tr>
      </>
    );
  }
  if (isProfileOfSurfaceOn){
    return(
      <>
      <tr>
        <td></td>
        <td>profileOfSurface</td>
        <td></td>
        <td>{profileOfSurface}</td>
      </tr>
      </>
    );
  }
  if (isSymetryOn){
    return(
      <>
      <tr>
        <td></td>
        <td>symmetry</td>
        <td></td>
        <td>{symmetry}</td>
      </tr>
      </>
    );
  }else return null

}
export default StepFourSection;

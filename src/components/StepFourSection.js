function StraightnessFun(props) {
  const { straightness } = props;
  const isStraightnessOn = props.straightness;
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
  } else {
    return null};
}

function FlatnessFun (props){
  const { flatness } =  props;
  const isFlatnessOn = props.flatness;
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
  } else return null;
}

function PerpendicularityFun(props){
  const { perpendicularity } = props;
  const isPerpendicularityOn = props.perpendicularity;
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
  }else return null;
}

function ParallelismFun(props){
  const { parallelism } = props;
  const isParallelismOn = props.parallelism;
  if (isParallelismOn){
    return(
      <>
      <tr>
        <td></td>
        <td>parallelism</td>
        <td></td>
        <td>{parallelism}</td>
      </tr>
      </>
    );
  }else return null;
}

function CircularityFun(props){
  const { circularity } = props;
  const isCircularityOn = props.circularity;
  if (isCircularityOn){
    return(
      <>
      <tr>
        <td></td>
        <td>circularity</td>
        <td></td>
        <td>{circularity}</td>
      </tr>
      </>
    );
  }else return null;
}

function  CylindricityFun(props){
  const { cylindricity } = props;
  const isCylindricityOn = props.cylindricity;
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
  }else return null;
}

function  ProfileLineFun(props){
  const { profileLine } = props;
  const isProfileLineOn = props.profileLine;
  if (isProfileLineOn){
    return(
      <>
      <tr>
        <td></td>
        <td>profile Line</td>
        <td></td>
        <td>{profileLine}</td>
      </tr>
      </>
    );
  }else return null;
}

function  AngularityFun(props){
  const { angularity } = props;
  const isAngularityOn = props.angularity;
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
  }else return null;
}

function  ProfileOfSurfaceFun(props){
  const { profileOfSurface } = props;
  const isProfileOfSurfaceOn = props.profileOfSurface;
  if (isProfileOfSurfaceOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Profile Of Surface</td>
        <td></td>
        <td>{profileOfSurface}</td>
      </tr>
      </>
    );
  }else return null;
}


function  SymmetryFun(props){
  const { symmetry } = props;
  const isSymetryOn = props.symmetry;
  if (isSymetryOn){
    return(
      <>
      <tr>
        <td></td>
        <td>Symmetry</td>
        <td></td>
        <td>{symmetry}</td>
      </tr>
      </>
    );
  }else return null;
}

function  ConcentricityFun(props){
  const { concentricity } = props;
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
  }else return null;
}

function StepFourSection(props){
  const { straightness, flatness, perpendicularity,
  circularity, cylindricity, profileLine, parallelism,
  angularity, profileOfSurface, symmetry, concentricity } = props;
    return(
    <>
  <StraightnessFun
    straightness={straightness}/>
  <FlatnessFun
    flatness={flatness}/>
  <PerpendicularityFun
    perpendicularity={perpendicularity}/>
  <ParallelismFun
    parallelism={parallelism}/>
  <CircularityFun
    circularity={circularity}/>
  <CylindricityFun
    cylindricity={cylindricity}/>
  <ProfileLineFun
    profileLine={profileLine}/>
  <ProfileOfSurfaceFun
    profileOfSurface={profileOfSurface}/>
  <SymmetryFun
    symmetry={symmetry}/>
  <ConcentricityFun
    concentricity={concentricity}/>



    </>
);

}
export default StepFourSection;

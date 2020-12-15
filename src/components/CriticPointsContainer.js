import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { BrowserRouter, Link} from "react-router-dom";
import AuthNavbar from "./AuthNavBar";
import CriticPointsComponent from "./CriticPointsComponent";
import { step4WizardSetQuote } from "../Store/QuoteStore";


class CriticPointsContainer extends Component {
  constructor(props) {
      super(props);
      this.state = {
        straightness:"",
        flatness:"",
        circularity:"",
        cylindricity:"",
        profileLine:"",
        profileOfSurface:"",
        parallelism:"",
        perpendicularity:"",
        angularity:"",
        position:"",
        concentricity:"",
        simetria:"",
      }
      this.onProfileLineChange = this.onProfileLineChange.bind(this);
      this.oncylindricityChange = this.oncylindricityChange.bind(this);
      this.onCircularityChange = this.onCircularityChange.bind(this);
      this.onStraightnessChange = this.onStraightnessChange.bind(this);
      this.onFlatnessChange = this.onFlatnessChange.bind(this);
      this.onSubmitClick = this.onSubmitClick.bind(this);
      this.onProfileOfSurfaceChange = this.onProfileOfSurfaceChange.bind(this);
      this.onParallelismChange = this.onParallelismChange.bind(this);
      this.onPerpendicularityChange = this.onPerpendicularityChange.bind(this);
      this.onAngularityChange = this.onAngularityChange.bind(this);
      this.onPositionChange = this.onPositionChange.bind(this);
      this.onConcentricityChange = this.onConcentricityChange.bind(this);
      this.onSimetriaChange = this.onSimetriaChange.bind(this);

  }
  onStraightnessChange(e) {
      this.setState({
          straightness: 600,
      });
  };
  onFlatnessChange(e) {
      this.setState({
          flatness: 500,
      });
  };

  onCircularityChange(e) {
      this.setState({
          circularity: 400,
      });
  };

  oncylindricityChange(e) {
      this.setState({
          cylindricity: 300,
      });
  };

  onProfileLineChange(e) {
      this.setState({
          profileLine: 600,
      });
  };

  onProfileOfSurfaceChange(e) {
      this.setState({
          profileOfSurface: 600,
      });
  };

  onParallelismChange(e) {
      this.setState({
          parallelism: 600,
      });
  };

  onPerpendicularityChange(e) {
      this.setState({
          perpendicularity: 600,
      });
  };

  onAngularityChange(e) {
      this.setState({
          angularity: 100,
      });
  };

  onPositionChange(e) {
      this.setState({
          position: 200,
      });
  };

    onConcentricityChange(e) {
        this.setState({
            concentricity: 200,
        });
    };

    onSimetriaChange(e) {
        this.setState({
            simetria: 150,
        });
    };
  onSubmitClick(e) {
    const { flatness, straightness, circularity, cylindricity,
            profileLine, profileOfSurface, parallelism, perpendicularity,
            angularity, position, concentricity, simetria} = this.state;
    const postData = {
        straightness: straightness,
        flatness: flatness,
        circularity:circularity,
        cylindricity:cylindricity,
        profileLine:profileLine,
        profileOfSurface:profileOfSurface,
        parallelism:parallelism,
        perpendicularity:perpendicularity,
        angularity:angularity,
        position:position,
        concentricity:concentricity,
        simetria:simetria,
    };
    console.log(postData);
   step4WizardSetQuote(flatness, straightness, circularity,
   cylindricity, profileLine, profileOfSurface, parallelism,
   perpendicularity, angularity, position, concentricity,
   simetria);
   this.props.history.push("/presicionLevel");
}

  render(){
    const { straightness, flatness, circularity, cylindricity,
            profileLine, profileOfSurface, parallelism, perpendicularity,
            angularity, position, concentricity, simetria
           } = this.state;
      return (
          <CriticPointsComponent
              onSubmitClick={this.onSubmitClick}
              onFlatnessChange={this.onFlatnessChange}
              onStraightnessChange={this.onStraightnessChange}
              onCircularityChange={this.onCircularityChange}
              oncylindricityChange={this.oncylindricityChange}
              onProfileLineChange={this.onProfileLineChange}
              onProfileOfSurfaceChange={this.onProfileOfSurfaceChange}
              onParallelismChange={this.onParallelismChange}
              onPerpendicularityChange={this.onPerpendicularityChange}
              onAngularityChange={this.onAngularityChange}
              onPositionChange={this.onPositionChange}
              onConcentricityChange={this.onConcentricityChange}
              onSimetriaChange={this.onSimetriaChange}
              simetria={simetria}
              concentricity={concentricity}
              position={position}
              angularity={angularity}
              perpendicularity={perpendicularity}
              parallelism={parallelism}
              profileOfSurface={profileOfSurface}
              profileLine={profileLine}
              cylindricity={cylindricity}
              straightness={straightness}
              flatness={flatness}
              circularity={circularity}
              />
      );

  }
}
export default CriticPointsContainer;

const QUOTE_STEP1_KEY_ID = "quoteStepOneID";
const QUOTE_STEP0_KEY_COMPONENT = "quoteStepZeroComponent"
const QUOTE_STEP1_KEY_COMPANY_PRICE = "quoteStepOneCompanyPrice"
const QUOTE_STEP1_KEY_COMPANY = "quoteStepOneCompany"

const QUOTE_STEP2_KEY_MATERIAL = "quoteStepTwoMaterial"
const QUOTE_STEP3_KEY_MACHINE = "quoteStepThreeMachine"
const QUOTE_STEP4_KEY_MACHINE = "quoteStepFourCritic"
const Quote_STEP5_KEY_LEVEL = "quoteStepFiveLevel"

const QUOTE_STEP0_KEY_NAME_COMPONENT = "quoteStepZeroNameComponent"
const QUOTE_STEP0_KEY_QUANTITY = "quoteStepZeroQuantity"


const QUOTE_STEP2_KEY_COST = "quoteStepTwoCost"
const QUOTE_STEP2_KEY_DELIVERY = "quoteStepTwoDelivery"

const QUOTE_STEP3_KEY_MACHINE_NAME = "quoteStepThreeMachineName"
const QUOTE_STEP3_KEY_HOURS = "quoteStepThreeHours"

const QUOTE_STEP4_KEY_FLATNESS = "quoteStepFourFlatness"
const QUOTE_STEP4_KEY_STRAIGHTNESS = "quoteStepFourStraightness"
const QUOTE_STEP4_KEY_CIRCULARITY = "quoteStepFourCircularity"
const QUOTE_STEP4_KEY_CYLINDRICITY = "quoteStepFourCylindricity"
const QUOTE_STEP4_KEY_PROFILELINE = "quoteStepFourProfileLine"
const QUOTE_STEP4_KEY_PARALLELISM = "quoteStepFourParallelism"
const QUOTE_STEP4_KEY_PERPENTICULARITY = "quoteStepFourPerpendicularity"
const QUOTE_STEP4_KEY_ANGULARITY = "quoteStepFourAngularity"
const QUOTE_STEP4_KEY_PROFILEOFASURFACE = "quoteStepFourProfileOfSurface"
const QUOTE_STEP4_KEY_SIMETRIA = "quoteStepFourSimetria"
const QUOTE_STEP4_KEY_CONCENTRICITY = "quoteStepFourConcentricity"

const QUOTE_STEP5_KEY_H7HOLE = "quoteStepFiveH7Hole"
const QUOTE_STEP5_KEY_H8HOLE = "quoteStepFiveH8Hole"
const QUOTE_STEP5_KEY_H9HOLE = "quoteStepFiveH9Hole"
const QUOTE_STEP5_KEY_H11HOLE = "quoteStepFiveH11Hole"
const QUOTE_STEP5_KEY_H6AXIS = "quoteStepFiveH6Axis"
const QUOTE_STEP5_KEY_H7AXIS = "quoteStepFiveH7Axis"
const QUOTE_STEP5_KEY_H9AXIS = "quoteStepFiveH9Axis"
const QUOTE_STEP5_KEY_H11AXIS = "quoteStepFiveH11Axis"

export function step0WizardSetQuote (nameComponent, quantity){
  localStorage.setItem(QUOTE_STEP0_KEY_NAME_COMPONENT , nameComponent);
  localStorage.setItem(QUOTE_STEP0_KEY_QUANTITY , quantity);
}

export function step1WizardSetQuote (id, company, price){
  localStorage.setItem(QUOTE_STEP1_KEY_ID, id);
  localStorage.setItem(QUOTE_STEP1_KEY_COMPANY, company);
  localStorage.setItem(QUOTE_STEP1_KEY_COMPANY_PRICE, price);

}

export function step2WizardSetQuote (material, cost, delivery){
  localStorage.setItem(QUOTE_STEP2_KEY_MATERIAL, material);
  localStorage.setItem(QUOTE_STEP2_KEY_COST, cost);
  localStorage.setItem(QUOTE_STEP2_KEY_DELIVERY, delivery);

}

export function step3WizardSetQuote ( hoursObj){
  localStorage.setItem(QUOTE_STEP3_KEY_HOURS, JSON.stringify(hoursObj));

}

export function step4WizardSetQuote ( flatness, straightness, circularity, cylindricity, profileLine,
  parallelism, perpendicularity, angularity, profileOfSurface, simetria, concentricity ){
  localStorage.setItem(QUOTE_STEP4_KEY_FLATNESS, flatness);
  localStorage.setItem(QUOTE_STEP4_KEY_STRAIGHTNESS, straightness);
  localStorage.setItem(QUOTE_STEP4_KEY_CIRCULARITY, circularity);
  localStorage.setItem(QUOTE_STEP4_KEY_CYLINDRICITY, cylindricity);
  localStorage.setItem(QUOTE_STEP4_KEY_PROFILELINE, profileLine);
  localStorage.setItem(QUOTE_STEP4_KEY_PARALLELISM, parallelism);
  localStorage.setItem(QUOTE_STEP4_KEY_PERPENTICULARITY, perpendicularity);
  localStorage.setItem(QUOTE_STEP4_KEY_ANGULARITY, angularity);
  localStorage.setItem(QUOTE_STEP4_KEY_PROFILEOFASURFACE, profileOfSurface);
  localStorage.setItem(QUOTE_STEP4_KEY_SIMETRIA, simetria);
  localStorage.setItem(QUOTE_STEP4_KEY_CONCENTRICITY, concentricity);
}

export function step5WizardSetQuote ( h7Hole, h8Hole, h9Hole, h11Hole,
        h6Axis, h7Axis, h9Axis, h11Axis){
  localStorage.setItem(QUOTE_STEP5_KEY_H7HOLE, h7Hole);
  localStorage.setItem(QUOTE_STEP5_KEY_H8HOLE, h8Hole);
  localStorage.setItem(QUOTE_STEP5_KEY_H9HOLE, h9Hole);
  localStorage.setItem(QUOTE_STEP5_KEY_H11HOLE, h11Hole);
  localStorage.setItem(QUOTE_STEP5_KEY_H6AXIS, h6Axis);
  localStorage.setItem(QUOTE_STEP5_KEY_H7AXIS, h7Axis);
  localStorage.setItem(QUOTE_STEP5_KEY_H9AXIS, h9Axis);
  localStorage.setItem(QUOTE_STEP5_KEY_H11AXIS, h11Axis);


}

export function  step0WizardGetQuotEQuantity() {
  const quantity= localStorage.getItem(QUOTE_STEP0_KEY_QUANTITY);
  return quantity;
}

export function  step0WizardGetQuoteNameComponent() {
  const nameComponent= localStorage.getItem(QUOTE_STEP0_KEY_NAME_COMPONENT);
  return nameComponent;
}


export function  step1WizardGetQuoteID() {
  const id= localStorage.getItem(QUOTE_STEP1_KEY_ID);
  return id;
}
export function  step1WizardGetQuoteCompany() {
  const company= localStorage.getItem(QUOTE_STEP1_KEY_COMPANY);
  return company;
}

export function  step1WizardGetQuotePrice() {
  const price= localStorage.getItem(QUOTE_STEP1_KEY_COMPANY_PRICE);
  return price;
}
export function  step2WizardGetQuoteMaterial() {
  const material= localStorage.getItem(QUOTE_STEP2_KEY_MATERIAL);
  return material;
}

export function  step2WizardGetQuoteCost() {
  const cost= localStorage.getItem(QUOTE_STEP2_KEY_COST);
  return cost;
}

export function  step2WizardGetQuoteDelivery() {
  const delivery= localStorage.getItem(QUOTE_STEP2_KEY_DELIVERY);
  return delivery;
}

export function  step3WizardGetQuoteHours() {
  const hoursObjstring= localStorage.getItem(QUOTE_STEP3_KEY_HOURS);
  const hoursObj = JSON.parse(hoursObjstring);
  if (hoursObj == undefined)
  {
    return {};
  }else {
    return hoursObj;
  }
}

export function  step4WizardGetQuoteFlatness() {
  const flatness= localStorage.getItem(QUOTE_STEP4_KEY_FLATNESS);
  return flatness;
}

export function  step4WizardGetQuoteStraigtness() {
  const straightness= localStorage.getItem(QUOTE_STEP4_KEY_STRAIGHTNESS);
  return straightness;
}

export function  step4WizardGetQuoteCircularity() {
  const circularity= localStorage.getItem(QUOTE_STEP4_KEY_CIRCULARITY);
  return circularity;
}

export function  step4WizardGetQuoteCylindricity() {
  const cylindricity= localStorage.getItem(QUOTE_STEP4_KEY_CYLINDRICITY);
  return cylindricity;
}

export function  step4WizardGetQuoteProfileLine() {
  const profileLine= localStorage.getItem(QUOTE_STEP4_KEY_PROFILELINE);
  return profileLine;
}

export function  step4WizardGetQuoteParallelism() {
  const parallelism= localStorage.getItem(QUOTE_STEP4_KEY_PARALLELISM);
  return parallelism;
}


export function  step4WizardGetQuotePerpendicularity() {
  const perpendicularity= localStorage.getItem(QUOTE_STEP4_KEY_PERPENTICULARITY);
  return perpendicularity;
}

export function  step4WizardGetQuoteAngularity() {
  const angularity= localStorage.getItem(QUOTE_STEP4_KEY_ANGULARITY);
  return angularity;
}

export function  step4WizardGetQuoteProfileofaSurface() {
  const profileOfSurface= localStorage.getItem(QUOTE_STEP4_KEY_PROFILEOFASURFACE);
  return profileOfSurface;
}

export function  step4WizardGetQuoteSimetria() {
  const simetria= localStorage.getItem(QUOTE_STEP4_KEY_SIMETRIA);
  return simetria;
}

export function  step4WizardGetQuoteConcentricity() {
  const concentricity= localStorage.getItem(QUOTE_STEP4_KEY_CONCENTRICITY);
  return concentricity;
}

export function  step5WizardGetQuoteH7Hole() {
  const h7Hole= localStorage.getItem(QUOTE_STEP5_KEY_H7HOLE);
  return h7Hole;
}

export function  step5WizardGetQuoteH8Hole() {
  const h8Hole= localStorage.getItem(QUOTE_STEP5_KEY_H8HOLE);
  return h8Hole;
}

export function  step5WizardGetQuoteH9Hole() {
  const h9Hole= localStorage.getItem(QUOTE_STEP5_KEY_H9HOLE);
  return h9Hole;
}

export function  step5WizardGetQuoteH11Hole() {
  const h11Hole= localStorage.getItem(QUOTE_STEP5_KEY_H11HOLE);
  return h11Hole;
}

export function  step5WizardGetQuoteh6Axis() {
  const h6Axis= localStorage.getItem(QUOTE_STEP5_KEY_H6AXIS);
  return h6Axis;
}

export function  step5WizardGetQuoteh7Axis() {
  const h7Axis= localStorage.getItem(QUOTE_STEP5_KEY_H7AXIS);
  return h7Axis;
}

export function  step5WizardGetQuoteh9Axis() {
  const h9Axis= localStorage.getItem(QUOTE_STEP5_KEY_H9AXIS);
  return h9Axis;
}

export function  step5WizardGetQuoteh11Axis() {
  const h11Axis= localStorage.getItem(QUOTE_STEP5_KEY_H11AXIS);
  return h11Axis;
}

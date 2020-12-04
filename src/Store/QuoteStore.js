const QUOTE_STEP1_KEY_ID = "quoteStepOneID";
const QUOTE_STEP1_KEY_COMPANY = "quoteStepOneCompany"
const QUOTE_STEP2_KEY_MATERIAL = "quoteStepTwoMaterial"
const QUOTE_STEP3_KEY_MACHINE = "quoteStepThreeMaterial"
const QUOTE_STEP4_KEY_MACHINE = "quoteStepFourCritic"
const Quote_STEP5_KEY_LEVEL = "quoteStepFiveLevel"

const QUOTE_STEP2_KEY_COST = "quoteStepTwoCost"
const QUOTE_STEP2_KEY_DELIVERY = "quoteStepTwoDelivery"

const QUOTE_STEP3_KEY_MACHINE_NAME = "quoteStepThreeMachineName"
const QUOTE_STEP3_KEY_CAPACITIES = "quoteStepThreeCapacities"
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
const QUOTE_STEP4_KEY_SYMMETRY = "quoteStepFourSymmetry"
const QUOTE_STEP4_KEY_CONCENTRICITY = "quoteStepFourConcentricity"

const QUOTE_STEP5_KEY_H7HOLE = "quoteStepFiveH7Hole"
const QUOTE_STEP5_KEY_H8HOLE = "quoteStepFiveH8Hole"
const QUOTE_STEP5_KEY_H9HOLE = "quoteStepFiveH9Hole"
const QUOTE_STEP5_KEY_H11HOLE = "quoteStepFiveH11Hole"
const QUOTE_STEP5_KEY_H6AXIS = "quoteStepFiveH6Axis"
const QUOTE_STEP5_KEY_H7AXIS = "quoteStepFiveH7Axis"
const QUOTE_STEP5_KEY_H9AXIS = "quoteStepFiveH9Axis"
const QUOTE_STEP5_KEY_H11AXIS = "quoteStepFiveH11Axis"


export function step1WizardSetQuote (id, company){
  localStorage.setItem(QUOTE_STEP1_KEY_ID, id);
  localStorage.setItem(QUOTE_STEP1_KEY_COMPANY, company);
}

export function step2WizardSetQuote (material, cost, delivery){
  localStorage.setItem(QUOTE_STEP2_KEY_MATERIAL, material);
  localStorage.setItem(QUOTE_STEP2_KEY_COST, cost);
  localStorage.setItem(QUOTE_STEP2_KEY_DELIVERY, delivery);

}

export function step3WizardSetQuote ( machine, capacities, hours){
  localStorage.setItem(QUOTE_STEP3_KEY_MACHINE, machine);
  localStorage.setItem(QUOTE_STEP3_KEY_CAPACITIES, capacities);
  localStorage.setItem(QUOTE_STEP3_KEY_HOURS, hours);

}

export function step4WizardSetQuote ( flatness, straightness, circularity, cylindricity, profileLine,
  parallelism, perpendicularity, angularity, profileOfSurface, symmetry, concentricity ){
  localStorage.setItem(QUOTE_STEP4_KEY_FLATNESS, flatness);
  localStorage.setItem(QUOTE_STEP4_KEY_STRAIGHTNESS, straightness);
  localStorage.setItem(QUOTE_STEP4_KEY_CIRCULARITY, circularity);
  localStorage.setItem(QUOTE_STEP4_KEY_CYLINDRICITY, cylindricity);
  localStorage.setItem(QUOTE_STEP4_KEY_PROFILELINE, profileLine);
  localStorage.setItem(QUOTE_STEP4_KEY_PARALLELISM, parallelism);
  localStorage.setItem(QUOTE_STEP4_KEY_PERPENTICULARITY, perpendicularity);
  localStorage.setItem(QUOTE_STEP4_KEY_ANGULARITY, angularity);
  localStorage.setItem(QUOTE_STEP4_KEY_PROFILEOFASURFACE, profileOfSurface);
  localStorage.setItem(QUOTE_STEP4_KEY_SYMMETRY, symmetry);
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

export function  step1WizardGetQuoteID() {
  const id= localStorage.getItem(QUOTE_STEP1_KEY_ID);
  return id;
}
export function  step1WizardGetQuoteCompany() {
  const company= localStorage.getItem(QUOTE_STEP1_KEY_COMPANY);
  return company;
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

export function  step3WizardGetQuoteMachineName() {
  const machine= localStorage.getItem(QUOTE_STEP3_KEY_MACHINE_NAME);
  return machine;
}

export function  step3WizardGetQuoteCapacities() {
  const capacities= localStorage.getItem(QUOTE_STEP3_KEY_CAPACITIES);
  return capacities;
}

export function  step3WizardGetQuoteHours() {
  const hours= localStorage.getItem(QUOTE_STEP3_KEY_HOURS);
  return hours;
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

export function  step4WizardGetQuoteSymmetry() {
  const symmetry= localStorage.getItem(QUOTE_STEP4_KEY_SYMMETRY);
  return symmetry;
}

export function  step4WizardGetQuoteConcentricity() {
  const concentricity= localStorage.getItem(QUOTE_STEP4_KEY_CONCENTRICITY);
  return concentricity;
}

export function  step4WizardGetQuoteH7Hole() {
  const h7Hole= localStorage.getItem(QUOTE_STEP5_KEY_H7HOLE);
  return h7Hole;
}

export function  step4WizardGetQuoteH8Hole() {
  const h8Hole= localStorage.getItem(QUOTE_STEP5_KEY_H8HOLE);
  return h8Hole;
}

export function  step4WizardGetQuoteH9Hole() {
  const h9Hole= localStorage.getItem(QUOTE_STEP5_KEY_H9HOLE);
  return h9Hole;
}

export function  step4WizardGetQuoteH11Hole() {
  const h11Hole= localStorage.getItem(QUOTE_STEP5_KEY_H11HOLE);
  return h11Hole;
}

export function  step4WizardGetQuoteh6Axis() {
  const h6Axis= localStorage.getItem(QUOTE_STEP5_KEY_H6AXIS);
  return h6Axis;
}

export function  step4WizardGetQuoteh7Axis() {
  const h7Axis= localStorage.getItem(QUOTE_STEP5_KEY_H7AXIS);
  return h7Axis;
}

export function  step4WizardGetQuoteh9Axis() {
  const h9Axis= localStorage.getItem(QUOTE_STEP5_KEY_H9AXIS);
  return h9Axis;
}

export function  step4WizardGetQuoteh11Axis() {
  const h11Axis= localStorage.getItem(QUOTE_STEP5_KEY_H11AXIS);
  return h11Axis;
}

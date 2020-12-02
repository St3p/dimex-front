const QUOTE_STEP1_KEY_ID = "quoteStepOneID";
const QUOTE_STEP1_KEY_COMPANY = "quoteStepOneCompany"


export function step1WizardSetQuote (id, company){
  console.log(id);
  localStorage.setItem(QUOTE_STEP1_KEY_ID, id);
  localStorage.setItem(QUOTE_STEP1_KEY_COMPANY, company);
}

export function  step1WizardGetQuoteID() {
  const id= localStorage.getItem(QUOTE_STEP1_KEY_ID);

  return id;

}
export function  step1WizardGetQuoteCompany() {
  const company= localStorage.getItem(QUOTE_STEP1_KEY_COMPANY);

  return company;

}

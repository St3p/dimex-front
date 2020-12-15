function StepOneSection(props){
  const { companyId, companyName } = props;
  return (
    <>
    <h5>Company</h5>
    <p>{companyId}</p>
    <p>{companyName}</p>
    </>
  );
}
export default StepOneSection;

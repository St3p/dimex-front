function StepTwoSection(props){
  const { materialCost, materialName } = props;
  return (
    <>
    <tr>
    <td></td>
    <td>{materialName}</td>
    <td></td>
    <td>{materialCost}</td>
    </tr>
    </>
  );
}
export default StepTwoSection;

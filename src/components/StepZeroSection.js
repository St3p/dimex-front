function StepZeroSection(props){
  const { quantity, nameComponent } = props;
  return (
    <>
    <tr>
    <td>{quantity}</td>
    <td>{nameComponent}</td>
    <td></td>
    <td></td>
    </tr>
    </>
  );
}
export default StepZeroSection;

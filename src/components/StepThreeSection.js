
function MachineItem(props) { // Inside the "resume" component.
  const { machine, id, price } = props.mac;
  const { hoursObj, companyPrice } = props;
  const hour = hoursObj[id];

  if (hour === undefined) {
      return (null);
  }
  var newprice= parseInt(price)+parseInt(companyPrice);
  const machinePrice= parseInt(hour)*newprice;
  return (
    <>
    <tr>
    <td></td>
    <td>{machine}</td>
    <td></td>
    <td>{machinePrice}</td>
    </tr>
    </>
  );
}



function StepThreeSection(props){
  const { hoursObj, machineArray, companyPrice } = props;
  console.log(hoursObj);
    function renderRow(mac) {
      return <MachineItem mac={mac} hoursObj = {hoursObj} companyPrice={companyPrice} />
    }
  return (
    <>
      {machineArray.map(renderRow)}
    </>
  )
}
export default StepThreeSection;

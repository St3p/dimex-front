
function MachineItem(props) { // Inside the "resume" component.
  const { machine, id } = props.mac;
  const { hoursObj } = props;
  console.log("MachineItem | machine", machine);
  console.log("MachineItem | id", id);
  console.log("MachineItem | hoursObj", hoursObj);

  const hour = hoursObj[id];
  console.log("MachineItem | hour", hour);

  if (hour === undefined) {
      return (null);
  }

  return (
    <>
    <tr>
    <td></td>
    <td>{machine}</td>
    <td></td>
    <td>{hour}</td>
    </tr>
    </>
  );
}



function StepThreeSection(props){
  const { hoursObj, machineArray } = props;
  console.log(hoursObj);
    function renderRow(mac) {
      return <MachineItem mac={mac} hoursObj = {hoursObj} />
    }
  return (
    <>
      {machineArray.map(renderRow)}
    </>
  )
}
export default StepThreeSection;

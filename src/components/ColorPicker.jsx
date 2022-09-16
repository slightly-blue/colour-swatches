import useContextMenu from "./useContextMenu"
import { HexColorPicker} from "react-colorful";

const ColorPicker = ({}) => {

//   const { anchorPoint, show, target } = useContextMenu();
//   //console.log(target)

//   if (show) {
//     return (
//       <ul className="menu" style={{ position: 'absolute', top: anchorPoint.y, left: anchorPoint.x }}>
//         <li>Share to..</li>
//         <li>Cut</li>
//         <li>Copy</li>
//         <li>Paste</li>
//         <hr />
//         <li>Refresh</li>
//         <li>Exit</li>
//       </ul>
//     );
//   }
//   return <></>;
// }




return (
  <div className="color-picker" style={{position:'absolute'}}>

  <HexColorPicker/>
  </div>
) 





}
export default ColorPicker
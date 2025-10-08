import "./Logo.css";
import { WiDayCloudyWindy } from "react-icons/wi";

export default function Logo() {
  return (
    <div className="logo">
      <WiDayCloudyWindy size={35} />
      <span>Atmos</span>
    </div>
  );
}

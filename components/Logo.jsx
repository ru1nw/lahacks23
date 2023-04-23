import logo from "@/images/logos/sustainabiz.png";
import Image from "next/image";

export function Logo(props) {
  return (
    <div className="flex items-center space-x-2">
      <Image src={logo} alt="Sustainabiz" {...props} />
      <div className="text-2xl font-bold">
        Sustaina<span className="text-green-600">BIZ</span>
      </div>
    </div>
  );
}

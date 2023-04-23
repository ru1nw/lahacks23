import { Header } from "@/components/Header";
import Dashboard from "@/images/Dashboard.png";
import Image from "next/image";

export default function BusinessDashboard() {
  return (
    <>
      <Header variant="business" />
      {/* show a large card with significant box-shadow and border-radius. On a desktop screen, it should be on the top left, taking up about half the remaining screen height and about 2/3 the remaining screen width. */}
      <div className="flex flex-col items-start h-screen">
        <Image src={Dashboard} alt="Dashboard" />
      </div>
    </>
  );
}

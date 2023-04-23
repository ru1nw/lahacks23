import { Header } from "@/components/Header";

export default function BusinessDashboard() {
  return (
    <>
      <Header variant="business" />
      {/* show a large card with significant box-shadow and border-radius. On a desktop screen, it should be on the top left, taking up about half the remaining screen height and about 2/3 the remaining screen width. */}
      <div className="flex flex-col items-start mt-4 h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 mx-16">
          {/* There says "Eco-score" in large font and bolded in the top left corner and today's date in small font and normal in the top right. Below this, there's a gray horizontal bar that's 1/5th the way down the card which almost touches the left and right ends of the card. Below this horizontal line, there are two columns. On the left column, there are three rows. Each row has a large grade rating (A, B, C, D, or F) on the left and a small description of the grade on the right. The first row is for the "Energy" grade. The second row is for the "Water" grade. The third row is for the "Waste" grade. On the right column, there is a large speedometer that shows the average grade of the three grades. The speedometer has a needle that points to the score (in this case, about 80% of the way around the speedometer). Below the speedometer, there is, in medium font, a large percentage number that shows the average grade of the three grades. Below this, there is, in small font, a small description of the average grade. */}
          <div className="flex flex-row justify-between">
            <p className="text-4xl font-bold">Eco-score</p>
            <p className="text-sm">Today&apos;s date</p>
          </div>
          <div className="h-0.5 bg-gray-300 my-4"></div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="text-4xl font-bold">A</p>
                <p className="text-sm ml-4">Energy</p>
              </div>
              <div className="flex flex-row">
                <p className="text-4xl font-bold">B</p>
                <p className="text-sm ml-4">Water</p>
              </div>
              <div className="flex flex-row">
                <p className="text-4xl font-bold">C</p>
                <p className="text-sm ml-4">Waste</p>
              </div>
            </div>
            <div className="flex flex-col ml-8">
              <div className="flex flex-row">
                <svg
                  className="h-32 w-32 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-4xl font-bold ml-4">80%</p>
              </div>
              <p className="text-sm">Average grade</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

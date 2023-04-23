import { Header } from "@/components/Header";
import Form from "@/components/Form";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  const [status, setStatus] = useState("doing");
  const [postData, setPostData] = useState(null);

  return (
    <>
      <Header variant={status === "done" && postData.type} />
      {status === "doing" ? (
        <Form
          onSubmit={(postData) => {
            setPostData(postData);
            setStatus("loading");
            setTimeout(() => setStatus("done"), 2500);
          }}
        />
      ) : status === "loading" ? (
        <>
          {/* show a large hourglass here and a message below it saying "Loading..." */}
          <div className="flex flex-col items-center mt-48 h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <p className="text-2xl font-bold">Loading...</p>
          </div>
        </>
      ) : (
        <>
          {/* show a large checkmark here and a message below it saying "Success!" */}
          <div className="flex flex-col items-center mt-48 h-screen">
            <svg
              className="animate-pulse h-32 w-32 text-green-500"
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
            <p className="text-2xl font-bold">Success!</p>
            {/* button to go to the dashboard */}
            <button
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md"
              onClick={() => router.push(postData.type === "business" ? "/business-dashboard" : "/search")}
            >
              Go to {postData.type === "business" ? "Dashboard" : "Search"}{" "}
            </button>
          </div>
        </>
      )}
    </>
  );
}

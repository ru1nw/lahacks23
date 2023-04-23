import { Header } from "@/components/Header";
import Form from "@/components/Form";
import { useState } from "react";

export default function Dashboard() {
  const [status, setStatus] = useState("doing");

  return (
    <>
      <Header variant={status === "done" && "business"} />
      {status === "doing" ? (
        <Form
          onSubmit={() => {
            setStatus("loading");
            setTimeout(() => setStatus("done"), 2500);
          }}
        />
      ) : status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div>Success</div>
      )}
    </>
  );
}

import BusinessImg from "@/images/icons/business.png";
import ConsumerImg from "@/images/icons/consumer.png";
import Image from "next/image";

export default function UserTypeSelector({ formData, setFormData }) {
  const { type: userType } = formData;
  function handleSelectUserType(type) {
    if (userType == type) {
      setFormData({ ...formData, type: null });
      return;
    }
    setFormData({ ...formData, type });
  }

  return (
    <>
      <h1 className="flex justify-center font-bold text-5xl mt-32">
        Are you a business or a consumer?
      </h1>
      {/* two big card-like buttons with border radius and significant box shadow. Each button has an icon and a title. Also, after clicking on the button, the button should change its color to a light green and the border to a darker green to indicate selection and the "Next" button should be activated. */}
      <div className="flex justify-center mt-12 space-x-6">
        <button
          onClick={() => handleSelectUserType("business")}
          className={`${
            userType === "business"
              ? "bg-green-200 border-green-500"
              : "bg-white border-gray-300"
          } border-2 rounded-lg shadow-lg p-8 flex flex-col items-center`}
        >
          <Image src={BusinessImg} alt="business" className="w-32 h-32" />
          <h2 className="font-bold text-2xl mb-8">Business</h2>
        </button>
        <button
          onClick={() => handleSelectUserType("consumer")}
          className={`${
            userType === "consumer"
              ? "bg-green-200 border-green-500"
              : "bg-white border-gray-300"
          } border-2 rounded-lg shadow-lg p-8 flex flex-col items-center`}
        >
          <Image src={ConsumerImg} alt="consumer" className="w-32 h-32" />
          <h2 className="font-bold text-2xl mb-8">Consumer</h2>
        </button>
      </div>
    </>
  );
}

import { useMemo, useState } from "react";
import UserTypeSelector from "./UserTypeSelector";
import BusinessQuestion1 from "./BusinessQuestion1";
import ConsumerQuestion1 from "./ConsumerQuestion1";
import BusinessQuestion2 from "./BusinessQuestion2";
import BusinessQuestion3 from "./BusinessQuestion3";
import BusinessQuestion4 from "./BusinessQuestion4";
import BusinessQuestion5 from "./BusinessQuestion5";

export default function Form({ onSubmit }) {
  const [page, setPage] = useState(0); // [0, 1, 2, 3, 4, 5]
  const [formData, setFormData] = useState({
    type: "",
    energyEfficiencyInput: "",
    wasteReductionInput: "",
    waterConservationInput: "",
    sustainableSourcingInput: "",
    equipmentInput: "",
  });
  const isValid = useMemo(() => {
    if (page === 0) {
      return !!formData.type;
    }
    if (page === 1) {
      return !!formData.energyEfficiencyInput;
    }
    if (page === 2) {
      return !!formData.wasteReductionInput;
    }
    if (page === 3) {
      return !!formData.waterConservationInput;
    }
    if (page === 4) {
      return !!formData.sustainableSourcingInput;
    }
    if (page === 5) {
      return !!formData.equipmentInput;
    }
    return true;
  }, [page, formData]);

  function conditionalComponent() {
    if (page === 0) {
      return <UserTypeSelector formData={formData} setFormData={setFormData} />;
    }
    if (formData.type === "business") {
      switch (page) {
        case 1:
          return (
            <BusinessQuestion1 formData={formData} setFormData={setFormData} />
          );
        case 2:
          return (
            <BusinessQuestion2 formData={formData} setFormData={setFormData} />
          );
        case 3:
          return (
            <BusinessQuestion3 formData={formData} setFormData={setFormData} />
          );
        case 4:
          return (
            <BusinessQuestion4 formData={formData} setFormData={setFormData} />
          );
        case 5:
          return (
            <BusinessQuestion5 formData={formData} setFormData={setFormData} />
          );
      }
    } else {
      switch (page) {
        case 1:
          return <ConsumerQuestion1 />;
      }
    }
  }

  return (
    <>
      {conditionalComponent()}
      {/* there are two circular buttons, one on the left and one on the right. The left button is disabled by default and the right button is disabled until the user selects a user type. The buttons should be aligned in the center of the screen, to the left and right of the two big buttons. The buttons should have arrows pointing to the left and right respectively, with the exception of the last page, wherein the right arrow should be a checkmark instead. There should be significant box shadow on the buttons. */}
      <div className="flex justify-center mt-12 space-x-6">
        <button
          className="bg-white border-2 disabled:border-gray-300 rounded-full shadow-lg p-4  border-gray-500"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              page === 0 ? "text-gray-300" : "text-gray-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className={`${
            isValid
              ? "bg-green-200 border-green-500"
              : "bg-white disabled:border-gray-300 border-gray-300"
          } border-2 rounded-full shadow-lg p-4`}
          disabled={!isValid}
          onClick={() => {
            if (page === 5) {
              onSubmit(formData);
              return;
            }
            setPage(page + 1);
          }}
        >
          {/* This should be a right arrow, with the exception of the last page, wherein the right arrow should be a checkmark instead. */}
          {page === 5 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                isValid ? "text-green-500" : "text-gray-300"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* This should be a checkmark, with the exception of the last page, wherein the right arrow should be a checkmark instead. */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                isValid ? "text-green-500" : "text-gray-300"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

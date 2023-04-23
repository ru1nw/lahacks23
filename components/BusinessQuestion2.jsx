export default function BusinessQuestion2({ formData, setFormData }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-medium text-7xl mt-24">Question 2</h1>
      <h2 className="mt-2 max-w-3xl text-center">
        Waste reduction: How much excess food do you throw away each week? (in
        pounds) How much non-recyclable waste do you throw away each week? (in
        pounds). If you don&apos;t know, estimate. Do you ever donate or
        repurpose your excess food/materials, respectively? If so, how often? Do
        you use eco-friendly packaging? If so, what kind?
      </h2>
      {/* there should be a text area for the user to enter their answer. The text area should have a border radius and significant box shadow. By default, the text area should have "Input an answer..." as a placeholder. */}
      <textarea
        className="mt-4 border-2 border-gray-300 rounded-lg shadow-lg p-4 w-3/4 h-64"
        placeholder="Input an answer..."
        value={formData.wasteReductionInput}
        onChange={(e) =>
          setFormData({ ...formData, wasteReductionInput: e.target.value })
        }
      />
    </div>
  );
}

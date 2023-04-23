export default function BusinessQuestion4({ formData, setFormData }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-medium text-7xl mt-24">Question 4</h1>
      <h2 className="mt-2 max-w-3xl text-center">
        Sustainable sourcing: Do you use third-party certifications, such as B
        Corporation or Fairtrade, to verify the sustainability of its sourcing
        partners? How much of the materials or products that the business
        sources are made from recycled, renewable, or biodegradable materials?
        If your business deals with shipping packages, do you use renewable
        energy or carbon offsets for its transportation?
      </h2>
      {/* there should be a text area for the user to enter their answer. The text area should have a border radius and significant box shadow. By default, the text area should have "Input an answer..." as a placeholder. */}
      <textarea
        className="mt-4 border-2 border-gray-300 rounded-lg shadow-lg p-4 w-3/4 h-64"
        placeholder="Input an answer..."
        value={formData.sustainableSourcingInput}
        onChange={(e) =>
          setFormData({
            ...formData,
            sustainableSourcingInput: e.target.value,
          })
        }
      />
    </div>
  );
}

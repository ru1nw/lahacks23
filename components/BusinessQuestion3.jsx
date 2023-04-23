export default function BusinessQuestion3({ formData, setFormData }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-medium text-7xl mt-24">Question 3</h1>
      <h2 className="mt-2 max-w-3xl text-center">
        Water conservation: How much water do you use each week? (in gallons) If
        you don&apos;t know, estimate. How efficient are the toilets, faucets,
        showerheads, dishwashers, and other water-using appliances? Do they have
        WaterSense labels or other certifications? How often are pipes,
        fittings, faucets, and other fixtures checked for leaks? How much water
        is lost due to leaks?
      </h2>
      {/* there should be a text area for the user to enter their answer. The text area should have a border radius and significant box shadow. By default, the text area should have "Input an answer..." as a placeholder. */}
      <textarea
        className="mt-4 border-2 border-gray-300 rounded-lg shadow-lg p-4 w-3/4 h-64"
        placeholder="Input an answer..."
        value={formData.waterConservationInput}
        onChange={(e) =>
          setFormData({ ...formData, waterConservationInput: e.target.value })
        }
      />
    </div>
  );
}

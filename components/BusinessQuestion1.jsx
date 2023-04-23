export default function BusinessQuestion1({ formData, setFormData }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-medium text-7xl mt-24">Question 1</h1>
      <h2 className="mt-2 max-w-3xl text-center">
        Energy efficiency: Please give an estimated monthly electricity and gas
        consumption for your business in kWh. Do you use any renewable energy
        sources? If so, which ones? Also, what kind of lighting do you use
        (i.e., incandescent, fluorescent, LED)? What appliances do you use? How
        many? Are they ENERGY STAR certified?
      </h2>
      {/* there should be a text area for the user to enter their answer. The text area should have a border radius and significant box shadow. By default, the text area should have "Input an answer..." as a placeholder. */}
      <textarea
        className="mt-4 border-2 border-gray-300 rounded-lg shadow-lg p-4 w-3/4 h-64"
        placeholder="Input an answer..."
        value={formData.energyEfficiencyInput}
        onChange={(e) =>
          setFormData({ ...formData, energyEfficiencyInput: e.target.value })
        }
      />
    </div>
  );
}

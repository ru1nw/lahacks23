export default function ConsumerQuestion1({ formData, setFormData }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-medium text-7xl mt-24">Question 1</h1>
      <h2 className="mt-2 max-w-3xl text-center">
        What are your main ESG priorities or values? Do you care more about
        environmental, social, or governance aspects of a company&apos;s
        performance? Or do you want a balanced approach that considers all three
        dimensions?
      </h2>
      {/* there should be a text area for the user to enter their answer. The text area should have a border radius and significant box shadow. By default, the text area should have "Input an answer..." as a placeholder. */}
      <textarea
        className="mt-4 border-2 border-gray-300 rounded-lg shadow-lg p-4 w-3/4 h-64"
        placeholder="Input an answer..."
        value={formData.esgPriorities}
        onChange={(e) =>
          setFormData({ ...formData, esgPriorities: e.target.value })
        }
      />
    </div>
  );
}

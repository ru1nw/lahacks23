export default function ConsumerQuestion3({ formData, setFormData }) {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="font-medium text-7xl mt-24">Question 3</h1>
      <h2 className="mt-2 max-w-3xl text-center">
        How important is the quality, price, convenience, or customer service of
        a product or service to you compared to its sustainability or social
        impact? For example, are you willing to pay more, wait longer, or
        compromise on some features for a more sustainable or ethical option?
      </h2>
      {/* there should be a text area for the user to enter their answer. The text area should have a border radius and significant box shadow. By default, the text area should have "Input an answer..." as a placeholder. */}
      <textarea
        className="mt-4 border-2 border-gray-300 rounded-lg shadow-lg p-4 w-3/4 h-64"
        placeholder="Input an answer..."
        value={formData.esgTradeoff}
        onChange={(e) =>
          setFormData({ ...formData, esgTradeoff: e.target.value })
        }
      />
    </div>
  );
}

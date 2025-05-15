import { useState } from "react";
import { DATA } from "../data";

export default function HomePage() {
  // Initialize state with the data
  const [units, setUnits] = useState(DATA);
  const [editingId, setEditingId] = useState(null); // Store the id of the unit being edited
  const [formData, setFormData] = useState({}); // Store the form data when editing
  const [newItemData, setNewItemData] = useState({
    title: "",
    rückfront: 0,
    front: 0,
    u_profil: 0,
    print: 0,
    totalUnits: 0,
    all: 0,
  });

  // Modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle input change for editing
  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  // Handle input change for the new item form
  const handleNewItemChange = (e, key) => {
    const { value } = e.target;
    setNewItemData({
      ...newItemData,
      [key]: value,
    });
  };

  // Handle edit button click
  const handleEditClick = (id) => {
    setEditingId(id);
    const unitToEdit = units.find((unit) => unit.id === id);
    setFormData({ ...unitToEdit }); // Fill form with the data of the unit being edited
  };

  // Handle save button click
  const handleSaveClick = () => {
    const updatedUnits = units.map((unit) =>
      unit.id === editingId ? { ...unit, ...formData } : unit
    );
    setUnits(updatedUnits);
    setEditingId(null); // Stop editing
  };

  // Handle cancel button click
  const handleCancelClick = () => {
    setEditingId(null); // Stop editing without saving changes
  };

  // Handle add new item form submission
  const handleAddNewItem = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !newItemData.title ||
      newItemData.rückfront <= 0 ||
      newItemData.front <= 0 ||
      newItemData.u_profil <= 0 ||
      newItemData.print <= 0 ||
      newItemData.totalUnits <= 0 ||
      newItemData.all <= 0
    ) {
      alert("Please fill in all fields with valid data");
      return;
    }

    // Generate a new id based on the current length of units
    const newId = units.length > 0 ? units[units.length - 1].id + 1 : 1;

    // Add the new item to the state
    setUnits([...units, { id: newId, ...newItemData }]);

    // Close the modal and clear the new item form
    setIsModalOpen(false);
    setNewItemData({
      title: "",
      rückfront: 0,
      front: 0,
      u_profil: 0,
      print: 0,
      totalUnits: 0,
      all: 0,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-semibold text-center mb-6 text-blue-600">
        Hello From Dynavox-Service
      </h1>

      {/* Add Item Button */}
      <div className="mb-6 flex justify-between">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Item
        </button>
      </div>

      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold">
                Title
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold">
                Rückfront
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold">
                Front
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold">
                U-Profil
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold">
                Print
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold">
                Total Units
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold">All</th>
              <th className="py-3 px-6 text-left text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit) => (
              <tr
                key={unit.id}
                className="border-t border-gray-200 hover:bg-gray-50 text-start"
              >
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange(e, "title")}
                      className="px-2 py-1 border border-gray-300 rounded w-full max-w-xs"
                    />
                  ) : (
                    unit.title
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <input
                      type="number"
                      value={formData.rückfront}
                      onChange={(e) => handleInputChange(e, "rückfront")}
                      className="px-2 py-1 border border-gray-300 rounded w-full max-w-xs"
                    />
                  ) : (
                    unit.rückfront
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <input
                      type="number"
                      value={formData.front}
                      onChange={(e) => handleInputChange(e, "front")}
                      className="px-2 py-1 border border-gray-300 rounded w-full max-w-xs"
                    />
                  ) : (
                    unit.front
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <input
                      type="number"
                      value={formData.u_profil}
                      onChange={(e) => handleInputChange(e, "u_profil")}
                      className="px-2 py-1 border border-gray-300 rounded w-full max-w-xs"
                    />
                  ) : (
                    unit.u_profil
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <input
                      type="number"
                      value={formData.print}
                      onChange={(e) => handleInputChange(e, "print")}
                      className="px-2 py-1 border border-gray-300 rounded w-full max-w-xs"
                    />
                  ) : (
                    unit.print
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <input
                      type="number"
                      value={formData.totalUnits}
                      onChange={(e) => handleInputChange(e, "totalUnits")}
                      className="px-2 py-1 border border-gray-300 rounded w-full max-w-xs"
                    />
                  ) : (
                    unit.totalUnits
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <input
                      type="number"
                      value={formData.all}
                      onChange={(e) => handleInputChange(e, "all")}
                      className="px-2 py-1 border border-gray-300 rounded w-full max-w-xs"
                    />
                  ) : (
                    unit.all
                  )}
                </td>
                <td className="py-3 px-6 text-sm">
                  {editingId === unit.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSaveClick}
                        className="bg-green-500 text-white px-4 py-1 rounded-md"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="bg-red-500 text-white px-4 py-1 rounded-md"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEditClick(unit.id)}
                      className="bg-blue-500 text-white px-4 py-1 rounded-md"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Add New Item */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl">
            <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
            <form onSubmit={handleAddNewItem}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={newItemData.title}
                  onChange={(e) => handleNewItemChange(e, "title")}
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                />
                <input
                  type="number"
                  placeholder="Rückfront"
                  value={newItemData.rückfront}
                  onChange={(e) => handleNewItemChange(e, "rückfront")}
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                />
                <input
                  type="number"
                  placeholder="Front"
                  value={newItemData.front}
                  onChange={(e) => handleNewItemChange(e, "front")}
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                />
                <input
                  type="number"
                  placeholder="U-Profil"
                  value={newItemData.u_profil}
                  onChange={(e) => handleNewItemChange(e, "u_profil")}
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                />
                <input
                  type="number"
                  placeholder="Print"
                  value={newItemData.print}
                  onChange={(e) => handleNewItemChange(e, "print")}
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                />
                <input
                  type="number"
                  placeholder="Total Units"
                  value={newItemData.totalUnits}
                  onChange={(e) => handleNewItemChange(e, "totalUnits")}
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                />
                <input
                  type="number"
                  placeholder="All"
                  value={newItemData.all}
                  onChange={(e) => handleNewItemChange(e, "all")}
                  className="px-4 py-2 border border-gray-300 rounded w-full"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Item
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

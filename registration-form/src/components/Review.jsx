const Review = ({formData, prevStep, handleSubmit}) => {

  return (
    <div className="w-2xl mx-auto mt-10 p-6 text-white bg-neutral-900 rounded-lg shadow-lg">
       <h2 className="text-4xl font-bold text-center">Review & Submit</h2>
       <p className="mt-1 text-center text-green-500">Step 3</p>
      <table className="mt-2 w-full border-4 border-neutral-800 rounded-lg shadow-lg">
        <thead className="bg-neutral-800">
          <tr className="border-2 border-neutral-600">
            <th className="px-4 py-2 text-left">Field</th>
            <th className="px-4 py-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-800">
            <td className="px-4 py-2 font-bold">Name</td>
            <td className="px-4 py-2">{formData.name}</td>
          </tr>
          <tr className="border-b border-neutral-800">
            <td className="px-4 py-2 font-bold">Email</td>
            <td className="px-4 py-2">{formData.email}</td>
          </tr>
          <tr className="border-b border-neutral-800">
            <td className="px-4 py-2 font-bold">Username</td>
            <td className="px-4 py-2">{formData.username}</td>
          </tr>
          <tr className="border-b border-neutral-800">
            <td className="px-4 py-2 font-bold">Password</td>
            <td className="px-4 py-2">{"********"}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-4 mt-2">
        <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg font-bold text-xl transition-all duration-200" onClick={prevStep}>Previous</button>
        <button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 p-2 rounded-lg font-bold text-xl transition-all duration-200" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Review
const Review = ({formData, prevStep, handleSubmit}) => {
  return (
    <>
       <h2>Review & Submit</h2>

      <table border="1" >
        <thead>
          <tr>
            <th>Field</th>
            <th>Entered Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td><strong>Username</strong></td>
            <td>{formData.username}</td>
          </tr>
          <tr>
            <td><strong>Password</strong></td>
            <td>{"*".repeat(formData.password.length)}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={prevStep}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Review
import React, { useState } from "react";

const RegisterForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [response, setResponse] = useState("");

  const registerCompany = async () => {
    try {
      const response = await axios.post(
        "http://20.244.56.144/products/register",
        {
          companyName,
          ownerName,
          rollNo,
          ownerEmail,
          accessCode,
        }
      );
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <label>
        Company Name:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label>
        Owner Name:
        <input
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
      </label>
      <label>
        Roll No:
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
      </label>
      <label>
        Owner Email:
        <input
          type="email"
          value={ownerEmail}
          onChange={(e) => setOwnerEmail(e.target.value)}
        />
      </label>
      <label>
        Access Code:
        <input
          type="text"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
        />
      </label>
      <button onClick={registerCompany}>Register</button>
      <p>{response.message}</p>
    </form>
  );
};

export default RegisterForm;

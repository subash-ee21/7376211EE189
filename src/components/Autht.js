import React, { useState } from "react";

const AuthForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [clientID, setClientID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [response, setResponse] = useState("");

  const getAuthToken = async () => {
    try {
      const response = await axios.post("http://20.244.56.144/products/auth", {
        companyName,
        clientID,
        clientSecret,
        ownerName,
        ownerEmail,
        rollNo,
      });
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
        Client ID:
        <input
          type="text"
          value={clientID}
          onChange={(e) => setClientID(e.target.value)}
        />
      </label>
      <label>
        Client Secret:
        <input
          type="text"
          value={clientSecret}
          onChange={(e) => setClientSecret(e.target.value)}
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
        Owner Email:
        <input
          type="email"
          value={ownerEmail}
          onChange={(e) => setOwnerEmail(e.target.value)}
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
      <button onClick={getAuthToken}>Get Auth Token</button>
      <p>{JSON.stringify(response)}</p>
    </form>
  );
};

export default AuthForm;

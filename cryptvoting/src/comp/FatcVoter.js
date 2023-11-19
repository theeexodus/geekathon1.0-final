import React, { useState, useEffect } from "react";

function FetchVoter({ contract }) {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    const fetchVoters = async () => {
      if (contract) {
        try {
          // Assuming contract.getVoter() returns an array of voter objects
          const fetchedVoters = await contract.getVoter();
          console.log(fetchedVoters);
          setVoters(fetchedVoters);
        } catch (error) {
          console.error("Error fetching voters:", error);
        }
      }
    };

    fetchVoters();
  }, [contract]);

  return (
    <div>
      <p className="text-dark h3">Voters Information</p>
      {voters.map((voter) => (
        <div key={voter.id}>
          <table>
            <tbody>
              <tr className="p-2">
                <td className="p-2">{voter.id === 52436 ? "Sarang" : voter.name}</td>
                <td className="p-2">Voter Address {voter.voterAddress}</td>
                <td className="p-2">Voted To {voter._CandidateAddress}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

function FatcVoter({ contract, account, provider }) {
  return (
    <div>
      <FetchVoter contract={contract} />
    </div>
  );
}

export default FatcVoter;

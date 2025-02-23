import { useDispatch, useSelector } from "react-redux";
import { HandelCancelEdit } from "../redux/features/editSlice";
import { useState } from "react";
import { updateUsernameLocally, getProfilData } from "../redux/features/profilDataSlice";

function Edit() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const firstName = useSelector((state) => state.profilData.data.body?.firstName || "");
  const lastName = useSelector((state) => state.profilData.data.body?.lastName || "");
  const username = useSelector((state) => state.profilData.data.body?.userName || "");
  const [newUsername, setNewUsername] = useState(username);

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  async function editUsrName(tok) {
    if (!tok) {
      alert("Authorization token is missing!");
      return;
    }

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tok}`, 
      },
      body: JSON.stringify({ userName: newUsername }), 
    });

    const data = await response.json();
    console.log(data);

    if (data.status === 200) {
      alert("Username updated successfully!");
      dispatch(updateUsernameLocally(newUsername));
      dispatch(getProfilData(tok));
      setNewUsername(newUsername);
    } else {
      alert(`Failed to update username: ${data.message}`);
    }

    return data;
  }

  return (
    <section className="edit">
      <h2>Edit user info</h2>
      <div className="edit-inputs">
        <div>
          <label htmlFor="username">User name:</label>
          <input value={newUsername} onChange={handleUsernameChange} type="text" name="username" id="username"/>
        </div>
        <div>
          <label htmlFor="firstname">First name:</label>
          <input value={firstName} type="text" name="firstname" id="firstname" disabled />
        </div>
        <div>
          <label htmlFor="lastname">Last name:</label>
          <input value={lastName} type="text" name="lastname" id="lastname" disabled />
        </div>
      </div>
      <div>
        <button onClick={() => {editUsrName(token);}} type="submit" className="edit-button">
          Save
        </button>
        <button onClick={() => dispatch(HandelCancelEdit())} className="edit-button">
          Cancel
        </button>
      </div>
    </section>
  );
}

export default Edit;

import React, { useState } from "react"
import { UserNameContext, useSelectedUser } from "../context/SelectUserContext"
import './style.css'
import { UserNameType } from "../types/userTypes";
const SelectUser = () => {
    const {currentUser, setCurrentUser} = useSelectedUser();

    return (
      <div className='select-container'>
          <label htmlFor="user">Choose a user:</label>
          <select name="user" id="user" form='userSelection' onChange={(e) => e.target.value !== null ? setCurrentUser(e.target.value)}>
            <option value="Adeline">Adeline</option>
            <option value="Max">Max</option>
          </select>
          <button onSubmit={() => setCurrentUser(selectedUser)}>Submit</button>
      </div>
    )
}

export default SelectUser;
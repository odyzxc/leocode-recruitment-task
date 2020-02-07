import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "components/SearchBar/SearchBar";
import UserItem from "./UserItem";

import {
  SearchBarContainer,
  Title,
  UsersContainer,
  UserItemsContainer
} from "./styles";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    });
  }, []);

  const onSearchChange = search => {
    // search cleared - bringing back initial users state
    if (search === "") {
      setFilteredUsers(users);
      return;
    }

    const regexp = new RegExp(search, "i");
    const filtered = users.filter(u => regexp.test(u.name));
    setFilteredUsers(filtered);
  };

  return (
    <UsersContainer>
      <Title>Users List</Title>
      <SearchBarContainer>
        <SearchBar
          placeholder="Search by user name..."
          onChange={onSearchChange}
        />
      </SearchBarContainer>
      {loading ? (
        <>Loading...</>
      ) : (
        <UserItemsContainer>
          {!loading && filteredUsers.length === 0
            ? "Could not find user..."
            : filteredUsers.map((user, index) => (
                <UserItem
                  index={index}
                  name={user.name}
                  username={user.username}
                  key={user.username}
                />
              ))}
        </UserItemsContainer>
      )}
    </UsersContainer>
  );
};

export default UsersList;

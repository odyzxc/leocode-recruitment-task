import React from "react";
import { number, string } from "prop-types";

import { UserItemContainer, Username, UserIndex, UsersName } from "./styles";

const UserItem = ({ index, name, username }) => (
  <UserItemContainer>
    <UserIndex>{index + 1}.</UserIndex>
    <Username>{name}</Username>
    <UsersName>@{username}</UsersName>
  </UserItemContainer>
);

UserItem.propTypes = {
  index: number.isRequired,
  name: string.isRequired,
  username: string.isRequired
};

export default UserItem;

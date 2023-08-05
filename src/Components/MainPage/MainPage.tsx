import React, { useState } from "react";
import Button from "../Global/Button/Button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import InfoLine from "../infoLine/infoLine";

type User = {
  firstName: string;
  email: string;
  topic: string;
  text: string;
};
let MainPage: React.FC = () => {
  let user = useSelector(
    (state: { users: { user: User | null } }) => state.users.user
  );
  let formEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //  e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <div className="flex flex-col mx-4 my-4 w-1/4 ">
        <div className="mx-2 mb-2 flex flex-col">
          <span>FormData:</span>
          <span>
            {user ? (
              <div className="flex flex-col">
                <InfoLine text={`Name: ${user.firstName}`} />
                <InfoLine text={`Email: ${user.email}`} />
                <InfoLine text={`Topic: ${user.topic}`} />
                <InfoLine text={`Text: ${user.text}`} />
              </div>
            ) : (
              "форма пока не заполнена"
            )}
          </span>
        </div>
        <NavLink
          to={user ? "/form/edit" : "/form"}
          className="bg-green-100 flex justify-start w-max"
        >
          <Button
            text={user ? "Изменить" : "Заполнить форму"}
            textColor="text-white"
            bg={user ? "bg-gray-500" : "bg-green-500"}
            clickButton={formEdit}
          />
        </NavLink>
      </div>
    </div>
  );
};
export default MainPage;

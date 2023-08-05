import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../Global/Input/Input";
import Button from "../Global/Button/Button";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../../features/userSlice";
type User = {
  firstName: string;
  email: string;
  topic: string;
  text: string;
};
let FormEdit: React.FC = () => {
  const user = useSelector(
    (state: { users: { user: User | null } }) => state.users.user
  );
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [firstName, setFirstName] = useState(user ? user.firstName : "");
  let [email, setEmail] = useState(user ? user.email : "");
  let [topic, setTopic] = useState(user ? user.topic : "");
  let [text, setText] = useState(user ? user.text : "");
  const returnMainPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    navigate("/");
  };
  const changeForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let newUser: User = {
      firstName,
      email,
      topic,
      text,
    };
    if (JSON.stringify(user) !== JSON.stringify(newUser)) {
      dispatch(changeUser(newUser));
      navigate("/");
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <div className="flex justify-center top-0 left-0  h-full w-full">
      <div className="bg-black absolute w-full h-full opacity-75"></div>
      <div className="flex flex-col  mt-10 absolute bg-white px-4 z-50 w-80 ">
        <h1 className="text-black justify-start font-bold text-xl my-4">
          Редактировать данные
        </h1>
        <form className="flex flex-col justify-center">
          <Input
            borderColor="border-gray-200"
            type="text"
            plaseholder="Представтесь пожалуйста"
            value={firstName!}
            setValue={setFirstName}
          />
          <Input
            type="email"
            plaseholder="Введите ваш e-mail"
            value={email!}
            setValue={setEmail}
          />
          <select
            name="select"
            value={topic!}
            onChange={(e) => setTopic(e.target.value)}
            className="text-sm w-full flex  text-start border-solid border px-2 py-2 mb-4 hover:border-blue-400 focus:outline-none  focus:border-gray-500`"
          >
            <option value="Тема1" defaultValue="Тема1">
              Тема 1
            </option>
            <option value="Тема2">Тема 2</option>
            <option value="Тема3">Тема 3</option>
          </select>
          <Input
            plaseholder="Введите сообщение"
            value={text}
            setValue={setText}
          />
          <div className="w-full px-6 mb-2 flex justify-around ">
            <Button
              bg="bg-gray-500"
              textColor="text-white"
              text="Вернутся"
              clickButton={returnMainPage}
            />
            <Button
              bg="bg-green-500"
              textColor="text-white"
              text="Редактировать"
              clickButton={changeForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormEdit;

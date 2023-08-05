import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import Input from "../Global/Input/Input";
import Button from "../Global/Button/Button";

let Form: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [firstName, setFirstName] = useState("");
  let [email, setEmail] = useState("");
  let [topic, setTopic] = useState("");
  let [text, setText] = useState("");
  let User = {
    firstName,
    email,
    topic,
    text,
  };
  let resetForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFirstName("");
    setEmail("");
    setTopic("Тема1");
    setText("");
  };
  let submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (firstName && email && topic && text) {
      dispatch(addUser(User));
      navigate("/");
    }
  };
  return (
    <div className="flex justify-center top-0 left-0  h-full w-full ">
      <div className="bg-black absolute w-full h-full opacity-75"></div>
      <div className="flex flex-col  mt-10 absolute bg-white px-4 z-50 w-80 ">
        <h1 className="text-black justify-start font-bold text-xl my-4">
          Форма для тебя
        </h1>
        <form className="flex flex-col justify-center">
          <Input
            borderColor="border-gray-200"
            type="text"
            plaseholder="Представтесь пожалуйста"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            type="email"
            plaseholder="Введите ваш e-mail"
            value={email}
            setValue={setEmail}
          />
          <select
            name="select"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="text-sm w-full flex  text-start border-solid border px-2 py-2 mb-4 text-gray-500 hover:border-blue-400 focus:outline-none  focus:border-gray-500`"
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
              text="Cбросить"
              clickButton={resetForm}
            />
            <Button
              bg="bg-green-500"
              textColor="text-white"
              text="Отправить"
              clickButton={submitForm}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;

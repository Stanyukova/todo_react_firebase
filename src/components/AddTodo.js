import React from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
} from "firebase/storage";
import { v4 } from "uuid";

export default function AddTodo() {

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const [image, setImage] = React.useState('');
  const [imageURL, setImageURL] = React.useState('');
  const fileReader = new FileReader();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        description,
        deadline,
        imageURL,
        image,
        completed: false,
      });
      setTitle("");
      setDescription('');
      setDeadline('');
      setImage('');
      setImageURL('');


    }
    console.log("handle", title);
  };

  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
   
  };
  const handleOnChange = async (e) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);
      const imageRef = ref(storage, `images/${file.name + v4()}`);
     await uploadBytes(imageRef, file);
     setImage('');
    } setImage('');
    // console.log("change", e.target.files[0]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <label>Задача:</label>
        <input
          type="text"
          placeholder="Создать задачу..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Описание задачи:</label>
        <textarea
          type="text"
          placeholder="Введите описание..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label >Дедлайн:</label>
        <input
          className="deadlinestyle"
          type="date"
          name="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <label >Прикрепить файл:</label>

        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleOnChange}
        />
        <img
          src={imageURL ? imageURL : "no_photo.jpg"}
          className="file-uploader__preview"
          alt="Здесь может быть фото котика..."
        />
      </div>
      <div className="btn_container">
        <button>Добавить</button>
      </div>
    </form>
  );
}

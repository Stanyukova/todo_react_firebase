import React from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export default function AddTodo() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const [addFile, setAddFile] = React.useState("");
  const [imageUpload, setImageUpload] = React.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        description,
        deadline,
        completed: false,
      });
      setTitle("");
    }
  };
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image Uploaded');
    })
  
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

        <label for="start">Дедлайн:</label>
        <input
          className="deadlinestyle"
          type="date"
          name="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <label for="avatar">Прикрепить файл:</label>

        <input
          type="file"
          accept="image/png, image/jpeg"
          // value={addFile}
          onChange={(e) => setImageUpload(e.target.value[0])}
        />
        <button onClick={uploadImage}>Загрузить</button>
      </div>
      <div className="btn_container">
        <button>Добавить</button>
      </div>
    </form>
  );
}

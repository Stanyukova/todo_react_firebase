import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = React.useState(todo.title);
  const [newDescription, setNewDescription] = React.useState(todo.description);
  const [newDeadline, setNewDeadline] = React.useState(todo.deadline);
  const [newAddFile, setNewAddFile] = React.useState(todo.addFile);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  const handleChangeDescr = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewDescription(todo.description);
    } else {
      todo.description = "";
      setNewDescription(e.target.value);
    }
  };
  const handleChangeDeadline = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewDeadline(todo.deadline);
    } else {
      todo.deadline = "";
      setNewDeadline(e.target.value);
    }
  };


  // const handleChangeFile = (e) => {
  //   e.preventDefault();
  //   if (todo.complete === true) {
  //     setNewAddFile(todo.addFile);
  //   } else {
  //     todo.deadline = "";
  //     setNewAddFile(e.target.value);
  //   }
  // };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        className="list"
        onChange={handleChange}
      />
      <textarea
        style={{ display: todo.completed && "none" }}
        type="text"
        placeholder="Введите описание..."
        value={todo.description === "" ? newDescription : todo.description}
        onChange={handleChangeDescr}
      ></textarea>
      <input
        style={{ display: todo.completed && "none", 
        color: todo.deadline<= new Date().toLocaleDateString('en-ca')  && 'red',
       }}
        type="date"
        id="deadline"
        className="deadline"
        value={todo.deadline === "" ? newDeadline : todo.deadline}
        onChange={handleChangeDeadline}
      />
     
     
      
      <input
        type="file"
        style={{ display: todo.completed && "none" }}
        // value={todo.addFile === "" ? newAddFile : todo.addFile}
        // value={newAddFile}
        // onChange={handleChangeFile}
      />

      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() =>
            handleEdit(todo, newTitle, newDescription, newDeadline, newAddFile)
          }
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
     
    </div>
    
  );
}

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"; 

export default function Title() {
  return (
    <div className="title">
      <h1>Todo App</h1>
      <h2> Пояснительная бригада:</h2>
      <div className="info"> Задача выполнена
        <CheckCircleIcon  id="i2" /></div>
     <div className="info"> Сохранить изменения
     <EditIcon id="i2" /></div>
      <div className="info"> Удалить задачу
        <DeleteIcon  id="i2" /></div>
     
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudents";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditStudent from "./components/EditStudent";

// import { getUser } from "../src/store/actions/userActions";
// import { useDispatch, useSelector } from "react-redux";

export const StudentContext = React.createContext();

function App() {
  let data = {
    earning: "40,000",
    annual: "2,40,000",
    task: 20,
    pending: 26,
  };
  // const dispatch = useDispatch();

  let [students, setStudents] = useState([]);

  // let usersData = useSelector((state) => state.users);
  // console.log(usersData);

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "grid", gridTemplateColumns: "15% 85%" }}>
          <div>
            <Sidebar />
          </div>
          <div>
            <StudentContext.Provider value={{ students, setStudents }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard data={data} />} />
                <Route
                  path="/all-students"
                  element={<AllStudents />}
                />
                <Route path="/add-student/:id" element={<AddStudents />} />
                <Route path="/edit-student/:id" element={<EditStudent />} />
                <Route path="/" element={<Dashboard data={data} />} />
              </Routes>
            </StudentContext.Provider>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import RootNavLayout from "./layout/RootNavLayout";
import { Header, Others, ProjectsList, SkillList } from "./components";
import "./styles/style.css";
import slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootNavLayout />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <div className="container">
        <div className="header-wrapper">
          <button>contact me</button>
        </div>
        <div className="content">
          <RouterProvider router={router}></RouterProvider>
          <main className="main-content">
            <Header></Header>
            <ProjectsList></ProjectsList>
            <div className="skill-content">
              <SkillList></SkillList>
              <Others></Others>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

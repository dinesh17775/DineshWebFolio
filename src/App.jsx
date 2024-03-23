import React from "react";
import RootNavLayout from "./layout/RootNavLayout";
import { Header, ProjectsList, SkillList } from "./components";
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
      <RouterProvider router={router}></RouterProvider>
      <Header></Header>
      <ProjectsList></ProjectsList>
      <SkillList></SkillList>
    </>
  );
}

export default App;

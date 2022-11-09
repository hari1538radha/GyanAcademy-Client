import { Route, Routes } from "react-router-dom";
//Pages
import CoursePage from "./GyanAcademyPages/coursePage/CoursePage";
import CourseVideoPage from "./GyanAcademyPages/courseVideoPage/CourseVideoPage";
import CourseLibrary from "./GyanAcademyPages/courseLibraryPage/courseLibrary";
import HomePage from "./GyanAcademyPages/HomePage/HomePage";
import ApplicationForm from "./GyanAcademyPages/applicationForm/ApplicationForm";
//components
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div className="font-poppins">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/coursevideo" element={<CourseVideoPage />}></Route>
        <Route path="/Courses" element={<CoursePage />}></Route>
        <Route path="/applicationform" element={<ApplicationForm/>}></Route>
        <Route path="/courselibrary" element={<CourseLibrary />} exact></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

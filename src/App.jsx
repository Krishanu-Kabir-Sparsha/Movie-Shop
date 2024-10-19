// Learning few things
// import { Button } from "@nextui-org/react"
// import { HiAcademicCap } from "react-icons/hi";
// function App() {
//   return (
//     <>
//      <Button isLoading color="primary" size="lg" radius="full" variant="shadow" endContent={<HiAcademicCap/>} >Loading...</Button>
//     </>
//   )
// }
// export default App



import NavbarCMP from "./components/NavbarCMP"
import Layout from "./Layout/Layout";
import HomePage from "./page/HomePage";
import MoviesPage from "./page/MoviesPage";


////// Lets Start from  here

function App() {
  
  // console.log(movieList);
  
  return (
    <>
  
      <Layout>

      {/* <NavbarCMP/>
      <HomePage/>
      <MoviesPage/> */}
       
      </Layout>
    </>
  );
}
export default App
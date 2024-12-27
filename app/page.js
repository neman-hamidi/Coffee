import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Category from "./components/category/category";
import Newproduct from "./components/newproduct/newproduct";
import Berands from "./components/berands/berands";
import Discount from "./components/discount/discount";
import Articles from "./components/articles/articles";
import Footer from "./components/footer/footer";
export default function Home() {
  return (
   <>
   <Nav/>
   <Header/>
   <Category/>
   <Newproduct/>
   <Berands/>
   <Discount/>
   <Articles/>
   <Footer/>
   </>
  );
}

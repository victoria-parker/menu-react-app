import React, { useState } from "react";
import data from './data';
import Header from "./Header";
import Categories from "./Categories";
import Menu from "./Menu";
import Footer from "./Footer";

const allCategories= ['all', ...new Set(data.map(item=>item.category))]

function App() {

  const [menu,setMenu]=useState(data)
  const [activeCategory, setActiveCategory] = useState('all')

  const filterMenu =(category)=>{
    
    if(category === 'all'){
      setMenu(data)
      setActiveCategory('all')
      return;
    }
    const newMenu=data.filter((item)=>item.category === category)
    setMenu(newMenu)
    setActiveCategory(category)
  }

  return (
    <main>
      <Header/>
      <div className="container">
              <h2>Our Menu</h2>
           <Categories allCategories={allCategories} filterMenu={filterMenu} activeCategory={activeCategory}/> 
           
{            <Menu menu={menu}/>}
      </div>
      <Footer/>
    </main>
    
  );
}

export default App;

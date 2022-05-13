import React from "react";

export default function Categories({allCategories, filterMenu,activeCategory}){

    return (
        <div className="categories-btn-container">
            {allCategories.map((item,index)=>{
                
                return (
                <button 
                    key={index}
                    onClick={()=>filterMenu(item)}
                    className={activeCategory === item ? 'active-category' : ''}
                >
                    {item}
                </button>
                )
            })}
        </div>
    )
}
import React from "react";

export default function Menu({menu}){
    
    return (
        <section className="menu-container">
            {menu.map((item)=>{
                const {img,id,title,price,desc}=item
                return (
                    <article className="menu-item-container" key={id}>
                        <img src={img} alt={title} className="menu-item-img"/>
                        <div className="details">
                            <h4>{title}</h4>
                            <h4>{price}</h4>
                        </div>
                        <p>{desc}</p>
                    </article>
                )
            })}
        </section>
    )
}
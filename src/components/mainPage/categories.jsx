import React from 'react'

const Categories=()=> {
    return (
        <section className="categories">
            <div className="categories__body">
                <div className="categories__heading">
                    <h1 className="mainHeading">Popular Categories</h1>
                </div>
                <div className="categories__stuff">
                    
                    <div className="categories__item categories__item-1">
                    <div className="wrapper"></div>
                        <h1>T-shirts</h1>
                    </div>
                    
                    <div className="categories__item categories__item-2">
                    <div className="wrapper"></div>
                        <h1>Shirts</h1>
                    </div>
                    <div className="categories__item categories__item-3">
                    <div className="wrapper"></div>
                        <h1>Jeans</h1>
                    </div>
                    <div className="categories__item categories__item-4">
                    <div className="wrapper"></div>
                        <h1>Jackets & Coats</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories;

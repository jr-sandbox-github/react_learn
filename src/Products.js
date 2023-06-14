import React from 'react';

export default function Products() {
    return (<>
        <div>
            <h2>Products</h2>
            <SearchBar />
            <ProductTable />
        </div>
    </>);
}

//---------------------------------------

export function SearchBar() {
    return (
    <div>
        <div>
            <input type="text" id="search-text"/>
        </div>
        <div>
            <input type="checkbox" id="chk-products-only"/>
            <label for="chk-products-only">Show only products in stock</label>
        </div>
    </div>);
}

//---------------------------------------

export function ProductTable() {
    return (
    <div>
        <span><strong>Name</strong></span>
        <span> </span>
        <span><strong>Price</strong></span>
        <Category />
        <Category />
        <Category />
    </div>);
}

//---------------------------------------

export function Category() {
    return (
    <div>
        <CategoryHeader />
        <ProductRow />
        <ProductRow />
        <ProductRow />
    </div>);
}

//---------------------------------------

export function CategoryHeader() {
    return (
    <div>
        <strong>Category Header</strong>
    </div>);
}

//---------------------------------------

export function ProductRow() {
    return (
    <div>
        Product Row
    </div>);
}

//---------------------------------------

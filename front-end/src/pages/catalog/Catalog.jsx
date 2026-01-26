import "./Catalog.css";
import { Header } from "../../features/header";
import { Footer } from "../../features/footer";
import CatalogCategory from "../../components/catalogCategory/CatalogCategory";
import { Container } from "../../components/layout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useDispatch } from "react-redux";
import { setRoute } from "../../state/slices/routeSlice";
import Products from "../../components/products/Products";
import { AuthFormsLayout } from "../../features/auth/index";
import { useState } from "react";
import Filter from "../../components/catalogCategory/filter/Filter";

import { categories, products } from "../../data/constants";

function Catalog() {
    const [price, setPrice] = useState();
    const [filters, setFilters] = useState({});
    const [filteredProducts, setFilteredProducts] = useState(products);
    const dispatch = useDispatch();

    dispatch(
        setRoute({
            currentRoute: "/catalog",
            routes: { title: "Catalogue", path: "/catalog" },
        })
    );

    const filterProducts = () => {};

    return (
        <>
            <AuthFormsLayout />
            <Header />
            <main className="main catalog-container">
                <Container>
                    <Breadcrumbs />
                </Container>
                <Container>
                    <div className="catalog-layout">
                        <aside className="cats-aside">
                            <Filter />
                            {categories.map((cat, i) => (
                                <CatalogCategory
                                    key={i + 1}
                                    title={cat.title}
                                    items={cat.items ? cat.items : []}
                                    type={cat.type}
                                />
                            ))}
                        </aside>
                        <section className="catalog-products">
                            <Products products={filteredProducts} />
                        </section>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Catalog;

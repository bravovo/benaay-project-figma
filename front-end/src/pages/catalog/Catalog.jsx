import "./Catalog.css";
import { Header } from "../../features/header";
import { Footer } from "../../features/footer";
import CatalogCategory from "../../components/catalogCategory/CatalogCategory";
import { Container } from "../../components/layout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useDispatch } from "react-redux";
import { setRoute } from "../../state/slices/routeSlice";
import Products from "../../components/products/Products";

const items = [
    {
        name: "Item 1",
        count: 10,
    },
    {
        name: "Item 2",
        count: 5,
    },
    {
        name: "Item 3",
        count: 8,
    },
    {
        name: "Item 1",
        count: 10,
    },
    {
        name: "Item 2",
        count: 5,
    },
    {
        name: "Item 3",
        count: 8,
    },
    {
        name: "Item 1",
        count: 10,
    },
    {
        name: "Item 2",
        count: 5,
    },
    {
        name: "Item 3",
        count: 8,
    },
    {
        name: "Item 1",
        count: 10,
    },
    {
        name: "Item 2",
        count: 5,
    },
    {
        name: "Item 3",
        count: 8,
    },
    {
        name: "Item 1",
        count: 10,
    },
    {
        name: "Item 2",
        count: 5,
    },
    {
        name: "Item 3",
        count: 8,
    },
    {
        name: "Item 1",
        count: 10,
    },
    {
        name: "Item 2",
        count: 5,
    },
    {
        name: "Item 3",
        count: 8,
    },
];

const cats = [
    {
        title: "Category 1",
        type: "checkbox",
    },
    {
        title: "Category 2",
        type: "checkbox",
    },
    {
        title: "Price",
        type: "price",
    },
    {
        title: "Category 3",
        type: "checkbox",
    },
    {
        title: "Category 4",
        type: "checkbox",
    },
    {
        title: "Category 5",
        type: "checkbox",
    },
    {
        title: "Category 6",
        type: "checkbox",
    },
];

function Catalog() {
    const dispatch = useDispatch();

    dispatch(
        setRoute({
            currentRoute: "/catalog",
            routes: { title: "Catalogue", path: "/catalog" },
        })
    );

    return (
        <>
            <Header />
            <main className="main catalog-container">
                <Container>
                    <Breadcrumbs />
                </Container>
                <Container>
                    <div className="catalog-layout">
                        <aside className="cats-aside">
                            {cats.map((cat, i) => (
                                <CatalogCategory
                                    key={i + 1}
                                    title={cat.title}
                                    items={items}
                                    type={cat.type}
                                />
                            ))}
                        </aside>
                        <section className="catalog-products">
                            <Products />
                        </section>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Catalog;

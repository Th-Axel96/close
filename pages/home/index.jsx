import Layout from "../../src/compenents/layouts/layout";
import Axel from "./axel";
import Content from "./content";

const HomePage = () => {
    return (
        <>
            <h1>Home</h1>
            <Layout children={<Content />} />
            <Axel/>
        </>
    )
}

export default HomePage;


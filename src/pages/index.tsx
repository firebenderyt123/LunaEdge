import { NextPage } from "next";
import { Layout } from "@components/ordinary";
import { HugeSearch } from "@components/smart";

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <HugeSearch />
            </Layout>
        </>
    );
};

export default Home;

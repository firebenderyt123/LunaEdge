import { NextPage } from "next";
import { Layout } from "@components/simple";
import { HugeSearch, MovieList } from "@components/smart";

const Home: NextPage = () => {
    return (
        <>
            <Layout>
                <HugeSearch />
                <MovieList />
            </Layout>
        </>
    );
};

export default Home;

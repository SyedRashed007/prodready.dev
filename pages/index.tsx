import type { NextPage } from "next";
import Head from "next/head";
import RegisterEmail from "../components/RegisterEmail";

const Home: NextPage = () => {
  return (
    <div className="bg-darkbg h-auto w-max sm:w-full ">
      <div className="p-4">
        <Head>
          <title>React in Production</title>
          <meta
            name="description"
            content="Learn how to create a React app that is ready for production"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen p-4 flex flex-col justify-center items-center">
          <h1 className="font-black text-white text-5xl center text-yellow">
            React in Production
          </h1>

          <h2>Take your React skills to the next level</h2>
          <RegisterEmail />
        </main>

        <footer className="mt-96 sm:mt-0 max-h-screen flex p-4 border-t-2 border-gray-100 justify-center items-center">
          <div className="text-sm text-graytext">
            © 2021 Souvik Basu. All Rights Reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;

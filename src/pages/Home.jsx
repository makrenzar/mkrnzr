import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="min-h-screen px-8 py-10 flex justify-center">
        <div className="max-w-[1100px] w-full">
          <Header />
          <p className="mb-10 px-8 py-10 text-center">UNDER DEVELOPMENT</p>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

import Header from "../components/Header";
import Footer from "../components/Footer";
import mkrn from "../assets/makren.jpg";

function Home() {
  return (
    <>
      <div className="min-h-screen px-8 py-10 flex justify-center">
        <div className="max-w-2xl w-full">
          <Header />
          <div className="relative z-10 mb-16 flex animate-slideFromDownAndFade items-center">
            <div className="relative z-10">
              <div className="absolute left-0 top-0 -z-10 flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-primary-light-6 bg-primary-light-3 p-2 text-center text-[8px] text-primary-light-11 dark:border-primary-dark-6 dark:bg-primary-dark-3 dark:text-primary-dark-11"></div>
              <a href="/">
                <div
                  className="z-10 cursor-pointer"
                  draggable="false"
                  style={{
                    userSelect: "none",
                    touchAction: "none",
                    transform: "none",
                  }}
                >
                  <img
                    alt="Photo of Mark Lawrence Zaragoza"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="1"
                    className="pointer-events-none h-16 w-16 rounded-full"
                    src={mkrn}
                  />
                </div>
              </a>
            </div>
            <div className="ml-4">
              <h1 className="h1 mb-0.5 text-sm">
                <a href="/">Mark Lawrence Zaragoza</a>
              </h1>
              <p className="text-sm group relative inline-flex items-center justify-center overflow-hidden transition">
                <span>Frontend Developer</span>
              </p>
            </div>
          </div>
          <div className=" animate-slideFromDownAndFade [animation-delay:var(--animation-delay)]">
            <h2 className=" h2 mb-4 text-sm">About me</h2>
            <p className=" mb-2 text-sm para leading-6">
              Passionate about creating innovative and user-friendly websites. I
              focus on building engaging experiences that look great and perform
              smoothly.
            </p>
          </div>

          <div className="mt-16 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*2)]">
            <h2 className="h2 mb-4 text-sm">Now</h2>
            <p className="mb-2 para text-sm leading-6">
              Currently working as a Frontend Developer at
              <span className="text-[#f8f8f8]">
                &nbsp;Blaqbox Technology Corporation
              </span>
              .
            </p>
          </div>

          <div class="mt-16 animate-slideFromDownAndFade [animation-delay:calc(var(--animation-delay)*5)]">
            <h2 class="h2 mb-4 text-sm">Connect</h2>
            <p class="mb-7 para text-sm leading-6">
              Follow me on
              <a
                href="https://www.instagram.com/makrenzar/"
                target="_blank"
                class="text-[#f8f8f8] hover:underline ease-in duration-300"
                rel="noopener noreferrer"
              >
                &nbsp;Instagram
              </a>
              , view my code on
              <a
                href="https://github.com/makrenzar/"
                target="_blank"
                class="text-[#f8f8f8] hover:underline ease-in duration-300"
                rel="noopener noreferrer"
              >
                &nbsp;Github
              </a>
              , explore my
              <a
                href="https://read.cv/makrenzar"
                target="_blank"
                class="text-[#f8f8f8] hover:underline ease-in duration-300"
                rel="noopener noreferrer"
              >
                &nbsp;Readcv
              </a>
              &nbsp;profile, connect with me on
              <a
                href="https://facebook.com/makrenzar1"
                target="_blank"
                class=" text-[#f8f8f8] hover:underline ease-in duration-300"
                rel="noopener noreferrer"
              >
                &nbsp;Facebook
              </a>
              , or email me directly at
              <span class="ml-1">
                <span
                  class="relative cursor-pointer text-[#f8f8f8] hover:underline ease-in duration-300"
                  data-state="closed"
                >
                  markzaragoza301@gmail.com
                </span>
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

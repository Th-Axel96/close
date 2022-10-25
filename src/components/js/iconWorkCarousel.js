import Image from "next/image";
import IconHtml from "@src/assets/img/html.svg";
import IconCss from "@src/assets/img/css.svg";
import IconJs from "@src/assets/img/javascript.svg";
import IconNode from "@src/assets/img/nodejs.svg";
import IconTailwind from "@src/assets/img/tailwind.svg";
import IconBootstrap from "@src/assets/img/bootstrap.svg";
import IconWebpack from "@src/assets/img/webpack.svg";
import IconGit from "@src/assets/img/git.svg";
import IconNetlify from "@src/assets/img/netlify.svg";



export const IconWorkCarousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide relative pt-20"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          {/* ******** Carousel slider 1 *********** */}
          <div className="h-40">
            <h2 className="flex justify-center">Langages informatiques</h2>
            {/* div for groupe Icon language */}
            <div className="flex justify-center ">
              {/* div for BG icon 1 */}
              <div className="bg-gray-500 h-32 w-24 rounded-3xl hover:scale-110 transition duration-500 ease-in-out">
                {/* div for IconHTML */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconHtml} width="75px" height="75px" />
                  
                  <h2 className="">Html</h2>
                </div>
              </div>
              {/* div for BG icon 2 */}
              <div className="bg-gray-500 h-32 w-24 rounded-3xl hover:scale-110 transition duration-500 ease-in-out mx-2">
                {/* div for IconCSS */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconCss} width="75px" height="75px" />
                  <h2 className="">Css</h2>
                </div>
              </div>
              {/* div for BG icon 3 */}
              <div className="bg-gray-500 h-32 w-24 rounded-3xl hover:scale-110 transition duration-500">
                {/* div for IconJS */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconJs} width="65px" height="75px" />
                  <h2>Javascript</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          {/* *********** Carousel slider 2 *********** */}
          <div className="h-40">
            <h2 className="flex justify-center">Framework</h2>
            {/* div for groupe Icon FrameWork */}
            <div className="flex justify-center ">
              {/* div for BG icon 1 */}
              <div className=" bg-gray-500 h-32 w-24 rounded-3xl hover:scale-110 transition duration-500">
                {/* div for IconNodeJS */}
                <div className="flex flex-col items-center justify-center h-32 ">
                  <Image src={IconNode} width="75px" height="75px" />
                  <h2 className="">NodeJS</h2>
                </div>
              </div>
              {/* div for BG icon 2 */}
              <div className="bg-gray-500 h-32 w-24 rounded-3xl mx-2 hover:scale-110 transition duration-500">
                {/* div for IconTailwind */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconTailwind} width="75px" height="75px" />
                  <h2 className="">Tailwind</h2>
                </div>
              </div>
              {/* div for BG icon 3 */}
              <div className="bg-gray-500 h-32 w-24 rounded-3xl hover:scale-110 transition duration-500">
                {/* div for IconBootstrap */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconBootstrap} width="65px" height="75px" />
                  <h2>Bootstrap</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          {/*  div for parents Icon */}
          <div className="h-40">
            <h2 className="flex justify-center">Outils</h2>
            {/* div for groupe Icon Outils */}
            <div className="flex justify-center ">
              {/* div for BG icon 1 */}
              <div className=" bg-gray-500 h-32 w-24 rounded-3xl hover:scale-110 transition duration-500">
                {/* div for IconWebpack */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconWebpack} width="75px" height="75px" />
                  <h2 className="">Webpack</h2>
                </div>
              </div>
              {/* div for BG icon 2 */}
              <div className="bg-gray-500 h-32 w-24 rounded-3xl mx-2 hover:scale-110 transition duration-500">
                {/* div for IconGit */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconGit} width="75px" height="75px" />
                  <h2 className="">Git</h2>
                </div>
              </div>
              {/* div for BG icon 3 */}
              <div className="bg-gray-500 h-32 w-24 rounded-3xl hover:scale-110 transition duration-500">
                {/* div for IconJS */}
                <div className="flex flex-col items-center justify-center h-32">
                  <Image src={IconNetlify} width="65px" height="75px" />
                  <h2>netlify</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

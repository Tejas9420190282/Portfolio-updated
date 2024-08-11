import React from "react";
import ABC from "../assets/ABC.png";
import code_editor from "../assets/code_editor.png";
import chat_app_img from "../assets/chat_app_img.png";
function Portfolio() {
  const codeEditorLIveDemo = () => {
    window.open("https://code-editor-9bac9c.netlify.app/");
  };

  const gitCodeEditor = () => {
    window.open("https://github.com/Tejas9420190282/code_editor_project");
  };

  const appChatLIveDemo = () => {
    window.open("https://chats-app-project.netlify.app/");
  };

  const gitChatApp = () => {
    window.open("https://github.com/Tejas9420190282/React_Chat_App_Project.git");
  };

  

  return (
    <>
      <div id="portfolio">
        <p className="text-[#9D9DA6] font-semibold mt-28 text-md flex justify-center items-center">
          My Recent Work
        </p>
        <p className="text-[#49A7EC] text-3xl mt-2 font-bold flex justify-center">
          Portfolio
        </p>

        <div className="md:flex mt-10 md:justify-center md:items-center ">
          <div className="bg-[#2C2C6C] md:mr-5 h-96 w-80 md:w-[390px] md:h-[461px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
            <div className="flex justify-center items-center">
              <img
                src={code_editor}
                className="h-[200px] w-[250px] mt-7 md:h-[280px] md:w-[320px] rounded-2xl"
              />
            </div>
            <p className="mt-6 text-left ml-8 text-2xl font-bold">
              Code Editor
            </p>
            <div className="flex justify-center gap-5 mt-5">
              <button
                className="bg-[#2C2C6C] text-[#49A7EC] border-[#49A7EC] font-semibold hover:bg-white hover:text-black hover:border-none"
                onClick={gitCodeEditor}
              >
                github
              </button>
              <button
                className="bg-[#49A7EC] text-black font-semibold hover:bg-white"
                onClick={codeEditorLIveDemo}
              >
                Live Demo
              </button>
            </div>
          </div>

          <div className="bg-[#2C2C6C] md:ml-5 h-96 w-80 md:w-[390px] md:h-[461px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
            <div className="flex justify-center items-center">
              <img
                src={chat_app_img}
                className="h-[200px] w-[250px] mt-7 md:h-[280px] md:w-[320px] rounded-2xl"
              />
            </div>
            <div className="flex">
              <p className="mt-6 text-left ml-8 text-2xl font-bold">
                Chatting app
              </p>
              <p className="mt-7 text-left ml-2 ">(use Desktop mode 😅)</p>
            </div>

            <div className="flex justify-center gap-5 mt-5 ">
              <button className="bg-[#2C2C6C] text-[#49A7EC] border-[#49A7EC] font-semibold hover:bg-white hover:text-black hover:border-none"
                onClick={gitChatApp}
              >
                github
              </button>
              <button
                className="bg-[#49A7EC] text-black font-semibold hover:bg-white"
                onClick={appChatLIveDemo}
              >
                Live Demo
              </button>
            </div>            
          </div>
        </div>
{/*   Project3
        <div className="md:flex justify-center md:mt-10">
          <div className="bg-[#2C2C6C] h-96 w-80 md:w-[390px] md:h-[461px] mt-10 md:mt-0 rounded-3xl hover:bg-[#1F1F38] hover:border-2 hover:border-[#49A7EC]">
            <div className="flex justify-center items-center">
              <img
                src={ABC}
                className="h-[200px] w-[250px] mt-7 md:h-[280px] md:w-[320px] rounded-2xl"
              />
            </div>
            <p className="mt-8 text-left ml-8 text-xl">Project Name3</p>
            <div className="flex justify-center gap-5 mt-5">
              <button className="bg-[#2C2C6C] text-[#49A7EC] border-[#49A7EC] font-semibold hover:bg-white hover:text-black hover:border-none">
                github
              </button>
              <button className="bg-[#49A7EC] text-black font-semibold hover:bg-white">
                Live Demo
              </button>
            </div>
          </div>
        </div>
 */}        
      </div>
    </>
  );
}

export default Portfolio;

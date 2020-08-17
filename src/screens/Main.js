import React, { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import More from "./More/More";
import jsonData from "../service/data.json";
import "./Main.css";

const defaultLanguage = "EN";
const defaultSection = "about";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [visibleSection, setVisibleSection] = useState(defaultSection);
  const data = jsonData[selectedLanguage];

  const languageClickHandler = (language) => {
    if (jsonData[language]) {
      setSelectedLanguage(language);
    }
  };

  const changeScroll = (section) => {
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
      if (data.menu.findIndex((item) => item.id === section) === 0) {
        window.scrollTo(0, 0);
      } else {
        selectedSection.scrollIntoView();
      }
    }
  };

  const selectSectionHandler = (section) => {
    if (section !== visibleSection) {
      setVisibleSection(section);
      changeScroll(section);
    }
  };

  const onChangeVisibility = (isVisible, id) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  return (
    <div className="Main">
      {data && (
        <>
          <Menu
            menuItems={data.menu}
            language={selectedLanguage}
            languageClickHandler={languageClickHandler}
            languageItems={jsonData.languages}
            selectedItem={visibleSection}
            selectItemHandler={selectSectionHandler}
          />
          <div className="page">
            <Header {...data.header} id={defaultSection} />
            <About
              data={data.sections[0]}
              onChangeVisibility={onChangeVisibility}
            />
            <Skills
              data={data.sections[1]}
              onChangeVisibility={onChangeVisibility}
            />
            <Works
              data={data.sections[2]}
              media={jsonData.talks}
              onChangeVisibility={onChangeVisibility}
            />
            <More
              data={data.sections[3]}
              onChangeVisibility={onChangeVisibility}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;

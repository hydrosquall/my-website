import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Menu from "../components/Menu";
import Section from "../components/Section";
import Header from "../components/Header";
import jsonData from "../service/data.json";
import "./Main.css";

const defaultLanguage = "EN";
const defaultSection = "about";

const Main = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [visibleSection, setVisibleSection] = useState(defaultSection);
  const data = jsonData[selectedLanguage];

  const languageClickHandler = language => {
    if (jsonData[language]) {
      setSelectedLanguage(language);
    }
  }

  const changeScroll = section => {
     const selectedSection = document.getElementById(section);
     if (selectedSection) {
       if(data.menu.findIndex(item => item.id === section) === 0){
          window.scrollTo(0, 0);
       }
       else {
        selectedSection.scrollIntoView();
       }
     }
  }

  const selectSectionHandler = section => {
    if (section !== visibleSection) {
      setVisibleSection(section);
      changeScroll(section);
    }
  }

  const onChangeVisibility = (isVisible, id) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  const sections = data && data.sections && data.sections.map((item, index) => {
    return (
      <VisibilitySensor
        scrollCheck={true}
        partialVisibility={true}
        onChange={(isVisible) => onChangeVisibility(isVisible, item.id)}
        key={index}
      >
        <Section {...item} />
      </VisibilitySensor>
    );
  });
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
            <Header {...data.header} id={defaultSection}/>
            {sections}
          </div>
        </>
      )}
    </div>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Menu, Header, Footer, LastNews} from "../components";
import { About, Skills, Works, More } from "./index";
import jsonData from "../service/data.json";
import "./Main.css";
import {LOCALES, DEFAULT_LOCALE, DEFAULT_SECTION} from '../service/constants';

const Main = ({isArticle}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LOCALE);
  const [visibleSection, setVisibleSection] = useState(DEFAULT_SECTION);
  const data = jsonData[selectedLanguage];
  const { locale } = useParams();
  const history = useHistory();

  useEffect(() => {
    setSelectedLanguage(locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
  },[locale]);

  const languageClickHandler = (language) => {
    if (jsonData[language]) {
      const newPath = history.location.path || history.location.pathname;
      history.replace({
        path: newPath,
        pathname: `${language === DEFAULT_LOCALE ? newPath : '/'.concat(language.concat(newPath))}`
      })
    }
  };

  const changeScroll = (section) => {
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: 'smooth'});
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
            <Header {...data.header} id={DEFAULT_SECTION} />
            <LastNews content={data.header.lastNews} id={DEFAULT_SECTION} />
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
          <Footer data={data.webSiteInfo} />
        </>
      )}
    </div>
  );
};

export default Main;

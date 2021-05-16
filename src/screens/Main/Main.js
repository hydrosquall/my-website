import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as PropTypes from 'prop-types';
import {
  Menu, Header, Footer, /* LastNews, */
} from '../../components';
import {
  About, Skills, Works, More, Article, Microsoft,
} from '../index';
import {
  jsonData, constants, articleData, microsoftData,
} from '../../service';
import './Main.css';

const PAGES = {
  article: {
    component: Article, data: articleData,
  },
  microsoft: { component: Microsoft, data: microsoftData },
};

const { LOCALES, DEFAULT_LOCALE, DEFAULT_SECTION } = constants;

const Main = ({ page, section }) => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LOCALE);
  const [visibleSection, setVisibleSection] = useState(DEFAULT_SECTION);
  const data = jsonData[selectedLanguage];
  const { locale } = useParams();
  const history = useHistory();

  const scrollToSection = (sectionToGo) => {
    const selectedSection = document.getElementById(sectionToGo);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectSectionHandler = (sectionToSelect) => {
    if (sectionToSelect !== visibleSection) {
      setVisibleSection(sectionToSelect);
      scrollToSection(sectionToSelect);
    }
  };

  useEffect(() => {
    const l = locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
    i18n.changeLanguage(l);
    setSelectedLanguage(l);
    selectSectionHandler(section || DEFAULT_SECTION);
  }, [locale]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const getPath = (language, search) => {
    const pathname = language === DEFAULT_LOCALE ? '/' : language;
    return { pathname, search };
  };

  const languageClickHandler = (language) => {
    if (jsonData[language]) {
      history.push(getPath(language, page ? `?page=${page}` : ''));
    }
    scrollToTop();
  };

  const menuItemClickHandler = (item) => {
    selectSectionHandler(item);
    history.push(getPath(selectedLanguage, item === DEFAULT_SECTION ? '' : `?section=${item}`));
  };

  const onChangeVisibility = (isVisible, id) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  const goTo = (queryValue) => {
    scrollToTop();
    history.push(getPath(selectedLanguage, queryValue));
  };

  const renderPage = (pageName) => {
    const pageObject = PAGES[pageName];
    if (pageObject) {
      const { component: PageComponent, data: pageData } = pageObject;
      return <PageComponent data={pageData[selectedLanguage]} />;
    }
    return <></>;
  };

  return (
    <div className="Main">
      {data && (
        <>
          <Menu
            menuItems={page ? [] : jsonData.menuItems}
            language={selectedLanguage}
            languageClickHandler={languageClickHandler}
            languageItems={jsonData.languages}
            selectedItem={page ? '' : visibleSection}
            selectItemHandler={page ? () => goTo() : menuItemClickHandler}
            closable={Boolean(page)}
          />
          <div className="page">
            { page ? renderPage(page)
              : (
                <div className="resume">
                  <Header
                    id={DEFAULT_SECTION}
                  />
                  {/* <LastNews
                    content={data.header.lastNews}
                    id={DEFAULT_SECTION}
                    goToArticle={() => goTo('?page=article')}
                  /> */}
                  <About
                    id="about"
                    onChangeVisibility={onChangeVisibility}
                    isVisible={visibleSection === 'about'}
                  />
                  <Skills
                    id="skills"
                    onChangeVisibility={onChangeVisibility}
                    isVisible={visibleSection === 'skills'}
                  />
                  <Works
                    data={data.sections[0]}
                    media={jsonData.talks}
                    onChangeVisibility={onChangeVisibility}
                    isVisible={data.sections[0].id === visibleSection}
                    goToMicrosoft={() => goTo('?page=microsoft')}
                  />
                  <More
                    data={data.sections[1]}
                    onChangeVisibility={onChangeVisibility}
                    isVisible={data.sections[1].id === visibleSection}
                  />
                </div>
              )}
          </div>
          <Footer data={data.webSiteInfo} />
        </>
      )}
    </div>
  );
};

Main.propTypes = {
  page: PropTypes.string,
  section: PropTypes.string,
};

export default Main;

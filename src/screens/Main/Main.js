import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import {
  Menu, Header, Footer, LastNews, Article,
} from '../../components';
import {
  About, Skills, Works, More,
} from '../index';
import jsonData from '../../service/data.json';
import { LOCALES, DEFAULT_LOCALE, DEFAULT_SECTION } from '../../service/constants';
import * as articleData from '../../service/articles';
import './Main.css';

const Main = ({ page }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LOCALE);
  const [visibleSection, setVisibleSection] = useState(DEFAULT_SECTION);
  const data = jsonData[selectedLanguage];
  const { locale } = useParams();
  const history = useHistory();

  useEffect(() => {
    setSelectedLanguage(locale && LOCALES.includes(locale) ? locale : DEFAULT_LOCALE);
  }, [locale]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (section) => {
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPath = (language, queryPage) => {
    const pathname = language === DEFAULT_LOCALE ? '/' : language;
    return queryPage ? { pathname, search: `?page=${queryPage}` } : { pathname };
  };

  const languageClickHandler = (language) => {
    // eslint-disable-next-line no-debugger
    if (jsonData[language]) {
      history.push(getPath(language, page));
    }
    scrollToTop();
  };

  const selectSectionHandler = (section) => {
    if (section !== visibleSection) {
      setVisibleSection(section);
      scrollToSection(section);
    }
  };

  const onChangeVisibility = (isVisible, id) => {
    if (isVisible) {
      setVisibleSection(id);
    }
  };

  const goTo = (pageQuery) => {
    history.push(getPath(selectedLanguage, pageQuery));
    scrollToTop();
  };

  return (
    <div className="Main">
      {data && (
        <>
          <Menu
            menuItems={page ? [] : data.menu}
            language={selectedLanguage}
            languageClickHandler={languageClickHandler}
            languageItems={jsonData.languages}
            selectedItem={page ? '' : visibleSection}
            selectItemHandler={page ? () => goTo('') : selectSectionHandler}
            closeData={page && data.menuClosable}
          />
          <div className="page">
            { page === 'article'
              ? <Article data={articleData[selectedLanguage]} />
              : (
                <div className="resume">
                  <Header {...data.header} id={DEFAULT_SECTION} />
                  <LastNews
                    content={data.header.lastNews}
                    id={DEFAULT_SECTION}
                    goToArticle={() => goTo('article')}
                  />
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
};

export default Main;

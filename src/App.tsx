import Footer from './components/Footer';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import NewsFeedSpace from './components/Footer';
import AppContainer from './components/AppContainer';
import MiddleSection from './components/MiddleSection';

const App = () => {

  return (
    <AppContainer>
      <Header />
      <MiddleSection>
        <NewsFeedSpace />
        <SideMenu />
      </MiddleSection>
      <Footer />
    </AppContainer>
  );
};

export default App;
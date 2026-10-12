import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import Story from './components/Story/Story.jsx';
import MenuCategories from './components/MenuCategories/MenuCategories.jsx';
import Branches from './components/Branches/Branches.jsx';
import Social from './components/Social/Social.jsx';
import FinalCTA from './components/FinalCTA/FinalCTA.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return <>
    <Header />
    <main>
      <Hero />
      <Benefits />
      <Story />
      <MenuCategories />
      <Branches />
      <Social />
      <FinalCTA />
    </main>
    <Footer />
  </>;
}

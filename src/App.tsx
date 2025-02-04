import { AboutMe, Contacts, Header, Projects } from './components';

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <AboutMe />
      <Projects />
      <Contacts />
      <footer className="text-center py-10">
        <p className="text-sm">Develop by Timur</p>
      </footer>
    </div>
  );
}

export default App;

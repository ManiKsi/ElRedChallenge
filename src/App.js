import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import AppProvider from "./Context";

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Header username='Mani' cartCount={200} />
        <section className='px-5 gap-5 mt-20 flex'>
          <Sidebar />
          <Main />
        </section>
      </AppProvider>
    </div>
  );
}

export default App;

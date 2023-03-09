import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import AppProvider from "./Context";

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Header username='Mani' cartCount={200} />
        <section className='md:px-5 px-3 md:gap-5 gap-2 md:mt-20  mt-14 pt-1 md:pt-0 flex  ml-16 md:m-0 mb-4'>
          <Sidebar />
          <Main />
        </section>
      </AppProvider>
    </div>
  );
}

export default App;

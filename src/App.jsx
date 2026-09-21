import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './styles.css';
import UserList from './components/UserList.jsx';
import UserSearch from './components/UserSearch.jsx';
import Pagination from './components/Pagination.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <UserSearch />

          <UserList />

          <Pagination />
        </section >
      </main>

      <Footer />
    </>
  )
}

export default App

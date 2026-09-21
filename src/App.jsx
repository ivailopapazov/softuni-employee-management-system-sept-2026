import { useState, useEffect } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import UserList from './components/UserList.jsx';
import UserSearch from './components/UserSearch.jsx';
import Pagination from './components/Pagination.jsx';
import './styles.css';
import SaveUserModal from './components/SaveUserModal.jsx';

function App() {
    const [users, setUsers] = useState([]);
    const [showSaveUserModal, setShowSaveUserModal] = useState(false);

    useEffect(() => {
        // Fetch users from an API or other source
        fetch('https://wqbswfpqjgpicubvimbh.supabase.co/rest/v1/users', {
            headers: {
                'apikey': 'sb_publishable_aO_n-_rJOWzVwaQsy-qPgw_i3fSlh_m'
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const addUserClickHandler = () => {
        setShowSaveUserModal(true);
    };

    const addUserCloseHandler = () => {
        setShowSaveUserModal(false);
    };

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <UserSearch />

                    <UserList users={users} />

                    <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button >

                    {showSaveUserModal && <SaveUserModal onClose={addUserCloseHandler} />}

                    <Pagination />
                </section >
            </main>

            <Footer />
        </>
    )
}

export default App

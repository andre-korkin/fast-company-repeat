import {useState, useEffect} from "react";
import API from "./api";
import UserList from './components/userList';
import TopStatus from "./components/topStatus";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";
import GroupList from "./components/groupList";


const App = () => {
    const initialUsers = API.users.fetchAll();
    const usersWithBookmarks = initialUsers.map(user => {
        user.bookmark = false;
        return user
    })
    const [users, setUsers] = useState(usersWithBookmarks);
    const [currentPage, setPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        API.professions().then(data => setProfessions(data))
    }, []);

    useEffect(() => {
        setPage(1)
    }, [selectedProf]);

    const pageCountSize = 4;

    const filteredUsers = selectedProf ? users.filter(user => user.profession === selectedProf) : users;
    const usersCount = filteredUsers.length;
    const usersCrop = paginate(filteredUsers, currentPage, pageCountSize);

    const handleDelete = (id) => {
        setUsers(prevState => prevState.filter(user => user._id !== id))
    };

    const handleToggleBookmark = (id) => {
        const newUsers = users.map(user => {
            const newUser = {...user};
            if (user._id === id) {
                newUser.bookmark = !user.bookmark;
            }
            return newUser
        });
        setUsers(newUsers)
    };
    
    const handlePageChange = (numPage) => {
        setPage(numPage)
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item)
    };

    const handleResetProfessionSelect = () => {
        setSelectedProf()
    };

    return (
        <div className="d-flex flex-rows p-3">
            {professions && (
                <div className="d-flex flex-column p-3">
                    <GroupList items={professions} selectedItem={selectedProf} onItemSelect={handleProfessionSelect} />
                    <button className="btn btn-secondary mt-2" onClick={handleResetProfessionSelect}>Сброс фильтра</button>
                </div>
            )}
            <div className="d-flex flex-column p-3">
                <TopStatus count={usersCount} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserList users={usersCrop} onDelete={handleDelete} onToggle={handleToggleBookmark} />
                    </tbody>
                </table>
                <Pagination count={usersCount} size={pageCountSize} page={currentPage} onChange={handlePageChange} />
            </div>
        </div>
    );
};


export default App;

import {useState, useEffect} from "react";
import API from "./api";
import UsersTable from "./components/usersTable";
import TopStatus from "./components/topStatus";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";
import GroupList from "./components/groupList";
import _ from "lodash";


const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        async function fetchData() {
            setUsers(await API.users())
        };
        fetchData()
    }, [])
    
    const [professions, setProfessions] = useState();
    useEffect(() => {
        async function fetchData() {
            setProfessions(await API.professions())
        };
        fetchData()
    }, [])

    const [currentPage, setPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => setPage(1), [selectedProf]);

    const pageCountSize = 4;

    const [sorting, setSorting] = useState({iter: 'name', order: 'asc'});

    const filteredUsers = users && selectedProf ? users.filter(user => user.profession._id === selectedProf._id) : users;
    const sortedUsers = _.orderBy(filteredUsers, [sorting.iter], [sorting.order]);
    const usersCount = filteredUsers ? filteredUsers.length : 0;
    const usersCrop = filteredUsers ? paginate(sortedUsers, currentPage, pageCountSize) : [];


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

    const handleSort = (column) => {
        if (sorting.iter === column) {
            setSorting(prevState => ({...prevState, order: prevState.order === 'asc' ? 'desc' : 'asc'}))
        }
        else {
            setSorting({iter: column, order: 'asc'})
        }
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
                {users && <TopStatus count={usersCount} />}
                {users && <UsersTable users={usersCrop} onSort={handleSort} onDelete={handleDelete} onToggle={handleToggleBookmark} />}
                <Pagination count={usersCount} size={pageCountSize} page={currentPage} onChange={handlePageChange} />
            </div>
        </div>
    );
};


export default App;

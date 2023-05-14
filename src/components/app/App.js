import JobsItem from "../jobs/jobsItem/JobsItem";
import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import Filter from "../filter/Filter";
import FavoriteVacancy from "../activeVacancy/FavoriteVacancy";
import './App.scss';
import JobService from "../services/JobService";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    const jobService = new JobService();
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);
    const [dataFromFilter, setDataFromFilter] = useState({
        keyValue: "",
        salaryFrom: "",
        salaryTo: "",
    });
    const [vacancyList, setVacancyList] = useState([]);

    const onToggleVacancy = (vacancy) => {
        setVacancyList(vacancy);
    };
//посмотреть мини баг при котором в поиске вакансий слетает звездочка (это происходит при перезаписи новых вакансий с сервера)

    useEffect(() => {
        jobService.getCatalogues().then((catalogues) => {
            setData(catalogues.name);
            setKeys(catalogues.keys);
        });
        jobService.getVacancies().then((vacancy) => setVacancyList(vacancy));
    }, []);

    const handleData = (newData) => {
        setDataFromFilter(newData);
    };

    const handleClickStar = (id) => {
        setVacancyList(prevState => {
            const updatedList = prevState.map(item => {
                if (item.id == id ) {
                    return {...item, [id]: !item[id]};
                }
                return item;
            });
            return updatedList;
        });
    };

    const onSetLocalStorage = (item) => {
        (!item[item.id])
            ? localStorage.setItem(`${item.id}`, `${JSON.stringify(item)}`)
            : localStorage.removeItem(`${item.id}`);
    }

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={
                        <>
                            <Header />
                            <Jobs
                                dataFromFilter={dataFromFilter}
                                vacancyList={vacancyList}
                                onToggleVacancy={onToggleVacancy}
                                handleClickStar={handleClickStar}
                                onSetLocalStorage={onSetLocalStorage}
                            />
                            <Filter options={data} keys={keys} onData={handleData} />
                        </>}/>
                    <Route path="/id/:id" element={<JobsItem vacancyList={vacancyList}/>} />
                    <Route path="/favorites" element={
                        <>
                            <Header />
                            <FavoriteVacancy vacancyList={vacancyList}
                                             onToggleVacancy={onToggleVacancy}
                                             handleClickStar={handleClickStar}/>
                        </> } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


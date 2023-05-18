import JobsItem from "../jobs/jobsItem/JobsItem";
import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import Filter from "../filter/Filter";
import FavoriteVacancy from "../favoriteVacancy/FavoriteVacancy";
import './App.scss';
import JobService from "../services/JobService";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Empty from "../empty/Empty";
import Spinner from "../spinner/Spinner";
//стили пересмотри, можно половину удалить
//еще фавиконку
//сделай шаг в тысячу при клике на от и до
//посмотреть мини баг при котором в поиске вакансий слетает звездочка (это происходит при перезаписи новых вакансий с сервера)
//сделать кнопку сброс всего
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
    const [totalVacancies, setTotalVacancies] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [profNameValue, setProfNameValue] = useState('');
    const onToggleVacancy = (vacancy) => {
        setVacancyList(vacancy.vacancies);
        setTotalVacancies(vacancy.totalVacancies);
    };
    const mainRequest = (page) => {
        onLoading();
        jobService.getVacancies(profNameValue,
            dataFromFilter.salaryFrom,
            dataFromFilter.salaryTo,
            dataFromFilter.keyValue,
            page-1)
            .then((vacancy) => {
            setVacancyList(vacancy.vacancies);
            setTotalVacancies(vacancy.totalVacancies);
            setIsLoading(false)});
    }

    useEffect(() => {
        jobService.getToken();
        jobService.getCatalogues().then((catalogues) => {
            setData(catalogues.name);
            setKeys(catalogues.keys);
        });
        mainRequest(1);
    }, []);

    const onLoading = () => {
        setIsLoading(true);
    }
    const onOffLoading = () => {
        setIsLoading(false);
    }
    const handleData = (newData) => {
        setDataFromFilter(newData);
    };

    const handleProfNameValue = (e) => {
        setProfNameValue(e);
    }

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
                        <>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Header />

                                        {(isLoading) ? <Spinner/> : <><Jobs
                                            dataFromFilter={dataFromFilter}
                                            vacancyList={vacancyList}
                                            onToggleVacancy={onToggleVacancy}
                                            handleClickStar={handleClickStar}
                                            onSetLocalStorage={onSetLocalStorage}
                                            totalVacancies={totalVacancies}
                                            isLoading={isLoading}
                                            handleProfNameValue={handleProfNameValue}
                                            profNameValue={profNameValue}
                                            onLoading={onLoading}
                                            onOffLoading={onOffLoading}
                                            mainRequest={mainRequest}
                                        />
                                            <Filter options={data} keys={keys} onData={handleData} />
                                        </>}
                                    </>
                                }
                            />
                            <Route
                                path="/id/:id"
                                element={<JobsItem vacancyList={vacancyList} />}
                            />
                            <Route
                                path="/favorites"
                                element={
                                    <>
                                        <Header />
                                        <FavoriteVacancy
                                            vacancyList={vacancyList}
                                            onToggleVacancy={onToggleVacancy}
                                            handleClickStar={handleClickStar}
                                        />
                                    </>
                                }
                            />
                        </>
                </Routes>
            </div>
        </Router>
    );
};

export default App;


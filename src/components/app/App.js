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
import {Pagination} from "@mantine/core";
//стили пересмотри, можно половину удалить еще фавиконку
//сделай шаг в тысячу при клике на от и до в компоненте filter
//посмотреть мини баг при котором в поиске вакансий слетает звездочка (это происходит при перезаписи новых вакансий с сервера)
//добавь empty компонент чтобы отображался если ничего не найдено
//и при вызова нового запроса поставить действие чтобы пагинация становилась с первого числа
//стили в фэйворитс для пагинации поменяйн
//пагинация постраничкам в фэйворитс баг когда удаляешь на последней странице
const App = () => {
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);
    const [vacancyList, setVacancyList] = useState([]);
    const [totalVacancies, setTotalVacancies] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [profNameValue, setProfNameValue] = useState('');
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [keyValue, setKeyValue] = useState('');

    const jobService = new JobService();
    const mainRequest = (page) => {
        setIsLoading(true);
        jobService.getVacancies(profNameValue,
            salaryFrom,
            salaryTo,
            keyValue,
            page-1)
            .then((vacancy) => {
            setVacancyList(vacancy.vacancies);
            setTotalVacancies(vacancy.totalVacancies);
            setIsLoading(false)
            });
    }

    useEffect(() => {
        jobService.getToken();
        jobService.getCatalogues().then((catalogues) => {
            setData(catalogues.name);
            setKeys(catalogues.keys);
        });
        mainRequest(1);
    }, []);

    const onEmpty = () => {
        setInputValue('');
        setSalaryFrom('');
        setSalaryTo('');
        setProfNameValue('');
    }

    const handleProfNameValue = (e) => {
        setProfNameValue(e);
    }

    const handleSalaryFrom = (e) => {
        setSalaryFrom(e);
    }

    const handleSalaryTo = (e) => {
        setSalaryTo(e);
    }

    const handleValue = (e) => {
        setInputValue(e);
        setKeyValue(keys[data.indexOf(e)]);
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
        (item[item.id])
            ? localStorage.removeItem(`${item.id}`)
            : localStorage.setItem(`${item.id}`, `${JSON.stringify(item)}`);
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
                                        <Filter options={data} keys={keys}
                                        mainRequest={mainRequest}
                                                handleValue={handleValue}
                                                handleSalaryFrom={handleSalaryFrom}
                                                handleSalaryTo={handleSalaryTo}
                                                onEmpty={onEmpty}
                                                inputValue={inputValue}
                                                salaryFrom={salaryFrom}
                                                salaryTo={salaryTo}/>
                                        {(isLoading) ? <Spinner/> : <><Jobs
                                            vacancyList={vacancyList}
                                            handleClickStar={handleClickStar}
                                            onSetLocalStorage={onSetLocalStorage}
                                            handleProfNameValue={handleProfNameValue}
                                            mainRequest={mainRequest}
                                            profNameValue={profNameValue}
                                        />
                                        </>}
                                        <Pagination
                                            total={Math.ceil(totalVacancies / 4)}
                                            onChange={mainRequest}
                                        />
                                    </>
                                }
                            />
                            <Route
                                path="/id/:id"
                                element={<JobsItem vacancyList={vacancyList} />}
                            />
                            <Route path="/favorites" element={
                                    <>
                                        <Header />
                                        <FavoriteVacancy
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


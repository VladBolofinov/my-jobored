import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Pagination} from "@mantine/core";

import {JobsItem} from "../jobs/jobsItem/JobsItem";
import {Header} from "../header/Header";
import {Jobs} from "../jobs/Jobs";
import {Filter} from "../filter/Filter";
import {FavoriteVacancy} from "../favoriteVacancy/FavoriteVacancy";
import {Empty} from "../empty/Empty";
import {Spinner} from "../spinner/Spinner";
import JobService from "../../services/JobService";
import './App.scss';

import {useDispatch, useSelector} from 'react-redux';
import {onLoadingData} from "../../actions";

export const App = () => {
    const dispatch = useDispatch();


    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);
    const [vacancyList, setVacancyList] = useState([]);
    const [totalVacancies, setTotalVacancies] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [profNameValue, setProfNameValue] = useState('');//
    const [salaryFrom, setSalaryFrom] = useState('');//
    const [salaryTo, setSalaryTo] = useState('');//
    const [inputValue, setInputValue] = useState('');//
    const [keyValue, setKeyValue] = useState('');
    const [emptyPage, setEmptyPage] = useState(false);

    const jobService = new JobService();

    const onDeleteFilter= () => {
        setInputValue('');
        setSalaryFrom('');
        setSalaryTo('');
        setProfNameValue('');
    }
    const mainRequest = (page) => {
        //setIsLoading(true);
        dispatch(onLoadingData(true));
        jobService.getVacancies(profNameValue,
            salaryFrom,
            salaryTo,
            keyValue,
            page-1)
            .then((vacancy) => {
            setVacancyList(vacancy.vacancies);
            setTotalVacancies(vacancy.totalVacancies);
            (vacancy.totalVacancies) ? setEmptyPage(false) : setEmptyPage(true);
            dispatch(onLoadingData(false));
            //setIsLoading(false)
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

    const onEmptyPage = () => {
        setEmptyPage(false);
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
                                        {!emptyPage ? (
                                            <>
                                                <Filter
                                                    options={data}
                                                    keys={keys}
                                                    mainRequest={mainRequest}
                                                    handleValue={handleValue}
                                                    handleSalaryFrom={handleSalaryFrom}
                                                    handleSalaryTo={handleSalaryTo}
                                                    onDeleteFilter={onDeleteFilter}
                                                    inputValue={inputValue}
                                                    salaryFrom={salaryFrom}
                                                    salaryTo={salaryTo}
                                                />
                                                {isLoading ? (
                                                    <Spinner />
                                                ) : (
                                                    <>
                                                        <Jobs
                                                            vacancyList={vacancyList}
                                                            handleClickStar={handleClickStar}
                                                            onSetLocalStorage={onSetLocalStorage}
                                                            handleProfNameValue={handleProfNameValue}
                                                            mainRequest={mainRequest}
                                                            profNameValue={profNameValue}
                                                        />
                                                    </>
                                                )}
                                                <Pagination
                                                    total={Math.ceil(totalVacancies / 4)}
                                                    onChange={mainRequest}
                                                />
                                            </>
                                        ) : (
                                            <Empty onEmptyPage={onEmptyPage}
                                                   onDeleteFilter={onDeleteFilter}/>
                                        )}
                                    </>
                                }
                            />
                            <Route
                                path="/id/:id"
                                element={<JobsItem vacancyList={vacancyList}
                                                   handleClickStar={handleClickStar}
                                                   onSetLocalStorage={onSetLocalStorage}/>}
                            />
                            <Route
                                path="/favorites"
                                element={
                                    <>
                                        <Header />
                                        <FavoriteVacancy handleClickStar={handleClickStar}
                                                         onEmptyPage={onEmptyPage}
                                                         onDeleteFilter={onDeleteFilter}/>
                                    </>
                                }
                            />
                        </>
                    </Routes>
                </div>
            </Router>
    );
}
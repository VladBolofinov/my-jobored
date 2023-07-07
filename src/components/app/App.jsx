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
import {onLoadingData,onTotalVacancies,onEmptyPage,onAddCategories,onAddCategoriesKeys,onAddVacancyList} from "../../actions";

export const App = () => {
    const dispatch = useDispatch();
    const {isLoadingData,totalVacancies,isEmptyPage,categories,categoriesKeys,vacancyList} = useSelector(state => state);

    const [profNameValue, setProfNameValue] = useState('');

    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [keyValue, setKeyValue] = useState('');

    const jobService = new JobService();

    const onDeleteFilter= () => {
        setInputValue('');
        setSalaryFrom('');
        setSalaryTo('');
        setProfNameValue('');
    }
    const mainRequest = (page) => {
        dispatch(onLoadingData(true));
        jobService.getVacancies(profNameValue,
            salaryFrom,
            salaryTo,
            keyValue,
            page-1)
            .then((vacancy) => {
            dispatch(onAddVacancyList(vacancy.vacancies));
            dispatch(onTotalVacancies(vacancy.totalVacancies));
            (vacancy.totalVacancies) ? dispatch(onEmptyPage(false)) : dispatch(onEmptyPage(true));
            dispatch(onLoadingData(false));
            });
    }

    useEffect(() => {
        jobService.getToken();
        jobService.getCatalogues().then((catalogues) => {
            dispatch(onAddCategories(catalogues.name));
            dispatch(onAddCategoriesKeys(catalogues.keys));
        });
        mainRequest(1);
    }, []);

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
        setKeyValue(categoriesKeys[categories.indexOf(e)]);
    }

    const handleClickStar = (id) => {
        dispatch(onAddVacancyList(vacancyList.map(item => {
            return (item.id == id) ? {...item, [id]: !item[id]} : item;
            })));
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
                                        {!isEmptyPage ? (
                                            <>
                                                <Filter
                                                    mainRequest={mainRequest}
                                                    handleValue={handleValue}
                                                    handleSalaryFrom={handleSalaryFrom}
                                                    handleSalaryTo={handleSalaryTo}
                                                    onDeleteFilter={onDeleteFilter}
                                                    inputValue={inputValue}
                                                    salaryFrom={salaryFrom}
                                                    salaryTo={salaryTo}
                                                />
                                                {isLoadingData ? (
                                                    <Spinner />
                                                ) : (
                                                    <>
                                                        <Jobs
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
                                            <Empty onDeleteFilter={onDeleteFilter}/>
                                        )}
                                    </>
                                }
                            />
                            <Route
                                path="/id/:id"
                                element={<JobsItem handleClickStar={handleClickStar}
                                                   onSetLocalStorage={onSetLocalStorage}/>}
                            />
                            <Route
                                path="/favorites"
                                element={
                                    <>
                                        <Header />
                                        <FavoriteVacancy handleClickStar={handleClickStar}
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
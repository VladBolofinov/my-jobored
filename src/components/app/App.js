import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import Filter from "../filter/Filter";
import JobService from "../services/JobService";
import {useEffect, useState} from "react";

const App = () => {
    const jobService = new JobService();
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);
    const [dataFromFilter, setDataFromFilter] = useState({keyValue:'', salaryFrom:'', salaryTo:''});
    const [vacancyList, setVacancyList] = useState([]);
    const [dataFromJobs, setDataFromJobs] = useState()

    const onToggleVacancy = (vacancy) => {
        setVacancyList(vacancy);
    }

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
    const handleDataJobs = (newData) => {
        setDataFromJobs(newData);
    };

  return (
    <div className="App">
      <Header/>
      <Jobs dataFromFilter={dataFromFilter} vacancyList={vacancyList} onTogleVacancy={onToggleVacancy}/>
      <Filter options={data} keys={keys} onData={handleData}/>
    </div>
  );
}

export default App;

import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import Filter from "../filter/Filter";
import JobService from "../services/JobService";
import {useEffect, useState} from "react";

const App = () => {
    const jobService = new JobService();
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);
    const [dataFromFilter, setDataFromFilter] = useState({keyValue:'',
                                                                   salaryFrom:'',
                                                                   salaryTo:''});
    const [dataVacancy, setDataVacansy] = useState([]);
    const [dataFromJobs, setDataFromJobs] = useState()

    const onToggleVacansy = (vacancy) => {
        setDataVacansy(vacancy);
    }

    useEffect(() => {
        jobService.getCatalogues().then((catalogues) => {
            setData(catalogues.name);
            setKeys(catalogues.keys);
        });
        jobService.getVacancies().then((vacancy) => setDataVacansy(vacancy));
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
      <Jobs filteredData={dataFromFilter} dataVacansy={dataVacancy} onTogleVacansy={onToggleVacansy}/>
      <Filter options={data} keys={keys} onData={handleData}/>
    </div>
  );
}

export default App;

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

    useEffect(() => {
        jobService.getCatalogues().then((catalogues) => {
            setData(catalogues.name);
            setKeys(catalogues.keys);
        });
    }, []);

    const handleData = (newData) => {
        setDataFromFilter(newData);
    };

  return (
    <div className="App">
      <Header/>
      <Jobs filteredData={dataFromFilter} />
      <Filter options={data} keys={keys} onData={handleData}/>
    </div>
  );
}

export default App;

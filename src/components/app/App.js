import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import Filter from "../filter/Filter";
import JobService from "../services/JobService";
import {useEffect, useState} from "react";


const App = () => {
    const jobService = new JobService();

    const [data, setData] = useState([]);
    const [dataVacancy, setDataVacansy] = useState([]);

    useEffect(() => {
        jobService.getCatalogues().then((catalogues) => setData(catalogues));
        jobService.getVacancies().then((vacancy) => setDataVacansy(vacancy));
    }, []);


  return (
    <div className="App">
      <Header/>
      <Jobs dataVacancies={dataVacancy}/>
      <Filter options={data}/>
    </div>
  );
}

export default App;

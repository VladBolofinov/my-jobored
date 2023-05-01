import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import Filter from "../filter/Filter";
import JobService from "../services/JobService";
import {useEffect, useState} from "react";


const App = () => {
    const jobService = new JobService();

    const [data, setData] = useState([]);

    useEffect(() => {
        jobService.getCatalogues().then((catalogues) => setData(catalogues));
    }, []);


  return (
    <div className="App">
      <Header/>
      <Jobs/>
      <Filter options={data}/>
    </div>
  );
}

export default App;

import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import Filter from "../filter/Filter";
import JobService from "../services/JobService";
import {useEffect, useState} from "react";


const App = () => {
    const jobService = new JobService();
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        jobService.getCatalogues().then((catalogues) => {
            setData(catalogues.name);
            setKeys(catalogues.keys);
        });
    }, []);

  return (
    <div className="App">
      <Header/>
      <Jobs />
      <Filter options={data} keys={keys}/>
    </div>
  );
}

export default App;

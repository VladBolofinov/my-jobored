import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import JobService from "../services/JobService";
import Filter from "../filter/Filter";
const App = () => {
  return (
    <div className="App">
      <Header/>
      {/*<Jobs/>*/}
      <Filter/>
      {/*<JobService/>*/}
    </div>
  );
}

export default App;

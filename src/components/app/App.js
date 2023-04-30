import Header from "../header/Header";
import Jobs from "../jobs/Jobs";
import JobService from "../services/JobService";
import Filter from "../filter/Filter";
const App = () => {
  return (
    <div className="App">
      <Header/>
      {/*<Jobs/>*/}
        <Filter
            options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' }
            ]}
            onSelect={(option) => console.log(`Selected option: ${option.label}`)}
        />

        {/*<JobService/>*/}
    </div>
  );
}

export default App;

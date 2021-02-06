import EmployeeList from './EmployeeList';
import {
    Component
} from 'react';
import API from './util/API'
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.min.css';
class EmployeeContainer extends Component {
    state = {
        search: '',
        results: [],
        filtered: [],
        loading: true,
        notFound: false
    }

    componentDidMount() {
        this.searchEmployee('50');
    };

    //Calls the search method from the API folder
    searchEmployee = employee => {
        API.searchEmployees(employee)
            .then(res => {
                this.setState({
                    results: [...res.data.results],
                    filtered: [...res.data.results],
                    loading: false
                });
                console.log(this.state)
            })
            .catch(err => console.log(err));
    }


    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
        this.handleSubmit()
        
        console.log([name], value)
    }
    searchEmployeeByName = name => {
        if (name === '') {
          return this.setState({
            filtered: [...this.state.results],
          });
        };
        const newSearch = this.state.results.filter(employee => {
          const employeeName = employee.name.first.toLowerCase() + employee.name.last.toLowerCase()  ;
          return employeeName.includes(name.toLowerCase());
        });
        if (newSearch.length) {
          this.setState({ filtered: newSearch });
        } else {
this.setState({notFound:true})
        }
      }
    handleSubmit = () => {
        // e.preventDefault();

          if (this.state.search === ''){
              return this.setState({
                  filtered: [...this.state.results],
              });
          }
        this.searchEmployeeByName(this.state.search);
    }
    render() {
            return (       <div className="employee-container">
            <Search search={this.state.search} handleSubmit={this.handleSubmit} handleInput={this.handleInput}/>
    ​
            {this.state.loading && <div className="loading"> Loading... </div>}
    ​
            {this.state.filtered.length && <EmployeeList results={this.state.filtered} />}
          </div>
        )}
}
export default EmployeeContainer;
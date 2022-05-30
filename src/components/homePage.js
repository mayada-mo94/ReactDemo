import React from "react";
import { Link } from "react-router-dom";
export class Home extends React.Component {
	constructor(props) {
		super(props);
    
		this.state = {
			items: [],
			DataisLoaded: false,
      query: '',
      first: true
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
     "https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=88J_P25qB9jzsaSL57Rwx_Hux2fYAQNI")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
  handle(){
    //const navigate = useNavigate()
    alert('move to second component')
    this.setState({first: false})
    //navigate(`/details`)
  }
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
      
		<div className = "App">
      <div>
      <input placeholder="Enter ticker name" onChange={event => this.setState({query: event.target.value})}/>
    </div>
    <div>
        <button onClick={this.handle.bind(this)}>move to second page</button>
        {this.state.first === false && <details/>}
      </div>
			<h1> Fetch data from an api in react </h1> {
				items.results.filter(item => {
    if (this.state.query === '') {
      return item;
    } else if (item.name.toLowerCase().includes(this.state.query.toLowerCase())||item.ticker.toLowerCase().includes(this.state.query.toLowerCase())) {
      return item;
    }
  }).map((item) => (
				<ol key = { item.name } >
					ticker: <Link to={"/details/" + item.ticker}>{item.ticker} </Link>,
					name: { item.name }
					</ol>
				))
			}
		</div>
	);
}

}

export default Home;
import React from "react";
import '../App.css';
export class Details extends React.Component {
constructor(props) {
		super(props);
		this.state = {
			tinckerData: []
		};
	}
	componentDidMount() {
		fetch(`https://api.polygon.io/v2/aggs/ticker/${this.props.match.params.name}/range/1/day/2020-06-01/2020-06-17?apiKey=88J_P25qB9jzsaSL57Rwx_Hux2fYAQNI`)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json
				});
			})
	}
render() {
    return (
        <div>Hey There!</div>
    );
}

}

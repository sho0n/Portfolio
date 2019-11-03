import React from "react";
import "./App.css";

class Switch extends React.Component {
	// Define a state object to hold our app's state
	state = {
		// Keep the switch on if the theme is dark
		checked: localStorage.getItem("theme") === "dark" ? true : false,
		/**
		 * When a user activates the dark theme we will store the value
		 * on localstorage or set default value to light if it is neither dark
		 * nor light
		 */
		theme: localStorage.getItem("theme")
	};

	componentDidMount() {
		// Update the data-theme attribute of our html tag
		document
			.getElementsByTagName("HTML")[0]
			.setAttribute("data-theme", localStorage.getItem("theme"));
	}

	// Class method allowing us to toggle the theme change
	toggleThemeChange = () => {
		const { checked } = this.state;
		// If theme is light then change to dark
		if (checked === false) {
			// Update localstorage
			localStorage.setItem("theme", "dark");
			/**
			 * The document.getElementsByTagName(...).setAttribute(...)
			 * will only update the value
			 */
			// Update the data-theme attribute of our html tag
			document
				.getElementsByTagName("HTML")[0]
				.setAttribute("data-theme", localStorage.getItem("theme"));
			// Update our state
			this.setState({
				// Ensure our switch is on if we change to dark theme
				checked: true
			});
		} else {
			// Update localstorage
			localStorage.setItem("theme", "light");
			/**
			 * The document.getElementsByTagName(...).setAttribute(...)
			 * will only update the value until the App is mounted and we change
			 * the state of the switch so we will need to introduce
			 * a React lifecycle called ˝componentDidMount()˝
			 */
			// Update the data-theme attribute of our html tag
			document
				.getElementsByTagName("HTML")[0]
				.setAttribute("data-theme", localStorage.getItem("theme"));
			// Update our state
			this.setState({
				// Ensure our switch is off if we change to light theme
				checked: false
			});
		}
	};

	render() {
		return (
			<div className="switch_container">
				<label class="switch">
					{/* checked attribute is used to determine the state of 
              		checkbox
             		 ----------------------------------------------
              		The onChange attribute will toggle our theme change
            		*/}
					<input
						type="checkbox"
						// checked={this.state.checked}
						defaultChecked={this.state.checked}
						onChange={() => this.toggleThemeChange()}
					/>
					<span class="slider round" />
				</label>
				<br />
				<p>Dark mode</p>
			</div>
		);
	}
}

export default Switch;

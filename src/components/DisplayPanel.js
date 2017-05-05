import React from 'react'
import './DisplayPanel.css'

class DisplayPanel extends React.Component {
	render () {
		return (
			<div className="display-panel">
				<div className="content">
					{this.props.value || 0}
				</div>
			</div>
		)
	}
}

DisplayPanel.defaultProps = {
	value: 0
}

export default DisplayPanel;
import React, { Component } from 'react'
import {connect} from 'react-redux'


class App extends Component {
  render() {
    console.log('Props',this.props)
    return (
      <div>
        hello word
      </div>
    )
  }
}
function mapStateToProps (calendar) {
  const diesDeLaSetmana = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar: diesDeLaSetmana.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
          ? calendar[day][meal]
          : null

        return meals
      }, {})
    })),
  }
}
export default connect(mapStateToProps)(App)
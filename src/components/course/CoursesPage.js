import React, { Component, PropTypes } from 'react'

class CoursesPage extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      course: { title: '' }
    }

    this.onTitleChange = this.onTitleChange.bind(this)
    this.onClickSave = this.onClickSave.bind(this)
  }

  onTitleChange (event) {
    const course = this.state.course
    course.title = event.target.value
    this.setState({course: course})
  }

  onClickSave () {
    alert('did things')
  }

  render () {
    return (
      <div className='CoursesPage'>
        <h1>Courses</h1>
        <h2>Add Course</h2>
        <input
          type='text'
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        <input
          type='submit'
          value='Save'
          onClick={this.onClickSave} />
      </div>
    )
  }
}

export default CoursesPage

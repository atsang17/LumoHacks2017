import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import $ from 'jquery';

//css
import './Calendar.css';

class Calendar extends Component {

  constructor(props) {
    super();

    this.state = {
      selectedDay: new Date()
    }
  }

  handleDayClick = day =>  {
    this.setState({ selectedDay: day });
    console.log(day);
  }

  handleSubmit() {
    var data = {
      day: new Date(),
      drugUse: true,
      post: "i wanna kill myself"
    }

    $.ajax({
       type: 'POST',
       url: 'http://localhost:5000/journal',
       data: data
     })
     .done(async function(data) {
     })
     .fail(function(jqXhr, status, err) {
     });
  }

  render() {
    return(
      <section className="calender-section">
        <div>
          <DayPicker
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
          />
        </div>
        <div className="text-center">
          <form className="text-center" onSubmit={this.handleSubmit}>
            <label>Journal Entry: </label>
            <textarea className="form-control" maxLength="1000" rows="6" id="journalEntry" placeholder="Please write out your thoughts and feelings here" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default Calendar;

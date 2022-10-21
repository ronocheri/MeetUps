import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/layout/meetups/NewMeetupForm'

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    console.log("addMeetupHandler")
    fetch(
      'https://melodic-agent-198412.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      console.log("OK!")
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
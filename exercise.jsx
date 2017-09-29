const { render } = ReactDOM;
const { Component } = React;
const { createStore, applyMiddleware, compose } = Redux;
const { Provider, connect } = ReactRedux;

const apiKey = '6eoeJFquKDi5FAsBFdqGg';

/* Actions here */

/* Reducer here */

const getXml2Js = xml => {
  const x2js = new X2JS();
  return x2js.xml2js(xml);
};

const newUser = {
  username: '',
  name: '',
  imageUrl: 'https://s.gr-assets.com/assets/nophoto/user/f_111x148-8060b12280b2aec7543bafb574ee8422.png',
  id: 0,
  location: '', //user.location,
  read: 0,
  currentlyReading: 0,
  wantToRead: 0
};

const initialState = {
  user1: Object.assign({} , newUser),
  user2: Object.assign({} , newUser)
};

const generateUser = user =>
{
  const newUser = user.GoodreadsResponse.user;
  return {
      username: newUser.user_name,
      name: newUser.name,
      imageUrl: newUser.image_url,
      id: newUser.id,
      location: newUser.location,
      read: parseInt(newUser.user_shelves.user_shelf[0].book_count.toString()),
      currentlyReading: parseInt(newUser.user_shelves.user_shelf[1].book_count.toString()),
      wantToRead: parseInt(newUser.user_shelves.user_shelf[2].book_count.toString())
    };
};

const fetchUser = (username) => {
  //https://www.goodreads.com/user/show/?key=6eoeJFquKDi5FAsBFdqGg&username=1676869-rebecca&format=xml //get user info
  var requestString =
    'https://www.goodreads.com/user/show/?' +
    'key=' +
    apiKey +
    '&' +
    'username=' +
    username +
    '&format=xml';

  return axios.get(requestString)
    .then(response => {
      const user = getXml2Js(response.data);
      return generateUser(user);
    });
};

/*Mapping functions here*/

class User extends Component {
  render() {
    const userNumber = this.props.userNumber;
    const winner = this.props.user1.read > this.props.user2.read ? 1 : 2;
    const status = userNumber === winner? 'Winner': 'Loser';
    return (
      <div className='card user-container'>
        <div className='card-block'>
          <div className='card-text'>
            <h2 className={status.toLowerCase()}>{status}</h2>
            <UserInfo {...this.props}/>
          </div>
          <div className='card-footer'>
            <UserInput {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

class UserInfo extends Component {
  constructor() {
    super();
  }

  render() {
    const { name, location, read, currentlyReading, wantToRead, imageUrl }
      = this.props['user' + this.props.userNumber];
    return (
      <div>
        <div className='user-image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='user-info'>
          Name: {name}<br/>
          Location: {location}<br/>
          Read: {read}<br/>
          Currently Reading: {currentlyReading}<br/>
          Want to Read: {wantToRead}
        </div>
      </div>
    );
  }
}

class UserInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //e.target has the value and the id of the text input. The id is the user id
  }

  render() {
    return (
      <input type='text' id={this.props.userNumber} onChange={this.handleChange} placeholder='Enter a name'/>
    );
  }
}

class Profiles extends Component {
  constructor() {
    super();
    this.runBattle = this.runBattle.bind(this);
  }

  runBattle(e) {
    /* Action call to get users */

    e.target.blur();
  }

  /*Get data to User components */
  render() {
    return (
      <div className='text-center'>
        <div className='d-flex flex-wrap justify-content-center'>
          <div>
            <User />
          </div>
          <div>
            <User />
          </div>
        </div>
        <button onClick={this.runBattle} className='btn btn-default'>Battle</button>
      </div>
    );
  }
}

/*Redux Store Here*/


/*Render Here*/


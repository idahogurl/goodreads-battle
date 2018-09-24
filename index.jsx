const { render } = ReactDOM;
const { Component } = React;
const { createStore, applyMiddleware, compose } = Redux;
const { Provider, connect } = ReactRedux;

const apiKey = '6eoeJFquKDi5FAsBFdqGg';

const setUser = (user, userNumber) => {
  const action = {
    type: 'SET USER'
  };
  action['user' + userNumber] = user;
  return action;
};

const updateUsers = (state = initialState, action) => {

  if (action.type === 'SET USER') {
    return {
      user1: action.user1 === undefined ? state.user1 : action.user1,
      user2: action.user2 === undefined ? state.user2 : action.user2
    };
  }
  return state;
};

const fetchUsers = () => {
  return (dispatch, getState) => {
    const state = getState();
    Promise.all([
      fetchUser(state.user1.username),
      fetchUser(state.user2.username)
    ])
    .then(users => {
        dispatch(setUser(users[0], 1));
        dispatch(setUser(users[1], 2));
      });
  };
}

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

const mapStateToProps = state => ({
  user1: state.user1,
  user2: state.user2,
});

const mapDispatchToProps = dispatch => ({
  setUser(user, userNumber) {
    dispatch(setUser(user, userNumber));
  },
  fetchUsers() {
    dispatch(fetchUsers());
  }
});

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

    const user = Object.assign({ }, newUser);
user.username = e.target.value;
    const userNumber = parseInt(e.target.id);
    this.props.setUser(user, userNumber);
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
    const { fetchUsers, user1, user2 } = this.props;
    fetchUsers(user1, user2);

    e.target.blur();
  }

  render() {
    return (
      <div className='text-center'>
        <div className='d-flex flex-wrap justify-content-center'>
          <div>
            <User {...this.props} userNumber={1}/>
          </div>
          <div>
            <User {...this.props} userNumber={2}/>
          </div>
        </div>
        <button onClick={this.runBattle} className='btn btn-default'>Battle</button>
      </div>
    );
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  updateUsers,
  composeEnhancers(applyMiddleware(ReduxThunk.default))
);
const GoodreadsBattle = connect(mapStateToProps, mapDispatchToProps)(
  Profiles
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <GoodreadsBattle/>
    </div>
  </Provider>,
  document.getElementById('content')
);


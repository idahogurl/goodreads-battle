'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;
var _React = React,
    Component = _React.Component;
var _Redux = Redux,
    createStore = _Redux.createStore,
    applyMiddleware = _Redux.applyMiddleware,
    compose = _Redux.compose;
var _ReactRedux = ReactRedux,
    Provider = _ReactRedux.Provider,
    connect = _ReactRedux.connect;


var apiKey = '6eoeJFquKDi5FAsBFdqGg';

/* Actions here */

/* Reducer here */

var getXml2Js = function getXml2Js(xml) {
  var x2js = new X2JS();
  return x2js.xml2js(xml);
};

var newUser = {
  username: '',
  name: '',
  imageUrl: 'https://s.gr-assets.com/assets/nophoto/user/f_111x148-8060b12280b2aec7543bafb574ee8422.png',
  id: 0,
  location: '', //user.location,
  read: 0,
  currentlyReading: 0,
  wantToRead: 0
};

var initialState = {
  user1: Object.assign({}, newUser),
  user2: Object.assign({}, newUser)
};

var generateUser = function generateUser(user) {
  var newUser = user.GoodreadsResponse.user;
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

var fetchUser = function fetchUser(username) {
  //https://www.goodreads.com/user/show/?key=6eoeJFquKDi5FAsBFdqGg&username=1676869-rebecca&format=xml //get user info
  var requestString = 'https://www.goodreads.com/user/show/?' + 'key=' + apiKey + '&' + 'username=' + username + '&format=xml';

  return axios.get(requestString).then(function (response) {
    var user = getXml2Js(response.data);
    return generateUser(user);
  });
};

/*Mapping functions here*/

var User = function (_Component) {
  _inherits(User, _Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      var userNumber = this.props.userNumber;
      var winner = this.props.user1.read > this.props.user2.read ? 1 : 2;
      var status = userNumber === winner ? 'Winner' : 'Loser';
      return React.createElement(
        'div',
        { className: 'card user-container' },
        React.createElement(
          'div',
          { className: 'card-block' },
          React.createElement(
            'div',
            { className: 'card-text' },
            React.createElement(
              'h2',
              { className: status.toLowerCase() },
              status
            ),
            React.createElement(UserInfo, this.props)
          ),
          React.createElement(
            'div',
            { className: 'card-footer' },
            React.createElement(UserInput, this.props)
          )
        )
      );
    }
  }]);

  return User;
}(Component);

var UserInfo = function (_Component2) {
  _inherits(UserInfo, _Component2);

  function UserInfo() {
    _classCallCheck(this, UserInfo);

    return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this));
  }

  _createClass(UserInfo, [{
    key: 'render',
    value: function render() {
      var _props = this.props['user' + this.props.userNumber],
          name = _props.name,
          location = _props.location,
          read = _props.read,
          currentlyReading = _props.currentlyReading,
          wantToRead = _props.wantToRead,
          imageUrl = _props.imageUrl;

      return React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'user-image', style: { backgroundImage: 'url(' + imageUrl + ')' } }),
        React.createElement(
          'div',
          { className: 'user-info' },
          'Name: ',
          name,
          React.createElement('br', null),
          'Location: ',
          location,
          React.createElement('br', null),
          'Read: ',
          read,
          React.createElement('br', null),
          'Currently Reading: ',
          currentlyReading,
          React.createElement('br', null),
          'Want to Read: ',
          wantToRead
        )
      );
    }
  }]);

  return UserInfo;
}(Component);

var UserInput = function (_Component3) {
  _inherits(UserInput, _Component3);

  function UserInput() {
    _classCallCheck(this, UserInput);

    var _this3 = _possibleConstructorReturn(this, (UserInput.__proto__ || Object.getPrototypeOf(UserInput)).call(this));

    _this3.handleChange = _this3.handleChange.bind(_this3);
    return _this3;
  }

  _createClass(UserInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      //e.target has the value and the id of the text input. The id is the user id
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('input', { type: 'text', id: this.props.userNumber, onChange: this.handleChange, placeholder: 'Enter a name' });
    }
  }]);

  return UserInput;
}(Component);

var Profiles = function (_Component4) {
  _inherits(Profiles, _Component4);

  function Profiles() {
    _classCallCheck(this, Profiles);

    var _this4 = _possibleConstructorReturn(this, (Profiles.__proto__ || Object.getPrototypeOf(Profiles)).call(this));

    _this4.runBattle = _this4.runBattle.bind(_this4);
    return _this4;
  }

  _createClass(Profiles, [{
    key: 'runBattle',
    value: function runBattle(e) {
      /* Action call to get users */

      e.target.blur();
    }

    /*Get data to User components */

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'text-center' },
        React.createElement(
          'div',
          { className: 'd-flex flex-wrap justify-content-center' },
          React.createElement(
            'div',
            null,
            React.createElement(User, null)
          ),
          React.createElement(
            'div',
            null,
            React.createElement(User, null)
          )
        ),
        React.createElement(
          'button',
          { onClick: this.runBattle, className: 'btn btn-default' },
          'Battle'
        )
      );
    }
  }]);

  return Profiles;
}(Component);

/*Redux Store Here*/

/*Render Here*/
//# sourceMappingURL=exercise.js.map
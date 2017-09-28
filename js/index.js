'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
/*
// <GoodreadsResponse>
// <Request>
// <authentication>true</authentication>
// <key>
// <![CDATA[ 6eoeJFquKDi5FAsBFdqGg ]]>
// </key>
// <method>
// <![CDATA[ user_show ]]>
// </method>
// </Request>
// <user>
// <id>639222</id>
// <name>Paula C</name>
// <user_name>Paula</user_name>
// <link>
// <![CDATA[ https://www.goodreads.com/user/show/639222-paula-c ]]>
// </link>
// <image_url>
// <![CDATA[
// https://s.gr-assets.com/assets/nophoto/user/f_111x148-8060b12280b2aec7543bafb574ee8422.png
// ]]>
// </image_url>
// <small_image_url>
// <![CDATA[
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// ]]>
// </small_image_url>
// <about/>
// <age/>
// <gender/>
// <location>Fayetteville, NC</location>
// <website/>
// <joined>11/2007</joined>
// <last_active>03/2008</last_active>
// <interests/>
// <favorite_books/>
// <favorite_authors></favorite_authors>
// <updates_rss_url>
// <![CDATA[
// https://www.goodreads.com/user/updates_rss/639222?key=KUyP8TR2PRMsG6LwL3yg4cq2u8TGf5T1Kb-pxtgk9QYyvQiI
// ]]>
// </updates_rss_url>
// <reviews_rss_url>
// <![CDATA[
// https://www.goodreads.com/review/list_rss/639222?key=KUyP8TR2PRMsG6LwL3yg4cq2u8TGf5T1Kb-pxtgk9QYyvQiI&shelf=%23ALL%23
// ]]>
// </reviews_rss_url>
// <friends_count type='integer'>2</friends_count>
// <groups_count>0</groups_count>
// <reviews_count type='integer'>14</reviews_count>
// <user_shelves type='array'>
// <user_shelf>
// <id type='integer'>6667630</id>
// <name>read</name>
// <book_count type='integer'>13</book_count>
// <exclusive_flag type='boolean'>true</exclusive_flag>
// <description nil='true'/>
// <sort nil='true'/>
// <order nil='true'/>
// <per_page type='integer' nil='true'/>
// <display_fields/>
// <featured type='boolean'>true</featured>
// <recommend_for type='boolean'>true</recommend_for>
// <sticky type='boolean' nil='true'/>
// </user_shelf>
// <user_shelf>
// <id type='integer'>1272976</id>
// <name>currently-reading</name>
// <book_count type='integer'>1</book_count>
// <exclusive_flag type='boolean'>true</exclusive_flag>
// <description nil='true'/>
// <sort nil='true'/>
// <order nil='true'/>
// <per_page type='integer' nil='true'/>
// <display_fields/>
// <featured type='boolean'>false</featured>
// <recommend_for type='boolean'>true</recommend_for>
// <sticky type='boolean' nil='true'/>
// </user_shelf>
// <user_shelf>
// <id type='integer'>1272975</id>
// <name>to-read</name>
// <book_count type='integer'>0</book_count>
// <exclusive_flag type='boolean'>true</exclusive_flag>
// <description nil='true'/>
// <sort nil='true'/>
// <order>a</order>
// <per_page type='integer' nil='true'/>
// <display_fields/>
// <featured type='boolean'>false</featured>
// <recommend_for type='boolean'>true</recommend_for>
// <sticky type='boolean' nil='true'/>
// </user_shelf>
// </user_shelves>
// <updates type='array'>
// <update type='friend'>
// <action_text>is now friends with Kat</action_text>
// <link>https://www.goodreads.com/user/show/262255-kat</link>
// <image_url>
// https://images.gr-assets.com/users/1458623850p2/262255.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Sun, 16 Mar 2008 09:16:29 -0700</updated_at>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 4 stars to <a href='https://www.goodreads.com/book/show/89221.The_Poems_of_Catullus'>The Poems of Catullus (Hardcover)</a> by <a href='https://www.goodreads.com/author/show/51220.Catullus'>Catullus</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10642114</link>
// <image_url>
// https://images.gr-assets.com/books/1347763496s/89221.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Tue, 18 Dec 2007 13:19:15 -0800</updated_at>
// <action type='rating'>
// <rating>4</rating>
// </action>
// <object>
// <book>
// <id>89221</id>
// <title>The Poems of Catullus</title>
// <link>
// https://www.goodreads.com/book/show/89221.The_Poems_of_Catullus
// </link>
// <authors>
// <author>
// <id>51220</id>
// <name>Catullus</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1257102543p5/51220.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1257102543p2/51220.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/51220.Catullus
// ]]>
// </link>
// <average_rating>4.09</average_rating>
// <ratings_count>8152</ratings_count>
// <text_reviews_count>315</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 4 stars to <a href='https://www.goodreads.com/book/show/30119.Where_the_Sidewalk_Ends'>Where the Sidewalk Ends (Hardcover)</a> by <a href='https://www.goodreads.com/author/show/435477.Shel_Silverstein'>Shel Silverstein</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10405465</link>
// <image_url>
// https://images.gr-assets.com/books/1168052448s/30119.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Thu, 13 Dec 2007 23:22:11 -0800</updated_at>
// <action type='rating'>
// <rating>4</rating>
// </action>
// <object>
// <book>
// <id>30119</id>
// <title>Where the Sidewalk Ends</title>
// <link>
// https://www.goodreads.com/book/show/30119.Where_the_Sidewalk_Ends
// </link>
// <authors>
// <author>
// <id>435477</id>
// <name>Shel Silverstein</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1201029128p5/435477.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1201029128p2/435477.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/435477.Shel_Silverstein
// ]]>
// </link>
// <average_rating>4.32</average_rating>
// <ratings_count>2241972</ratings_count>
// <text_reviews_count>31201</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 5 stars to <a href='https://www.goodreads.com/book/show/378.The_Phantom_Tollbooth'>The Phantom Tollbooth (Paperback)</a> by <a href='https://www.goodreads.com/author/show/214.Norton_Juster'>Norton Juster</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10405420</link>
// <image_url>
// https://images.gr-assets.com/books/1438887022s/378.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Thu, 13 Dec 2007 23:19:20 -0800</updated_at>
// <action type='rating'>
// <rating>5</rating>
// </action>
// <object>
// <book>
// <id>378</id>
// <title>The Phantom Tollbooth</title>
// <link>
// https://www.goodreads.com/book/show/378.The_Phantom_Tollbooth
// </link>
// <authors>
// <author>
// <id>214</id>
// <name>Norton Juster</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1201117378p5/214.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1201117378p2/214.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/214.Norton_Juster
// ]]>
// </link>
// <average_rating>4.20</average_rating>
// <ratings_count>198438</ratings_count>
// <text_reviews_count>9702</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 3 stars to <a href='https://www.goodreads.com/book/show/386187.Midnight_in_the_Garden_of_Good_and_Evil'>Midnight in the Garden of Good and Evil (Paperback)</a> by <a href='https://www.goodreads.com/author/show/4952.John_Berendt'>John Berendt</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10405417</link>
// <image_url>
// https://images.gr-assets.com/books/1427166915s/386187.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Thu, 13 Dec 2007 23:18:59 -0800</updated_at>
// <action type='rating'>
// <rating>3</rating>
// </action>
// <object>
// <book>
// <id>386187</id>
// <title>
// <![CDATA[ Midnight in the Garden of Good and Evil ]]>
// </title>
// <link>
// https://www.goodreads.com/book/show/386187.Midnight_in_the_Garden_of_Good_and_Evil
// </link>
// <authors>
// <author>
// <id>4952</id>
// <name>John Berendt</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1204661056p5/4952.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1204661056p2/4952.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/4952.John_Berendt
// ]]>
// </link>
// <average_rating>3.89</average_rating>
// <ratings_count>201921</ratings_count>
// <text_reviews_count>8472</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 4 stars to <a href='https://www.goodreads.com/book/show/4137.Me_Talk_Pretty_One_Day'>Me Talk Pretty One Day (Paperback)</a> by <a href='https://www.goodreads.com/author/show/2849.David_Sedaris'>David Sedaris</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10405413</link>
// <image_url>
// https://images.gr-assets.com/books/1431013639s/4137.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Thu, 13 Dec 2007 23:18:36 -0800</updated_at>
// <action type='rating'>
// <rating>4</rating>
// </action>
// <object>
// <book>
// <id>4137</id>
// <title>Me Talk Pretty One Day</title>
// <link>
// https://www.goodreads.com/book/show/4137.Me_Talk_Pretty_One_Day
// </link>
// <authors>
// <author>
// <id>2849</id>
// <name>David Sedaris</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1213737698p5/2849.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1213737698p2/2849.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/2849.David_Sedaris
// ]]>
// </link>
// <average_rating>3.98</average_rating>
// <ratings_count>1433218</ratings_count>
// <text_reviews_count>57606</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 4 stars to <a href='https://www.goodreads.com/book/show/77203.The_Kite_Runner'>The Kite Runner (Paperback)</a> by <a href='https://www.goodreads.com/author/show/569.Khaled_Hosseini'>Khaled Hosseini</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10405409</link>
// <image_url>
// https://images.gr-assets.com/books/1484565687s/77203.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Thu, 13 Dec 2007 23:17:58 -0800</updated_at>
// <action type='rating'>
// <rating>4</rating>
// </action>
// <object>
// <book>
// <id>77203</id>
// <title>The Kite Runner</title>
// <link>
// https://www.goodreads.com/book/show/77203.The_Kite_Runner
// </link>
// <authors>
// <author>
// <id>569</id>
// <name>Khaled Hosseini</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1359753468p5/569.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1359753468p2/569.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/569.Khaled_Hosseini
// ]]>
// </link>
// <average_rating>4.26</average_rating>
// <ratings_count>3031241</ratings_count>
// <text_reviews_count>131417</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 4 stars to <a href='https://www.goodreads.com/book/show/1885.Pride_and_Prejudice'>Pride and Prejudice (Paperback)</a> by <a href='https://www.goodreads.com/author/show/1265.Jane_Austen'>Jane Austen</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10405406</link>
// <image_url>
// https://images.gr-assets.com/books/1320399351s/1885.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Thu, 13 Dec 2007 23:17:28 -0800</updated_at>
// <action type='rating'>
// <rating>4</rating>
// </action>
// <object>
// <book>
// <id>1885</id>
// <title>Pride and Prejudice</title>
// <link>
// https://www.goodreads.com/book/show/1885.Pride_and_Prejudice
// </link>
// <authors>
// <author>
// <id>1265</id>
// <name>Jane Austen</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1380085320p5/1265.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1380085320p2/1265.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/1265.Jane_Austen
// ]]>
// </link>
// <average_rating>4.10</average_rating>
// <ratings_count>4648097</ratings_count>
// <text_reviews_count>126380</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// <update type='review'>
// <action_text>
// <![CDATA[
// gave 3 stars to <a href='https://www.goodreads.com/book/show/65285.The_Death_of_Vishnu'>The Death of Vishnu (Paperback)</a> by <a href='https://www.goodreads.com/author/show/36857.Manil_Suri'>Manil Suri</a>
// ]]>
// </action_text>
// <link>https://www.goodreads.com/review/show/10405403</link>
// <image_url>
// https://images.gr-assets.com/books/1390543039s/65285.jpg
// </image_url>
// <actor>
// <id type='integer'>639222</id>
// <name>Paula C</name>
// <image_url>
// https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png
// </image_url>
// <link>https://www.goodreads.com/user/show/639222-paula-c</link>
// </actor>
// <updated_at>Thu, 13 Dec 2007 23:17:08 -0800</updated_at>
// <action type='rating'>
// <rating>3</rating>
// </action>
// <object>
// <book>
// <id>65285</id>
// <title>The Death of Vishnu</title>
// <link>
// https://www.goodreads.com/book/show/65285.The_Death_of_Vishnu
// </link>
// <authors>
// <author>
// <id>36857</id>
// <name>Manil Suri</name>
// <role/>
// <image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1358385549p5/36857.jpg
// ]]>
// </image_url>
// <small_image_url nophoto='false'>
// <![CDATA[
// https://images.gr-assets.com/authors/1358385549p2/36857.jpg
// ]]>
// </small_image_url>
// <link>
// <![CDATA[
// https://www.goodreads.com/author/show/36857.Manil_Suri
// ]]>
// </link>
// <average_rating>3.54</average_rating>
// <ratings_count>10243</ratings_count>
// <text_reviews_count>935</text_reviews_count>
// </author>
// </authors>
// </book>
// </object>
// </update>
// </updates>
// <user_statuses></user_statuses>
// </user>
// </GoodreadsResponse>
*/

var apiKey = '6eoeJFquKDi5FAsBFdqGg';

var _setUser = function _setUser(user, userNumber) {
  var action = {
    type: 'SET USER'
  };
  action['user' + userNumber] = user;
  return action;
};

var updateUsers = function updateUsers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  if (action.type === 'SET USER') {
    return {
      user1: action.user1 === undefined ? state.user1 : action.user1,
      user2: action.user2 === undefined ? state.user2 : action.user2
    };
  }
  return state;
};

var _fetchUsers = function _fetchUsers() {
  return function (dispatch, getState) {
    var state = getState();
    Promise.all([fetchUser(state.user1.username), fetchUser(state.user2.username)]).then(function (users) {
      dispatch(_setUser(users[0], 1));
      dispatch(_setUser(users[1], 2));
    });
  };
};

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

var mapStateToProps = function mapStateToProps(state) {
  return {
    user1: state.user1,
    user2: state.user2
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUser: function setUser(user, userNumber) {
      dispatch(_setUser(user, userNumber));
    },
    fetchUsers: function fetchUsers() {
      dispatch(_fetchUsers());
    }
  };
};

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

      var user = Object.assign({}, newUser);
      user.username = e.target.value;
      var userNumber = parseInt(e.target.id);
      this.props.setUser(user, userNumber);
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
      var _props2 = this.props,
          fetchUsers = _props2.fetchUsers,
          user1 = _props2.user1,
          user2 = _props2.user2;

      fetchUsers(user1, user2);

      e.target.blur();
    }
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
            React.createElement(User, _extends({}, this.props, { userNumber: 1 }))
          ),
          React.createElement(
            'div',
            null,
            React.createElement(User, _extends({}, this.props, { userNumber: 2 }))
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

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(updateUsers, composeEnhancers(applyMiddleware(ReduxThunk.default)));
var GoodreadsBattle = connect(mapStateToProps, mapDispatchToProps)(Profiles);

ReactDOM.render(React.createElement(
  Provider,
  { store: store },
  React.createElement(
    'div',
    null,
    React.createElement(GoodreadsBattle, null)
  )
), document.getElementById('content'));
//# sourceMappingURL=index.js.map
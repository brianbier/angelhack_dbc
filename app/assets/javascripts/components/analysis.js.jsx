var Analysis = React.createClass({
<<<<<<< 258ac2d9fc3e6d39f53e0ca84059ece4afc02322
  getInitialState: function(){
    b = JSON.parse(this.props.people)
    a = Object.keys(JSON.parse(this.props.people))[0]
    return {chosenUser: b[a]};
  },
  chooseUser: function(user){
    this.setState({
      chosenUser: user
    })
  },
  showUserDetails: function(){
    var user = this.state.chosenUser
    var people = JSON.parse(this.props.people)
    return (
      <section>
        <h3>{user.name} - {user.sentiment_score} {'(' + user.sentiment + ')'}</h3><br/>
        <a href="#">Analyze by email </a>
      </section>
    )
  },
  render: function(){
    var people = JSON.parse(this.props.people)
    var self = this
    var keys = Object.keys(people)
    var counter = 0
    var peopleButtons = keys.map(function(key){
      var user = people[key]
      counter = counter += 1
      return (<UserButton user={user} chooseUser={self.chooseUser} key={counter}></UserButton>)
    })
    var today = new Date().toJSON().slice(0,10)
    return (
      <div>
      <div className="table-cover">
      <div class="table-title">
      {/*{today}*/}
        <h3 className="title">Gmail Analysis - 05/55/29390 </h3>
      </div>
        <table class="table-fill">
        <thead>
        <tr>
        <th className="text-left" colSpan="2">Social Breakdown</th>
        </tr>
        </thead>
        <tbody class="table-hover">
          <tr>
          {/*{peopleButtons}*/}
          {/*Alyssa, I wasnt sure what this peopluButton is doing.*/}
            <td><a href="#" onClick={this.chooseUser}>John 20%</a></td>
            <td><a href="#">Doe Bier 80%</a></td>
            </tr>
            <tr>
            <td><a href="#">Jake Anis 80%</a></td>
            <td><a href="#">Doe Foo 40%</a></td>
            </tr>
            <tr>
            <td><a href="#">Chilly Pepper 10%</a></td>
            <td><a href="#">billy Silly 90%</a></td>
            </tr>
        </tbody>
        </table>
      </div>
        <br/>
        <br/>
        {this.showUserDetails()}
      </div>
    );
  }

});

var UserButton = React.createClass({
  chooseUser: function(){
    this.props.chooseUser(this.props.user)
  },
  render: function(){
    var user = this.props.user
    return (
      <td><a href="#" onClick={this.chooseUser}>{user.name} {user.sentiment_score}</a></td>
    )
  }
})

import React from 'react';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import Card from 'reapp-ui/components/Card';
import Label from 'reapp-ui/components/Label';
import challengesStore from '../../stores/challenges';
import Router from 'react-router';

export default React.createClass({
  mixins: [Router.Navigation, Router.State],
  getInitialState() {
    var params = this.getParams();
    var id = params ? params.id : 0;
    var _this = this;
    challengesStore
      .get(id)
      .then(function (result) {
        _this.setState({
          challenge: result
        });
      })
      .catch(function (error) {
        alert(error);
      });
    return {
      challenge: {}
    };
  },
  accept() {
    var id = this.state.challenge._id;
    var _this = this;

    challengesStore
      .accept(id)
      .then(function (result) {
        _this.transitionTo('challenges');
      })
      .catch(function (error) {
        alert(error);
      });
  },
  done() {
    alert('Bra jobbat!');
  },
  skip() {
    // alert('Not yet implemented!!!');
  },
  render() {
    var backButton = (
      <BackButton onTap={() => window.history.back()} />
    );

    return (
      <View {...this.props} title={[backButton, "Påminnelse!"]}>
        <Card>
          <Label title={this.state.challenge.summary} />
        </Card>
        <Card>
          <p>{this.state.challenge.body}</p>
        </Card>
        <ButtonGroup>
          <Button color="green" onTap={this.accept}>Jag är klar</Button>
          <Button onTap={this.skip}>Snooze</Button>
        </ButtonGroup>
        <p>
          Du har tidigare accepterat denna utmaning. Här är din påminnelse ;) 
        </p>
      </View>
    );
  }
});

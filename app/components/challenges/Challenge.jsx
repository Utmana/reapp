import React from 'react';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import Card from 'reapp-ui/components/Card';
import Label from 'reapp-ui/components/Label';
import Title from 'reapp-ui/components/Title';
import challengesStore from '../../stores/challenges';
import Router from 'react-router';
import AppDispatcher from '../../dispatcher';

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
  skip() {
    alert('Not yet implemented!!!');
  },
  del() {
    if (confirm('Are you sure')) {
      AppDispatcher.dispatch({
        actionType: 'delete',
        data: this.state.challenge._id
      });
      this.transitionTo('/');
    }
  },
  render() {
    var backButton = (
      <BackButton onTap={() => window.history.back()} />
    );

    return (
      <View {...this.props} title={[backButton, "Godkänn utmaning"]}>
        <Card>
          <h2>{this.state.challenge.summary}</h2>
        </Card>
        <Card show={this.state.challenge.body || this.state.challenge.link }>
          <p>{this.state.challenge.body}</p>
          <a href={this.state.challenge.link}>Länk med mer information</a>
        </Card>
        <Button color="blue" onTap={this.accept}>Acceptera utmaningen</Button>
        <p>
          När du accepterar denna utmaning kommer du ha trettio minuter att slutföra utmaningen.
        </p>
        <Title>Admin</Title>
        <ButtonGroup>
          <Button onTap={() => this.transitionTo('edit', { id: this.state.challenge._id})}>Redigera</Button>
          <Button onTap={this.del}>Ta bort</Button>
        </ButtonGroup>
      </View>
    );
  }
});

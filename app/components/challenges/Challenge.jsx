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
  skip() {
    // alert('Not yet implemented!!!');
  },
  render() {
    var backButton = (
      <BackButton onTap={() => window.history.back()} />
    );

    return (
      <View {...this.props} title={[backButton, "Godkänn utmaning"]}>
        <Card>
          <Label title="Rubrik"/>
        </Card>
        <Card>
          <p>{this.state.challenge.summary}</p>
        </Card>
        <ButtonGroup>
          <Button onTap={this.accept}>Acceptera</Button>
          <Button onTap={this.skip}>Skippa</Button>
        </ButtonGroup>
      </View>
    );
  }
});

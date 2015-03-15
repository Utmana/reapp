import React from 'react';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import Card from 'reapp-ui/components/Card';
import Label from 'reapp-ui/components/Label';
import Input from 'reapp-ui/components/Input';
import Textarea from 'reapp-ui/components/Textarea';
import challengesStore from '../../stores/challenges';
import Router from 'react-router';
import AppDispatcher from '../../dispatcher';

export default React.createClass({
  mixins: [React.addons.LinkedStateMixin, Router.Navigation, Router.State],
  save() {
    AppDispatcher.dispatch({
      actionType: 'save',
      data: this.state
    });
    this.transitionTo('/');
  },
  getInitialState() {
    var params = this.getParams();
    if (params.id !== -1) {
      var _this = this;
      challengesStore
        .get(params.id)
        .then(function (result) {
          _this.setState(result);
        })
        .catch(function (error) {
          alert(error);
        });
    }
    return {};
  },
  render() {
    var backButton = (
      <BackButton onTap={() => window.history.back()} />
    );

    return (
      <View {...this.props} title={[backButton, "Redigera utmaning"]}>
        <Card>
          <Input placeholder="Kort beskrivning av utmaningen" valueLink={this.linkState('summary')}/>
        </Card>
        <Card>
          <Textarea placeholder="Beskriv vad mottagaren ska göra och varför det gör världen till en bättre plats" valueLink={this.linkState('body')}/>
        </Card>
        <ButtonGroup>
          <Button onTap={this.save}>Acceptera</Button>
          <Button onTap={this.back}>Skippa</Button>
        </ButtonGroup>
      </View>
    );
  }
});

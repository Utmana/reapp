import React from 'react';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import TitleBar from 'reapp-ui/components/TitleBar';
import List from 'reapp-ui/components/List';
import Title from 'reapp-ui/components/Title';
import Icon from 'reapp-ui/components/Icon';
import ListItem from 'reapp-ui/components/ListItem';
import challengesStore from '../stores/challenges';

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],
  getInitialState() {
    var _this = this;
    challengesStore
      .getList()
      .then(function (results) {
        _this.setState({
          challenges: results
        });
      })
      .catch(function (error) {
        alert(error);
      });
    return {
      challenges: []
    };
  },
  render() {
    var _this = this;
    function renderListItem(data) {
      return (
        <ListItem key={data._id} title={data.summary} titleSub={data.summary} onTap={() => _this.transitionTo('challenge', {id: data._id})}/>
      );
    }
    return (
      <NestedViewList {...this.routedViewListProps()}>
        <View title={[this.props.handle, 'Utmaningar', <Button chromeless onTap={() => this.transitionTo('edit', {id: -1})}>Skapa utmaning</Button>]}>
          <img src="/assets/shared/subway.jpg"/>
          <Title>Topplista utmaningar</Title>
          <List>{this.state.challenges.map(renderListItem)}</List>
          <Title>Accepterade utmaningar</Title>
          <List>{this.state.challenges.slice(4,8).map(renderListItem)}</List>

        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
});

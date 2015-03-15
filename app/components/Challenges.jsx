import React from 'react';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import List from 'reapp-ui/components/List';
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
        <View title={[this.props.handle, 'Utmaningar']}>
          <List>{this.state.challenges.map(renderListItem)}</List>
        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
});

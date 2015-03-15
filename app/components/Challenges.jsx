import React from 'react';
import { RoutedViewListMixin } from 'reapp-routes/react-router';
import NestedViewList from 'reapp-ui/views/NestedViewList';
import View from 'reapp-ui/views/View';
import Button from 'reapp-ui/components/Button';
import List from 'reapp-ui/components/List';
import ListItem from 'reapp-ui/components/ListItem';

export default React.createClass({
  mixins: [
    RoutedViewListMixin
  ],

  render() {
    return (
      <NestedViewList {...this.routedViewListProps()}>
        <View title={[this.props.handle, 'Utmaningar']}>
          <List>
            <ListItem title="pla" onTap={() => this.transitionTo('challenge', {id:123})} />
            <ListItem title="pla" titleSub="Do it do it do it" after="4%"/>
            <ListItem title="pla"/>
            <ListItem title="pla"/>
            <ListItem title="pla"/>
            <ListItem title="pla"/>
          </List>
        </View>

        {this.childRouteHandler()}
      </NestedViewList>
    );
  }
});
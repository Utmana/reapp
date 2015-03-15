import React from 'react';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import Card from 'reapp-ui/components/Card';
import Label from 'reapp-ui/components/Label';
import Input from 'reapp-ui/components/Input';
import Textarea from 'reapp-ui/components/Textarea';

// looking for more examples? check our kitchen-sink repository:
// https://github.com/reapp/kitchen-sink/tree/master/app/components

export default React.createClass({
  render() {
    var backButton = (
      <BackButton onTap={() => window.history.back()} />
    );

    return (
      <View {...this.props} title={[backButton, "Redigera utmaning"]}>
        <Card>
          <Input placeholder="Kort beskrivning av utmaningen"/>
        </Card>
        <Card>
          <Textarea placeholder="Beskriv vad mottagaren ska göra och varför det gör världen till en bättre plats"/>
        </Card>
        <ButtonGroup>
          <Button>Acceptera</Button>
          <Button>Skippa</Button>
        </ButtonGroup>
      </View>
    );
  }
});
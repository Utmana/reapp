import React from 'react';
import View from 'reapp-ui/views/View';
import BackButton from 'reapp-ui/components/buttons/BackButton';
import Button from 'reapp-ui/components/Button';
import ButtonGroup from 'reapp-ui/components/ButtonGroup';
import Card from 'reapp-ui/components/Card';
import Label from 'reapp-ui/components/Label';

// looking for more examples? check our kitchen-sink repository:
// https://github.com/reapp/kitchen-sink/tree/master/app/components

export default React.createClass({
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
          <p>
            Bacon ipsum dolor amet ribeye salami tail hamburger. Prosciutto cupim picanha tri-tip. Sausage jowl tenderloin spare ribs beef bresaola filet mignon sirloin swine landjaeger shoulder. Shank turkey bresaola beef ribs t-bone ribeye alcatra meatloaf tri-tip tongue tail pig sausage.

Chicken biltong tongue shank landjaeger, spare ribs corned beef. Hamburger alcatra chicken capicola, fatback beef ribs pork prosciutto cow short ribs chuck. Bacon shoulder pork loin picanha. Shank doner pork chop, strip steak tenderloin beef ribs ground round pork meatloaf prosciutto chicken ham. Frankfurter picanha andouille spare ribs, tri-tip kielbasa doner capicola sirloin pancetta tongue alcatra biltong meatball. Tenderloin swine prosciutto turkey chuck, spare ribs corned beef beef ribs boudin ball tip pork sirloin.

Hamburger brisket kielbasa andouille chicken pork loin ribeye ham hock porchetta doner pork. Ham flank chuck drumstick venison. Pork belly shank strip steak hamburger kevin landjaeger salami tail boudin leberkas kielbasa brisket. Kevin landjaeger tenderloin chuck cow chicken. Pastrami pork loin drumstick ham hock shankle strip steak, flank prosciutto chicken beef ribs short loin porchetta shoulder meatloaf pancetta.

Drumstick biltong boudin filet mignon rump jerky. Swine tongue turkey ribeye, kevin capicola hamburger beef drumstick shankle sausage. Short ribs spare ribs turkey biltong pork belly boudin corned beef meatball. Ham biltong drumstick jowl chicken, turducken cupim spare ribs filet mignon kevin pork chop prosciutto sirloin. Short ribs ham kielbasa pig salami. Frankfurter shank andouille chuck meatball, prosciutto pancetta turkey salami.

Bresaola pork chop fatback, prosciutto sirloin sausage chicken turkey shankle tenderloin drumstick ham. Turkey bacon alcatra, tail hamburger frankfurter spare ribs pork loin rump. Salami rump ham hock jerky, venison meatball ball tip frankfurter shankle shoulder. Pork bresaola prosciutto jerky, cupim t-bone spare ribs beef ribs. Meatloaf kielbasa picanha, short ribs filet mignon meatball beef ribs pork belly boudin kevin cupim.
          </p>
        </Card>
        <ButtonGroup>
          <Button>Acceptera</Button>
          <Button>Skippa</Button>
        </ButtonGroup>
      </View>
    );
  }
});
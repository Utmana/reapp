var c = {brandColor: '#d7d3b9'};

module.exports = {
// Alert
  alertBG: c.brandColor,
  alertColor: '#fff',

  // Badge
  badgeBG: '#c1c1bb',
  badgeColor: '#333',

  // Bar
  barBG: '#f6f6f6',
  barColor: c.brandColorInactive,
  barColorActive: c.brandColor,
  barHeight: '49px',
  barLineHeight: '49px',
  barBorderColor: c.light,

  // Button
  buttonBorderColor: '#fff',
  buttonColor: '#fff',
  buttonActiveBG: '#fff',
  buttonActiveColor: '#fff',
  buttonFocusedBG: 'rgba(0,0,0,0.1)',
  buttonColorTitleBar: '#fff',

  // Dots
  dotBG: '#000',

  // Icon
  iconColor: c.brandColor,
  iconColorTitleBar: c.activeBG,

  // List
  listTitleColor: '#f7f7f7',
  listBG: '#fff',

  // ListItem
  listItemBorderColor: c.hairline ? '#bcbbc1' : '#dadbe3',
  listItemArrowColor: '#b7b8bd',
  listItemContentColor: '#000',
  listItemAfterColor: '#7b7b7b',
  listItemTitleAfterColor: '#7b7b7b',

  // TitleBar
  // iOS7 add extra padding for statusbar
  titleBarHeight: (c.ios7 || c.standalone) ? 64 : 44,
  titleBarPaddingTop: (c.ios7 || c.standalone) ? 20 : 0,
  titleBarColor: c.black,
  titleBarBorderColor: c.light,
  titleBarFontSize: '17px',
  titleBarBG: '#262729',

  // View
  viewBG: '#e6eaea',
  viewPad: '10px'
};
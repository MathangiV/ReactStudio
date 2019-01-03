import React, { Component } from 'react';
import './App.css';
import img_elGroup from './images/V1Screen_elGroup.png';
import img_elIf_newgooglefavicon_682665 from './images/V1Screen_elIf_newgooglefavicon_682665.png';
import img_elIf_06facebook_104498 from './images/V1Screen_elIf_06facebook_104498.png';


export default class V1Screen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_background = {
        width: '100%',
        height: '100%',
     };
    const style_background_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_group = {
        backgroundImage: 'url('+img_elGroup+')',
        backgroundSize: '100% 100%',
     };
    const style_musicBasedOnYour = {
        fontSize: 23.8,
        color: '#1c0941',
        textAlign: 'left',
     };
    const style_rectangleCopy = {
        background: 'rgba(239, 241, 251, 1.000)',
     };
    const style_continueWithGoogle = {
        fontSize: 13.3,
        color: '#1c0941',
        textAlign: 'left',
     };
    const style_if_newgooglefavicon_682665 = {
        backgroundImage: 'url('+img_elIf_newgooglefavicon_682665+')',
        backgroundSize: '100% 100%',
     };
    const style_rectangle = {
        background: 'rgba(44, 69, 185, 1.000)',
     };
    const style_rectangle2 = {
        background: 'rgba(215, 215, 215, 0.000)',
     };
    const style_if_06facebook_104498 = {
        backgroundImage: 'url('+img_elIf_06facebook_104498+')',
        backgroundSize: '100% 100%',
     };
    const style_continueWithFacebo = {
        fontSize: 13.3,
        color: 'white',
        textAlign: 'left',
     };
    const style_byContinueYouAre = {
        fontSize: 9.5,
        color: 'rgba(28, 9, 65, 0.5000)',
        textAlign: 'left',
     };
    
    return (
      <div className="AppScreen V1Screen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_background_outer}>
            <div style={style_background} />
          
          </div>
          
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elGroup' style={style_group} />
            <div className='font-helvetica  elMusicBasedOnYour' style={style_musicBasedOnYour}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.iphonese_musicbasedonyour_463991.replace(/\n/g, '<br>')}}></div></div>
            </div>
            <div className='elRectangleCopy' style={style_rectangleCopy} />
            <div className='font-AppleSystemUIFont  elContinueWithGoogle' style={style_continueWithGoogle}>
              <div>{this.props.locStrings.iphonese_continuewithgoogle_780517}</div>
            </div>
            <div className='elIf_newgooglefavicon_682665' style={style_if_newgooglefavicon_682665} />
            <div className='elRectangle' style={style_rectangle} />
            <div className='elRectangle2' style={style_rectangle2} />
            <div className='elIf_06facebook_104498' style={style_if_06facebook_104498} />
            <div className='font-AppleSystemUIFont  elContinueWithFacebo' style={style_continueWithFacebo}>
              <div>{this.props.locStrings.iphonese_continuewithfacebo_1013132}</div>
            </div>
            <div className='font-helvetica  elByContinueYouAre' style={style_byContinueYouAre}>
              <div>{this.props.locStrings.iphonese_bycontinueyouare_371072}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}

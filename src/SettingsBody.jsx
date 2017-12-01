const Input = novi.ui.input;
const React = novi.react.React;
const Component = novi.react.Component;
const Switcher = novi.ui.switcher;
const Select = novi.ui.select;
const lodash = novi.utils.lodash;
const Language = novi.language;
export default class Body extends Component {
    constructor(props) {
        super(props);

        let autoplay = novi.element.getAttribute(props.element, 'data-autoplay') !== 'false';
        let autoplayTime = autoplay ? novi.element.getAttribute(props.element, 'data-autoplay') / 1000 : 5;
        let slideEffect=  novi.element.getAttribute(props.element, 'data-slide-effect');
        let transitionEffect = slideEffect ? {label: lodash.capitalize(slideEffect), value: slideEffect} : {label: "Slide", value: "slide"};

        this.state = {
            autoplayTime,
            autoplay,
            transitionEffect,
            initValue: {
                autoplayTime,
                autoplay,
                transitionEffect
            },
            element: props.element
        };

        this.style = `
        .rd-mailform-wrap{
            padding: 20px 12px 0;
            display: flex;
            flex-direction: column;
            height: calc(100% - 20px);
            color: #6E778A;
        }
        
        .swiper-switcher{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 16px;
        }
      
        .swiper-switcher .novi-input{
            width: 55px;
        }  
        .swiper-wrap .Select-menu-outer, .swiper-wrap .Select-menu{
            max-height: 85px;
        }
        `;

        this.effects = novi.plugins.settings.get("novi-plugin-swiper-slider").effects;

        this._handleAutoplayChange = this._handleAutoplayChange.bind(this);
        this._handleSwitcherChange = this._handleSwitcherChange.bind(this);
        this._handleTransitionEffectChange = this._handleTransitionEffectChange.bind(this);
        this.messages = Language.getDataByKey("novi-plugin-swiper-slider");
    }

    render() {
        return (
            <div
                className="swiper-wrap" style={{
                "padding": "0 12px",
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "center",
                "height": "100%",
                "color": "#6E778A"
            }}
            >
                <style>{this.style}</style>
                <p className="novi-label" style={{"marginTop": "0"}}>
                    {this.messages.editor.settings.body.effect}
                </p>
                <Select searchable={false} options={this.effects} value={this.state.transitionEffect} onChange={this._handleTransitionEffectChange}/>

                <div className="swiper-switcher">
                    <p className="novi-label" style={{"margin": 0}}>
                        {this.messages.editor.settings.body.autoPlay}

                    </p>
                    <Switcher isActive={this.state.autoplay} onChange={this._handleSwitcherChange}/>
                </div>

                <div className="swiper-switcher">
                    <p className="novi-label" style={{"margin": 0}}>
                        {this.messages.editor.settings.body.autoPlayDelay}
                    </p>
                    <Input disabled={!this.state.autoplay} onChange={this._handleAutoplayChange} value={this.state.autoplayTime}/>
                </div>
            </div>

        )
    }

    _handleAutoplayChange(e) {
        let value = e.target.value;
        this.setState({
            autoplayTime: value
        });
    }

    _handleSwitcherChange(isActive) {
        this.setState({
            autoplay: isActive
        })
    }

    _handleTransitionEffectChange(value){
        this.setState({
            transitionEffect: value
        });
    }
}
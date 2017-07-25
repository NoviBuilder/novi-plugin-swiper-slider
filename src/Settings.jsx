const React = novi.react.React;
const Component = novi.react.Component;
const Input = novi.ui.input;
const Select = novi.ui.select;
const Button = novi.ui.button;

export default class Settings extends Component {
    constructor(props) {
        super();
        this.state = {
            querySelector: props.settings.querySelector,
            effects: props.settings.effects
        };
        this.saveSettings = this.saveSettings.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onEffectChange = this.onEffectChange.bind(this);

        this.effects = [
            {label: "Slide", value: "slide", clearableValue: false},
            {label: "Fade", value: "fade", clearableValue: false},
            {label: "Cube", value: "cube"},
            {label: "Coverflow", value: "coverflow"},
            {label: "Flip", value: "flip"},
        ]
    }

    componentWillReceiveProps(props){
        this.setState({
            querySelector: props.settings.querySelector,
            effects: props.settings.effects
        })
    }

    render() {
        return (
            <div>
                <span style={{letterSpacing: "0,0462em"}}>Swiper Slider Plugin</span>
                <div style={{fontSize: 13, color: "#6E778A", marginTop: 21}}>Apply this plugin to elements which are matching selector:</div>
                    <Input style={{marginTop: 10, width: 340}} value={this.state.querySelector} onChange={this.onChange}/>
                <div style={{marginTop: 30, width: 340}}>
                    <div style={{fontSize: 13, color: "#6E778A", marginTop: 21}}>Available transition effects:</div>
                    <Select multi={true} searchable={false} style={{marginTop: 10}} options={this.effects} value={this.state.effects} onChange={this.onEffectChange}/>
                </div>
                <div style={{marginTop: 30}}>
                <Button type="primary"  messages={{textContent: "Save Settings"}} onClick={this.saveSettings} />
                </div>
            </div>
        );
    }

    onChange(e){
        const value = e.target.value;
        this.setState({
            querySelector: value
        })
    }

    onEffectChange(value){
        this.setState({
            effects: value
        })
    }

    saveSettings(){
        novi.plugins.settings.update("novi-plugin-swiper-slider", this.state);
    }
}
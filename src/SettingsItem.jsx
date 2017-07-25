import SettingsBody from "./SettingsBody";

const React = novi.react.React;
const Icons = novi.ui.icons;
const Icon = novi.ui.icon;
const lodash = novi.utils.lodash;
let icon = <Icon>
    <svg viewBox="0 0 27 16" style={{height: 28, width: 28, maxWidth: "inherit", maxHeight: "inherit"}}>
        <path
            d="M17,10 C15.8976,10 15,9.1024 15,8 C15,6.8976 15.8976,6 17,6 C18.1024,6 19,6.8976 19,8 C19,9.1024 18.1024,10 17,10 Z M17,7 C16.4486667,7 16,7.44866667 16,8 C16,8.55133333 16.4486667,9 17,9 C17.5513333,9 18,8.55133333 18,8 C18,7.44866667 17.5513333,7 17,7 Z"
        />
        <path
            d="M8,1 L8,2.05144019 L19,2.0758879 L19,1 L8,1 Z M8,0 L19,0 C19.5522847,-1.01453063e-16 20,0.44771525 20,1 L20,2.08777076 L7,2.0470348 L7,1 C7,0.44771525 7.44771525,1.01453063e-16 8,0 Z"
        />
        <path
            d="M20.5,2 L6.5,2 C5.673,2 5,2.673 5,3.5 L5,14.5 C5,15.327 5.673,16 6.5,16 L20.5,16 C21.327,16 22,15.327 22,14.5 L22,3.5 C22,2.673 21.327,2 20.5,2 Z M6,12.693 L10.197,8.076 C10.282,7.983 10.393,7.931 10.511,7.929 C10.629,7.927 10.742,7.977 10.829,8.068 L17.329,15 L6.499,15 C6.223,15 5.999,14.776 5.999,14.5 L6,12.693 Z M20.5,15 L18.714,15 L11.553,7.377 C11.272,7.083 10.898,6.925 10.5,6.93 C10.102,6.935 9.732,7.103 9.458,7.404 L6.001,11.207 L6.001,3.5 C6.001,3.224 6.225,3 6.501,3 L20.501,3 C20.777,3 21.001,3.224 21.001,3.5 L21.001,14.5 C21,14.776 20.776,15 20.5,15 Z"
        />
        <path
            d="M2.85325,11.85225 C3.04825,11.65725 3.04825,11.34025 2.85325,11.14525 L1.20725,9.49925 L2.85325,7.85325 C3.04825,7.65825 3.04825,7.34125 2.85325,7.14625 C2.65825,6.95125 2.34125,6.95125 2.14625,7.14625 L0.14625,9.14625 C-0.04875,9.34125 -0.04875,9.65825 0.14625,9.85325 L2.14625,11.85325 C2.24425,11.95125 2.37225,11.99925 2.50025,11.99925 C2.62725,11.99825 2.75525,11.94925 2.85325,11.85225 Z"
        />
        <path
            d="M26.85325,11.85225 C27.04825,11.65725 27.04825,11.34025 26.85325,11.14525 L25.20725,9.49925 L26.85325,7.85325 C27.04825,7.65825 27.04825,7.34125 26.85325,7.14625 C26.65825,6.95125 26.34125,6.95125 26.14625,7.14625 L24.14625,9.14625 C23.95125,9.34125 23.95125,9.65825 24.14625,9.85325 L26.14625,11.85325 C26.24425,11.95125 26.37225,11.99925 26.50025,11.99925 C26.62725,11.99825 26.75525,11.94925 26.85325,11.85225 Z"
            transform="translate(25.499750, 9.499625) scale(-1, 1) translate(-25.499750, -9.499625) "
        />
    </svg>
</Icon>;

const SettingsItem = {
    trigger: icon,
    tooltip: "Slider Settings",
    title: "Slider Settings",
    header: [icon, <span>Swiper Slider Settings</span>],
    body: [<SettingsBody />],
    closeIcon: "submit",
    onSubmit: onSubmitAction,
    collapsed: true,
    width: 320,
    height: 181


};

export default SettingsItem;

function onSubmitAction(headerStates, bodyStates) {
    let state = bodyStates[0];
    let values = {
        autoplayTime: state.autoplayTime,
        autoplay: state.autoplay,
        transitionEffect: state.transitionEffect,
    };

    if(lodash.isEqual(state.initValue, values) ) return;

    if (state.autoplay){
        novi.element.setAttribute(state.element, "data-autoplay", state.autoplayTime * 1000);
    }else{
        novi.element.setAttribute(state.element, "data-autoplay", "false");
    }

    novi.element.setAttribute(state.element, "data-slide-effect", state.transitionEffect.value);

    if (!lodash.isEqual(values.transitionEffect, state.initValue.transitionEffect)) novi.page.forceUpdate();

}



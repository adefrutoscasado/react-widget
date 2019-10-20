import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
// @ts-ignore
import { Parser } from 'html-to-react';
import './index.scss';
import ExampleComponent from './App';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));

const node = document.createElement("parking-widget");
// @ts-ignore
document.getElementById('root').appendChild(node);

class ParkingWidgetWebWelement extends HTMLElement {
    constructor() {
        super();
        // @ts-ignore
        this.observer = new MutationObserver(() => this.update());
        // @ts-ignore
        this.observer.observe(this, { attributes: true });
    }

    connectedCallback() {
        // @ts-ignore
        this._innerHTML = this.innerHTML;
        this.mount();
    }

    disconnectedCallback() {
        this.unmount();
        // @ts-ignore
        this.observer.disconnect();
    }

    // Diria que esto sobra
    update() {
        this.unmount();
        this.mount();
    }

    mount() {
        // const propTypes = ExampleComponent.propTypes ? ExampleComponent.propTypes : {};
        // const events = ExampleComponent.propTypes ? ExampleComponent.propTypes : {};
        console.log(this.attributes)
        const props = {
            ...this.getProps(this.attributes, {}),
            ...this.getEvents({}),
            children: this.parseHtmlToReact(this.innerHTML)
        };
        render(<ExampleComponent {...props} />, this);
    }

    unmount() {
        unmountComponentAtNode(this);
    }

    // @ts-ignore
    parseHtmlToReact(html) {
        return html && new Parser().parse(html);
    }

    // @ts-ignore
    getProps(attributes, propTypes) {
        propTypes = propTypes || {};
        return [...attributes]
            .filter(attr => attr.name !== 'style')
            .map(attr => this.convert(propTypes, attr.name, attr.value))
            .reduce((props, prop) =>
                ({ ...props, [prop.name]: prop.value }), {});
    }

    // @ts-ignore
    getEvents(propTypes) {
        return Object.keys(propTypes)
            .filter(key => /on([A-Z].*)/.exec(key))
            .reduce((events, ev) => ({
                //@ts-ignore
                ...events,
                [ev]: args =>
                    this.dispatchEvent(new CustomEvent(ev, { ...args }))
                //@ts-ignore
            }), {});
    }

    // @ts-ignore
    convert(propTypes, attrName, attrValue) {
        const propName = Object.keys(propTypes)
            .find(key => key.toLowerCase() == attrName);
        let value = attrValue;
        if (attrValue === 'true' || attrValue === 'false')
            value = attrValue == 'true';
        else if (!isNaN(attrValue) && attrValue !== '')
            value = +attrValue;
        else if (/^{.*}/.exec(attrValue))
            value = JSON.parse(attrValue);
        return {
            name: propName ? propName : attrName,
            value: value
        };
    }
}

window.customElements.define('parking-widget', ParkingWidgetWebWelement)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

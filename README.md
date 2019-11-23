## React widget

This project consists in creating a React widget and wrapping it into a native web component, in order to be cross-framework compatible.

- How can you initialize and render the widget in the Web page? 

The widget is wrapped in a native web component (`src/index.tsx`). This means it can be invoked through a html tag, being compatible with other frameworks and libraries. This favors composition and declarative programming instead of imperative integrations:

```html
    <html>
        <head>
        </head>
        <body>
            <parking-widget city="Milano" parkingId="100">
            </parking-widget>
        </body>
    <html>
```

The component retrieves two attributes:

1. `city`, that is just rendered in the component as the location of the parking, after `Prenota il tuo parcheggio a`. Since it wasnt found at the data of the API.
2. `parkingId`: It would be used to retieve the data from the API to target a particular parking resource.


- How can the Web app communicate with the Parking widget (and vice versa)?

As we saw in the previous example, the component can receive properties as HTML native attributes.
Since its wrapped in a web component, ascending data binding is limited. One solution would be to use functions as params

```html
    <parking-widget onBookItem="addToCart(item)">
```
If its passed as an attribute then it would to convert that string into the function. The problem then become with the scope of that function. So its very limitating and leaves the door open for all kinds of possible injection attacks, since you need to use `eval()` function. So, instead I decided to use custom native events (`src/services/eventService.ts`):

```ts
export const dispatchOnBookProduct = ({id, type} : {id: number, type: string}) => {
    dispatchEvent(new CustomEvent('onBookItem', {bubbles: true, detail: {id, type}}))
}
```

This way, all kind of elements can add an event listener to subscribe to this particular event. The information of the selected parking can be found at the `detail` object. 

It can be logged in the Chrome console using:

```js
monitorEvents(window, "onBookItem")
```

- How can you guarantee that another developer can modify your code without breaking the features? How can you guarantee to modify your code during a refactoring without breaking any functionality?

The app is using Husky for this purpose. Before every commit, a hook is executed in order to check that all tests end successfully (`package.json`):

```json
{
    "husky": {
        "hooks": {
            "pre-commit": "npm test"
        }
    }
}
```

- How do you differentiate between desktop and mobile devices?

Mobile device detection is managed by a custom hook:

```tsx
const Component = () => {
    const isMobile: boolean = useMobileMedia()
    return (<>
        {isMobile ?
            <div>Mobile</div>
            :
            <div>Desktop</div>
        }
    </>)
}
```

This provides a boolean that is automatically updated in function of the size of the screen. Also, the query media that defines the device could be easily changed without the need of recompiling:

```ts
export const mobileMedia = window.mobileMediaQuery | 'only screen and (max-device-width : 480px)' 
```

It could be even passed as a prop to the component, and being set on mounting cycle.

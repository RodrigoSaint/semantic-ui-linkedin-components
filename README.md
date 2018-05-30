## semantic-ui-linkedin-components

This is a component that allows you to display your linkedin info in a simple way.

To use it first you need to download your linkedin data.
To do it go to your settings:
![Linkedin setting](http://i.imgur.com/9oFv8SBg.png)

Then go to privacy and follow the steps to download your data:
![enter image description here](http://i.imgur.com/L0fxzHj.png)

After following the instructions you will have a zip folder with your data, extract it to a folder.

After doing that you can add this package to your react project along to semantic ui components:

> npm i semantic-ui-linkedin-components semantic-ui-react --save

or

> yarn add semantic-ui-linkedin-components semantic-ui-react

After doing it you can execute the **to_json.js** script passing your linkedin folder as a parameter, something like this:

> node node_modules\semantic-ui-linkedin-components\build\to_json.js C:\my-linkedin-folder

Then a json file called profile.json will be generated, import it to your project along to the component:
```javascript
import WordPress from  "semantic-ui-wordpress-components";
import profile from  "./profile";
```
And finally pass the profile to the component:
```javascript
<Linkedin  profile={this.state.profile}  />
```

As a result you will have something like this:
![Final Result](https://i.imgur.com/jU14Emn.png)

---
layout: default
---

So you are love **Jenkins** but hate its ugly user interface and icons... Me too! Introducing **Jenkins Material Theme**.
You can turn your favorite frog CI tool in a handsome prince in few steps!
 
## Features
* Just one small css file (32K)
* Embed minified SVG images
* More than one installation form

## Screenshots
![Screen 1](images/screen1.png)   ![Screen 2](images/screen2.png)   ![Screen 3](images/screen3.png)


## Installation 

### Using your Jenkins Hosting

1. Install [Jenkins Simple Theme Plugin][simple]

1. Upload the file `http://github.com/afonsof/jenkins-material-theme/dist/material-light.css` to your web server

1. Click `Manage Jenkins`

1. Click `Configure System` and scroll down to `Theme`

1. Specify the URL for `material-light.css`. 

1. Click `Save`

### Using this GitHub page
Skip step 2 and use this URL in step 5: `http://github.com/afonsof/jenkins-material-theme/dist/material-light.css`

### Using Stylish (only you will be able to see the awesome theme)

1. Install the [Stylish Chrome extension][stylish]

1. Copy the content of the file `http://github.com/afonsof/jenkins-material-theme/dist/material-light.css`

1. Go to Stylish options and click in `Write new style`

1. Paste the theme css in the code box

1. Click in `Specify` and set your jenkins domain

1. Click in `Save`

1. Go to your Jenkins website and enable the theme in the Stylish Chrome t  oolbar icon


## Development

CSS file are minified and compressed with Grunt. To prepare the environment:

```
npm install
grunt
```

This will generate the following file:
- dist/material-light.css

You can publish the files on gh-pages with the following command:

```
grunt deploy
```

And you can find the file at:
- `http://YOURUSER.github.io/jenkins-material-theme/material-light.css`

## Compatibility
- Simple Theme plugin 0.3
- Jenkins 1.636
- Firefox 3.5 [!]
- Chrome 4+
- Safari 4+
- Opera 15+
- It's not possible to support Microsoft IE or Edge because they don't implement css masks: http://caniuse.com/#feat=css-masks


If you are experiencing issues please let me know! Also, feel free to contribute!

##Thanks to
- [Simple Theme Theme Plugin][simple] for the Simple Theme plugin
- [Google][google] for the the material design inspiration and the icons
- [Material Design Icons][material-design-icons] for some extra icons
- [Stylish][stylish] for making the test of new versions easy

[simple]: https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin
[google]: https://www.google.com/design/spec/material-design/introduction.html
[material-design-icons]: https://materialdesignicons.com/
[stylish]: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe
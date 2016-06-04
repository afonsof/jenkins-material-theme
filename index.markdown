---
layout: default
---

So you love **Jenkins** but hate its ugly user interface and icons... Me too! Introducing **Jenkins Material Theme**.
You can turn your favorite frog CI tool into a handsome prince in few steps! Install this Jenkins Theme!  
 
## Features
* Just one small css file (35K)
* Embed minified SVG images
* Multiple ways to install

## Screenshots
[![Screenshot jenkins-material-theme main](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-main.png)](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-main-large.png)      [![Screenshot jenkins-material-theme legend](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-legend.png)](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-legend-large.png) [![Screenshot jenkins-material-theme console](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-console.png)](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-console-large.png)
[![Screenshot jenkins-material-theme history](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-history.png)](http://jenkins-contrib-themes.github.io/jenkins-material-theme/images/screenshot-jenkins-theme-material-history-large.png)
## Installation 

### Using this GitHub page (recommended) (auto-updated)

1. Install [Jenkins Simple Theme Plugin][simple]

1. Click `Manage Jenkins`

1. Click `Configure System` and scroll down to `Theme`

1. Specify the URL for `https://jenkins-contrib-themes.github.io/jenkins-material-theme/dist/material-light.css`.

1. Click `Save`


### Using the Native Jenkins Plugin

1. Download the file https://github.com/jenkins-contrib-themes/jenkins-material-theme/raw/master/hpi/material-theme.hpi

1. Go to `Manage Jenkins > Plugins > Advanced`

1. Select the downloaded file in the area `Upload Plugin`

1. Click `Upload`

1. Restart your Jenkins Server


### Using Stylish (only you will be able to see the awesome theme)

1. Install the [Stylish Chrome extension][stylish]

1. Copy the content of the file `https://jenkins-contrib-themes.github.io/jenkins-material-theme/dist/material-light.css`

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

## Compatibility
- Simple Theme plugin 0.3

- Jenkins 1.636

- Firefox 3.5+

- Chrome 4+

- Safari 4+

- Opera 15+

- Microsoft IE11 and Edge


If you are experiencing issues please let me know! Also, feel free to contribute!

## License
http://afonsof.mit-license.org/

## Thanks to

- [Simple Theme Plugin][simple] for the Simple Theme plugin

- [Google][google] for the the material design inspiration and the icons

- [Material Design Icons][material-design-icons] for some extra icons

- [Stylish][stylish] for making the test of new versions easy

- [canon-jenkins][canon-jenkins] for the base theme

- [@Heldroe][heldroe] for Firefox and Microsoft support

[simple]: https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin
[google]: https://www.google.com/design/spec/material-design/introduction.html
[material-design-icons]: https://materialdesignicons.com/
[stylish]: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe
[canon-jenkins]: https://github.com/rackerlabs/canon-jenkins
[heldroe]: https://github.com/Heldroe

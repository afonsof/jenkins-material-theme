# Canon for Jenkins

CSS and JS to implement [Rackspace Canon](http://canon.rackspace.com/) as a theme for [Jenkins CI](http://jenkins-ci.org/).

![Before](CanonJenkinsBefore.png "Before")

![After](CanonJenkinsAfter.png "After")


## Usage

1. Install the [Simple Theme Plugin for Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin)
2. Navigate to Jenkins > Manage Jenkins > Configure System > Theme
3. Set _URL of theme CSS_ to `http://bd905956a42f6ed96c17-a6046798c661ed27e3d4fdfd1b3c5e5a.r62.cf1.rackcdn.com/canon-jenkins/styles.css` (or another URL of your setting/choosing)
4. Set _URL of theme JS_ to `http://bd905956a42f6ed96c17-a6046798c661ed27e3d4fdfd1b3c5e5a.r62.cf1.rackcdn.com/canon-jenkins/app.min.js` (or another URL of your setting/choosing)

## To Manually add CSS and JS 

1. Edit: `$JENKINS_HOME/org.codefirst.SimpleThemeDecorator.xml`
```
<?xml version='1.0' encoding='UTF-8'?>
<org.codefirst.SimpleThemeDecorator plugin="simple-theme-plugin@0.3">
  <cssUrl>http://bd905956a42f6ed96c17-a6046798c661ed27e3d4fdfd1b3c5e5a.r62.cf1.rackcdn.com/canon-jenkins/styles.css</cssUrl>
  <jsUrl>http://bd905956a42f6ed96c17-a6046798c661ed27e3d4fdfd1b3c5e5a.r62.cf1.rackcdn.com/canon-jenkins/app.min.js</jsUrl>
</org.codefirst.SimpleThemeDecorator>
```

2. Restart Jenkins
 

## Contributing

```
npm install
grunt
```

# Movie Star app

Demo application showing usage of Ionic 4 framework. It allows to fetch the most popular movies from last year, search for information about movies and save movies to favourites. Angular was selected for as the UI framework.

## Prerequisites:
- Node.js
- Ionic CLI (Ionic)

Recommended for VSC:
- Angular Snippets
- Ionic Snippets

## Application configuration
In order to run the app, you need to rename the `example.config.ts` file to `config.ts` and put there token to **The Movie DB** web api, because that api is used for fetching info about movies. In order to get this token you need to create an user account and then you will find it: `Profile -> Settings -> API`. [Movie Db Web Api](https://www.themoviedb.org/documentation/api)

## Application run
Run: `npm start`

## Application build

### Android
**Prerequisites**

Install and configure:
- JDK8
- Android Studio, install SDK which you want to target
- Gradle
- Setting environment variables: JAVA_HOME="JDK location", ANDROID_HOME="Android SDK location"

For more details check the Cordova [documentation](https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html#project-configuration)


To build app run: `ionic cordova build android`

To deploy app on device run: `cordova run android --nobuild --device`

Production build: `ionic cordova build android --prod --release --device` or `cordova build android --release --device`. 

In order to be able to install release version, app has to be signed [Solution1](https://forum.ionicframework.com/t/how-to-automatically-sign-android-applications-with-the-ionic-cli/87449), [Solution2](https://ionicframework.com/docs/publishing/play-store)

**IMPORTANT**

Before deploying to device:
- Enable developer options on Android Device (Usually need to tap build info in the *About phone* settings)
- Check if device is visible on computer by running: `adb devices`. Some cables or USB-C adapters do not allow debugging mode, so that might be the reason why it is not visible.

## Manual instalation of apk file
Manual installation of the \*.apk file: you need to set *Install unknown apps* in Android settings and copy on the device either via cable or eg. via google drive.

For more information about building for Android platform visit Cordova [CLI Reference](https://cordova.apache.org/docs/en/9.x/reference/cordova-cli/index.html) or Ionic [CLI Reference](https://ionicframework.com/docs/cli/commands/cordova-build).
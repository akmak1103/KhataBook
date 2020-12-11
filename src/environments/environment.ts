// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // 2. Add your credentials from step 1
  production: false,
  firebase: {
    apiKey: "AIzaSyC4-KDmBq-qRoEI89bOecVOG6lGBLPuo_s",
    authDomain: "khaatabook.firebaseapp.com",
    projectId: "khaatabook",
    storageBucket: "khaatabook.appspot.com",
    messagingSenderId: "753780520085",
    appId: "1:753780520085:web:2af8a856b0f2404361579c",
    measurementId: "G-SHF6R7Q5YQ"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

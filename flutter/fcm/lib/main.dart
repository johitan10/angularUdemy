import 'package:flutter/material.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter_facebook_login/flutter_facebook_login.dart';
import 'package:http/http.dart' as http;
import 'dart:convert' as JSON;

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  String _message = '';
  final FirebaseMessaging _firebaseMessaging = FirebaseMessaging();
  bool _isLoggedIn = false;
  Map userProfile;
  final facebookLogin = FacebookLogin();

  _loginWithFB() async {
    final result = await facebookLogin.logIn(['email']);
    print(result.status);
    switch (result.status) {
      case FacebookLoginStatus.loggedIn:
        final token = result.accessToken.token;
        final graphResponse = await http.get(
            'https://graph.facebook.com/v2.12/me?fields=name,picture,email&access_token=${token}');
        final profile = JSON.jsonDecode(graphResponse.body);
        print(profile);
        setState(() {
          userProfile = profile;
          _isLoggedIn = true;
        });
        break;

      case FacebookLoginStatus.cancelledByUser:
        setState(() => _isLoggedIn = false);
        break;
      case FacebookLoginStatus.error:
        print(result.errorMessage);
        setState(() => _isLoggedIn = false);
        break;
    }
  }

  _logout() {
    facebookLogin.logOut();
    setState(() {
      _isLoggedIn = false;
    });
  }

  _register() {
    _firebaseMessaging.getToken().then((token) => print(token));
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getMessage();
  }

  void getMessage() {
    _firebaseMessaging.configure(
        onMessage: (Map<String, dynamic> message) async {
      print('on message $message');
      setState(() => _message = message["notification"]["title"]);
    }, onResume: (Map<String, dynamic> message) async {
      print('on resume $message');
      setState(() => _message = message["notification"]["title"]);
    }, onLaunch: (Map<String, dynamic> message) async {
      print('on launch $message');
      setState(() => _message = message["notification"]["title"]);
    });
  }

  /* @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text("Message: $_message"),
                OutlineButton(
                  child: Text("Register My Device"),
                  onPressed: () {
                    _register();
                  },
                ),
                // Text("Message: $message")
              ]),
        ),
      ),
    );
  } */

  @override
  Widget build(BuildContext context) {
    Widget fecebookWidget;
    if (_isLoggedIn) {
      fecebookWidget = Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Image.network(
            userProfile["picture"]["data"]["url"],
            height: 50.0,
            width: 50.0,
          ),
          Text(userProfile["name"]),
          OutlineButton(
            child: Text("Logout"),
            onPressed: () {
              _logout();
            },
          )
        ],
      );
    } else {
      fecebookWidget = Center(
        child: OutlineButton(
          child: Text("Login with Facebook"),
          onPressed: () {
            _loginWithFB();
          },
        ),
      );
    }
    Widget fcm =
        Column(mainAxisAlignment: MainAxisAlignment.center, children: <Widget>[
      Text("Message: $_message"),
      OutlineButton(
        child: Text("Register My Device"),
        onPressed: () {
          _register();
        },
      ),
      // Text("Message: $message")
    ]);
    return MaterialApp(
      home: Scaffold(
        body: Center(
            child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [fecebookWidget,Divider(),fcm])),
      ),
    );
  }
}

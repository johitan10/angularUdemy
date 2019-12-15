import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Proporciona una función para manejar las rutas con nombre. Usa esta función para 
      // identificar la ruta con nombre que ha sido añadida con push, y crea la 
      // pantalla correcta.
      onGenerateRoute: (settings) {
        // Si haces push de la ruta PassArgumentsScreen
        if (settings.name == PassArgumentsScreen.routeName) {
          // Convierte los argumentos al tipo correcto: ScreenArguments.
          final ScreenArguments args = settings.arguments;

          // Entonces, extrae los datos requeridos de los argumentos
          // y pasa los datos a la pantalla correcta.
          return MaterialPageRoute(
            builder: (context) {
              return PassArgumentsScreen(
                title: args.title,
                message: args.message,
              );
            },
          );
        }
      },
      title: 'Navigation with Arguments',
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            // Un botón que navega a una ruta con nombre. La ruta con nombre
            // extrae los argumentos por si misma.
            RaisedButton(
              child: Text("Navigate to screen that extracts arguments"),
              onPressed: () {
                // Cuando el usuario pulsa el botón, navega a una ruta específica
                // y proporciona los argumentos como parte de RouteSettings.
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ExtractArgumentsScreen(),
                    // Pasa los argumentos como parte de RouteSettings. 
                    // ExtractArgumentScreen lee los argumentos de su 
                    // propiedad settings.
                    settings: RouteSettings(
                      arguments: ScreenArguments(
                        'Extract Arguments Screen',
                        'This message is extracted in the build method.',
                      ),
                    ),
                  ),
                );
              },
            ),
            // Un botón que navega a una ruta con nombre. Para esta ruta, extrae
            // los argumentos en la función onGenerateRoute y los pasa a 
            // la pantalla.
            RaisedButton(
              child: Text("Navigate to a named that accepts arguments"),
              onPressed: () {
                // Cuando el usuario pulsa el botón, navega a la ruta con nombre
                // y proporciona los argumentos con un parámetro opcional.
                Navigator.pushNamed(
                  context,
                  PassArgumentsScreen.routeName,
                  arguments: ScreenArguments(
                    'Accept Arguments Screen',
                    'This message is extracted in the onGenerateRoute function.',
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

// Un widget que extrae los argumentos necesarios del ModalRoute.
class ExtractArgumentsScreen extends StatelessWidget {
  static const routeName = '/extractArguments';

  @override
  Widget build(BuildContext context) {
    // Extrae los argumentos de la propiedad settings del ModalRoute actual y lo convierte
    // en un objeto ScreenArguments.
    final ScreenArguments args = ModalRoute.of(context).settings.arguments;

    return Scaffold(
      appBar: AppBar(
        title: Text(args.title),
      ),
      body: Center(
        child: Text(args.message),
      ),
    );
  }
}

// Un widget que acepta los argumentos necesarios a través de su constructor.
class PassArgumentsScreen extends StatelessWidget {
  static const routeName = '/passArguments';

  final String title;
  final String message;

  // Este widget acepta los argumentos como parámetros de su constructor. No  
  // extrae los argumentos del ModalRoute.
  //
  // Los argumentos son extraidos por la función onGenerateRoute proporcionada por el 
  // widget MaterialApp.
  const PassArgumentsScreen({
    Key key,
    @required this.title,
    @required this.message,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Text(message),
      ),
    );
  }
}

// Puedes pasar cualquier objeto al parámetro `arguments`. En este ejemplo, crea una 
// clase que contiene ambos, un título y un mensaje personalizable.
class ScreenArguments {
  final String title;
  final String message;

  ScreenArguments(this.title, this.message);
}
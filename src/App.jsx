import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Server,
  Globe,
  Database,
  Code,
  History,
  Variable,
  Book,
} from "lucide-react";

const TimelineEvent = ({ year, title, description, isLast }) => (
  <div className="flex items-start mb-4">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
        {year}
      </div>
      {!isLast && <div className="w-1 h-16 bg-purple-200 mt-2"></div>}
    </div>
    <div className="ml-4">
      <h3 className="font-bold text-lg text-purple-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const CodeBlock = ({ code }) => (
  <div className="bg-[#1E1E1E] rounded-lg p-4 font-mono text-sm text-white overflow-hidden">
    <div className="flex items-center gap-2 mb-3 border-b border-gray-700 pb-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="ml-2 text-gray-400">php</span>
    </div>
    <pre className="language-php">
      <code className="text-white">{code}</code>
    </pre>
  </div>
);

const PHPPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const timelineEvents = [
    {
      year: "1994",
      title: "Nacimiento de PHP",
      description:
        "Rasmus Lerdorf crea PHP (Personal Home Page) como un conjunto de scripts CGI",
    },
    {
      year: "1995",
      title: "PHP/FI",
      description:
        "Primera versión pública llamada PHP/FI (Personal Home Page/Forms Interpreter)",
    },
    {
      year: "1998",
      title: "PHP 3.0",
      description:
        "Reescrito por Andi Gutmans y Zeev Suraski, cambiando el significado a PHP: Hypertext Preprocessor",
    },
    {
      year: "2000",
      title: "PHP 4.0",
      description:
        "Introducción del motor Zend Engine 1.0 y mejor soporte para OOP",
    },
    {
      year: "2004",
      title: "PHP 5.0",
      description: "Mejor soporte para OOP, PDO, y mejor manejo de XML",
    },
    {
      year: "2015",
      title: "PHP 7.0",
      description:
        "Mayor rendimiento y nuevas características como tipos de retorno escalares",
    },
    {
      year: "2020",
      title: "PHP 8.0",
      description: "JIT compiler, named arguments, attributes, y union types",
    },
  ];

  const slides = [
    {
      title: "Historia de PHP",
      icon: <History className="w-8 h-8 text-purple-600" />,
      content: (
        <div className="p-4">
          <div className="max-w-2xl mx-auto">
            {timelineEvents.map((event, index) => (
              <TimelineEvent
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Variables en PHP",
      icon: <Variable className="w-8 h-8 text-purple-600" />,
      code: `<?php
// Tipos de variables básicos
$string = "Hola Mundo";           // String
$integer = 42;                    // Integer
$float = 3.14;                    // Float
$boolean = true;                  // Boolean
$array = [1, 2, 3];              // Array indexado
$null = null;                     // Null

// Array asociativo
$persona = [
    'nombre' => 'Juan',
    'edad'   => 25,
    'ciudad' => 'Madrid'
];

// Constantes
define('PI', 3.14159);
const MAX_USUARIOS = 100;

// Verificación de tipos
echo gettype($string);    // string
echo gettype($integer);   // integer

// Conversión de tipos
$numero = "42";
$converted = (int)$numero;

// Interpolación de variables
echo "Hola, {$persona['nombre']}!";
`,
      explanation: [
        "✦ Las variables en PHP siempre comienzan con $",
        "✦ PHP es un lenguaje de tipado dinámico",
        "✦ Soporta múltiples tipos de datos primitivos y compuestos",
        "✦ Los arrays pueden ser indexados o asociativos",
        "✦ Las constantes se definen con define() o const",
      ],
    },
    {
      title: "Estructuras de Control",
      icon: <Code className="w-8 h-8 text-purple-600" />,
      explanation: [
        "✦ If-Else, Switch",
        "✦ Operadores de comparación:",
        "  • == (igual)",
        "  • === (idéntico)",
        "  • >, <, >=, <=",
        "  • != (diferente)",
        "  • !== (no idéntico)",
      ],
      code: `<?php
// If-Else
$edad = 20;
if ($edad >= 18) {
    echo "Eres mayor de edad";
} else {
    echo "Eres menor de edad";
}

// Switch
$dia = "lunes";
switch ($dia) {
    case "lunes":
        echo "Inicio de semana";
        break;
    case "viernes":
        echo "¡Fin de semana!";
        break;
    default:
        echo "Otro día";
}
?>`,
    },
    {
      title: "Ciclos en PHP",
      icon: <Code className="w-8 h-8 text-purple-600" />,
      explanation: [
        "✦ For, While, Do-While",
        "✦ Foreach para arrays",
        "✦ Break y Continue",
        "✦ Control de iteración",
      ],
      code: `<?php
// For básico
for ($i = 0; $i < 5; $i++) {
    echo $i . " ";
}

// Foreach con array asociativo
$usuarios = ['Juan' => 25, 'María' => 30];
foreach ($usuarios as $nombre => $edad) {
    echo "$nombre tiene $edad años\\n";
}

// While con break
$contador = 0;
while (true) {
    if ($contador >= 5) break;
    echo $contador++;
}
?>`,
    },
    {
      title: "Funciones",
      icon: <Code className="w-8 h-8 text-purple-600" />,
      explanation: [
        "✦ Definición y parámetros",
        "✦ Return y void",
        "✦ Scope de variables",
        "✦ Funciones anónimas",
        "✦ Type hinting (PHP 7+)",
      ],
      code: `<?php
// Función básica
function saludar(string $nombre): string {
    return "Hola " . $nombre;
}

// Función con parámetros por defecto
function calcularTotal(
    float $precio, 
    float $impuesto = 0.21
): float {
    return $precio * (1 + $impuesto);
}

// Función anónima
$multiplicar = function($a, $b) {
    return $a * $b;
};
?>`,
    },
    {
      title: "PHP en HTML",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      explanation: [
        "✦ Integración con HTML",
        "✦ Tags de apertura y cierre",
        "✦ Echo y Print",
        "✦ Escapado de HTML",
        "✦ Include y Require",
      ],
      code: `<!DOCTYPE html>
<html>
<head>
    <title><?php echo htmlspecialchars($titulo); ?></title>
</head>
<body>
    <?php
    // Incluir archivo externo
    require_once 'header.php';
    
    // Mostrar contenido dinámico
    if ($loggedIn) {
        echo "<h1>Bienvenido {$usuario['nombre']}</h1>";
    } else {
        echo '<a href="login.php">Iniciar sesión</a>';
    }
    ?>
    
    <!-- Sintaxis alternativa para estructuras de control -->
    <?php foreach ($posts as $post): ?>
        <article>
            <h2><?= htmlspecialchars($post['titulo']) ?></h2>
            <p><?= htmlspecialchars($post['contenido']) ?></p>
        </article>
    <?php endforeach; ?>
</body>
</html>`,
    },
    {
      title: "Métodos HTTP y Forms",
      icon: <Server className="w-8 h-8 text-purple-600" />,
      explanation: [
        "✦ GET vs POST",
        "✦ Seguridad y validación",
        "✦ Manejo de archivos",
        "✦ Headers y cookies",
        "✦ Sesiones",
      ],
      code: `<!-- Formulario HTML -->
<form method="POST" action="procesar.php" enctype="multipart/form-data">
    <input type="text" name="usuario" required>
    <input type="file" name="archivo">
    <button type="submit">Enviar</button>
</form>

<?php
// procesar.php
session_start();

// Validación de POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = filter_input(INPUT_POST, 'usuario', 
                          FILTER_SANITIZE_STRING);
    
    // Manejo de archivos
    if (isset($_FILES['archivo'])) {
        $archivo = $_FILES['archivo'];
        move_uploaded_file(
            $archivo['tmp_name'],
            'uploads/' . $archivo['name']
        );
    }
    
    // Cookies y sesiones
    setcookie('ultimo_acceso', time(), time() + 3600);
    $_SESSION['usuario'] = $usuario;
}
?>`,
    },
    {
      title: "Métodos HTTP en Detalle",
      icon: <Server className="w-8 h-8 text-purple-600" />,
      explanation: [
        "✦ GET: Solicitar datos",
        "✦ POST: Enviar datos",
        "✦ PUT: Actualizar recursos",
        "✦ DELETE: Eliminar recursos",
        "✦ Headers y respuestas",
      ],
      code: `<?php
// Detectar método HTTP
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Obtener parámetros de URL
        $id = $_GET['id'] ?? null;
        $usuario = obtenerUsuario($id);
        echo json_encode($usuario);
        break;
        
    case 'POST':
        // Obtener datos del body
        $datos = json_decode(file_get_contents('php://input'), true);
        $resultado = crearUsuario($datos);
        
        // Enviar respuesta
        header('Content-Type: application/json');
        http_response_code(201);
        echo json_encode(['status' => 'success']);
        break;
}

// Manejo de headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Ejemplo de API REST básica
function obtenerUsuario($id) {
    // Código de base de datos...
}
?>`,
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-900 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white text-center">
            Introducción a PHP
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200">
          <div
            className="h-2 bg-gradient-to-r from-purple-500/80 to-purple-700/80 transition-all duration-500"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="min-h-[600px]">
            <div className="flex items-center gap-4 mb-6">
              {slides[currentSlide].icon}
              <h2 className="text-2xl font-bold text-gray-800">
                {slides[currentSlide].title}
              </h2>
            </div>

            {slides[currentSlide].content ? (
              slides[currentSlide].content
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {slides[currentSlide].explanation?.map((line, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                      <p className="text-gray-700">{line}</p>
                    </div>
                  ))}
                </div>
                {slides[currentSlide].code && (
                  <CodeBlock code={slides[currentSlide].code} />
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="mr-2" />
              Anterior
            </button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))
              }
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              disabled={currentSlide === slides.length - 1}
            >
              Siguiente
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PHPPresentation;

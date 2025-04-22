# MCP Character Counter

- [Versión en español](#contador-de-caracteres-mcp)

A lightweight Model Context Protocol (MCP) server that provides detailed character analysis for text. This tool counts total characters, characters without spaces, letters, numbers, and symbols.

## Features

- Count total characters in text
- Count characters excluding spaces
- Count letters (a-z, A-Z)
- Count numbers (0-9)
- Count symbols (non-alphanumeric characters)
- Detailed breakdown of character types

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v17 or higher
- [Claude Desktop](https://claude.ai/download) or [GitHub Copilot](https://github.com/features/copilot)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/webreactiva-devs/mcp-character-counter.git
   cd mcp-character-counter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage with Claude Desktop

1. Open your Claude Desktop configuration:

   **macOS**:
   ```bash
   code ~/Library/Application\ Support/Claude/claude_desktop_config.json
   ```

   **Windows**:
   ```powershell
   code %APPDATA%\Claude\claude_desktop_config.json
   ```

2. Add the character counter to your MCP servers:

   ```json
   {
     "mcpServers": {
       "character-counter": {
         "command": "node",
         "args": [
           "/ABSOLUTE/PATH/TO/webreactiva-devs/mcp-character-counter/mcp/character-counter.js"
         ]
       }
     }
   }
   ```

   Replace `/ABSOLUTE/PATH/TO/` with the actual path on your system.

3. Restart Claude Desktop to load the new MCP server.

4. Look for the hammer icon in the input box, which indicates available MCP tools.

5. Ask Claude to analyze text character counts, for example:
   - "Count the characters in this paragraph"
   - "How many numbers are in this text: '123 Main St, Apt 45B'?"
   - "Analyze the character composition of my email address"

## Usage with GitHub Copilot

To use this MCP server with GitHub Copilot:

1. Make sure you have GitHub Copilot installed in your VS Code or other compatible IDE.

2. Open VS Code settings and search for "Copilot MCP".

3. Add a new MCP server configuration:
   ```json
   "github.copilot.advanced": {
     "mcp.servers": [
       {
         "id": "character-counter",
         "name": "Character Counter",
         "transport": "stdio",
         "command": "node",
         "args": ["/path/to/webreactiva-devs/mcp-character-counter/mcp/character-counter.js"]
       }
     ]
   }
   ```

4. Restart VS Code.

5. You can now use the character counter with Copilot Chat commands like:
   - `/mcp count-characters-in-text This is the text I want to analyze`

## Development

To modify or extend this MCP server:

1. Make your changes to `character-counter.js`
2. Restart the server in your MCP client

## How It Works

This MCP server implements a single tool called `count-characters-in-text` that accepts text input and returns a detailed analysis of character composition. The server uses the Model Context Protocol to expose this functionality to compatible AI assistants.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

# Contador de Caracteres MCP

Un servidor ligero de Model Context Protocol (MCP) que proporciona un análisis detallado de caracteres en un texto. Esta herramienta cuenta caracteres totales, caracteres sin espacios, letras, números y símbolos.

## Características

- Cuenta el total de caracteres en un texto
- Cuenta caracteres excluyendo espacios
- Cuenta letras (a-z, A-Z)
- Cuenta números (0-9)
- Cuenta símbolos (caracteres no alfanuméricos)
- Desglose detallado de tipos de caracteres

## Instalación

### Requisitos previos

- [Node.js](https://nodejs.org/) v17 o superior
- [Claude Desktop](https://claude.ai/download) o [GitHub Copilot](https://github.com/features/copilot)

### Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/webreactiva-devs/mcp-character-counter.git
   cd mcp-character-counter
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```



## Uso con Claude Desktop

1. Abre la configuración de Claude Desktop:

   **macOS**:
   ```bash
   code ~/Library/Application\ Support/Claude/claude_desktop_config.json
   ```

   **Windows**:
   ```powershell
   code %APPDATA%\Claude\claude_desktop_config.json
   ```

2. Añade el contador de caracteres a tus servidores MCP:

   ```json
   {
     "mcpServers": {
       "character-counter": {
         "command": "node",
         "args": [
           "/RUTA/ABSOLUTA/A/webreactiva-devs/mcp-character-counter/mcp/character-counter.js"
         ]
       }
     }
   }
   ```

   Reemplaza `/RUTA/ABSOLUTA/A/` con la ruta actual en tu sistema.

3. Reinicia Claude Desktop para cargar el nuevo servidor MCP.

4. Busca el icono de martillo en la caja de entrada, que indica las herramientas MCP disponibles.

5. Pide a Claude que analice el recuento de caracteres en un texto, por ejemplo:
   - "Cuenta los caracteres en este párrafo"
   - "¿Cuántos números hay en este texto: '123 Calle Principal, Apto 45B'?"
   - "Analiza la composición de caracteres de mi dirección de correo electrónico"

## Uso con GitHub Copilot

Para usar este servidor MCP con GitHub Copilot:

1. Asegúrate de tener GitHub Copilot instalado en VS Code u otro IDE compatible.

2. Abre la configuración de VS Code y busca "Copilot MCP".

3. Añade una nueva configuración de servidor MCP:
   ```json
   "github.copilot.advanced": {
     "mcp.servers": [
       {
         "id": "character-counter",
         "name": "Character Counter",
         "transport": "stdio",
         "command": "node",
         "args": ["/ruta/a/webreactiva-devs/mcp-character-counter/mcp/character-counter.js"]
       }
     ]
   }
   ```

4. Reinicia VS Code.

5. Ahora puedes usar el contador de caracteres con comandos de Copilot Chat como:
   - `/mcp count-characters-in-text Este es el texto que quiero analizar`

## Desarrollo

Para modificar o extender este servidor MCP:

1. Realiza tus cambios en `character-counter.js`
2. Reinicia el servidor en tu cliente MCP

## Cómo funciona

Este servidor MCP implementa una única herramienta llamada `count-characters-in-text` que acepta texto como entrada y devuelve un análisis detallado de la composición de caracteres. El servidor utiliza el Protocolo de Contexto del Modelo para exponer esta funcionalidad a asistentes de IA compatibles.

## Licencia

MIT

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, no dudes en enviar un Pull Request.

# Colofón

Creado con 🧡 para la Comunidad Malandriner de webreactiva.com

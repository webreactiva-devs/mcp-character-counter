// A simple MCP server that counts characters in text

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create the MCP server instance
const server = new McpServer(
  {
    name: "character-counter",
    version: "1.0.0",
  },
  {
    capabilities: {
      logging: {},
      tools: {},
    },
  }
);

// Add a tool to count characters
server.tool(
  "count-characters-in-text",
  "Count characters in a text",
  {
    text: z.string().describe("The text whose characters you want to count"),
  },
  async ({ text }) => {
    server.server.sendLoggingMessage({
      level: "info",
      data: text,
    });

    // Total character count
    const totalCount = text.length;

    // Character count without spaces
    const noSpacesCount = text.replace(/\s/g, "").length;

    // Letter count (a-z, A-Z)
    const lettersCount = (text.match(/[a-zA-Z]/g) || []).length;

    // Number count
    const numbersCount = (text.match(/[0-9]/g) || []).length;

    // Symbol count (everything that is not a letter, number, or space)
    const symbolsCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;

    server.server.sendLoggingMessage({
      level: "info",
      data: {
        totalCount,
        noSpacesCount,
        lettersCount,
        numbersCount,
        symbolsCount,
      },
    });

    return {
      content: [
        {
          type: "text",
          text: `Character analysis:
- Total characters: ${totalCount}
- Characters without spaces: ${noSpacesCount}
- Letters: ${lettersCount}
- Numbers: ${numbersCount}
- Symbols: ${symbolsCount}`,
        },
      ],
    };
  }
);

// Start the server with stdio transport
async function main() {
  try {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Character counting server started successfully");
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

main();

import { defineMcp } from "@lovable.dev/mcp-js";
import listServicesTool from "./tools/list-services";
import getContactInfoTool from "./tools/get-contact-info";

export default defineMcp({
  name: "happen-mcp",
  title: "Happen MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Happen agency site. Use `list_services` to enumerate services and `get_contact_info` for public contact details.",
  tools: [listServicesTool, getContactInfoTool],
});

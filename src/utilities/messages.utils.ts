import fs from 'fs';
import path from 'path';
import { ModuleType } from '../Fixtures/Constants/RationCardRegistration';

type Messages = Record<string, string>;
type ModuleMessages = Record<string, Messages>;

const messages: Record<string, ModuleMessages> = {};

/**
 * Load a JSON file safely and return its content.
 */
const loadJSON = (filePath: string): Messages => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as Messages;
  } catch (err) {
    console.error(`Error loading file: ${filePath}`, err);
    return {};
  }
};

/**
 * Preload all messages into memory at startup.
 */
export const preloadMessages = (): void => {
  const baseDir = path.join(__dirname, '../Fixtures/Messages/message.json');

  const modules = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dir) => dir.isDirectory());

  for (const module of modules) {
    const moduleName = module.name;
    messages[moduleName] = {};

    const modulePath = path.join(baseDir, moduleName);
    const files = fs.readdirSync(modulePath);

    for (const file of files) {
      const categoryName = path.basename(file, '.message.json');
      const filePath = path.join(modulePath, file);
      messages[moduleName][categoryName] = loadJSON(filePath);
    }
  }
};

/**
 * Fetch a message by module, category, and key with dynamic replacements.
 */
export const getMessage = (
  moduleName: ModuleType,
  category: string,
  key: string,
  replacements: Record<string, string> = {},
  lang?: string
): string => {
  const moduleMessages = messages[moduleName];
  if (!moduleMessages) {
    throw new Error(`Module not found: ${moduleName}`);
  }

  const categoryMessages = moduleMessages[category];
  if (!categoryMessages) {
    throw new Error(`Category not found: ${category}`);
  }

  const messageTemplate = categoryMessages[key];
  if (!messageTemplate) {
    throw new Error(`Message key not found: ${key}`);
  }
  console.log('lang', lang);

  // Replace placeholders with values
  return Object.keys(replacements).reduce(
    (msg, placeholder) =>
      msg.replace(
        new RegExp(`\\{${placeholder}\\}`, 'g'),
        replacements[placeholder]
      ),
    messageTemplate
  );
};

// Preload messages at startup
preloadMessages();

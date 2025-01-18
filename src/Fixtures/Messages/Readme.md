# Message Loader Utility

This utility provides a centralized way to manage and retrieve dynamic messages in a React TypeScript project. Messages are preloaded from JSON files into memory during application startup for fast and efficient access.

---

## File Structure

The utility follows this file structure:

```plaintext
src/
  utils/
    messages/
      module1/
        apiMessages.json
        errorMessages.json
      module2/
        apiMessages.json
        errorMessages.json
    messageLoader.ts
```

### Example JSON Files

**`module1/apiMessages.json`**:

```json
{
  "createSuccess": "The {entity} has been created successfully.",
  "updateSuccess": "The {entity} has been updated successfully."
}
```

**`module1/errorMessages.json`**:

```json
{
  "missingField": "The {field} field is required.",
  "invalidValue": "The value for {field} is invalid."
}
```

---

## Preloading Messages

Messages are preloaded into memory during application startup. This ensures fast access at runtime.

### Preloading Function

```typescript
preloadMessages(): void;
```

- Loads all messages from `src/utils/messages/` into memory.
- Should be called at application startup.

---

## Retrieving Messages

### Function Signature

```typescript
getMessage(
  moduleName: string,
  category: string,
  key: string,
  replacements?: Record<string, string>
): string;
```

### Parameters

- `moduleName`: Name of the module (e.g., `module1`, `module2`).
- `category`: Category of the message (e.g., `apiMessages`, `errorMessages`).
- `key`: Key of the specific message in the JSON file.
- `replacements` (optional): An object where keys are placeholders in the message template, and values are their replacements.

### Returns

- The message string with placeholders replaced by the provided values.

### Example Usage

#### Without Placeholders

```typescript
const message = getMessage('module1', 'apiMessages', 'createSuccess');
console.log(message); // Output: "The {entity} has been created successfully."
```

#### With Placeholders

```typescript
const message = getMessage('module1', 'apiMessages', 'createSuccess', {
  entity: 'User',
});
console.log(message); // Output: "The User has been created successfully."
```

#### Handling Errors

If the specified `moduleName`, `category`, or `key` is not found, the function will throw an error:

```typescript
try {
  const message = getMessage('module1', 'apiMessages', 'nonExistentKey');
} catch (error) {
  console.error(error.message); // Output: "Message key not found: nonExistentKey"
}
```

---

## Usage in a React Component

**ExampleComponent.tsx**:

```tsx
import React from 'react';
import { getMessage } from '../utils/messageLoader';

const ExampleComponent: React.FC = () => {
  const successMessage = getMessage('module1', 'apiMessages', 'createSuccess', {
    entity: 'User',
  });

  const errorMessage = getMessage('module1', 'errorMessages', 'missingField', {
    field: 'Email',
  });

  return (
    <div>
      <h1>Dynamic Messages</h1>
      <p>Success: {successMessage}</p>
      <p>Error: {errorMessage}</p>
    </div>
  );
};

export default ExampleComponent;
```

---

## Advantages

1. **Centralized Management**:

   - All messages are stored in a single location, making it easy to manage and update.

2. **Dynamic Placeholders**:

   - Supports dynamic values using placeholders (e.g., `{entity}`, `{field}`).

3. **Performance**:

   - Messages are preloaded into memory at startup, avoiding repeated file system access at runtime.

4. **Extensibility**:
   - Adding new modules or categories requires no code changes—just add new JSON files to the appropriate directory.

---

## Error Handling

- **Module Not Found**: Throws an error if the specified `moduleName` does not exist.
- **Category Not Found**: Throws an error if the specified `category` does not exist.
- **Key Not Found**: Throws an error if the specified `key` does not exist.
- **Invalid JSON**: Logs an error message if a JSON file cannot be parsed.

---

## Setup Instructions

1. Place your JSON message files in `src/utils/messages/` under appropriate module and category folders.
2. Import and call `preloadMessages` at application startup (e.g., in the entry point `index.ts` or `App.tsx`).

   ```typescript
   import { preloadMessages } from './utils/messageLoader';

   preloadMessages();
   ```

3. Use `getMessage` to fetch messages wherever needed.

---

## Future Enhancements

1. **Internationalization (i18n)**:

   - Extend the structure to support multiple languages.

2. **Default Fallback Messages**:

   - Provide default fallback messages for missing keys.

3. **Asynchronous Preloading**:
   - Convert preloading to an asynchronous process if JSON files become large.

---

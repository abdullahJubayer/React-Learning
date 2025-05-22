# What is Local Storage?

In simple words, `localStorage` is a storage feature of the web browser that allows us to store data in the form of key-value pairs. `localStorage` is browser-specific and follows the **same-origin policy**, meaning it stores data only for a specific website in a specific browser (e.g., data stored for `www.x.com` will not be accessible by `www.y.com`).

---

## What Data Types Can We Store?

We can only store **string** data in `localStorage`. It provides the following methods:

- `setItem(key, value)`: Adds a key-value pair to `localStorage`.
- `getItem(key)`: Retrieves the value associated with the given key.
- `clear()`: Clears all data in `localStorage`.

However, we can also store arrays and objects by converting them into strings using `JSON.stringify()`, and retrieve them using `JSON.parse()`.

**Example:**

```javascript
const person = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(person));
```

---

## What Are the Limitations of `localStorage`?

- `localStorage` is **not encrypted**, so it is not safe to store sensitive data like authentication credentials.
- Most browsers allow only **about 5MB** of storage per origin.

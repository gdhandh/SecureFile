# file-encryption

A tools for encrypting and decrypting files, the files are encrypted using AES-256.

> I'm using this tool to encrypt password sheet and other sensitive information.

## Installation

### Requirements:

- Node.js
- NPM (Node Package Manager)

### Install dependencies:

```bash
npm install
```

## Usage

you can set a secret key in `.env` file or use a command line argument.

if you use a `secretKey` argument, secret key from `.env` will be ignored.

### Encrypt file

```bash
npm start enc <file> <secretKey:optional>
```

### Decrypt file

```bash
npm start dec <file> <secretKey:optional>
```
Image:
![image](https://user-images.githubusercontent.com/92927610/198975104-456e27da-8d96-480d-94c8-a666a4930327.png)

![image](https://user-images.githubusercontent.com/92927610/198975034-1f8f6701-6c84-42ac-b2c9-c9e68da3577f.png)

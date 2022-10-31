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

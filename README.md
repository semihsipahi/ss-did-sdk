# My SDK

A simple SDK for interacting with D-ID API.

## Installation

```bash
npm install ss-did-sdk
```

# Usage

```bash
import { DIDClient } from 'ss-did-sdk';

const client = new DIDClient({ apiKey: 'your-api-key' });
const token = await client.authenticate();

console.log(token);
```

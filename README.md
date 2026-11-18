# Factory54 Checkout Info Extension

Checkout UI extension that shows a banner message to logged-in customers only.

## Behavior

- **Logged-in customer** — A banner with a configurable heading and message.
- **Guest** — Extension is hidden.

## Merchant settings

| Setting | Description |
|---------|-------------|
| Block type | Banner tone: `info`, `warning`, `success`, `critical`, or `auto` |
| Message | Banner message text |

## Development

```bash
npm install
shopify app dev
```

Link the app to your Shopify Partner account on first run:

```bash
shopify app config link
```

Deploy:

```bash
shopify app deploy
```

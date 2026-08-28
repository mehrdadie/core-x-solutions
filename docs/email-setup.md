# Email Setup: ImprovMX Catch-All Forwarding

## Overview

Core-X Solutions uses **ImprovMX** for catch-all email forwarding on the `@core-x.solutions` domain.

All emails sent to any address at `@core-x.solutions` (including typos and non-existent addresses) are automatically forwarded to **mehrdadfashami@gmail.com**.

**Why ImprovMX?**
- Free, no signup required
- Simple DNS configuration
- Reliable forwarding
- Works with GoDaddy's nameservers

---

## Setup Steps

### 1. Update MX Records at GoDaddy

Go to **GoDaddy DNS Settings** for `core-x.solutions`:

1. Log in to GoDaddy
2. Navigate to **Domains** → `core-x.solutions` → **DNS**
3. Find the **MX Records** section
4. Replace existing MX records with:

| Type | Name | Value | Priority |
|------|------|-------|----------|
| MX | @ | mx1.improvmx.com | 10 |
| MX | @ | mx2.improvmx.com | 20 |

5. Save changes
6. Wait for DNS propagation (usually 5-15 minutes, up to 24 hours)

### 2. Verify at ImprovMX

1. Go to https://app.improvmx.com
2. Enter domain: `core-x.solutions`
3. Add destination email: `mehrdadfashami@gmail.com`
4. The catch-all is now active

**That's it!** All emails to `@core-x.solutions` are now forwarded.

---

## Testing

Send a test email to any address at your domain:
- `test@core-x.solutions`
- `hello@core-x.solutions`
- `typo@core-x.solutions` (even non-existent addresses work)

Check `mehrdadfashami@gmail.com` for the forwarded email.

---

## Limitations

- **No replies from @core-x.solutions** — replies come from `mehrdadfashami@gmail.com`
- For branded email replies, consider upgrading to Zoho Mail ($1-2/user/month)

---

## Managing Rules

Visit https://app.improvmx.com anytime to:
- Add specific forwarding rules (e.g., `support@core-x.solutions` → different inbox)
- View forwarding logs
- Disable/enable the catch-all

---

## DNS Records (Reference)

If you need to verify or troubleshoot:

```
MX: mx1.improvmx.com (priority 10)
MX: mx2.improvmx.com (priority 20)
```

These should be the **only** MX records for `core-x.solutions`. Remove any old MX records.

---

## Next Steps (Optional)

If you need branded email replies (reply from `@core-x.solutions`):

1. **Upgrade to Zoho Mail** — Free tier supports 5 users
2. **Use Cloudflare Email Routing** — Requires moving DNS to Cloudflare
3. **Send via API** — Use SendGrid/Mailgun for outbound emails

See `docs/auto-blog.md` for how outbound emails are currently handled.

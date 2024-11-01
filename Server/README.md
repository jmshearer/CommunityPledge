# Server

Realtime data can be sent back to a backend server via JSONP (easiest method for doing so from potentially-statically-hosted files).  The `reportingUrl` is configured in `config.js`.  Security was not a major consideration for this implementation although a shared key could be passed via the `reportingUrl`.  This shared key will, of course, be visible on the client side so the use of this software should either be restricted to a secure kiosk or extended to support a secure authentication workflow.

## Data Format

**Query**: The following values are passed to the server:

| Parameter    | Value |
| -------- | ------- |
| `option`  | Selected value: `optionA`, `optionB`, `optionC` |
| `placeIdentifier` | Place identifier specified in `config.js`     |
| `timestamp` | Date/timestamp of request (used primarily to bust the cache) |

**Response**: The server must respond with a JSON object that, at a minimum contains a boolean `success` value.  Sample response:

```
{"success": true, "message": "Data Received"}
```


## Sample Receivers

- [Google Spreadsheet](GoogleSpreadsheet/)
- [PHP](PHP/)
- [Node.js](Node.js/)


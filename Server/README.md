# Various Server Options

Realtime data can be sent back to a backend server via JSONP (easiest method for doing so from potentially-statically-hosted files).  The `reportingURL` is configured in `config.js`.  Security was not a major consideration for this implementation although a shared key could be passed via the `reportingUrl`.

## Data Format

| Parameter    | Value |
| -------- | ------- |
| `option`  | Selected value: `optionA`, `optionB`, `optionC` |
| `placeIdentifier` | Place identifier specified in `config.js`     |
| `timestamp` | Date/timestamp of request (used primarily to bust the cache) |


## Sample Receivers

- [Google Spreadsheet](GoogleSpreadsheet/)
- [PHP](PHP/)
- [Node.js](Node.js/)


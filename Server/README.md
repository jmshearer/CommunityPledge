# Various Server Options

Realtime data can be sent back to the server via JSONP (easiest method for doing so from potentially-statically-hosted files).  Below is a list of sample receivers for this data:

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


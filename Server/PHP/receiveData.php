<?php
header("Content-Type: application/javascript"); // Set response header for JSONP

// Get "callback" parameter for JSONP
$callback = isset($_GET['callback']) ? $_GET['callback'] : null;

// Get the "option" parameter
$option = isset($_GET['option']) ? $_GET['option'] : '';

// Check if "callback" parameter is provided (required for JSONP)
if ($callback) {
    // Process the "option" data (e.g., log it to a file)
    $logEntry = date('Y-m-d H:i:s') . " - Option: " . $option . PHP_EOL;
    file_put_contents('data.log', $logEntry, FILE_APPEND);

    // Prepare JSONP response
    $response = array("message" => "Data received", "option" => $option);
    echo $callback . '(' . json_encode($response) . ');';
} else {
    // If no callback is provided, return an error message
    echo 'console.error("JSONP callback parameter missing");';
}
?>

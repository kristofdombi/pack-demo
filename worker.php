<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://api.weather.gov/',
    'timeout'  => 20.0,
]);

$i = 1;
while(true) {
  $response = $client->request('GET', 'gridpoints/TOP/31,80/forecast');
  echo "\nI'm a php worker. Fetching weather from API. count: " . $i;
  echo "\nStatus code: " . $response->getStatusCode();
  echo "\nENV VAR: " . getenv('RUNTIME');
  sleep(5);
  $i++;
}

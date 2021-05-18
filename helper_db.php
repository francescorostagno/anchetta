<?php
$db = new SQLite3('anchetta.db');

$version = $db->querySingle('SELECT SQLITE_VERSION()');

echo $version . "\n";
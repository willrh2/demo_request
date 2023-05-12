<?php
// Database credentials
$servername = "sql312.epizy.com";
$username = "epiz_34098531";
$password = "mannswillrh2";
$dbname = "epiz_34098531_database1";

// Create database connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $branch = $_POST['branch'];
    $salesman = $_POST['salesman'];
    $brand = $_POST['brand'];
    $machine = $_POST['machine'];
    $machinePurpose = $_POST['machinePurpose'];
    $additionalEquipment = $_POST['additionalEquipment'];
    $date = $_POST['date'];
    $contactName = $_POST['contactName'];
    $farmName = $_POST['farmName'];
    $address = $_POST['address'];
    $postcode = $_POST['postcode'];
    $phoneNumber = $_POST['phoneNumber'];
    $officeNumber = $_POST['officeNumber'];
    $email = $_POST['email'];

    // Prepare SQL statement
    $sql = "INSERT INTO machine_requests (branch, salesman, brand, machine, machine_purpose, additional_equipment, date_required, contact_name, farm_name, address, postcode, phone_number, office_number, email)
    VALUES ('$branch', '$salesman', '$brand', '$machine', '$machinePurpose', '$additionalEquipment', '$date', '$contactName', '$farmName', '$address', '$postcode', '$phoneNumber', '$officeNumber', '$email')";

    // Execute SQL statement
    if (mysqli_query($conn, $sql)) {
        // Email notification
        $to = 'willrh2@gmail.com';
        $subject = 'New Machine Request from ' . $farmName;
        $message = 'Branch: ' . $branch . "\r\n" .
            'Salesman: ' . $salesman . "\r\n" .
            'Brand: ' . $brand . "\r\n" .
            'Machine: ' . $machine . "\r\n" .
            'Machine Purpose: ' . $machinePurpose . "\r\n" .
            'Additional Equipment: ' . $additionalEquipment . "\r\n" .
            'Date Required: ' . $date . "\r\n" .
            'Contact Name: ' . $contactName . "\r\n" .
            'Farm Name: ' . $farmName . "\r\n" .
            'Address: ' . $address . "\r\n" .
            'Postcode: ' . $postcode . "\r\n" .
            'Phone Number: ' . $phoneNumber . "\r\n" .
            'Office Number: ' . $officeNumber . "\r\n" .
            'Email: ' . $email . "\r\n";
        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        mail($to, $subject, $message, $headers);

        // Success message
        echo 'Thank you for submitting the form!';
    } else {
        // Error message
        echo 'Sorry, there was an error submitting your request. Please try again later.';
    }

    // Close database connection
    mysqli_close($conn);
}
?>

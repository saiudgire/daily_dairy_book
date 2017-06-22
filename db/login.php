<?php
@include('db.php');

$showData = "SELECT * FROM user_table where username='admin' && password='admin'";
$data = array();
$result = mysqli_query($conn, $showData);

if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
		$data[] = $row;
	}
} else {
	echo "0 results";
};

print json_encode($data);
mysqli_close($conn);
?>
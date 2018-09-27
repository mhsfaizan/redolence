<?php
	require_once("db-connect.php");
	class App extends Conn{
		private static $conn;
		public static function setConnect(){
			self::$conn = self::connect();
		} 
		public static function getGall(){
			$sql = "SELECT * FROM gallery ORDER BY gallery_id DESC";
			echo json_encode(self::queryrun($sql));
		}
		public static function queryrun($sql){
			$arr = array();
			if($res = self::$conn->query($sql)){
				if($res->num_rows>0){
					while($row = $res->fetch_assoc()){
						array_push($arr, $row);
					}
					$resp['data'] = $arr;
					$resp['status'] = "ok";
				}
				else{
					$resp['data']="no rows found";
					$resp['status'] = "no";
				}
			}
			else{
				$resp['data']="query error";
				$resp['status'] = "no";
			}
			return $resp;
		}
	}
	App::setConnect();
?>


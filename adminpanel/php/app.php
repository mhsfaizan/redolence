<?php
	require_once("db-connect.php");
	class App extends Conn{
		private static $conn;
		public static function setConnect(){
			self::$conn = self::connect();
		} 
		public static function login($post){
			$username = self::$conn->real_escape_string($post['username']);
			$password = self::$conn->real_escape_string($post['password']);
			$sql = "SELECT username,admin_id FROM admin WHERE username='$username' AND password='$password'";
			$queryRes = self::queryrun($sql);
			echo json_encode($queryRes);
		}
		public static function uploadGallery($file,$post){
			$title = $post['title'];
			$desc = $post['description'];
			$ext = explode(".",$file['name']);
			$ext = strtolower(end($ext));
			$filename = rand(0,2000).".".$ext;
			if(move_uploaded_file($file['tmp_name'],"../../gallery/".$filename)){
				$sql = "INSERT INTO gallery(title,description,images) VALUES('$title','$desc','$filename')";
				if(self::$conn->query($sql)){
					$resp['data'] = "succefully updated";
					$resp['status'] = "ok";
				}
				else{
					$resp['data']="query error";
					$resp['status'] = "no";
				}
			} 
			else{
				$resp['data']="file error";
				$resp['status'] = "no";
			}
			echo json_encode($resp);
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


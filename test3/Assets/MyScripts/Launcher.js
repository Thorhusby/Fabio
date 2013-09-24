#pragma strict

var projectileObject : GameObject;
var timer : float = 0.0;
var shotPerSec : float = 1.0;

function Start () {

	

}

function Update () {

	timer += 1.0 * Time.deltaTime;
	
	if (Input.GetMouseButton(0) && timer > 1/shotPerSec){
		fire();
		timer = 0.0;
	}

}
function fire(){
		var faceDir:int;
		if(GetComponent(FPSInputControllerHorizontal).faceRight)
			faceDir = 1;
		else
			faceDir = -1;
		
		var vectDir:Vector3 = Vector3(transform.position.x + faceDir, transform.position.y, transform.position.z);
		
		var projectile : GameObject = Instantiate(projectileObject, vectDir , transform.rotation);
		var fireDirection:Vector3;

		projectile.GetComponent(Projectile).faceDirection = Vector3(vectDir.x + faceDir, vectDir.y, vectDir.z);
		Destroy(projectile, 5);
		
}
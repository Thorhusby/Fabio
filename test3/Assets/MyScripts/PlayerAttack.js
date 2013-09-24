#pragma strict

var direction : Vector3;
var inputCont:FPSInputControllerHorizontal;

function Start () {

	inputCont = GetComponent(FPSInputControllerHorizontal);

}

function Update () {
	if(inputCont.faceRight){
		direction = Vector3.right;
	}
	else{
		direction = Vector3.left;
	}

	if(Input.GetKeyDown("f")){

		var attackRayHit : RaycastHit;
		var attackRay = Physics.Raycast(transform.position, direction, attackRayHit, 1);
		
		if(attackRay){
			if(attackRayHit.collider != null){
				attackRayHit.collider.SendMessage("attacked");
			}
		}
	}
	Debug.DrawRay(transform.position, direction * 1, Color.green, 0);

}
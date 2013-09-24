#pragma strict

var faceDirection : Vector3;
var speed : float = 5;

function Start () {

	transform.LookAt(faceDirection);

}

function Update () {

		transform.Translate(Vector3.forward * speed * Time.deltaTime);

}

function OnTriggerEnter (collider : Collider)
{
	collider.gameObject.SendMessage("attacked");
	Destroy(gameObject);
}

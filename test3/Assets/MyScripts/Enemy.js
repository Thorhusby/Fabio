#pragma strict
var health:int = 3;

function Start () {

}

function Update () {

}

function attacked ()
{
	renderer.material.color = Color.blue;
	yield WaitForSeconds(0.05);
	renderer.material.color = Color.white;
	health--;
	if(health <= 0)
		Destroy(gameObject);
}

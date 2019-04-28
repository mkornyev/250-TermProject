/* JavaScript Document */
/* Big Skinny About Pages
   Created by David Domalik for the Information Systems Milieux Web Development
   Term Project on 4/29/2019 */

/* Validates form on contact page */
function validate() {
	console.log("here");
	var txtZipcode = $("#txtZipcode").val();
	if(txtZipcode.length != 5) {
		alert("Zip code is not valid. Must be exactly five digits.");
		return false;
	}
}
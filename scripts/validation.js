function validateForm() {
		var form = document.getElementById("email_form");
		var email =  document.getElementById("email");
		var emailPattern =  /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		var validInput = [false, false, false, false];
			
		// Check all fields, set validInput and border color
		for (var i = 0; i < form.length - 1; i++) {
			form[i].style.border = "2px solid #FF0000";
			if ((form[i].value.length > 0) && !(i == 1)) {
				form[i].style.border = "1px solid #00AA00";
				validInput[i] = true;
			}
			else if (i == 1) {
				if (emailPattern.test(email.value)) {
					form[i].style.border = "1px solid #00AA00";
					validInput[i] = true;
				}
			}
		}
		// Check if any of the output is invalid
		for (var i = 0; i < form.length - 1; i++) {
			if (!validInput[i])
				return false;
		}
		return true;
	}
}
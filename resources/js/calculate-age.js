
function calculateAge (birthDate, otherDate) {
	birthDate = new Date(birthDate);
	otherDate = new Date(otherDate);

	var years = (otherDate.getFullYear() - birthDate.getFullYear());

	if (otherDate.getMonth() < birthDate.getMonth() ||
    otherDate.getMonth() == birthDate.getMonth()
    && otherDate.getDate() < birthDate.getDate()) {
    years--;
	}

	return years;
}

var x = document.getElementsByClassName("calculate-age");
for(var i = 0; i < x.length; i++)
{
  x[i].innerText = calculateAge("03/27/1998", new Date());
}

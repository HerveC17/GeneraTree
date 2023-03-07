<dialog id="namesDialog" class="roundbox boxshadow"
    style="width: 400px; height: 250px; border: solid 2px black; padding:0">
    <form method="dialog">
      <div class="gridheader roundbox-top">
        Name database management
      </div>
      <div class="roundbox-bottom" style="background: #dedadb; width: 400px; height: 223px">
        <p class="smallAndGrey">
          This name was not found in my database.
          You can skip or add this name to my database specifiying
          whether it is a male/female given name or a family name.
          If you click on it, you may change a typographical error.
        </p>
        <!--- No label beside the editable text -->
        <!--- innerText will be initialized before showing the modal box-->
        <input type="text" class="nameFound" id="name"></label>
        <p class="smalltext" id="fullnameField">
          The full name field is:
        </p>
        <p class="smalltext" id="countryField">
          The event occured in
        </p>
      <div class="namesTypeBlock">
        <input type="checkbox" name="name" value="First Name" onclick=clickOnGiven() id="givenName">
        Given name<br>
        <input type="checkbox" name="name" value="Family Name" onclick=clickOnFamily() id="familyName">
        Family name<br>
      </div>
      <div class="namesRadioBlock">
        <input type="radio" name="gender" value="Female" id="genderFemale" checked>Female<br>
        <input type="radio" name="gender" value="Male" id="genderMale">Male<br>
        <input type="radio" name="gender" value="Unisex" id="genderUnisex">Unisex
      </div>
      <div style="text-align: center">
        <button autofocus type="button" id="nameSkipButton">Skip</button> <!-- onclick=skipNameToBase() -->
        <button type="button" id="nameAddButton">Add</button> <!-- onclick=addNameToBase() -->
      </div>
      </div>
    </form>
  </dialog>


    function generatePassword() {
      const length = parseInt(document.getElementById("length").value);

      const lowercase = "abcdefghijklmnopqrstuvwxyz";
      const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const symbols = "!@#$%^&*()_-+=";

      let allCharacters = lowercase + uppercase + numbers + symbols;

      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
      }

      document.getElementById("result").textContent = password;
    }
  
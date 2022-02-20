document.getElementById('submit')
    .addEventListener('click', () => {


        let nev = document.forms['panasz']['nev'].value;
        let id = document.forms['panasz']['id'].value;
        let email = document.forms['panasz']['email'].value;
        let tel = document.forms['panasz']['tel'].value;
        let tipus = document.forms['panasz']['tipus'].value;
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


         let services = document.forms['panasz']['service'];
         let object = document.forms['panasz']['object'].value;
         let message = document.forms['panasz']['message'].value;
         let servicesKivalasztott = [];
 
         // For ciklus a feltétekhez
 
         for (let index = 0; index < services.length; index++) {
             const element = services[index];
             if (element.type == 'checkbox' && element.checked == true) {
                 servicesKivalasztott.push(element.value);
             }
         }

        let minden_kitoltve = true;
        if (nev === '' ) {
            minden_kitoltve = false;
            alert('A név kitöltése kötelező!')
        }
        if (id === '') {
            minden_kitoltve = false;
            alert('Az azonosító megadása kötelező!')
        }
        if (email === '') {
            minden_kitoltve = false;
            alert('Az email kitöltése kötelező!')
        }
        if (tel === "" ) {
            minden_kitoltve = false;
            alert('A telefonszám megadása kötelező!')
        }
        if (tipus === "") {
            minden_kitoltve = false;
            alert('A probléma típusának megadása kötelező!')
        }
        if (object === "") {
            minden_kitoltve = false;
            alert('A tárgy megadása kötelező!')
        }
        if (message === "") {
            minden_kitoltve = false;
            alert('Üres üzenetet nem lehet beküldeni!')
        }
         
        if(email.search("@") && email.search(".")){
            minden_kitoltve = false;
            alert('Nem megfelelő az e-mail cím!')
        }

        if (minden_kitoltve == true){

            let felhasznalo = {
                nev: nev,
                id: id,
                email: email,
                tel: tel,
                tipus: tipus,
                services: servicesKivalasztott,
                object: object,
                message: message
              }

              console.log(felhasznalo)
        };
    });
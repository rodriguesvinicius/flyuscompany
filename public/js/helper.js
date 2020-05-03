function validate () {
    
    const person = document.getElementById('personType').value; 
    const social = document.getElementById('socialField');
    const name = document.getElementById('nameField');
    const cpf = document.getElementById('cpfField');
    const cnpj = document.getElementById('cnpjField');


    if (person == 0){
        social.style.display = 'none';
        name.style.display = 'block';
        cpf.style.display = 'block';
        cnpj.style.display = 'none';
    }else {
        social.style.display = 'block';
        name.style.display = 'none';
        cpf.style.display = 'none';
        cnpj.style.display = 'block';
    }

    

}

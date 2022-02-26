class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')
    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const camposValidos = this.ValidaCampos()
    const senhasValidas = this.senhasValidas()

    if (camposValidos && senhasValidas) {
      alert('Formulário enviado')
      this.formulario.submit()
    }
  }

  ValidaCampos() {
    let valida = true

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      let label = campo.previousElementSibling.innerText
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`)
        valida = false
      }
      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valida = false
      }
      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valida = false
      }
    }
    return valida
  }

  senhasValidas() {
    let valida = true

    const senha = this.formulario.querySelector('.senha')
    const repetirSenha = this.formulario.querySelector('.repetirsenha')

    if (senha.value !== repetirSenha.value) {
      this.criaErro(repetirSenha, `O valor precisa ser igual o de "Senha"`)
    }

    if (senha.value.lenght < 6 || senha.value.lenght > 12) {
      valida = false
      this.criaErro(senha, 'A senha precisa ter entre 6 e 12 caracteres')
    }
    return valida
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div)
  }

  validaUsuario(campo) {
    const usuario = campo.value
    let valid = true
    if (usuario.lenght < 3 || usuario.lenght > 12) {
      this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres')
      valid = false
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Usuario precisa conterapenas e/ou numeros')
    }
    return valid
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value)

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.')
      return false
    }

    return true
  }
}

const valida = new ValidaFormulario()
